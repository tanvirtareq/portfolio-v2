# Tanvir Tareq — Portfolio

A dark-themed, animated, SEO-optimized personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

Sections: Hero, About, Experience, Projects, Skills, Competitive Programming, Education, Community & Mentorship, Contact.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, no config file) |
| Animation | [Framer Motion](https://motion.dev) (scroll reveals) + CSS keyframes (blobs, gradients) |
| Icons | [lucide-react](https://lucide.dev) + two hand-rolled brand SVGs (GitHub/LinkedIn — removed from lucide v1) |
| SEO | Next.js Metadata API, JSON-LD, dynamic OG image (`next/og`), `sitemap.ts`, `robots.ts` |
| Hosting | [Vercel](https://vercel.com) (zero-config for Next.js) |

---

## How this project is put together

### 1. Content lives in one typed file

Everything on the page — name, experience, projects, skills, competitive programming stats, education, etc. — comes from a single typed data module:

```
src/data/portfolio.ts
```

Every section component imports `portfolio` from this file and maps over it. **To update the site's content (a new job, a new project, updated stats), edit this file only** — no component code needs to change as long as the shape of the data stays the same.

### 2. One component per section

```
src/components/
  Nav.tsx              sticky nav, scroll-spy, mobile menu
  Hero.tsx             animated intro, typewriter, stat strip
  About.tsx            renders the aboutMe HTML + "at a glance" card
  Experience.tsx       timeline of jobs
  Projects.tsx         project grid
  Skills.tsx           skills grouped by category
  CompetitiveProgramming.tsx   CF/CodeChef/LeetCode cards + contest highlights
  Education.tsx        education cards
  Community.tsx        judging + teaching + technical writing
  Contact.tsx          contact channels with copy-to-clipboard
  Footer.tsx
  Reveal.tsx            shared scroll-reveal wrapper (Framer Motion)
  SectionHeading.tsx    shared eyebrow/title/description header
  ThemeToggle.tsx        dark/light toggle (persisted to localStorage)
  icons/BrandIcons.tsx  GitHub + LinkedIn SVGs
```

`src/app/page.tsx` just imports and stacks these in order — that's the entire page.

### 3. Design system = CSS variables, not a component library

`src/app/globals.css` defines the whole visual language as CSS custom properties (`--bg`, `--accent`, `--surface`, etc.), with a light-mode override block. Reusable visual primitives are plain utility classes:

- `.glass-card` — frosted card with hover lift
- `.gradient-text` / `.gradient-border` — accent gradient treatments
- `.chip` — pill badges (used for tech tags, stats, nav)
- `.grid-bg` — the faint grid backdrop in the hero
- `animate-blob`, `animate-fade-up` — custom Tailwind v4 `@theme` animations

Changing `--accent`, `--accent-2`, `--accent-3` in `:root` (and the `[data-theme="light"]` block) re-themes the entire site.

### 4. SEO is wired at the framework level, not per-page

- `src/app/layout.tsx` — title/description templates, Open Graph, Twitter cards, JSON-LD `Person` schema, robots directives
- `src/app/sitemap.ts` → `/sitemap.xml`
- `src/app/robots.ts` → `/robots.txt`
- `src/app/opengraph-image.tsx` — generates the social preview image on the fly with `next/og`
- `src/lib/site.ts` — the single source of truth for `SITE_URL`, site name, description, and keywords (**update the URL here once you have a real domain** — see the deploy checklist below)

### 5. Local development

```bash
npm install        # first time only
npm run dev         # http://localhost:3000, hot reload
npm run lint         # ESLint
npm run build         # production build (also type-checks)
npm run start          # serve the production build locally
```

To change content: edit `src/data/portfolio.ts`, save, and the dev server hot-reloads.
To change colors/theme: edit the CSS variables at the top of `src/app/globals.css`.

---

## Deploying to Vercel manually (dashboard method)

This assumes you don't have a GitHub repo yet. Vercel deploys from a git repository, so the flow is: push your code to GitHub → import it in Vercel → deploy.

### Step 1 — Push the project to GitHub

The project is already a local git repo (created by `create-next-app`). From the project folder:

```bash
git add -A
git commit -m "Portfolio site"
```

Create a new **empty** repository on GitHub (no README/gitignore/license — you already have those):
1. Go to [github.com/new](https://github.com/new)
2. Name it (e.g. `portfolio-v2`), keep it empty, click **Create repository**
3. GitHub will show you the remote URL — copy it, then run:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

### Step 2 — Import the project in Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest — it auto-grants repo access)
2. Click **Add New… → Project**
3. Find your repo in the list and click **Import**
4. Vercel auto-detects Next.js — leave the defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build` (default)
   - **Output Directory:** (default, leave blank)
   - **Install Command:** `npm install` (default)
5. No environment variables are required for this project
6. Click **Deploy**

Vercel builds and deploys automatically (~1–2 minutes). You'll get a live URL like `https://portfolio-v2-yourname.vercel.app`.

### Step 3 — Point your real domain (optional)

If you own a domain (e.g. `tanvirtareq.dev`):
1. In the Vercel project, go to **Settings → Domains**
2. Add your domain
3. Vercel shows you the DNS records to add (usually an `A` record to `76.76.21.21` or a `CNAME` for a subdomain) — add them at your domain registrar
4. Wait for DNS propagation (usually minutes, sometimes up to a few hours); Vercel issues an SSL certificate automatically

### Step 4 — Update `SITE_URL` to match your real domain

Before (or right after) going live, update the placeholder domain used for canonical URLs, the sitemap, and Open Graph tags:

```ts
// src/lib/site.ts
export const SITE_URL = "https://your-real-domain.com";
```

Commit and push — Vercel redeploys automatically on every push to `main`.

```bash
git add src/lib/site.ts
git commit -m "Update site URL for production"
git push
```

### Step 5 — Verify it's live and correct

- Visit the deployed URL and click through every nav link
- Check `/sitemap.xml` and `/robots.txt` load correctly
- Check `/opengraph-image` renders (or paste the deployed URL into the [OpenGraph.xyz preview tool](https://www.opengraph.xyz))
- Run it through [PageSpeed Insights](https://pagespeed.web.dev) or Lighthouse in Chrome DevTools

---

## Alternative: deploying via the Vercel CLI (no GitHub required)

If you'd rather not set up a GitHub repo, you can deploy straight from your machine:

```bash
npm install -g vercel
vercel login
vercel            # first run: answer setup prompts, deploys a preview
vercel --prod       # promotes to your production URL
```

Note: without a connected git repo, future updates require re-running `vercel --prod` manually each time — no auto-deploy on push.

---

## Redeploying after future edits

- **With GitHub connected:** just `git push` — Vercel builds and deploys automatically, and shows a preview URL for every branch/PR.
- **With the CLI:** re-run `vercel --prod` from the project folder.
