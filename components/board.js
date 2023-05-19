
import List from "./list"
import Card from "./card"

function Board() {
    return (
        <div className="flex flex-col flex-1 gap-4 p-4"> 
            <div>
                <h1 className="text-2xl font-bold">
                    Develop
                </h1>
            </div>
            <main className="flex flex-1 gap-6">
                <List title='TODO'>
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                    <Card title="Implement modal" />
                </List>
                <List />
                <List />
            </main>
        </div>
    )
}

export default Board
