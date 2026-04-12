import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={
                <UserContextProvider>
                    <App />
                </UserContextProvider>
            }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
