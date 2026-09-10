import { ContactForm } from "@/components/contact-form";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
    <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const expertise = [
  ["WIN", "Windows Server"],
  [">_", "PowerShell"],
  ["AD", "Active Directory"],
  ["365", "Microsoft 365"],
  ["VM", "VMware"],
  ["CF", "Cloudflare"],
  ["DOC", "Documentation"],
];

const projects = [
  {
    icon: ">_",
    name: "Windows IT Toolkit",
    summary: "PowerShell tools for everyday Windows administration, incident evidence, AD, Group Policy, certificates, and fleet operations.",
    tags: ["PowerShell", "Windows", "Admin Tools"],
    href: "https://github.com/dschunk/windows-it-toolkit",
  },
  {
    icon: "FS",
    name: "Windows Infrastructure Lab",
    summary: "An enterprise-style Windows lab covering Active Directory, Group Policy, segmented routing, dedicated file services, DFS, FSRM, VSS, and recovery testing.",
    tags: ["Windows Server", "Active Directory", "Infrastructure"],
    href: "https://everydayittips.com/guides/windows-file-server-dfs-fsrm-vss/",
  },
  {
    icon: "365",
    name: "Microsoft 365 Ops",
    summary: "Read-only security audits, operational scripts, and practical playbooks for Microsoft 365, Entra ID, and Exchange Online.",
    tags: ["Microsoft 365", "Automation"],
    href: "https://github.com/dschunk/microsoft-365-ops",
  },
  {
    icon: "▥",
    name: "Infrastructure Dashboard",
    summary: "A lightweight public Operations Center that makes service health, backups, events, ownership, and status easy to understand.",
    tags: ["Monitoring", "Operations", "Dashboard"],
    href: "https://dschunk.github.io/infrastructure-dashboard/",
  },
  {
    icon: "EIT",
    name: "Everyday IT Tips",
    summary: "A permanent, searchable library of practical Windows, Active Directory, Windows Server, security, infrastructure, and troubleshooting guides.",
    tags: ["Windows", "Writing", "Field Guides"],
    href: "https://everydayittips.com/",
  },
];

export default function Home() {
  return (
    <div className="mountain-site">
      <header className="mountain-header">
        <a className="mountain-brand" href="#top" aria-label="David Schunk home">
          <img src="/mountain-mark.svg" alt="" width="46" height="30" />
          <span>David Schunk</span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
          <a href="/about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="mountain-header-action" href="/hire">Work With Me <Arrow /></a>
      </header>

      <main id="top">
        <section className="mountain-hero">
          <div className="mountain-hero-bg" aria-hidden="true" />
          <div className="mountain-shell mountain-hero-grid">
            <div className="mountain-hero-copy">
              <p className="mountain-kicker">Infrastructure <span>/</span> Automation <span>/</span> Documentation <span>/</span> People</p>
              <h1>Systems should<br />make sense.</h1>
              <p className="mountain-lead">
                I build infrastructure people can understand, operate, recover,
                and confidently hand to the next engineer.
              </p>
              <div className="mountain-actions">
                <a className="mountain-button mountain-button-primary" href="/hire">Work With Me <Arrow /></a>
                <a className="mountain-button mountain-button-ghost" href="#work">See My Work <Arrow /></a>
              </div>
            </div>

            <div className="systems-window" aria-label="Systems principles">
              <div className="systems-window-bar">
                <span><i /> davidschunk@home:~</span>
                <span>Systems for a brighter tomorrow</span>
              </div>
              <div className="systems-window-main">
                <div className="systems-terminal">
                  <p><b>&gt;</b> Reliable systems.</p>
                  <p>&nbsp;&nbsp;Clear documentation.</p>
                  <p>&nbsp;&nbsp;Less chaos.</p>
                  <p>&nbsp;&nbsp;A brighter tomorrow.<span className="terminal-cursor" /></p>
                </div>
                <div className="systems-ridge">
                  <img src="/story-mountains.svg" alt="Stylized mountain landscape" width="520" height="330" />
                  <span>Same systems.<br />Higher places.</span>
                </div>
              </div>
              <div className="systems-status">
                <div><span className="status-dot" /><p><b>Systems</b><small>Online</small></p></div>
                <div><span className="status-ring" /><p><b>Backups</b><small>Healthy</small></p></div>
                <div><span className="status-doc">▯</span><p><b>Documentation</b><small>Up to date</small></p></div>
                <div><span className="status-people">••</span><p><b>People</b><small>Stronger</small></p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise-strip" aria-label="Areas of expertise">
          <div className="mountain-shell expertise-strip-inner">
            <span className="strip-label">Areas of expertise</span>
            <div className="expertise-items">
              {expertise.map(([icon, label]) => (
                <span className="expertise-item" key={label}><i>{icon}</i>{label}</span>
              ))}
            </div>
            <span className="strip-signature"><img src="/mountain-mark.svg" alt="" width="34" height="22" /> Practical tech<br />real-world impact</span>
          </div>
        </section>

        <section className="mountain-section mountain-shell" id="work">
          <div className="mountain-section-head">
            <div>
              <p className="mountain-section-label">Featured projects</p>
              <h2>Useful work for people who keep things running.</h2>
            </div>
            <a href="https://github.com/dschunk?tab=repositories" target="_blank" rel="noreferrer">View all projects <Arrow /></a>
          </div>

          <div className="work-writing-grid">
            <div className="project-card-grid">
              {projects.map((project) => (
                <article className="mountain-project-card" key={project.name}>
                  <span className="project-icon">{project.icon}</span>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer">View project <Arrow /></a>
                </article>
              ))}
            </div>

            <aside className="latest-writing" id="writing">
              <div className="latest-writing-head">
                <p className="mountain-section-label">Latest writing</p>
                <a href="https://everydayittips.com/" target="_blank" rel="noreferrer">Visit Everyday IT Tips <Arrow /></a>
              </div>
              <article className="writing-feature-card">
                <div className="writing-image">
                  <img src="/hero-mountains.svg" alt="Green mountain ridgeline" width="800" height="380" />
                  <span>Windows Server</span>
                </div>
                <div className="writing-feature-copy">
                  <h3>Build a Windows file server that users can actually inherit.</h3>
                  <small>Everyday IT Tips · DFS / FSRM / VSS</small>
                  <p>
                    A practical build from a dedicated data disk and AGDLP permissions through SMB,
                    DFS Namespace, Group Policy drive mappings, quotas, Previous Versions, and routed management.
                  </p>
                  <a href="https://everydayittips.com/guides/windows-file-server-dfs-fsrm-vss/" target="_blank" rel="noreferrer">Read the field guide <Arrow /></a>
                </div>
              </article>
            </aside>
          </div>
        </section>

        <section className="story-connect" id="story">
          <div className="mountain-shell story-connect-grid">
            <div className="story-panel">
              <p className="mountain-section-label">My story</p>
              <div className="story-panel-body">
                <img src="/story-mountains.svg" alt="Stylized New England mountain overlook" width="900" height="620" />
                <div className="story-text">
                  <h2>From Russia to New Hampshire, building on the internet.</h2>
                  <p>
                    I was born in Russia, found a home in New Hampshire, and discovered
                    a passion for technology, systems, and the people who keep them running.
                    Today I work at the intersection of infrastructure, automation, documentation,
                    and community—and I build public tools to make IT a little easier for the next engineer.
                  </p>
                  <a href="/about">About David <Arrow /></a>
                </div>
              </div>
            </div>

            <div className="story-route" aria-label="David Schunk timeline">
              <div><i /><span><b>Born in Russia</b><small>Where the story began</small></span></div>
              <div><i /><span><b>New Hampshire</b><small>A new home</small></span></div>
              <div><i /><span><b>Systems engineering</b><small>A career in infrastructure</small></span></div>
              <div><i /><span><b>Building on the internet</b><small>Today</small></span></div>
            </div>

            <div className="connect-panel" id="contact">
              <div className="connect-panel-head">
                <div>
                  <p className="mountain-section-label">Let&apos;s connect</p>
                  <h2>Good people build great things.</h2>
                </div>
                <img src="/mountain-mark.svg" alt="" width="42" height="28" />
              </div>
              <ContactForm
                heading="Send a message"
                description="Your note is delivered privately."
                messagePlaceholder="What are you building, fixing, writing, or trying to figure out?"
                idleMessage="I read every message myself."
              />
              <div className="connect-links">
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer"><span>GH</span><b>GitHub</b><small>@dschunk</small></a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer"><span>in</span><b>LinkedIn</b><small>David Schunk</small></a>
                <a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer"><span>M</span><b>Merit</b><small>Academic & career record</small></a>
                <a href="https://discord.gg/3phxzXBsAA" target="_blank" rel="noreferrer"><span>DC</span><b>Discord</b><small>Join the community</small></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mountain-footer">
        <div className="mountain-shell mountain-footer-inner">
          <div className="footer-brand">
            <img src="/mountain-mark.svg" alt="" width="42" height="28" />
            <div><strong>David Schunk</strong><small>Infrastructure. People. A brighter tomorrow.</small></div>
          </div>
          <nav aria-label="Footer navigation"><a href="#work">Work</a><a href="#writing">Writing</a><a href="/about">About</a><a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit</a><a href="#contact">Contact</a></nav>
          <span className="footer-note">Same systems. Higher places.</span>
        </div>
      </footer>
    </div>
  );
}
