import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import Button from "./components/Button";

function App() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
                <Header name="Shreyosi" />
                <ul className="flex flex-col gap-3">
                    <ToDoItem name="Eat" />
                    <ToDoItem name="Code" />
                    <ToDoItem name="Sleep" />
                    <ToDoItem name="Repeat" />
                </ul>
                <Button text="Add Item" />
            </div>
        </div>
    );
}

export default App;
