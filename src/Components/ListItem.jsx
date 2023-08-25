import MainButton from "./MainButton";
import { useDispatch} from "react-redux";
import {ListItemsActions} from "../store/list-items";

export default function ListItem ({content, id}) {

    const dispatch = useDispatch()
    const deleteItem = () => {
        console.log('sds')
        dispatch(ListItemsActions.deleteItem(id))
    }


    return (
        <li className='list-none flex justify-center bg-gray-600 w-1/3 mx-auto mt-5 rounded-2xl py-2.5'>
            <div className='flex justify-between gap-20 items-center w-full px-7 text-white'>
                <h1>{content}</h1>
                <div className='flex gap-5'>
                    <MainButton content='Delete' className="bg-red-500" onClick={deleteItem}/>
                </div>
            </div>
        </li>
    )
}