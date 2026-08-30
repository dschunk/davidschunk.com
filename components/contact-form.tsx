"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "sending" | "success" | "error";

type ContactFormProps = {
  defaultSubject?: string;
  heading?: string;
  description?: string;
  messagePlaceholder?: string;
  idleMessage?: string;
};

export function ContactForm({
  defaultSubject = "",
  heading = "Send a message",
  description = "Your note is delivered privately.",
  messagePlaceholder = "Give me the useful details.",
  idleMessage = "I read every message myself.",
}: ContactFormProps = {}) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("website") ?? "").trim()) {
      form.reset();
      setStatus("success");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      if (!response.ok) {
        throw new Error("Message delivery failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <div>
          <span>{heading}</span>
          <p>{description}</p>
        </div>
        <span className="form-availability"><i /> Available</span>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>Your name</span>
          <Input
            className="contact-input"
            name="name"
            autoComplete="name"
            placeholder="What should I call you?"
            minLength={2}
            maxLength={100}
            required
          />
        </label>

        <label className="form-field">
          <span>Reply email</span>
          <Input
            className="contact-input"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={200}
            required
          />
        </label>

        <label className="form-field form-field-wide">
          <span>Subject</span>
          <Input
            className="contact-input"
            name="subject"
            defaultValue={defaultSubject}
            placeholder="What are we talking about?"
            minLength={2}
            maxLength={160}
            required
          />
        </label>

        <label className="form-field form-field-wide">
          <span>Message</span>
          <Textarea
            className="contact-textarea"
            name="message"
            placeholder={messagePlaceholder}
            rows={6}
            minLength={10}
            maxLength={5000}
            required
          />
        </label>

        <label className="honey-field" aria-hidden="true">
          Leave this field empty
          <Input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="form-footer">
        <p className={`form-status form-status-${status}`} aria-live="polite">
          {status === "idle" && idleMessage}
          {status === "sending" && "Sending your message…"}
          {status === "success" && "Thanks—your message is on its way."}
          {status === "error" && (
            <>
              That didn&apos;t go through. Try me on{" "}
              <a href="https://discord.gg/3phxzXBsAA" target="_blank" rel="noreferrer">Discord</a>.
            </>
          )}
        </p>

        <Button className="transmit-button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
          <span aria-hidden="true">→</span>
        </Button>
      </div>
    </form>
  );
}
