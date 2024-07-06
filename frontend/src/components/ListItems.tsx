"use client";
import Item from "@/components/Item";

import {useSocket} from "@/hooks/useSocket";


export default function ListItems() {
    const {data} = useSocket();
    return (
        <div className="items flex flex-col py-4 rounded-2xl shadow-lg overflow-y-auto" style={{boxShadow: "1px 1px 16px rgb(0, 0, 0, 0.2)",height:"450px"}}>

            {
                data[0]?.map((item, index) => (
                    <Item key={item.pk} pk={item.pk} content={item.fields?.content} completed={item.fields?.completed}/>
                ))
            }

        </div>

        )

}