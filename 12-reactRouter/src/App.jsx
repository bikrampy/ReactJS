import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import Githubold from "./components/GithubOld";
import Github from "./components/Github";

import MainLayout from "./layouts/MainLayout";

import githubloader from "./githubLoader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            {
                path: "github",
                element: <Github />,
                loader: githubloader,
            },
        ],
    },
    { path: "product/:id", element: <Product /> },
    { path: "user", element: <Githubold /> },
    { path: "*", element: <NotFound /> },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
