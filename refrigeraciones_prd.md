# ColdPro Web Platform — Product Requirements Document

**Version:** 1.0  
**Status:** Draft for Review  
**Date:** May 2026  
**Audience:** Development, Design, Marketing

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Competitive Analysis](#2-competitive-analysis)
3. [Pages & UX Architecture](#3-pages--ux-architecture)
4. [SEO Strategy](#4-seo-strategy)
5. [Accessibility Requirements](#5-accessibility-requirements)
6. [Technical Specifications](#6-technical-specifications)
7. [Delivery Roadmap](#7-delivery-roadmap)

---

## 1. Product Overview

A responsive, SEO-optimized, and fully accessible commercial website targeting B2B and B2C clients who need cold storage installations, refrigerated container rental or purchase, and custom horizontal display freezers for product showcasing.

### 1.1 Business Goals

| Goal | Description |
|------|-------------|
| Generate qualified leads | Convert organic and paid traffic into quote requests and direct calls within 3 seconds of landing |
| Establish market authority | Rank page 1 for key cold-storage search terms; position the brand as the regional expert |
| Serve all three verticals | Clearly communicate three distinct service lines without creating a confusing, cluttered homepage |
| Reduce sales friction | Online quote tool, spec sheets, and FAQ eliminate repetitive pre-sales calls for the team |

### 1.2 Target Audience

**Segment A — Food & Pharma Businesses**  
Supermarkets, restaurants, distributors, and labs needing cold rooms or extra container capacity.

**Segment B — Retailers & Event Managers**  
Convenience stores, ice cream brands, and caterers needing horizontal display freezers or short-term rentals.

**Segment C — Industrial & Logistics**  
Warehouses and cold-chain operators needing permanent cold storage installation projects.

### 1.3 Core Service Lines

**01 — Cold Storage Installation**  
Design and construction of walk-in coolers, freezer rooms, industrial cold chambers, and modular cold storage solutions. Custom sizing, insulation, and refrigeration systems included.

**02 — Refrigerated Container Rental & Sale**  
Reefer containers in 10ft, 20ft, and 40ft sizes. Short-term, long-term, and seasonal rental plans. Purchase options for permanent or semi-permanent deployment.

**03 — Custom Horizontal Display Freezers**  
Manufacture of chest display freezers with glass sliding lids, LED lighting, and branded wrap options for product showcasing in retail and point-of-sale environments.

> **Key differentiator to communicate:** The website must make clear that the company offers all three services under one roof — saving clients the complexity of working with multiple vendors. This is the primary competitive advantage to highlight above the fold.

---

## 2. Competitive Analysis

Research across leading cold storage service and display refrigeration websites reveals consistent patterns — and clear gaps your site can exploit.

### 2.1 Key Competitors Reviewed

#### ZGROUP USA — zgroup-usa.com

- **Strengths:** Strong technical specs, wide size range (10–53ft), ZTRACK real-time monitoring unique offer
- **Weaknesses:** No display freezer line; heavy text, slow page; limited local/regional SEO
- **Gap we exploit:** Add display freezer vertical; faster, cleaner UX; local SEO dominance

#### DRYBOX / coldstoragecontainers.com

- **Strengths:** Clear rental/sale split; strong NW US footprint; good FAQ section
- **Weaknesses:** Outdated visual design; no installation service; no display equipment
- **Gap we exploit:** Modern design + full-service offering beats their partial solution

#### Mobile Box — mobileboxes.com

- **Strengths:** Regional presence (LA, TX, OK, FL); emergency rental messaging; clear 20/40ft options
- **Weaknesses:** Very basic site; no on-page SEO; no quote tool; no display freezers
- **Gap we exploit:** Online quote tool + richer content beats them on conversion and ranking

#### ArcticStore — arcticstore.com

- **Strengths:** 40-country footprint; transparent pricing message; good product imagery
- **Weaknesses:** No installation; no display equipment; generic global messaging, poor local relevance
- **Gap we exploit:** Local/regional trust signals + full service beats global generic brand

#### Ceviant — ceviant.com

- **Strengths:** Strong horizontal & vertical display freezer catalog; CE/ETL certifications prominent
- **Weaknesses:** Manufacturer only — no rental or installation service; B2B wholesale focus only
- **Gap we exploit:** Combine display equipment with rental & install = full-solution brand

### 2.2 Market-Wide Weaknesses to Exploit

- **No competitor combines all three service lines.** Installation + containers + display equipment always appear as separate businesses. Our site owns this positioning.
- **Poor mobile UX is universal.** Most competitors have desktop-centric layouts, slow load times, and no tap-friendly quote CTAs.
- **Online quote tools are rare.** Nearly all competitors rely on phone/email only — a huge conversion barrier for today's buyers.
- **Accessibility is almost universally ignored.** WCAG 2.1 compliance would immediately distinguish us from all major competitors.
- **Local SEO is underdeveloped.** Competitors rely on branded traffic. Local keyword optimization and Google Business Profile integration represent a massive ranking opportunity.

---

## 3. Pages & UX Architecture

### 3.1 Site Map

#### `/` — Homepage
Hero section with full-service positioning statement. Three service cards with CTAs. Trust bar (certifications, years in operation, client count). Testimonials. Quote CTA strip. Footer.  
*Schema: Organization + WebSite*  
*SEO target: branded + generic queries*

#### `/instalaciones-frigorificas` — Cold Storage Installation
Service detail: types of cold rooms, process timeline, industries served, certifications, photo gallery, FAQ, quote form.  
*Schema: Service + FAQPage*  
*SEO target: "instalación cámaras frigoríficas"*

#### `/contenedores-refrigerados` — Containers (Rental & Sale)
Split into two sub-sections: Rental (with pricing tiers, sizes 10/20/40ft, term options) and Sale (specs, condition grades). Includes online quote/availability form.  
*Schema: Service + Product*  
*SEO target: "contenedor refrigerado alquiler"*

#### `/exhibidores-horizontales` — Horizontal Display Freezers
Product catalog with model cards (capacity, temperature range, lid type, certifications). Custom branding/wrap option highlighted. Use-case visuals: ice cream, frozen food, beverages.  
*Schema: Product + ItemList*  
*SEO target: "exhibidores horizontales congelados"*

#### `/casos-de-exito` — Case Studies
3–5 project stories with before/after photography, problem → solution → result structure. Builds trust and feeds long-tail SEO.  
*Schema: Article*

#### `/cotizacion` — Quote Request
Multi-step form: service type → capacity/size needs → timeline → contact info. Progress indicator. Email + WhatsApp confirmation. No phone required at step 1 to reduce friction.  
*Primary lead capture page*

#### `/blog` — Content Hub
Educational articles: "How to choose a cold room size", "Rent vs Buy: refrigerated containers", "HACCP compliance for cold storage".  
*Schema: Article + BreadcrumbList*  
*Long-tail SEO engine*

#### `/nosotros` — About
Company story, team photos, certifications, facility images. Humanizes the brand and improves E-E-A-T signals for Google ranking.

#### `/contacto` — Contact
Phone, WhatsApp button, email, embedded Google Map, service area description.  
*Schema: LocalBusiness*  
*Local SEO anchor page*

### 3.2 Key UX Principles

**01 — Above-the-fold CTA**  
Every service page leads with a visible "Request a Quote" or "WhatsApp Now" button — no scrolling required to take action.

**02 — Mobile-first layout**  
Design begins at 375px. All tap targets minimum 44×44px. No hover-only interactions. Forms optimized for mobile keyboards.

**03 — Speed: under 3 seconds LCP**  
Critical CSS inlined, images in WebP/AVIF with responsive srcset, no render-blocking scripts, lazy-loaded below-fold media.

**04 — Social proof placement**  
Testimonials appear on every service page, not only the homepage. Real photos + business names where possible.

**05 — WhatsApp floating button**  
Persistent WhatsApp CTA on all pages (bottom-right, mobile-priority). Reduces friction for Spanish-speaking markets where WhatsApp is the dominant B2B communication channel.

---

## 4. SEO Strategy

### 4.1 Keyword Priority Matrix

| Keyword | Intent | Target Page | Priority |
|---------|--------|-------------|----------|
| instalación cámaras frías | Commercial | /instalaciones-frigorificas | High |
| alquiler contenedor refrigerado | Transactional | /contenedores-refrigerados | High |
| venta contenedor reefer | Transactional | /contenedores-refrigerados | High |
| exhibidor horizontal congelados | Commercial | /exhibidores-horizontales | High |
| cold storage installation [city] | Local | Homepage + /contacto | High |
| refrigerated container rental near me | Local transactional | /contenedores-refrigerados | High |
| cámara frigorífica industrial precio | Commercial | /instalaciones-frigorificas | Medium |
| contenedor frío 20 pies alquiler | Transactional | /contenedores-refrigerados | Medium |
| exhibidor helados supermercado | Commercial | /exhibidores-horizontales | Medium |
| cómo elegir cámara frigorífica | Informational | /blog | Medium |

### 4.2 On-Page Technical SEO Requirements

- **Title tags:** Unique per page, 50–60 chars, primary keyword first. Pattern: `[Service] en [City] | [Brand Name]`
- **Meta descriptions:** 150–160 chars, action-oriented copy with benefit + CTA. Unique per page.
- **Heading hierarchy:** One H1 per page (primary keyword), H2 for major sections, H3 for subsections. No skipping levels.
- **Structured data (JSON-LD):** LocalBusiness on /contacto and homepage. Service on all service pages. FAQPage on installation and containers pages. Article on blog posts.
- **Image optimization:** Descriptive filenames (e.g., `camara-frigorifica-industrial-instalacion.webp`), alt text with context, width/height attributes to prevent CLS.
- **Canonical tags:** Self-referencing canonicals on all pages. Canonical from paginated sub-pages to parent.
- **XML sitemap + robots.txt:** Auto-generated sitemap submitted to Google Search Console. robots.txt excludes /thank-you and /cotizacion/step-* pages.
- **Core Web Vitals targets:** LCP < 2.5s, CLS < 0.1, INP < 200ms measured on mobile.

### 4.3 Local SEO

- **Google Business Profile:** Fully completed profile with all three service categories, photo library of projects, weekly posts, and review response protocol.
- **NAP Consistency:** Business Name, Address, Phone number identical across website, GBP, Yelp, local directories, and social profiles.
- **Location pages:** If serving multiple cities, create dedicated `/[ciudad]` landing pages with unique copy and LocalBusiness schema per location.
- **Review integration:** Schema markup for aggregate ratings. Structured review request process post-project.

---

## 5. Accessibility Requirements

The website must achieve **WCAG 2.1 Level AA** compliance at minimum. Accessibility is both a legal requirement in many markets and a ranking signal for Google.

### 5.1 Perceivable

- **Images:** All non-decorative images have descriptive alt text. Decorative images use `alt=""` and `role="presentation"`.
- **Color contrast:** Text/background contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text and UI components. Never rely on color alone to convey information.
- **Video/media:** Any video has captions. No autoplay with audio.
- **Responsive text:** Text resizes to 200% without horizontal scrolling or loss of content.

### 5.2 Operable

- **Keyboard navigation:** All interactive elements reachable and usable by keyboard alone. Logical focus order follows visual reading order.
- **Focus indicators:** Visible focus ring on all interactive elements (never `outline: none` without an accessible alternative).
- **Skip navigation:** "Skip to main content" link as the first focusable element on every page.
- **Touch targets:** All tap targets minimum 44×44px (CSS). Adequate spacing between targets.
- **No seizure triggers:** No content that flashes more than 3 times per second.

### 5.3 Understandable

- **Language attribute:** `html lang="es"` (or `"en"`) set correctly. Inline language changes marked with `lang` attribute.
- **Form labels:** Every input has an explicit `<label>`. Error messages describe what is wrong and how to fix it. No placeholder-as-label.
- **Error prevention:** Quote form allows review before submission. Destructive actions require confirmation.

### 5.4 Robust

- **Semantic HTML:** Proper use of `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<header>`, `<footer>`. No div soup.
- **ARIA:** ARIA roles/labels only where semantic HTML is insufficient. No redundant ARIA. `aria-live` regions for dynamic content (form states, availability checker results).
- **Testing tools required:** axe-core (automated), WAVE (manual audit), NVDA + Chrome (screen reader), Lighthouse accessibility score ≥ 95.

> **Competitive advantage note:** Competitive research confirms that zero major competitors in this niche have accessible websites. WCAG 2.1 AA compliance will be a genuine market differentiator — and Google's ranking algorithm increasingly factors in accessibility-related technical signals.

---

## 6. Technical Specifications

### 6.1 Recommended Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14+ (App Router) | SSG for service/product pages (fastest LCP). ISR for blog. SSR only for dynamic quote form steps. |
| CMS | Sanity.io or Strapi | Content editors can update copy, add blog posts, upload photos without developer involvement. |
| Styling | Tailwind CSS | Utility-first keeps bundle lean. Custom design tokens for brand colors, typography, and spacing. |
| Hosting | Vercel or Netlify | Edge CDN, automatic HTTPS, preview deployments, built-in image optimization, Lighthouse CI. |
| Forms | React Hook Form + custom API | Multi-step quote form with validation. Submissions via CRM webhook + email. WhatsApp deep-link as fallback. |
| Analytics | GA4 + Google Search Console | Conversion events on quote completions, WhatsApp clicks, phone number clicks. GSC from day 1. |

### 6.2 Performance Targets (Lighthouse Mobile)

| Metric | Target |
|--------|--------|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | 100 |
| SEO | 100 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |

### 6.3 Security & Compliance

- **HTTPS + HSTS:** Strict Transport Security header. All assets served over HTTPS. No mixed content.
- **Cookie consent:** GDPR/local-law compliant cookie banner. GA4 only fires after consent.
- **Form security:** CSRF protection on all POST endpoints. Rate limiting on quote submission. Honeypot field for bot detection.
- **Content Security Policy:** CSP headers restricting script sources to own domain + trusted CDNs only.

---

## 7. Delivery Roadmap

### Phase 1 — Foundation (Weeks 1–3)

**Week 1 — Design system & brand tokens**  
Color palette, typography scale, component library (buttons, cards, forms, nav). Figma prototype for homepage and container page reviewed with client.

**Week 2 — Core pages development**  
Homepage, 3 service pages, contact page. Static HTML/Next.js. Basic SEO meta tags, canonical, sitemap, robots.txt. Vercel deployment.

**Week 3 — Accessibility audit + fixes**  
axe-core automated scan, manual keyboard test, NVDA screen reader check. Fix all Level A and Level AA issues. Lighthouse ≥ 95 accessibility score confirmed.

### Phase 2 — Conversion Features (Weeks 4–5)

**Week 4 — Multi-step quote form**  
React Hook Form with 4 steps, validation, CRM webhook, email confirmation. WhatsApp floating button. Thank-you page with conversion event.

**Week 5 — CMS integration + blog**  
Sanity/Strapi connected. Client can add blog posts, update service copy, upload photos. First 3 blog articles written and published for SEO.

### Phase 3 — Growth (Weeks 6–8)

**Week 6 — Case studies + testimonials**  
3–5 project case studies with photography. Structured data for reviews. Google Business Profile fully optimized and linked.

**Week 7 — Performance optimization**  
Image pipeline (WebP/AVIF), font subsetting, critical CSS inlining, prefetch for key pages. Target: LCP < 2.5s on 4G mobile.

**Week 8 — Analytics & launch**  
GA4 conversion tracking, GSC submission, DNS cutover, post-launch Lighthouse audit. Client training on CMS. 30-day monitoring plan established.

### 7.1 Success Metrics (90-Day Targets)

| Metric | Target |
|--------|--------|
| Organic sessions | +300% vs launch baseline |
| Quote form conversion rate | ≥ 3% of landing sessions |
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Local keyword rankings | Page 1 for 3+ high-intent local terms within 60 days |

---

*ColdPro Web Platform PRD — v1.0 — May 2026*
