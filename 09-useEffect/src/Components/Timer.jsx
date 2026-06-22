import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log("Timer Mounted!");
        return function () {
            console.log("Timer Unmounted!");
        };
    }, []);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
        document.title = `Timer ${time}`;
        return () => {
            clearInterval(timer);
            document.title = `Document`;
        };
    }, [time]);
    return <h1>{time}</h1>;
}
