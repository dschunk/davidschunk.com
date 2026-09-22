import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "About",
  description:
    "About David Schunk: IT engineer, writer, Russian adoptee, podcast host, and community builder in New Hampshire.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "https://www.davidschunk.com/about",
    title: "About David Schunk",
    description:
      "IT engineer, writer, Russian adoptee, podcast host, and community builder in New Hampshire.",
  },
};

const facts = [
  ["Born", "Smolensk, Russia"],
  ["Raised", "New Hampshire"],
  ["College", "Champlain College, 2017"],
  ["Work", "IT engineering"],
  ["Writing", "Everyday IT Tips"],
  ["Podcast", "Voice of Adoptees"],
];

export default function AboutPage() {
  return (
    <div className="ds-site">
      <SiteHeader />

      <main>
        <section className="ds-page-hero">
          <div className="ds-shell ds-page-hero-grid">
            <div>
              <p className="ds-eyebrow">About</p>
              <h1 className="ds-page-title">A little more about me.</h1>
            </div>
            <p className="ds-page-dek">
              I&apos;m David Schunk. I work in IT, write about technology, host
              Voice of Adoptees, and spend a lot of my free time building things.
            </p>
          </div>
        </section>

        <section className="ds-section">
          <div className="ds-shell ds-about-layout">
            <aside className="ds-about-rail" aria-label="Quick facts">
              {facts.map(([label, value]) => (
                <div className="ds-about-fact" key={label}>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              ))}

              <div className="ds-about-rail-links">
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit ↗</a>
              </div>
            </aside>

            <div className="ds-about-prose">
              <section className="ds-about-chapter">
                <p className="ds-about-lead">
                  I was born in Smolensk, Russia in 1994, adopted as a child, and
                  grew up in New Hampshire.
                </p>
                <p>
                  Computers were an interest early on and eventually became my
                  career. I graduated from Champlain College in 2017 and have
                  spent my professional life working across systems administration,
                  infrastructure, networking, virtualization, cloud platforms,
                  identity, security, and end-user operations.
                </p>
                <p>
                  What I like most about IT is making complicated environments
                  easier to understand and operate. I care about documentation,
                  recovery, maintainability, and leaving behind systems that do
                  not depend on one person remembering how everything works.
                </p>
              </section>

              <section className="ds-about-chapter">
                <p className="ds-eyebrow">Outside work</p>
                <h2>I build things because I enjoy building things.</h2>
                <p>
                  I maintain a homelab, write practical IT guides, publish
                  PowerShell tools, build websites, experiment with new platforms,
                  and generally have more side projects than I probably need.
                </p>
                <p>
                  Everyday IT Tips is where most of my technical writing lives.
                  It focuses on the kind of documentation I actually want when I
                  am troubleshooting something: clear, specific, and useful.
                </p>
                <div className="ds-actions">
                  <a className="ds-button ds-button-primary" href="https://everydayittips.com" target="_blank" rel="noreferrer">
                    Everyday IT Tips
                  </a>
                  <a className="ds-button ds-button-secondary" href="https://github.com/dschunk" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </section>

              <section className="ds-about-chapter">
                <p className="ds-eyebrow">Adoption</p>
                <h2>My adoptee work grew out of my own questions.</h2>
                <p>
                  Being adopted from Russia is a major part of my life and
                  identity. Over time I became more involved in adoptee spaces,
                  first by sharing my own experiences and later by interviewing
                  other adoptees and helping build community.
                </p>
                <p>
                  I created Voice of Adoptees so adoptees could speak for
                  themselves about identity, family, culture, reunion, loss,
                  belonging, and the parts of adoption that rarely fit into a
                  simple narrative.
                </p>
                <p>
                  I also founded the Russian Adoptees Organization to create a
                  more permanent home for adoptees from Russia and the former
                  Soviet Union to connect and share resources.
                </p>
                <div className="ds-actions">
                  <a className="ds-button ds-button-primary" href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">
                    Voice of Adoptees
                  </a>
                  <a className="ds-button ds-button-secondary" href="https://russianadoptees.com" target="_blank" rel="noreferrer">
                    Russian Adoptees Organization
                  </a>
                </div>
              </section>

              <section className="ds-about-chapter">
                <p className="ds-eyebrow">Today</p>
                <h2>I&apos;m still doing a little bit of all of it.</h2>
                <p>
                  I live in New Hampshire and work in IT while continuing to
                  write, podcast, maintain my lab, build independent projects,
                  and work with the adoptee community.
                </p>
                <p>
                  This site is where those parts of my life meet. It is not meant
                  to be a polished corporate bio. It is just a useful place to
                  keep the work, writing, and projects I want to share.
                </p>
                <div className="ds-actions">
                  <Link className="ds-button ds-button-primary" href="/#work">See my work</Link>
                  <Link className="ds-button ds-button-secondary" href="/#contact">Contact me</Link>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
