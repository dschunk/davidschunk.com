const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16">
    <path d="M3 13 13 3M5 3h8v8" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const projects = [
  {
    index: "01",
    name: "Windows IT Toolkit",
    summary:
      "Production-minded PowerShell tools for Windows operations, evidence collection, incident response, and safe automation.",
    proof: "35 standalone tools + 14 SchunkOps commands",
    href: "https://github.com/dschunk/windows-it-toolkit",
    tone: "blue",
  },
  {
    index: "02",
    name: "Microsoft 365 Ops",
    summary:
      "Least-privilege security audits for Entra ID, Exchange Online, Teams, licensing, guests, privileged roles, and external access.",
    proof: "12 repeatable tenant security audits",
    href: "https://github.com/dschunk/microsoft-365-ops",
    tone: "red",
  },
  {
    index: "03",
    name: "FiveM Server Ops",
    summary:
      "Monitoring, backups, configuration safety, status data, logs, port matrices, and alerts for serious FiveM communities.",
    proof: "11 infrastructure and operations tools",
    href: "https://github.com/dschunk/fivem-server-ops",
    tone: "gold",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="David Schunk home">
          <span className="wordmark-box">DS</span>
          <span className="wordmark-name">David Schunk</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
          <a href="#about">About</a>
        </nav>

        <a className="header-action" href="https://www.linkedin.com/in/dschunk/" target="_blank" rel="noreferrer">
          Connect <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span /> IT engineer · builder · writer</div>
            <h1>I build systems people can <em>understand, operate, and trust.</em></h1>
            <p className="hero-deck">
              I&apos;m David Schunk—a senior IT engineer focused on infrastructure,
              automation, operational visibility, and leaving every environment
              better documented than I found it.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore the work <Arrow /></a>
              <a className="text-link" href="https://github.com/dschunk" target="_blank" rel="noreferrer">
                View GitHub <Arrow />
              </a>
            </div>
          </div>

          <aside className="operator-card" aria-label="David Schunk profile">
            <div className="operator-topline">
              <span>Operator / 94</span>
              <span className="live-dot">Available online</span>
            </div>
            <div className="portrait-frame">
              <img
                src="https://avatars.githubusercontent.com/u/140072881?v=4"
                alt="David Schunk"
                width="460"
                height="460"
              />
              <span className="portrait-index">DS—01</span>
            </div>
            <div className="operator-details">
              <div><span>Base</span><strong>Nashua, New Hampshire</strong></div>
              <div><span>Focus</span><strong>Infrastructure + operations</strong></div>
              <div><span>Principle</span><strong>Build for the next engineer</strong></div>
            </div>
          </aside>
        </section>

        <section className="signal-strip" aria-label="Portfolio snapshot">
          <div><strong>49</strong><span>Windows tools & commands</span></div>
          <div><strong>12</strong><span>M365 security audits</span></div>
          <div><strong>11</strong><span>FiveM operations tools</span></div>
          <div><strong>01</strong><span>Rule: make failure visible</span></div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected systems / 2026</p>
              <h2>Useful work, built in public.</h2>
            </div>
            <p>
              Tools shaped by real operations: safe defaults, readable output,
              visible failures, and documentation that survives the handoff.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <a
                className={`project-row project-${project.tone}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <span className="project-index">{project.index}</span>
                <div className="project-main">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>
                <span className="project-proof">{project.proof}</span>
                <span className="project-arrow"><Arrow /></span>
              </a>
            ))}
          </div>

          <a className="all-work-link" href="https://github.com/dschunk?tab=repositories" target="_blank" rel="noreferrer">
            Browse every public repository <Arrow />
          </a>
        </section>

        <section className="principles-section section-pad">
          <div className="principles-intro">
            <p className="section-kicker light">Operating principles</p>
            <h2>The work isn&apos;t finished when it only works for its creator.</h2>
          </div>
          <ol className="principles-list">
            <li><span>01</span><strong>Build for the next engineer.</strong><p>Make the environment understandable without a phone call to the person who built it.</p></li>
            <li><span>02</span><strong>Make failure visible.</strong><p>Logs, health checks, alerts, and audit trails are part of the product.</p></li>
            <li><span>03</span><strong>Automate carefully.</strong><p>Safe defaults, dry runs, clear output, and reversible operations matter.</p></li>
            <li><span>04</span><strong>Document the why.</strong><p>The reasoning behind a decision often outlives the command that implemented it.</p></li>
          </ol>
        </section>

        <section className="writing-section section-pad" id="writing">
          <div className="writing-title">
            <p className="section-kicker">Field notes / ideas that travel</p>
            <h2>Writing from the server room—and everywhere beyond it.</h2>
          </div>

          <div className="writing-grid">
            <article className="feature-article">
              <div className="article-meta"><span>Featured essay</span><time dateTime="2026-08-27">27 Aug 2026</time></div>
              <h3>Build It Like You Won&apos;t Be There Tomorrow</h3>
              <p>
                If you disappeared tomorrow, could another engineer understand
                what you built, why it exists, how it fails, and how to recover it?
              </p>
              <a href="https://github.com/dschunk/build-it-like-you-wont-be-there" target="_blank" rel="noreferrer">
                Read the field guide <Arrow />
              </a>
            </article>

            <div className="writing-notes">
              <a href="https://www.linkedin.com/newsletters/best-practices-for-everyday-it-7075059974573314048/" target="_blank" rel="noreferrer">
                <span className="note-number">Newsletter</span>
                <strong>Best Practices for Everyday IT</strong>
                <p>Practical thinking about systems that are easier to operate, secure, document, and hand off.</p>
                <Arrow />
              </a>
              <a href="https://www.davidschunk.com/2026/06/dns-most-important-service-you-dont.html" target="_blank" rel="noreferrer">
                <span className="note-number">Infrastructure</span>
                <strong>DNS: The Most Important Service You Don&apos;t Think About</strong>
                <p>Internal DNS, clean forwarders, healthy zones, and the invisible foundation of the network.</p>
                <Arrow />
              </a>
              <a href="https://www.davidschunk.com/2026/08/windows-11-gaming-crashes-should-you-be.html" target="_blank" rel="noreferrer">
                <span className="note-number">Windows + gaming</span>
                <strong>Windows 11 Gaming Crashes: Should You Be Concerned?</strong>
                <p>A calm, evidence-first look at update risk, driver conflicts, and staged validation.</p>
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="about-map" aria-label="David Schunk personal timeline">
            <div className="map-label">Origin / direction</div>
            <div className="map-line">
              <span className="map-point map-point-one" />
              <span className="map-point map-point-two" />
              <span className="map-point map-point-three" />
            </div>
            <div className="map-places">
              <div><span>1994</span><strong>Smolensk, Russia</strong></div>
              <div><span>Raised</span><strong>New Hampshire</strong></div>
              <div><span>Today</span><strong>Building in public</strong></div>
            </div>
          </div>

          <div className="about-copy">
            <p className="section-kicker">More than a résumé</p>
            <h2>One life. A lot of systems.</h2>
            <p className="about-lead">
              I was born in Smolensk, adopted as a child, and raised in New
              Hampshire. Technology became one of the ways I learned to build
              order, connection, and community.
            </p>
            <p>
              Today I&apos;m an IT engineer, infrastructure builder, writer, gamer,
              podcaster, and adoptee advocate. Those aren&apos;t separate identities.
              They&apos;re different parts of the same story: understanding complicated
              systems, making them more human, and helping people find their place in them.
            </p>

            <div className="identity-links">
              <a href="https://russianadoptees.com" target="_blank" rel="noreferrer"><span>Community</span>Russian Adoptees Organization <Arrow /></a>
              <a href="https://askyup.com" target="_blank" rel="noreferrer"><span>Building</span>YUP — find what matters <Arrow /></a>
              <a href="https://capitalstaterp.com" target="_blank" rel="noreferrer"><span>Gaming</span>Capital State RP <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="contact-section section-pad">
          <p className="section-kicker light">Open channel</p>
          <div className="contact-main">
            <h2>Let&apos;s compare notes.</h2>
            <p>
              Infrastructure, operations, open-source tooling, adoption advocacy,
              or a delightfully specific technical problem—I&apos;m always interested
              in a useful conversation.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href="https://www.linkedin.com/in/dschunk/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
            <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/newsletters/best-practices-for-everyday-it-7075059974573314048/" target="_blank" rel="noreferrer">Newsletter <Arrow /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 David Schunk</span>
        <span>Smolensk → New Hampshire → The internet</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
