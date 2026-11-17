import type { FormEvent } from 'react'

type SearchBarProps = {
  query: string
  loading: boolean
  onQueryChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function SearchBar({ query, loading, onQueryChange, onSubmit }: SearchBarProps) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <div className="search-leading"><span className="search-icon">⌕</span><div><span className="search-label">Analyze a profile</span><input aria-label="GitHub username" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Enter a GitHub username" spellCheck="false" /></div></div>
      <button type="submit" disabled={loading || !query.trim()}>{loading ? 'Loading…' : 'Run analysis'} <span>→</span></button>
    </form>
  )
}
