import { useState } from "react";
export default function App(){
    let [count, setCount] = useState(0);
    function addValue() {
        if (count < 20) {
            setCount((count) => count + 1);
        }
    }
    function removeValue() {
        if (count > 0) {
            setCount((count) => count - 1);
        }
    }
    return (
        <>
            <p>Count is: {count}</p>
            <button onClick={addValue}>Add Value</button>
            <button onClick={removeValue}>Remove Value</button>
        </>
    )
}