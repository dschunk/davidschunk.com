import Link from "next/link";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#writing", label: "Writing" },
  { href: "/#story", label: "Story" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="ds-header">
      <div className="ds-shell ds-header-inner">
        <Link className="ds-brand" href="/" aria-label="David Schunk home">
          <span className="ds-brand-slash">D/S</span>
          <span>David Schunk</span>
        </Link>

        <nav className="ds-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="ds-header-contact" href="/#contact">Contact</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="ds-footer">
      <div className="ds-shell ds-footer-grid">
        <div>
          <span className="ds-footer-name">David Schunk</span>
          <p>IT engineer · writer · builder · podcast host</p>
        </div>

        <nav aria-label="Footer navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#writing">Writing</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="ds-footer-links">
          <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://everydayittips.com" target="_blank" rel="noreferrer">Everyday IT Tips ↗</a>
        </div>
      </div>

      <div className="ds-shell ds-footer-bottom">
        <span>© 2026 David Schunk</span>
        <span>New Hampshire, USA</span>
      </div>
    </footer>
  );
}
