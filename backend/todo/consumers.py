import json

from asgiref.sync import sync_to_async, async_to_sync
from channels.db import database_sync_to_async
from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer
from channels.layers import get_channel_layer
from django.core.serializers import serialize

from todo.models import Todo


class TodoConsumer(WebsocketConsumer):
    def connect(self):
        self.group_name = "todo"
        async_to_sync(self.channel_layer.group_add)(self.group_name, self.channel_name)
        self.accept()
        serialized_todos = serialize("json", async_to_sync(self.get_all_todos)(), fields=("content", "completed"))
        async_to_sync(self.channel_layer.group_send)(self.group_name,
                                                     {"type": "send_message", "message": serialized_todos})

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(self.group_name, self.channel_name)
        self.close()

    def receive(self, text_data):
        data = json.loads(text_data)
        event = data.get("event")
        content = data.get("message")
        if event == "add" and content:
            self.add_todo(content)
            # send for only this client
            # self.send(text_data="added")
            serialized_todos = serialize("json",async_to_sync(self.get_all_todos)())
            # call send_message method to send message to all clients
            async_to_sync(self.channel_layer.group_send)(self.group_name, {"type": "send_message", "message": serialized_todos})
    def send_message(self, event):
        message = event["message"]
        self.send(text_data=json.dumps(message))

    @database_sync_to_async
    def get_all_todos(self):
        todos = Todo.objects.all()
        return todos

    @database_sync_to_async
    def add_todo(self, content):
        Todo.objects.create(content=content)

    # async def send_group_message(self, event):
    #     message = event["message"]
    #     get_channel_layer().group_send(self.group_name, {"type": "send_message", "message": message})
