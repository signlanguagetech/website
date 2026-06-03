# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`). Dev server runs on **port 4300**.

- `pnpm dev` — start the local dev server (`astro dev`)
- `pnpm build` — type-check then build (`astro check && astro build`); output goes to `dist/`
- `pnpm preview` — serve the production build locally
- `pnpm exec tsx scripts/checkLumaEvent.ts` — refresh the cached Luma event (see below)

There is **no test framework** and no linter configured. `astro check` (run as part of `pnpm build`) is the only automated validation; it enforces the strict TypeScript config (`astro/tsconfigs/strict` + `strictNullChecks`).

## Architecture

Astro 5 **static site**, deployed to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`). Uses the MDX, sitemap, and Alpine.js integrations. `site` in `astro.config.mjs` switches between `localhost:4300` and `https://signlanguagetech.com` based on `import.meta.env.PROD`.

### Content collections
Blog posts and glossary entries are file-based content collections defined in `src/content.config.ts`:
- `src/content/blog/*.{md,mdx}` — talks/articles; frontmatter requires `title`, `description`, `pubDate`; optional `speaker`, `thumbnail`, `tags`, etc.
- `src/content/glossary/*.md` — sign-language glossary terms; optional `ytShortEmbeddedLink`.

When adding content, match the existing frontmatter shape — the Zod schemas in `content.config.ts` are the source of truth and will fail `astro check` if violated. Routing is dynamic via `[...slug].astro` and `[tag].astro` under `src/pages/`.

### Luma event banner (build-time cached scrape)
The homepage "Upcoming Event" banner is driven by a cached scrape, not a live fetch:
1. A weekly GitHub Actions cron (`.github/workflows/cron-check-luma.yml`, Mondays 09:00 UTC) runs `scripts/checkLumaEvent.ts` via `tsx`.
2. That script calls `fetchNextLumaEvent` (`src/helpers/lumaEvents.helper.ts`), which fetches `https://luma.com/signlanguagetech`, extracts JSON-LD blocks, and picks the soonest upcoming `Event`.
3. The result is fingerprinted and written to `src/data/luma-event-cache.json`. The workflow commits this file **only if it changed** (hence the recurring `chore: update luma event cache` commits).
4. At build time, `src/pages/index.astro` imports `luma-event-cache.json` directly and renders `EventBanner` from it.

Date/time formatting happens **client-side** (`EventBanner.astro`'s inline script + `dateTime.helper.ts`) so it renders in the visitor's locale/timezone. Date logic uses the **Temporal API via `temporal-polyfill`** (globally typed in `tsconfig.json`); import `'temporal-polyfill/global'` before using `Temporal`.

### Search
`Search.astro` wires up **Algolia DocSearch**. It reads `PUBLIC_ALOGIA_APP_ID`, `PUBLIC_ALOGIA_API_KEY`, and `PUBLIC_ALOGIA_INDEX_NAME` (note: "ALOGIA" is the actual misspelled env var name used throughout — keep it consistent). These are injected as build secrets in `deploy.yml`.

### Other conventions
- Static data lives in `src/model/` (`engineers.json` + types in `model.ts`); shared TS types in `src/types/`; reusable logic in `src/helpers/`.
- Layouts compose pages: `Layout.astro` is the root shell (head/header/footer/consent banner + dark-mode via `prefers-color-scheme`); blog and glossary have their own nested layouts.
- Both `deploy.yml` and `cron-check-luma.yml` are guarded by `github.repository == 'signlanguagetech/website'`, so they no-op on forks.
