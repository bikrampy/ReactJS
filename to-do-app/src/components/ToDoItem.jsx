export default function ToDoItem(props) {
    return (
        <li className="flex items-center justify-between bg-zinc-800/40 border border-zinc-800/80 rounded-xl p-4 transition-colors hover:bg-zinc-800/70 group">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    name={props.name}
                    id={props.name}
                    className="w-4 h-4 rounded bg-zinc-950 border-zinc-700 text-zinc-100 focus:ring-0 focus:ring-offset-0 checked:bg-zinc-100 checked:border-zinc-100 cursor-pointer"
                />
                <label
                    htmlFor={props.name}
                    className="text-sm font-medium text-zinc-300 cursor-pointer select-none peer-checked:line-through peer-checked:text-zinc-500"
                >
                    {props.name}
                </label>
            </div>
            <button className="text-zinc-500 hover:text-zinc-200 p-1 rounded-lg hover:bg-zinc-800 transition-colors duration-200">
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                </svg>
            </button>
        </li>
    );
}
