import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
function App() {
    const [count, setCount] = useState(0);
    let inputRef = useRef(null);
    let previousCount = useRef();
    useEffect(() => {
        previousCount.current = count;
    }, [count]);
    return (
        <>
            <div>
                <h2>
                    Current:
                    {count}
                </h2>
                {previousCount.current !== undefined ? (
                    <h2>
                        Previous:
                        {previousCount.current}
                    </h2>
                ) : (
                    <h2>No Previous Value Available</h2>
                )}
                <button
                    onClick={() => {
                        setCount((prev) => prev + 1);
                    }}
                >
                    +1
                </button>
            </div>
            <div>
                <input ref={inputRef} defaultValue="Uncontrolled Input" />
                <button
                    onClick={() => {
                        inputRef.current.focus();
                    }}
                >
                    Focus Input
                </button>
                <button
                    onClick={() => {
                        inputRef.current.select();
                        navigator.clipboard.writeText(inputRef.current.value);
                    }}
                >
                    Copy Input
                </button>
                <button
                    onClick={() => {
                        inputRef.current.value = "";
                    }}
                >
                    Clear Input
                </button>
            </div>
        </>
    );
}
export default App;
