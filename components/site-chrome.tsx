import Link from "next/link";

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
            <small>IT Engineer · Writer</small>
          </span>
        </Link>

        <nav className="ds-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="ds-header-contact" href="/#contact">Say hello</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="ds-footer">
      <div className="ds-shell ds-footer-main">
        <div className="ds-footer-id">
          <span className="ds-brand-mark ds-brand-mark-footer">DS</span>
          <div>
            <strong>David Schunk</strong>
            <p>Infrastructure, writing, open source, and adoptee-led projects.</p>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#writing">Writing</Link>
          <Link href="/#adoption">Adoption</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="ds-footer-social">
          <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://everydayittips.com" target="_blank" rel="noreferrer">Everyday IT Tips ↗</a>
        </div>
      </div>

      <div className="ds-shell ds-footer-bottom">
        <span>© 2026 David Schunk</span>
        <span>New Hampshire · United States</span>
      </div>
    </footer>
  );
}
