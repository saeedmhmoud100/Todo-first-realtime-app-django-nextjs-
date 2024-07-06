"use client";
import deleteIcon from '../icons/trash-can-regular.svg';
import updateIcon from '../icons/pen-to-square-regular.svg';
import Link from "next/link";
import {useState} from "react";
import {ChangeTaskStatus, DeleteTask} from "@/hooks/serverActions";
import {useSocket} from "@/hooks/useSocket";

export default function Item({pk,content,completed}:{id: number,content:string,completed:boolean}) {
    const {socket} = useSocket();

    const handleCheckChange : (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
        ChangeTaskStatus(pk,socket);
    }

    const handleDelete : (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void = () => {
        DeleteTask(pk,socket);
    }


    return (
        <div className="item  flex justify-between px-8 py-2 border-b border-b-gray-500">
            <div className="task-info flex items-center">
            <input type="checkbox" className={`w-4 h-4`} onChange={e=> handleCheckChange(e)} checked={completed}/>
            <div className={`item-text text ml-4`}>{content} <span className='line' style={completed? {width:"336px"} : {}}></span></div>

            </div>
            <div className="icons flex">

                <img src={deleteIcon.src} className="w-5 h-5 mr-4 cursor-pointer" onClick={_=> handleDelete() }/>
                <Link href={`update/${pk}`}><img src={updateIcon.src} className="w-5 h-5 cursor-pointer" /></Link>
            </div>

        </div>
    )
}