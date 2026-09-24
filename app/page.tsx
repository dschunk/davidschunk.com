import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "David Schunk is an IT engineer in New Hampshire who writes about practical technology, builds useful tools, and creates adoptee-led media and community projects.",
  openGraph: { url: "https://www.davidschunk.com/" },
};

const projects = [
  {
    number: "01",
    title: "Everyday IT Tips",
    eyebrow: "Technical writing",
    description:
      "The guides I wish existed when something breaks at 3 A.M. Windows, infrastructure, PowerShell, troubleshooting, security, and real-world operations.",
    href: "https://everydayittips.com",
  },
  {
    number: "02",
    title: "Windows IT Toolkit",
    eyebrow: "Open source",
    description:
      "PowerShell tools for Windows administration, Active Directory, Group Policy, evidence collection, and everyday systems work.",
    href: "https://github.com/dschunk/windows-it-toolkit",
  },
  {
    number: "03",
    title: "Voice of Adoptees",
    eyebrow: "Podcast",
    description:
      "Long-form conversations where adoptees speak for themselves about identity, family, culture, reunion, belonging, and everything in between.",
    href: "https://voiceofadoptees.com",
  },
  {
    number: "04",
    title: "Russian Adoptees Organization",
    eyebrow: "Community",
    description:
      "A public home for adoptees from Russia and the former Soviet Union to connect, preserve knowledge, share resources, and build community.",
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
    meta: "Windows Server · Field guide",
    href: "https://everydayittips.com/guides/windows-server-post-build-checklist/",
  },
  {
    title: "Windows network troubleshooting toolkit",
    meta: "Networking · Field guide",
    href: "https://everydayittips.com/guides/windows-network-troubleshooting-toolkit/",
  },
];

export default function Home() {
  return (
    <div className="ds-site">
      <SiteHeader />

      <main>
        <section className="ds-hero">
          <div className="ds-hero-mountains" aria-hidden="true" />
          <div className="ds-shell ds-hero-inner">
            <div className="ds-hero-copy">
              <p className="ds-overline">Born in Russia · Raised in New Hampshire</p>
              <h1>David<br />Schunk</h1>
              <p className="ds-hero-role">
                IT engineer, writer, podcaster, and builder of useful things.
              </p>
              <p className="ds-hero-lead">
                I work on infrastructure for a living. Outside of work, I write
                practical technology guides, build open-source tools, run a
                homelab, interview adoptees, and turn ideas into projects.
              </p>
              <div className="ds-hero-actions">
                <a className="ds-button ds-button-light" href="#work">Explore my work</a>
                <Link className="ds-text-link ds-text-link-light" href="/about">More about me →</Link>
              </div>
            </div>

            <aside className="ds-hero-aside">
              <div className="ds-hero-aside-mark">
                <img src="/mountain-mark.svg" alt="" />
              </div>
              <p>
                <strong>New Hampshire is home.</strong>
                The mountains, the seasons, and the habit of figuring things out
                have become part of how I build.
              </p>
              <div className="ds-hero-aside-links">
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit ↗</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="ds-now">
          <div className="ds-shell ds-now-inner">
            <span className="ds-now-dot" aria-hidden="true" />
            <strong>Right now</strong>
            <p>Building Windows tools, writing field guides, maintaining community projects, and probably changing something in the homelab.</p>
          </div>
        </section>

        <section className="ds-section ds-work" id="work">
          <div className="ds-shell">
            <header className="ds-section-heading">
              <div>
                <span className="ds-section-number">01</span>
                <h2>The things I keep building.</h2>
              </div>
              <p>
                Some of it is infrastructure. Some of it is writing. Some of it
                started because I got tired of wishing somebody else would build it.
              </p>
            </header>

            <div className="ds-work-grid">
              {projects.map((project) => (
                <article className="ds-work-item" key={project.title}>
                  <div className="ds-work-number">{project.number}</div>
                  <div className="ds-work-copy">
                    <span>{project.eyebrow}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
                    Open <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-writing" id="writing">
          <div className="ds-shell">
            <header className="ds-writing-heading">
              <span className="ds-section-number ds-section-number-light">02</span>
              <h2>I write things down.</h2>
              <p>
                Because good documentation is cheaper than rediscovering the same
                answer six months later.
              </p>
            </header>

            <div className="ds-writing-feature">
              <div className="ds-writing-feature-copy">
                <span>Featured research</span>
                <h3>Checks and Balances for Artificial Intelligence</h3>
                <p>
                  A long-form framework for reducing public fear, preserving human
                  control, and building practical accountability into AI governance.
                </p>
                <Link href="/research/ai-governance">Read the paper →</Link>
              </div>
              <div className="ds-writing-feature-art" aria-hidden="true">
                <img src="/mountain-mark.svg" alt="" />
                <span>Research / 2026</span>
              </div>
            </div>

            <div className="ds-reading-list">
              {writing.slice(1).map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 2).padStart(2, "0")}</span>
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

            <a className="ds-writing-all" href="https://everydayittips.com" target="_blank" rel="noreferrer">
              Browse Everyday IT Tips ↗
            </a>
          </div>
        </section>

        <section className="ds-section ds-community" id="adoption">
          <div className="ds-shell">
            <header className="ds-section-heading">
              <div>
                <span className="ds-section-number">03</span>
                <h2>Adoption is part of the story too.</h2>
              </div>
              <p>
                I was born in Smolensk, Russia and adopted as a child. Years later,
                that history became conversations, advocacy, organizing, and a
                community much bigger than me.
              </p>
            </header>

            <div className="ds-community-grid">
              <article className="ds-community-primary">
                <span>Voice of Adoptees</span>
                <h3>More than 100 conversations. One simple idea: adoptees should speak for themselves.</h3>
                <p>
                  The podcast is a place for honest, long-form conversations about
                  identity, family, culture, reunion, loss, belonging, and the parts
                  of adoption that rarely fit into neat narratives.
                </p>
                <a href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">Visit Voice of Adoptees ↗</a>
              </article>

              <article className="ds-community-secondary">
                <span>Russian Adoptees Organization</span>
                <h3>A permanent home for the community.</h3>
                <p>
                  Resources, connection, public advocacy, shared history, and an
                  organization built around adoptee voices.
                </p>
                <a href="https://russianadoptees.com" target="_blank" rel="noreferrer">Visit RussianAdoptees.com ↗</a>
              </article>
            </div>
          </div>
        </section>

        <section className="ds-story">
          <div className="ds-shell ds-story-inner">
            <div className="ds-story-mark"><img src="/mountain-mark.svg" alt="" /></div>
            <div>
              <span className="ds-section-number">04</span>
              <h2>Russia → New Hampshire → Champlain → IT.</h2>
              <p>
                Computers became a career. Writing became a habit. Adoption became
                a community. This website is where all of those parts of my life
                are allowed to exist in the same place.
              </p>
              <Link href="/about">Read my story →</Link>
            </div>
          </div>
        </section>

        <section className="ds-section ds-contact-section" id="contact">
          <div className="ds-shell ds-contact-grid">
            <div className="ds-contact-copy">
              <span className="ds-section-number">05</span>
              <h2>Say hello.</h2>
              <p>
                Technology, writing, podcasting, adoptee work, open source,
                research, or a project you think I should know about.
              </p>
              <div className="ds-contact-links">
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://discord.gg/3phxzXBsAA" target="_blank" rel="noreferrer">Discord ↗</a>
              </div>
            </div>

            <ContactForm
              heading="Send me a message"
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
