import Item from "@/components/Item";


export default function Add() {
    return (
        <div className="container m-auto mt-40" style={{width:"600px"}}>
            <h1 className="text-center text-2xl text-violet-700 font-bold mb-10">Add new task</h1>
            <div className="items flex flex-col rounded-2xl shadow-lg p-8" style={{boxShadow: "1px 1px 16px rgb(0, 0, 0, 0.2)"}}>
                <input className=" h-12 rounded-md border border-violet-800 text-2xl px-4 border-2" type="text"/>
                <button className="bg-violet-700 text-white h-12 mt-4 rounded-md">Add</button>
            </div>
        </div>

    )
}