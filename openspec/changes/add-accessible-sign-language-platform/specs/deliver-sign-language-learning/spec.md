## ADDED Requirements

### Requirement: Minimalist Editorial Design System
The platform SHALL use a pure black and white editorial design system with no color accents—black (`#000000`) on white (`#FFFFFF`) for light mode, white on black for dark mode—serif headlines (Cormorant Garamond with Georgia fallback), sans body text (Instrument Sans / Source Sans 3), and generous whitespace (8px base unit, 96-160px section padding).

#### Scenario: Black and white palette and typography render correctly
- **WHEN** the homepage loads on light or dark theme
- **THEN** the page uses pure white/black backgrounds, black/white text with no color accents, serif headlines at 2-4rem with line-height 1.2-1.3, and sans body at 1rem with line-height 1.7
- **AND** all text inherently meets WCAG AAA contrast (21:1 ratio)

#### Scenario: Whitespace rhythm is consistent
- **WHEN** sections are rendered
- **THEN** vertical padding is between 96px and 160px, content max-width is 680px for prose and 1200px for grids, and paragraph spacing is 1.5em

### Requirement: Navigation and Information Architecture
The platform SHALL present a text-only primary navigation limited to 4-5 action-oriented items (Start Learning, Watch in Sign Language, Join Events, Meet the Team, Feedback) with a skip link, semantic landmarks, and visible focus states—no icons in navigation.

#### Scenario: Primary navigation is text-only and focus-visible
- **WHEN** the homepage loads on desktop or mobile
- **THEN** the primary nav displays text links with visible focus rings (2px solid black in light mode, white in dark mode, 2px offset) and a skip link before the nav
- **AND** mobile navigation remains text-based without icon-only hamburger menus (use "Menu" label if collapsed)

### Requirement: Hero Experience
The platform SHALL render a hero section featuring a static high-quality image by default, with an optional video that plays only on explicit user action, a confident serif headline, a sans subheadline, and primary/secondary CTAs prioritizing Start Learning.

#### Scenario: Hero displays static image with editorial typography
- **WHEN** a user lands on the homepage
- **THEN** the hero shows a static image with dark overlay for contrast, a serif headline (e.g., "Learn to Sign"), a sans subheadline, and Start Learning primary CTA and Watch in Sign Language secondary CTA
- **AND** video autoplay is disabled by default; video plays only when user clicks a play button

#### Scenario: Video requires captions before playback
- **WHEN** user clicks to play the hero video
- **THEN** if captions or transcript are available, video plays with captions visible
- **AND** if captions or transcript are missing, playback is blocked and a warning with transcript link is shown

### Requirement: Learning Pathway Section
The platform SHALL present learning pathways (Watch Videos, Learn Terms, Join Live Sessions) as open text blocks with subtle borders or dividers—not elevated cards—with concise descriptions and clear text CTAs.

#### Scenario: Pathways use editorial text-block layout
- **WHEN** the user scrolls below the hero
- **THEN** three pathway blocks are displayed with serif headings, sans descriptions, thin border or divider separating each, and text link CTAs (not buttons)
- **AND** keyboard users can navigate blocks in logical reading order with focus-visible outlines

### Requirement: Featured Event Section
The platform SHALL highlight upcoming events in an editorial list format with title, date/time with timezone, location or virtual tag, description, and a text CTA—using subtle typography hierarchy rather than card shadows.

#### Scenario: Event list uses editorial formatting
- **WHEN** an upcoming event is available
- **THEN** the event is listed with serif title, sans metadata (date, location), brief description, and a text link CTA ("Register →")
- **AND** imagery uses alt text and integrates inline or as a subtle background rather than a card thumbnail

#### Scenario: Empty state for no events
- **WHEN** no upcoming events are available
- **THEN** an empty state is shown with a message and link to recorded sessions

### Requirement: Testimonial and Social Proof
The platform SHALL display testimonials in blockquote style with serif italic quotes, attribution, and optional small avatar—emphasizing diverse Deaf community representation.

#### Scenario: Testimonials render as editorial blockquotes
- **WHEN** testimonials are displayed
- **THEN** they appear as styled blockquotes with serif italic text, attribution line, optional avatar thumbnail, and alt text describing the person
- **AND** representation includes diverse Deaf community members with role context (e.g., "Deaf Developer", "Sign Language Instructor")

### Requirement: Visual System Contrast
The platform SHALL use a pure black and white tokenized palette that inherently meets WCAG AAA contrast (21:1 ratio) on both light and dark themes.

#### Scenario: Monochrome palette meets maximum contrast
- **WHEN** the UI renders on light or dark theme
- **THEN** text uses pure black (`#000000`) on white (`#FFFFFF`) in light mode, and white on black in dark mode
- **AND** no color accents are used; all visual hierarchy is achieved through typography weight, size, and whitespace

### Requirement: Motion and Reduced-Motion Support
The platform SHALL use subtle fade-in and staggered reveal animations (300-400ms ease), and respect `prefers-reduced-motion` by disabling transitions and pausing any video loops.

#### Scenario: Animations respect reduced-motion preference
- **WHEN** user has `prefers-reduced-motion: reduce` enabled
- **THEN** all CSS transitions and animations are disabled, video loops are paused, and content is immediately visible without motion

#### Scenario: Default motion is subtle and editorial
- **WHEN** user has no reduced-motion preference
- **THEN** sections fade in on scroll (opacity 0→1, 300-400ms), and grouped elements use staggered `animation-delay` for polished reveals

### Requirement: Accessibility Resilience and Error Handling
The platform SHALL handle missing captions, broken links, blocked media, and empty data states with user-facing warnings, alternatives, and safe fallbacks.

#### Scenario: Missing captions or broken media are handled gracefully
- **WHEN** captions are missing or media fails to load
- **THEN** autoplay is blocked, a warning banner appears, and transcript or alternative content is offered

#### Scenario: Broken links show inline recovery
- **WHEN** a link target is unreachable
- **THEN** an inline alert with Retry and Go Home text links is shown and the error is logged

### Requirement: Ethics, Representation, and Feedback
The platform SHALL feature diverse Deaf community representation in visuals and provide a persistent feedback mechanism with privacy-conscious handling.

#### Scenario: Representation and feedback are always present
- **WHEN** imagery or testimonials are displayed
- **THEN** they include diverse representation with alt text and role/context
- **AND** a persistent Feedback link opens a modal with consent and privacy notes, aria-live status, and accepts submissions without requiring authentication

### Requirement: Component Reuse for Astro and React
The platform SHALL implement reusable components (Hero, NavBar, PathwaySection, EventList, Testimonial, FeedbackModal, VideoPlayer) using Astro for static content and React islands only where interactivity is required (modals, video player, dynamic dates).

#### Scenario: Components are modular, responsive, and accessible
- **WHEN** building the homepage and related sections
- **THEN** components are props-driven, server-rendered where possible, expose focus-visible states, respond to prefers-reduced-motion, and stack gracefully on small screens using a mobile-first approach
