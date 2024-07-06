"use client";
import {redirect, useParams, useRouter} from "next/navigation";
import xIcon from '../../../../icons/x-solid.svg'
import {useEffect, useRef, useState} from "react";
import {UpdateTask} from "@/hooks/serverActions";
import {useSocket} from "@/hooks/useSocket";
import {WebSocket} from "undici-types";

export default function Modal() {
    const router = useRouter()
    const {id}: {id} = useParams();
    const ref = useRef(null);
    const {socket,data} = useSocket();
    const [value, setValue] = useState<string>("");
    const exitIcon = useRef(null);
    console.log(data)
    useEffect(() => {
        if(data[0]){
            setValue(data[0]?.find(item => item.pk == id).fields?.content)
        }
    },[])

    function handleHide(e){
        e.stopPropagation()
        if(e.target.classList.contains("modal-close")){
            router.back();
        }
    }

    const handleClick = () => {
        UpdateTask(id, ref.current.value, socket);
        router.back();
    }


    return(
        <div className="modal modal-close" id="modal" onClick={e => handleHide(e)}>
            <div ref={exitIcon} className="container m-auto mt-40" style={{width:"600px",zIndex:"3"}}>
                <div className="items flex flex-col rounded-2xl shadow-lg p-8 bg-white" style={{boxShadow: "1px 1px 16px rgb(0, 0, 0, 0.2)"}}>
                    <div className="flex "><img src={xIcon.src}  className="modal-close w-4 h-4 cursor-pointer" onClick={e => handleHide(e)}/> </div>
                    <h1 className="text-center text-2xl text-violet-700 font-bold mb-10">Update Task ({id})</h1>
                    <input value={value} onChange={e => setValue(e.target.value)} ref={ref} className=" h-12 rounded-md border border-violet-800 text-2xl px-4 border-2" type="text"/>
                    <button onClick={_=> handleClick()} className="bg-violet-700 text-white h-12 mt-4 rounded-md">Update</button>
                </div>
            </div>
        </div>
    )
}