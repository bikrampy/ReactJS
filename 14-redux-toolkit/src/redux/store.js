import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import countReducer from "./slices/counterSlice";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        counter: countReducer,
    },
});
