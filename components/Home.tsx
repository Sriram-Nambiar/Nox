"use client";

import { useState } from "react";

export default function Home() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const search = async () => {
        if (!username.trim()) return;

        setLoading(true);

        const res = await fetch(`/api/github?username=${username}`);
        const result = await res.json();

        setData(result);
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center gap-8">

            <div className="flex gap-3">
                <input
                    className="w-72 bg-[#171717] border border-[#333] text-white p-3 rounded-xl outline-none focus:border-white"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter GitHub username"
                />

                <button
                    className="bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-200"
                    onClick={search}
                >
                    {loading ? "Searching..." : "Search"}
                </button>
            </div>

            {data && (
                <div className="w-80 bg-[#111] border border-[#333] rounded-2xl p-6">

                    <div className="flex flex-col items-center">
                        <img
                            className="w-28 h-28 rounded-full"
                            src={data.avatar_url}
                            alt="Profile"
                        />

                        <h1 className="text-2xl font-bold mt-4">
                            {data.name}
                        </h1>

                        <p className="text-gray-500">
                            @{data.login}
                        </p>

                        <p className="text-gray-400 text-center mt-4">
                            {data.bio}
                        </p>
                    </div>

                    <div className="grid grid-cols-3 text-center mt-6 border-t border-[#333] pt-5">

                        <div>
                            <p className="text-xl font-bold">
                                {data.public_repos}
                            </p>
                            <p className="text-gray-500 text-sm">
                                Repos
                            </p>
                        </div>

                        <div>
                            <p className="text-xl font-bold">
                                {data.followers}
                            </p>
                            <p className="text-gray-500 text-sm">
                                Followers
                            </p>
                        </div>

                        <div>
                            <p className="text-xl font-bold">
                                {data.following}
                            </p>
                            <p className="text-gray-500 text-sm">
                                Following
                            </p>
                        </div>

                    </div>

                    <div className="mt-5 text-sm text-gray-400">
                        <p>Location: {data.location || "Not available"}</p>
                        <p>Company: {data.company || "Not available"}</p>
                    </div>

                </div>
            )}
        </div>
    );
}