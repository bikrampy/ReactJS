import { useState } from "react";
import { useEffect } from "react";
import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import "./App.css";
export default function App() {
    const [countervisible, setCounterVisible] = useState(true);
    const [timervisible, setTimerVisible] = useState(true);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });
    useEffect(() => {
        console.log("App Mounted!");
    }, []);
    useEffect(() => {
        async function getUsers() {
            const response = await fetch(
                "https://api.github.com/users/bikrampy",
            );
            const data = await response.json();
            console.log(data);
        }
        getUsers();
    }, []);
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    return (
        <main className="app-container">
            <button
                onClick={() =>
                    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
                }
                className="theme-toggle-btn"
            >
                Switch to {theme === "dark" ? "Light" : "Dark"} Mode
            </button>
            {timervisible ? <Timer /> : <></>}
            <button
                onClick={() => {
                    setTimerVisible((prev) => !prev);
                }}
            >
                {timervisible ? "Clear Timer" : "Start Timer"}
            </button>
            {countervisible ? <Counter /> : <></>}
            <button
                onClick={() => {
                    setCounterVisible((prev) => !prev);
                }}
            >
                {countervisible ? "Unmount" : "Mount"}
            </button>
        </main>
    );
}
