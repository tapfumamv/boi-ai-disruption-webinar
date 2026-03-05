## BOI Site Refinements — Spike

You are the LEAD of a spike team refining the BOI companion site. Sprint 1 is done, the site is live at boi-site.pages.dev. Now we're addressing feedback from Taps (the client).

**Read CLAUDE.md first.** Then read the current site files in `src/` to understand what exists.

### Feedback from Taps (MANDATORY — address ALL of these)

1. **Desktop layout wastes space.** Mobile is great, but desktop has too much empty space. Make better use of screen real estate. Think: wider content areas, side-by-side layouts for slides + narrative, multi-column where appropriate. Study how top editorial sites handle widescreen (Medium, Stratechery, HBR, The Verge, Stripe's docs).

2. **Color palette too dark / too Cisco.** Default to a LIGHTER, cleaner palette. Research the most-read editorial/content sites for inspiration. Think: clean whites, subtle greys, one strong accent color. NOT dark-mode-first. Light mode should be the default and feel premium. Dark mode still available but secondary.

3. **Quick Take (29 bullets) is overwhelming.** 29 bullets in a list doesn't feel "quick." Think of strategies to present the same content without overwhelming:
   - Grouped into 4-5 themed clusters with headers?
   - Progressive disclosure (show 5, expand for more)?
   - Card-based layout instead of a list?
   - Visual timeline?
   - Numbered key insights (top 10) with expandable detail?
   - Some combination?

4. **Animations and visual delights.** The reading experience needs polish. Consider:
   - Scroll-triggered fade-ins for sections
   - Subtle parallax on slide images
   - Animated counters for key stats (B44: 8 people → $80M, etc.)
   - Hover effects on cards/quotes
   - Smooth section transitions
   - Micro-interactions (quote highlight on scroll, progress bar)
   - Icon animations (pulse, draw-in)
   - Keep it tasteful. Stripe, Linear, Vercel-level polish. Not flashy.

5. **Icon pack available.** There's a PPTX icon pack at `assets/icon-pack.pptx` with 14 slides of vector icons (Business, Medical, Educational, Teamwork, Help & Support, Creative Process, Nature, SEO & Marketing categories, ~700 shapes total). The icons are PPTX vector groups, so you'll need to either:
   - Extract relevant ones as SVG (preferred) using python-pptx
   - Or create similar simple SVG icons inline
   - Use icons to enhance section headers, key points, the quick take section
   - Don't overdo it. Strategic placement only.

### Your Team (spawn ALL as teammates)
1. **Visual Designer** — Owns the new color palette, typography refresh, spacing system. Research top editorial sites. Produce a design token set.
2. **Layout Architect** — Owns the desktop layout overhaul. Study widescreen editorial patterns. Design side-by-side slide+narrative layouts, multi-column sections, better use of horizontal space.
3. **Interaction Designer** — Owns all animations and micro-interactions. Scroll-triggered reveals, animated counters, hover effects, progress indicators. CSS animations preferred over JS where possible.
4. **Content Restructurer** — Owns the Quick Take redesign. Find a strategy that makes 29 points digestible. Also look at other sections that could benefit from restructuring.
5. **Icon Specialist** — Extracts or creates SVG icons. Maps icons to sections. Implements them in the HTML.
6. **Frontend Integrator** — Takes everyone's work and integrates it into the existing `src/index.html`, `src/styles.css`, `src/script.js`. Ensures nothing breaks. Tests responsive behavior.

### Deliverable Ownership (ENFORCED — Lead MUST route correctly)
| Deliverable | Owner | Reviewer |
|------------|-------|----------|
| Color palette & design tokens | @visual-designer | @layout-architect |
| Typography & spacing refresh | @visual-designer | @content-restructurer |
| Desktop layout system | @layout-architect | @visual-designer |
| Slide + narrative side-by-side | @layout-architect | @frontend-integrator |
| Multi-column sections | @layout-architect | @visual-designer |
| Scroll animations (CSS/JS) | @interaction-designer | @frontend-integrator |
| Animated stat counters | @interaction-designer | @frontend-integrator |
| Hover effects & micro-interactions | @interaction-designer | @visual-designer |
| Progress bar / scroll indicator | @interaction-designer | @layout-architect |
| Quick Take redesign | @content-restructurer | @visual-designer |
| Section content restructuring | @content-restructurer | @layout-architect |
| SVG icon extraction/creation | @icon-specialist | @visual-designer |
| Icon placement in HTML | @icon-specialist | @content-restructurer |
| Final integration (HTML/CSS/JS) | @frontend-integrator | @layout-architect |
| Cross-browser / responsive testing | @frontend-integrator | @interaction-designer |

### ROLE ENFORCEMENT (Lead reads this)

You (the Lead) are responsible for routing work correctly. Before assigning ANY task:
1. Check the Deliverable Ownership table
2. Assign the task to the listed Owner — not whoever is free
3. If a teammate finishes early, assign them **review work** — NOT implementation in another domain

**Early finishers:** assign them to review others' work or polish their own deliverables.

### Sprint Rules (MANDATORY)
- Read the EXISTING `src/` files first. You're refining, not rebuilding.
- Keep all working content. Don't remove sections or lose editorial text.
- Light mode = default. Dark mode = toggle option.
- Test at 1440px+ for desktop, 768px for tablet, 375px for mobile.
- CSS animations preferred over JS where possible (performance).
- All icons should be inline SVG (not img tags) for color control.
- Triple-gate review: cross-review → Lead review → integration test.

### Research References (for the team)
Study these for inspiration on layout, color, and interactions:
- **stripe.com/docs** — clean layout, great use of space
- **linear.app** — animations, micro-interactions
- **vercel.com** — dark/light mode, typography
- **medium.com** — reading experience, widescreen
- **hbr.org** — editorial layout
- **stratechery.com** — long-form content presentation
- **pudding.cool** — data storytelling, scroll animations

### Deliverables
Updated versions of:
1. `src/index.html` — Restructured layout, icons, Quick Take redesign
2. `src/styles.css` — New palette, spacing, desktop layout, animations
3. `src/script.js` — Intersection observers, counters, interactions

When all refinements are integrated and tested, output: SPIKE COMPLETE
