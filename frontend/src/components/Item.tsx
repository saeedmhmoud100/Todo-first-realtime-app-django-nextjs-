import deleteIcon from '../icons/trash-can-regular.svg';
import updateIcon from '../icons/pen-to-square-regular.svg';
import Link from "next/link";

export default function Item({id}:{id: number}) {
    return (
        <div className="item flex justify-between px-8 py-2 border-b border-b-gray-500">
            <div className="task-info flex items-center">
            <input type="checkbox" className="w-4 h-4"/>
            <div className="text ml-4">text</div>

            </div>
            <div className="icons flex">

                <img src={deleteIcon.src} className="w-5 h-5 mr-4 cursor-pointer"/>
                    <Link href={`update/${id}`}><img src={updateIcon.src} className="w-5 h-5 cursor-pointer" /></Link>
            </div>

        </div>
    )
}