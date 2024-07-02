import deleteIcon from '../icons/trash-can-regular.svg';
import updateIcon from '../icons/pen-to-square-regular.svg';

export default function Item() {
    return (
        <div className="item flex justify-between px-8 py-2 border-b border-b-gray-500">
            <div className="task-info flex">
            <input type="checkbox" />
            <div className="text ml-4">text</div>

            </div>
            <div className="icons flex">

                <img src={deleteIcon.src} className="w-5 h-5 mr-4"/>
                <img src={updateIcon.src} className="w-5 h-5" />
            </div>

        </div>
    )
}