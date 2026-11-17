export function HeroSection() {
  return (
    <section className="hero-section" id="overview">
      <div className="hero-copy-block">
        <p className="eyebrow"><span>01</span> GitHub profile intelligence</p>
        <h1>A clearer read on your <em>open-source work.</em></h1>
        <p className="hero-copy">Repo Analytics turns public GitHub data into a focused snapshot of your technology, activity, and momentum.</p>
        <div className="hero-proof"><span className="proof-line" /><span>Public data · No account required</span></div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="signal-core"><span>RS</span></div>
        <span className="art-label art-label-top">PROFILE<br />SIGNAL</span><span className="art-label art-label-bottom">EST. 2024</span>
      </div>
    </section>
  )
}
