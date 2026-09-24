# davidschunk.com

> **Personal-site notice:** This website and repository are maintained by David Schunk in a personal capacity. References to employers are biographical only and do not imply sponsorship, endorsement, or affiliation with the site's independent projects, writing, or community work. Employer confidential or proprietary information, internal systems, customer data, credentials, and employer work product must not be published here.

The source for [davidschunk.com](https://www.davidschunk.com/) — David Schunk's personal home on the web.

## What this site is

A personal publishing and project hub bringing together:

- IT engineering and infrastructure work
- Everyday IT Tips and technical writing
- open-source Windows and PowerShell tools
- Voice of Adoptees
- the Russian Adoptees Organization
- independent research and publications
- David's personal background and contact information

## Design system

The current identity is a clean-slate, bright editorial system built to be visually distinct from David's other sites:

- warm white and soft-stone surfaces
- black typography with cobalt blue and acid-lime accents
- oversized Manrope typography with high readability
- a single-column typographic hero instead of split-screen cards
- full-width project index rows instead of repeated portfolio cards
- a cobalt writing stage, large narrative sections, and flat contact form
- deliberate hard rules and spacing inspired by modern editorial / Swiss layouts
- no mountain graphics, executive navy/gold styling, terminal UI, glass cards, or RAO-style hero composition
- responsive layouts with reduced-motion support

## Main routes

- `/` — homepage, work, writing, story, adoptee projects, and contact
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
