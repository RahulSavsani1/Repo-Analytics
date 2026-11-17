import { formatCompactNumber } from '../utils/formatters'

type MetricCardProps = { label: string; value: number; helper: string; icon: string }

export function MetricCard({ label, value, helper, icon }: MetricCardProps) {
  return <div className="metric-card"><div className="metric-top"><span className="metric-icon">{icon}</span><span className="metric-label">{label}</span></div><strong>{formatCompactNumber(value)}</strong><span className="metric-helper">{helper}</span></div>
}
