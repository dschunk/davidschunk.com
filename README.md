# davidschunk.com

> **Personal-site notice:** This website and repository are maintained by David Schunk in a personal capacity. References to employers are biographical only and do not imply sponsorship, endorsement, or affiliation with the site's independent projects, writing, or community work. Employer confidential or proprietary information, internal systems, customer data, credentials, and employer work product must not be published here.

The source for [davidschunk.com](https://www.davidschunk.com/) — David Schunk's personal home on the web.

## What this site is

A personal publishing and portfolio site bringing together:

- IT engineering and infrastructure work
- Everyday IT Tips and technical writing
- Voice of Adoptees
- the Russian Adoptees Organization
- independent research and publications
- David's personal background and contact information

## Design system

The current identity uses an executive editorial direction rather than a conventional portfolio or SaaS layout:

- deep navy mastheads and publication surfaces
- warm ivory paper backgrounds
- restrained gold rules and details
- burgundy accents
- serif display typography paired with clean system sans-serif text
- square edges, formal rules, numbered project treatments, and strong hierarchy
- David's existing portrait as a primary visual anchor
- responsive layouts with reduced-motion support

The goal is authoritative and personal without imitating an official government identity or using government seals.

## Main routes

- `/` — homepage, selected work, publications, community projects, and contact
- `/about` — personal background and biography
- `/hire` — contact and collaboration information
- `/research/ai-governance` — AI governance research paper
- `/research/russia-policy` — U.S.–Russia foreign-policy paper
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
  research/
  globals.css
  rebrand.css

components/
  site-chrome.tsx
  contact-form.tsx

worker/
  index.ts
```

© 2026 David Schunk
