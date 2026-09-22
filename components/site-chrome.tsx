import Link from "next/link";

const Arrow = () => <span aria-hidden="true">↗</span>;

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#writing", label: "Writing" },
  { href: "/#adoption", label: "Adoption" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="ds-header">
      <div className="ds-shell ds-header-inner">
        <Link className="ds-brand" href="/" aria-label="David Schunk home">
          <span className="ds-brand-mark">DS</span>
          <span className="ds-brand-copy">
            <strong>David Schunk</strong>
            <small>Engineer · writer · builder</small>
          </span>
        </Link>

        <nav className="ds-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="ds-header-cta" href="/#contact">
          Say hello <Arrow />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="ds-footer">
      <div className="ds-shell ds-footer-grid">
        <div className="ds-footer-intro">
          <span className="ds-brand-mark">DS</span>
          <p>
            A personal site for the work, writing, communities, and ideas I care about.
          </p>
        </div>

        <div className="ds-footer-links">
          <div>
            <small>Elsewhere</small>
            <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit <Arrow /></a>
          </div>
          <div>
            <small>Projects</small>
            <a href="https://everydayittips.com" target="_blank" rel="noreferrer">Everyday IT Tips <Arrow /></a>
            <a href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">Voice of Adoptees <Arrow /></a>
            <a href="https://russianadoptees.com" target="_blank" rel="noreferrer">Russian Adoptees <Arrow /></a>
          </div>
        </div>
      </div>

      <div className="ds-shell ds-footer-bottom">
        <span>© 2026 David Schunk</span>
        <span>New Hampshire · built on the internet</span>
      </div>
    </footer>
  );
}
