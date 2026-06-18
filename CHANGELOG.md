# Changelog — Zhed Consulting Site

All changes to the marketing site are documented here.
Format: `[Date] — What changed — Status`

---

## 2026-06-10 — Initial Build + Launch

### Site Infrastructure

- [x] Single-file static site (`index.html`) — Tailwind CDN + vanilla JS
- [x] Local dev server (`node serve.mjs`) on `http://localhost:3000`
- [x] Screenshot tooling (`screenshot.mjs`, `shot.mjs`) for visual QA
- [x] Git repository initialized — `zhedconsulting/zhedconsulting-site`
- [x] Deployed to Vercel — auto-deploys on every push to `main`
- [x] Font smoothing fix — `-webkit-font-smoothing: antialiased` added to body

### Design System

- [x] Color palette — `#0c0c0e` base, `#141416` elevated, `#c9a84c` gold accent
- [x] Typography — Instrument Serif (headings) + DM Sans (body)
- [x] Noise texture overlay via SVG filter for depth
- [x] Layered radial gradient backgrounds per section
- [x] Button states — hover, focus-visible, active on all CTAs

---

## Sections — Current State

### Nav

- [x] Fixed top nav with scroll blur effect
- [x] Mobile hamburger menu
- [x] "Book a Strategy Call" CTA button
- [ ] Add active state highlighting for current section on scroll

### Hero

- [x] Headline: "We Don't Send You Leads. We Send You Booked Appointments."
- [x] Subheadline + two CTA buttons (Book a Call / How It Works)
- [x] Gold accent on "Booked Appointments"
- [ ] Add a short trust stat line below CTAs (e.g. "445 leads generated for Metro Detroit contractors")

### Trust Strip (logo bar)

- [x] "Trusted by contractors in" label
- [x] Slot 1 — Niko — Metro Detroit Epoxy (live)
- [ ] Slot 2 — needs client name/logo
- [ ] Slot 3 — needs client name/logo

### Problem Section

- [x] Headline: "You don't have a lead problem. You have a booked-appointment problem."
- [x] 3 pain cards — Form fills, Agencies, Idle crews
- [ ] Optional: add a 4th pain card if new pain points emerge

### System Section (How It Works)

- [x] Headline: "Three steps. One outcome."
- [x] Step 1 — Meta Ads
- [x] Step 2 — Closebot AI Qualifier
- [x] Step 3 — Booked Appointment
- [x] Flow label at bottom: "Meta Ads → Closebot AI → Booked Appointment"

### Pipeline Demo (Scroll Tilt)

- [x] 3D scroll tilt animation — card tilts in on scroll, flattens as it enters view
- [x] Mock pipeline dashboard — New Leads / Qualifying / Booked columns
- [x] Real Metro Detroit trades and locations in mock data
- [ ] Optional: animate individual lead cards staggering in after tilt completes

### Proof / Case Study

- [x] Client: Niko — Epoxy Flooring, Metro Detroit, MI
- [x] Metrics: $1,120 ad spend / 445 leads / $2.51 cost per lead
- [x] Testimonial: "We're killing it." — Niko
- [ ] Add 2nd case study card when next client result is ready
- [ ] Add revenue closed number when available from Niko

### About / Origin

- [x] Pull quote: "I'm not a marketer who learned sales. I'm a closer who learned marketing."
- [x] Founder story — Cebu → D2D → phone sales → marketing systems
- [ ] Add founder photo when available

### Pricing

- [x] Starter — $2,500/mo
- [x] Growth — $5,000/mo (featured/highlighted)
- [x] Elite — $10,000/mo
- [ ] Confirm Elite tier deliverables — one additional item may be missing
- [ ] Consider adding a "What's included in all plans" row at the bottom

### FAQ

- [x] 6 accordion questions covering common objections
- [ ] Review FAQ questions — add/remove based on real sales call objections

### CTA / Book Section

- [x] Headline: "Ready to fill your calendar?"
- [x] Mock booking form — Name, Phone, Trade, Revenue range
- [ ] REPLACE mock form with real GHL iframe embed (blocking conversion)
- [ ] Test form submission end-to-end after GHL embed is live

### Footer

- [x] Logo + tagline
- [x] Nav links
- [x] Copyright + location

---

## Outstanding / Can Work On Next

### High Priority

- [ ] **GHL form embed** — swap mock form with real iframe. This is the only thing blocking conversions.
- [ ] **Custom domain** — point `zhedconsulting.com` to Vercel (Vercel dashboard → Domains)

### Content

- [ ] Add 2 more client logos/names to trust strip
- [ ] Add 2nd case study when next client result is ready
- [ ] Add founder photo to About section
- [ ] Review and update FAQ based on real objections heard on calls

### Design / Features

- [ ] Add stagger animation to pipeline lead cards after tilt completes
- [ ] Add active nav highlight on scroll
- [ ] Add OG image (social preview card) for link sharing
- [ ] Add favicon
- [ ] Mobile layout QA pass — spot-check all sections on 375px viewport

### Analytics / Tracking

- [ ] Add Meta Pixel to `<head>` (conversion tracking)
- [ ] Add GHL tracking script to `<head>`
- [ ] Set up Vercel Analytics (free, zero config)

---

## How to Deploy Changes

```bash
# Make changes to index.html, then:
cd "/Users/zhedrickjohnson/Documents/ zhedconsulting-site"
git add index.html
git commit -m "description of what changed"
git push origin main
# Vercel auto-deploys in ~30 seconds
```

