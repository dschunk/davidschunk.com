import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "David Schunk is an IT engineer, technical writer, open-source builder, podcaster, and adoptee community organizer in New Hampshire.",
  openGraph: { url: "https://www.davidschunk.com/" },
};

const focus = [
  ["Infrastructure", "Windows, identity, virtualization, networking, cloud, recovery"],
  ["Writing", "Practical IT guides, research, field notes, long-form analysis"],
  ["Open source", "PowerShell tools and repeatable systems work"],
  ["Community", "Voice of Adoptees and the Russian Adoptees Organization"],
];

const projects = [
  {
    index: "01",
    title: "Everyday IT Tips",
    kind: "Technical publication",
    body:
      "A growing library of practical Windows, infrastructure, troubleshooting, PowerShell, security, and systems administration guides written for people doing the work.",
    href: "https://everydayittips.com",
    accent: "mint",
  },
  {
    index: "02",
    title: "Windows IT Toolkit",
    kind: "Open source",
    body:
      "PowerShell tools for Windows administration, Active Directory, Group Policy, evidence collection, and the routine operations that should not require reinventing the wheel.",
    href: "https://github.com/dschunk/windows-it-toolkit",
    accent: "violet",
  },
  {
    index: "03",
    title: "Voice of Adoptees",
    kind: "Independent media",
    body:
      "Long-form conversations with adoptees about identity, family, culture, reunion, belonging, loss, and the parts of adoption that are usually flattened into somebody else's narrative.",
    href: "https://voiceofadoptees.com",
    accent: "coral",
  },
  {
    index: "04",
    title: "Russian Adoptees Organization",
    kind: "Community",
    body:
      "A permanent public home for people adopted from Russia and the former Soviet Union: resources, community, public records, advocacy, and institutional outreach.",
    href: "https://russianadoptees.com",
    accent: "blue",
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
    meta: "Research · Foreign policy",
    href: "/research/russia-policy",
    internal: true,
  },
  {
    title: "Windows Server post-build checklist",
    meta: "Field guide · Windows Server",
    href: "https://everydayittips.com/guides/windows-server-post-build-checklist/",
  },
  {
    title: "Windows network troubleshooting toolkit",
    meta: "Field guide · Networking",
    href: "https://everydayittips.com/guides/windows-network-troubleshooting-toolkit/",
  },
];

export default function Home() {
  return (
    <div className="ds-site">
      <SiteHeader />

      <main>
        <section className="ds-hero">
          <div className="ds-hero-grid-bg" aria-hidden="true" />
          <div className="ds-orb ds-orb-a" aria-hidden="true" />
          <div className="ds-orb ds-orb-b" aria-hidden="true" />

          <div className="ds-shell ds-hero-layout">
            <div className="ds-hero-copy">
              <div className="ds-status-pill"><i /> New Hampshire · IT Engineering</div>
              <p className="ds-hero-name">David Schunk</p>
              <h1>I build systems.<br /><span>Then I explain them.</span></h1>
              <p className="ds-hero-lede">
                Infrastructure engineer by trade. Writer, open-source builder,
                podcaster, and adoptee community organizer by choice.
              </p>
              <div className="ds-hero-actions">
                <a className="ds-btn ds-btn-primary" href="#work">See the work</a>
                <Link className="ds-btn ds-btn-quiet" href="/about">About me</Link>
              </div>
            </div>

            <aside className="ds-command-card">
              <div className="ds-command-top">
                <span>Current desk</span>
                <span className="ds-live"><i /> active</span>
              </div>
              <div className="ds-command-intro">
                <strong>What I spend time on</strong>
                <p>Real systems, useful documentation, public projects, and communities worth maintaining.</p>
              </div>
              <div className="ds-focus-list">
                {focus.map(([title, copy], index) => (
                  <div className="ds-focus-row" key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><strong>{title}</strong><p>{copy}</p></div>
                  </div>
                ))}
              </div>
              <div className="ds-command-links">
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="ds-signal">
          <div className="ds-shell ds-signal-inner">
            <span>Infrastructure</span>
            <span>PowerShell</span>
            <span>Windows</span>
            <span>Documentation</span>
            <span>Open source</span>
            <span>Adoptee community</span>
          </div>
        </section>

        <section className="ds-section ds-work" id="work">
          <div className="ds-shell">
            <div className="ds-section-head">
              <div>
                <p className="ds-kicker">Selected work</p>
                <h2>Projects with a reason to exist.</h2>
              </div>
              <p>
                I like useful things: tools that save time, documentation that removes ambiguity,
                media that gives people room to speak, and communities that outlast a social feed.
              </p>
            </div>

            <div className="ds-project-grid">
              {projects.map((project) => (
                <article className={`ds-project ds-project-${project.accent}`} key={project.title}>
                  <div className="ds-project-meta">
                    <span>{project.index}</span>
                    <span>{project.kind}</span>
                  </div>
                  <div className="ds-project-body">
                    <h3>{project.title}</h3>
                    <p>{project.body}</p>
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer">Open project <span>↗</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-writing" id="writing">
          <div className="ds-shell ds-writing-layout">
            <div className="ds-writing-intro">
              <p className="ds-kicker ds-kicker-light">Writing & research</p>
              <h2>I write the answer down.</h2>
              <p>
                Technical field guides, independent research, and longer work on systems,
                policy, technology, and the questions I keep coming back to.
              </p>
              <a href="https://everydayittips.com" target="_blank" rel="noreferrer">Visit Everyday IT Tips ↗</a>
            </div>

            <div className="ds-writing-list">
              {writing.map((item, index) => (
                <article key={item.title}>
                  <span className="ds-writing-num">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{item.meta}</small>
                    <h3>{item.title}</h3>
                  </div>
                  {item.internal ? (
                    <Link href={item.href}>Read →</Link>
                  ) : (
                    <a href={item.href} target="_blank" rel="noreferrer">Read ↗</a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-section ds-dual" id="adoption">
          <div className="ds-shell">
            <div className="ds-section-head">
              <div>
                <p className="ds-kicker">Two worlds, one site</p>
                <h2>Technology is only half the story.</h2>
              </div>
              <p>
                I was born in Smolensk, Russia and adopted as a child. That history
                eventually became years of conversations, organizing, research, and community building.
              </p>
            </div>

            <div className="ds-dual-grid">
              <article className="ds-dual-panel ds-dual-tech">
                <div className="ds-dual-icon">&gt;_</div>
                <span>Technology</span>
                <h3>Build it so the next person can understand it.</h3>
                <p>
                  That principle shows up in how I approach infrastructure, documentation,
                  automation, recovery, and every technical project I publish.
                </p>
                <a href="https://everydayittips.com" target="_blank" rel="noreferrer">Explore technical work ↗</a>
              </article>

              <article className="ds-dual-panel ds-dual-adoption">
                <div className="ds-dual-icon">VOA</div>
                <span>Adoptee work</span>
                <h3>People should be able to tell their own story.</h3>
                <p>
                  Voice of Adoptees and the Russian Adoptees Organization both came
                  from the same idea: build the platform, then make room for people to use it.
                </p>
                <div className="ds-dual-links">
                  <a href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">Voice of Adoptees ↗</a>
                  <a href="https://russianadoptees.com" target="_blank" rel="noreferrer">Russian Adoptees ↗</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="ds-profile">
          <div className="ds-shell ds-profile-grid">
            <div className="ds-profile-label">
              <span>Profile</span>
              <strong>Russia → NH → IT</strong>
            </div>
            <div className="ds-profile-copy">
              <h2>Born in Russia. Raised in New Hampshire. Built a career in systems.</h2>
              <p>
                Champlain College graduate. Enterprise IT engineer. Homelab enthusiast.
                Technical writer. Podcast host. Community builder. This site is the place
                where all of those threads stay connected.
              </p>
              <Link href="/about">Read the full story →</Link>
            </div>
          </div>
        </section>

        <section className="ds-contact-section" id="contact">
          <div className="ds-shell ds-contact-grid">
            <div className="ds-contact-copy">
              <p className="ds-kicker ds-kicker-light">Contact</p>
              <h2>Have something worth talking about?</h2>
              <p>
                Technology, writing, podcasts, open source, adoptee work, research,
                or a weird project that needs somebody who likes figuring things out.
              </p>
              <div className="ds-contact-links">
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://discord.gg/3phxzXBsAA" target="_blank" rel="noreferrer">Discord ↗</a>
              </div>
            </div>

            <ContactForm
              heading="Send me a message"
              description="It lands directly with me."
              messagePlaceholder="What are you working on?"
              idleMessage="I read every message myself."
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
