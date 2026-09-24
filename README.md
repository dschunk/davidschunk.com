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

The current identity is intentionally restrained and content-first:

- white and warm off-white surfaces
- black and gray typography
- native system font stack for crisp rendering
- no gradients, decorative illustrations, accent-color blocks, glass UI, or large visual gimmicks
- simple editorial spacing and thin rules
- plain project and writing lists instead of card-heavy layouts
- a quiet header and footer
- flat, minimal contact forms
- consistent monochrome styling across homepage, About, Contact, and research pages

The goal is clarity, readability, and longevity rather than visual novelty.

## Main routes

- `/` — homepage, work, writing, about, and contact
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

© 2026 David Schunk
