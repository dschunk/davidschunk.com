import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Hire Me | David Schunk",
  description:
    "Independent IT consulting for Windows infrastructure, Microsoft 365, PowerShell automation, virtualization, backup, networking, and technical documentation.",
};

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
    <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    price: "$149",
    label: "Remote IT Session",
    detail: "60 minutes",
    description:
      "Focused troubleshooting, architecture advice, configuration review, or a second set of experienced eyes on a problem that needs to move forward.",
    fits: ["Windows / server issues", "Microsoft 365 questions", "Home lab & network help", "Technical decision support"],
  },
  {
    price: "$299+",
    label: "Infrastructure Review",
    detail: "Scoped review",
    description:
      "A practical review of your environment with prioritized findings, risks, cleanup opportunities, and next steps you can actually use.",
    fits: ["Small business infrastructure", "Backup & recovery posture", "Identity / access review", "Documentation gaps"],
    featured: true,
  },
  {
    price: "Custom",
    label: "Engineering & Automation",
    detail: "Project based",
    description:
      "Build or improve the thing: PowerShell automation, operational tooling, Windows infrastructure, reporting, runbooks, migrations, or recovery workflows.",
    fits: ["PowerShell projects", "Windows infrastructure", "Operations tooling", "Runbooks & handoff docs"],
  },
];

export default function HirePage() {
  return (
    <div className="site-frame hire-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="David Schunk home">
          <span className="brand-mark">DS</span>
          <span className="brand-copy"><strong>David Schunk</strong><small>Systems, stories & useful work</small></span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="/#work">Work</a>
          <a href="/#writing">Writing</a>
          <a href="/#story">Story</a>
          <a href="/#contact">Contact</a>
        </nav>

        <a className="header-discord" href="#inquiry">
          Start a project <Arrow />
        </a>
      </header>

      <main>
        <section className="hire-hero content-width">
          <div className="hire-hero-copy">
            <p className="eyebrow"><span /> Independent IT consulting</p>
            <h1>Senior-level IT help without the full-time headcount.</h1>
            <p className="hire-lead">
              I help individuals, technical teams, and small businesses solve difficult
              infrastructure problems, automate repetitive work, and leave systems easier
              to understand than I found them.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#inquiry">Start a project <Arrow /></a>
              <a className="quiet-action" href="/#work">See my public work <Arrow /></a>
            </div>
            <div className="hire-meta">
              <span><strong>Remote-first</strong> consulting</span>
              <span><strong>New Hampshire</strong> based</span>
              <span><strong>Project availability</strong> confirmed before work begins</span>
            </div>
          </div>

          <aside className="hire-fit-card" aria-label="Best fit consulting areas">
            <p className="hire-card-kicker">Best fit</p>
            <h2>Bring me the problem that keeps getting pushed to next week.</h2>
            <ul>
              <li><span>01</span> Windows Server & Active Directory</li>
              <li><span>02</span> Microsoft 365 & identity</li>
              <li><span>03</span> PowerShell automation</li>
              <li><span>04</span> VMware, backup & recovery</li>
              <li><span>05</span> Networking, DNS & Cloudflare</li>
              <li><span>06</span> Documentation & operational handoff</li>
            </ul>
            <p className="hire-card-note">Clear scope. Clear deliverables. No mystery-box consulting.</p>
          </aside>
        </section>

        <section className="expertise-band" aria-label="Consulting specialties">
          <div className="content-width expertise-inner">
            <span>Windows Server</span>
            <span>PowerShell</span>
            <span>Active Directory</span>
            <span>Microsoft 365</span>
            <span>VMware</span>
            <span>Backup & Recovery</span>
            <span>Documentation</span>
          </div>
        </section>

        <section className="hire-services content-width" id="services">
          <header className="section-heading">
            <div>
              <p className="eyebrow">Ways to work together</p>
              <h2>Start small. Solve something real.</h2>
            </div>
            <p>
              You do not need a statement of work the size of a phone book just to get
              experienced technical help. Pick the closest fit and send me the problem.
            </p>
          </header>

          <div className="hire-service-grid">
            {services.map((service) => (
              <article className={`hire-service-card${service.featured ? " hire-service-featured" : ""}`} key={service.label}>
                <div className="hire-service-top">
                  <span>{service.detail}</span>
                  {service.featured && <small>Most versatile</small>}
                </div>
                <div className="hire-price">{service.price}</div>
                <h3>{service.label}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.fits.map((fit) => <li key={fit}>{fit}</li>)}
                </ul>
                <a href="#inquiry">Ask about this <Arrow /></a>
              </article>
            ))}
          </div>
          <p className="hire-pricing-note">
            Pricing shown is a starting point. Scope, complexity, travel, access requirements,
            and after-hours work can change the final quote. You will know the price before I begin.
          </p>
        </section>

        <section className="hire-problems">
          <div className="content-width hire-problems-inner">
            <div>
              <p className="eyebrow">Useful problems</p>
              <h2>What can I actually help with?</h2>
            </div>
            <div className="hire-problem-list">
              <article><span>Infrastructure</span><strong>“Our Windows environment works, but nobody trusts it.”</strong><p>Health checks, AD/GPO cleanup, services, DNS, patching, permissions, operational visibility, and recovery planning.</p></article>
              <article><span>Automation</span><strong>“We do this manually every single time.”</strong><p>PowerShell tooling, repeatable workflows, reporting, guardrails, scheduled operations, and human-readable output.</p></article>
              <article><span>Microsoft 365</span><strong>“We inherited a tenant and need to understand what is going on.”</strong><p>Identity, Exchange Online, access patterns, configuration review, reporting, cleanup priorities, and documentation.</p></article>
              <article><span>Resilience</span><strong>“We have backups. We think.”</strong><p>Backup review, restore thinking, dependency mapping, runbooks, ownership, failure visibility, and recovery-path documentation.</p></article>
            </div>
          </div>
        </section>

        <section className="hire-process content-width">
          <header className="section-heading">
            <div>
              <p className="eyebrow">How it works</p>
              <h2>No sales maze.</h2>
            </div>
            <p>
              The goal is to get from problem to useful outcome with as little ceremony as possible.
            </p>
          </header>
          <div className="hire-steps">
            <article><span>01</span><h3>Tell me what hurts.</h3><p>Send the environment, symptoms, goal, timeline, and anything you have already tried.</p></article>
            <article><span>02</span><h3>I scope it.</h3><p>I will tell you whether I am a good fit, what I need, what the work includes, and what it will cost.</p></article>
            <article><span>03</span><h3>We fix or build it.</h3><p>You get the work plus the context needed to operate, maintain, or hand it off afterward.</p></article>
          </div>
        </section>

        <section className="hire-inquiry" id="inquiry">
          <div className="content-width hire-inquiry-inner">
            <div className="hire-inquiry-copy">
              <p className="eyebrow">Start here</p>
              <h2>What are you trying to fix, improve, or build?</h2>
              <p>
                Give me the useful details. Screenshots, errors, environment notes, goals,
                and constraints are welcome. I will reply personally.
              </p>
              <div className="hire-boundary">
                <strong>A good engagement has boundaries.</strong>
                <p>I provide project-based consulting and focused technical sessions. I do not offer 24/7 emergency coverage or managed help-desk services.</p>
              </div>
            </div>
            <ContactForm
              defaultSubject="IT consulting inquiry"
              heading="Start a consulting inquiry"
              description="Tell me enough to understand the problem."
              messagePlaceholder="What are you trying to solve? Include the environment, symptoms, goal, timeline, and anything you have already tried."
              idleMessage="I read consulting inquiries myself."
            />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-inner hire-footer">
          <span>© 2026 David M. Schunk</span>
          <span>Independent consulting offered in a personal capacity.</span>
          <a href="/">Back to main site →</a>
        </div>
      </footer>

      <style>{`
        .hire-page { background: var(--canvas); }
        .hire-page .site-header { position: relative; z-index: 10; }
        .hire-hero { min-height: 720px; display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(340px, .85fr); gap: clamp(56px, 8vw, 112px); align-items: center; padding-block: 92px 108px; }
        .hire-hero h1, .hire-fit-card h2, .hire-service-card h3, .hire-problems h2, .hire-problem-list strong, .hire-process h2, .hire-steps h3, .hire-inquiry h2 { font-family: var(--serif); font-weight: 500; letter-spacing: -.045em; }
        .hire-hero h1 { max-width: 760px; margin: 0; font-size: clamp(50px, 6vw, 80px); line-height: 1.01; }
        .hire-lead { max-width: 690px; margin: 32px 0 0; color: var(--muted); font-size: clamp(19px, 1.5vw, 22px); line-height: 1.66; }
        .hire-meta { display: flex; flex-wrap: wrap; gap: 10px 28px; margin-top: 54px; padding-top: 24px; border-top: 1px solid var(--line); color: var(--muted); font-size: 13px; }
        .hire-meta strong { color: var(--ink); font-weight: 650; }
        .hire-fit-card { padding: 38px; border: 1px solid var(--line); border-radius: 28px; background: var(--surface); box-shadow: 0 26px 70px rgb(42 54 59 / 9%); }
        .hire-card-kicker { margin: 0 0 18px; color: var(--clay); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
        .hire-fit-card h2 { margin: 0; font-size: clamp(30px, 3vw, 42px); line-height: 1.08; }
        .hire-fit-card ul { list-style: none; margin: 34px 0 0; padding: 0; border-top: 1px solid var(--line); }
        .hire-fit-card li { display: grid; grid-template-columns: 34px 1fr; gap: 14px; align-items: center; padding: 14px 0; border-bottom: 1px solid var(--line); color: var(--muted); font-size: 14px; }
        .hire-fit-card li span { color: var(--clay); font-family: var(--serif); font-size: 13px; }
        .hire-card-note { margin: 24px 0 0; color: var(--sage-deep); font-family: var(--serif); font-size: 15px; font-style: italic; }
        .hire-services, .hire-process { padding-block: 126px; }
        .hire-service-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch; }
        .hire-service-card { display: flex; flex-direction: column; min-height: 565px; padding: 32px; border: 1px solid var(--line); border-radius: 24px; background: rgb(255 253 248 / 62%); }
        .hire-service-featured { background: var(--sage-deep); color: var(--surface); border-color: var(--sage-deep); transform: translateY(-10px); box-shadow: 0 26px 60px rgb(42 54 59 / 13%); }
        .hire-service-top { min-height: 24px; display: flex; align-items: center; justify-content: space-between; gap: 12px; color: var(--quiet); font-size: 12px; font-weight: 650; }
        .hire-service-featured .hire-service-top { color: var(--sage-light); }
        .hire-service-top small { padding: 4px 9px; border-radius: 999px; background: rgb(255 253 248 / 12%); color: var(--surface); font-size: 10px; letter-spacing: .04em; text-transform: uppercase; }
        .hire-price { margin-top: 44px; color: var(--clay); font-family: var(--serif); font-size: clamp(42px, 4vw, 58px); line-height: 1; }
        .hire-service-featured .hire-price { color: #f0c6b3; }
        .hire-service-card h3 { margin: 12px 0 18px; font-size: 31px; line-height: 1.08; }
        .hire-service-card > p { margin: 0; color: var(--muted); font-size: 15px; line-height: 1.65; }
        .hire-service-featured > p { color: #dce5df; }
        .hire-service-card ul { list-style: none; margin: 28px 0 32px; padding: 20px 0 0; border-top: 1px solid var(--line); }
        .hire-service-featured ul { border-color: rgb(255 255 255 / 18%); }
        .hire-service-card li { position: relative; padding: 7px 0 7px 18px; color: var(--muted); font-size: 13px; }
        .hire-service-featured li { color: #e6ece8; }
        .hire-service-card li::before { content: ""; position: absolute; left: 0; top: 15px; width: 6px; height: 6px; border-radius: 50%; background: var(--clay); }
        .hire-service-card > a { display: inline-flex; align-items: center; gap: 8px; width: fit-content; margin-top: auto; font-size: 14px; font-weight: 700; }
        .hire-service-card > a svg { width: 16px; transition: transform 180ms ease; }
        .hire-service-card > a:hover svg { transform: translateX(4px); }
        .hire-pricing-note { max-width: 850px; margin: 32px auto 0; color: var(--quiet); font-size: 12px; text-align: center; }
        .hire-problems { padding-block: 118px; background: var(--sage-light); }
        .hire-problems-inner { display: grid; grid-template-columns: .72fr 1.28fr; gap: 80px; }
        .hire-problems h2, .hire-process h2, .hire-inquiry h2 { margin: 0; font-size: clamp(40px, 4.5vw, 62px); line-height: 1.06; }
        .hire-problem-list { border-top: 1px solid rgb(88 107 97 / 24%); }
        .hire-problem-list article { display: grid; grid-template-columns: 120px 1fr; gap: 6px 28px; padding: 27px 0; border-bottom: 1px solid rgb(88 107 97 / 24%); }
        .hire-problem-list span { grid-row: 1 / 3; color: var(--sage-deep); font-size: 11px; font-weight: 700; letter-spacing: .055em; text-transform: uppercase; }
        .hire-problem-list strong { color: var(--sage-deep); font-size: 23px; line-height: 1.24; }
        .hire-problem-list p { margin: 4px 0 0; color: #65776d; font-size: 14px; }
        .hire-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; border-top: 1px solid var(--line); }
        .hire-steps article { padding: 34px 20px 0 0; }
        .hire-steps span { color: var(--clay); font-family: var(--serif); font-size: 15px; }
        .hire-steps h3 { margin: 34px 0 12px; font-size: 30px; }
        .hire-steps p { margin: 0; color: var(--muted); font-size: 15px; }
        .hire-inquiry { padding-block: 126px; background: var(--surface); }
        .hire-inquiry-inner { display: grid; grid-template-columns: .85fr 1.15fr; gap: 84px; align-items: start; }
        .hire-inquiry-copy > p:not(.eyebrow) { max-width: 520px; margin: 26px 0 0; color: var(--muted); font-size: 16px; }
        .hire-boundary { margin-top: 42px; padding: 22px 24px; border-left: 3px solid var(--clay); background: var(--clay-light); }
        .hire-boundary strong { display: block; font-family: var(--serif); font-size: 18px; }
        .hire-boundary p { margin: 7px 0 0; color: #765d53; font-size: 13px; }
        .hire-footer span:nth-child(2) { color: #aeb7b5; }
        @media (max-width: 980px) {
          .hire-hero, .hire-problems-inner, .hire-inquiry-inner { grid-template-columns: 1fr; }
          .hire-hero { min-height: auto; gap: 46px; }
          .hire-fit-card { max-width: 680px; }
          .hire-service-grid { grid-template-columns: 1fr; }
          .hire-service-card { min-height: 0; }
          .hire-service-featured { transform: none; }
          .hire-problems-inner { gap: 44px; }
        }
        @media (max-width: 760px) {
          .hire-hero { padding-block: 70px 82px; }
          .hire-meta { display: grid; }
          .hire-services, .hire-process, .hire-inquiry, .hire-problems { padding-block: 84px; }
          .hire-steps { grid-template-columns: 1fr; }
          .hire-steps article { padding: 26px 0; border-bottom: 1px solid var(--line); }
          .hire-steps h3 { margin-top: 18px; }
          .hire-problem-list article { grid-template-columns: 1fr; }
          .hire-problem-list span { grid-row: auto; }
        }
      `}</style>
    </div>
  );
}
