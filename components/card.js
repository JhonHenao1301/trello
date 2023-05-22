
'use client'
import Image from "next/image"

function Card({ title, user, comments = [], id, setDragged }) {
    function handleDragStart(event) {
        setDragged({
            data: {
                title,
                user,
                comments,
                id,
            },
            list: event.target.closest('[data-id]').dataset.id
        })
    }
    return (
        <div draggable onDragStart={handleDragStart} className="flex flex-col gap-3 p-2 rounded-md bg-white text-slate-800">
            <div className="flex justify-between">
                <p>{ title }</p>
                <span>
                    <Image src="../edit.svg" width={20} height={20} alt="edit button"/>
                </span>
            </div>
            <div className="flex justify-between">
                <span className="flex gap-1 items-center">
                    <Image src="../comments.svg" width={20} height={20} alt="Comment button" />
                    { comments.length > 0 ? comments.length : null}
                </span>
                <span>
                    <Image src={user.avatar} width={20} height={20} alt="Profile photo" />
                </span>
            </div>
        </div>
    )
}

export default Card
