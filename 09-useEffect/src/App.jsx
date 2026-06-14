import { useState } from "react";
import Component from "./Component";
import Timer from "./Timer";

export default function App() {
    const [visible, setVisible] = useState(true);
    function toggle() {
        setVisible(!visible);
    }

    return (
        <>
            <Timer />
            {visible ? <Component /> : <></>}
            <button onClick={toggle}>Toggle</button>
        </>
    );
}
