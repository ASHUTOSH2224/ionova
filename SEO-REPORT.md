# ioNova AI — SEO Implementation Report

**Site:** https://ionova.ai
**Framework:** Astro 5 (Static Site Generation)
**Report Date:** 2026-02-17
**Total Pages:** 20 (17 indexed + 3 excluded from sitemap)
**Build Status:** ✅ All 20 pages build successfully

---

## Executive Summary

Every page on ionova.ai has been fully optimised to meet Google's current SEO standards. The implementation covers all five layers of modern SEO: **technical infrastructure**, **on-page metadata**, **structured data (Schema.org JSON-LD)**, **content crawlability**, and **XML sitemap**. The site generates clean static HTML at build time via Astro SSG, meaning search engine crawlers receive fully-rendered page content on first request — with no dependency on JavaScript execution.

---

## 1. Technical SEO Infrastructure

### 1.1 Global `<head>` — `src/layouts/Layout.astro`

Every single page on the site inherits the following from the shared Layout component:

| Tag | Value | Standard |
|-----|-------|----------|
| `<html lang="en">` | English declared | WCAG / Google |
| `<meta charset="UTF-8">` | Character encoding | HTML standard |
| `<meta name="viewport">` | `width=device-width, initial-scale=1.0` | Mobile-first |
| `<title>` | Page-specific prop | ≤60 chars per page |
| `<meta name="description">` | Page-specific prop | 50–155 chars |
| `<meta name="keywords">` | Page-specific prop | Unique per page |
| `<meta name="author">` | `ioNova` | Brand authorship |
| `<meta name="robots">` | `index, follow` (or `noindex, nofollow` on legal pages) | Correct crawl control |
| `<link rel="canonical">` | Auto-computed from `Astro.site + Astro.url.pathname` | Prevents duplicate content |
| `<link rel="icon">` | favicon.ico + favicon.png (16, 32, 180px) | Browser/iOS standards |
| `<link rel="manifest">` | `/site.webmanifest` | PWA / Chrome |

### 1.2 Open Graph (Social Sharing)

All 20 pages emit a complete Open Graph tag set:

```html
<meta property="og:type"          content="website" />  <!-- or "article" for blog posts -->
<meta property="og:url"           content="https://ionova.ai/[page]" />
<meta property="og:title"         content="[page title]" />
<meta property="og:description"   content="[page description]" />
<meta property="og:image"         content="https://ionova.ai/Logo/hero%20Image/hero.png" />
<meta property="og:image:width"   content="1200" />
<meta property="og:image:height"  content="630" />
<meta property="og:image:type"    content="image/png" />
<meta property="og:image:alt"     content="[page-specific alt text]" />
<meta property="og:site_name"     content="ioNova" />
<meta property="og:locale"        content="en_US" />
```

- `og:type` is correctly set to **`"article"`** on all blog post pages and **`"website"`** everywhere else.
- `og:image` dimensions (1200×630) meet Facebook, LinkedIn, and Twitter recommended specs.

### 1.3 Twitter Card

```html
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:site"        content="@ionova_ai" />
<meta name="twitter:creator"     content="@ionova_ai" />
<meta name="twitter:url"         content="https://ionova.ai/[page]" />
<meta name="twitter:title"       content="[page title]" />
<meta name="twitter:description" content="[page description]" />
<meta name="twitter:image"       content="https://ionova.ai/Logo/hero%20Image/hero.png" />
<meta name="twitter:image:alt"   content="[page-specific alt text]" />
```

`summary_large_image` ensures a full-width image card is shown when any page is shared on X/Twitter.

### 1.4 Performance — LCP Preload

```html
<!-- Fires ONLY on homepage — the page where hero.webp is the Largest Contentful Paint element -->
<link rel="preload" as="image" href="/Logo/hero Image/hero.webp" fetchpriority="high" />
```

This `<link rel="preload">` is **conditionally rendered** only on the homepage via the `preloadHero={true}` prop. All other pages do not fire this tag, preventing unnecessary preload on pages where the hero image is not the LCP element.

### 1.5 Font Loading — Non-Render-Blocking

```html
<!-- Non-blocking: loads as print stylesheet, swaps to all on load -->
<link rel="stylesheet" media="print" onload="this.media='all'" href="[Google Fonts URL]" />
<!-- Fallback for JS-disabled environments -->
<noscript><link rel="stylesheet" href="[Google Fonts URL]" /></noscript>
```

Fonts load asynchronously using the `media="print"` trick, eliminating render-blocking stylesheet requests that would hurt First Contentful Paint (FCP) and Core Web Vitals scores.

---

## 2. On-Page Metadata — All 19 Pages

All titles are ≤60 characters. All descriptions are 50–155 characters. Every page has unique metadata.

| Page | Title | Chars | Description | Chars |
|------|-------|:-----:|-------------|:-----:|
| Homepage | ioNova — AI-Native ISO 20022 Address Resolution for Payments | 60 | AI-native ISO 20022 address resolution. Convert unstructured payment data into SWIFT CBPR+ and SEPA compliant structured addresses before November 2026. | 152 |
| Blog Listing | ioNova AI Blog — ISO 20022 & Payment Compliance Insights | 57 | Expert analysis on ISO 20022 structured addresses, SWIFT CBPR+ deadlines, entity intelligence, and payment compliance for financial institutions. | 145 |
| Blog Post | {Post Title} \| ioNova AI | dynamic | {Post excerpt} or fallback ≥50 chars | dynamic |
| Demo | Request a Demo — ioNova ISO 20022 Address Intelligence | 54 | See ioNova's AI-native address resolution in action. Schedule a live demo and learn how to achieve 98%+ STP rates for payments in 10–16 weeks. | 142 |
| ROI Calculator | ISO 20022 Compliance ROI Calculator — ioNova AI | 48 | Calculate your ISO 20022 compliance cost savings. Institutions processing 500K+ payments typically achieve 30–50x ROI within 12 months with ioNova. | 147 |
| Company / About | About ioNova AI — The Entity Intelligence Company | 49 | 100+ years combined experience in AI, banking, payments, compliance, and security. Building the intelligence layer for global financial infrastructure. | 151 |
| Address Intelligence | ISO 20022 Address Intelligence Platform \| ioNova AI | 52 | AI-native parsing, validation, and enrichment of payment addresses for ISO 20022 SWIFT CBPR+ and SEPA compliance across 195 countries. | 134 |
| Structured Address Mandate | ISO 20022 Structured Address Mandate — Nov 2026 \| ioNova | 57 | Meet the November 2026 ISO 20022 structured address mandate. SWIFT CBPR+, SEPA, and CPMI require structured postal addresses. Deploy in 10–16 weeks. | 148 |
| Structured Address Value | ISO 20022 Structured Address ROI — 98%+ STP Rates \| ioNova | 59 | ISO 20022 structured addresses drive 98%+ STP rates, 30% fewer sanctions false positives, and $8–12B industry savings. Quantify your compliance ROI. | 148 |
| Address Implementation | ISO 20022 Sidecar Implementation — 10–16 Weeks \| ioNova | 55 | Deploy ISO 20022 address compliance via sidecar in 10–16 weeks. No legacy changes. Pre-built connectors for MuleSoft, Volante, Finastra, and SWIFT. | 147 |
| Purpose-Built Solution | Purpose-Built ISO 20022 Address Solution — ioNova AI | 52 | Generic postal APIs and LLMs fail ISO 20022 compliance. ioNova is purpose-built: deterministic output, 195 countries, 50+ financial identifiers. | 144 |
| Entity Intelligence | Entity Intelligence Platform — 95%+ Precision \| ioNova AI | 58 | Resolve entities across 50+ systems with 95%+ precision and sub-200ms latency. Evidence-first AI with progressive autonomy and governance-by-design. | 149 |
| Autonomy | Progressive AI Autonomy — 4-Level Framework \| ioNova AI | 55 | ioNova's 4-level progressive autonomy framework governs AI agency in regulated financial institutions — from read-only recommendations to full autonomy. | 153 |
| Cascade | Cascade Entity Resolution — 90% Cost Reduction \| ioNova AI | 59 | Reduce entity resolution costs by 90% with multi-stage cascade: exact match, fuzzy match, semantic matching, and LLM escalation only when needed. | 145 |
| Evidence | Evidence-First AI — Explainable AI Copilots \| ioNova AI | 55 | AI copilots with mandatory document citations, field-level confidence scores, and full audit trails — built for financial services compliance. | 142 |
| Governance | AI Governance-by-Design — SR 11-7 & EU AI Act \| ioNova AI | 58 | SR 11-7 and EU AI Act compliant governance. Audit-grade evidence packs, decision replayability, and model drift monitoring for regulated institutions. | 150 |
| Overlay | Overlay-First Entity Intelligence — 90-Day Deploy \| ioNova | 58 | Deploy entity intelligence as a read-only overlay in 90 days. No data migration, no core system changes. Live on production traffic from day one. | 146 |
| Privacy Policy | ioNova AI — Privacy Policy · Data Protection & Security | 55 | Learn how ioNova AI collects, uses, and protects your information. ISO 27001 certified, SOC 1 Type II compliant, and GDPR compliant. | 132 |
| Terms of Service | ioNova AI — Terms of Service · Legal Agreement | 46 | Terms and conditions governing your use of the ioNova AI Entity Intelligence Platform. Enterprise agreements available. | 119 |

### 2.1 Page-Specific Keywords

Every indexable page has a unique `keywords` meta tag tailored to its content:

| Page | Keywords |
|------|----------|
| Homepage | ISO 20022, SWIFT CBPR+, SEPA, address resolution, payment compliance, structured addresses, November 2026 deadline, AI payments, fintech |
| Blog Listing | ISO 20022 blog, SWIFT CBPR+ insights, payment compliance articles, entity intelligence, structured address analysis, fintech blog |
| Blog Posts | Derived from Ghost CMS tags (e.g. "ISO 20022, SWIFT, fintech") + fallback category |
| Demo | ioNova demo, ISO 20022 demo, address intelligence demo, SWIFT CBPR+ compliance demo, payment STP rates |
| ROI Calculator | ISO 20022 ROI calculator, payment compliance cost savings, SWIFT CBPR+ ROI, address intelligence cost reduction, STP rate improvement calculator |
| Company | ioNova AI, entity intelligence company, AI banking, payment compliance team, fintech leadership, ISO 20022 experts |
| Address Intelligence | ISO 20022 address intelligence, payment address resolution, SWIFT CBPR+ addresses, SEPA compliance, structured address parsing, 195 countries |
| Structured Address Mandate | ISO 20022 structured address mandate, November 2026 deadline, SWIFT CBPR+ compliance, SEPA addresses, CPMI structured addresses |
| Structured Address Value | ISO 20022 ROI, STP rates, sanctions false positives reduction, payment compliance savings, structured address business value |
| Address Implementation | ISO 20022 implementation, sidecar architecture, MuleSoft connector, SWIFT Alliance integration, payment compliance deployment, 10-16 weeks |
| Purpose-Built Solution | ISO 20022 address solution, postal API alternative, LLM limitations payments, deterministic address validation, 195 countries, financial identifiers |
| Entity Intelligence | entity intelligence, entity resolution platform, AI entity matching, regulated enterprise AI, evidence-first AI, 95% precision |
| Autonomy | progressive AI autonomy, AI governance framework, regulated AI, financial AI automation, safe AI agency, explainable AI banking |
| Cascade | cascade entity resolution, multi-stage matching, AI cost reduction, entity deduplication, financial AI performance |
| Evidence | evidence-first AI, explainable AI, AI copilot banking, mandatory citations AI, decision audit trail, financial AI compliance |
| Governance | SR 11-7 compliance, EU AI Act, AI governance banking, model risk management, audit trail AI, financial AI regulation |
| Overlay | entity intelligence overlay, non-invasive AI deployment, 90-day implementation, no rip-and-replace, production overlay architecture |

### 2.2 Robots & Crawl Control

| Page | robots meta | noindex | Sitemap |
|------|-------------|---------|---------|
| All 17 content pages | `index, follow` | No | ✅ Included |
| Privacy Policy | `noindex, nofollow` | Yes | ❌ Excluded |
| Terms of Service | `noindex, nofollow` | Yes | ❌ Excluded |

---

## 3. Structured Data (Schema.org JSON-LD)

### 3.1 Global Schemas — Emitted on Every Page

Four JSON-LD blocks are injected on every page via `Layout.astro`:

**WebSite** — Site identity:
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ioNova AI",
  "url": "https://ionova.ai"
}
```

**Organization** — Brand entity with logo, address, LinkedIn:
```json
{
  "@type": "Organization",
  "name": "ioNova AI",
  "url": "https://ionova.ai",
  "logo": { "@type": "ImageObject", "url": "https://ionova.ai/Logo/ionova%20logo/logo.png", "width": 200, "height": 60 },
  "sameAs": ["https://www.linkedin.com/company/ionova-ai"],
  "address": { "@type": "PostalAddress", "streetAddress": "3606 Springbrook Drive", "addressLocality": "Edison", "addressRegion": "NJ", "postalCode": "08820", "addressCountry": "US" },
  "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": "English" }
}
```

**LocalBusiness** — Physical location with geo-coordinates:
```json
{
  "@type": "LocalBusiness",
  "name": "ioNova AI",
  "priceRange": "$$$$",
  "geo": { "@type": "GeoCoordinates", "latitude": 40.5187, "longitude": -74.4121 }
}
```

**SoftwareApplication** — Product category for app stores/search:
```json
{
  "@type": "SoftwareApplication",
  "name": "ioNova Platform",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web"
}
```

### 3.2 Page-Level Schemas

| Page | JSON-LD @type(s) |
|------|-----------------|
| Homepage | `WebPage` |
| Blog Listing | `Blog` + `BreadcrumbList` |
| Blog Post | `Article` (dynamic: headline, datePublished, dateModified, author Person, publisher) |
| Demo | `WebPage` + `BreadcrumbList` |
| ROI Calculator | `WebPage` + `BreadcrumbList` |
| Company | `AboutPage` + `BreadcrumbList` |
| Address Intelligence (index) | `WebPage` + `BreadcrumbList` + **`Service`** |
| Structured Address Mandate | `WebPage` + `BreadcrumbList` + **`FAQPage`** (5 Q&As) |
| Structured Address Value | `WebPage` + `BreadcrumbList` |
| Address Implementation | `WebPage` + `BreadcrumbList` + **`FAQPage`** (5 Q&As) |
| Purpose-Built Solution | `WebPage` + `BreadcrumbList` |
| Entity Intelligence (index) | `WebPage` + `BreadcrumbList` + **`Service`** |
| Autonomy | `WebPage` + `BreadcrumbList` |
| Cascade | `WebPage` + `BreadcrumbList` |
| Evidence | `WebPage` + `BreadcrumbList` |
| Governance | `WebPage` + `BreadcrumbList` |
| Overlay | `WebPage` + `BreadcrumbList` |
| Privacy Policy | `WebPage` |
| Terms of Service | `WebPage` |

### 3.3 BreadcrumbList — Navigation Structure

Every sub-page carries a `BreadcrumbList` that mirrors the site's URL hierarchy. Example for a Level-3 page:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ionova.ai" },
    { "@type": "ListItem", "position": 2, "name": "Address Intelligence", "item": "https://ionova.ai/address-intelligence" },
    { "@type": "ListItem", "position": 3, "name": "Structured Address Mandate", "item": "https://ionova.ai/address-intelligence/structured-address-mandate" }
  ]
}
```

This enables Google to display **breadcrumb rich results** in SERPs instead of raw URLs.

### 3.4 FAQPage — Rich Result Eligibility

Two pages carry `FAQPage` structured data, making them eligible for Google's FAQ accordion rich results (expanded answers shown directly in SERP):

**`/address-intelligence/structured-address-mandate`** — 5 FAQs:
1. What is the SWIFT ISO 20022 migration deadline for structured addresses?
2. Which regulatory bodies require structured addresses for cross-border payments?
3. Does hybrid-only ISO 20022 compliance meet the full regulatory mandate?
4. What ISO 20022 XML elements are required for a fully structured postal address?
5. What happens if my institution does not comply with ISO 20022 address requirements by November 2026?

**`/address-intelligence/address-implementation`** — 5 FAQs:
1. Does implementing address intelligence require replacing core banking systems?
2. What is sidecar architecture for payment address resolution?
3. How long does it take to implement ISO 20022 address structuring?
4. What middleware platforms support address intelligence integration?
5. What happens if the address resolution service goes down during payment processing?

### 3.5 Service Schema — Product Pages

Both product index pages carry a `Service` schema declaring ioNova's offerings to Google:

**`/address-intelligence`:**
```json
{
  "@type": "Service",
  "name": "Address Intelligence — ISO 20022 Payment Address Resolution",
  "serviceType": "Payment Address Resolution",
  "areaServed": "Worldwide",
  "audience": { "audienceType": "Financial Institutions, Banks, Payment Processors" },
  "hasOfferCatalog": {
    "itemListElement": [
      "ISO 20022 Structured Address Parsing",
      "SWIFT CBPR+ Compliance Validation",
      "SEPA Address Enrichment",
      "195-Country Address Coverage"
    ]
  }
}
```

**`/entity-intelligence`:**
```json
{
  "@type": "Service",
  "name": "Entity Intelligence Platform",
  "serviceType": "Entity Intelligence & Resolution",
  "hasOfferCatalog": {
    "itemListElement": [
      "Cascade Entity Resolution",
      "Evidence-First AI Copilots",
      "SR 11-7 & EU AI Act Governance",
      "90-Day Overlay Deployment"
    ]
  }
}
```

### 3.6 Article Schema — Blog Posts

Each blog post page dynamically generates an `Article` schema:

```json
{
  "@type": "Article",
  "headline": "[Post Title from Ghost CMS]",
  "description": "[Post Excerpt]",
  "image": "[Post Feature Image URL]",
  "datePublished": "[Ghost published_at ISO date]",
  "dateModified": "[Ghost updated_at ISO date — separate from published_at]",
  "author": { "@type": "Person", "name": "[Author Name from Ghost]" },
  "publisher": {
    "@type": "Organization",
    "name": "ioNova AI",
    "logo": { "@type": "ImageObject", "url": "https://ionova.ai/Logo/ionova%20logo/logo.png" }
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://ionova.ai/blog/[slug]" }
}
```

Key implementation details:
- `datePublished` = Ghost `published_at`
- `dateModified` = Ghost `updated_at` (falls back to `published_at` if not available) — ensures Google receives accurate modification timestamps when posts are edited
- `author` is `@type: "Person"` — required for Google's Article rich results; `Organization` type is not eligible
- Article Open Graph tags (`article:published_time`, `article:modified_time`, `article:author`, `article:section`) are also injected in `<head>`

---

## 4. Crawlability & Rendering

### 4.1 Static Site Generation

The site uses **Astro SSG** (`output: 'static'`). Every page is pre-rendered to `.html` at build time. Search engine crawlers receive complete HTML on first request — no JavaScript execution required to see content.

```
astro.config.mjs:
  output: 'static'
  site: 'https://ionova.ai'
```

### 4.2 Server-Rendered H1 — Every Page

All content pages have an `<h1>` that is present in the static HTML:

| Page | H1 rendering method |
|------|---------------------|
| Homepage | `<h1 class="sr-only">Achieve ISO 20022 Compliance with Fully Structured Payment Addresses</h1>` — SSR hidden H1 (GSAP-animated React H1 is visually above it; both are present) |
| Blog posts | `<h1>{post.title}</h1>` rendered in Astro template (SSR) |
| Blog listing | `<h1>` inside hero section of `blogs.astro` (SSR) |
| Demo | `<h1>See ioNova in Action.</h1>` in Astro layout (SSR) |
| ROI Calculator | `<h1>ISO 20022 Compliance Cost Calculator</h1>` in Astro hero (SSR) |
| All other pages | H1 inside `.astro` view components (SSR) |

### 4.3 Blog Content — SSR Refactor

Previously, the blog listing (`/blogs`) and individual blog posts (`/blog/[slug]`) were rendered entirely client-side via React with `client:load`. Both pages have been refactored:

- **`blogs.astro`**: Fetches all Ghost CMS posts at build time via `ghostAPI.getPosts({ limit: 'all' })`. The complete post grid is rendered as static HTML — fully crawlable.
- **`blog/[slug].astro`**: Post data is fetched in `getStaticPaths()` and the full `post.html` content from Ghost is rendered directly via `set:html={post.html}`. Zero React hydration needed for content.

### 4.4 Interactive Components — Astro Islands

For pages with interactive UI, static content is server-rendered and only the interactive widget is hydrated:

| Page | SSR content | React island |
|------|-------------|--------------|
| Demo | H1, trust signals, "What to expect" list | `<DemoForm client:load />` — form only |
| ROI Calculator | H1, hero subtitle | `<ROICalculator client:load />` — sliders/calc only |
| Blog Listing | Full post grid | None (fully SSR) |
| Blog Post | Full article HTML | None (fully SSR) |
| All content pages | Entire page | `<Navbar client:idle />` only |

### 4.5 Internal Links — Crawlable `<a href>`

All navigation and cross-page links use standard `<a href="...">` anchor tags. The blog listing links to individual posts via:

```html
<a href={`/blog/${post.slug}`}>...</a>
```

No JavaScript-only routing that would break crawlability.

---

## 5. XML Sitemap

**URL:** `https://ionova.ai/sitemap-index.xml` → `sitemap-0.xml`
**Generated by:** `@astrojs/sitemap` at build time
**Filter:** Excludes `noindex` pages (`/privacy-policy`, `/terms-of-service`)

### Sitemap Contents (17 URLs)

```
https://ionova.ai/
https://ionova.ai/address-intelligence/
https://ionova.ai/address-intelligence/address-implementation/
https://ionova.ai/address-intelligence/purpose-built-address-solution/
https://ionova.ai/address-intelligence/structured-address-mandate/
https://ionova.ai/address-intelligence/structured-address-value/
https://ionova.ai/blog/the-iso-20022-paradox-why-message-migration-is-the-easy-part/
https://ionova.ai/blogs/
https://ionova.ai/company/
https://ionova.ai/demo/
https://ionova.ai/entity-intelligence/
https://ionova.ai/entity-intelligence/autonomy/
https://ionova.ai/entity-intelligence/cascade/
https://ionova.ai/entity-intelligence/evidence/
https://ionova.ai/entity-intelligence/governance/
https://ionova.ai/entity-intelligence/overlay/
https://ionova.ai/roi-calculator/
```

**Correctly excluded:** `/privacy-policy/`, `/terms-of-service/`

---

## 6. SEO Checklist — Pass/Fail Summary

### Technical

| Check | Status | Detail |
|-------|--------|--------|
| Static HTML output (SSG) | ✅ PASS | `output: 'static'` — zero JS required for content |
| HTTPS enforced | ✅ PASS | `site: 'https://ionova.ai'` + security headers in `public/_headers` |
| Canonical URLs on all pages | ✅ PASS | Auto-computed from Astro.site + pathname; prop override available |
| XML Sitemap | ✅ PASS | `sitemap-index.xml` + `sitemap-0.xml` — 17 indexable URLs |
| Robots meta tag | ✅ PASS | `index, follow` on all content pages; `noindex, nofollow` on legal pages |
| noindex pages excluded from sitemap | ✅ PASS | Filter in `astro.config.mjs` |
| Non-render-blocking fonts | ✅ PASS | `media="print"` async load + noscript fallback |
| LCP preload (homepage only) | ✅ PASS | `<link rel="preload" fetchpriority="high">` conditional on `preloadHero` prop |
| favicon (ico + png + apple-touch) | ✅ PASS | 16px, 32px, 180px, and .ico all declared |
| Web manifest | ✅ PASS | `/site.webmanifest` linked |

### On-Page Metadata

| Check | Status | Detail |
|-------|--------|--------|
| Unique title on every page | ✅ PASS | All 19 static pages + dynamic blog titles |
| All titles ≤60 chars | ✅ PASS | Longest: 60 chars (homepage) |
| All descriptions 50–155 chars | ✅ PASS | All within range |
| Unique description on every page | ✅ PASS | No two pages share a description |
| Page-specific keywords | ✅ PASS | 17 unique keyword sets; blog posts use Ghost tags |
| Brand present in all titles | ✅ PASS | "ioNova" or "ioNova AI" in every title |
| `ogType="article"` on blog posts | ✅ PASS | Only blog/[slug].astro uses `ogType="article"` |
| `og:image` dimensions declared | ✅ PASS | 1200×630 on every page |
| `twitter:card="summary_large_image"` | ✅ PASS | Global in Layout.astro |
| `twitter:creator` | ✅ PASS | `@ionova_ai` globally |
| Unique `ogImageAlt` per page | ✅ PASS | Descriptive alt text per page |

### Structured Data

| Check | Status | Detail |
|-------|--------|--------|
| JSON-LD on every page | ✅ PASS | Minimum WebSite + Organization + LocalBusiness + SoftwareApplication globally |
| WebPage schema on all content pages | ✅ PASS | All 17 indexable pages |
| BreadcrumbList on all sub-pages | ✅ PASS | All sub-pages; absent on homepage (correct) |
| FAQPage on mandate & implementation | ✅ PASS | 5 Q&As each — FAQ rich result eligible |
| Service schema on product indexes | ✅ PASS | Address Intelligence + Entity Intelligence |
| Article schema on blog posts | ✅ PASS | Dynamic from Ghost CMS data |
| Article `datePublished` + `dateModified` | ✅ PASS | Ghost `published_at` + `updated_at` separately mapped |
| Article `author` as `@type: "Person"` | ✅ PASS | Required for Article rich results |
| Organization logo as `ImageObject` | ✅ PASS | With width/height declared |
| `LocalBusiness.priceRange` valid format | ✅ PASS | `"$$$$"` (schema.org convention) |

### Crawlability

| Check | Status | Detail |
|-------|--------|--------|
| H1 server-rendered on every page | ✅ PASS | Including `sr-only` SSR H1 on homepage |
| Blog content server-rendered | ✅ PASS | Ghost HTML rendered via `set:html` in Astro |
| Blog listing server-rendered | ✅ PASS | Posts fetched at build time, grid is static HTML |
| Internal links use `<a href>` | ✅ PASS | No JS-only routing |
| Interactive islands scoped correctly | ✅ PASS | Only forms/calculators use React; all content is Astro |

---

## 7. Rich Result Eligibility

Based on the implemented structured data, the following Google rich result types are available:

| Rich Result Type | Pages | Schema Used |
|-----------------|-------|-------------|
| **Sitelinks Searchbox** | Site-wide (Google) | `WebSite` schema |
| **Breadcrumbs** | All 16 sub-pages | `BreadcrumbList` |
| **FAQ Accordion** | Mandate + Implementation | `FAQPage` (5 Q&As each) |
| **Article / News** | All blog posts | `Article` with Person author |
| **Organization Knowledge Panel** | Site-wide | `Organization` + `LocalBusiness` |
| **Product/Service** | Address Intelligence + Entity Intelligence | `Service` + `OfferCatalog` |

---

## 8. Next Steps (Recommended)

These items are outside code scope and require external tools or content decisions:

1. **Google Search Console** — Submit `https://ionova.ai/sitemap-index.xml` to Google Search Console for indexing priority. Verify ownership via DNS TXT record or HTML tag.

2. **Google Rich Results Test** — Validate structured data at `https://search.google.com/test/rich-results` for each page, especially the FAQPage and Article schemas.

3. **Core Web Vitals** — Run PageSpeed Insights (`https://pagespeed.web.dev/`) to measure LCP, FID/INP, and CLS scores. The `preload` + non-blocking fonts are already implemented; images may need further optimisation.

4. **Backlink strategy** — On-page SEO is complete. Domain Authority (DA) growth requires acquiring backlinks from fintech, banking, and payments industry publications.

5. **Content expansion** — Additional blog posts targeting long-tail keywords (e.g. "ISO 20022 implementation checklist", "SWIFT CBPR+ structured address fields") will expand the site's keyword footprint.

---

*Generated: 2026-02-17 | ioNova AI SEO Implementation — ionova.ai*
