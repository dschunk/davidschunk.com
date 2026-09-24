import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "David Schunk is an IT engineer in New Hampshire who writes about practical technology, builds open-source tools, hosts Voice of Adoptees, and creates independent projects.",
  openGraph: { url: "https://www.davidschunk.com/" },
};

const work = [
  {
    title: "Everyday IT Tips",
    type: "Technical writing",
    description:
      "Practical guides for Windows, infrastructure, PowerShell, security, troubleshooting, and real-world IT operations.",
    href: "https://everydayittips.com",
  },
  {
    title: "Windows IT Toolkit",
    type: "Open source",
    description:
      "PowerShell tools for Windows administration, Active Directory, Group Policy, and repeatable systems work.",
    href: "https://github.com/dschunk/windows-it-toolkit",
  },
  {
    title: "Voice of Adoptees",
    type: "Podcast",
    description:
      "Long-form conversations with adoptees about identity, family, culture, reunion, loss, and belonging.",
    href: "https://voiceofadoptees.com",
  },
  {
    title: "Russian Adoptees Organization",
    type: "Community",
    description:
      "Resources, community, public records, and advocacy for adoptees from Russia and the former Soviet Union.",
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
        <section className="ds-home-intro">
          <div className="ds-shell ds-home-intro-inner">
            <p className="ds-overline">David Schunk · New Hampshire</p>
            <h1>IT engineer, writer, and builder.</h1>
            <p className="ds-home-summary">
              I work in infrastructure, write practical technology guides, build
              open-source tools, host Voice of Adoptees, and create independent
              projects around technology and the adoptee community.
            </p>
            <div className="ds-home-links">
              <a href="#work">Selected work</a>
              <Link href="/about">About</Link>
              <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
        </section>

        <section className="ds-quiet-strip">
          <div className="ds-shell ds-quiet-strip-grid">
            <div>
              <span>Work</span>
              <p>Infrastructure, Windows, identity, networking, virtualization, cloud, and operations.</p>
            </div>
            <div>
              <span>Writing</span>
              <p>Technical guides, research, field notes, and long-form analysis.</p>
            </div>
            <div>
              <span>Community</span>
              <p>Voice of Adoptees and the Russian Adoptees Organization.</p>
            </div>
          </div>
        </section>

        <section className="ds-plain-section" id="work">
          <div className="ds-shell">
            <div className="ds-section-heading">
              <span>Selected work</span>
              <h2>Things I keep building.</h2>
            </div>

            <div className="ds-work-list">
              {work.map((item, index) => (
                <a href={item.href} target="_blank" rel="noreferrer" className="ds-work-row" key={item.title}>
                  <span className="ds-index">{String(index + 1).padStart(2, "0")}</span>
                  <div className="ds-work-title">
                    <small>{item.type}</small>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                  <span className="ds-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-plain-section ds-section-alt" id="writing">
          <div className="ds-shell">
            <div className="ds-section-heading">
              <span>Writing</span>
              <h2>What I&apos;ve been publishing.</h2>
            </div>

            <div className="ds-writing-list">
              {writing.map((item) => (
                <article key={item.title}>
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

            <a className="ds-more-link" href="https://everydayittips.com" target="_blank" rel="noreferrer">
              More technical writing at Everyday IT Tips ↗
            </a>
          </div>
        </section>

        <section className="ds-plain-section" id="story">
          <div className="ds-shell ds-story-grid">
            <div className="ds-section-heading">
              <span>About</span>
              <h2>A few different threads, one life.</h2>
            </div>
            <div className="ds-story-copy">
              <p>
                I was born in Smolensk, Russia, adopted as a child, and raised in
                New Hampshire. Technology became my career. Writing became a habit.
                Adoption became years of conversations, community work, and projects.
              </p>
              <p>
                I like systems that can be understood, documentation that is actually
                useful, and projects with a clear reason to exist.
              </p>
              <Link href="/about">Read more about me →</Link>
            </div>
          </div>
        </section>

        <section className="ds-plain-section ds-section-alt" id="contact">
          <div className="ds-shell ds-contact-layout">
            <div className="ds-contact-copy">
              <div className="ds-section-heading">
                <span>Contact</span>
                <h2>Say hello.</h2>
              </div>
              <p>
                Technology, writing, podcasts, open source, adoptee work, research,
                or a project you think I should know about.
              </p>
              <div className="ds-home-links">
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
