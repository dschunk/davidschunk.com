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

export default function AboutPage() {
  return (
    <div className="ds-site">
      <SiteHeader />

      <main>
        <section className="ds-subpage-intro">
          <div className="ds-shell">
            <p className="ds-overline">About</p>
            <h1>I&apos;m David.</h1>
            <p>
              I work in IT, write about technology, build things on the internet,
              host Voice of Adoptees, and spend a lot of my free time turning ideas
              into projects.
            </p>
          </div>
        </section>

        <section className="ds-about-body">
          <div className="ds-shell ds-about-grid">
            <aside>
              <div><span>Born</span><strong>Smolensk, Russia</strong></div>
              <div><span>Raised</span><strong>New Hampshire</strong></div>
              <div><span>College</span><strong>Champlain College</strong></div>
              <div><span>Work</span><strong>IT engineering</strong></div>
            </aside>

            <div className="ds-about-copy">
              <section>
                <h2>Technology became the career.</h2>
                <p>
                  I graduated from Champlain College in 2017 and have spent my
                  professional life working across systems administration,
                  infrastructure, Windows Server, Active Directory, networking,
                  virtualization, cloud platforms, identity, security, and
                  end-user operations.
                </p>
                <p>
                  What I care about most is making environments easier to understand
                  and operate. Good documentation, recoverability, maintainability,
                  and clean handoff matter more to me than clever complexity.
                </p>
              </section>

              <section>
                <h2>I build outside of work too.</h2>
                <p>
                  I maintain a homelab, publish PowerShell tools, write practical IT
                  guides, build websites, and experiment with whatever seems useful.
                </p>
                <div className="ds-text-links">
                  <a href="https://everydayittips.com" target="_blank" rel="noreferrer">Everyday IT Tips ↗</a>
                  <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                </div>
              </section>

              <section>
                <h2>Adoption became a community.</h2>
                <p>
                  I was adopted from Russia as a child. Years later, my own questions
                  led to conversations with other adoptees, then to Voice of Adoptees,
                  and eventually to the Russian Adoptees Organization.
                </p>
                <p>
                  Both projects are built around the same principle: adoptees should
                  have space to speak for themselves and resources that do not disappear
                  when a social-media thread gets buried.
                </p>
                <div className="ds-text-links">
                  <a href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">Voice of Adoptees ↗</a>
                  <a href="https://russianadoptees.com" target="_blank" rel="noreferrer">Russian Adoptees ↗</a>
                </div>
              </section>

              <section>
                <h2>This site is the overlap.</h2>
                <p>
                  It is where the technical work, writing, research, podcasting,
                  community projects, and the rest of my life can live in one place.
                </p>
                <div className="ds-text-links">
                  <Link href="/#work">Selected work →</Link>
                  <Link href="/#contact">Contact me →</Link>
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
