# Layout System Changes

## Summary

The desktop layout has been overhauled to use widescreen real estate more effectively. Content sections widen from 720px to ~1060px, and a new side-by-side grid layout places slide images alongside narrative text instead of stacking them vertically.

---

## HTML Changes Required

### 1. Add `.content-body` wrapper in content sections

For any content section that has both a `.section-narrative` and a `.slide-card`, wrap them together in a `<div class="content-body">`. This enables the CSS Grid side-by-side layout on desktop.

**Before:**
```html
<section id="comfortable-illusion" class="content-section">
  <div class="container">
    <div class="section-header">...</div>
    <div class="section-narrative"><p>...</p></div>
    <div class="slide-card"><img ...></div>
    <div class="pull-quote">...</div>
    <div class="so-what">...</div>
  </div>
</section>
```

**After:**
```html
<section id="comfortable-illusion" class="content-section">
  <div class="container">
    <div class="section-header">...</div>
    <div class="content-body">
      <div class="section-narrative"><p>...</p></div>
      <div class="slide-card"><img ...></div>
    </div>
    <div class="pull-quote">...</div>
    <div class="so-what">...</div>
  </div>
</section>
```

### 2. Sections without a slide-card

For sections that have narrative text but no slide (e.g., GPT Frame section with `.shifts-grid` instead), use the modifier class `content-body--full`:

```html
<div class="content-body content-body--full">
  <div class="section-narrative"><p>...</p></div>
</div>
<!-- shifts-grid, pull-quote, so-what stay outside -->
```

Or simply leave them unwrapped. The `.content-body` wrapper is only needed when you want the side-by-side layout.

### 3. Sections with multiple slides

If a section has multiple `.slide-card` elements, only wrap the first one with the narrative. Additional slides can remain below as full-width elements:

```html
<div class="content-body">
  <div class="section-narrative"><p>...</p></div>
  <div class="slide-card"><!-- primary slide --></div>
</div>
<div class="slide-card"><!-- secondary slide, full width --></div>
<div class="pull-quote">...</div>
```

---

## CSS Changes Summary

### Max-width updates

| Element | Before | After |
|---------|--------|-------|
| `.main-content` | 800px | 100% (fills space beside sidebar) |
| `.content-section .container` | 720px | 1060px |
| `.exec-summary .container` | 720px | 860px |
| `.quick-take .container` | 720px | 800px |
| `.qa-section .container` | 720px | 800px |
| `.hero .container` | 800px | 960px |
| `.closing .container` | 640px | 720px |
| `.overview-grid` | 900px | 1060px |
| `.video-embed` | 720px | 840px |
| `.section-divider-slide` | 720px | 860px |

### New: `.content-body` grid

- Desktop (1025px+): 2-column grid, `1fr 380px`, 48px gap
- Slide card is `position: sticky` so it stays visible while scrolling narrative
- Tablet/mobile: falls back to single-column block layout

### New: Executive summary 2-column text

- Desktop (1025px+): `columns: 2` with column rule
- Font bumped to 17px for editorial feel
- Tablet/mobile: single column

### New: Ultra-wide cap (1600px+)

- Slightly wider max-widths and grid columns
- Prevents content from stretching too wide on 4K displays

---

## Breakpoint summary

| Breakpoint | Layout |
|-----------|--------|
| 1600px+ | Ultra-wide: gently wider caps |
| 1025px - 1599px | Desktop: sidebar + wide content, side-by-side slides |
| 769px - 1024px | Tablet: no sidebar, full-width content, stacked slides |
| 481px - 768px | Mobile: reduced padding, single column |
| ≤480px | Small mobile: minimal padding |

---

## No changes needed

- Sidebar stays at 260px
- Overview cards grid (already 3-col) works well with wider container
- All existing responsive breakpoints preserved
- Dark/light mode unaffected
- Print styles unaffected
