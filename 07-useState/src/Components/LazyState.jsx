import { useState } from "react";

export default function LazyState() {
    function expensiveCalculation() {
        console.log("rendering...");
        return 1000;
    }
    let [count, setCount] = useState(() => expensiveCalculation());
    console.log(count);
    return (
        <>
            <h2>Count is: {count}</h2>
            <button
                onClick={() => {
                    setCount((prev) => prev + 1);
                    console.log(count);
                }}
            >
                Add Value
            </button>
            <button
                onClick={() => {
                    if (count > 0) {
                        setCount((prev) => prev - 1);
                        console.log(count);
                    }
                }}
            >
                Remove Value
            </button>
        </>
    );
}
