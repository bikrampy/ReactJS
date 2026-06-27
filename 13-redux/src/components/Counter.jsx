import { useSelector } from "react-redux";

export default function Counter() {
    const count = useSelector((state) => state.count);
    return (
        <>
            <p>{count}</p>
        </>
    );
}
