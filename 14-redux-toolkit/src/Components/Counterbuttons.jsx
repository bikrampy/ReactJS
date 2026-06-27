import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/slices/counterSlice";

export default function Counterbuttons() {
    const dispatch = useDispatch();
    return (
        <>
            <button
                onClick={() => {
                    dispatch(increment());
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                Decrement
            </button>
            <button
                onClick={() => {
                    dispatch(reset());
                }}
            >
                Reset
            </button>
        </>
    );
}
