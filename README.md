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

The current site uses a completely new modern personal identity built around:

- deep ink surfaces with warm-white content areas
- electric teal as the primary signature accent
- restrained violet, coral, and blue secondary accents
- DM Sans typography with large, sharp, readable type
- asymmetric layouts and strong visual hierarchy
- soft 20–26px radii and restrained depth rather than glass-heavy UI
- a purpose-built “Current desk” hero panel instead of generic portfolio cards
- distinct project, writing, technology, adoptee, profile, and contact experiences
- responsive layouts with reduced-motion support

The design takes cues from the discipline and polish of RussianAdoptees.com—clear hierarchy, intentional spacing, strong contrast, and coherent sections—without reusing its visual identity.

## Main routes

- `/` — homepage, work, writing, adoptee projects, profile, and contact
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
