import { GithubUserDetail } from "../../types";

export const UserDetailCard: React.FC<GithubUserDetail> = ({
  avatar_url,
  name,
  login,
  html_url,
  bio,
  location,
  blog,
  followers,
  following,
  public_repos,
}) => {
  return (
    <>
      <h1>{name || login}</h1>
      <img
        src={avatar_url}
        alt={login}
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
      />
      <p>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          @{login}
        </a>
      </p>
      {bio && <p>{bio}</p>}
      {location && <p>📍 {location}</p>}
      {blog && (
        <p>
          🔗{" "}
          <a
            href={blog.startsWith("http") ? blog : `https://${blog}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {blog}
          </a>
        </p>
      )}
      <p>
        Followers: {followers} | Following: {following}
      </p>
      <p>Public Repos: {public_repos}</p>
    </>
  );
};
