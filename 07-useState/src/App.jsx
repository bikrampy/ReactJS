import { useState } from "react";
import SearchInput from "./Components/SearchInput";
import ProductList from "./Components/ProductList";
import Counter from "./Components/Counter";
import Person from "./Components/Person.jsx";

export default function App() {
    const [search, setSearch] = useState("");
    return (
        <>
            <SearchInput search={search} setSearch={setSearch} />
            <ProductList search={search} />
            <Counter />
            <Person />
        </>
    );
}
