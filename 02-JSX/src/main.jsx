import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const element = React.createElement("h1", null, "Hello React");
let websiteURL = "https://www.beingbifrons.shop";
let websiteLink = (
    <a href={websiteURL} target="_blank">
        Visit This Website
    </a>
);

createRoot(document.getElementById("root")).render(
    <div style={{ color: "white", backgroundColor: "black" }}>
        {element}
        <App />
        {websiteLink}
        <br />
    </div>,
);
