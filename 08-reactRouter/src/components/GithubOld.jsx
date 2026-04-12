import { useState, useEffect } from "react";

export default function Github() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch('https://api.github.com/users/octocat')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
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
    );
}
