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

const timeline = [
  ["1994", "Smolensk, Russia", "Born in Russia."],
  ["1996", "New Hampshire", "Adopted and raised in New Hampshire."],
  ["2017", "Champlain College", "Graduated and kept building a career in IT."],
  ["Now", "Systems + words + people", "Infrastructure engineer, writer, podcaster, and community builder."],
];

export default function AboutPage() {
  return (
    <div className="ds-site">
      <SiteHeader />

      <main>
        <section className="ds-subhero">
          <div className="ds-shell">
            <span className="ds-subhero-index">About / 01</span>
            <h1>More than a résumé.</h1>
            <p>
              The short version: I work in IT, build a lot of things on the internet,
              write what I learn, and care deeply about adoptee voices and community.
            </p>
          </div>
        </section>

        <section className="ds-about-opening">
          <div className="ds-shell ds-about-opening-grid">
            <p className="ds-about-opening-lead">
              I was born in Smolensk, Russia in 1994, adopted as a child, and grew
              up in New Hampshire. Technology eventually became my career. The
              rest of this site grew around it.
            </p>
            <div className="ds-about-note">
              <span>What I care about</span>
              <strong>Useful systems. Clear writing. Honest conversations. Work that survives handoff.</strong>
            </div>
          </div>
        </section>

        <section className="ds-timeline-section">
          <div className="ds-shell">
            <div className="ds-section-topline">
              <span>A few coordinates</span>
              <p>Not the whole story. Just the useful map.</p>
            </div>
            <div className="ds-timeline">
              {timeline.map(([year, title, copy]) => (
                <div className="ds-timeline-row" key={year}>
                  <span>{year}</span>
                  <h2>{title}</h2>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-about-chapters">
          <div className="ds-shell">
            <article>
              <span>01 / Work</span>
              <h2>I like infrastructure that makes sense after the person who built it leaves.</h2>
              <p>
                My professional work has covered systems administration, Windows
                Server, Active Directory, Group Policy, networking, virtualization,
                cloud platforms, identity, security, and end-user operations.
              </p>
              <p>
                The part I care about most is operational clarity: documentation,
                recovery, maintainability, and making sure the environment is not
                held together by one person&apos;s memory.
              </p>
            </article>

            <article>
              <span>02 / Build</span>
              <h2>Side projects are where curiosity gets a budget of zero and a deadline of whenever.</h2>
              <p>
                I maintain a homelab, publish PowerShell tools, write practical IT
                guides, build websites, experiment with infrastructure, and usually
                have several projects competing for attention.
              </p>
              <div className="ds-text-actions">
                <a href="https://everydayittips.com" target="_blank" rel="noreferrer">Everyday IT Tips ↗</a>
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </article>

            <article>
              <span>03 / Adoption</span>
              <h2>My adoptee work started with my own questions and got much bigger than that.</h2>
              <p>
                Voice of Adoptees became a place for long-form conversations about
                identity, family, culture, reunion, loss, belonging, and the parts
                of adoption that do not fit into a simple narrative.
              </p>
              <p>
                The Russian Adoptees Organization grew from the need for something
                more permanent: community, resources, public records, and an
                adoptee-led institution with a long memory.
              </p>
              <div className="ds-text-actions">
                <a href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">Voice of Adoptees ↗</a>
                <a href="https://russianadoptees.com" target="_blank" rel="noreferrer">Russian Adoptees ↗</a>
              </div>
            </article>
          </div>
        </section>

        <section className="ds-about-cta">
          <div className="ds-shell">
            <p>That&apos;s enough autobiography for one page.</p>
            <h2>See what I&apos;m building now.</h2>
            <div className="ds-inline-actions">
              <Link href="/#work">Selected work →</Link>
              <Link href="/#contact">Contact me →</Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
