export default function Button(props) {
    return (
        <button className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-medium py-3 px-4 rounded-xl transition-all duration-200 active:scale-[0.98] text-sm tracking-wide shadow-sm">
            {props.text || "Click Me"}
        </button>
    );
}
