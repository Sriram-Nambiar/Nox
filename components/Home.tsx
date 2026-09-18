"use client";

import { useState } from "react";

export default function Home() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState<any>(null);

    const search = async () => {
        const res = await fetch(`/api/github?username=${username}`);
        const result = await res.json();
        setData(result);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="m-5">
                <input className="bg-amber-50 text-black p-2 rounded-2xl"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="GitHub username"
                />
                <button className=" bg-amber-50 text-black p-2 rounded-2xl" onClick={search}>Search</button>
            </div>



            <div className="border-2 p-3">
                <img className="rounded-full size-30" src={data.avatar_url} />
                {data.name}
                <p>Followers</p>
                {data.followers}
                <p>Following</p>
                {data.following}
            </div>



        </div>
    );
}