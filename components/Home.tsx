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
    <div>
      <input className="m-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="GitHub username"
      />

      <button className="m-3" onClick={search}>Search</button>

        {data.name}
        <img className="rounded-full size-30" src={data.avatar_url}/>
        <p>Followers</p>
        {data.followers}
        <p>Following</p>
        {data.following}
       
      
    </div>
  );
}