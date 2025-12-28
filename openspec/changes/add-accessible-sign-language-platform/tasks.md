## 1. Design System Setup
- [x] 1.1 Add Cormorant Garamond font (self-hosted woff2 in `public/fonts/`) and Instrument Sans / Source Sans 3 for body.
- [x] 1.2 Create design tokens CSS file (`src/styles/global.css`) with pure black/white palette, typography scale, and spacing rhythm for light/dark themes.
- [x] 1.3 Document font fallback stack (Cormorant → Georgia → serif; Atkinson → system sans).

## 2. Layout and Navigation
- [x] 2.1 Implement base layout with skip link, semantic landmarks (`<nav>`, `<main>`, `<footer>`, sectioned `<section>` with headings), and focus-visible rings.
- [x] 2.2 Build NavBar component: text-only links (Watch in Sign Language, Learn Terms, Meet the Team), mobile "Menu" label toggle, no icons.
- [x] 2.3 Apply section spacing (96-160px vertical padding), content max-width (680px prose, 1200px grids), and paragraph spacing (1.5em).

## 3. Hero Section
- [x] 3.1 Build Hero component with static high-quality image (grayscale), dark overlay, serif headline, sans subheadline, and primary/secondary CTAs.
- [x] 3.2 Add optional video player with play button (no autoplay); gate playback on captions availability.
- [x] 3.3 Implement warning banner and transcript link fallback if captions are missing.

## 4. Learning Pathways
- [x] 4.1 Build PathwayCard component: text blocks with serif headings, sans descriptions, thin border/divider, and text link CTAs.
- [x] 4.2 Ensure keyboard navigation and focus-visible outlines on pathway links.

## 5. Events and Testimonials
- [x] 5.1 Build FeaturedEventCard component: editorial list with serif title, sans metadata, description, and text CTA.
- [x] 5.2 Add EmptyEventsState for no events with link to recorded sessions.
- [x] 5.3 Build Testimonial component: blockquote style with serif italic quotes, attribution, optional avatar with alt text, and diverse representation.

## 6. Feedback and Accessibility
- [x] 6.1 Build FeedbackButton with modal: focus trap, aria-live status, privacy/consent note, unauthenticated submission.
- [x] 6.2 Add persistent Feedback button in fixed position.
- [x] 6.3 Focus-visible rings and skip link implemented in global.css.

## 7. Motion and Reduced-Motion
- [x] 7.1 Add CSS fade-in on scroll animations (300-400ms ease, staggered delays for grouped elements).
- [x] 7.2 Implement `prefers-reduced-motion` media query to disable animations and pause video loops.

## 8. Validation
- [x] 8.1 Run `openspec validate add-accessible-sign-language-platform --strict` and fix any issues.
- [x] 8.2 Run `pnpm build` (astro check) to confirm no type or build errors.
- [x] 8.3 Manual a11y QA: keyboard navigation, screen reader landmarks, focus rings, contrast, captions, reduced motion.
