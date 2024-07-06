"use client";

import {useParams, useRouter} from "next/navigation";
import Link from "next/link";
import {UpdateTask} from "@/hooks/serverActions";
import {useEffect, useRef, useState} from "react";
import {useSocket} from "@/hooks/useSocket";

export default function Page() {
    const {id}:{id} = useParams();
    const ref = useRef(null);
    const {socket,data} = useSocket();
    const [value, setValue] = useState<string>("");
    const {push} = useRouter();

    useEffect(() => {
        console.log(data)
        if(data[0]){
            setValue(data[0]?.find(item => item.pk == id).fields?.content)
        }
    },[socket])

    const handleClick = () => {
        UpdateTask(id, ref.current.value, socket);
        push("/");
    }

    return (
        <div className="container m-auto mt-40" style={{width: "600px"}}>
            <h1 className="text-center text-2xl text-violet-700 font-bold mb-10">update task({id})</h1>
            <div className="items flex flex-col rounded-2xl shadow-lg p-8"
                 style={{boxShadow: "1px 1px 16px rgb(0, 0, 0, 0.2)"}}>
                <input value={value} onChange={e => setValue(e.target.value)} ref={ref} className=" h-12 rounded-md border border-violet-800 text-2xl px-4 border-2" type="text"/>
                <button onClick={_=>handleClick()} className="bg-violet-700 text-white h-12 mt-4 rounded-md">Update</button>
                <Link href="/" className=" w-full"><button className=" w-full bg-gray-700 text-white h-12 mt-4 rounded-md">Cancel</button></Link>
            </div>
        </div>

    )
}