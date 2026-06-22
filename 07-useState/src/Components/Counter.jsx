import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [history, setHistory] = useState([]);
    return (
        <div
            style={{
                backgroundColor: isDarkMode ? "#222" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
                minHeight: "100vh",
            }}
        >
            <button
                onClick={() => {
                    setIsDarkMode((prev) => !prev);
                }}
            >
                Switch To {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <h2>Count is: {count}</h2>
            {history.length > 0 && (
                <div>
                    {history.map((item, index) => {
                        return <span key={index}>{item}</span>;
                    })}
                </div>
            )}
            <button
                onClick={() => {
                    const newCount = count + 1;
                    setCount(newCount);
                    setHistory((prev) => [...prev, newCount]);
                }}
            >
                Add Value
            </button>
            <button
                onClick={() => {
                    if (count > 0) {
                        const newCount = count - 1;
                        setCount(newCount);
                        setHistory((prev) => [...prev, newCount]);
                    }
                }}
            >
                Remove Value
            </button>
            <button
                onClick={() => {
                    setCount(0);
                    setHistory([]);
                }}
            >
                Reset
            </button>
        </div>
    );
}
