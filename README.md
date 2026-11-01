# Charles Cahilig — Portfolio

Personal portfolio of Charles Cahilig, a software developer based in the
Philippines. It presents selected projects as written case studies, along with
experience, skills, and contact details.

- **Live site:** https://portfolio-theta-indol-84.vercel.app
- **Source:** https://github.com/ShadaTaran/portfolio

## What's in the site

- **Home** (`/`): introduction, selected work, experience, about and
  education, skills, and contact links.
- **Case studies**
  - `/projects/markly`: Markly, a universal personal library (live beta)
  - `/projects/mansar-trucking-system`: Mansar Trucking V2, a full-stack
    trucking operations platform (in development)
- Light and dark themes that follow the system setting, a skip link, visible
  focus styles, and reduced-motion support.
- Page metadata, an Open Graph image, `sitemap.xml`, and `robots.txt`,
  generated with the App Router metadata conventions.

Project descriptions are checked against each project's own repository.
Internship work is described at a high level only, because its codebase is
private.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) with React 19
- TypeScript in strict mode
- Tailwind CSS 4
- [next-themes](https://github.com/pacocoursey/next-themes) for theme switching
- [Lucide](https://lucide.dev/) icons
- ESLint 9 with `eslint-config-next`

The site has no database, CMS, or backend service. All content is typed,
local data in the repository.

## Project structure

```
src/
  app/          routes, root layout, and metadata routes (sitemap, robots, OG image, icon)
  components/   page sections, layout primitives, and case-study components
  data/         typed portfolio content: project summaries and case studies
  lib/          site constants, navigation items, and small helpers
  types/        content types
public/         project images
```

To update project content, edit `src/data/projects.ts` (home page entries)
and `src/data/project-case-studies.ts` (case-study pages).

## Getting started

Requirements: Node.js 20.9 or later (the minimum for Next.js 16) and npm.

```bash
npm install
npm run dev
```

Then open http://localhost:3000. No environment variables are needed.

## Verification

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript type check (no emit)
npm run build       # production build
```

## Deployment

The site is hosted on [Vercel](https://vercel.com/) as a standard Next.js
project: Vercel runs `npm run build` and serves the output. No environment
variables are required. Fonts are downloaded from Google Fonts during the
build by `next/font` and then served with the site, so the live site makes no
third-party font requests.
