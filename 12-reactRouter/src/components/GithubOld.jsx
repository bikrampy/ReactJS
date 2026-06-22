import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
export default function Githubold() {
    const [searchParams] = useSearchParams();
    let userName = searchParams.get("user");
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("User not found");
                }
                res.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
                setData({ error: true });
            });
    }, [userName]);
    if (!userName) {
        return <p>Please provide a username</p>;
    }
    if (!data) {
        return <p>Loading...</p>;
    }
    if (data.error) {
        return <p>User not found</p>;
    }
    return (
        <>
            <div className="min-h-[60vh] flex items-center justify-center px-4">
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-sm shadow-xl text-center">
                    <img
                        src={data.avatar_url}
                        alt={`${data.login} avatar`}
                        className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-orange-400"
                    />
                    <h2 className="text-xl font-semibold text-orange-400 mb-1">
                        {data.login}
                    </h2>
                    {data.bio && (
                        <p className="text-sm text-gray-400 mb-3">{data.bio}</p>
                    )}
                    <div className="flex justify-center gap-6 text-sm text-gray-300">
                        <div>
                            <p className="font-semibold text-white">
                                {data.followers}
                            </p>
                            <p className="text-gray-400">Followers</p>
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                {data.following}
                            </p>
                            <p className="text-gray-400">Following</p>
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                {data.public_repos}
                            </p>
                            <p className="text-gray-400">Repos</p>
                        </div>
                    </div>
                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-5 text-sm text-orange-400 hover:underline"
                    >
                        View GitHub Profile →
                    </a>
                </div>
            </div>
        </>
    );
}
