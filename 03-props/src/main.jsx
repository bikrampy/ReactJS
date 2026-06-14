import "./main.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <App>
        <h1>List of user</h1>
        <p>List of all users available in our database.</p>
    </App>,
);
