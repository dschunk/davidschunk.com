import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About David Schunk — IT Engineer, Builder & Writer",
  description:
    "About David Schunk: IT engineer, infrastructure builder, practical technology writer, and host of Voice of Adoptees.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "https://www.davidschunk.com/about",
    title: "About David Schunk — IT Engineer, Builder & Writer",
    description:
      "IT engineer, infrastructure builder, practical technology writer, and host of Voice of Adoptees.",
  },
};

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
    <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="mountain-site">
      <header className="mountain-header">
        <Link className="mountain-brand" href="/" aria-label="David Schunk home">
          <Image src="/mountain-mark.svg" alt="" width={46} height={30} unoptimized />
          <span>David Schunk</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#writing">Writing</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link className="mountain-header-action" href="/hire">Work With Me <Arrow /></Link>
      </header>

      <main>
        <section className="about-page-section mountain-shell">
          <div className="about-page-grid">
            <aside className="about-portrait-panel">
              <Image
                src="/david-schunk-portrait.svg"
                alt="Portrait of David Schunk"
                width={300}
                height={300}
                className="about-portrait"
                unoptimized
                priority
              />
              <p>David Schunk · IT Engineer · New Hampshire</p>
              <div className="about-facts" aria-label="Quick facts">
                <span><small>Focus</small><strong>Infrastructure & operations</strong></span>
                <span><small>Writing</small><strong>Everyday IT Tips</strong></span>
                <span><small>Community</small><strong>Voice of Adoptees</strong></span>
              </div>
            </aside>

            <div className="about-copy">
              <p className="mountain-section-label">About David</p>
              <h1>Infrastructure, curiosity, and people.</h1>
              <p className="about-lead">
                I&apos;m David Schunk, an IT Engineer and Champlain College Class of 2017 graduate with a background in enterprise infrastructure, systems administration, networking, virtualization, cloud technologies, and cybersecurity.
              </p>
              <p>
                I was born in Smolensk, Russia, adopted as a child, and raised in New Hampshire. Technology became the through-line: first as a student, then as a career, and eventually as a way to build useful systems, document what I learn, and make complicated things easier for the next person to understand.
              </p>
              <p>
                Outside of day-to-day IT work, I publish Everyday IT Tips, maintain a hands-on infrastructure lab, build independent technology projects, and host Voice of Adoptees. I&apos;m especially interested in systems that are reliable, recoverable, well documented, and built with the people who operate them in mind.
              </p>

              <div className="mountain-actions about-actions">
                <a className="mountain-button mountain-button-primary" href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit Profile <Arrow /></a>
                <a className="mountain-button mountain-button-ghost" href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                <a className="mountain-button mountain-button-ghost" href="https://everydayittips.com" target="_blank" rel="noreferrer">Everyday IT Tips <Arrow /></a>
              </div>

              <section className="about-record">
                <p className="mountain-section-label">Academic & career record</p>
                <h2>A profile that started at Champlain and kept going.</h2>
                <p>
                  My Merit page includes Champlain College-verified academic recognition from 2014 along with the work experience, projects, and publications I&apos;ve added since graduating.
                </p>
                <a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">
                  View my Merit page <Arrow />
                </a>
              </section>
            </div>
          </div>
        </section>
      </main>

      <footer className="mountain-footer">
        <div className="mountain-shell mountain-footer-inner">
          <div className="footer-brand">
            <Image src="/mountain-mark.svg" alt="" width={42} height={28} unoptimized />
            <div><strong>David Schunk</strong><small>Infrastructure. People. A brighter tomorrow.</small></div>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/#work">Work</Link>
            <Link href="/#writing">Writing</Link>
            <Link href="/about">About</Link>
            <a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit</a>
            <Link href="/#contact">Contact</Link>
          </nav>
          <span className="footer-note">Same systems. Higher places.</span>
        </div>
      </footer>
    </div>
  );
}
