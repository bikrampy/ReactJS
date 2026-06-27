import { useSelector } from "react-redux";

export default function Counter() {
    const count = useSelector((state) => state.counter.count);
    return <p>Count is: {count}</p>;
}
