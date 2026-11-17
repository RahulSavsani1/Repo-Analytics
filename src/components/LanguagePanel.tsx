import type { LanguageStat } from '../types/github'
import { EmptyState } from './FeedbackStates'
import { PanelHeading } from './PanelHeading'

export function LanguagePanel({ stats }: { stats: LanguageStat[] }) {
  return (
    <div className="panel language-panel">
      <PanelHeading kicker="Technology mix" title="What they build with" action="Top 5" />
      {stats.length ? <><div className="language-bars">{stats.map((language) => <span key={language.name} style={{ width: `${Math.max(language.percentage, 4)}%`, background: language.color }} title={`${language.name}: ${language.percentage}%`} />)}</div><div className="language-list">{stats.map((language) => <div className="language-row" key={language.name}><span><i style={{ background: language.color }} />{language.name}</span><span>{language.percentage}% <small>{language.count} repos</small></span></div>)}</div></> : <EmptyState text="No language data is available for this profile." />}
    </div>
  )
}
