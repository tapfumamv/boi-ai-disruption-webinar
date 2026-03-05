# BOI Webinar Companion Site — Plan Document
**"How AI is Disrupting Business Models"**
*Laura Stevens, Managing Director, Board of Innovation*

**Prepared:** 2026-03-05
**Status:** Spike / ready to brief dev team

---

## 1. Context & Framing

### Source Material
- **Webinar:** ~45 min presentation + ~10 min live Q&A
- **Speaker:** Laura Stevens, MD at Board of Innovation (BOI)
- **YouTube:** https://www.youtube.com/watch?v=roEXHMC6onQ
- **Slides:** 19 cropped slide images + PDF (`BOI-AI-Disruption-Slides.pdf`)
- **Transcript:** Full raw transcript (`/tmp/yt-transcript.txt`)

### Reference Site (Cisco AI Summit)
- Repo: https://github.com/tapfumamv/cisco-ai-summit
- Live: https://tapfumamv.github.io/cisco-ai-summit/
- **Stack:** Pure static HTML + CSS + vanilla JS (no framework, no build step)
- **Design:** Dark/light mode, Inter + Playfair Display fonts, teal (#4ecdc4) accent, magazine-style
- **Structure:** `index.html` (speaker grid) + `speakers/[slug].html` per speaker
- **Pattern per speaker:** Fixed top bar (prev/next) + left sidebar (bio, video link, section nav) + main content (tabs: Narrative | Quick Take)

---

## 2. Key Differences: Cisco vs BOI

| Dimension | Cisco AI Summit | BOI Webinar |
|---|---|---|
| Format | Multi-speaker conference, 15+ sessions | Single speaker, one webinar |
| Duration | Full day livestream | 45 min talk + 10 min Q&A |
| Content units | Per-speaker pages | Per-chapter sections |
| Visual assets | Speaker headshots only | 19 presentation slides |
| Navigation | Between speakers | Between content chapters |
| Video | Long livestream, timestamped segments | Single YouTube video |
| Tone | Summit/conference energy | Expert lecture, boardroom advisory |

**The core adaptation:** Cisco needs an *index + many detail pages* because it has many equal-weight subjects (speakers). BOI is a *single linear narrative* — one talk, one voice, one argument. The site should honour that linearity while making it easy to jump to any section.

---

## 3. Content Structure — The Narrative Arc

The webinar has a clear 3-act structure. This becomes the site's backbone:

### Act 1 — The Problem (Slides 1-3)
- **The Comfortable Illusion** — most companies treat AI as a productivity tool, not a structural shift
- **AI as General Purpose Technology** — like the internet or electricity; reshapes industries, not just processes
- Three structural shifts it brings: new business models, new cost structures, new competitive advantages

### Act 2 — The Disruption (Slides 4-16, ~28 min)
Three deep-dives, each with its own slides:

**Chapter 1: Control Reallocation** (Slides 4-10)
- AI shifts power to whoever owns the algorithmic layer
- Three modes: Shaped (AI influences decisions), Executed (AI acts autonomously), Removed (AI eliminates intermediary layers)
- Agentic commerce evolution: Chatbot → Shopping Assistant → AI Storefront → Agent-to-Agent
- S-curve timeline: Purchase-in-Chat (now) → Autonomous Agents → Agent-to-Agent
- Implications for sellers: optimize for agents not humans, margin erosion, data monetization risk
- When commoditization hits hardest: comparable markets, price-driven, high-frequency decisions

**Chapter 2: Barriers to Entry Collapse** (Slides 11-13)
- AI lowers the cost of building, scaling, coordinating
- New AI-native competitors: solo unicorns, lean teams
- Case study: B44 (8 people, $18M ARR in 6 months, acquired for $80M via vibe coding)
- Case study: Basis AI (1B valuation, lean team, autonomous accounting agents)

**Chapter 3: Value Perception Shift** (Slides 14-16)
- When AI generates outputs instantly, customers stop paying for effort
- Shift: time monetization → outcome monetization
- Two manifestations: direct replacement (basic design, translation, entry-level legal) and human-time erosion (consulting, legal, accounting)
- Asset-based shift: selling machines → selling uptime/outcomes (Rolls-Royce "Power by the Hour")
- SaaS disruption: barriers fall, per-seat pricing breaks down
- Service-as-software model

### Act 3 — How to Respond (Slides 17-19, last ~8 min)
- **AI Disruption Index** — 8-dimension self-assessment framework (operational exposure, business model vulnerability, distribution disintermediation, AI capability maturity, AI-native entry barriers, differentiation erosion, customer acceptance, regulatory friction)
- **Three Tracks of AI-First Transformation:**
  - Track 1: Strategic Reinvention (redefine where you play and how you win)
  - Track 2: Workflow Redesign (rebuild delivery economics)
  - Track 3: Operating Model Redesign (roles, governance, culture, capabilities)
- **Closing statement:** "AI is not a technology shift. It is a market shift. Market shifts don't reward optimization, they reward reinvention."

### Q&A Section (~10 min, with Nick)
Key questions worth surfacing:
- Impact on professional services/digital agencies
- Will we still have jobs in 3 years?
- What about junior talent pipelines?
- How to offer value when outputs cost near-zero to produce
- Which sectors feel the most urgency?
- Risk of existing competitors adopting AI-first before you do

---

## 4. Site Structure

### Recommendation: Single-Page Scroll with Deep-Link Anchors

**Why single-page (not multi-page like Cisco):**
A webinar is one continuous argument. Breaking it into multiple HTML files would fracture the reading experience. The right metaphor is a long-form magazine article or an interactive essay — scroll-driven, with a persistent sidebar for orientation.

**Exception:** The Q&A is a distinct section with different energy (conversational, reactive). It can live at the bottom of the same page or as a lightweight modal/drawer.

### Page/Section Hierarchy

```
/ (index.html)
├── Hero — Speaker intro, video embed, one-line thesis
├── Overview — 3-act structure visual (like a table of contents)
├── Chapter 1: Control [anchor: #control]
│   ├── Section intro narrative
│   ├── Slide: AI reallocates control (Slide 4)
│   ├── Section: Shaped / Executed / Removed
│   ├── Slide: Agentic commerce (Slide 5-6)
│   ├── Slide: Commerce S-curve (Slide 7)
│   ├── Slide: Seller implications (Slide 8)
│   └── Slide: When commoditization hits (Slide 9)
├── Chapter 2: Competition [anchor: #competition]
│   ├── Section intro narrative
│   ├── Slide: New competitors (Slide 11)
│   ├── Case study: B44
│   └── Case study: Basis AI
├── Chapter 3: Value [anchor: #value]
│   ├── Section intro narrative
│   ├── Slide: What customers pay for (Slide 14)
│   ├── Slide: Service → software shift
│   └── Slide: Asset → outcome shift
├── Assess Your Risk [anchor: #assess]
│   ├── AI Disruption Index visual (Slide 16)
│   └── Interactive: 8-dimension checklist
├── How to Respond [anchor: #respond]
│   ├── Three tracks visual (Slide 18)
│   └── Closing statement (Slide 19 quote)
└── Q&A Highlights [anchor: #qa]
    ├── 4-5 key questions with Laura's answers (summarized)
    └── Link to full video
```

---

## 5. Design Approach

### What to Borrow from Cisco

1. **CSS architecture** — Use the same CSS custom properties pattern (dark/light mode via `[data-theme="light"]`). Reuse the variable naming convention exactly.
2. **Typography** — Inter for body/UI, Playfair Display for pull quotes and chapter headings. Same Google Fonts import.
3. **Accent color** — Keep teal (#4ecdc4 / #2ba89e light). BOI's brand is blue/purple, but since this is a companion site in the same family, the teal ties them together visually. If Taps wants BOI-branded instead, swap to BOI's blue (#1a56db or similar).
4. **Fixed top bar** — Minimal, uppercase, accent-colored. Shows site name + dark/light toggle.
5. **Sticky sidebar** — Left sidebar with chapter nav that highlights active section on scroll (IntersectionObserver). Same collapsible mobile pattern.
6. **Narrative section style** — Numbered sections (01, 02...) with the accent-color label pill. Same `<strong>` highlights and inline `<span class="highlight">` treatment.
7. **Card components** — The rounded, bordered card style for slides and callouts.
8. **Mobile responsiveness** — Same breakpoint approach, sidebar collapses to a drawer.
9. **Footer** — Same attribution style (Not affiliated with BOI, built from public webinar).

### What to Change for BOI

1. **No speaker grid** — No index page needed. The hero IS the entry point.
2. **Slide integration** — This is the biggest difference. Slides are embedded inline as the reader scrolls through sections. They're not decoration — they're primary evidence for the argument being made.
3. **Chapter navigation replaces speaker navigation** — The top bar shows prev/next *chapter*, not prev/next speaker. Or: the top bar shows just site identity + dark mode toggle, and navigation lives in the sidebar only.
4. **Video embed at top** — Full YouTube embed in the hero or in a sticky video module, so readers can watch alongside reading.
5. **Quote slides as full-bleed breaks** — The dark teal "statement" slides (slides 11, 13, 19) become full-bleed section dividers. Renders the slide image at full width as a visual separator. Very magazine.
6. **Q&A treatment** — Presented as a "conversation" card format: question in italic, answer as a pull quote. More dialogue-y than the lecture sections above.
7. **BOI brand acknowledgment** — Clear attribution: "Based on BOI's public webinar. Not affiliated with or endorsed by Board of Innovation."

---

## 6. Slide Integration Strategy

### Principle: Slides as Visual Evidence, Not Interruptions

Each slide image appears at the natural point in the narrative where Laura referenced it. The layout:

```
[Narrative paragraph — sets up the concept]
[Slide image — confirms/extends it visually]
[Narrative paragraph — continues from the slide]
```

### Slide Rendering Modes

**Mode A — Inline card (most slides)**
- Slide renders inside a rounded bordered card (like Cisco's card components)
- Max-width: 720px, centered in main content
- Caption below: "Slide [N]: [title]" in muted text
- On mobile: full-width, scrollable

**Mode B — Full-bleed quote divider (statement slides)**
- Slides 11, 13, 19 are dark background with single white statements
- Render as full-width section dividers (100vw, 300px tall, background-image: cover)
- No caption needed — the statement IS the content
- Acts as chapter break

**Mode C — Comparison card (multi-panel slides)**
- Slides like the 3-column cards (Control: Shaped/Executed/Removed) render as grid cards
- Extract the visual structure and re-render in HTML (don't just show the image)
- This makes it mobile-friendly and text-selectable
- The slide image becomes a small "view original" thumbnail

**Mode D — Framework/Index slides**
- The 8-dimension AI Disruption Index (Slide 16) and 3 Tracks (Slide 18) are interactive
- Render as HTML grids/cards, not just images
- Hoverable/expandable to show more detail from the transcript

---

## 7. Interactive Features

### 7.1 Sticky Sidebar Chapter Navigation
- Highlights active chapter as you scroll (IntersectionObserver, same pattern as Cisco)
- Collapsible on mobile (hamburger)
- Shows estimated reading time per chapter ("~6 min")

### 7.2 Dark / Light Mode Toggle
- Same implementation as Cisco: `data-theme` attribute on `<html>`, localStorage persistence
- Sun/moon icon in top bar

### 7.3 Video Reference Links
- Each chapter has a "Watch this section" link that deep-links to the YouTube video with a `?t=` timestamp
- Timestamps to extract from transcript (approximate):
  - Act 1 / Intro: t=0
  - Control chapter: ~t=480 (8 min)
  - Competition chapter: ~t=1500 (25 min)
  - Value chapter: ~t=2100 (35 min)
  - Disruption Index: ~t=2700 (45 min)
  - Response/3 Tracks: ~t=2900 (48 min)
  - Q&A: ~t=3200 (53 min)

### 7.4 AI Disruption Index — Interactive Self-Assessment (Nice to Have)
- The 8 dimensions rendered as interactive cards
- User can mark each dimension (Low / Medium / High risk)
- Running score updates a simple risk gauge
- No data stored, purely frontend JS
- CTA at the bottom: "Talk to BOI about your disruption risk" (links to BOI site)

### 7.5 Key Quotes — Highlighted Pull Quotes
- 3-4 stand-out quotes from the transcript rendered as large pull quotes
- Same highlight treatment as Cisco's `<span class="highlight">`

### 7.6 Share / Copy Section
- "Copy link to this section" button on each chapter heading (clipboard API)
- Twitter/LinkedIn share with pre-filled text

---

## 8. Technical Approach

### Recommendation: Static HTML (same as Cisco)

**Rationale:**
- Zero infra cost (GitHub Pages)
- No build step = no dependencies to break
- Same deployment model as the Cisco site — consistent with Taps' setup
- Content is stable (one webinar, not updated live)

### File Structure

```
boi-ai-disruption/
├── index.html              ← Single main page
├── css/
│   └── shared.css          ← All styles (fork from Cisco, adapt)
├── js/
│   └── main.js             ← Scroll nav, dark mode, video timestamps
├── slides/
│   ├── slide_01.jpg        ← Optimized copies of cropped slides
│   ├── slide_02.jpg
│   └── ...
├── favicon.svg
└── README.md
```

### CSS Strategy
- Fork `shared.css` from Cisco directly
- Remove speaker-grid-specific rules
- Add new component classes:
  - `.chapter-break` (full-bleed divider)
  - `.slide-card` (inline slide with caption)
  - `.slide-card.comparison` (for multi-column slides)
  - `.qa-item` (question/answer pair)
  - `.disruption-index-grid` (8-dimension framework)
  - `.track-row` (3 tracks)
  - `.video-timestamp-link` (chapter video links)

### Performance
- Optimize slide images: resize to max 1200px wide, compress to ~80KB each
- Lazy-load slides below the fold
- Preload first 2-3 slides for instant LCP

---

## 9. Page Mockup Descriptions

### 9.1 Hero Section

```
┌─────────────────────────────────────────────────────────────┐
│  [TOP BAR: BOI AI DISRUPTION WEBINAR        ☀/🌙 toggle]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  INDEPENDENT COMPANION GUIDE           [pill label]        │
│                                                             │
│  How AI is Disrupting                                       │
│  Business Models                        [large heading]     │
│                                                             │
│  A deep-dive into the structural forces reshaping          │
│  markets — and what to do about them.    [subtitle]        │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │   [YOUTUBE EMBED — 560x315 or responsive]          │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  Laura Stevens · Managing Director, Board of Innovation    │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━     │
│  45 min · 19 slides · 3 acts · 1 core argument            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 9.2 Act Overview (Table of Contents)

```
┌───────────────────────────────────────────────────────────┐
│  THE ARGUMENT IN THREE ACTS                               │
│                                                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐               │
│  │  ACT 1   │  │  ACT 2   │  │  ACT 3   │               │
│  │ The      │  │ The      │  │ How to   │               │
│  │ Problem  │  │ Disrupt  │  │ Respond  │               │
│  │          │  │ -ion     │  │          │               │
│  │ Comfort- │  │ Control  │  │ 3-Track  │               │
│  │ able     │  │ Competit.│  │ Transform│               │
│  │ Illusion │  │ Value    │  │ ation    │               │
│  └──────────┘  └──────────┘  └──────────┘               │
│                                                           │
│  ↓ Scroll to read, or jump: #control #competition #value  │
└───────────────────────────────────────────────────────────┘
```

### 9.3 Main Reading Layout (Chapter View)

```
┌───────────────────────────────────────────────────────────────┐
│  [TOP BAR]                                                    │
├────────────┬──────────────────────────────────────────────────┤
│  SIDEBAR   │  MAIN CONTENT                                    │
│            │                                                   │
│  Contents  │  ┌─────────────────────────────────────────┐    │
│  ───────── │  │  CHAPTER 1                   [Control]  │    │
│  ▸ Act 1   │  │  01  The Algorithmic Layer              │    │
│    Illusion│  └─────────────────────────────────────────┘    │
│    GPT     │                                                   │
│  ▸ Act 2   │  [Narrative paragraph...]                        │
│    Control │                                                   │
│    Compet. │  ┌─────────────────────────────────────────┐    │
│    Value   │  │                                         │    │
│  ▸ Act 3   │  │  [SLIDE IMAGE — mode A inline card]     │    │
│    Index   │  │                                         │    │
│    Respond │  │  Slide 4: AI reallocates control...     │    │
│  ▸ Q&A     │  └─────────────────────────────────────────┘    │
│            │                                                   │
│  ─────     │  [Narrative continues...]                        │
│  Watch     │                                                   │
│  this      │  ▶ Watch this section [t=8:00]                   │
│  chapter   │                                                   │
│  [t=8:00]  │  ════ [FULL-BLEED QUOTE DIVIDER] ════           │
│            │  "AI doesn't just shift power within markets.    │
│            │   It changes who gets to participate."           │
│            │                                                   │
└────────────┴──────────────────────────────────────────────────┘
```

### 9.4 AI Disruption Index Section

```
┌───────────────────────────────────────────────────────────┐
│  IS YOUR BUSINESS MODEL AT RISK?                          │
│                                                           │
│  BOI's 8-Dimension Disruption Index                       │
│                                                           │
│  ┌──────────────────┐  ┌──────────────────┐              │
│  │  01              │  │  02              │              │
│  │  Operational     │  │  Business Model  │              │
│  │  Exposure        │  │  Vulnerability   │              │
│  │  [LOW/MED/HIGH]  │  │  [LOW/MED/HIGH]  │              │
│  └──────────────────┘  └──────────────────┘              │
│  ... (8 total, 2-column grid)                             │
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │  YOUR RISK SIGNAL                                 │   │
│  │  [Simple visual gauge — low/medium/high]          │   │
│  │  "Talk to BOI → boiagency.com"                   │   │
│  └───────────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────────────┘
```

### 9.5 Q&A Section

```
┌───────────────────────────────────────────────────────────┐
│  Q&A HIGHLIGHTS                                           │
│  With Nick (BOI) · Live questions from ~200 attendees     │
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │  Q  "What does this mean for professional         │   │
│  │     services and digital agencies?"               │   │
│  │                                                   │   │
│  │     Laura: "We're eating our own breakfast.       │   │
│  │     Actively applying our own transformation      │   │
│  │     frameworks to how we operate..."              │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  ┌───────────────────────────────────────────────────┐   │
│  │  Q  "Will junior talent still have opportunities?"│   │
│  │     ...                                           │   │
│  └───────────────────────────────────────────────────┘   │
│                                                           │
│  [Watch full Q&A on YouTube →]                           │
└───────────────────────────────────────────────────────────┘
```

---

## 10. Content Extraction Tasks for Dev Team

The dev team will need these prepared before building:

### 10.1 Narrative Content (Editorial Work)
For each chapter section, prepare:
- A 2-3 sentence intro paragraph (sets up the concept in plain language)
- 1-3 narrative paragraphs per slide (what Laura said, cleaned up from transcript)
- 1-2 pull quotes per chapter (best lines from the transcript)
- Chapter summary (3-4 bullets, like Cisco's "Key Takeaways")

**Already available:** Full transcript at `/tmp/yt-transcript.txt` — clean this up, removing filler ("um", "uh"), tightening phrasing. The argument is strong; the transcript just needs editorial polish.

### 10.2 Slide Metadata
For each of the 19 slides:
- Slide number and title
- Which render mode (A/B/C/D per section 6)
- Anchor/chapter it belongs to
- Caption text

### 10.3 Video Timestamps
Scrub the YouTube video and note exact timestamps for:
- Each chapter start
- Each key case study (B44, Basis AI, Sephora, Rolls-Royce)
- Q&A start

### 10.4 Slide Optimization
- Resize all 19 slides to max 1200px wide
- Compress (target ~60-80KB per image)
- Rename to semantic names (e.g., `control-algorithmic-layer.jpg`)

---

## 11. Decisions Needed from Taps

1. **Accent color:** Keep Cisco teal to match family look, or switch to BOI blue/purple to match their brand?
2. **Site URL:** GitHub Pages under `tapfumamv`? Or different repo/subdomain?
3. **Attribution style:** "Independent companion site" (like Cisco) or "Based on BOI's public webinar — not affiliated"?
4. **Interactive disruption index:** Build the interactive JS self-assessment, or just render the slide as a static visual?
5. **Slide rendering:** For the multi-panel slides (Shaped/Executed/Removed), rebuild in HTML/CSS or just show the image?
6. **Q&A inclusion:** Full Q&A with all questions, or just highlight 4-5?

---

## 12. Build Estimate

| Task | Effort |
|---|---|
| Fork and adapt Cisco CSS | 1-2h |
| Hero + overview section | 1h |
| 3 chapter sections with slides | 3-4h |
| Disruption Index section | 1-2h |
| Q&A section | 1h |
| Mobile polish | 1-2h |
| Slide image optimization | 30 min |
| Editorial content prep (transcript → narrative) | 2-3h |
| **Total** | **~12-15h** |

Well within a single sprint. Could be done by one agent (Claude Code) in a focused session.

---

## 13. Summary

The BOI webinar has strong content — a clear argument, good slides, real case studies. The Cisco site provides a proven design system. The adaptation is mostly about:

1. **Linearising** — one page, scroll-driven, not a grid of cards
2. **Integrating slides** — they're central, not decorative
3. **Preserving the argument's momentum** — each section flows into the next, mirroring how Laura structured the talk
4. **Adding the video** — the YouTube embed makes this a genuine companion site, not just a summary

The technical lift is modest. The editorial work (transcript → clean narrative) is the real effort.
