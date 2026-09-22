import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Independent collaboration, writing, speaking, open-source, podcast, community, and technology conversations with David Schunk.",
  alternates: { canonical: "/hire" },
  openGraph: {
    url: "https://www.davidschunk.com/hire",
    title: "Work With David Schunk",
    description:
      "Independent collaboration, writing, speaking, open-source, podcast, community, and technology conversations.",
  },
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const waysToWork = [
  {
    number: "01",
    title: "Technical collaboration",
    copy: "Open-source work, infrastructure thinking, practical tooling, documentation, reviews, troubleshooting approaches, and projects where operations experience is useful.",
  },
  {
    number: "02",
    title: "Writing & research",
    copy: "Articles, technical explainers, essays, research projects, editorial conversations, and work that benefits from making complicated subjects understandable.",
  },
  {
    number: "03",
    title: "Podcasts & speaking",
    copy: "Conversations about IT, adoption, identity, community building, systems thinking, documentation, and the experience behind the work.",
  },
  {
    number: "04",
    title: "Community projects",
    copy: "Adoptee initiatives, nonprofit or volunteer technology, public-interest projects, resource development, and useful infrastructure for communities.",
  },
];

export default function WorkWithMePage() {
  return (
    <div className="ds-site">
      <SiteHeader />

      <main>
        <section className="ds-page-hero">
          <div className="ds-shell ds-page-hero-grid">
            <div>
              <p className="ds-page-kicker">Work with me</p>
              <h1 className="ds-page-title">Good work usually starts with a useful conversation.</h1>
            </div>
            <p className="ds-page-dek">
              I&apos;m open to independent conversations where my experience,
              writing, technical background, or community work can add something
              real. Tell me what you&apos;re trying to do and why you reached out.
            </p>
          </div>
        </section>

        <section className="ds-section">
          <div className="ds-shell">
            <header className="ds-section-head">
              <div>
                <p className="ds-section-kicker">Where I can be useful</p>
                <h2>A few good reasons to reach out.</h2>
              </div>
              <p>
                This is deliberately broader than a consulting services page.
                Sometimes the right outcome is a project. Sometimes it is an
                interview, contribution, introduction, idea, or conversation.
              </p>
            </header>

            <div className="ds-collab-list">
              {waysToWork.map((item) => (
                <article className="ds-collab-row" key={item.title}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <section className="ds-boundaries">
              <p className="ds-page-kicker">Clear boundaries</p>
              <h2>Personal work stays separate from employer work.</h2>
              <p>
                Anything discussed through this site is in my personal and
                independent capacity. Employer systems, confidential information,
                proprietary code, internal materials, and implied endorsements
                are not part of the conversation.
              </p>
              <div className="ds-boundary-list">
                <span>Personal equipment and accounts only</span>
                <span>No employer confidential or proprietary information</span>
                <span>No employer endorsement or affiliation implied</span>
                <span>Outside-work approvals handled before any engagement begins</span>
              </div>
            </section>
          </div>
        </section>

        <section className="ds-section ds-contact" id="contact">
          <div className="ds-shell ds-contact-grid">
            <div className="ds-contact-copy">
              <p className="ds-section-kicker">Start here</p>
              <h2>Tell me what you have in mind.</h2>
              <p>
                Useful context beats a formal pitch. What are you building,
                writing, organizing, researching, or trying to solve? What would
                you like from me?
              </p>
              <div className="ds-contact-links">
                <Link href="/about">About me ↗</Link>
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>

            <ContactForm
              defaultSubject="Project or collaboration inquiry"
              heading="Start a conversation"
              description="Give me enough context to understand the idea."
              messagePlaceholder="What are you working on, what do you need, and where do you think I could help?"
              idleMessage="A message is a conversation starter, not an agreement or commitment."
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
