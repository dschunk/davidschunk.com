import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "David Schunk is an IT engineer in New Hampshire who writes about practical technology and builds projects for the adoptee community.",
  openGraph: { url: "https://www.davidschunk.com/" },
};

const projects = [
  {
    number: "01",
    title: "Everyday IT Tips",
    type: "Technical publication",
    description:
      "Practical field notes for Windows, infrastructure, troubleshooting, security, systems administration, and the problems that show up at 3 A.M.",
    href: "https://everydayittips.com",
  },
  {
    number: "02",
    title: "Windows IT Toolkit",
    type: "Open source",
    description:
      "PowerShell tools for Windows administration, Active Directory, Group Policy, evidence collection, and everyday operations.",
    href: "https://github.com/dschunk/windows-it-toolkit",
  },
  {
    number: "03",
    title: "Voice of Adoptees",
    type: "Independent media",
    description:
      "Long-form conversations with adoptees about identity, family, culture, policy, reunion, belonging, and lived experience.",
    href: "https://voiceofadoptees.com",
  },
  {
    number: "04",
    title: "Russian Adoptees Organization",
    type: "Community",
    description:
      "A public resource and community platform for adoptees from Russia and the former Soviet Union.",
    href: "https://russianadoptees.com",
  },
];

const writing = [
  {
    title: "Checks and Balances for Artificial Intelligence",
    meta: "Research · AI governance",
    href: "/research/ai-governance",
    internal: true,
  },
  {
    title: "A U.S.-Russia Policy for an Era of Conflict",
    meta: "Foreign policy · U.S.–Russia relations",
    href: "/research/russia-policy",
    internal: true,
  },
  {
    title: "Windows Server post-build checklist",
    meta: "Guide · Windows Server",
    href: "https://everydayittips.com/guides/windows-server-post-build-checklist/",
  },
  {
    title: "Windows network troubleshooting toolkit",
    meta: "Guide · Networking",
    href: "https://everydayittips.com/guides/windows-network-troubleshooting-toolkit/",
  },
  {
    title: "PowerShell disk-space triage",
    meta: "Guide · PowerShell",
    href: "https://everydayittips.com/guides/powershell-disk-space-triage/",
  },
];

export default function Home() {
  return (
    <div className="ds-site">
      <SiteHeader />

      <main>
        <section className="ds-home-hero">
          <div className="ds-shell ds-hero-frame">
            <div className="ds-home-hero-grid">
              <div className="ds-home-intro">
                <p className="ds-eyebrow ds-eyebrow-light">IT Engineering · Writing · Community</p>

                <h1>
                  <span>David</span>
                  <span>Schunk.</span>
                </h1>

                <p className="ds-hero-statement">
                  Engineer. Writer. Builder.
                </p>

                <p className="ds-home-lead">
                  I run infrastructure, write practical technical guidance, build
                  independent projects, and host long-form conversations with adoptees.
                </p>

                <div className="ds-actions ds-actions-hero">
                  <a className="ds-button ds-button-gold" href="#work">View the work</a>
                  <Link className="ds-button ds-button-ghost" href="/about">Read my profile</Link>
                </div>

                <div className="ds-hero-facts" aria-label="Profile summary">
                  <div>
                    <span>Based</span>
                    <strong>New Hampshire</strong>
                  </div>
                  <div>
                    <span>Field</span>
                    <strong>Infrastructure & Systems</strong>
                  </div>
                  <div>
                    <span>Also</span>
                    <strong>Writing & Community</strong>
                  </div>
                </div>
              </div>

              <aside className="ds-portrait-panel">
                <div className="ds-portrait-rule">Personal Profile</div>
                <div className="ds-portrait-wrap">
                  <img src="/david-schunk-portrait.svg" alt="Portrait of David Schunk" />
                </div>
                <div className="ds-portrait-caption">
                  <span>David Schunk</span>
                  <span>New Hampshire, U.S.A.</span>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="ds-briefing-bar">
          <div className="ds-shell ds-briefing-grid">
            <div className="ds-briefing-title">
              <span className="ds-briefing-mark">DS</span>
              <div>
                <small>Current focus</small>
                <strong>Build it well. Document it clearly.</strong>
              </div>
            </div>
            <p>
              Enterprise IT, PowerShell, open-source tools, practical technical
              writing, independent research, and adoptee-led community projects.
            </p>
            <div className="ds-briefing-links">
              <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit ↗</a>
            </div>
          </div>
        </section>

        <section className="ds-section ds-work-section" id="work">
          <div className="ds-shell">
            <div className="ds-section-title ds-section-title-command">
              <div>
                <p className="ds-eyebrow">Selected work</p>
                <h2>The work speaks first.</h2>
              </div>
              <p>
                Technology, publishing, open source, and community work—built
                independently, maintained seriously, and meant to be useful.
              </p>
            </div>

            <div className="ds-project-grid">
              {projects.map((project) => (
                <article className="ds-project-card" key={project.title}>
                  <div className="ds-card-topline">
                    <span className="ds-project-number">{project.number}</span>
                    <span className="ds-project-type">{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Open project <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-publications" id="writing">
          <div className="ds-shell">
            <div className="ds-publications-head">
              <div>
                <p className="ds-eyebrow ds-eyebrow-light">Writing & research</p>
                <h2>Publications.</h2>
              </div>
              <p>
                Technical documentation, independent research, and longer-form work
                on systems, technology, and public questions.
              </p>
            </div>

            <div className="ds-writing-list">
              {writing.map((item, index) => (
                <article key={item.title}>
                  <span className="ds-writing-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <span>{item.meta}</span>
                    <h3>{item.title}</h3>
                  </div>
                  {item.internal ? (
                    <Link href={item.href}>Read <span aria-hidden="true">→</span></Link>
                  ) : (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      Read <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div className="ds-section-link">
              <a href="https://everydayittips.com" target="_blank" rel="noreferrer">
                Browse the technical library ↗
              </a>
            </div>
          </div>
        </section>

        <section className="ds-section ds-community-section" id="adoption">
          <div className="ds-shell">
            <div className="ds-section-title">
              <div>
                <p className="ds-eyebrow">Community & media</p>
                <h2>Adoptee voices belong in the room.</h2>
              </div>
              <p>
                I was born in Smolensk, Russia and adopted as a child. That history
                eventually became years of interviewing, organizing, publishing,
                and building community with other adoptees.
              </p>
            </div>

            <div className="ds-community-grid">
              <article>
                <div className="ds-community-kicker">Independent podcast</div>
                <h3>Voice of Adoptees</h3>
                <p>
                  A long-form interview project created to let adoptees speak in
                  their own words about identity, family, culture, reunion, loss,
                  belonging, and everything that refuses to fit a slogan.
                </p>
                <a href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">
                  Visit Voice of Adoptees ↗
                </a>
              </article>

              <article>
                <div className="ds-community-kicker">Community organization</div>
                <h3>Russian Adoptees Organization</h3>
                <p>
                  A permanent public home for Russian and former Soviet adoptees
                  to connect, share resources, preserve community knowledge, and
                  speak for ourselves.
                </p>
                <a href="https://russianadoptees.com" target="_blank" rel="noreferrer">
                  Visit Russian Adoptees ↗
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="ds-about-strip">
          <div className="ds-shell ds-about-strip-grid">
            <div>
              <p className="ds-eyebrow ds-eyebrow-light">Profile</p>
              <h2>Russia. New Hampshire. Champlain. A career in IT.</h2>
            </div>
            <div>
              <p>
                Born in Russia, raised in New Hampshire, and a Champlain College
                graduate. My career is in enterprise IT; the rest of this site is
                what happens when I keep building after the workday ends.
              </p>
              <Link href="/about">Read the full profile <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="ds-section ds-contact-section" id="contact">
          <div className="ds-shell ds-contact-grid">
            <div className="ds-contact-copy">
              <p className="ds-eyebrow">Contact</p>
              <h2>Have something worth discussing?</h2>
              <p>
                Technology, writing, podcasting, adoptee work, open source, research,
                or an independent project. Send the context and tell me what you have in mind.
              </p>
              <div className="ds-contact-links">
                <Link href="/hire">Collaboration details →</Link>
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>

            <ContactForm
              heading="Send a message"
              description="Direct to me."
              messagePlaceholder="What would you like to talk about?"
              idleMessage="I read every message myself."
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
