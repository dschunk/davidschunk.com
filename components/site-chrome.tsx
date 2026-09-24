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
          <img src="/mountain-mark.svg" alt="" />
          <span>David Schunk</span>
        </Link>

        <nav className="ds-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="ds-header-contact" href="/#contact">Contact me</Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="ds-footer">
      <div className="ds-shell ds-footer-main">
        <div className="ds-footer-identity">
          <img src="/mountain-mark.svg" alt="" />
          <div>
            <strong>David Schunk</strong>
            <p>IT engineer, writer, podcaster, and community builder in New Hampshire.</p>
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
        <span>New Hampshire, USA</span>
      </div>
    </footer>
  );
}
