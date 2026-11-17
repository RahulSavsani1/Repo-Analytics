import type { GitHubUser } from '../types/github'
import { formatCompactNumber, formatDate } from '../utils/formatters'

export function ProfileCard({ user }: { user: GitHubUser }) {
  return (
    <section className="profile-card">
      <div className="profile-main">
        <div className="avatar-wrap"><img className="avatar" src={user.avatar_url} alt={`${user.login}'s avatar`} /><span className="avatar-status" /></div>
        <div className="profile-copy">
          <div className="profile-heading"><div><p className="profile-handle">@{user.login}</p><h2>{user.name ?? user.login}</h2></div><a className="outline-button" href={user.html_url} target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a></div>
          <p className="bio">{user.bio ?? 'This profile has not added a bio yet.'}</p>
          <div className="profile-details">{user.location && <span>◉ {user.location}</span>}{user.company && <span>▣ {user.company}</span>}<span>Joined {formatDate(user.created_at)}</span></div>
        </div>
      </div>
      <div className="profile-stats"><div><strong>{formatCompactNumber(user.followers)}</strong><span>Followers</span></div><div><strong>{formatCompactNumber(user.following)}</strong><span>Following</span></div><div><strong>{formatCompactNumber(user.public_repos)}</strong><span>Public repos</span></div></div>
    </section>
  )
}
