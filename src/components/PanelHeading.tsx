type PanelHeadingProps = { kicker: string; title: string; action?: string }

export function PanelHeading({ kicker, title, action }: PanelHeadingProps) {
  return <div className="panel-heading"><div><p className="panel-kicker">{kicker}</p><h3>{title}</h3></div>{action && <span className="panel-action">{action} <b>→</b></span>}</div>
}
