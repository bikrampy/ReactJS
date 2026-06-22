import { useState } from "react";
export default function User() {
    let [user, setUser] = useState({
        name: "User",
        email: "user@mail.com",
        age: 18,
    });

    return (
        <>
            <h1>Name is: {user.name}</h1>
            <p>Email is: {user.email}</p>
            <p>Age is: {user.age}</p>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={(event) => {
                    setUser({ ...user, name: event.target.value });
                }}
            />
            <input
                type="text"
                name="email"
                value={user.email}
                onChange={(event) => {
                    setUser({ ...user, email: event.target.value });
                }}
            />
            <button
                onClick={() =>
                    setUser((prev) => ({
                        ...prev,
                        age: prev.age + 1,
                    }))
                }
            >
                Add +1 Age
            </button>
        </>
    );
}
