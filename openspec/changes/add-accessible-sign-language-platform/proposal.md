# Change: Launch accessibility-first sign-language learning experience with minimalist editorial design

## Why
- The site needs an accessibility-first, sign-language-led learning experience so Deaf and hard-of-hearing learners can confidently navigate and consume content.
- Current specs are empty; we need clear requirements for navigation, hero video, learning pathways, events, and error handling aligned to WCAG 2.2 AA+.
- The visual design should embody a **minimalist editorial aesthetic**—sparse, typography-driven, content-first—rather than a busy card-heavy SaaS look.

## What Changes
- Define a minimalist editorial design system: single accent color (warm teal), restrained palette, generous whitespace, strong typographic hierarchy with a serif/sans pairing.
- Add capability spec for sign-language-first homepage: navigation, hero, learning pathways, featured events, social proof, and feedback—all rendered in an editorial layout style.
- Capture accessibility resilience: captions-first media, contrast fallbacks, broken-link handling, empty states, and reduced-motion safeguards.
- Outline reusable Astro + React component expectations styled for print-inspired, minimal aesthetic rather than card grids.

## Impact
- Affected specs: deliver-sign-language-learning (updated)
- Affected code: `src/layouts`, `src/components` (Hero, NavBar, PathwayCard, VideoCard, EventCard, FeedbackButton/Modal, Testimonial), design tokens/styles, accessibility utilities.

## Editorial Design Principles
1. **Black and white only**: pure monochrome palette—black (`#000000`) on white (`#FFFFFF`) for light mode, white on black for dark mode; no color accents.
2. **Typography-led hierarchy**: elegant serif for headlines (e.g., Cormorant Garamond, Playfair Display), clean sans for body (e.g., Source Sans 3, Instrument Sans); generous line-height (1.7+).
3. **Whitespace rhythm**: 8px base unit, sections breathe with 96-160px vertical padding, cards replaced by open text blocks with subtle dividers.
4. **Content-first layouts**: long-form text, quiet grids, static high-quality imagery—no looping video autoplay by default.
5. **Subtle motion**: fade-ins and staggered reveals, respecting reduced-motion; no flashy transitions.
6. **Understated navigation**: text-only links, minimal icons, generous padding.
