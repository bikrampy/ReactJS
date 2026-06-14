import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
    const [user_name, setUser_name] = useState("");
    const [pass_word, setPass_word] = useState("");

    const { setUsername, setPassword } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(user_name);
        setPassword(pass_word);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <div className="w-full max-w-md p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl">
                <h2 className="text-3xl font-semibold text-white text-center mb-6">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        value={user_name}
                        onChange={(e) => setUser_name(e.target.value)}
                        placeholder="Username"
                        className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        value={pass_word}
                        onChange={(e) => setPass_word(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-xl bg-black/30 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
Login;
