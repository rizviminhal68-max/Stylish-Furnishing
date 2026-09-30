# Stylish Furnishing — website

Marketing website for **Stylish Furnishing**, a sofa repair, upholstery and furniture
furnishing business operating across Gurugram, Haryana.

The site is built to generate phone calls and WhatsApp enquiries. Every page has a
visible phone number, a WhatsApp button, and a working enquiry form.

**Stack:** React 19 · TypeScript · Vite 8 · Tailwind CSS v4 · React Router 7 · Lucide icons.
No CMS, no database, no tracking pixels enabled by default.

---

## Quick start

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:5173
npm run verify     # lint + typecheck + smoke test + production build
```

Individual commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check, then build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | ESLint (React hooks + TypeScript rules) |
| `npm run typecheck` | TypeScript, no emit |
| `npm run smoke` | Server-renders every page and asserts key content (see below) |
| `npm run verify` | All of the above, in order |

### The smoke test

`npm run smoke` is not a placeholder. It builds a small server-render bundle
(`vite.smoke.config.ts` + `scripts/smoke.tsx`) and renders **every route** with
`react-dom/server`. It fails the command if a page crashes, and it asserts that:

- all 9 routes render without throwing
- `?service=` deep links pre-select the matching option in the enquiry dropdown
- the enquiry form never claims to send email

It is a fast regression net for content and routing changes. It is not a
substitute for a real browser check.

---

## Before you launch — required changes

Work through this list top to bottom. Items 1–3 are **blocking**.

### 1. Replace the placeholder domain

The domain `https://www.stylishfurnishing.in` is a **placeholder**. It appears in
four files. Change all four, then rebuild.

| File | What to change |
| --- | --- |
| `src/config/site.ts` | `site.domain` — used for canonical tags, Open Graph URLs and JSON-LD |
| `index.html` | 3 places: `<link rel="canonical">`, `og:url`, `og:image` |
| `public/robots.txt` | 2 places: the header comment and the `Sitemap:` line |
| `public/sitemap.xml` | every `<loc>`, plus the comment at the top |

```bash
# quick way to confirm nothing was missed
grep -rn "stylishfurnishing.in" src index.html public
```

### 2. Replace the placeholder photography

Every image in `public/images/` is **stock photography from Pexels**, used to show
what finished work looks like. It is not Stylish Furnishing's work. The gallery and
home page both carry a visible notice saying so, but that is not good enough for a
live business site — clients may reasonably believe those are the company's own jobs.

- Files: `public/images/*.webp`, `public/images/gallery/*.webp`
- Catalogue: `src/data/gallery.ts` (each entry has `src`, `alt`, `caption`, `category`)
- Also replace `public/images/og-image.jpg` (the social share image, 1200×630)
- Optimise new photos: export **WebP**, longest edge ~1600px for gallery images and
  ~800px for card thumbnails, aim under 200KB each
- Keep the same filenames and nothing else needs to change

**Suggested launch priority:** the gallery is the single most persuasive page for this
trade. If real job photos are not ready, consider hiding the gallery from the main
navigation rather than shipping stock images.

### 3. Decide how the enquiry form should deliver

There is **no backend and no email service connected to this project.** The form is
fully wired up and validated, but submitting it opens WhatsApp with the details
pre-filled, and the visitor presses send. The form says so on screen.

This is a deliberate, honest default for a small business — it works with zero
infrastructure and gets the enquiry into the WhatsApp inbox the business already
checks. If you want real email delivery instead, see
`src/components/contact/EnquiryForm.tsx`. The file has a documented
`sendEnquiry()` stub: send the payload to your endpoint, `fetch` it, and swap
`window.open(...)` for that call. Nothing else in the form needs to change.

### 4. Optional, if the details are confirmed

These are deliberately absent because they were never verified. Add them only with
the client's confirmed facts — invented details can hurt local SEO and trust.

- [ ] **Street address** — would strengthen `LocalBusiness` structured data. Add to
      `site.location` in `src/config/site.ts` and to `localBusinessSchema()` in
      `src/lib/structuredData.ts`
- [ ] **Opening hours** — the site currently says hours are agreed by appointment
- [ ] **Real reviews** — no review markup is emitted, because none were supplied
- [ ] **Years in business / team size** — no invented statistics appear anywhere
- [ ] **Service prices** — the pricing section explains what affects a quote instead
      of publishing numbers that may be wrong

### 5. Analytics (optional)

No analytics script is loaded. Every CTA already carries `data-event` and
`data-event-label` attributes and pushes them to `window.dataLayer`, so wiring up a
tag is a two-step job:

1. `index.html` contains a commented-out Google Tag Manager snippet
2. Add your real GTM/GA4 ID to `src/lib/analytics.ts`

Events you get for free: `phone_click`, `whatsapp_click`, `nav_click`,
`service_enquiry_click`, `contact_form_submit`, `guide_read`, `gallery_open` and
`gallery_filter` — each with a `data-event-label` describing which button it was.

---

## Deployment

Build with `npm run build`; the output in `dist/` is plain static files.

**The one thing that will break the site if you forget it:** the host must serve
`index.html` for every unknown path, otherwise refreshing `/contact` gives a 404.
Config files for the common hosts are already included in `public/` and are copied
into `dist/` automatically.

| Host | Config | Notes |
| --- | --- | --- |
| Netlify / Cloudflare Pages | `public/_redirects` | Works as-is |
| Apache, Hostinger, cPanel, GoDaddy | `public/.htaccess` | Also forces HTTPS, strips `www`, sets cache headers |
| Vercel | — | Needs `vercel.json` or a build output override; add rewrites to `index.html` |
| Nginx | — | Add `try_files $uri $uri/ /index.html;` in the server block |

Then:

1. Point the domain at the host
2. Confirm HTTPS works and `www` redirects to the apex (or vice versa) — pick one
3. Verify `/robots.txt` and `/sitemap.xml` are reachable
4. Submit `https://yourdomain/sitemap.xml` in Google Search Console
5. Set up a Google Business Profile — for a local service business this drives more
   enquiries than the website does

---

## Editing content

Almost everything a non-developer would want to change lives in four data files.

| File | Contents |
| --- | --- |
| `src/data/services.ts` | The 10 services: names, descriptions, what's included, and the enquiry dropdown options |
| `src/data/guides.ts` | The 6 SEO articles, written as structured blocks |
| `src/data/gallery.ts` | Gallery images, captions and category filters |
| `src/data/serviceAreas.ts` | Areas served, used on the home page, services page, footer and structured data |
| `src/data/faq.ts` | FAQ entries; the accordion and `FAQPage` schema both read from here |
| `src/config/site.ts` | Business name, phone, WhatsApp, domain, navigation |

The enquiry dropdown (`serviceOptions` in `src/data/services.ts`) is a hand-written
array — if you add a service, add the dropdown entry too, or the option will be
missing from the form.

Adding a guide: append an entry to `src/data/guides.ts`, then add its slug to
`public/sitemap.xml`. The route itself is `/guides/:slug` and needs no code change.

---

## Project structure

```
public/
  fonts/            self-hosted variable fonts (no Google Fonts request)
  images/           photography — REPLACE BEFORE LAUNCH
  favicon.svg
  robots.txt        domain is a placeholder
  sitemap.xml       domain is a placeholder
  _redirects        SPA fallback for Netlify/Cloudflare
  .htaccess         SPA fallback + caching + security headers for Apache

src/
  components/
    ui/             design system: ButtonLink, Container, SmartImage, Reveal, Lightbox…
    layout/         SiteHeader, SiteFooter, RootLayout, ScrollToTop
    contact/        EnquiryForm, FloatingContact (mobile bar + desktop buttons)
    home/           homepage sections
    services/  gallery/  shared/  page-specific pieces
  config/site.ts    single source of truth for business details
  data/             all editable content
  lib/              seo, analytics, images, structuredData, utils
  pages/            one file per route
  App.tsx           routes (all pages lazy-loaded)
  index.css         Tailwind v4 theme, typography, animations
scripts/smoke.tsx   the route smoke test
```

### Key technical decisions

- **Tailwind v4 via `@tailwindcss/vite`** — no `tailwind.config.js`; the theme lives
  in `@theme` inside `src/index.css`
- **Self-hosted variable fonts** — Manrope for UI, Playfair Display for headings. No
  third-party font request, so no GDPR/privacy issue and no layout shift
- **Lazy routes** — every page is a separate chunk, so the first load is the home page
  plus React (~113KB gzipped total)
- **`<img>` with explicit `width`/`height` and lazy loading** (`src/components/ui/SmartImage.tsx`)
  — deliberately not `next/image`; there is no framework here, and the responsive
  `srcset` is generated by `src/lib/images.ts`
- **Reveal on scroll** (`Reveal.tsx`) — content starts visible when the visitor has
  asked for reduced motion, so nothing is ever hidden from someone who doesn't want
  animation
- **Analytics by delegation** — no third-party script until you add an ID
- **Inline SVG WhatsApp glyph** in the header, Lucide icons elsewhere — no brand asset
  pack needed

### Accessibility

Skip link, one `<h1>` per page, visible focus rings on every interactive element,
`aria-label`s on icon-only buttons, keyboard-dismissible lightbox, `Escape` closes the
mobile menu, and `prefers-reduced-motion` respected globally. Colour contrast meets
WCAG AA on the warm cream/charcoal palette.

### SEO caveat — please read

This is a **client-rendered single-page app**. `index.html` ships with correct
static title/description/canonical/OG tags for the home page, and every other route
updates `document.title`, the meta tags and the JSON-LD **after JavaScript runs**.

That is fine for Google, which renders JavaScript. It is **not** fine for:

- **WhatsApp, Facebook, Slack and X link previews.** These scrapers do not run
  JavaScript, so a shared `/contact` or `/services` link will show the home page's
  title and description — or none at all.
- Some chat and in-app browsers, which may briefly show a blank page.

If link previews on WhatsApp matter — and for a business whose main channel *is*
WhatsApp, they probably do — the fix is to prerender each route. The cheapest route
is static prerendering of the seven top-level pages at build time. Until that is done,
share links to the **home page URL**, which has correct static tags.

Structured data emitted: `HomeAndConstructionBusiness` (as `LocalBusiness`),
`WebSite`, `BreadcrumbList`, `FAQPage`, `ItemList` for service areas,
`OfferCatalog` / `Offer` / `Service`, `ContactPoint`, and `Article` for guides.
All built from confirmed facts only — see `src/lib/structuredData.ts`.

---

## Browser support

Modern evergreen browsers, and iOS Safari 15+. Uses `:focus-visible`,
`dvh` units, `IntersectionObserver` and CSS nesting (via Lightning CSS).
