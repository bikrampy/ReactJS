export default function App() {
    let name = "Shreyosi";
    let movies = [<li key="yjhd">YJHD</li>, <li key="barfi">Barfi</li>];
    let foods = ["Momos", "Fuchka", "Biriyani"];
    return (
        <>
            <h1>{name}'s favourite foods are:</h1>
            <ul>
                {foods.map((food) => (
                    <li key={food} className="list-item">
                        {food}
                    </li>
                ))}
            </ul>
            <h1>{name}'s favourite movies are:</h1>
            <ul>{movies}</ul>
        </>
    );
}
