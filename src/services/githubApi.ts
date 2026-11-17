import type { GitHubRepository, GitHubUser } from '../types/github'

const GITHUB_API_URL = 'https://api.github.com'

function getErrorMessage(status: number) {
  if (status === 404) return 'We could not find that GitHub user.'
  if (status === 403) return 'GitHub API rate limit reached. Try again later.'
  return 'GitHub returned an unexpected response.'
}

export async function fetchGitHubProfile(username: string) {
  const encodedUsername = encodeURIComponent(username)
  const [userResponse, repositoriesResponse] = await Promise.all([
    fetch(`${GITHUB_API_URL}/users/${encodedUsername}`),
    fetch(`${GITHUB_API_URL}/users/${encodedUsername}/repos?per_page=100&sort=updated`),
  ])

  if (!userResponse.ok) throw new Error(getErrorMessage(userResponse.status))
  if (!repositoriesResponse.ok) throw new Error('The profile loaded, but repositories could not be fetched.')

  const user = (await userResponse.json()) as GitHubUser
  const repositories = (await repositoriesResponse.json()) as GitHubRepository[]

  return { user, repositories: repositories.filter((repository) => !repository.fork) }
}
