export default function Header(props) {
    return (
        <header className="border-b border-zinc-800 pb-4">
            <h1 className="text-xl font-semibold tracking-tight text-zinc-100">
                {props.name || "User"}'s Personal To Do App
            </h1>
        </header>
    );
}
