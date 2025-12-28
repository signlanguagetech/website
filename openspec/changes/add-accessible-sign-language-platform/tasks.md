## 1. Planning and setup
- [ ] 1.1 Confirm design tokens and contrast fallbacks for WCAG 2.2 AA+.
- [ ] 1.2 Define reusable Astro + React components (Hero, NavBar with skip link, PathwayCard, VideoCard with captions badge, EventCard, FeedbackButton/Modal, Testimonial).
- [ ] 1.3 Align navigation labels and content pathways to action-first IA (Start Learning, Watch in Sign Language, Join Events, Meet the Team, Feedback).

## 2. Implementation
- [ ] 2.1 Implement layout shell with skip link, focus-visible rings, and reduced-motion toggle respected by media.
- [ ] 2.2 Build Hero with captioned loop video, headline/subheadline, Start Learning primary CTA, Watch in Sign Language secondary CTA, and fallback overlay when captions/transcript missing.
- [ ] 2.3 Build Pathway cards for Watch Videos, Learn Terms, Join Live Sessions with clear CTAs and keyboard/touch targets.
- [ ] 2.4 Build VideoCard pattern with captions-required gating, transcript links, and error states for blocked media.
- [ ] 2.5 Build Featured Event card list with date/time/location tags, alt text, empty state, and broken-link handling.
- [ ] 2.6 Add social proof/testimonial strip emphasizing Deaf technologists; ensure alt text and contrast.
- [ ] 2.7 Add Feedback button/modal with privacy notice, consent copy, aria-live status, and safe submission handling.

## 3. Validation
- [ ] 3.1 Run `openspec validate add-accessible-sign-language-platform --strict`.
- [ ] 3.2 Run `pnpm build` (astro check) and manual a11y QA (keyboard, screen reader landmarks, captions presence, contrast fallback, reduced motion).

