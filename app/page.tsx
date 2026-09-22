import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "David Schunk is an IT engineer, writer, builder, adoptee advocate, and host of Voice of Adoptees. Explore his technology work, research, community projects, and writing.",
  openGraph: { url: "https://www.davidschunk.com/" },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const now = [
  {
    number: "01",
    title: "IT engineering",
    copy: "Enterprise infrastructure, Windows, identity, virtualization, operations, automation, and documentation.",
  },
  {
    number: "02",
    title: "Publishing",
    copy: "Practical IT guides, research, essays, and tools meant to stay useful after the tab is closed.",
  },
  {
    number: "03",
    title: "Adoptee community",
    copy: "Voice of Adoptees and public work centered on adoptee voices, connection, and lived experience.",
  },
  {
    number: "04",
    title: "Building",
    copy: "Websites, open-source utilities, labs, community infrastructure, and experiments that solve real problems.",
  },
];

const work = [
  {
    number: "01",
    category: "Publication · practical IT",
    title: "Everyday IT Tips",
    copy: "A growing library of field-tested Windows, infrastructure, troubleshooting, security, and systems-administration guides written for the person who actually has to fix the problem.",
    tags: ["Windows", "Infrastructure", "Documentation"],
    href: "https://everydayittips.com",
  },
  {
    number: "02",
    category: "Open source · administration",
    title: "Windows IT Toolkit",
    copy: "PowerShell tooling for everyday Windows administration, incident evidence, Active Directory, Group Policy, certificates, and fleet operations.",
    tags: ["PowerShell", "Windows Server", "Open source"],
    href: "https://github.com/dschunk/windows-it-toolkit",
  },
  {
    number: "03",
    category: "Podcast · adoptee voices",
    title: "Voice of Adoptees",
    copy: "A long-running conversation platform built around adoptees speaking for themselves about identity, family, culture, policy, belonging, and the realities behind adoption.",
    tags: ["Podcast", "Interviews", "Adoptees"],
    href: "https://voiceofadoptees.com",
  },
  {
    number: "04",
    category: "Community · organization",
    title: "Russian Adoptees Organization",
    copy: "An independent organization created to connect adoptees from Russia and the former Soviet Union, share resources, and build a durable public home for the community.",
    tags: ["Community", "Resources", "Adoptees"],
    href: "https://russianadoptees.com",
  },
  {
    number: "05",
    category: "Research · public interest",
    title: "AI governance research",
    copy: "A public research project on practical checks and balances for artificial intelligence: accountability, evidence, risk tiers, public trust, and room for responsible innovation.",
    tags: ["AI", "Governance", "Research"],
    href: "/research/ai-governance",
    internal: true,
  },
];

const writing = [
  {
    category: "Windows Server",
    title: "Build a Windows file server people can actually inherit",
    copy: "Permissions, DFS, FSRM, VSS, drive mappings, recovery, and documentation as one operating system rather than a pile of disconnected steps.",
    href: "https://everydayittips.com/guides/windows-file-server-dfs-fsrm-vss/",
  },
  {
    category: "Operations",
    title: "Baseline a new Windows Server before production",
    copy: "A practical post-build checklist for the things that become painful when nobody checks them early.",
    href: "https://everydayittips.com/guides/windows-server-post-build-checklist/",
  },
  {
    category: "PowerShell",
    title: "Find what is eating disk space on Windows",
    copy: "A direct triage workflow for answering a very common 3 a.m. question without guessing.",
    href: "https://everydayittips.com/guides/powershell-disk-space-triage/",
  },
];

export default function Home() {
  return (
    <div className="ds-site">
      <SiteHeader />

      <main>
        <section className="ds-hero">
          <div className="ds-shell ds-hero-grid">
            <div>
              <p className="ds-kicker">David Schunk · New Hampshire</p>
              <h1>
                Engineer.<br />
                Writer.<br />
                <em>Builder.</em>
              </h1>
              <p className="ds-hero-lead">
                I build useful systems, explain complicated things, and create
                spaces where people can find the information—or the voice—they
                were missing.
              </p>
              <div className="ds-actions">
                <a className="ds-button ds-button-primary" href="#work">
                  Explore my work <Arrow />
                </a>
                <Link className="ds-button ds-button-secondary" href="/about">
                  Read my story <Arrow />
                </Link>
              </div>
            </div>

            <aside className="ds-hero-aside" aria-label="What David is working on">
              <small>The short version</small>
              <div className="ds-now-list">
                {now.map((item) => (
                  <div className="ds-now-row" key={item.title}>
                    <span>{item.number}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="ds-hero-note">
                One personal site. Several lanes. All of them are connected by
                the same idea: make something useful and leave it clearer than
                you found it.
              </p>
            </aside>
          </div>
        </section>

        <section className="ds-identity" aria-label="David Schunk roles">
          <div className="ds-shell ds-identity-grid">
            <div><small>Profession</small><strong>IT Engineer</strong></div>
            <div><small>Publication</small><strong>Everyday IT Tips</strong></div>
            <div><small>Podcast</small><strong>Voice of Adoptees</strong></div>
            <div><small>Community</small><strong>Russian Adoptees Organization</strong></div>
          </div>
        </section>

        <section className="ds-section" id="work">
          <div className="ds-shell">
            <header className="ds-section-head">
              <div>
                <p className="ds-section-kicker">Selected work</p>
                <h2>Things I&apos;ve put into the world.</h2>
              </div>
              <p>
                Some of it is code. Some of it is writing. Some of it is
                community infrastructure. I care less about the category than
                whether it is useful to somebody on the other side of the screen.
              </p>
            </header>

            <div className="ds-work-list">
              {work.map((item) => (
                <article className="ds-work-item" key={item.title}>
                  <span className="ds-work-number">{item.number}</span>
                  <div className="ds-work-title">
                    <small>{item.category}</small>
                    <h3>{item.title}</h3>
                  </div>
                  <div className="ds-work-copy">
                    <p>{item.copy}</p>
                    <div className="ds-work-tags">
                      {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  {item.internal ? (
                    <Link href={item.href} aria-label={"Open " + item.title}><Arrow /></Link>
                  ) : (
                    <a href={item.href} target="_blank" rel="noreferrer" aria-label={"Open " + item.title}><Arrow /></a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-section ds-writing" id="writing">
          <div className="ds-shell">
            <header className="ds-section-head">
              <div>
                <p className="ds-section-kicker">Writing & research</p>
                <h2>I write down what I learn.</h2>
              </div>
              <p>
                Documentation is part of engineering. Public writing is the same
                instinct at a larger scale: take the thing that was confusing,
                test it, explain it, and give the next person a better starting point.
              </p>
            </header>

            <div className="ds-writing-grid">
              <article className="ds-feature-story">
                <div>
                  <small>Featured research · September 2026</small>
                  <h3>Checks and Balances for Artificial Intelligence</h3>
                  <p>
                    A risk-tiered framework for AI safety, accountability, public
                    trust, independent evidence, and frontier safeguards—written
                    to move the conversation beyond fear versus hype.
                  </p>
                </div>
                <Link href="/research/ai-governance">
                  Read the research <Arrow />
                </Link>
              </article>

              <div className="ds-writing-rail">
                {writing.map((item) => (
                  <article key={item.title}>
                    <small>{item.category}</small>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <a className="ds-text-link" href={item.href} target="_blank" rel="noreferrer">
                      Read guide <Arrow />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ds-section" id="adoption">
          <div className="ds-shell ds-adoption-grid">
            <div className="ds-adoption-copy">
              <p className="ds-section-kicker">Adoption & identity</p>
              <h2>Technology is what I do. Adoption is part of who I am.</h2>
              <p>
                I was born in Smolensk, Russia, adopted as a child, and raised
                in New Hampshire. Over time, telling my own story became
                listening to other adoptees tell theirs—and then building
                platforms where those stories could live.
              </p>
              <div className="ds-actions">
                <Link className="ds-button ds-button-secondary" href="/about">
                  More about me <Arrow />
                </Link>
              </div>
            </div>

            <div className="ds-adoption-stories">
              <article className="ds-adoption-story">
                <small>Voice of Adoptees</small>
                <h3>The microphone belongs to adoptees.</h3>
                <p>
                  The podcast centers first-person adoptee experiences instead of
                  reducing adoption to a single narrative. The archive spans
                  identity, reunion, family, culture, loss, belonging, policy,
                  and everything that does not fit neatly into a slogan.
                </p>
                <a className="ds-text-link" href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">
                  Visit Voice of Adoptees <Arrow />
                </a>
              </article>

              <article className="ds-adoption-story">
                <small>Russian Adoptees Organization</small>
                <h3>Build the institution you wish had existed.</h3>
                <p>
                  The organization is a public home for Russian and former
                  Soviet adoptees to connect, find practical resources, preserve
                  community knowledge, and speak in their own names.
                </p>
                <a className="ds-text-link" href="https://russianadoptees.com" target="_blank" rel="noreferrer">
                  Visit Russian Adoptees <Arrow />
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="ds-story">
          <div className="ds-shell ds-story-grid">
            <div className="ds-story-label">
              <p>
                Smolensk → New Hampshire → Champlain College → systems engineering → publishing → community building
              </p>
            </div>
            <div className="ds-story-copy">
              <h2>A life with more than one through-line.</h2>
              <p>
                I&apos;ve spent years in infrastructure because I like making
                complicated systems understandable. I&apos;ve spent years in
                adoptee spaces for a similar reason: complicated human stories
                deserve room, context, and careful listening. This site is where
                those parts of my life finally sit next to each other.
              </p>
              <Link href="/about">Read the full story <Arrow /></Link>
            </div>
          </div>
        </section>

        <section className="ds-section ds-contact" id="contact">
          <div className="ds-shell ds-contact-grid">
            <div className="ds-contact-copy">
              <p className="ds-section-kicker">Contact</p>
              <h2>Have something worth talking about?</h2>
              <p>
                Technology, writing, podcasts, adoptee community work, open
                source, research, or an interesting project—I read every message.
              </p>
              <div className="ds-contact-links">
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <Link href="/hire">Collaboration details ↗</Link>
              </div>
            </div>

            <ContactForm
              heading="Send me a note"
              description="Direct from this site to me."
              messagePlaceholder="What are you working on, thinking about, or trying to solve?"
              idleMessage="No ticket number. No funnel. I read it myself."
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
