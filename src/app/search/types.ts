export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

export type GithubUserDetail = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  bio?: string;
  location?: string;
  blog?: string;
  followers: number;
  following: number;
  public_repos: number;
};
