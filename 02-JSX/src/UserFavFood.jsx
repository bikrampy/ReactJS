export default function UserFavFood() {
    let name = 'Shreyosi';
    let foods = ['Momos', 'Fuchka', 'Biriyani'];
    return (
        <>
        <h1>{name}'s favourite foods are:</h1>
        <ul style={{
            backgroundColor:'black',
            color:'pink'
        }}>
            {
                foods.map((food) => (
                    <li key={food}>{food}</li>
                ))
            }
        </ul>
        </>
    )
}