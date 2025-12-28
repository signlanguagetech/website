## ADDED Requirements

### Requirement: Navigation and Information Architecture
The platform SHALL present a primary navigation limited to 4-5 action-oriented items (Start Learning, Watch in Sign Language, Join Events, Meet the Team, Feedback) with a skip link, semantic landmarks, and visible focus states.

#### Scenario: Primary navigation is action-led and focus-visible
- **WHEN** the homepage loads on desktop or mobile
- **THEN** the primary nav displays the action labels with a visible focus ring and skip link
- **AND** collapsing to mobile retains the Start Learning action without burying it under secondary menus

### Requirement: Hero Sign-Language Experience
The platform SHALL render a full-width hero featuring a looped sign-language video with always-visible captions, dark overlay for contrast, a confident headline and subheadline, and primary/secondary CTAs prioritizing Start Learning.

#### Scenario: Hero surfaces captioned sign-language welcome
- **WHEN** a user lands on the homepage
- **THEN** a looped sign-language video with captions is shown with high-contrast headline, Start Learning primary CTA, and Watch in Sign Language secondary CTA, all keyboard accessible
- **AND** if captions or transcript are missing, autoplay is disabled, a warning is shown, and a transcript or alternative link is offered

### Requirement: Learning Pathway Cards
The platform SHALL present three large pathway cards (Watch Videos, Learn Terms, Join Live Sessions) with icons, concise descriptions, and clear CTAs to guide users to core actions.

#### Scenario: Pathways direct users to core actions
- **WHEN** the user scrolls below the hero
- **THEN** three cards present Watch Videos, Learn Terms, and Join Live Sessions with keyboard-focusable CTAs and short descriptions
- **AND** screen reader users can navigate the cards in a logical reading order with descriptive labels

### Requirement: Featured Event Card
The platform SHALL highlight upcoming events with elevated cards that include title, date/time with timezone, location or virtual tag, description, imagery with alt text, and a Register CTA.

#### Scenario: Event card highlights an upcoming session with accessibility cues
- **WHEN** an upcoming event is available
- **THEN** the card shows the title (e.g., "TypeScript Spark: Interactive Workshop"), date/time with timezone, location/virtual tag, brief description, imagery alt text, and a Register CTA with a large click target
- **AND** if no events are available, an empty state is shown that links to recorded sessions instead

### Requirement: Visual System and Contrast Tokens
The platform SHALL use tokenized colors and typography that meet WCAG 2.2 AA contrast on light and dark backgrounds, with a high-contrast fallback palette.

#### Scenario: High-contrast palette with fallback
- **WHEN** UI renders on light or dark themes
- **THEN** text and CTAs use the defined palette (bg/base #0B1021 or #F8FAFC, accent teal #14B8A6, accent amber #F59E0B, accent pink #EC4899) to meet AA contrast
- **AND** if computed contrast drops below AA, the system falls back to a black/white base with accent #00B8A9 and logs a contrast warning during development

### Requirement: Accessibility Resilience and Error Handling
The platform SHALL handle missing captions, broken links, blocked media, and empty data states with user-facing warnings, alternatives, and safe fallbacks.

#### Scenario: Missing captions, broken links, or blocked media are handled
- **WHEN** captions are missing or media fails to load
- **THEN** autoplay is blocked, a warning banner appears, and transcript or alternative content is offered
- **AND** if a link target is unreachable, an inline alert with Retry and Go Home CTAs is shown and logged
- **AND** if dynamic color contrast fails, the fallback palette is applied automatically

### Requirement: Ethics, Representation, and Feedback
The platform SHALL feature diverse Deaf community representation in visuals and provide a persistent feedback loop with privacy-conscious handling.

#### Scenario: Representation and feedback loop are always present
- **WHEN** imagery or testimonials are displayed
- **THEN** they include diverse representation with alt text and role/context
- **AND** a persistent Feedback button opens a modal with consent and privacy notes, aria-live status, and routes submissions without requiring authentication

### Requirement: Component Reuse for Astro and React
The platform SHALL implement reusable components (Hero, NavBar, PathwayCard, VideoCard, EventCard, Testimonial, FeedbackButton/Modal) using Astro layouts and React islands only where interactivity is required.

#### Scenario: Components are modular, responsive, and accessible
- **WHEN** building the homepage and related sections
- **THEN** the components are props-driven, support server rendering, expose focus-visible states, respond to prefers-reduced-motion, and stack gracefully on small screens

