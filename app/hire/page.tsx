import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Contact & Collaboration",
  description:
    "Contact David Schunk about technology, writing, podcasts, open source, adoptee work, or independent projects.",
  alternates: { canonical: "/hire" },
  openGraph: {
    url: "https://www.davidschunk.com/hire",
    title: "Contact David Schunk",
    description:
      "Technology, writing, podcast, open-source, community, and independent-project conversations.",
  },
};

const topics = [
  {
    title: "Technology",
    copy: "Infrastructure, Windows, PowerShell, documentation, operations, open source, and technical projects.",
  },
  {
    title: "Writing",
    copy: "Articles, technical guides, research, editing, interviews, and ideas worth explaining clearly.",
  },
  {
    title: "Podcasts & speaking",
    copy: "IT, adoption, identity, community building, and conversations about the work behind the projects.",
  },
  {
    title: "Community projects",
    copy: "Adoptee initiatives, nonprofit work, resource projects, and useful technology for communities.",
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
              <p className="ds-eyebrow">Contact & collaboration</p>
              <h1 className="ds-page-title">Want to talk about something?</h1>
            </div>
            <p className="ds-page-dek">
              Send me the context and what you have in mind. It does not need to
              sound like a formal pitch.
            </p>
          </div>
        </section>

        <section className="ds-section">
          <div className="ds-shell">
            <div className="ds-section-title">
              <div>
                <p className="ds-eyebrow">Good reasons to reach out</p>
                <h2>These are usually the conversations I&apos;m interested in.</h2>
              </div>
              <p>
                I keep this deliberately broad. Sometimes something turns into a
                project. Sometimes it is just a useful conversation.
              </p>
            </div>

            <div className="ds-collab-list">
              {topics.map((item) => (
                <article className="ds-collab-row" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <section className="ds-boundaries">
              <p className="ds-eyebrow">One important note</p>
              <h2>Personal projects stay separate from my employer.</h2>
              <p>
                Anything discussed through this site is in my personal capacity.
                I do not use employer confidential information, internal systems,
                proprietary code, or employer resources for independent work.
              </p>
              <div className="ds-boundary-list">
                <span>Personal equipment and accounts</span>
                <span>No employer confidential information</span>
                <span>No employer endorsement implied</span>
                <span>Any required outside-work approval comes first</span>
              </div>
            </section>
          </div>
        </section>

        <section className="ds-section ds-contact-section" id="contact">
          <div className="ds-shell ds-contact-grid">
            <div className="ds-contact-copy">
              <p className="ds-eyebrow">Send a message</p>
              <h2>Tell me what you&apos;re thinking.</h2>
              <p>
                A few useful details are enough: what you are working on, what
                you need, and why you thought of me.
              </p>
              <div className="ds-contact-links">
                <Link href="/about">About me</Link>
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <ContactForm
              defaultSubject="Project or collaboration inquiry"
              heading="Send me a message"
              description="It goes directly to me."
              messagePlaceholder="What are you working on, and what would you like to talk about?"
              idleMessage="I read every inquiry myself."
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
