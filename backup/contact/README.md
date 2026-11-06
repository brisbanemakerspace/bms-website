# Contact form backup (not deployed)

Archived copy of the original Resend-backed contact form. Lives outside `src/`, so Astro never
builds it; it is excluded from `tsc` (tsconfig) and ESLint.

To restore (paths relative to repo root):

| From                  | To                                           |
| :-------------------- | :------------------------------------------- |
| `pages/contact.astro` | `src/pages/contact.astro`                    |
| `Sections/Form.astro` | `src/components/Sections/Contact/Form.astro` |
| `actions/index.ts`    | `src/actions/index.ts`                       |
| `js/*`                | `src/js/`                                    |

Then: restore the `env.schema` block (RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL,
CONTACT_DEMO_MODE as `envField`s, import `envField` from `astro/config`) in `astro.config.mjs`, add
`customPages: [new URL("/contact/", site).href]` to the sitemap options, and put the original
two-column Form + InfoCards grid back (`InfoCards` wrapper was `flex flex-col gap-6`).
