"use client";

import { useEffect, useState, createContext, useContext, Dispatch, SetStateAction } from "react";




export const SocketContext = createContext<WebSocket | null>(null);


export const GlobalContextProvider = ({children}) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000/ws/todo/');
        setSocket(ws);
    }, []);

    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                setData([JSON.parse(JSON.parse(event.data))])
            }
        }
    }, [socket]);

    return (
        <SocketContext.Provider value={{socket, setSocket, data, setData}}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => {
    return useContext(SocketContext);
}