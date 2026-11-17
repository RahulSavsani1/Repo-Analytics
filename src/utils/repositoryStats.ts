import type { GitHubRepository, LanguageStat } from '../types/github'

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f0db4f',
  Python: '#3776ab',
  Java: '#e76f00',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Go: '#00add8',
  Rust: '#dea584',
}

export function getLanguageStats(repositories: GitHubRepository[]): LanguageStat[] {
  const languageCounts = repositories.reduce<Record<string, number>>((counts, repository) => {
    if (repository.language) counts[repository.language] = (counts[repository.language] ?? 0) + 1
    return counts
  }, {})

  const total = Object.values(languageCounts).reduce((sum, count) => sum + count, 0)

  return Object.entries(languageCounts)
    .sort(([, firstCount], [, secondCount]) => secondCount - firstCount)
    .slice(0, 5)
    .map(([name, count]) => ({
      name,
      count,
      color: languageColors[name] ?? '#8b8fa8',
      percentage: total ? Math.round((count / total) * 100) : 0,
    }))
}

export function getRepositoryTotals(repositories: GitHubRepository[]) {
  return repositories.reduce(
    (totals, repository) => ({
      stars: totals.stars + repository.stargazers_count,
      forks: totals.forks + repository.forks_count,
    }),
    { stars: 0, forks: 0 },
  )
}
