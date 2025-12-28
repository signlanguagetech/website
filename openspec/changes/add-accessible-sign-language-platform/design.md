## Context
- Goal: deliver an accessibility-first, sign-language-led learning experience using Astro for layouts and React islands for interactive components, styled with a **minimalist editorial design** aesthetic.
- Constraints: WCAG 2.2 AA+ baseline, captions always available for media, high-contrast palette with fallback, mobile-first responsiveness, reduced-motion support.
- Design direction: sparse, typography-driven, content-first layout inspired by print editorial rather than card-heavy SaaS patterns.

## Goals / Non-Goals
- Goals: define navigation IA, hero experience, learning pathways, featured events, feedback loop, resilience patterns, and a cohesive minimalist editorial design system.
- Non-Goals: backend auth, payments, analytics; finalizing content governance beyond feedback loop; complex animation libraries.

## Editorial Design System Decisions

### Color Palette (Black and White Only)
| Token           | Light Theme    | Dark Theme     | Purpose                    |
|-----------------|----------------|----------------|----------------------------|
| `--bg-base`     | `#FFFFFF`      | `#000000`      | Page background            |
| `--bg-surface`  | `#FAFAFA`      | `#111111`      | Elevated surfaces          |
| `--text-primary`| `#000000`      | `#FFFFFF`      | Body text                  |
| `--text-muted`  | `#666666`      | `#999999`      | Secondary text             |
| `--border`      | `#E5E5E5`      | `#333333`      | Subtle dividers            |
| `--focus-ring`  | `#000000`      | `#FFFFFF`      | Focus states               |

**Rationale**: pure black and white creates maximum editorial clarity; no color distractions; typography and whitespace carry all visual weight; inherently meets WCAG AAA contrast.

### Typography
| Role         | Font Stack                                      | Size / Weight / Line-height |
|--------------|------------------------------------------------|------------------------------|
| Display      | `"Cormorant Garamond", Georgia, serif`         | 3rem–4rem / 500 / 1.2        |
| Headline     | `"Cormorant Garamond", Georgia, serif`         | 2rem–2.5rem / 600 / 1.3      |
| Subhead      | `"Instrument Sans", "Source Sans 3", sans-serif`| 1.25rem / 500 / 1.4          |
| Body         | `"Instrument Sans", "Source Sans 3", sans-serif`| 1rem / 400 / 1.7             |
| Caption      | `"Instrument Sans", sans-serif`                | 0.875rem / 400 / 1.5         |

**Rationale**: serif for headlines creates editorial gravitas; sans body is clean and accessible; generous line-height (1.7) aids readability.

### Spacing Rhythm
- Base unit: 8px
- Section padding: 96px–160px vertical for breathing room
- Content max-width: 680px for prose, 1200px for grids
- Paragraph spacing: 1.5em

### Layout Philosophy
- **No card grids**: use open text blocks with subtle dividers or thin borders
- **White space as design element**: let content breathe; avoid cramming
- **Static imagery**: high-quality photography, no autoplay video by default (video plays on explicit user action)
- **Simple navigation**: text links, no icons unless essential for accessibility

### Motion & Interaction
- Fade-in on scroll (opacity 0→1, 300-400ms ease)
- Staggered reveals with `animation-delay` for grouped elements
- Respect `prefers-reduced-motion`: skip animations, no autoplay
- Focus-visible: 2px solid black (light) / white (dark) ring with 2px offset

## Accessibility Decisions
- Skip link at top of page
- Semantic landmarks (`<nav>`, `<main>`, `<footer>`, `<section>` with headings)
- All media requires captions or transcript; block autoplay if missing
- Contrast: pure black/white palette inherently meets WCAG AAA (21:1 contrast ratio)
- Focus-visible rings on all interactive elements (2px solid black/white)
- Reduced-motion: pause loops, disable transitions

## Component Architecture
| Component       | Tech              | Notes                                           |
|-----------------|-------------------|-------------------------------------------------|
| NavBar          | Astro             | Text links, skip link, no icons                 |
| Hero            | Astro             | Static image by default; video on user action   |
| PathwaySection  | Astro             | Text blocks with subtle borders, not cards      |
| EventList       | Astro + React     | React for dynamic date formatting               |
| Testimonial     | Astro             | Blockquote style, serif quotes                  |
| FeedbackModal   | React             | Focus trap, aria-live, privacy notice           |
| VideoPlayer     | React             | Captions gating, transcript link, poster        |

## Risks / Trade-offs
- Risk: serif font may not load. Mitigation: Georgia fallback is always available.
- Risk: video load/performance. Mitigation: poster images, user-initiated playback, reduced-motion support.
- Risk: editorial style perceived as "boring." Mitigation: strong typography, subtle animation, high-quality imagery.
- Risk: content lacking representation. Mitigation: diverse Deaf community imagery, feedback loop for corrections.

## Migration Plan
- No existing specs to migrate. Update current delta spec with editorial design requirements.

## Open Questions
- Font licensing: confirm Cormorant Garamond (open-source) or select alternative serif.
- Image sourcing: confirm rights for editorial photography featuring Deaf community.
