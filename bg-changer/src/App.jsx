import { useState } from "react";

const COLORS = ["pink", "green", "blue", "yellow", "purple", 'black', 'white'];

export default function App() {
    const [bgcolor, setColor] = useState(COLORS[0]);
    function onButtonClick(color) {
        setColor(color);
    }

    return (
        <>
            <div
                className="flex justify-around items-center flex-wrap w-screen h-screen transition-all duration-100 ease-in"
                style={{ backgroundColor: bgcolor }}
            >
                {COLORS.map((color) => (
                    <button
                        type="button"
                        key={color}
                        onClick={() => onButtonClick(color)}
                        className={`px-8 py-4 text-2xl font-semibold rounded-lg transition-all duration-100 ease-in-out cursor-pointer shadow-xl hover:shadow-2xl bg-white ${bgcolor === color ? "outline-[5px] outline-black" : ""}`}
                    >
                        {color.toUpperCase()}
                    </button>
                ))}
            </div>
        </>
    );
}
