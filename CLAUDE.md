# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

The `AGENTS.md` warning above is load-bearing: this repo runs Next.js 16 (App Router, Turbopack), a version newer than what's in your training data. APIs and conventions (metadata, image generation, routing) may differ from what you expect — check `node_modules/next/dist/docs/` before assuming behavior.

## Commands

```bash
npm run dev      # start dev server at localhost:3000 (Turbopack)
npm run build      # production build — also runs the TypeScript check
npm run start        # serve the production build (run `build` first)
npm run lint           # ESLint (eslint-config-next core-web-vitals + typescript)
```

There is no test suite in this repo — don't invent test commands or assume a test runner exists.

## Architecture

This is a single-page portfolio site. Nearly everything is static/server-rendered; only a handful of components need interactivity.

### Content is data-driven from one file

All page content — name, experience, projects, skills, competitive programming stats, education, community/teaching history — lives in `src/data/portfolio.ts` as one typed `portfolio` object. Section components import from it and map over arrays; they contain no hardcoded copy. **To change what the site says, edit this file** — component changes are only needed if the data shape itself changes.

`portfolio.aboutMe` is a raw HTML string rendered via `dangerouslySetInnerHTML` in `About.tsx`. It's trusted, hand-authored content, not user input.

### Page = a stack of section components

`src/app/page.tsx` renders `Nav`, `Hero`, `About`, `Experience`, `Projects`, `Skills`, `CompetitiveProgramming`, `Education`, `Community`, `Contact`, `Footer` in order, each a top-level component under `src/components/`. Each section owns its own `id` (used by `Nav`'s scroll-spy and anchor links) and its own `py-24` vertical rhythm — keep both consistent when adding a new section.

Shared primitives used across sections:
- `Reveal.tsx` — Framer Motion `whileInView` fade/slide-up wrapper; wrap new content blocks in it for the site's standard scroll-reveal behavior.
- `SectionHeading.tsx` — the eyebrow/title/description header pattern used at the top of every section.

### Design system lives in CSS custom properties, not a Tailwind config file

Tailwind v4 is CSS-first here — there is no `tailwind.config.js`. Everything (`--bg`, `--accent`, `--surface`, spacing, custom `animate-*` utilities) is defined via `@theme inline` and `:root` in `src/app/globals.css`. Light mode is a `[data-theme="light"]` override block plus a `prefers-color-scheme` media query fallback.

Reusable visual classes to reach for instead of ad hoc styles: `.glass-card`, `.gradient-text`, `.gradient-border`, `.chip`, `.grid-bg`.

Theme switching (`ThemeToggle.tsx`) writes `data-theme` on `<html>` and persists to `localStorage`. An inline script in `layout.tsx` sets `data-theme` before hydration to avoid a flash of the wrong theme. Because of this (and browser extensions like Grammarly injecting attributes into `<body>`), both `<html>` and `<body>` in `layout.tsx` carry `suppressHydrationWarning` intentionally — don't remove it as a "cleanup."

### SEO is centralized

- `src/lib/site.ts` is the single source of truth for `SITE_URL`, site name/description, and keywords — update it here, not per-file, when the domain changes.
- `src/app/layout.tsx` builds metadata (title template, Open Graph, Twitter cards, JSON-LD `Person` schema) from `src/data/portfolio.ts` + `src/lib/site.ts`.
- `src/app/sitemap.ts` and `src/app/robots.ts` are Next.js metadata route handlers (not static files).
- `src/app/opengraph-image.tsx` generates the social preview image at build time via `next/og`'s `ImageResponse` — no `runtime = "edge"` export (removed deliberately so it can be statically generated).

### lucide-react has no brand/logo icons

The installed `lucide-react` major version dropped brand icons (GitHub, LinkedIn, etc.). Custom SVGs for these live in `src/components/icons/BrandIcons.tsx` (`GithubIcon`, `LinkedinIcon`) — use these instead of trying to import them from `lucide-react`.

### Path alias

`@/*` maps to `./src/*` (see `tsconfig.json`).

### Dev server cross-origin note

`next.config.ts` sets `allowedDevOrigins` for a specific LAN IP. Next.js 16's dev server blocks cross-origin requests to `/_next/*` by default; if the site is accessed from a different network origin during development, add that origin here or dev-mode chunks/HMR will silently fail.
