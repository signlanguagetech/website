# Change: Launch accessibility-first sign-language learning experience

## Why
- The site needs an accessibility-first, sign-language-led learning experience so Deaf and hard-of-hearing learners can confidently navigate and consume content.
- Current specs are empty; we need clear requirements for navigation, hero video, learning pathways, events, and error handling aligned to WCAG 2.2 AA+.

## What Changes
- Add a new capability spec defining sign-language-first homepage structure, navigation, hero, learning pathways, featured events, social proof, and feedback loops.
- Capture accessibility resilience requirements: captions-first media, contrast fallbacks, broken-link handling, empty states for events, and reduced-motion safeguards.
- Outline reusable Astro + React component expectations (Hero, NavBar, PathwayCard, VideoCard, EventCard, Feedback) with high-contrast tokens and ethical representation guidelines.

## Impact
- Affected specs: deliver-sign-language-learning (new)
- Affected code: `src/layouts`, `src/components` (Hero, NavBar, PathwayCard, VideoCard, EventCard, FeedbackButton/Modal, Testimonial), shared design tokens/styles, accessibility utilities.

