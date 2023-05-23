
import Image from "next/image"

function AddCard({ setAddCard }) {

    function handleSubmit() {
        setAddCard({
            active: false,
            data: {
                title: form.get('title')
            }
        })
    }

    function handleCloseClick() {
        setAddCard({ active: false, data: null })
    }
    return (
        <form onSubmit={handleSubmit} className="flex-col flex gap-2">
            <div className="flex bg-white p-2 gap-1 rounded" >
                <input name="title" className="flex-1 outline-none bg-white" type="text" placeholder="Add a title for this card" />
                <Image src="/edit.svg" alt="" width="24" height="24" className="relative top-0 right-4 items-center"/>
            </div>
            <div className="flex gap-4 items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm" >
                    Add Card
                </button>
                <button className="h-6 cursor-pointer" onClick={handleCloseClick}>
                    <Image src="/cancel.svg" alt="" width="20" height="20" />
                </button>
            </div>
       </form>
    )
}

export default AddCard
