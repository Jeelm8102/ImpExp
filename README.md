# Monsoon & Meridian — Spice & Food Export Website

A premium, cinematic marketing site for a spice/food import-export company,
built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and
**Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. The first `npm install` needs an internet
connection so Next.js can fetch the Google Fonts (Fraunces, Inter, JetBrains
Mono) used by the design system — this happens automatically via
`next/font/google`, no manual font files needed.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Design system

- **Concept** — a bold, cinematic "spice spectrum" look: near-black charcoal
  base, glowing saffron/paprika/cardamom aurora gradients, big kinetic serif
  type, and two dedicated interactive scroll moments (a pinned horizontal
  product showcase and an animated globe/network section), instead of a flat
  scroll of stacked sections.
- **Colors** — `ink #0B0C0E`, `alabaster #F7F3EA`, `saffron #F2A93B`,
  `paprika #E4472F`, `cardamom #4B7A5D`, `harbor #2E5578` (see
  `tailwind.config.ts`).
- **Type** — Fraunces (display serif, used at large kinetic sizes) + Inter
  (body) + JetBrains Mono (labels, coordinates, lot numbers).
- **Signature elements**
  1. `components/Hero.tsx` — mouse-reactive parallax spice motifs (spring
     physics via Framer Motion), animated ambient aurora blobs, and a
     word-by-word kinetic headline reveal on load.
  2. `components/Showcase.tsx` — a pinned section where vertical scroll
     drives horizontal movement through six product cards.
  3. `components/Globe.tsx` — a pinned, slowly rotating globe/graticule
     with shipping arcs that draw themselves port-by-port as the user
     scrolls, with glowing active nodes.

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Home page (assembles all sections)
  globals.css        Design tokens / textures (grain, aurora keyframes, marquee)
  products/page.tsx  Full product catalog page
  contact/page.tsx   Contact / quote request page
components/
  Nav.tsx            Scroll-aware nav + mobile menu
  Hero.tsx           Mouse + scroll parallax hero with kinetic headline
  Marquee.tsx         Infinite scrolling product-name ticker
  Showcase.tsx         Pinned horizontal-scroll product showcase (signature)
  Globe.tsx             Pinned animated globe/trade-network (signature)
  Stats.tsx             Scroll-triggered count-up stats
  Timeline.tsx          Vertical process timeline with scroll-fill rail
  Testimonials.tsx      Auto-scrolling marquee of buyer quotes
  CTA.tsx               Final quote-request band with aurora background
  Footer.tsx             Site footer
  ContactForm.tsx        Client-side contact form (front-end only)
```

## Customizing

- **Copy & company details** — company name, ports, products, stats and
  process steps are plain arrays/JSX at the top of each component; edit
  directly.
- **Colors/fonts** — change tokens once in `tailwind.config.ts` and
  `app/layout.tsx`; they propagate everywhere.
- **Contact form** — `components/ContactForm.tsx` is currently front-end
  only (shows a confirmation state on submit). Wire it to an API route,
  email service, or CRM to make it functional.
- **Reduced motion** — all animation respects `prefers-reduced-motion`
  (see `app/globals.css`).

## Deploying

Works out of the box on Vercel, or any Node host that supports Next.js 14:

```bash
npm run build
npm run start
```
