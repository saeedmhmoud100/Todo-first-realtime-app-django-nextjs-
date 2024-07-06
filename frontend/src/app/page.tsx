"use client";
import addIcon from '../icons/plus-solid.svg';
import ListItems from "@/components/ListItems";
import Link from "next/link";
import {useEffect, useState} from "react";
import {useSocket} from "@/hooks/useSocket";


export default function Home() {

    const {socket,data} = useSocket();
    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                console.log("Received data:", event.data);
                // You can parse the data if it's JSON or handle it as needed
            }
        }
    }, [socket]);

    console.log("Data:", data)
    return (
    <main className="container flex flex-col m-auto items-center mt-20">
      <div style={{width:"500px"}}>
          <h1 className="text-center text-2xl text-violet-700 font-bold mb-10">Todo app</h1>

          <div className="add-button p-2 cursor-pointer mb-8 w-max" style={{boxShadow: "1px 1px 16px rgb(0, 0, 0, 0.2)"}}>
              <Link href="/add" ><img src={addIcon.src} style={{width:"20px", height:"20px"}}/> </Link>
          </div>

            <ListItems />
      </div>
    </main>
  );
}
