import type { GitHubRepository } from '../types/github'
import { formatCompactNumber, formatDate } from '../utils/formatters'
import { EmptyState } from './FeedbackStates'
import { PanelHeading } from './PanelHeading'

export function RepositoryPanel({ repositories }: { repositories: GitHubRepository[] }) {
  const recentlyUpdated = repositories.slice(0, 4)

  return (
    <div className="panel activity-panel">
      <PanelHeading kicker="Latest movement" title="Repository pulse" action={`${repositories.length} total`} />
      <div className="repo-list">
        {recentlyUpdated.map((repository, index) => <a className="repo-row" href={repository.html_url} target="_blank" rel="noreferrer" key={repository.id}><span className="repo-index">0{index + 1}</span><div className="repo-symbol">{repository.language?.slice(0, 1) ?? '·'}</div><div className="repo-info"><strong>{repository.name}</strong><span>{repository.description ?? 'No description provided.'}</span></div><div className="repo-meta"><span>✦ {formatCompactNumber(repository.stargazers_count)}</span><span>{formatDate(repository.updated_at)}</span></div><span className="row-arrow">↗</span></a>)}
        {!recentlyUpdated.length && <EmptyState text="No public repositories found." />}
      </div>
    </div>
  )
}
