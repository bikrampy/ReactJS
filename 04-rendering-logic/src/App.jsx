import User from "./components/User";
import { useState } from "react";
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    let name = "Bikram Saha";
    return (
        <>
            <User
                loading={false}
                name={name}
                isLoggedIn={loggedIn}
                setisLoggedIn={() => setLoggedIn(!loggedIn)}
                age={18}
                isAdmin={false}
            />
        </>
    );
}

export default App;
