import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Current theme is: {theme}</h1>
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button>
        </div>
    );
}
