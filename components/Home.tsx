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
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="GitHub username"
      />

      <button onClick={search}>Search</button>

      {data && (
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}