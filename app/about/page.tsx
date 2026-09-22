import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "About",
  description:
    "About David Schunk: IT engineer, writer, builder, Russian adoptee, host of Voice of Adoptees, and founder of the Russian Adoptees Organization.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "https://www.davidschunk.com/about",
    title: "About David Schunk",
    description:
      "IT engineer, writer, builder, Russian adoptee, podcast host, and community organizer.",
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const facts = [
  ["Born", "Smolensk, Russia"],
  ["Raised", "New Hampshire"],
  ["Education", "Champlain College · 2017"],
  ["Profession", "IT engineering"],
  ["Publication", "Everyday IT Tips"],
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
              <p className="ds-page-kicker">About David</p>
              <h1 className="ds-page-title">More than one story can be true at the same time.</h1>
            </div>
            <p className="ds-page-dek">
              I&apos;m an IT engineer, writer, builder, Russian adoptee, and
              community organizer. Technology is the profession. Curiosity is
              the constant. The rest is a life that refuses to fit into one box.
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
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
                <a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit <Arrow /></a>
              </div>
            </aside>

            <div className="ds-about-prose">
              <section className="ds-about-chapter">
                <p className="ds-about-lead">
                  I was born in Smolensk, Russia in 1994, adopted as a child,
                  and raised in New Hampshire. That origin story matters to me,
                  but it is not the only thing that explains who I became.
                </p>
                <p>
                  I grew up curious about how things worked. Computers turned
                  that curiosity into a profession: first troubleshooting,
                  then systems administration, then infrastructure, automation,
                  identity, virtualization, cloud platforms, security, and the
                  operational discipline required to keep real environments running.
                </p>
                <p>
                  I graduated from Champlain College in 2017 and built my career
                  around enterprise IT. The part I enjoy most is not simply
                  making a system work. It is making the system understandable:
                  documented, recoverable, maintainable, and less dependent on
                  tribal knowledge.
                </p>
              </section>

              <section className="ds-about-chapter">
                <p className="ds-section-kicker">Technology</p>
                <h2>Good infrastructure should survive the person who built it.</h2>
                <p>
                  That principle drives most of my technical work. I build and
                  manage Windows infrastructure, Active Directory, Microsoft
                  365, virtualization, networking, monitoring, backup and
                  recovery, endpoint systems, automation, and the documentation
                  that connects all of those pieces.
                </p>
                <p>
                  Outside of work, I maintain a hands-on infrastructure lab and
                  publish tools and field guides. Everyday IT Tips grew from a
                  simple belief: a useful technical answer should be clear enough
                  to follow under pressure and complete enough to be worth
                  bookmarking.
                </p>
                <div className="ds-actions">
                  <a className="ds-button ds-button-primary" href="https://everydayittips.com" target="_blank" rel="noreferrer">
                    Everyday IT Tips <Arrow />
                  </a>
                  <a className="ds-button ds-button-secondary" href="https://github.com/dschunk" target="_blank" rel="noreferrer">
                    GitHub <Arrow />
                  </a>
                </div>
              </section>

              <section className="ds-about-chapter">
                <p className="ds-section-kicker">Adoption</p>
                <h2>Eventually, my personal history became public work.</h2>
                <p>
                  Being adopted from Russia gave me questions that did not have
                  tidy answers: about identity, culture, citizenship, family,
                  belonging, and what happens when other people tell an
                  adoptee&apos;s story before the adoptee gets to tell it themselves.
                </p>
                <p>
                  Voice of Adoptees became a place for those first-person stories.
                  The goal has never been to make every adoptee agree. It is to
                  make room for the complexity—to let people speak from their own
                  lives without forcing those lives into somebody else&apos;s narrative.
                </p>
                <p>
                  I later founded the Russian Adoptees Organization to give
                  adoptees from Russia and the former Soviet Union a more durable
                  community home: a place for connection, resources, institutional
                  memory, and public-facing work built by adoptees themselves.
                </p>
                <div className="ds-actions">
                  <a className="ds-button ds-button-primary" href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">
                    Voice of Adoptees <Arrow />
                  </a>
                  <a className="ds-button ds-button-secondary" href="https://russianadoptees.com" target="_blank" rel="noreferrer">
                    Russian Adoptees <Arrow />
                  </a>
                </div>
              </section>

              <section className="ds-about-chapter">
                <p className="ds-section-kicker">Writing & building</p>
                <h2>I tend to respond to a missing thing by building it.</h2>
                <p>
                  Sometimes that means a PowerShell utility. Sometimes it means
                  a website, a research paper, a community platform, a podcast,
                  a lab environment, or a guide that answers the question I wish
                  somebody had answered more clearly.
                </p>
                <p>
                  This personal site is meant to reflect that whole picture.
                  I do not want a professional portfolio that edits out the human
                  parts, or a personal biography that pretends the technical work
                  is incidental. Both are real. Both shape how I think.
                </p>
              </section>

              <section className="ds-about-chapter">
                <p className="ds-section-kicker">Today</p>
                <h2>Keep learning. Keep documenting. Keep making useful things.</h2>
                <p>
                  I live in New Hampshire and continue to work in IT while
                  publishing, building independent projects, interviewing
                  adoptees, and developing community resources. I am interested
                  in systems—technical and human—and in what makes them more
                  resilient, understandable, and useful.
                </p>
                <div className="ds-actions">
                  <Link className="ds-button ds-button-primary" href="/#work">
                    See selected work <Arrow />
                  </Link>
                  <Link className="ds-button ds-button-secondary" href="/#contact">
                    Get in touch <Arrow />
                  </Link>
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
