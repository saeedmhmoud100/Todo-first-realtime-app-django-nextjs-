

export default function AddNewTask(content: string, socket: WebSocket    ) {
    socket.send(JSON.stringify({"message":content, "event":"add"}));
    return;
}