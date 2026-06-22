import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import Githubold from "./components/GithubOld";
import MainLayout from "./layouts/MainLayout";
import Github from "./components/Github";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="github" element={<Github />} />
            </Route>
            <Route path="product/:id" element={<Product />} />
            <Route path="/user" element={<Githubold />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
