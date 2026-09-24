import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "David Schunk is an IT engineer in New Hampshire who writes practical technical guidance, builds open-source tools, and creates adoptee-led media and community projects.",
  openGraph: { url: "https://www.davidschunk.com/" },
};

const projects = [
  {
    number: "01",
    title: "Everyday IT Tips",
    type: "Technical writing",
    description:
      "Field-tested guides for Windows, infrastructure, troubleshooting, security, systems administration, and the problems that tend to appear at the worst possible time.",
    href: "https://everydayittips.com",
  },
  {
    number: "02",
    title: "Windows IT Toolkit",
    type: "Open source",
    description:
      "PowerShell tools for Windows administration, Active Directory, Group Policy, evidence collection, and the routine work that should be easier than it is.",
    href: "https://github.com/dschunk/windows-it-toolkit",
  },
  {
    number: "03",
    title: "Voice of Adoptees",
    type: "Independent media",
    description:
      "Long-form conversations with adoptees about identity, family, culture, reunion, belonging, loss, and the experiences that do not fit neatly into a slogan.",
    href: "https://voiceofadoptees.com",
  },
  {
    number: "04",
    title: "Russian Adoptees Organization",
    type: "Community",
    description:
      "A public resource and community platform built by and for adoptees from Russia and the former Soviet Union.",
    href: "https://russianadoptees.com",
  },
];

const writing = [
  {
    title: "Checks and Balances for Artificial Intelligence",
    meta: "AI governance · Research",
    href: "/research/ai-governance",
    internal: true,
  },
  {
    title: "A U.S.-Russia Policy for an Era of Conflict",
    meta: "Foreign policy · Research",
    href: "/research/russia-policy",
    internal: true,
  },
  {
    title: "Windows Server post-build checklist",
    meta: "Windows Server · Guide",
    href: "https://everydayittips.com/guides/windows-server-post-build-checklist/",
  },
  {
    title: "Windows network troubleshooting toolkit",
    meta: "Networking · Guide",
    href: "https://everydayittips.com/guides/windows-network-troubleshooting-toolkit/",
  },
  {
    title: "PowerShell disk-space triage",
    meta: "PowerShell · Guide",
    href: "https://everydayittips.com/guides/powershell-disk-space-triage/",
  },
];

export default function Home() {
  return (
    <div className="ds-site">
      <SiteHeader />

      <main>
        <section className="ds-home-hero">
          <div className="ds-shell">
            <div className="ds-home-kicker">David Schunk · New Hampshire</div>

            <div className="ds-home-hero-grid">
              <div className="ds-home-intro">
                <h1>IT engineer.<br />Writer.<br />Builder.</h1>
                <p className="ds-home-lead">
                  I run infrastructure, write the documentation I wish existed,
                  build practical tools, and create independent projects around
                  technology and the adoptee community.
                </p>

                <div className="ds-actions ds-actions-hero">
                  <a className="ds-button ds-button-primary" href="#work">See what I build</a>
                  <Link className="ds-button ds-button-secondary" href="/about">About me</Link>
                </div>
              </div>

              <aside className="ds-home-note" aria-label="At a glance">
                <p>
                  This is my personal corner of the internet. No corporate
                  mission statement. No startup jargon. Just the work, the writing,
                  the projects, and the things I care enough about to keep building.
                </p>
                <dl>
                  <div><dt>Work</dt><dd>Infrastructure & systems</dd></div>
                  <div><dt>Writing</dt><dd>Practical technology</dd></div>
                  <div><dt>Community</dt><dd>Adoptee-led projects</dd></div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="ds-status-strip">
          <div className="ds-shell ds-status-grid">
            <strong>Currently building</strong>
            <p>Windows tools, technical guides, independent research, and community infrastructure.</p>
            <div>
              <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </section>

        <section className="ds-section" id="work">
          <div className="ds-shell">
            <header className="ds-section-head">
              <div>
                <p className="ds-eyebrow">Selected work</p>
                <h2>Things I actually maintain.</h2>
              </div>
              <p>
                Projects that solve a problem, document something useful, or give
                people a place to be heard.
              </p>
            </header>

            <div className="ds-project-list">
              {projects.map((project) => (
                <article className="ds-project-row" key={project.title}>
                  <div className="ds-project-number">{project.number}</div>
                  <div className="ds-project-main">
                    <span className="ds-project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                    Visit <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-publications" id="writing">
          <div className="ds-shell">
            <header className="ds-section-head ds-section-head-light">
              <div>
                <p className="ds-eyebrow">Writing & research</p>
                <h2>Read the work.</h2>
              </div>
              <p>
                Longer research, field notes, troubleshooting guides, and practical
                technical writing.
              </p>
            </header>

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
                Browse all technical writing ↗
              </a>
            </div>
          </div>
        </section>

        <section className="ds-section" id="adoption">
          <div className="ds-shell">
            <header className="ds-section-head">
              <div>
                <p className="ds-eyebrow">Community & media</p>
                <h2>Adoptee voices, in our own words.</h2>
              </div>
              <p>
                I was born in Smolensk, Russia and adopted as a child. Years later,
                that history grew into interviewing, organizing, publishing, and
                building with other adoptees.
              </p>
            </header>

            <div className="ds-community-list">
              <article>
                <span>Podcast</span>
                <h3>Voice of Adoptees</h3>
                <p>
                  Long-form conversations about identity, family, culture, reunion,
                  loss, belonging, and everything that refuses to fit into a simple
                  adoption narrative.
                </p>
                <a href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">Listen and explore ↗</a>
              </article>

              <article>
                <span>Organization</span>
                <h3>Russian Adoptees Organization</h3>
                <p>
                  A lasting public home where adoptees from Russia and the former
                  Soviet Union can connect, preserve community knowledge, share
                  resources, and speak for ourselves.
                </p>
                <a href="https://russianadoptees.com" target="_blank" rel="noreferrer">Visit the organization ↗</a>
              </article>
            </div>
          </div>
        </section>

        <section className="ds-profile-band">
          <div className="ds-shell ds-profile-band-grid">
            <p className="ds-eyebrow">The short version</p>
            <h2>Russia → New Hampshire → Champlain → a career in IT.</h2>
            <div>
              <p>
                My career is in enterprise technology. The rest of this site is
                what happens when I keep writing, tinkering, documenting, and
                building after the workday ends.
              </p>
              <Link href="/about">Read the full profile →</Link>
            </div>
          </div>
        </section>

        <section className="ds-section ds-contact-section" id="contact">
          <div className="ds-shell ds-contact-grid">
            <div className="ds-contact-copy">
              <p className="ds-eyebrow">Contact</p>
              <h2>Send me the useful details.</h2>
              <p>
                Technology, writing, podcasting, adoptee work, open source,
                research, or a project worth talking about.
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
