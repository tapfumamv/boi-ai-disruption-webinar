# CLAUDE.md — BOI Companion Site

## Project Overview
A companion website for Board of Innovation's webinar "How AI is Disrupting Business Models" by Laura Stevens (Managing Director, BOI).

Reference site: https://tapfumamv.github.io/cisco-ai-summit/ (15-speaker conference companion, static HTML)
YouTube video: https://www.youtube.com/watch?v=roEXHMC6onQ

## Available Assets
- `docs/transcript.txt` — Full webinar transcript
- `docs/content-structure.md` — Content strategy & chapter breakdown (from research phase)
- `docs/research.md` — Background research on BOI, Laura Stevens, concepts (from research phase)
- `docs/written-content.md` — Editorial content, exec summary, quick take, section narratives (from research phase)
- `docs/boi-site-plan.md` — Initial site architecture plan (from research phase)
- `assets/slides/slide_0001.jpg` through `slide_0019.jpg` — 19 cropped presentation slides
- `assets/BOI-AI-Disruption-Slides.pdf` — All slides compiled

## Reference Site (Cisco AI Summit)
The Cisco site lives at `/home/claude-dev/workspace/cisco-ai-summit/`. Study it for:
- Design patterns (dark/light mode, responsive layout, typography)
- CSS architecture (custom properties, grid system)
- Navigation patterns
- BUT adapt for single-webinar format (not multi-speaker conference)

## Technical Approach
- Pure static HTML + CSS + vanilla JS (same as Cisco site)
- Single-page scroll with section navigation
- Slides embedded inline with narrative sections
- Dark/light mode toggle
- Mobile-first responsive design
- Will deploy to Cloudflare Pages

## Quality Bar
- Magazine-quality editorial content (HBR meets Stratechery tone)
- Smooth scroll, polished transitions
- Slides must integrate naturally with text (not just dumped in)
- Quote callouts, data visualizations, interactive elements where appropriate
- Must work beautifully on mobile

## Writing Rules
- Never use em dashes (—). Use commas, full stops, colons, semicolons instead.
- Confident editorial voice. Not academic, not corporate.

## File Structure
```
src/
  index.html        — Main site (single page scroll)
  styles.css         — All styles
  script.js          — Interactions (theme toggle, scroll spy, slide viewer)
assets/
  slides/            — Presentation slides (jpg)
reports/
  sprint-1-report.html
docs/
  sprint-1/TEAM-PROMPT.md
```
