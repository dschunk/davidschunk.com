"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus = "idle" | "sending" | "success" | "error";

const CONTACT_ENDPOINT =
  "https://formsubmit.co/ajax/David.Schunk@comcast.net";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("_honey") ?? "").trim()) {
      form.reset();
      setStatus("success");
      return;
    }

    setStatus("sending");

    const subject = String(data.get("subject") ?? "Website message");
    const payload = Object.fromEntries(data.entries());
    payload._subject = `davidschunk.com contact — ${subject}`;
    payload._template = "table";
    payload._captcha = "false";
    payload._url = window.location.href;

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { success?: boolean | string };

      if (!response.ok || result.success === false || result.success === "false") {
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
        <span>NEW TRANSMISSION</span>
        <span>TO: DAVID SCHUNK</span>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>01 / YOUR NAME</span>
          <Input
            className="contact-input"
            name="name"
            autoComplete="name"
            placeholder="What should I call you?"
            required
          />
        </label>

        <label className="form-field">
          <span>02 / REPLY EMAIL</span>
          <Input
            className="contact-input"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="form-field form-field-wide">
          <span>03 / SUBJECT</span>
          <Input
            className="contact-input"
            name="subject"
            placeholder="What are we talking about?"
            required
          />
        </label>

        <label className="form-field form-field-wide">
          <span>04 / MESSAGE</span>
          <Textarea
            className="contact-textarea"
            name="message"
            placeholder="Give me the useful details."
            rows={7}
            required
          />
        </label>

        <Input
          className="honey-field"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      <div className="form-footer">
        <div className="form-status" aria-live="polite">
          {status === "idle" && "SECURE ROUTE / REPLY DIRECTLY FROM EMAIL"}
          {status === "sending" && "TRANSMITTING MESSAGE…"}
          {status === "success" && "TRANSMISSION RECEIVED. I’LL BE IN TOUCH."}
          {status === "error" && (
            <span>
              DELIVERY FAILED — EMAIL ME AT{" "}
              <a href="mailto:David.Schunk@comcast.net">DAVID.SCHUNK@COMCAST.NET</a>
            </span>
          )}
        </div>

        <Button className="transmit-button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "SENDING…" : "TRANSMIT MESSAGE →"}
        </Button>
      </div>
    </form>
  );
}
