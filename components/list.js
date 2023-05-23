
'use client'
import Image from "next/image"
import AddCard from "./add-card"
import { useState } from "react"

function List({ title, children, handleDrop, id }) {

    const [ addCard, setAddCard ] = useState({
        active: false,
        data: null
    })
    function handleDragOver(event) {
        event.preventDefault()
    }
    function handleAddCardEvent(event) {
        event.preventDefault()
        setAddCard({ active: true, data: null })
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
                {
                    addCard.active ? <AddCard setAddCard={ setAddCard}/> :
                    <div>
                        <span className="flex gap-3 hover:cursor-pointer" onClick={handleAddCardEvent}>
                            <Image src="/plus-solid.svg" width={14} height={14} alt="Add button" />
                            Add another card
                        </span>
                    </div>
                }
            </div>
        </div>
    )
}

export default List
