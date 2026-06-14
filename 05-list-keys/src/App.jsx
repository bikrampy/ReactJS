import ListFruitItems from "./Components/ListFruitItems";
function App() {
    const fruits = [
        { id: 1, name: "Apple" },
        { id: 2, name: "Mango" },
        { id: 3, name: "Orange" },
    ];
    return (
        <ul>
            {fruits.map((fruit) => {
                return <ListFruitItems key={fruit.id} fruit={fruit.name} />;
            })}
        </ul>
    );
}

export default App;
