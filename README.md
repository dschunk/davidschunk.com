# davidschunk.com

> **Personal-site notice:** This website and repository are maintained by David Schunk in a personal capacity. References to employers are biographical only and do not imply sponsorship, endorsement, or affiliation with the site's independent projects, writing, or community work. Employer confidential or proprietary information, internal systems, customer data, credentials, and employer work product must not be published here.

The source for [davidschunk.com](https://www.davidschunk.com/) — David Schunk's
personal home on the web.

## What this site is

This is a personal headquarters, not a single-purpose IT portfolio.

The site brings together four parts of David's public work:

- **Technology** — IT engineering, infrastructure, automation, open-source tooling, labs, and practical operations
- **Writing & research** — Everyday IT Tips, technical field guides, essays, and public research
- **Adoption & identity** — Voice of Adoptees and first-person adoptee storytelling
- **Community building** — the Russian Adoptees Organization and other independent projects

The 2026 redesign uses an editorial visual system: warm paper tones, ink, navy and
brick-red accents, large serif display typography, strong rules, and intentionally
simple layouts. It replaces the former dark-green mountain/dashboard aesthetic.

## Main routes

- `/` — personal homepage and selected work
- `/about` — long-form personal story and background
- `/hire` — collaboration and contact information
- `/research/ai-governance` — AI governance research paper
- `/api/contact` — contact-form delivery endpoint

## Stack

- React 19
- Next.js-compatible app routing through [vinext](https://github.com/cloudflare/vinext)
- TypeScript
- Tailwind CSS 4 plus site-specific CSS
- Cloudflare Workers
- Wrangler
- GitHub Actions validation

## Validation

Pull requests and pushes to `main` run the production validation workflow:

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
  layout.tsx                  site metadata and root layout
  page.tsx                    homepage
  about/page.tsx              long-form about page
  hire/page.tsx               collaboration page
  research/ai-governance/     public research
  globals.css                 legacy/shared styles and research styles
  rebrand.css                 scoped 2026 editorial personal-site system

components/
  site-chrome.tsx             shared header and footer
  contact-form.tsx            contact UI and client-side delivery

public/
  favicon.svg                 DS editorial mark

worker/
  index.ts                    Cloudflare worker entrypoint
```

## Design principle

> Make the site feel like a person with a body of work, not a template with a résumé.

The technical work still matters. It simply sits beside the writing, adoption work,
community work, research, and personal story instead of swallowing the entire identity.

© 2026 David Schunk
