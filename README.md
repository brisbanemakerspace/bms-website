# BMS Website

The source code of the main BMS website hosted at [brisbanemaker.space](https://brisbanemaker.space). This is based on a customised template called 8-BitQuest by DomiDex.

It is built on **Astro 7 + Tailwind CSS v4 + TypeScript**, with a CSS-first token architecture, typed config-driven content, and an in-house UI, motion, icon and SEO stack.

## Quick start

```sh
pnpm install
pnpm dev          # http://localhost:4321
```

## Commands

| Command        | Action                                                  |
| :------------- | :------------------------------------------------------ |
| `pnpm install` | Install dependencies                                    |
| `pnpm dev`     | Dev server at `localhost:4321`                          |
| `pnpm build`   | Production build to `dist/` (static pages + the Worker) |
| `pnpm preview` | `wrangler dev` — run the production Worker locally      |
| `pnpm deploy`  | `astro build && wrangler deploy` to Cloudflare          |
| `pnpm check`   | Type-check `.astro` / `.ts` (`astro check`)             |
| `pnpm lint`    | ESLint                                                  |
| `pnpm format`  | `eslint --fix`, then Prettier                           |
| `pnpm test`    | Every `*.test.ts` self-check under `src/`               |

## Routes

| Route                  | Source                               | Built from                             |
| :--------------------- | :----------------------------------- | :------------------------------------- |
| `/`                    | `pages/index.astro`                  | `Sections/Home/*`                      |
| `/about/`              | `pages/about.astro`                  | `Sections/About/*`                     |
| `/blog/`               | `pages/blog/index.astro`             | `Sections/Blog/*` (listing)            |
| `/blog/<slug>/`        | `pages/blog/[slug].astro`            | `Sections/Blog/BlogArticle` (per post) |
| `/projects/`           | `pages/projects/index.astro`         | `Sections/Project/*` (listing)         |
| `/projects/<slug>/`    | `pages/projects/[slug].astro`        | `Sections/Project/ProjectArticle`      |
| `/contact/`            | `pages/contact.astro` (**SSR**)      | `Sections/Contact/*` + a Resend action |
| `/privacy/`, `/terms/` | `pages/privacy.astro`, `terms.astro` | `config/legalData.json.ts`             |
| `/404`                 | `pages/404.astro`                    | `Sections/NotFound/*`                  |
| `/examples/ui`         | `pages/examples/[catalog].astro`     | `Sections/UiCatalog/*` (dev-only)      |

Every route prerenders to static HTML **except `/contact/`**, which sets `export const prerender =
false` so it can take the form POST and re-render with the result. `/examples/ui` is a `noindex`
dev-only catalog: it is excluded from the sitemap and emits no HTML in a production build.

Generated endpoints: `/robots.txt`, `/llms.txt`, `/rss.xml`, `/sitemap-index.xml`. The first three
are hand-owned dynamic routes whose absolute URLs derive from `site`, so setting that once fixes them
together.

## Content

Collections are defined in `src/content.config.ts` (Zod), so bad frontmatter fails the build with the
entry named. Entries live one folder deep and the folder name is the slug.

| Collection | Location             | Ships with     | Holds                                                                                                                                                                                         |
| :--------- | :------------------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blog`     | `src/data/blog/`     | **6 posts**    | `title`, `description`, `authors[]` (≥1), `pubDate`, `heroImage(+alt)`, `category`, `tags`, optional `updatedDate`, `draft`                                                                   |
| `projects` | `src/data/projects/` | **6 projects** | `title`, `description`, `tagline`, `status`, `moduleId`, `order`, `thumbnail(+alt)`, `tech[]`, `specs[]`, `features[]`, `archCaption`, `challenge`, `solution`, optional `cardTitle`, `draft` |
| `authors`  | `src/data/authors/`  | `admin`        | `name`, `authorLink`, optional `avatar` — referenced by posts as the byline                                                                                                                   |

The samples are retro-flavoured placeholders; replace them with your own. A blog post's body is
free-form MDX (rendered through `.blog-prose`); a project's overview is MDX while its spec/feature
data is structured frontmatter.

## Configuration

Site-wide facts live typed in `src/config/`. (One-off section copy — the FAQ, the tech-stack list,
the gear table — deliberately lives as a typed literal at the top of its Section component instead:
edit the section to edit the copy. The rule: used on more than one page ⇒ it belongs in config.)

- **`siteData.json.ts`** — brand name, title, description, the author block, `sameAs` (your social
  profile URLs) and the default social image. `sameAs` does double duty: it disambiguates the JSON-LD
  `Organization` **and** it is where every social link on the site resolves from.
- **`socialData.json.ts`** — one definition per social platform (label, pixel glyph, and how its URL
  resolves out of `sameAs`), shared by the footer row, the home contact chips and the contact info
  cards. Add a platform here, then reference it from whichever section should show it.
- **`siteSettings.json.ts`** — `siteLang` / `siteLocale`, plus the feature switches
  `useViewTransitions` and `useAnimations`.
- **`legalData.json.ts`** — the terms and privacy copy, section by section.
- **`portfolioData.json.ts`** — the profile identity, biography, experience/stat values, home
  intro, and contact-facing organisation copy: the facts a buyer is expected to customise, in one
  typed place.

**Theme tokens** are CSS-first, in three layers (see `src/styles/tailwind-theme.css` +
`global.css`): palette aliases (`--color-primary-*`, `--color-base-*`) feed semantic runtime vars
(`--primary`, `--foreground`, `--outline`), which feed the utilities. Markup only ever uses
`bg-primary` / `text-foreground` / `text-base-700`, so a rebrand is one edit to the alias block and
both themes follow. The signature look — a black 4px border plus a hard offset `shadow-pixel` — is
the `ui/pixel-panel` primitive; the shadow colour is itself a theme-aware token (`--pixel-shadow`).

## Structure

```text
src/
├── components/
│   ├── Sections/<Page>/   layout-free page sections (Global/ for cross-page chrome: Header, Footer)
│   ├── Cards/             content-aware card compositions (built on ui/pixel-panel)
│   ├── ui/<name>/         the primitive library (see its README for the contract)
│   └── svg/icons/         the <Icon> system
├── actions/               the contact server action (Resend)
├── config/                typed site config — the source of truth, never literals in components
├── data/<collection>/     content collections, Zod-validated
├── js/                    TypeScript utilities (schema, contact, readingTime, nav…) + their *.test.ts
├── layouts/               BaseLayout + BaseHead (all meta/SEO tags live here)
├── pages/                 file routes — thin shells owning BaseLayout + SEO
└── styles/                global.css entry, tailwind-theme.css tokens, motion/ catalog
```

Pages are thin route shells that own `BaseLayout` + SEO and compose **Sections**; Sections build on
**ui** primitives and **Cards**. The three contracts are `Sections/README.md`, `Cards/README.md` and
`ui/README.md`.

## Deployment

The site deploys to **Cloudflare Workers**: the build is static **except `/contact/`**, so
`@astrojs/cloudflare` is mounted and `astro build` emits the static pages plus one Worker
(`dist/_worker.js`) that renders the on-demand route. `wrangler.jsonc` is the Worker config — its
`main` stays the adapter's entrypoint, and the adapter injects the asset wiring and provisions its
session KV binding on first deploy.

```sh
SITE_URL=https://your.domain pnpm build   # bakes canonical/OG/sitemap URLs at build time
pnpm deploy                               # astro build && wrangler deploy (wrangler login once)
pnpm preview                              # wrangler dev — the production Worker, locally
```

The contact keys live in the Worker, not the build: set them once with
`pnpm wrangler secret put RESEND_API_KEY` / `CONTACT_TO_EMAIL` (and `CONTACT_FROM_EMAIL` for a
verified domain). Locally, `.env` keeps working for `pnpm dev`.

Required environment variables at **build** time: **`SITE_URL`** (your production domain — feeds
canonical, OG, JSON-LD, sitemap, `robots.txt`, `llms.txt`; a production deploy throws on the
`example.com` placeholder — set `DEPLOY_ENV=production` in your CI build env to arm that guard).
See `.env.example`.

## Before you deploy

1. **`SITE_URL`** — your production domain, in the host's environment variables. A **production**
   deploy fails if it is missing or still `example.com`; local builds and deploy previews are
   unaffected.
2. ~~**Contact keys** — `RESEND_API_KEY` and `CONTACT_TO_EMAIL` (and, to send beyond your own inbox, a
   verified domain + `CONTACT_FROM_EMAIL`).~~
3. **`public/og.jpg`** — replace the placeholder with a real 1200×630 social image.
4. **`src/config/*`** — `siteData`, `portfolioData`, and the `legalData` terms/privacy copy (the last
   is placeholder text, not legal advice — have it reviewed). In `siteData`, **fill `sameAs`**: until
   you do, the footer icons and contact links point at bare platform home pages (`github.com`,
   `linkedin.com`, `discord.gg`) rather than at your profiles. Set `author.email` and, if you use it,
   `author.twitter` (empty by default, which omits `twitter:creator`).
5. **Favicons** — `public/favicon.svg` and `public/favicon.ico`.
6. **Delete the dev catalog** — `src/components/Sections/UiCatalog/` and `src/pages/examples/`, once
   you have finished picking primitives. It builds no pages in production, but Tailwind still scans its
   markup, so its demo classes sit in the stylesheet every page loads; removing it trims the shared CSS
   by roughly a quarter (re-measured on the stock catalog: 84,211 B → 64,246 B, ~11.7 KB gzip) and
   drops 75 unused `@keyframes` (90 → 15).
7. **`.claude/`** — harness settings plus two optional skills for working on the repo with Claude
   Code. Keep it if you use Claude; deleting it changes nothing at runtime.
