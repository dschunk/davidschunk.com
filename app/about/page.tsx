const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
    <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="mountain-site">
      <header className="mountain-header">
        <a className="mountain-brand" href="/" aria-label="David Schunk home">
          <img src="/mountain-mark.svg" alt="" width="46" height="30" />
          <span>David Schunk</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/#writing">Writing</a>
          <a href="/about">About</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="mountain-header-action" href="/hire">Work With Me <Arrow /></a>
      </header>

      <main>
        <section className="mountain-section mountain-shell" style={{ paddingTop: "64px", paddingBottom: "72px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(260px, .78fr) minmax(0, 1.22fr)", gap: "64px", alignItems: "start" }}>
            <div>
              <img
                src="/david-schunk-portrait.svg"
                alt="Portrait of David Schunk"
                width="300"
                height="300"
                style={{ width: "100%", maxWidth: "420px", height: "auto", borderRadius: "8px", display: "block" }}
              />
              <p style={{ marginTop: "16px", opacity: .72, fontSize: ".86rem" }}>David Schunk · IT Engineer · New Hampshire</p>
            </div>

            <div>
              <p className="mountain-section-label">About David</p>
              <h1 style={{ margin: "0 0 24px", fontSize: "clamp(2.8rem, 6vw, 5.2rem)", lineHeight: .98, letterSpacing: "-.05em" }}>
                Infrastructure, curiosity, and people.
              </h1>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.7, marginBottom: "18px" }}>
                I&apos;m David Schunk, an IT Engineer and Champlain College Class of 2017 graduate with a background in enterprise infrastructure, systems administration, networking, virtualization, cloud technologies, and cybersecurity.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "18px", opacity: .86 }}>
                I was born in Smolensk, Russia, adopted as a child, and raised in New Hampshire. Technology became the through-line: first as a student, then as a career, and eventually as a way to build useful systems, document what I learn, and make complicated things easier for the next person to understand.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "30px", opacity: .86 }}>
                Outside of day-to-day IT work, I publish Everyday IT Tips, maintain a hands-on infrastructure lab, build independent technology projects, and host Voice of Adoptees. I&apos;m especially interested in systems that are reliable, recoverable, well documented, and built with the people who operate them in mind.
              </p>

              <div className="mountain-actions" style={{ flexWrap: "wrap" }}>
                <a className="mountain-button mountain-button-primary" href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit Profile <Arrow /></a>
                <a className="mountain-button mountain-button-ghost" href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                <a className="mountain-button mountain-button-ghost" href="https://everydayittips.com" target="_blank" rel="noreferrer">Everyday IT Tips <Arrow /></a>
              </div>

              <div style={{ marginTop: "42px", paddingTop: "24px", borderTop: "1px solid rgba(34,38,37,.18)" }}>
                <p className="mountain-section-label">Academic & career record</p>
                <h2 style={{ margin: "0 0 10px", fontSize: "1.6rem" }}>A profile that started at Champlain and kept going.</h2>
                <p style={{ margin: 0, lineHeight: 1.7, opacity: .8 }}>
                  My Merit page includes Champlain College-verified academic recognition from 2014 along with the work experience, projects, and publications I&apos;ve added since graduating.
                </p>
                <a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "16px", fontWeight: 700 }}>
                  View my Merit page <Arrow />
                </a>
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
          <nav aria-label="Footer navigation"><a href="/#work">Work</a><a href="/#writing">Writing</a><a href="/about">About</a><a href="https://meritpages.com/DavidSchunk" target="_blank" rel="noreferrer">Merit</a><a href="/#contact">Contact</a></nav>
          <span className="footer-note">Same systems. Higher places.</span>
        </div>
      </footer>
    </div>
  );
}
