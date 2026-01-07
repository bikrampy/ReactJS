import { useState } from "react";
import UserContext from "./UserContext";

export default function UserContextProvider({children}) {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    return(
        <UserContext.Provider value={{username, setUsername, password, setPassword}}>
            {children}
        </UserContext.Provider>
    )
}