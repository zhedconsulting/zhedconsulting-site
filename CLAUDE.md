# CLAUDE.md — Zhed Consulting Site

## Brand
- **Company:** Zhed Consulting
- **Founder:** Zhed — Cebu, Philippines → America. D2D sales → phone sales → marketing systems.
- **Differentiator:** "I'm not a marketer who learned sales. I'm a closer who learned marketing."
- **Tagline:** More booked appointments. More money.

## ICP
Home service contractors doing $30K–$500K/mo in revenue. Primary verticals:
- Epoxy flooring
- HVAC
- Plumbing
- Electrical
- Spray foam insulation
- Mold remediation
- Foundation repair
- Concrete coatings
- Roofing

Geo: U.S., starting Metro Detroit. Pain: inconsistent leads, paying agencies that don't deliver, calendars that stay empty.

## Core Offer
**The Booked Solid System** — Meta Ads + Closebot (AI lead qualifier) + GHL pipeline that turns ad spend into qualified booked appointments on the contractor's calendar.

**Terminology:** The deliverable is **booked appointments**, not "booked jobs." The contractor closes the job. Always say "booked appointments."

Flow: Meta Ads → Closebot AI Qualifier → Booked Appointment on Calendar

## Pricing Tiers
| Tier | Price |
|------|-------|
| Starter | $2,500/mo |
| Growth (featured) | $5,000/mo |
| Elite | $10,000/mo |

Management fee is separate from ad spend. Site emphasizes the $5K and $10K tiers.

## Voice & Tone
- Direct, confident, contractor-readable. No agency jargon.
- Harvey Specter / Chris Gardner energy — earned confidence, not LinkedIn hype.
- Short sentences. Operator language. Write like you're talking to a 45-year-old epoxy guy in Macomb County who's tired of being sold to.
- Core frame: "More booked appointments, more money." Everything ladders back to that.
- Never use emoji in site copy.

## Tech Stack
- **This marketing site:** Single `index.html`, Tailwind CSS via CDN, vanilla JavaScript only. Static. Deployed on Vercel.
- **Future apps (dashboards, SaaS layer, client portal):** Next.js + Tailwind. Do NOT migrate this marketing site to Next.js — it stays static HTML.
- GHL form embedded via iframe on the CTA section (conversion plumbing handled separately).
- Meta Pixel and GHL tracking script in `<head>` (conversion plumbing handled separately).

## Design System
- **Background:** `#0c0c0e` (base), `#141416` (elevated surfaces)
- **Text:** `#f2f2f3` (primary), `#9b9ba3` (muted)
- **Accent:** `#c9a84c` (gold), `#dfc06a` (bright), `rgba(201,168,76,0.14)` (dim), `rgba(201,168,76,0.32)` (glow)
- **Fonts:** Instrument Serif (display/headings) + DM Sans (body)
- **Aesthetic:** Dark, matte, slightly industrial. Premium without being decorative.

## Dev Workflow
- **Local server:** `node serve.mjs` → `http://localhost:3000`
- **Screenshot (full page):** `node screenshot.mjs http://localhost:3000 [label]` — saves to `./temporary screenshots/screenshot-N-label.png`
- **Screenshot (custom viewport):** `node shot.mjs http://localhost:3000 [width] [label]`
- Always serve on localhost. Never screenshot a `file:///` URL.
- Start server in background before screenshotting.

## Brand Assets
- Check `brand_assets/` before designing. If a logo or color guide exists there, use it.

## Anti-Generic Guardrails
- Never use default Tailwind palette (indigo-500, blue-600, etc.). Use the gold accent system above.
- Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- Never use the same font for headings and body. Instrument Serif + DM Sans pairing is set.
- Never use `transition-all`. Animate only `transform` and `opacity`.
- Every clickable element needs hover, focus-visible, and active states.
- Surfaces use a layering system: base (`#0c0c0e`) → elevated (`#141416`) → floating (cards/overlays).
- Gradients: layer multiple radial gradients. Add SVG noise texture for depth.
- Heading tracking: `-0.03em`. Body line-height: `1.7`.

## Hard Rules
- Do not add sections not in the site plan without asking.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color.
- Do not stop after one screenshot pass — do at least 2 comparison rounds.
- "Booked appointments" always. Never "booked jobs" in site copy or code comments.
