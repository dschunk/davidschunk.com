import { ContactForm } from "@/components/contact-form";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 18 18" width="18" height="18">
    <path d="M2 9h13M10 3l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const projects = [
  {
    number: "01",
    title: "Windows IT Toolkit",
    label: "PowerShell / Windows operations",
    detail:
      "A growing library of production-minded tools for incident evidence, server health, Active Directory, Group Policy, patching, certificates, and safe automation.",
    proof: "35 tools + 14 SchunkOps commands",
    href: "https://github.com/dschunk/windows-it-toolkit",
  },
  {
    number: "02",
    title: "Microsoft 365 Ops",
    label: "Entra / Exchange / Teams",
    detail:
      "Twelve read-only security audits for privileged roles, MFA, Conditional Access, guests, forwarding, licensing, domains, and external access.",
    proof: "Least privilege by design",
    href: "https://github.com/dschunk/microsoft-365-ops",
  },
  {
    number: "03",
    title: "Infrastructure Dashboard",
    label: "Operations visibility",
    detail:
      "A responsive public Operations Center that turns infrastructure health, services, backups, events, and ownership into something immediately readable.",
    proof: "Live public demo",
    href: "https://dschunk.github.io/infrastructure-dashboard/",
  },
  {
    number: "04",
    title: "FiveM Server Ops",
    label: "Game infrastructure",
    detail:
      "Eleven focused tools for monitoring, backup validation, resource inventory, port matrices, logs, configuration safety, status data, and alerts.",
    proof: "Built for real communities",
    href: "https://github.com/dschunk/fivem-server-ops",
  },
];

export default function Home() {
  return (
    <div className="field-shell">
      <aside className="side-rail" aria-label="Site identity">
        <a className="rail-mark" href="#top" aria-label="David Schunk home">
          DS<span>94</span>
        </a>
        <p className="rail-text">DAVID MAKSIM SCHUNK / PERSONAL FIELD MANUAL</p>
        <div className="rail-status"><span /> ONLINE</div>
      </aside>

      <div className="page-body">
        <header className="masthead">
          <div className="masthead-location">
            <span>NASHUA, NH</span>
            <span>42.7654° N / 71.4676° W</span>
          </div>
          <nav aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#writing">Writing</a>
            <a href="#story">Story</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="discord-head" href="https://discord.gg/3phxzXBsAA" target="_blank" rel="noreferrer">
            Discord ↗
          </a>
        </header>

        <main id="top">
          <section className="poster">
            <div className="poster-code">FILE: DS-1994 / REVISION 02 / PUBLIC</div>
            <div className="poster-grid">
              <div className="poster-copy">
                <p className="signal-line"><span /> IT ENGINEER · SYSTEMS BUILDER · HUMAN BEING</p>
                <h1>
                  <span>I build</span>
                  <span>the systems.</span>
                  <span className="outline-word">I document</span>
                  <span>the mess.</span>
                </h1>
                <div className="intro-row">
                  <p>
                    I&apos;m David—an infrastructure engineer, public builder, writer,
                    gamer, podcaster, and Russian adoptee. I make complicated systems
                    easier to understand, operate, recover, and hand to the next person.
                  </p>
                  <a href="#work">See what I build <Arrow /></a>
                </div>
              </div>

              <figure className="portrait-sheet">
                <div className="portrait-photo">
                  <img
                    src="https://avatars.githubusercontent.com/u/140072881?v=4"
                    alt="David Schunk"
                    width="560"
                    height="560"
                  />
                  <span className="photo-cross cross-one">+</span>
                  <span className="photo-cross cross-two">+</span>
                </div>
                <figcaption>
                  <span>SUBJECT</span>
                  <strong>DAVID SCHUNK</strong>
                  <span>IT ENGINEER @ CLEARMOTION</span>
                </figcaption>
                <div className="portrait-stamp">BUILD FOR<br />THE NEXT<br />ENGINEER</div>
                <div className="portrait-note">not a stock photo.<br />not a corporate bio.<br />actually me.</div>
              </figure>
            </div>
          </section>

          <div className="ticker" aria-label="Core technologies">
            <div>
              <span>WINDOWS SERVER</span><b>✦</b><span>POWERSHELL</span><b>✦</b>
              <span>ACTIVE DIRECTORY</span><b>✦</b><span>GROUP POLICY</span><b>✦</b>
              <span>MICROSOFT 365</span><b>✦</b><span>VMWARE</span><b>✦</b>
              <span>CLOUDFLARE</span><b>✦</b><span>DOCUMENTATION</span>
            </div>
          </div>

          <section className="work-ledger" id="work">
            <div className="section-index">
              <span>01</span>
              <p>PUBLIC WORK<br />THAT DOES<br />REAL WORK.</p>
            </div>

            <div className="ledger-main">
              <div className="ledger-heading">
                <p>THINGS I MADE BECAUSE THEY NEEDED TO EXIST</p>
                <h2>Tools for the people who keep everything running.</h2>
              </div>

              <div className="ledger-list">
                {projects.map((project) => (
                  <article className="ledger-entry" key={project.title}>
                    <div className="entry-number">{project.number}</div>
                    <div className="entry-title">
                      <span>{project.label}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.detail}</p>
                    <div className="entry-end">
                      <span>{project.proof}</span>
                      <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                        <Arrow />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <a className="repository-link" href="https://github.com/dschunk?tab=repositories" target="_blank" rel="noreferrer">
                ALL PUBLIC REPOSITORIES <Arrow />
              </a>
            </div>
          </section>

          <section className="manifesto">
            <div className="manifesto-label">OPERATING STANDARD / NON-NEGOTIABLE</div>
            <blockquote>
              “If another engineer needs to call me just to understand what I built,
              <strong> I didn&apos;t finish the job.</strong>”
            </blockquote>
            <div className="manifesto-rules">
              <span>01 / MAKE FAILURE VISIBLE</span>
              <span>02 / AUTOMATE WITH AN EXIT RAMP</span>
              <span>03 / DOCUMENT THE WHY</span>
              <span>04 / LEAVE A RECOVERY PATH</span>
            </div>
          </section>

          <section className="dispatches" id="writing">
            <header className="dispatch-head">
              <div>
                <span>DISPATCH LOG</span>
                <span>BEST PRACTICES FOR EVERYDAY IT</span>
              </div>
              <h2>Notes from inside the machine.</h2>
              <a href="https://www.linkedin.com/newsletters/best-practices-for-everyday-it-7075059974573314048/" target="_blank" rel="noreferrer">
                FOLLOW THE NEWSLETTER <Arrow />
              </a>
            </header>

            <div className="dispatch-grid">
              <article className="dispatch-feature">
                <div className="dispatch-meta"><span>ISSUE 001</span><time dateTime="2026-08-27">AUG 27, 2026</time></div>
                <h3>Build It Like You Won&apos;t Be There Tomorrow</h3>
                <p>
                  The engineering philosophy behind maintainable systems, clean
                  handoffs, real runbooks, visible ownership, and a lower bus factor.
                </p>
                <a href="https://github.com/dschunk/build-it-like-you-wont-be-there" target="_blank" rel="noreferrer">
                  OPEN THE FIELD GUIDE <Arrow />
                </a>
              </article>

              <div className="dispatch-stack">
                <a href="https://www.davidschunk.com/2026/06/dns-most-important-service-you-dont.html" target="_blank" rel="noreferrer">
                  <span>ISSUE 002 / INFRASTRUCTURE</span>
                  <strong>DNS: The Most Important Service You Don&apos;t Think About</strong>
                  <Arrow />
                </a>
                <a href="https://www.davidschunk.com/2026/08/windows-11-gaming-crashes-should-you-be.html" target="_blank" rel="noreferrer">
                  <span>ISSUE 003 / WINDOWS + GAMING</span>
                  <strong>Windows 11 Gaming Crashes: Should You Be Concerned?</strong>
                  <Arrow />
                </a>
                <a href="https://www.davidschunk.com/2026/06/cybersecurity-update-from-your-friendly.html" target="_blank" rel="noreferrer">
                  <span>ISSUE 004 / CYBERSECURITY</span>
                  <strong>The Fake Recruiter Domain That Was Two Days Old</strong>
                  <Arrow />
                </a>
              </div>
            </div>
          </section>

          <section className="route-story" id="story">
            <div className="route-title">
              <span>02 / ORIGIN STORY</span>
              <h2>Russia is where I began. New Hampshire is where I grew. The internet is where I build.</h2>
            </div>

            <div className="route-line" aria-label="Smolensk to Nashua timeline">
              <div><span>1994</span><strong>SMOLENSK</strong><small>BORN</small></div>
              <i />
              <div><span>1996</span><strong>BEDFORD</strong><small>ADOPTED + RAISED</small></div>
              <i />
              <div><span>2013</span><strong>BURLINGTON</strong><small>CHAMPLAIN COLLEGE</small></div>
              <i />
              <div><span>NOW</span><strong>NASHUA</strong><small>HOME + HEADQUARTERS</small></div>
            </div>

            <div className="story-columns">
              <p className="story-lead">
                Technology became one of the ways I learned to make order from
                complexity—and connection from distance.
              </p>
              <p>
                I&apos;m an IT engineer, but that title isn&apos;t the whole person. I&apos;m
                also a Russian adoptee, writer, gamer, podcaster, community builder,
                and someone who believes our stories deserve infrastructure too.
              </p>
              <p>
                That is why the work ranges from Windows incident tooling to adoptee
                advocacy. Different systems. Same instinct: make the invisible visible,
                make the complicated usable, and leave something useful behind.
              </p>
            </div>

            <div className="community-projects">
              <a href="https://russianadoptees.com" target="_blank" rel="noreferrer">
                <span>COMMUNITY / ADVOCACY</span>
                <strong>Russian Adoptees Organization</strong>
                <p>A global home for connection, heritage, advocacy, and the voices of people adopted from Russia and the former Soviet Union.</p>
                <Arrow />
              </a>
              <a href="https://askyup.com" target="_blank" rel="noreferrer">
                <span>INTERNET / EXPERIMENT</span>
                <strong>YUP</strong>
                <p>A new platform built around one basic human need: finding the thing, answer, person, or opportunity that actually helps.</p>
                <Arrow />
              </a>
            </div>
          </section>

          <section className="open-channel" id="contact">
            <div className="channel-copy">
              <span>03 / OPEN CHANNEL</span>
              <h2>Have a good problem?</h2>
              <p>
                Infrastructure. Open-source tooling. Adoption advocacy. A project
                that needs structure. Or just something delightfully specific.
              </p>
              <div className="quick-links">
                <a className="discord-card" href="https://discord.gg/3phxzXBsAA" target="_blank" rel="noreferrer">
                <span>FASTEST ROUTE</span>
                <strong>JOIN MY DISCORD</strong>
                <code>discord.gg/3phxzXBsAA</code>
                <Arrow />
                </a>
                <a className="email-route" href="mailto:David.Schunk@comcast.net">
                  DIRECT EMAIL → DAVID.SCHUNK@COMCAST.NET
                </a>
              </div>
            </div>
            <ContactForm />
          </section>
        </main>

        <footer className="field-footer">
          <span>© 2026 DAVID M. SCHUNK</span>
          <span>SMOLENSK → NEW HAMPSHIRE → EVERYWHERE</span>
          <a href="#top">RETURN TO TOP ↑</a>
        </footer>
      </div>
    </div>
  );
}
