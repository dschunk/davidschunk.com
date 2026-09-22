# davidschunk.com

> **Personal-site notice:** This website and repository are maintained by David Schunk in a personal capacity. References to employers are biographical only and do not imply sponsorship, endorsement, or affiliation with the site's independent projects, writing, or community work. Employer confidential or proprietary information, internal systems, customer data, credentials, and employer work product must not be published here.

The source for [davidschunk.com](https://www.davidschunk.com/) — David Schunk's personal home on the web.

## What this site is

A straightforward personal website that brings together:

- IT engineering and infrastructure work
- Everyday IT Tips and technical writing
- Voice of Adoptees
- the Russian Adoptees Organization
- research and independent projects
- David's personal background and contact information

The current design intentionally avoids portfolio gimmicks and oversized editorial styling. It uses system typography, simple spacing, light neutral backgrounds, restrained green accents, readable cards, and conventional navigation.

## Main routes

- `/` — homepage, selected work, writing, adoptee projects, and contact
- `/about` — personal background and biography
- `/hire` — contact and collaboration information
- `/research/ai-governance` — AI governance research paper
- `/api/contact` — contact-form delivery endpoint

## Stack

- React 19
- Next.js-compatible app routing through vinext
- TypeScript
- Tailwind CSS 4 plus site-specific CSS
- Cloudflare Workers
- Wrangler
- GitHub Actions validation

## Validation

Pull requests and pushes to `main` run:

1. locked dependency install
2. ESLint
3. production build
4. rendered HTML test
5. UI component tests
6. Wrangler deployment dry run

## Develop locally

Node.js 22.13 or newer is required.

```bash
npm ci
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Structure

```text
app/
  layout.tsx
  page.tsx
  about/page.tsx
  hire/page.tsx
  research/ai-governance/
  globals.css
  rebrand.css

components/
  site-chrome.tsx
  contact-form.tsx

worker/
  index.ts
```

© 2026 David Schunk
