export function BrandHeader() {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Repo Analytics home">
        <span className="brand-mark"><span /></span>
        <span>repo<span>analytics</span></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a className="active" href="#overview">Overview</a>
        <a href="#insights">Insights</a>
        <a href="https://docs.github.com/en/rest" target="_blank" rel="noreferrer">API docs <span>↗</span></a>
      </nav>
      <div className="topbar-meta"><span className="live-dot" /> Live data</div>
    </header>
  )
}
