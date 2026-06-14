export default function Card({ user, age, isGraduated, skills, clickHandler }) {
    const { name = 'User', about = "No bio available" } = user;

    return (
        <div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col gap-5 text-zinc-100 my-4">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
                    {name}
                </h2>
                <p className="text-sm text-zinc-400 font-medium">{about}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-b border-zinc-800/60 py-3 text-xs tracking-wide uppercase text-zinc-400">
                <div>
                    <span className="block text-zinc-500 font-bold mb-0.5">
                        Age
                    </span>
                    <span className="text-zinc-200 text-sm font-medium">
                        {age} Yrs
                    </span>
                </div>
                <div>
                    <span className="block text-zinc-500 font-bold mb-0.5">
                        Graduation
                    </span>
                    <span className="text-zinc-200 text-sm font-medium">
                        {isGraduated ? "Graduated" : "Not Graduated"}
                    </span>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Skills
                </span>
                <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md font-medium border border-zinc-700/40"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <button
                onClick={clickHandler}
                className="w-full mt-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-medium py-2.5 px-4 rounded-xl transition-all duration-200 active:scale-[0.98] text-xs uppercase tracking-wider shadow-sm"
            >
                Greet User
            </button>
        </div>
    );
}
