import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "David Schunk is an IT engineer, technical writer, open-source builder, podcast host, and adoptee community organizer in New Hampshire.",
  openGraph: { url: "https://www.davidschunk.com/" },
};

const projects = [
  {
    number: "01",
    name: "Everyday IT Tips",
    type: "Technical writing",
    description:
      "Practical Windows, infrastructure, PowerShell, security, and troubleshooting guides written for people doing the work.",
    href: "https://everydayittips.com",
  },
  {
    number: "02",
    name: "Windows IT Toolkit",
    type: "Open source",
    description:
      "PowerShell tools for Active Directory, Group Policy, Windows administration, evidence collection, and repeatable operations.",
    href: "https://github.com/dschunk/windows-it-toolkit",
  },
  {
    number: "03",
    name: "Voice of Adoptees",
    type: "Podcast",
    description:
      "Long-form conversations that give adoptees room to talk about identity, family, culture, reunion, belonging, and everything in between.",
    href: "https://voiceofadoptees.com",
  },
  {
    number: "04",
    name: "Russian Adoptees Organization",
    type: "Community",
    description:
      "A permanent public home for adoptees from Russia and the former Soviet Union: resources, connection, records, and advocacy.",
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
        <section className="ds-home-hero">
          <div className="ds-shell">
            <div className="ds-hero-meta">
              <span>IT engineer · New Hampshire</span>
              <span>Personal site / 2026</span>
            </div>

            <h1 className="ds-nameplate">
              <span>DAVID</span>
              <span>SCHUNK</span>
            </h1>

            <div className="ds-hero-bottom">
              <p className="ds-hero-statement">
                I make complicated systems easier to run, explain, and hand off.
              </p>
              <div className="ds-hero-intro">
                <p>
                  I work in infrastructure, write the documentation I wish existed,
                  build useful tools, host Voice of Adoptees, and keep turning side
                  projects into real things.
                </p>
                <div className="ds-inline-actions">
                  <a href="#work">Selected work ↓</a>
                  <Link href="/about">About me →</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="ds-hero-accent" aria-hidden="true">
            <span>Systems</span>
            <span>Writing</span>
            <span>Open source</span>
            <span>Community</span>
          </div>
        </section>

        <section className="ds-work-index" id="work">
          <div className="ds-shell">
            <div className="ds-section-topline">
              <span>01 / Work</span>
              <p>Things I build, write, maintain, and care enough about to keep improving.</p>
            </div>

            <div className="ds-project-list">
              {projects.map((project) => (
                <a
                  className="ds-project-row"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  key={project.name}
                >
                  <span className="ds-project-number">{project.number}</span>
                  <div className="ds-project-title">
                    <small>{project.type}</small>
                    <h2>{project.name}</h2>
                  </div>
                  <p>{project.description}</p>
                  <span className="ds-project-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-writing-stage" id="writing">
          <div className="ds-shell">
            <div className="ds-section-topline ds-section-topline-light">
              <span>02 / Writing</span>
              <p>Field notes, research, and longer work.</p>
            </div>

            <div className="ds-writing-feature">
              <p>Featured</p>
              <h2>Write the answer down so nobody has to rediscover it at 3 A.M.</h2>
              <a href="https://everydayittips.com" target="_blank" rel="noreferrer">
                Visit Everyday IT Tips ↗
              </a>
            </div>

            <div className="ds-writing-rows">
              {writing.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
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

        <section className="ds-life-section" id="story">
          <div className="ds-shell">
            <div className="ds-life-line">
              <span>03 / Story</span>
              <strong>RUSSIA → NEW HAMPSHIRE → IT</strong>
            </div>

            <div className="ds-life-grid">
              <div className="ds-life-big">
                <h2>Technology is the career. Building is the habit.</h2>
              </div>
              <div className="ds-life-copy">
                <p>
                  I was born in Smolensk, Russia, adopted as a child, and raised in
                  New Hampshire. Computers turned into a career; writing turned
                  into a habit; adoption turned into years of conversations and
                  community work.
                </p>
                <p>
                  This website is where those pieces get to exist together without
                  pretending they are one neat professional category.
                </p>
                <Link href="/about">Read the longer version →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-worlds" id="adoption">
          <div className="ds-world ds-world-tech">
            <div className="ds-world-inner">
              <span>Technical work</span>
              <h2>Build it so someone else can run it.</h2>
              <p>
                Infrastructure, automation, recovery, documentation, and tools
                designed for the person who inherits the system next.
              </p>
              <a href="https://everydayittips.com" target="_blank" rel="noreferrer">Explore the technical work ↗</a>
            </div>
          </div>

          <div className="ds-world ds-world-people">
            <div className="ds-world-inner">
              <span>Adoptee work</span>
              <h2>Build the platform. Let people speak for themselves.</h2>
              <p>
                Voice of Adoptees and the Russian Adoptees Organization both grew
                from that idea.
              </p>
              <div className="ds-world-links">
                <a href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">Voice of Adoptees ↗</a>
                <a href="https://russianadoptees.com" target="_blank" rel="noreferrer">Russian Adoptees ↗</a>
              </div>
            </div>
          </div>
        </section>

        <section className="ds-contact-stage" id="contact">
          <div className="ds-shell ds-contact-layout">
            <div className="ds-contact-lead">
              <span>04 / Contact</span>
              <h2>HELLO.</h2>
              <p>
                Technology, writing, podcasts, open source, adoptee work, research,
                or a project that needs somebody who enjoys figuring things out.
              </p>
              <div className="ds-social-line">
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://discord.gg/3phxzXBsAA" target="_blank" rel="noreferrer">Discord ↗</a>
              </div>
            </div>

            <ContactForm
              heading="Send a message"
              description="It goes directly to me."
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
