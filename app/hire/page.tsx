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
  ["Technology", "Infrastructure, Windows, PowerShell, operations, documentation, open source, and technical projects."],
  ["Writing", "Articles, technical guides, research, editing, interviews, and ideas worth explaining clearly."],
  ["Podcasts & speaking", "IT, adoption, identity, community building, and the work behind the projects."],
  ["Community projects", "Adoptee initiatives, resource projects, and useful technology for communities."],
];

export default function WorkWithMePage() {
  return (
    <div className="ds-site">
      <SiteHeader />

      <main>
        <section className="ds-subhero ds-subhero-contact">
          <div className="ds-shell">
            <span className="ds-subhero-index">Contact / 01</span>
            <h1>Let&apos;s talk.</h1>
            <p>
              You do not need a polished pitch. Tell me what you are working on,
              what you need, and why you thought of me.
            </p>
          </div>
        </section>

        <section className="ds-topic-section">
          <div className="ds-shell">
            <div className="ds-section-topline">
              <span>Good reasons to reach out</span>
              <p>I keep this deliberately broad.</p>
            </div>

            <div className="ds-topic-list">
              {topics.map(([title, copy], index) => (
                <div className="ds-topic-row" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{title}</h2>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ds-personal-note">
          <div className="ds-shell ds-personal-note-grid">
            <span>Personal capacity</span>
            <h2>My independent work stays separate from my employer.</h2>
            <p>
              I do not use employer confidential information, internal systems,
              proprietary code, customer data, credentials, or employer resources
              for personal projects. Any required outside-work approval comes first.
            </p>
          </div>
        </section>

        <section className="ds-contact-stage" id="contact">
          <div className="ds-shell ds-contact-layout">
            <div className="ds-contact-lead">
              <span>Send a message</span>
              <h2>HELLO.</h2>
              <p>
                A few useful details are enough. If there is a fit, we can figure
                out the rest from there.
              </p>
              <div className="ds-social-line">
                <Link href="/about">About me →</Link>
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>

            <ContactForm
              defaultSubject="Project or collaboration inquiry"
              heading="Send a message"
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
