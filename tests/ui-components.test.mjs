import assert from "node:assert/strict";
import test, { after } from "node:test";
import { fileURLToPath } from "node:url";

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const root = fileURLToPath(new URL("..", import.meta.url));
const vite = await createServer({
  appType: "custom",
  configFile: false,
  root,
  resolve: { alias: { "@": root } },
  server: { middlewareMode: true },
});

after(async () => {
  await vite.close();
});

test("renders the button contract used by site forms", async () => {
  const { Button } = await vite.ssrLoadModule("/components/ui/button.tsx");
  const html = renderToStaticMarkup(
    React.createElement(
      Button,
      { type: "submit", variant: "outline", size: "lg" },
      "Send message",
    ),
  );

  assert.match(html, /data-slot="button"/);
  assert.match(html, /data-variant="outline"/);
  assert.match(html, /data-size="lg"/);
  assert.match(html, /type="submit"/);
  assert.match(html, />Send message<\/button>/);
});

test("renders the contact form's required fields and bot trap", async () => {
  const { ContactForm } = await vite.ssrLoadModule("/components/contact-form.tsx");
  const html = renderToStaticMarkup(
    React.createElement(ContactForm, { defaultSubject: "Infrastructure question" }),
  );

  assert.match(html, /class="contact-form"/);
  assert.match(html, /name="name"/);
  assert.match(html, /name="email"/);
  assert.match(html, /name="subject"/);
  assert.match(html, /name="message"/);
  assert.match(html, /name="website"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /Infrastructure question/);
});
