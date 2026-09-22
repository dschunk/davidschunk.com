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
    title: "Everyday IT Tips",
    type: "Practical IT writing",
    description:
      "Windows, infrastructure, troubleshooting, security, and systems administration guides written from real-world experience.",
    href: "https://everydayittips.com",
  },
  {
    title: "Windows IT Toolkit",
    type: "Open source",
    description:
      "PowerShell tools for Windows administration, Active Directory, Group Policy, evidence collection, and day-to-day operations.",
    href: "https://github.com/dschunk/windows-it-toolkit",
  },
  {
    title: "Voice of Adoptees",
    type: "Podcast",
    description:
      "Long-form conversations with adoptees about identity, family, culture, policy, reunion, belonging, and lived experience.",
    href: "https://voiceofadoptees.com",
  },
  {
    title: "Russian Adoptees Organization",
    type: "Community",
    description:
      "A community and public resource for adoptees from Russia and the former Soviet Union.",
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
          <div className="ds-shell ds-home-hero-grid">
            <div className="ds-home-intro">
              <p className="ds-eyebrow">IT Engineer · New Hampshire</p>
              <h1>Hi, I&apos;m David.</h1>
              <p className="ds-home-lead">
                I work in infrastructure and systems engineering, publish practical
                IT guides, and build projects for the adoptee community.
              </p>
              <p className="ds-home-copy">
                This is my personal corner of the internet—part professional
                portfolio, part writing archive, and part home for the things I
                care enough about to keep building.
              </p>

              <div className="ds-actions">
                <a className="ds-button ds-button-primary" href="#work">See my work</a>
                <Link className="ds-button ds-button-secondary" href="/about">About me</Link>
              </div>
            </div>

            <aside className="ds-home-side">
              <div className="ds-side-block">
                <span className="ds-side-label">I spend most of my time on</span>
                <ul>
                  <li>Windows infrastructure and operations</li>
                  <li>PowerShell and automation</li>
                  <li>Technical writing and documentation</li>
                  <li>Adoptee advocacy and community projects</li>
                  <li>Independent web and software projects</li>
                </ul>
              </div>

              <div className="ds-side-links">
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit ↗</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="ds-section" id="work">
          <div className="ds-shell">
            <div className="ds-section-title">
              <div>
                <p className="ds-eyebrow">Selected work</p>
                <h2>Projects I keep coming back to.</h2>
              </div>
              <p>
                A mix of technical work, writing, and community projects. These
                are the ones that best represent what I actually spend time on.
              </p>
            </div>

            <div className="ds-project-grid">
              {projects.map((project) => (
                <article className="ds-project-card" key={project.title}>
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Visit project <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-section ds-section-alt" id="writing">
          <div className="ds-shell">
            <div className="ds-section-title">
              <div>
                <p className="ds-eyebrow">Writing & research</p>
                <h2>I document what I learn.</h2>
              </div>
              <p>
                Most of my writing starts with a problem I had to solve, a system
                I had to understand, or a topic I thought deserved a more careful explanation.
              </p>
            </div>

            <div className="ds-writing-list">
              {writing.map((item) => (
                <article key={item.title}>
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
                Browse all Everyday IT Tips articles ↗
              </a>
            </div>
          </div>
        </section>

        <section className="ds-section" id="adoption">
          <div className="ds-shell">
            <div className="ds-section-title">
              <div>
                <p className="ds-eyebrow">Adoption & community</p>
                <h2>A big part of my life outside IT.</h2>
              </div>
              <p>
                I was born in Smolensk, Russia and adopted as a child. Over the
                years, that personal history became community work.
              </p>
            </div>

            <div className="ds-community-grid">
              <article>
                <h3>Voice of Adoptees</h3>
                <p>
                  I created and host Voice of Adoptees to give adoptees room to
                  speak for themselves. The conversations are personal, complicated,
                  and intentionally not reduced to a single view of adoption.
                </p>
                <a href="https://voiceofadoptees.com" target="_blank" rel="noreferrer">
                  Visit Voice of Adoptees ↗
                </a>
              </article>

              <article>
                <h3>Russian Adoptees Organization</h3>
                <p>
                  I founded the organization to help Russian and former Soviet
                  adoptees connect, share resources, preserve community knowledge,
                  and have a public platform of our own.
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
              <p className="ds-eyebrow">A little more about me</p>
              <h2>Russia, New Hampshire, Champlain, and a career in IT.</h2>
            </div>
            <div>
              <p>
                I was born in Russia, raised in New Hampshire, graduated from
                Champlain College in 2017, and built my career around enterprise IT.
                Outside work, I write, podcast, maintain a homelab, and build an
                unreasonable number of side projects.
              </p>
              <Link href="/about">Read more about me →</Link>
            </div>
          </div>
        </section>

        <section className="ds-section ds-contact-section" id="contact">
          <div className="ds-shell ds-contact-grid">
            <div className="ds-contact-copy">
              <p className="ds-eyebrow">Contact</p>
              <h2>Get in touch.</h2>
              <p>
                Technology, writing, podcasting, adoptee work, open source, or
                something interesting you think I should see.
              </p>
              <div className="ds-contact-links">
                <Link href="/hire">Collaboration details</Link>
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn</a>
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
