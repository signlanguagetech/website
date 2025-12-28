## 1. Planning and setup
- [x] 1.1 Confirm design tokens and contrast fallbacks for WCAG 2.2 AA+.
- [x] 1.2 Define reusable Astro + React components (Hero, NavBar with skip link, PathwayCard, VideoCard with captions badge, EventCard, FeedbackButton/Modal, Testimonial).
- [x] 1.3 Align navigation labels and content pathways to action-first IA (Start Learning, Watch in Sign Language, Join Events, Meet the Team, Feedback).

## 2. Implementation
- [x] 2.1 Implement layout shell with skip link, focus-visible rings, and reduced-motion toggle respected by media.
- [x] 2.2 Build Hero with captioned loop video, headline/subheadline, Start Learning primary CTA, Watch in Sign Language secondary CTA, and fallback overlay when captions/transcript missing.
- [x] 2.3 Build Pathway cards for Watch Videos, Learn Terms, Join Live Sessions with clear CTAs and keyboard/touch targets.
- [x] 2.4 Build VideoCard pattern with captions-required gating, transcript links, and error states for blocked media.
- [x] 2.5 Build Featured Event card list with date/time/location tags, alt text, empty state, and broken-link handling.
- [x] 2.6 Add social proof/testimonial strip emphasizing Deaf technologists; ensure alt text and contrast.
- [x] 2.7 Add Feedback button/modal with privacy notice, consent copy, aria-live status, and safe submission handling.

## 3. Validation
- [x] 3.1 Run `openspec validate add-accessible-sign-language-platform --strict`.
- [x] 3.2 Run `pnpm build` (astro check) and manual a11y QA (keyboard, screen reader landmarks, captions presence, contrast fallback, reduced motion).

