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
        <section className="ds-subpage-intro">
          <div className="ds-shell">
            <p className="ds-overline">Contact</p>
            <h1>Let&apos;s talk.</h1>
            <p>
              You do not need a formal pitch. A little context about what you are
              working on and why you reached out is enough.
            </p>
          </div>
        </section>

        <section className="ds-topic-section">
          <div className="ds-shell">
            <div className="ds-topic-list">
              {topics.map(([title, copy]) => (
                <div className="ds-topic-row" key={title}>
                  <h2>{title}</h2>
                  <p>{copy}</p>
                </div>
              ))}
            </div>

            <div className="ds-personal-note">
              <strong>Personal capacity</strong>
              <p>
                My independent work stays separate from my employer. I do not use
                employer confidential information, internal systems, proprietary
                code, customer data, credentials, or employer resources for personal work.
              </p>
            </div>
          </div>
        </section>

        <section className="ds-plain-section ds-section-alt" id="contact">
          <div className="ds-shell ds-contact-layout">
            <div className="ds-contact-copy">
              <div className="ds-section-heading">
                <span>Send a message</span>
                <h2>Hello.</h2>
              </div>
              <p>
                Technology, writing, podcasts, open source, adoptee work, research,
                or an independent project.
              </p>
              <div className="ds-home-links">
                <Link href="/about">About me</Link>
                <a href="https://github.com/dschunk" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/dschunk" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              </div>
            </div>

            <ContactForm
              defaultSubject="Project or collaboration inquiry"
              heading="Send a message"
              description="It goes directly to me."
              messagePlaceholder="What are you working on?"
              idleMessage="I read every inquiry myself."
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
