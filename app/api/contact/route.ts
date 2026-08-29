export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

const noStoreHeaders = { "Cache-Control": "no-store" };

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, { status, headers: noStoreHeaders });
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return json({ ok: false, error: "Invalid request origin." }, 403);
  }

  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body) {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  if (clean(body.website)) {
    return json({ ok: true });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const subject = clean(body.subject);
  const message = clean(body.message);

  if (name.length < 2 || name.length > 100) {
    return json({ ok: false, error: "Please enter your name." }, 400);
  }

  if (email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: "Please enter a valid reply email." }, 400);
  }

  if (subject.length < 2 || subject.length > 160) {
    return json({ ok: false, error: "Please enter a subject." }, 400);
  }

  if (message.length < 10 || message.length > 5000) {
    return json({ ok: false, error: "Please enter a message between 10 and 5,000 characters." }, 400);
  }

  const recipient = process.env.CONTACT_RECIPIENT;

  if (!recipient) {
    return json({ ok: false, error: "Contact delivery is not configured." }, 503);
  }

  try {
    const relay = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: `davidschunk.com contact — ${subject}`,
          _template: "table",
          _captcha: "false",
          _url: request.headers.get("referer") ?? new URL(request.url).origin,
          source: "davidschunk.com",
        }),
      },
    );

    if (!relay.ok) {
      return json({ ok: false, error: "Message delivery failed." }, 502);
    }

    return json({ ok: true });
  } catch {
    return json({ ok: false, error: "Message delivery failed." }, 502);
  }
}
