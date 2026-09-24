import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="ds-header">
      <div className="ds-shell ds-header-inner">
        <Link className="ds-brand" href="/">David Schunk</Link>

        <nav className="ds-nav" aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#writing">Writing</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="ds-footer">
      <div className="ds-shell ds-footer-inner">
        <div>
          <strong>David Schunk</strong>
          <span>IT engineer · writer · builder</span>
        </div>

        <div className="ds-footer-links">
          <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://everydayittips.com" target="_blank" rel="noreferrer">Everyday IT Tips ↗</a>
        </div>

        <span className="ds-copyright">© 2026</span>
      </div>
    </footer>
  );
}
