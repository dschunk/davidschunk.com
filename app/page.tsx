import { ContactForm } from "@/components/contact-form";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
    <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const projects = [
  {
    number: "01",
    name: "Windows IT Toolkit",
    category: "PowerShell · Windows infrastructure",
    summary:
      "Practical tools for incident evidence, server health, Active Directory, Group Policy, patching, certificates, and safer day-to-day operations.",
    proof: "35 standalone tools · 14 SchunkOps commands",
    href: "https://github.com/dschunk/windows-it-toolkit",
  },
  {
    number: "02",
    name: "Microsoft 365 Ops",
    category: "Entra ID · Exchange Online · Teams",
    summary:
      "Read-only security audits for privileged roles, MFA, Conditional Access, guests, mailbox forwarding, licensing, domains, and external access.",
    proof: "12 least-privilege security audits",
    href: "https://github.com/dschunk/microsoft-365-ops",
  },
  {
    number: "03",
    name: "Infrastructure Dashboard",
    category: "Operations visibility",
    summary:
      "A responsive Operations Center that makes service health, backups, events, status, and ownership immediately understandable.",
    proof: "Public interactive demonstration",
    href: "https://dschunk.github.io/infrastructure-dashboard/",
  },
  {
    number: "04",
    name: "FiveM Server Ops",
    category: "Game infrastructure",
    summary:
      "Monitoring, backup validation, resource inventory, configuration safety, logs, port matrices, status data, and alerts for serious communities.",
    proof: "11 focused operations tools",
    href: "https://github.com/dschunk/fivem-server-ops",
  },
];

export default function Home() {
  return (
    <div className="site-frame">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="David Schunk home">
          <span className="brand-mark">DS</span>
          <span className="brand-copy"><strong>David Schunk</strong><small>Systems, stories & useful work</small></span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
          <a href="#story">Story</a>
          <a href="/hire">Work With Me</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-discord" href="/hire">
          Work With Me <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero content-width">
          <div className="hero-copy">
            <p className="eyebrow"><span /> IT engineer · writer · Russian adoptee</p>
            <h1>Systems should make sense. So should the stories behind them.</h1>
            <p className="hero-intro">
              I&apos;m David Schunk. I build infrastructure people can understand,
              operate, recover, and confidently hand to the next engineer—and I
              write about what the work teaches me along the way.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">Explore my work <Arrow /></a>
              <a className="quiet-action" href="/hire">Work with me <Arrow /></a>
              <a className="quiet-action" href="https://github.com/dschunk" target="_blank" rel="noreferrer">Visit GitHub <Arrow /></a>
            </div>
            <dl className="hero-facts">
              <div><dt>Based in</dt><dd>Nashua, New Hampshire</dd></div>
              <div><dt>Current work</dt><dd>IT Engineer at ClearMotion</dd></div>
              <div><dt>Guiding idea</dt><dd>Build for the next engineer</dd></div>
            </dl>
          </div>

          <figure className="hero-portrait">
            <div className="portrait-backdrop" />
            <img
              src="https://avatars.githubusercontent.com/u/140072881?v=4&s=800"
              alt="David Schunk"
              width="800"
              height="800"
              fetchPriority="high"
            />
            <figcaption>
              <span>David Maksim Schunk</span>
              <span>Smolensk → New Hampshire</span>
            </figcaption>
            <div className="portrait-note">Real systems.<br />Real stories.<br />No mystery boxes.</div>
          </figure>
        </section>

        <section className="expertise-band" aria-label="Areas of expertise">
          <div className="content-width expertise-inner">
            <span>Windows Server</span>
            <span>PowerShell</span>
            <span>Active Directory</span>
            <span>Microsoft 365</span>
            <span>VMware</span>
            <span>Cloudflare</span>
            <span>Documentation</span>
          </div>
        </section>

        <section className="work-section content-width" id="work">
          <header className="section-heading">
            <div>
              <p className="eyebrow">Public engineering</p>
              <h2>Tools for the people who keep everything running.</h2>
            </div>
            <p>
              These are independent public projects maintained in my personal capacity,
              using generalized technical knowledge and public documentation. They do not
              publish employer confidential information, proprietary code, internal systems,
              or customer data, and no employer endorsement is implied.
            </p>
          </header>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-item" key={project.name}>
                <span className="project-number">{project.number}</span>
                <div className="project-title">
                  <span>{project.category}</span>
                  <h3>{project.name}</h3>
                </div>
                <div className="project-summary">
                  <p>{project.summary}</p>
                  <small>{project.proof}</small>
                </div>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><Arrow /></a>
              </article>
            ))}
          </div>

          <a className="inline-link" href="https://github.com/dschunk?tab=repositories" target="_blank" rel="noreferrer">
            Browse every public repository <Arrow />
          </a>
        </section>

        <section className="principle-section">
          <div className="content-width principle-inner">
            <p className="eyebrow">The operating principle</p>
            <blockquote>
              “If another engineer needs to call me just to understand what I
              built, I didn&apos;t finish the job.”
            </blockquote>
            <div className="principle-list">
              <span>Make failure visible</span>
              <span>Automate with an exit ramp</span>
              <span>Document the why</span>
              <span>Always leave a recovery path</span>
            </div>
          </div>
        </section>

        <section className="writing-section content-width" id="writing">
          <header className="section-heading writing-heading">
            <div>
              <p className="eyebrow">Field notes</p>
              <h2>Writing from inside the machine.</h2>
            </div>
            <a className="inline-link" href="https://www.linkedin.com/newsletters/best-practices-for-everyday-it-7075059974573314048/" target="_blank" rel="noreferrer">
              Follow the newsletter <Arrow />
            </a>
          </header>

          <div className="writing-layout">
            <article className="featured-writing">
              <div className="article-meta"><span>Featured field guide</span><time dateTime="2026-08-27">August 27, 2026</time></div>
              <h3>Build It Like You Won&apos;t Be There Tomorrow</h3>
              <p>
                Maintainable systems, real runbooks, visible ownership, useful
                handoffs, and the engineering discipline of lowering the bus factor.
              </p>
              <a className="inline-link" href="https://github.com/dschunk/build-it-like-you-wont-be-there" target="_blank" rel="noreferrer">
                Read the field guide <Arrow />
              </a>
            </article>

            <div className="article-list">
              <a href="https://www.davidschunk.com/2026/06/dns-most-important-service-you-dont.html" target="_blank" rel="noreferrer">
                <span>Infrastructure</span><strong>DNS: The Most Important Service You Don&apos;t Think About</strong><Arrow />
              </a>
              <a href="https://www.davidschunk.com/2026/08/windows-11-gaming-crashes-should-you-be.html" target="_blank" rel="noreferrer">
                <span>Windows + gaming</span><strong>Windows 11 Gaming Crashes: Should You Be Concerned?</strong><Arrow />
              </a>
              <a href="https://www.davidschunk.com/2026/06/cybersecurity-update-from-your-friendly.html" target="_blank" rel="noreferrer">
                <span>Cybersecurity</span><strong>The Fake Recruiter Domain That Was Two Days Old</strong><Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="content-width story-inner">
            <div className="story-heading">
              <p className="eyebrow">More than a résumé</p>
              <h2>Russia is where I began. New Hampshire is where I grew. The internet is where I build.</h2>
            </div>

            <div className="route" aria-label="David Schunk timeline">
              <div><span>1994</span><strong>Smolensk</strong><small>Born</small></div>
              <i />
              <div><span>1996</span><strong>Bedford</strong><small>Adopted and raised</small></div>
              <i />
              <div><span>2013</span><strong>Burlington</strong><small>Champlain College</small></div>
              <i />
              <div><span>Today</span><strong>Nashua</strong><small>Home and headquarters</small></div>
            </div>

            <div className="story-copy">
              <p className="story-lead">
                Technology became one of the ways I learned to make order from
                complexity—and connection from distance.
              </p>
              <div>
                <p>
                  I&apos;m an IT engineer, but that title is not the whole person. I&apos;m
                  also a Russian adoptee, writer, gamer, podcaster, community builder,
                  and someone who believes our stories deserve infrastructure too.
                </p>
                <p>
                  Different systems, same instinct: make the invisible visible,
                  make the complicated usable, and leave something useful behind.
                </p>
              </div>
            </div>

            <div className="community-links">
              <a href="https://russianadoptees.com" target="_blank" rel="noreferrer">
                <span>Community and advocacy</span><strong>Russian Adoptees Organization</strong><p>A global home for connection, heritage, advocacy, and adoptee voices.</p><Arrow />
              </a>
              <a href="https://askyup.com" target="_blank" rel="noreferrer">
                <span>Internet experiment</span><strong>YUP</strong><p>A platform built around finding the answer, person, thing, or opportunity that actually helps.</p><Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section content-width" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Open channel</p>
            <h2>Have a good problem?</h2>
            <p>
              Infrastructure, open-source tooling, adoption advocacy, a project
              that needs structure, or something delightfully specific—I&apos;m listening.
            </p>
            <a className="discord-block" href="https://discord.gg/3phxzXBsAA" target="_blank" rel="noreferrer">
              <span>Prefer a community conversation?</span>
              <strong>Join my Discord</strong>
              <small>discord.gg/3phxzXBsAA</small>
              <Arrow />
            </a>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-inner">
          <span>© 2026 David M. Schunk</span>
          <span>Personal site · views and projects are my own · no employer endorsement implied</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
