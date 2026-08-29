# davidschunk.com

The source for [davidschunk.com](https://www.davidschunk.com/) — David Schunk's
personal home on the web.

This site brings together infrastructure engineering, open-source tools,
writing, adoption advocacy, gaming, and the story behind the work. The design
uses a field-operations-meets-editorial visual system: deep navy, warm paper,
signal red, precise technical details, and direct language.

## What is here

- A responsive personal and professional homepage
- Selected Windows, Microsoft 365, and FiveM engineering projects
- The operating principles behind David's public work
- Featured writing and the **Best Practices for Everyday IT** newsletter
- Personal background, community work, and current projects
- Accessible navigation, keyboard states, reduced-motion support, and custom metadata

## Stack

- React 19
- Next.js-compatible app routing through [vinext](https://github.com/cloudflare/vinext)
- TypeScript
- Tailwind CSS 4 plus site-specific CSS
- Cloudflare-compatible server output

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
  layout.tsx       Site metadata and root layout
  page.tsx         Homepage content and structure
  globals.css      Complete visual system and responsive rules
public/
  favicon.svg      DS site mark
```

## Philosophy

> Build systems the next engineer can understand, operate, and trust.

The same rule applies to this repository: keep the interface deliberate, the
content useful, and the implementation easy to hand off.

© 2026 David Schunk
