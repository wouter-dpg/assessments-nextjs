"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserDetailCard } from "./components/card";
import { GithubUserDetail } from "../types";

export default function UserDetailPage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  const [user, setUser] = useState<GithubUserDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://api.github.com/users/${encodeURIComponent(username)}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not fetch user details");
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!user) return null;

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <button
        onClick={() => router.back()}
        style={{ marginBottom: 16, cursor: "pointer" }}
      >
        ← Back
      </button>

      <UserDetailCard {...user} />
    </div>
  );
}
