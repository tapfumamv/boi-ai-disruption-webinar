# Page Structure Specification
## BOI Companion Site: "How AI is Disrupting Business Models"

**Author:** UX Designer
**Date:** 2026-03-05
**Status:** Sprint 1 deliverable

---

## 1. Complete Section Hierarchy

### 1.1 Top Bar (Fixed)

| Property | Value |
|---|---|
| **Purpose** | Site identity + theme toggle. Always visible. |
| **HTML element** | `<header class="top-bar" role="banner">` |
| **ID** | None (no anchor target) |
| **Fixed** | Yes. `position: fixed; top: 0; left: 0; width: 100%; z-index: 100` |
| **Height** | 48px |
| **Content (left)** | Burger icon (mobile only, `<button class="nav-toggle" aria-label="Open navigation" aria-expanded="false">`) + site title `<span class="site-title">BOI AI DISRUPTION COMPANION</span>` |
| **Content (right)** | Theme toggle `<button class="theme-toggle" aria-label="Toggle dark mode">` with inline SVG sun/moon icon |
| **Style** | Glassmorphism: `backdrop-filter: blur(12px); background: var(--top-bar-bg);` Semi-transparent bg that shifts between themes. |
| **Accessibility** | Both buttons have `aria-label`. Burger has `aria-expanded` toggled by JS. `role="banner"` on header. |

---

### 1.2 Sidebar Navigation (Desktop only by default)

| Property | Value |
|---|---|
| **Purpose** | Persistent chapter navigation with scroll-spy active state |
| **HTML element** | `<aside class="sidebar" role="navigation" aria-label="Chapter navigation">` |
| **ID** | None |
| **Position** | Sticky: `position: sticky; top: 60px;` (48px top bar + 12px gap) |
| **Width** | 280px (desktop). Hidden on mobile; replaced by slide-in panel. |
| **Content** | `<nav><ol class="nav-list">` with `<li>` per section. Each `<li>` contains `<a href="#section-id">`. |
| **Active state** | `.nav-list a.active`: accent-color left border (3px solid var(--accent)), subtle text glow, font-weight bump. Set via IntersectionObserver. |
| **Keyboard** | Tab-focusable links. Focus ring visible. |

**Nav items in order:**
1. Hero (hidden from nav; scroll-to-top implicit)
2. Executive Summary
3. Chapter Overview
4. 01 The Comfortable Illusion
5. 02 The GPT Frame
6. 03 Control Shifts
7. 04 Competition
8. 05 Value
9. 06 Disruption Index
10. 07 How to Respond
11. Q&A Highlights
12. Closing

---

### 1.3 Hero Section

| Property | Value |
|---|---|
| **Purpose** | First impression. Headline provocation, video embed, speaker identity, meta stats. |
| **HTML element** | `<section id="hero" class="hero-section" aria-labelledby="hero-heading">` |
| **Associated slides** | None |
| **Content type** | Editorial + video embed |
| **Est. reading time** | N/A (landing section) |

**Content blocks (in order):**

1. **Label pill:** `<span class="section-label">INDEPENDENT COMPANION GUIDE</span>`
2. **Headline:** `<h1 id="hero-heading">Your AI strategy is probably missing the point.</h1>`
3. **Subheadline:** `<p class="hero-sub">` from written-content.md hero subheadline. Two to three sentences. No em dashes.
4. **Video embed:** `<div class="video-container"><iframe src="https://www.youtube.com/embed/roEXHMC6onQ" title="BOI Webinar: How AI is Disrupting Business Models" allowfullscreen loading="lazy"></iframe></div>` Responsive 16:9 wrapper.
5. **Speaker line:** `<p class="speaker-meta">Laura Stevens · Managing Director, Board of Innovation</p>`
6. **Meta bar:** `<p class="hero-meta">45 min · 19 slides · 6 chapters</p>`

---

### 1.4 Executive Summary

| Property | Value |
|---|---|
| **Purpose** | 250-word standalone summary for time-pressed readers |
| **HTML element** | `<section id="exec-summary" class="content-section" aria-labelledby="exec-summary-heading">` |
| **Associated slides** | None |
| **Content type** | Narrative |
| **Est. reading time** | 2 min |

**Content blocks:**

1. **Section label:** `<span class="section-label">EXECUTIVE SUMMARY</span>`
2. **Heading:** `<h2 id="exec-summary-heading">The 250-word version</h2>`
3. **Body:** 3-4 paragraphs from written-content.md executive summary. Clean, punchy prose. No em dashes.

---

### 1.5 Chapter Overview

| Property | Value |
|---|---|
| **Purpose** | Visual three-act table of contents. Orientation before the deep scroll. |
| **HTML element** | `<section id="overview" class="content-section overview-section" aria-labelledby="overview-heading">` |
| **Associated slides** | None |
| **Content type** | Interactive navigation |
| **Est. reading time** | 1 min |

**Content blocks:**

1. **Section label:** `<span class="section-label">THE ARGUMENT</span>`
2. **Heading:** `<h2 id="overview-heading">Three acts. One thesis.</h2>`
3. **Three-column card grid:** `<div class="act-grid" role="list">`

Each act is a card:
```
<article class="act-card" role="listitem">
  <span class="act-number">ACT 1</span>
  <h3 class="act-title">The Problem</h3>
  <p class="act-desc">The Comfortable Illusion + AI as GPT</p>
  <a href="#comfortable-illusion" class="act-link">Read section</a>
</article>
```

**Act 1: The Problem** links to `#comfortable-illusion`. Covers sections 1-2.
**Act 2: The Disruption** links to `#control`. Covers sections 3-5 (Control, Competition, Value).
**Act 3: How to Respond** links to `#disruption-index`. Covers sections 6-7.

On mobile: cards stack vertically with full width.

---

### 1.6 Section 1: The Comfortable Illusion

| Property | Value |
|---|---|
| **Purpose** | Opening provocation. Most companies are doing AI wrong. |
| **HTML element** | `<section id="comfortable-illusion" class="content-section chapter-section" aria-labelledby="s1-heading">` |
| **Associated slides** | `slide_0001.jpg` (BOI intro), `slide_0002.jpg` (The Comfortable Illusion) |
| **Content type** | Narrative |
| **Est. reading time** | 3 min |

**Content blocks (in order):**

1. **Section label:** `<span class="section-label">01</span>`
2. **Section title:** `<h2 id="s1-heading">The Comfortable Illusion</h2>`
3. **Narrative paragraphs:** 2-3 paragraphs from written-content.md Section 1.
4. **Slide card (Mode A):** `slide_0001.jpg` in `.slide-card` container. Caption: "BOI: Everyone sells AI efficiencies. We build for growth."
5. **Continued narrative:** 1-2 paragraphs.
6. **Slide card (Mode A):** `slide_0002.jpg`. Caption: "The Comfortable Illusion: a gap between operational AI and structural AI."
7. **"So What?" callout:** `<div class="callout callout-action" role="note"><h3>So What?</h3><p>[ACTION CONTENT]</p></div>`
8. **Pull quote:** `<blockquote class="pull-quote"><p>"A structural shift can never be addressed with an incremental logic."</p><cite>Laura Stevens</cite></blockquote>`

---

### 1.7 Section 2: The GPT Frame

| Property | Value |
|---|---|
| **Purpose** | Intellectual foundation. AI as general purpose technology, not a tool. |
| **HTML element** | `<section id="gpt-frame" class="content-section chapter-section" aria-labelledby="s2-heading">` |
| **Associated slides** | None (conceptual framing section) |
| **Content type** | Narrative + data visualisation |
| **Est. reading time** | 3 min |

**Content blocks:**

1. **Section label:** `<span class="section-label">02</span>`
2. **Section title:** `<h2 id="s2-heading">The General Purpose Technology Frame</h2>`
3. **Narrative paragraphs:** 2-3 paragraphs from written-content.md Section 2.
4. **Three-shift cards:** `<div class="shift-grid" role="list">` with three cards:
   - Card 1: "New Business Models" with brief description
   - Card 2: "New Cost Structures" with brief description
   - Card 3: "New Competitive Advantage" with brief description
   Each card: `<div class="shift-card" role="listitem"><h3>[TITLE]</h3><p>[DESC]</p></div>`
5. **"So What?" callout.**
6. **Pull quote:** "AI is not just a tool but something that economists call a general purpose technology."

---

### 1.8 Section 3: Control Shifts

| Property | Value |
|---|---|
| **Purpose** | First deep-dive disruption. AI shifts power to the algorithmic layer. Most slide-heavy section. |
| **HTML element** | `<section id="control" class="content-section chapter-section" aria-labelledby="s3-heading">` |
| **Associated slides** | `slide_0003.jpg` through `slide_0010.jpg` (8 slides) |
| **Content type** | Narrative + data viz + interactive |
| **Est. reading time** | 6 min |

**Content blocks:**

1. **Section label:** `<span class="section-label">03</span>`
2. **Section title:** `<h2 id="s3-heading">Control Shifts: The Algorithm Layer Wins</h2>`
3. **Intro narrative:** 2 paragraphs setting up the control concept.
4. **Slide card (Mode A):** `slide_0003.jpg`. Caption: "AI Disruption: Deep-dives."
5. **Subheading:** `<h3>Shaped. Executed. Removed.</h3>`
6. **Framework narrative:** 1-2 paragraphs explaining the three levels.
7. **Slide card (Mode A):** `slide_0004.jpg` (or `slide_0006.jpg` for the BOI-branded version). Caption: "Three levels of control reallocation."
8. **Subheading:** `<h3>The Rise of Agentic Commerce</h3>`
9. **Agentic commerce narrative:** 1-2 paragraphs.
10. **Slide card (Mode A):** `slide_0007.jpg`. Caption: "Agentic commerce: Yesterday, Today, Tomorrow, Future."
11. **Slide card (Mode A):** `slide_0008.jpg`. Caption: "The S-curve of agentic commerce adoption."
12. **Subheading:** `<h3>What This Means for Sellers</h3>`
13. **Implications narrative:** 1 paragraph.
14. **Slide card (Mode A):** `slide_0009.jpg`. Caption: "Four implications for sellers in AI-mediated markets."
15. **Subheading:** `<h3>When Commoditization Hits Hardest</h3>`
16. **Commoditization narrative:** 1 paragraph + sector list.
17. **Slide card (Mode A):** `slide_0010.jpg`. Caption: "Three conditions for AI-driven commoditization."
18. **"So What?" callout.**
19. **Pull quote:** "Brands are no longer competing for shelf space. They are competing to be selected by the agent."

---

### 1.9 Full-Bleed Quote Divider (between Control and Competition)

| Property | Value |
|---|---|
| **Purpose** | Visual chapter break. Statement slide used as background. |
| **HTML element** | `<div class="quote-divider" role="separator" aria-label="Chapter transition">` |
| **Associated slides** | `slide_0011.jpg` (quote: "reshapes who can enter") |
| **Content type** | Full-bleed visual |
| **Slide render mode** | Mode B |

**Implementation:**
```html
<div class="quote-divider" role="separator" aria-label="Chapter transition"
     style="background-image: url('../assets/slides/slide_0011.jpg')">
  <p class="divider-text">[QUOTE TEXT FROM SLIDE]</p>
</div>
```
Height: 300px min. `background-size: cover; background-position: center;` White text overlay with semi-transparent dark scrim.

---

### 1.10 Section 4: Competition

| Property | Value |
|---|---|
| **Purpose** | Second disruption deep-dive. AI collapses barriers to entry. |
| **HTML element** | `<section id="competition" class="content-section chapter-section" aria-labelledby="s4-heading">` |
| **Associated slides** | `slide_0011.jpg` (used as divider above), `slide_0012.jpg` |
| **Content type** | Narrative + case studies |
| **Est. reading time** | 4 min |

**Content blocks:**

1. **Section label:** `<span class="section-label">04</span>`
2. **Section title:** `<h2 id="s4-heading">Barriers Collapse: The New Competitor is Leaner Than You Think</h2>`
3. **Intro narrative:** 2 paragraphs.
4. **Slide card (Mode A):** `slide_0012.jpg`. Caption: "Three forces collapsing barriers to entry."
5. **Subheading:** `<h3>Case Studies</h3>`
6. **Case study card (B44):** `<article class="case-study-card">` with metrics displayed prominently:
   - Metric: `$80M` exit
   - Metric: `<10` people
   - Metric: `$3.5M` ARR in 6 months
   - Metric: `$0` outside capital
   - Narrative: 1 paragraph.
7. **Case study card (Basis AI):** Same structure.
   - Metric: `$1B` valuation
   - Metric: Lean team
   - Narrative: 1 paragraph.
8. **"So What?" callout.**
9. **Pull quote:** "When the cost of building drops, barriers to entry fall."

---

### 1.11 Full-Bleed Quote Divider (between Competition and Value)

| Property | Value |
|---|---|
| **HTML element** | `<div class="quote-divider" role="separator">` |
| **Associated slides** | `slide_0013.jpg` (quote: "changes what is valuable") |
| **Slide render mode** | Mode B |

Same implementation as Section 1.9.

---

### 1.12 Section 5: Value

| Property | Value |
|---|---|
| **Purpose** | Third disruption. Customers shift from paying for effort to paying for outcomes. |
| **HTML element** | `<section id="value" class="content-section chapter-section" aria-labelledby="s5-heading">` |
| **Associated slides** | `slide_0013.jpg` (used as divider above), `slide_0014.jpg` |
| **Content type** | Narrative |
| **Est. reading time** | 4 min |

**Content blocks:**

1. **Section label:** `<span class="section-label">05</span>`
2. **Section title:** `<h2 id="s5-heading">Value Moves: The Era of Billing for Effort is Over</h2>`
3. **Intro narrative:** 2 paragraphs.
4. **Slide card (Mode A):** `slide_0014.jpg`. Caption: "Human-time monetization erodes as AI replicates cognitive labour."
5. **Subheading:** `<h3>From Products to Outcomes</h3>`
6. **Asset-shift narrative:** 1-2 paragraphs covering Rolls-Royce "power by the hour" and similar examples.
7. **"So What?" callout.**
8. **Pull quote:** "Why would I pay 5,000 euros for a market analysis if AI can produce a comparable report in minutes?"

---

### 1.13 Section 6: Disruption Index

| Property | Value |
|---|---|
| **Purpose** | Self-assessment framework. The 8-dimension index that tells you if your model is at risk. |
| **HTML element** | `<section id="disruption-index" class="content-section chapter-section" aria-labelledby="s6-heading">` |
| **Associated slides** | `slide_0015.jpg`, `slide_0016.jpg` |
| **Content type** | Interactive (expandable grid) |
| **Est. reading time** | 3 min |

**Content blocks:**

1. **Section label:** `<span class="section-label">06</span>`
2. **Section title:** `<h2 id="s6-heading">Is Your Business Model at Risk?</h2>`
3. **Intro narrative:** 1 paragraph.
4. **Slide card (Mode A):** `slide_0015.jpg`. Caption: "Is your model at risk?"
5. **Interactive grid:** `<div class="disruption-grid" role="list">` with 8 dimension cards.

Each dimension card:
```html
<article class="dimension-card" role="listitem">
  <span class="dimension-number">01</span>
  <h3 class="dimension-title">Operational Exposure</h3>
  <p class="dimension-desc">[BRIEF DESCRIPTION]</p>
</article>
```

The 8 dimensions:
1. Operational Exposure
2. Business Model Vulnerability
3. Distribution Disintermediation
4. AI Capability Maturity
5. AI-Native Entry Barriers
6. Differentiation Erosion
7. Customer Acceptance
8. Regulatory Friction

6. **Slide card (Mode A):** `slide_0016.jpg`. Caption: "BOI's AI Disruption Exposure Index: 8 factors."
7. **Regulation callout:** `<div class="callout callout-note"><p>"Regulation is often a delay mechanism but it's never a permanent shield."</p></div>`

---

### 1.14 Section 7: How to Respond

| Property | Value |
|---|---|
| **Purpose** | The prescription. Three tracks of transformation. Closing argument. |
| **HTML element** | `<section id="how-to-respond" class="content-section chapter-section" aria-labelledby="s7-heading">` |
| **Associated slides** | `slide_0017.jpg`, `slide_0018.jpg`, `slide_0019.jpg` |
| **Content type** | Narrative + framework |
| **Est. reading time** | 4 min |

**Content blocks:**

1. **Section label:** `<span class="section-label">07</span>`
2. **Section title:** `<h2 id="s7-heading">How to Respond: Three Tracks, One Direction</h2>`
3. **Intro narrative:** 1-2 paragraphs.
4. **Slide card (Mode A):** `slide_0017.jpg`. Caption: "How to respond."
5. **Three-track cards:** `<div class="track-grid" role="list">` with three cards:

```html
<article class="track-card" role="listitem">
  <span class="track-number">Track 1</span>
  <h3 class="track-title">Strategic Reinvention</h3>
  <p class="track-desc">Redefine where value sits. Where is your model vulnerable?
  What makes you hard to replace? How do you monetize in an outcomes-driven world?</p>
</article>
```

Track 1: Strategic Reinvention
Track 2: Workflow Redesign
Track 3: Operating Model Redesign

6. **Slide card (Mode A):** `slide_0018.jpg`. Caption: "Three Tracks of AI-First Transformation."
7. **"So What?" callout.**
8. **Closing pull quote (full-width):** "AI is not a technology shift. It is a market shift. And market shifts don't reward optimization. They reward reinvention."

---

### 1.15 Full-Bleed Quote Divider (before Q&A)

| Property | Value |
|---|---|
| **HTML element** | `<div class="quote-divider" role="separator">` |
| **Associated slides** | `slide_0019.jpg` (closing statement) |
| **Slide render mode** | Mode B |

---

### 1.16 Q&A Highlights

| Property | Value |
|---|---|
| **Purpose** | Conversational coda. Practical questions, direct answers. |
| **HTML element** | `<section id="qa" class="content-section qa-section" aria-labelledby="qa-heading">` |
| **Associated slides** | None |
| **Content type** | Q&A pairs |
| **Est. reading time** | 3 min |

**Content blocks:**

1. **Section label:** `<span class="section-label">Q&A</span>`
2. **Heading:** `<h2 id="qa-heading">Q&A Highlights</h2>`
3. **Context line:** `<p class="qa-context">Key exchanges from the live session with Nick.</p>`
4. **Q&A items (4-5):** Each as:

```html
<article class="qa-item">
  <p class="qa-question">[QUESTION TEXT]</p>
  <blockquote class="qa-answer">
    <p>[LAURA'S ANSWER, summarised]</p>
  </blockquote>
</article>
```

Suggested Q&A pairs:
- On professional services / digital agencies
- On junior talent and entry-level roles
- On what makes a company valuable when labour is no longer scarce
- On urgency by sector
- On existing competitors vs. new entrants

---

### 1.17 Closing / CTA

| Property | Value |
|---|---|
| **Purpose** | Final calls to action. Drive engagement beyond the page. |
| **HTML element** | `<section id="closing" class="content-section closing-section" aria-labelledby="closing-heading">` |
| **Associated slides** | None |
| **Content type** | CTA |
| **Est. reading time** | 1 min |

**Content blocks:**

1. **Heading:** `<h2 id="closing-heading">The window is open. It won't stay that way.</h2>`
2. **Body:** 1 paragraph from written-content.md closing body.
3. **CTA grid:** `<div class="cta-grid">` with 3-4 CTA cards:

```html
<a href="https://www.youtube.com/watch?v=roEXHMC6onQ" class="cta-card" target="_blank" rel="noopener">
  <h3>Watch the Full Webinar</h3>
  <p>45 minutes. No filler.</p>
</a>
```

CTAs:
- Watch the Full Webinar (YouTube link)
- AI Disruption Index (BOI tool link)
- Explore BOI's AI-First Playbook (BOI site link)
- Connect with Laura Stevens (LinkedIn)

---

### 1.18 Footer

| Property | Value |
|---|---|
| **Purpose** | Attribution, disclaimer, minimal links. |
| **HTML element** | `<footer class="site-footer" role="contentinfo">` |
| **Content** | Attribution text + year |

```html
<footer class="site-footer" role="contentinfo">
  <p class="footer-attribution">Independent companion guide. Not affiliated with Board of Innovation.</p>
  <p class="footer-source">Content compiled from the public webinar "How AI is Disrupting Business Models" by Laura Stevens.</p>
  <p class="footer-year">2026</p>
</footer>
```

---

## 2. Navigation Specification

### 2.1 Desktop Navigation (1024px and above)

**Sidebar:**
- Position: `sticky`, `top: 60px` (48px top bar + 12px breathing room)
- Width: 280px
- Height: `calc(100vh - 60px)`, `overflow-y: auto`
- Sits in a CSS Grid or flexbox layout alongside `<main>`
- Contains an ordered list of chapter links
- Each link: `<a href="#section-id" class="nav-link">` with section number and name
- Scroll spy via IntersectionObserver marks current section with `.active` class
- Active state: 3px solid left border in accent color, text colour shifts to accent, subtle `text-shadow` glow
- Click triggers `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`
- Sidebar scrolls independently if nav list exceeds viewport height

### 2.2 Mobile Navigation (below 1024px)

**Sidebar hidden by default.** Replaced by a slide-in panel.

**Burger icon:**
- Placed in top bar, left side, before site title
- `<button class="nav-toggle" aria-label="Open navigation" aria-expanded="false">`
- SVG hamburger icon (three horizontal lines)
- Visible only below 1024px (`display: none` on desktop)

**Slide-in panel:**
- `<div class="mobile-nav-overlay" aria-hidden="true">` (dark overlay, `background: rgba(0,0,0,0.5)`)
- `<nav class="mobile-nav-panel" aria-label="Chapter navigation">` slides in from left
- Width: `300px` (max `85vw`)
- Transform: `translateX(-100%)` by default; `translateX(0)` when open
- Transition: `transform 0.3s ease`
- Contains same chapter list as desktop sidebar
- Touch-friendly targets: min 44px height per link, 12px vertical padding

**Closing the panel:**
- Tap the dark overlay
- Press Escape key
- Tap a nav link (after scrolling to target)
- `aria-expanded` on burger toggles to `false`; `aria-hidden` on overlay toggles to `true`

### 2.3 Top Bar Navigation

- Fixed: `position: fixed; top: 0; left: 0; width: 100%; z-index: 100;`
- Height: 48px
- Left side: burger icon (mobile only) + site title (uppercase, letter-spaced)
- Right side: theme toggle button
- Background: glassmorphism, `backdrop-filter: blur(12px)`, semi-transparent background that respects current theme
- Border-bottom: 1px solid `var(--border-subtle)`
- `body` receives `padding-top: 48px` to prevent content hiding behind fixed bar

---

## 3. Scroll Behavior

### 3.1 Smooth Scrolling
- All anchor link clicks trigger smooth scroll: `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`
- Offset by top bar height (48px). Use `scroll-margin-top: 60px` on all section elements.
- `html { scroll-behavior: smooth; }` as CSS fallback

### 3.2 Scroll Spy
- Use `IntersectionObserver` with `threshold: 0.2` and `rootMargin: '-60px 0px 0px 0px'` (accounts for fixed top bar)
- Observe all `<section>` elements with IDs
- When a section intersects, add `.active` to corresponding sidebar nav link, remove from others
- On page load, detect which section is in view and set active state

### 3.3 Scroll Restoration
- On page load: `if ('scrollRestoration' in history) history.scrollRestoration = 'manual';`
- Prevents browser from restoring scroll position on refresh; user always starts at top

### 3.4 URL Hash Updates
- When scroll spy detects a new active section, update `history.replaceState(null, '', '#' + sectionId)` (no pushState, to avoid polluting browser history)
- On load, if URL has a hash, scroll to that section after a short delay (100ms) to allow layout

---

## 4. Section Transition Patterns

### 4.1 Standard Chapter Section Pattern

Every narrative chapter section (Sections 1-7) follows this internal layout pattern:

```
┌─────────────────────────────────────────┐
│  [Section Label Pill]  01               │  <- .section-label
│                                         │
│  Section Title                          │  <- h2
│  ═══════════════                        │
│                                         │
│  Narrative paragraph(s)                 │  <- p tags
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [SLIDE IMAGE]                  │    │  <- .slide-card (Mode A)
│  │  Caption: Slide N: Description  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  More narrative paragraph(s)            │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  SO WHAT?                       │    │  <- .callout.callout-action
│  │  Actionable insight paragraph   │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  "Pull quote text here."       │    │  <- .pull-quote blockquote
│  │                  — Laura Stevens│    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

### 4.2 Full-Bleed Quote Dividers

Placed between major act transitions:
- Between Section 3 (Control) and Section 4 (Competition): `slide_0011.jpg`
- Between Section 4 (Competition) and Section 5 (Value): `slide_0013.jpg`
- Between Section 7 (How to Respond) and Q&A: `slide_0019.jpg`

Implementation:
- `width: 100vw` (breaks out of content column via negative margins or grid)
- `min-height: 300px`
- `background-image` with `cover` sizing
- Dark scrim overlay (`::before` with `background: rgba(0,0,0,0.4)`)
- Large white text centered (the quote from the slide, rendered as HTML text for accessibility)
- `role="separator"` and `aria-label` for screen readers

### 4.3 Section Borders

- Subtle `border-bottom: 1px solid var(--border-subtle)` between sections within the same act
- Full-bleed quote dividers replace borders between acts

---

## 5. Responsive Layout Plan

### 5.1 Desktop (1024px and above)

```
┌──────────────────────────────────────────────────┐
│  [TOP BAR — full width, 48px]                    │
├────────────┬─────────────────────────────────────┤
│  SIDEBAR   │  MAIN CONTENT                       │
│  280px     │  max-width: 800px                    │
│  sticky    │  centered in remaining space         │
│  top: 60px │  padding: 0 40px                     │
│            │                                      │
│            │                                      │
└────────────┴─────────────────────────────────────┘
```

- Layout: CSS Grid `grid-template-columns: 280px 1fr;`
- Main content: `max-width: 800px; margin: 0 auto;` within grid cell
- Slide cards: `max-width: 720px` within main content
- Full-bleed dividers: break out of grid using `grid-column: 1 / -1;`

### 5.2 Tablet (768px to 1023px)

- Sidebar hidden. Burger menu activates slide-in panel.
- Main content: `max-width: 720px; margin: 0 auto; padding: 0 32px;`
- Slide cards: full content width
- Act-grid and track-grid: 3-column maintained if space allows, otherwise 2+1 stack
- Case study cards: side by side if space, otherwise stacked

### 5.3 Mobile (480px to 767px)

- Full-width content: `padding: 0 20px;`
- All grids stack to single column
- Slide cards: full-width, edge-to-edge within padding
- Pull quotes: reduced font size (1.25rem vs. 1.5rem desktop)
- Case study metrics: horizontal scroll or 2x2 grid
- Section label pills: smaller
- CTA grid: single column

### 5.4 Small Mobile (below 480px)

- Padding reduced to `0 16px`
- Headings scaled down (h2: 1.5rem, h3: 1.2rem)
- Pull quotes: 1.1rem
- Top bar title may truncate (CSS `text-overflow: ellipsis`)
- Video embed: full-bleed (negative margins to remove padding)
- Minimum touch targets maintained at 44px

---

## 6. Complete HTML Skeleton

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>How AI is Disrupting Business Models | BOI Companion Guide</title>
  <meta name="description" content="A companion guide to Laura Stevens' landmark webinar on how AI is restructuring markets, collapsing barriers, and shifting value.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- ============================================ -->
  <!-- TOP BAR (Fixed)                              -->
  <!-- ============================================ -->
  <header class="top-bar" role="banner">
    <div class="top-bar-inner">
      <div class="top-bar-left">
        <button class="nav-toggle" aria-label="Open navigation" aria-expanded="false">
          <svg class="icon-menu" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <span class="site-title">BOI AI DISRUPTION COMPANION</span>
      </div>
      <div class="top-bar-right">
        <button class="theme-toggle" aria-label="Toggle dark mode">
          <svg class="icon-theme" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <!-- Sun/Moon SVG paths toggled via JS -->
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        </button>
      </div>
    </div>
  </header>

  <!-- ============================================ -->
  <!-- MOBILE NAV OVERLAY + PANEL                   -->
  <!-- ============================================ -->
  <div class="mobile-nav-overlay" aria-hidden="true"></div>
  <nav class="mobile-nav-panel" aria-label="Chapter navigation" aria-hidden="true">
    <ol class="nav-list">
      <li><a href="#exec-summary" class="nav-link">Executive Summary</a></li>
      <li><a href="#overview" class="nav-link">Chapter Overview</a></li>
      <li><a href="#comfortable-illusion" class="nav-link"><span class="nav-num">01</span> The Comfortable Illusion</a></li>
      <li><a href="#gpt-frame" class="nav-link"><span class="nav-num">02</span> The GPT Frame</a></li>
      <li><a href="#control" class="nav-link"><span class="nav-num">03</span> Control Shifts</a></li>
      <li><a href="#competition" class="nav-link"><span class="nav-num">04</span> Competition</a></li>
      <li><a href="#value" class="nav-link"><span class="nav-num">05</span> Value</a></li>
      <li><a href="#disruption-index" class="nav-link"><span class="nav-num">06</span> Disruption Index</a></li>
      <li><a href="#how-to-respond" class="nav-link"><span class="nav-num">07</span> How to Respond</a></li>
      <li><a href="#qa" class="nav-link">Q&A Highlights</a></li>
      <li><a href="#closing" class="nav-link">Closing</a></li>
    </ol>
  </nav>

  <!-- ============================================ -->
  <!-- PAGE LAYOUT: SIDEBAR + MAIN                  -->
  <!-- ============================================ -->
  <div class="page-layout">

    <!-- SIDEBAR (Desktop only) -->
    <aside class="sidebar" role="navigation" aria-label="Chapter navigation">
      <ol class="nav-list">
        <li><a href="#exec-summary" class="nav-link">Executive Summary</a></li>
        <li><a href="#overview" class="nav-link">Chapter Overview</a></li>
        <li><a href="#comfortable-illusion" class="nav-link"><span class="nav-num">01</span> The Comfortable Illusion</a></li>
        <li><a href="#gpt-frame" class="nav-link"><span class="nav-num">02</span> The GPT Frame</a></li>
        <li><a href="#control" class="nav-link"><span class="nav-num">03</span> Control Shifts</a></li>
        <li><a href="#competition" class="nav-link"><span class="nav-num">04</span> Competition</a></li>
        <li><a href="#value" class="nav-link"><span class="nav-num">05</span> Value</a></li>
        <li><a href="#disruption-index" class="nav-link"><span class="nav-num">06</span> Disruption Index</a></li>
        <li><a href="#how-to-respond" class="nav-link"><span class="nav-num">07</span> How to Respond</a></li>
        <li><a href="#qa" class="nav-link">Q&A Highlights</a></li>
        <li><a href="#closing" class="nav-link">Closing</a></li>
      </ol>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="main-content" id="main-content">

      <!-- ======== HERO ======== -->
      <section id="hero" class="hero-section" aria-labelledby="hero-heading">
        <span class="section-label">INDEPENDENT COMPANION GUIDE</span>
        <h1 id="hero-heading">Your AI strategy is probably missing the point.</h1>
        <p class="hero-sub">[SUBHEADLINE CONTENT]</p>

        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/roEXHMC6onQ"
            title="BOI Webinar: How AI is Disrupting Business Models"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>

        <p class="speaker-meta">Laura Stevens · Managing Director, Board of Innovation</p>
        <p class="hero-meta">45 min · 19 slides · 6 chapters</p>
      </section>

      <!-- ======== EXECUTIVE SUMMARY ======== -->
      <section id="exec-summary" class="content-section" aria-labelledby="exec-summary-heading">
        <span class="section-label">EXECUTIVE SUMMARY</span>
        <h2 id="exec-summary-heading">The 250-word version</h2>
        <p>[EXEC SUMMARY PARAGRAPH 1]</p>
        <p>[EXEC SUMMARY PARAGRAPH 2]</p>
        <p>[EXEC SUMMARY PARAGRAPH 3]</p>
      </section>

      <!-- ======== CHAPTER OVERVIEW ======== -->
      <section id="overview" class="content-section overview-section" aria-labelledby="overview-heading">
        <span class="section-label">THE ARGUMENT</span>
        <h2 id="overview-heading">Three acts. One thesis.</h2>
        <div class="act-grid" role="list">
          <article class="act-card" role="listitem">
            <span class="act-number">ACT 1</span>
            <h3 class="act-title">The Problem</h3>
            <p class="act-desc">The Comfortable Illusion and the GPT Frame.</p>
            <a href="#comfortable-illusion" class="act-link">Read section</a>
          </article>
          <article class="act-card" role="listitem">
            <span class="act-number">ACT 2</span>
            <h3 class="act-title">The Disruption</h3>
            <p class="act-desc">Control shifts. Competition collapses. Value moves.</p>
            <a href="#control" class="act-link">Read section</a>
          </article>
          <article class="act-card" role="listitem">
            <span class="act-number">ACT 3</span>
            <h3 class="act-title">How to Respond</h3>
            <p class="act-desc">Disruption Index and the Three Tracks.</p>
            <a href="#disruption-index" class="act-link">Read section</a>
          </article>
        </div>
      </section>

      <!-- ======== SECTION 1: THE COMFORTABLE ILLUSION ======== -->
      <section id="comfortable-illusion" class="content-section chapter-section" aria-labelledby="s1-heading">
        <span class="section-label">01</span>
        <h2 id="s1-heading">The Comfortable Illusion</h2>

        <p>[NARRATIVE PARAGRAPH 1]</p>
        <p>[NARRATIVE PARAGRAPH 2]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0001.jpg" alt="Board of Innovation: Everyone sells AI efficiencies. We build for growth." loading="lazy">
          <figcaption>BOI: "Everyone sells AI efficiencies. We build for growth."</figcaption>
        </figure>

        <p>[NARRATIVE PARAGRAPH 3]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0002.jpg" alt="The Comfortable Illusion: the gap between operational AI and structural AI" loading="lazy">
          <figcaption>The Comfortable Illusion: operational AI vs. structural AI.</figcaption>
        </figure>

        <div class="callout callout-action" role="note">
          <h3>So What?</h3>
          <p>[ACTION CONTENT]</p>
        </div>

        <blockquote class="pull-quote">
          <p>"A structural shift can never be addressed with an incremental logic."</p>
          <cite>Laura Stevens</cite>
        </blockquote>
      </section>

      <!-- ======== SECTION 2: THE GPT FRAME ======== -->
      <section id="gpt-frame" class="content-section chapter-section" aria-labelledby="s2-heading">
        <span class="section-label">02</span>
        <h2 id="s2-heading">The General Purpose Technology Frame</h2>

        <p>[NARRATIVE PARAGRAPH 1]</p>
        <p>[NARRATIVE PARAGRAPH 2]</p>

        <div class="shift-grid" role="list">
          <div class="shift-card" role="listitem">
            <h3>New Business Models</h3>
            <p>[DESCRIPTION]</p>
          </div>
          <div class="shift-card" role="listitem">
            <h3>New Cost Structures</h3>
            <p>[DESCRIPTION]</p>
          </div>
          <div class="shift-card" role="listitem">
            <h3>New Competitive Advantage</h3>
            <p>[DESCRIPTION]</p>
          </div>
        </div>

        <div class="callout callout-action" role="note">
          <h3>So What?</h3>
          <p>[ACTION CONTENT]</p>
        </div>

        <blockquote class="pull-quote">
          <p>"AI is not just a tool but something that economists call a general purpose technology."</p>
          <cite>Laura Stevens</cite>
        </blockquote>
      </section>

      <!-- ======== SECTION 3: CONTROL SHIFTS ======== -->
      <section id="control" class="content-section chapter-section" aria-labelledby="s3-heading">
        <span class="section-label">03</span>
        <h2 id="s3-heading">Control Shifts: The Algorithm Layer Wins</h2>

        <p>[INTRO NARRATIVE 1]</p>
        <p>[INTRO NARRATIVE 2]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0003.jpg" alt="AI Disruption: Deep-dives section divider" loading="lazy">
          <figcaption>AI Disruption: Deep-dives.</figcaption>
        </figure>

        <h3>Shaped. Executed. Removed.</h3>
        <p>[FRAMEWORK NARRATIVE]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0004.jpg" alt="Three levels of control reallocation: Shaped, Executed, Removed" loading="lazy">
          <figcaption>Three levels of control reallocation.</figcaption>
        </figure>

        <h3>The Rise of Agentic Commerce</h3>
        <p>[AGENTIC NARRATIVE]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0007.jpg" alt="Agentic Commerce evolution: Yesterday, Today, Tomorrow, Future" loading="lazy">
          <figcaption>Agentic Commerce: from chatbots to agent-to-agent.</figcaption>
        </figure>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0008.jpg" alt="S-curve of agentic commerce adoption" loading="lazy">
          <figcaption>The S-curve of agentic commerce adoption.</figcaption>
        </figure>

        <h3>What This Means for Sellers</h3>
        <p>[IMPLICATIONS NARRATIVE]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0009.jpg" alt="Four implications for sellers in AI-mediated markets" loading="lazy">
          <figcaption>Four implications for sellers.</figcaption>
        </figure>

        <h3>When Commoditization Hits Hardest</h3>
        <p>[COMMODITIZATION NARRATIVE]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0010.jpg" alt="Three conditions for AI-driven commoditization" loading="lazy">
          <figcaption>Three conditions for commoditization.</figcaption>
        </figure>

        <div class="callout callout-action" role="note">
          <h3>So What?</h3>
          <p>[ACTION CONTENT]</p>
        </div>

        <blockquote class="pull-quote">
          <p>"Brands are no longer competing for shelf space. They are competing to be selected by the agent."</p>
          <cite>Laura Stevens</cite>
        </blockquote>
      </section>

      <!-- ======== QUOTE DIVIDER: Control -> Competition ======== -->
      <div class="quote-divider" role="separator" aria-label="Chapter transition: Competition">
        <p class="divider-text">[QUOTE FROM SLIDE 11]</p>
      </div>

      <!-- ======== SECTION 4: COMPETITION ======== -->
      <section id="competition" class="content-section chapter-section" aria-labelledby="s4-heading">
        <span class="section-label">04</span>
        <h2 id="s4-heading">Barriers Collapse: The New Competitor is Leaner Than You Think</h2>

        <p>[INTRO NARRATIVE 1]</p>
        <p>[INTRO NARRATIVE 2]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0012.jpg" alt="Three forces collapsing barriers to entry" loading="lazy">
          <figcaption>Three forces collapsing barriers to entry.</figcaption>
        </figure>

        <h3>Case Studies</h3>

        <article class="case-study-card">
          <h4>B44</h4>
          <div class="case-metrics" role="list">
            <div class="metric" role="listitem"><span class="metric-value">$80M</span><span class="metric-label">Exit</span></div>
            <div class="metric" role="listitem"><span class="metric-value">&lt;10</span><span class="metric-label">People</span></div>
            <div class="metric" role="listitem"><span class="metric-value">$3.5M</span><span class="metric-label">ARR (6 months)</span></div>
            <div class="metric" role="listitem"><span class="metric-value">$0</span><span class="metric-label">Outside Capital</span></div>
          </div>
          <p>[CASE STUDY NARRATIVE]</p>
        </article>

        <article class="case-study-card">
          <h4>Basis AI</h4>
          <div class="case-metrics" role="list">
            <div class="metric" role="listitem"><span class="metric-value">$1B</span><span class="metric-label">Valuation</span></div>
            <div class="metric" role="listitem"><span class="metric-value">Lean</span><span class="metric-label">Team</span></div>
          </div>
          <p>[CASE STUDY NARRATIVE]</p>
        </article>

        <div class="callout callout-action" role="note">
          <h3>So What?</h3>
          <p>[ACTION CONTENT]</p>
        </div>

        <blockquote class="pull-quote">
          <p>"When the cost of building drops, barriers to entry fall."</p>
          <cite>Laura Stevens</cite>
        </blockquote>
      </section>

      <!-- ======== QUOTE DIVIDER: Competition -> Value ======== -->
      <div class="quote-divider" role="separator" aria-label="Chapter transition: Value">
        <p class="divider-text">[QUOTE FROM SLIDE 13]</p>
      </div>

      <!-- ======== SECTION 5: VALUE ======== -->
      <section id="value" class="content-section chapter-section" aria-labelledby="s5-heading">
        <span class="section-label">05</span>
        <h2 id="s5-heading">Value Moves: The Era of Billing for Effort is Over</h2>

        <p>[INTRO NARRATIVE 1]</p>
        <p>[INTRO NARRATIVE 2]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0014.jpg" alt="Human-time monetization erodes as AI replicates cognitive labour" loading="lazy">
          <figcaption>Human-time monetization erodes.</figcaption>
        </figure>

        <h3>From Products to Outcomes</h3>
        <p>[ASSET-SHIFT NARRATIVE]</p>

        <div class="callout callout-action" role="note">
          <h3>So What?</h3>
          <p>[ACTION CONTENT]</p>
        </div>

        <blockquote class="pull-quote">
          <p>"Why would I pay 5,000 euros for a market analysis if AI can produce a comparable report in minutes?"</p>
          <cite>Laura Stevens</cite>
        </blockquote>
      </section>

      <!-- ======== SECTION 6: DISRUPTION INDEX ======== -->
      <section id="disruption-index" class="content-section chapter-section" aria-labelledby="s6-heading">
        <span class="section-label">06</span>
        <h2 id="s6-heading">Is Your Business Model at Risk?</h2>

        <p>[INTRO NARRATIVE]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0015.jpg" alt="Is your model at risk? Section divider" loading="lazy">
          <figcaption>Is your model at risk?</figcaption>
        </figure>

        <div class="disruption-grid" role="list">
          <article class="dimension-card" role="listitem">
            <span class="dimension-number">01</span>
            <h3 class="dimension-title">Operational Exposure</h3>
            <p class="dimension-desc">[DESCRIPTION]</p>
          </article>
          <article class="dimension-card" role="listitem">
            <span class="dimension-number">02</span>
            <h3 class="dimension-title">Business Model Vulnerability</h3>
            <p class="dimension-desc">[DESCRIPTION]</p>
          </article>
          <article class="dimension-card" role="listitem">
            <span class="dimension-number">03</span>
            <h3 class="dimension-title">Distribution Disintermediation</h3>
            <p class="dimension-desc">[DESCRIPTION]</p>
          </article>
          <article class="dimension-card" role="listitem">
            <span class="dimension-number">04</span>
            <h3 class="dimension-title">AI Capability Maturity</h3>
            <p class="dimension-desc">[DESCRIPTION]</p>
          </article>
          <article class="dimension-card" role="listitem">
            <span class="dimension-number">05</span>
            <h3 class="dimension-title">AI-Native Entry Barriers</h3>
            <p class="dimension-desc">[DESCRIPTION]</p>
          </article>
          <article class="dimension-card" role="listitem">
            <span class="dimension-number">06</span>
            <h3 class="dimension-title">Differentiation Erosion</h3>
            <p class="dimension-desc">[DESCRIPTION]</p>
          </article>
          <article class="dimension-card" role="listitem">
            <span class="dimension-number">07</span>
            <h3 class="dimension-title">Customer Acceptance</h3>
            <p class="dimension-desc">[DESCRIPTION]</p>
          </article>
          <article class="dimension-card" role="listitem">
            <span class="dimension-number">08</span>
            <h3 class="dimension-title">Regulatory Friction</h3>
            <p class="dimension-desc">[DESCRIPTION]</p>
          </article>
        </div>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0016.jpg" alt="BOI's AI Disruption Exposure Index: 8 factors" loading="lazy">
          <figcaption>BOI's AI Disruption Exposure Index.</figcaption>
        </figure>

        <div class="callout callout-note" role="note">
          <p>"Regulation is often a delay mechanism but it's never a permanent shield."</p>
        </div>
      </section>

      <!-- ======== SECTION 7: HOW TO RESPOND ======== -->
      <section id="how-to-respond" class="content-section chapter-section" aria-labelledby="s7-heading">
        <span class="section-label">07</span>
        <h2 id="s7-heading">How to Respond: Three Tracks, One Direction</h2>

        <p>[INTRO NARRATIVE 1]</p>
        <p>[INTRO NARRATIVE 2]</p>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0017.jpg" alt="How to respond: section divider" loading="lazy">
          <figcaption>How to respond.</figcaption>
        </figure>

        <div class="track-grid" role="list">
          <article class="track-card" role="listitem">
            <span class="track-number">Track 1</span>
            <h3 class="track-title">Strategic Reinvention</h3>
            <p class="track-desc">[DESCRIPTION]</p>
          </article>
          <article class="track-card" role="listitem">
            <span class="track-number">Track 2</span>
            <h3 class="track-title">Workflow Redesign</h3>
            <p class="track-desc">[DESCRIPTION]</p>
          </article>
          <article class="track-card" role="listitem">
            <span class="track-number">Track 3</span>
            <h3 class="track-title">Operating Model Redesign</h3>
            <p class="track-desc">[DESCRIPTION]</p>
          </article>
        </div>

        <figure class="slide-card">
          <img src="../assets/slides/slide_0018.jpg" alt="Three Tracks of AI-First Transformation" loading="lazy">
          <figcaption>Three Tracks of AI-First Transformation.</figcaption>
        </figure>

        <div class="callout callout-action" role="note">
          <h3>So What?</h3>
          <p>[ACTION CONTENT]</p>
        </div>

        <blockquote class="pull-quote pull-quote-featured">
          <p>"AI is not a technology shift. It is a market shift. And market shifts don't reward optimization. They reward reinvention."</p>
          <cite>Laura Stevens</cite>
        </blockquote>
      </section>

      <!-- ======== QUOTE DIVIDER: Response -> Q&A ======== -->
      <div class="quote-divider" role="separator" aria-label="Chapter transition: Q&A">
        <p class="divider-text">[CLOSING STATEMENT FROM SLIDE 19]</p>
      </div>

      <!-- ======== Q&A HIGHLIGHTS ======== -->
      <section id="qa" class="content-section qa-section" aria-labelledby="qa-heading">
        <span class="section-label">Q&A</span>
        <h2 id="qa-heading">Q&A Highlights</h2>
        <p class="qa-context">Key exchanges from the live session with Nick.</p>

        <article class="qa-item">
          <p class="qa-question">"What does this mean for professional services and digital agencies?"</p>
          <blockquote class="qa-answer">
            <p>[LAURA'S ANSWER]</p>
          </blockquote>
        </article>

        <article class="qa-item">
          <p class="qa-question">"Will junior talent still have opportunities?"</p>
          <blockquote class="qa-answer">
            <p>[LAURA'S ANSWER]</p>
          </blockquote>
        </article>

        <article class="qa-item">
          <p class="qa-question">"What makes a company valuable when labour is no longer scarce?"</p>
          <blockquote class="qa-answer">
            <p>[LAURA'S ANSWER]</p>
          </blockquote>
        </article>

        <article class="qa-item">
          <p class="qa-question">"Which sectors feel the most urgency?"</p>
          <blockquote class="qa-answer">
            <p>[LAURA'S ANSWER]</p>
          </blockquote>
        </article>

        <article class="qa-item">
          <p class="qa-question">"Is the bigger risk new entrants or existing competitors adopting AI first?"</p>
          <blockquote class="qa-answer">
            <p>[LAURA'S ANSWER]</p>
          </blockquote>
        </article>
      </section>

      <!-- ======== CLOSING / CTA ======== -->
      <section id="closing" class="content-section closing-section" aria-labelledby="closing-heading">
        <h2 id="closing-heading">The window is open. It won't stay that way.</h2>
        <p>[CLOSING BODY PARAGRAPH]</p>

        <div class="cta-grid">
          <a href="https://www.youtube.com/watch?v=roEXHMC6onQ" class="cta-card" target="_blank" rel="noopener">
            <h3>Watch the Full Webinar</h3>
            <p>45 minutes. No filler.</p>
          </a>
          <a href="#" class="cta-card" target="_blank" rel="noopener">
            <h3>AI Disruption Index</h3>
            <p>Assess where your business model is most exposed.</p>
          </a>
          <a href="#" class="cta-card" target="_blank" rel="noopener">
            <h3>BOI's AI-First Playbook</h3>
            <p>The framework behind the transformation work.</p>
          </a>
          <a href="#" class="cta-card" target="_blank" rel="noopener">
            <h3>Connect with Laura Stevens</h3>
            <p>Continue the conversation on LinkedIn.</p>
          </a>
        </div>
      </section>

    </main>
  </div>

  <!-- ============================================ -->
  <!-- FOOTER                                       -->
  <!-- ============================================ -->
  <footer class="site-footer" role="contentinfo">
    <p class="footer-attribution">Independent companion guide. Not affiliated with Board of Innovation.</p>
    <p class="footer-source">Content compiled from the public webinar "How AI is Disrupting Business Models" by Laura Stevens.</p>
    <p class="footer-year">2026</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

## 7. Keyboard Navigation Considerations

### 7.1 Focus Management
- All interactive elements (links, buttons) are natively focusable
- Focus ring: `outline: 2px solid var(--accent); outline-offset: 2px;` on `:focus-visible`
- Skip-to-content link: `<a href="#main-content" class="skip-link">Skip to content</a>` as first child of `<body>`, visually hidden until focused

### 7.2 Keyboard Shortcuts
- `Escape`: closes mobile nav panel if open
- `Tab`: moves focus through all interactive elements in DOM order
- `Enter` / `Space`: activates buttons (theme toggle, burger menu)

### 7.3 Screen Reader Considerations
- All sections have `aria-labelledby` pointing to their heading
- Slide images have descriptive `alt` text summarising slide content
- Quote dividers have `role="separator"` and `aria-label`
- Nav elements have `aria-label` distinguishing sidebar from mobile panel
- Theme toggle announces current state ("Dark mode enabled" / "Light mode enabled") via `aria-live="polite"` region or toggled `aria-label`
- Mobile nav panel: `aria-hidden="true"` when closed, `"false"` when open. Focus trapped inside panel when open.

### 7.4 Reduced Motion
- Respect `prefers-reduced-motion: reduce`: disable smooth scroll, transition durations set to 0

---

## 8. Component Class Reference

| Class | Element | Purpose |
|---|---|---|
| `.top-bar` | `<header>` | Fixed top bar |
| `.nav-toggle` | `<button>` | Mobile burger menu trigger |
| `.theme-toggle` | `<button>` | Dark/light mode toggle |
| `.sidebar` | `<aside>` | Desktop sticky sidebar |
| `.mobile-nav-overlay` | `<div>` | Dark overlay behind mobile panel |
| `.mobile-nav-panel` | `<nav>` | Slide-in mobile navigation |
| `.nav-list` | `<ol>` | Ordered chapter list |
| `.nav-link` | `<a>` | Individual nav item |
| `.nav-link.active` | `<a>` | Currently visible section |
| `.page-layout` | `<div>` | Grid wrapper: sidebar + main |
| `.main-content` | `<main>` | Primary content area |
| `.hero-section` | `<section>` | Hero with headline + video |
| `.content-section` | `<section>` | Generic content section |
| `.chapter-section` | `<section>` | Numbered chapter section |
| `.section-label` | `<span>` | Pill label (section number or tag) |
| `.slide-card` | `<figure>` | Inline slide with caption (Mode A) |
| `.quote-divider` | `<div>` | Full-bleed slide as separator (Mode B) |
| `.pull-quote` | `<blockquote>` | Highlighted quotation |
| `.pull-quote-featured` | `<blockquote>` | Extra-large closing quote |
| `.callout` | `<div>` | Bordered callout box |
| `.callout-action` | `<div>` | "So What?" action callout |
| `.callout-note` | `<div>` | Informational callout |
| `.act-grid` | `<div>` | Three-column act overview |
| `.act-card` | `<article>` | Individual act card |
| `.shift-grid` | `<div>` | Three-column GPT shifts |
| `.shift-card` | `<div>` | Individual shift card |
| `.track-grid` | `<div>` | Three-column transformation tracks |
| `.track-card` | `<article>` | Individual track card |
| `.disruption-grid` | `<div>` | 2x4 grid of index dimensions |
| `.dimension-card` | `<article>` | Single disruption dimension |
| `.case-study-card` | `<article>` | Case study with metrics |
| `.case-metrics` | `<div>` | Metric row inside case study |
| `.metric` | `<div>` | Single metric (value + label) |
| `.qa-section` | `<section>` | Q&A highlights wrapper |
| `.qa-item` | `<article>` | Single Q&A pair |
| `.qa-question` | `<p>` | Question text |
| `.qa-answer` | `<blockquote>` | Answer text |
| `.closing-section` | `<section>` | CTA section |
| `.cta-grid` | `<div>` | CTA card grid |
| `.cta-card` | `<a>` | Individual CTA link card |
| `.site-footer` | `<footer>` | Page footer |
| `.video-container` | `<div>` | Responsive 16:9 video wrapper |
| `.skip-link` | `<a>` | Accessibility skip-to-content |

---

## 9. Slide Rendering Mode Summary

| Mode | Slides | Rendering | Container |
|---|---|---|---|
| **A: Inline card** | 1, 2, 3, 4, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18 | `<figure>` with `<img>` + `<figcaption>`. Max-width 720px, centered, rounded border, shadow. | `.slide-card` |
| **B: Full-bleed divider** | 11, 13, 19 | Full-width background image with text overlay. 300px min-height, dark scrim, white centered text. | `.quote-divider` |

Slides 5 and 6 are variants of slides 3 and 4 respectively; use whichever version is cleaner. Only display one of each pair.

---

## 10. Total Reading Time Estimate

| Section | Est. Time |
|---|---|
| Hero | - |
| Executive Summary | 2 min |
| Chapter Overview | 1 min |
| 01 The Comfortable Illusion | 3 min |
| 02 The GPT Frame | 3 min |
| 03 Control Shifts | 6 min |
| 04 Competition | 4 min |
| 05 Value | 4 min |
| 06 Disruption Index | 3 min |
| 07 How to Respond | 4 min |
| Q&A Highlights | 3 min |
| Closing | 1 min |
| **Total** | **~34 min** |
