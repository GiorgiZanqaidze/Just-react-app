
export default function MainButton({content, className}) {


    const buttonClassName = "rounded-xl px-14 py-2 uppercase text-white font-bold " + className

    return (
        <button className={buttonClassName}>
            {content}
        </button>
    )
}