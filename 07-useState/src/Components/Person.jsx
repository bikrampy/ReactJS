import { useState } from "react";
export default function Person() {
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    const fullName = `${firstname}
     ${lastname}`;

    return (
        <>
            <h1>{fullName}</h1>
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>
                Total Character Counters, Firstname: {firstname.length},
                Lastname: {lastname.length}
            </p>
            <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={(event) => {
                    setFirstname(event.target.value);
                }}
            />
            <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={(event) => {
                    setLastname(event.target.value);
                }}
            />
        </>
    );
}
