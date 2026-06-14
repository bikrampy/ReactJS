import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [time]);
    return <h1>{time}</h1>;
}
