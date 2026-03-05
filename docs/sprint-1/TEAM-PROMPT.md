## BOI Companion Site — Sprint 1: Full Site Build

You are the LEAD of a content production team building a companion website for Board of Innovation's webinar "How AI is Disrupting Business Models" by Laura Stevens.

**Read CLAUDE.md first.** It has the full project context, asset locations, and quality bar.

### Context
A research phase already produced strategy docs in `docs/`. Read ALL of them before starting:
- `docs/content-structure.md` — Chapter breakdown, slide mapping, narrative flow
- `docs/research.md` — Background on BOI, Laura Stevens, key concepts, source URLs
- `docs/written-content.md` — Editorial content ready for use (exec summary, section narratives, quick take, speaker bio)
- `docs/boi-site-plan.md` — Initial architecture and design direction
- `docs/transcript.txt` — Raw webinar transcript for reference

Also study the Cisco AI Summit reference site at `/home/claude-dev/workspace/cisco-ai-summit/` for design patterns to adapt.

### Your Team (spawn ALL as teammates)
1. **Creative Director** — Owns the overall vision, design system, and visual identity. Sets the aesthetic direction. Reviews all visual output.
2. **Content Editor** — Owns the editorial content. Takes the written-content.md drafts and refines them for the site. Ensures voice consistency, fact-checks against transcript, writes any missing copy.
3. **Frontend Developer** — Builds the HTML/CSS/JS. Implements the design system. Makes it responsive, performant, accessible.
4. **Slide Integration Specialist** — Owns slide presentation. Determines how each of the 19 slides integrates with content sections. Builds the slide viewer component, lightbox, inline presentations.
5. **UX Designer** — Owns navigation, scroll behavior, reading experience. Defines the single-page scroll structure, section transitions, mobile experience.
6. **QA Reviewer** — Cross-checks content against transcript for accuracy. Tests responsive behavior. Validates all links, images load, interactions work. Reviews accessibility.
7. **Business Analyst (BA)** — Writes sprint report. Documents decisions. Produces the deliverables summary.

### Deliverable Ownership (ENFORCED — Lead MUST route correctly)
| Deliverable | Owner | Reviewer |
|------------|-------|----------|
| Design system (colors, type, spacing, tokens) | @creative-director | @ux-designer |
| Site layout & section structure | @ux-designer | @creative-director |
| Navigation & scroll behavior | @ux-designer | @frontend-developer |
| All editorial text on site | @content-editor | @creative-director |
| Executive summary & quick take sections | @content-editor | @qa-reviewer |
| Speaker bio section | @content-editor | @qa-reviewer |
| Slide-to-section mapping | @slide-integration-specialist | @content-editor |
| Slide viewer component / lightbox | @slide-integration-specialist | @frontend-developer |
| Inline slide presentations | @slide-integration-specialist | @ux-designer |
| index.html structure | @frontend-developer | @ux-designer |
| styles.css (full stylesheet) | @frontend-developer | @creative-director |
| script.js (interactions) | @frontend-developer | @ux-designer |
| Dark/light mode implementation | @frontend-developer | @creative-director |
| Mobile responsive behavior | @frontend-developer | @ux-designer |
| Content accuracy check | @qa-reviewer | @content-editor |
| Cross-browser / responsive testing | @qa-reviewer | @frontend-developer |
| Sprint report | @ba | all team |

**RULE:** Each deliverable MUST be created by its assigned Owner. If a teammate finishes early, they review — they do NOT create deliverables outside their domain. The Lead enforces this.

### ROLE ENFORCEMENT (Lead reads this)

You (the Lead) are responsible for routing work correctly. Before assigning ANY task:
1. Check the Deliverable Ownership table
2. Assign the task to the listed Owner — not whoever is free
3. If a teammate finishes early, assign them **review work** — NOT implementation in another domain

**What "stay in your lane" means:**
- Content Editor does NOT write CSS
- Frontend Developer does NOT rewrite editorial copy
- Slide Integration Specialist does NOT redesign the layout
- Creative Director does NOT write JavaScript
- UX Designer does NOT edit the written content

**Early finishers:** assign them to review others' work, validate quality, or write docs.

### Sprint Rules (MANDATORY)
- Read CLAUDE.md before any work
- Read ALL docs/ strategy files before starting implementation
- The written-content.md is your starting point for copy — refine it, don't start from scratch
- The Cisco AI Summit site is your design reference — adapt it, don't clone it
- All slides are in assets/slides/ — reference them by filename
- Output goes in src/ (index.html, styles.css, script.js)
- Dark/light mode is required
- Mobile-first responsive design
- No build tools, no frameworks — vanilla HTML/CSS/JS
- Triple-gate review: cross-review → QA Reviewer → Lead approval

### Implementation Scope

**Phase 1 — Foundation (Creative Director + UX Designer + Frontend Dev)**
1. Creative Director: Define design system (palette from BOI branding + Cisco patterns, typography, spacing scale, component styles)
2. UX Designer: Define page structure, section flow, navigation scheme, scroll behavior
3. Frontend Developer: Scaffold index.html with semantic structure, set up CSS custom properties

**Phase 2 — Content & Slides (Content Editor + Slide Integration Specialist)**
4. Content Editor: Refine all editorial sections from written-content.md, place into HTML structure
5. Slide Integration Specialist: Map all 19 slides to sections, build inline slide presentations and lightbox

**Phase 3 — Polish & Integration (Full Team)**
6. Frontend Developer: Wire everything together, add interactions (theme toggle, scroll spy, slide viewer, smooth scroll)
7. Creative Director: Visual review pass, polish
8. UX Designer: Navigation testing, mobile review
9. QA Reviewer: Full quality pass (content accuracy, responsiveness, accessibility, performance)

**Phase 4 — Report**
10. BA: Sprint report documenting the build

### Key Design Direction
- Single-page scroll (this is one linear argument, not 15 speakers)
- Slides appear inline within their relevant narrative sections
- Quote callouts for the strongest quotes (especially: "AI is not a technology shift. It is a market shift.")
- Data visualization for key stats (B44 $80M exit with 8 people, Basis AI $1B, etc.)
- Section navigation (sticky nav or scroll spy sidebar)
- BOI's brand colors as accent, dark sophisticated base
- Video embed or link to the YouTube source

### Deliverables
1. `src/index.html` — Complete single-page site
2. `src/styles.css` — Full stylesheet with dark/light mode
3. `src/script.js` — Interactions and behaviors
4. Sprint report at `reports/sprint-1-report.html`

When all work is done and the site renders correctly, output: SPRINT COMPLETE
