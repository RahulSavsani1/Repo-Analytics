export type GitHubUser = {
  login: string
  name: string | null
  avatar_url: string
  bio: string | null
  html_url: string
  location: string | null
  company: string | null
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export type GitHubRepository = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  fork: boolean
}

export type LanguageStat = {
  name: string
  count: number
  color: string
  percentage: number
}
