import { useEffect, useState } from "react";

export default function Component() {
    const [count, setCount] = useState(0);
    function addValue() {
        setCount(count + 1);
    }
    useEffect(() => {
        console.log("Component Mounted!");
        return function () {
            console.log("Component Unmounted!");
        };
    }, []);
    useEffect(() => {
        console.log("Count value is:", count);
        return function () {
            console.log("Count value is:", count);
        };
    }, [count]);
    return (
        <>
            <h1>Current Value: {count}!</h1>
            <button onClick={addValue}>Add Value</button>
        </>
    );
}
