import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Counter Mounted!");
        return function () {
            console.log("Counter Unmounted!");
        };
    }, []);
    useEffect(() => {
        console.log("Count value while mounting is:", count);
        return function () {
            console.log("Count value while unmounting is:", count);
        };
    }, [count]);
    return (
        <>
            <h1>Current Value: {count}</h1>
            <button
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                Add Value
            </button>
        </>
    );
}
