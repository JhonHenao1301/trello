

function List({ title, children }) {
    return (
        <div className="relative flex-1">
            <div className="absolute inset-0 flex flex-col flex-1 gap-4 p-4 text-gray-500 rounded-lg bg-slate-200">
                <div>
                    <h2 className="font-bold">{title}</h2>
                </div>
                <div className="flex flex-col gap-4 overflow-auto">
                    {children}
                </div>
                <div>
                    Add another card
                </div>
            </div>
        </div>
    )
}

export default List
