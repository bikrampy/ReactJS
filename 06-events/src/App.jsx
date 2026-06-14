function App() {
    const users = [
        { id: 1, name: "Biki" },
        { id: 2, name: "Shreyyy" },
        { id: 3, name: "Sunu" },
    ];
    function handleClick(event) {
        console.log(event.target);
        console.log(event.type);
    }
    function handleChange(event) {
        console.log(event.target.value);
    }
    function handleGreet(name) {
        alert(name);
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert("Submitted");
    }
    return (
        <>
            <button type="button" onClick={handleClick}>
                Click Me
            </button>
            <input onChange={handleChange} />
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <button onClick={() => handleGreet(user.name)}>
                            Greet
                        </button>
                    </div>
                );
            })}
            <div onClick={() => alert("Div")}>
                <button
                    onClick={(event) => {
                        event.stopPropagation();
                        alert("Button");
                    }}
                >
                    Click Me
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <button>Submit</button>
            </form>
        </>
    );
}

export default App;
