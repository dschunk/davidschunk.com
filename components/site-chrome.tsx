import Link from "next/link";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#writing", label: "Publications" },
  { href: "/#adoption", label: "Community" },
  { href: "/about", label: "Profile" },
];

export function SiteHeader() {
  return (
    <>
      <div className="ds-topline">
        <div className="ds-shell ds-topline-inner">
          <span>David Schunk · New Hampshire</span>
          <span>IT Engineering · Writing · Community</span>
        </div>
      </div>

      <header className="ds-header">
        <div className="ds-shell ds-header-inner">
          <Link className="ds-brand" href="/" aria-label="David Schunk home">
            <span className="ds-monogram" aria-hidden="true">DS</span>
            <span className="ds-brand-copy">
              <strong>David Schunk</strong>
              <small>Engineer · Writer · Builder</small>
            </span>
          </Link>

          <nav className="ds-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </nav>

          <Link className="ds-header-contact" href="/#contact">
            Contact
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="ds-footer">
      <div className="ds-shell ds-footer-rule" />

      <div className="ds-shell ds-footer-main">
        <div className="ds-footer-identity">
          <span className="ds-monogram ds-monogram-footer" aria-hidden="true">DS</span>
          <div>
            <strong>David Schunk</strong>
            <p>IT engineer, writer, podcaster, and community builder in New Hampshire.</p>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <span className="ds-footer-label">Navigate</span>
          <Link href="/#work">Work</Link>
          <Link href="/#writing">Publications</Link>
          <Link href="/about">Profile</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="ds-footer-social">
          <span className="ds-footer-label">Elsewhere</span>
          <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://everydayittips.com" target="_blank" rel="noreferrer">Everyday IT Tips ↗</a>
        </div>
      </div>

      <div className="ds-shell ds-footer-bottom">
        <span>© 2026 David Schunk</span>
        <span>Personal site · New Hampshire · United States</span>
      </div>
    </footer>
  );
}
