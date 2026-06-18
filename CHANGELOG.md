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

## 2026-06-17 — Rebrand + Pricing Cleanup

### Brand
- [x] Rebranded to **The Lead Engine** — name, copy, and positioning updated throughout site
- [x] Broadened ICP from home service contractors to all service businesses

### Pricing
- [x] Removed fixed setup fee price from all pricing tiers — fee language kept but dollar amount pulled

---

## 2026-06-11 — Calendar → GHL Contact Form Swap + Modal Polish

### CTA / Book Section
- [x] Replaced the inline GHL calendar widget with a **GHL contact form embed** — contact form is now the primary conversion point
- [x] Fixed mobile modal scroll — restored flex layout on iframe wrapper so content scrolls correctly inside modal
- [x] Modal: fixed viewport-aware height, no edge touching on any screen size
- [x] Extensive desktop modal sizing passes — landed on final dimensions that trigger GHL's side-by-side calendar + time slot layout at 1080px wide
- [x] Fixed modal iframe height conflict — removed inline flex style that was overriding the stretch
- [x] Mobile: full-screen calendar modal (near-full-screen popup, no cropping)
- [x] Calendar iframe preloaded on page load — all booking buttons wired correctly
- [x] Mobile popup + desktop section shimmer pattern for calendar booking area

---

## 2026-06-10 — Day 1 Build (Post-Initial Commit)

### Performance & SEO
- [x] Replaced Tailwind CDN with compiled `tailwind.min.css` — eliminates runtime JIT overhead
- [x] Images converted to WebP
- [x] Fonts loaded async — no render-blocking
- [x] Schema markup added (`LocalBusiness` + `Service` JSON-LD)
- [x] Canonical tag added to `<head>`
- [x] `sitemap.xml` and `robots.txt` added to project root

### Design / Animation
- [x] Gold beam background animation added to Hero and CTA sections
- [x] Flip card system — Problem and System (How It Works) sections merged into interactive flip cards
- [x] Flip card hint text changed to gold so it reads as a clickable affordance
- [x] Gold glow added to step/pain numerals and proof metrics for emphasis

### New Sections
- [x] **ROI Calculator** — gold sliders, live output showing projected cost per lead and appointment volume
- [x] **Free Lead Audit** CTA block added below calculator

### About Section
- [x] Favicon added (`/brand_assets/favicon`)
- [x] OG image added for social link previews
- [x] About section brand lockup with founder photo slot
- [x] Canvas performance fix — removed GPU-intensive layer
- [x] Founder full name added to About section

### Proof / Case Study
- [x] Case study updated with corrected data and expanded metrics
- [x] Founder photo swapped; calculator layout widened

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
- [x] Mock booking form replaced with live GHL contact form embed
- [x] GHL calendar booking widget integrated (modal on mobile, inline on desktop)
- [ ] Test GHL form submission end-to-end in production

### Footer

- [x] Logo + tagline
- [x] Nav links
- [x] Copyright + location

---

## Outstanding / Can Work On Next

### High Priority

- [x] **GHL contact form embed** — live, replacing mock form
- [ ] **Custom domain** — point `zhedconsulting.com` to Vercel (Vercel dashboard → Domains)
- [ ] Test GHL form submission end-to-end in production

### Content

- [ ] Add 2 more client logos/names to trust strip
- [ ] Add 2nd case study when next client result is ready
- [ ] Add founder photo to About section (slot is built, photo needed)
- [ ] Review and update FAQ based on real objections heard on calls

### Design / Features

- [x] OG image added for social link previews
- [x] Favicon added
- [ ] Add stagger animation to pipeline lead cards after tilt completes
- [ ] Add active nav highlight on scroll
- [ ] Mobile layout QA pass — spot-check all sections on 375px viewport

### Analytics / Tracking

- [ ] Add Meta Pixel to `<head>` (conversion tracking)
- [ ] Add GHL tracking script to `<head>`
- [ ] Set up Vercel Analytics (free, zero config)

### Brand (Post-Rebrand Cleanup)

- [ ] Confirm all copy reflects The Lead Engine rebrand — no "Zhed Consulting" references visible on site
- [ ] Update domain strategy if rebrand changes the target domain

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

