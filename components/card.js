
import Image from "next/image"

function Card({ title }) {
    return (
        <div className="flex flex-col gap-1 p-2 rounded-sm bg-slate-100 text-slate-800">
            <div className="flex justify-between">
                <p>{ title }</p>
                <span>
                    <Image src="../edit.svg" width={20} height={20} alt="edit button"/>
                </span>
            </div>
            <div className="flex justify-between">
                <span>
                    <Image src="../comments.svg" width={20} height={20} alt="Comment button" />
                </span>
                <span>
                    <Image src="/avatar.png" width={20} height={20} alt="Profile photo" />
                </span>
            </div>
        </div>
    )
}

export default Card
