import { useCallback, useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'
import { BrandHeader } from './components/BrandHeader'
import { ErrorBanner, LoadingState } from './components/FeedbackStates'
import { HeroSection } from './components/HeroSection'
import { LanguagePanel } from './components/LanguagePanel'
import { MetricCard } from './components/MetricCard'
import { ProfileCard } from './components/ProfileCard'
import { RepositoryPanel } from './components/RepositoryPanel'
import { SearchBar } from './components/SearchBar'
import { fetchGitHubProfile } from './services/githubApi'
import type { GitHubRepository, GitHubUser } from './types/github'
import { getLanguageStats, getRepositoryTotals } from './utils/repositoryStats'

const INITIAL_USERNAME = 'octocat'
const currentYear = new Date().getFullYear()

function App() {
  const [query, setQuery] = useState(INITIAL_USERNAME)
  const [activeUser, setActiveUser] = useState(INITIAL_USERNAME)
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repositories, setRepositories] = useState<GitHubRepository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadProfile = useCallback(async (username: string) => {
    const cleanUsername = username.trim()
    if (!cleanUsername) return

    setLoading(true)
    setError('')
    setActiveUser(cleanUsername)

    try {
      const profile = await fetchGitHubProfile(cleanUsername)
      setUser(profile.user)
      setRepositories(profile.repositories)
    } catch (requestError) {
      setUser(null)
      setRepositories([])
      setError(requestError instanceof Error ? requestError.message : 'Something went wrong while loading the profile.')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadProfile(INITIAL_USERNAME)
  }, [loadProfile])

  const languageStats = useMemo(() => getLanguageStats(repositories), [repositories])
  const repositoryTotals = useMemo(() => getRepositoryTotals(repositories), [repositories])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void loadProfile(query)
  }

  return (
    <main className="app-shell">
      <BrandHeader />
      <HeroSection />
      <SearchBar query={query} loading={loading} onQueryChange={setQuery} onSubmit={handleSubmit} />

      {error && <ErrorBanner message={error} onRetry={() => void loadProfile(activeUser)} />}

      {loading && !user ? <LoadingState /> : user ? <>
        <ProfileCard user={user} />

        <section className="metrics-grid">
          <MetricCard label="Repositories analyzed" value={repositories.length} helper="Public, non-fork repos" icon="01" />
          <MetricCard label="Total stars" value={repositoryTotals.stars} helper="Across analyzed repos" icon="02" />
          <MetricCard label="Total forks" value={repositoryTotals.forks} helper="Community activity" icon="03" />
        </section>

        <section className="analysis-grid" id="insights">
          <LanguagePanel stats={languageStats} />
          <RepositoryPanel repositories={repositories} />
        </section>
      </> : null}

      <footer className="footer"><span>REPO ANALYTICS</span><span>Built with React + Vite · Powered by GitHub REST API</span><span>v0.1 / {currentYear}</span></footer>
    </main>
  )
}

export default App
