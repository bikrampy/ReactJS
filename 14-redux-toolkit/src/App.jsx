import products from "./products.json";
import "./App.css";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Counter from "./Components/Counter";
import Counterbuttons from "./Components/Counterbuttons";
function App() {
    return (
        <>
            <div>
                <Counter />
                <Counterbuttons />
            </div>
            <div className="App">
                <Cart />
                <div className="products">
                    {products.map((product) => (
                        <Product {...product} key={product.id} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
