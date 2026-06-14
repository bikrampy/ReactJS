import { useState } from "react";
export default function Counter() {
    let [count, setCount] = useState(0);
    let val = count % 2 === 0 ? "Even" : "Odd";
    function addValue() {
        setCount((count) => count + 1);
    }
    function removeValue() {
        if (count > 0) {
            setCount((count) => count - 1);
        }
    }

    return (
        <>
            <h2>Count is: {count}</h2>
            <h2>Number is: {val}</h2>
            <button onClick={addValue}>Add Value</button>
            <button onClick={removeValue}>Remove Value</button>
        </>
    );
}
