
'use client'
import Image from "next/image"

function List({ title, children, handleDrop, id }) {
    function handleDragOver(event) {
        event.preventDefault()
    }
    return (
        <div data-id={id} className="relative flex-1" onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className="absolute inset-0 flex flex-col flex-1 gap-4 p-4 text-gray-500 rounded-lg bg-slate-200">
                <div>
                    <h2 className="font-bold">{title}</h2>
                </div>
                <div className="flex flex-col gap-4 overflow-auto">
                    {children}
                </div>
                <div className="flex flex-col gap-1 relative">
                    <input type="Text" placeholder="Add a new title for this card" className="rounded-md p-2 text-sm" />
                    <Image src="/edit.svg" width={20} height={20} className="absolute top-2 right-2 items-center" alt="edit icon"/>
                </div>
                <div>
                    <span className="flex gap-3">
                        <Image src="/plus-solid.svg" width={14} height={14} alt="Add button" />
                        Add another card
                    </span>
                </div>
            </div>
        </div>
    )
}

export default List
