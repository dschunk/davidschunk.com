import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Work With Me | David Schunk",
  description:
    "Independent projects, open-source collaboration, writing, speaking, community technology, and project conversations with David Schunk.",
};

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20">
    <path d="M3 10h13M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const waysToConnect = [
  {
    number: "01",
    name: "Open source",
    category: "Tools · reviews · collaboration",
    summary:
      "Talk with me about public tooling, documentation, maintainability, operations patterns, contributions, and ideas that make infrastructure easier to understand and operate.",
  },
  {
    number: "02",
    name: "Writing & speaking",
    category: "Articles · podcasts · technical conversations",
    summary:
      "I am open to conversations about practical IT, systems thinking, documentation, adoption, community building, and the lessons behind the work.",
  },
  {
    number: "03",
    name: "Independent projects",
    category: "Community · web · technology",
    summary:
      "If you have an interesting independent project, community initiative, or technical idea that fits my experience, send it over and I will take a look.",
  },
];

export default function WorkWithMePage() {
  return (
    <div className="site-frame">
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

        <a className="header-discord" href="#contact">
          Get in touch <Arrow />
        </a>
      </header>

      <main>
        <section className="work-section content-width">
          <header className="section-heading">
            <div>
              <p className="eyebrow"><span /> Work with me</p>
              <h2>Good projects usually start with a good conversation.</h2>
            </div>
            <p>
              I am open to conversations about open source, writing, speaking,
              community technology, and independent projects. Send me what you are
              working on, what you are trying to solve, and why you think I may be useful.
            </p>
          </header>

          <div className="project-list">
            {waysToConnect.map((item) => (
              <article className="project-item" key={item.name}>
                <span className="project-number">{item.number}</span>
                <div className="project-title">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                </div>
                <div className="project-summary">
                  <p>{item.summary}</p>
                  <small>Personal and independent capacity</small>
                </div>
                <a href="#contact" aria-label={`Ask David about ${item.name}`}><Arrow /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="principle-section">
          <div className="content-width principle-inner">
            <p className="eyebrow">Clear boundaries</p>
            <blockquote>
              Personal projects stay separate from my employer, its systems, and its information.
            </blockquote>
            <div className="principle-list">
              <span>Personal equipment and accounts</span>
              <span>No employer confidential information or proprietary code</span>
              <span>No employer endorsement or affiliation implied</span>
              <span>Outside professional engagements require conflict review and any applicable approval before acceptance</span>
            </div>
          </div>
        </section>

        <section className="contact-section content-width" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Open channel</p>
            <h2>Tell me what you have in mind.</h2>
            <p>
              A message is an invitation to talk, not an agreement to perform services.
              If a proposed engagement requires outside-employment or conflict approval,
              that approval must be handled before any work is accepted or begins.
            </p>
            <a className="discord-block" href="https://discord.gg/3phxzXBsAA" target="_blank" rel="noreferrer">
              <span>Prefer a community conversation?</span>
              <strong>Join my Discord</strong>
              <small>discord.gg/3phxzXBsAA</small>
              <Arrow />
            </a>
          </div>

          <ContactForm
            defaultSubject="Project or collaboration inquiry"
            heading="Start a conversation"
            description="Tell me what you are working on and what you need."
            messagePlaceholder="What are you building, writing, organizing, or trying to solve? Include the useful context and what you would like from me."
            idleMessage="I read every inquiry myself."
          />
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-inner">
          <span>© 2026 David M. Schunk</span>
          <span>Personal site · independent projects · no employer endorsement implied</span>
          <a href="/">Back to main site →</a>
        </div>
      </footer>
    </div>
  );
}
