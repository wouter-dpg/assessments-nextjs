"use client";
import { useState, useEffect } from "react";
import { useDebounce } from "./hooks/use-debounce";
import { UserCard } from "./components/card";
import { GithubUser } from "./types";

export default function Search() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<GithubUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (query.length < 1) {
      setUsers([]);
      setError(null);
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(
      `https://api.github.com/search/users?q=${encodeURIComponent(
        debouncedQuery
      )}`,
      {
        signal: controller.signal,
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        setUsers(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Error fetching users");
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, [debouncedQuery]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: 10 }}>Search GitHub Users</h1>
      <input
        type="text"
        placeholder="Type a GitHub username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", padding: "8px" }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul
        style={{
          listStyle: "none",
          padding: 0,
        }}
      >
        {users.map((user: any) => (
          <UserCard {...user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}
