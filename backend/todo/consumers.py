import json

from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer
from channels.layers import get_channel_layer


class TodoConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.group_name = "todo"
        self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        self.channel_layer.group_discard(self.group_name, self.channel_name)
        await  self.close()

    async def receive(self, text_data):
        print(text_data)
        response = json.loads(text_data)
        message = response["message"]

        await self.channel_layer.group_send(self.group_name,{"message": message})


    # async def send_group_message(self, event):
    #     message = event["message"]
    #     get_channel_layer().group_send(self.group_name, {"type": "send_message", "message": message})