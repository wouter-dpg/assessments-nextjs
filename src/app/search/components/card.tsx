import { useRouter } from "next/navigation";
import { GithubUser } from "../types";

export const UserCard: React.FC<GithubUser> = ({ id, avatar_url, login }) => {
  const router = useRouter();
  return (
    <li
      key={id}
      style={{
        margin: "10px 0",
        display: "flex",
        width: "100%",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid #ccc",
      }}
    >
      <img
        src={avatar_url}
        alt={login}
        width={32}
        height={32}
        style={{
          borderRadius: "50%",
          verticalAlign: "middle",
          marginRight: "8px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flex: 1,
        }}
      >
        {login}

        <button
          style={{
            border: "1px solid white",
            background: "transparent",
            padding: "4px 8px",
            cursor: "pointer",
          }}
          onClick={() => router.push(`/search/${login}`)}
        >
          View profile
        </button>
      </div>
    </li>
  );
};
