import MainButton from "./MainButton";

export default function ListItem ({content}) {
    return (
        <li className='list-none flex justify-center bg-gray-600 w-1/3 mx-auto mt-5 rounded-2xl py-2.5'>
            <div className='flex justify-between gap-20 items-center w-full px-7 text-white'>
                <h1>{content}</h1>
                <div className='flex gap-5'>
                    <MainButton content='Add' className="bg-blue-500 "/>
                    <MainButton content='Delete' className="bg-red-500"/>
                </div>
            </div>

        </li>
    )
}