# Lohit portfolio

A Next.js portfolio with a reference-led typographic hero, a GSAP scroll sequence, interactive concept work, a Fragments gallery, and a guestbook preview.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. For a production preview, run `npm run build` followed by `npm start`.

## Customize

- `src/lib/content.ts`: profile/contact details, project descriptions, and Fragments captions. Add a real email to enable the contact link. The company fields are reserved for future branding.
- `src/app/page.tsx`: hero copy and the supporting page sections.
- `src/app/globals.css`: sampled reference red, typography, responsive layouts, and preview styling.
- `src/components/scroll-scene.tsx`: pin duration, smooth scrolling, text reveal, and feathered circle expansion.

The projects are labeled concepts. Preview controls, Fragments dialogs, palette selectors, and toggles work locally. The guestbook is a static teaser; it does not collect or save signatures. No client results or contact details are fabricated.

## Motion and accessibility

The red hero contains four tonal, multi-lobed forms with randomized GSAP drift and transform-based morphing. They pause offscreen and in background tabs, and remain static under reduced motion. Edit `src/components/hero-atmosphere.tsx` for timing and travel, or the `.ambient-*` CSS rules for color and softness.

Desktop uses GSAP ScrollSmoother with ScrollTrigger. The opening scene pins over the work section, then crossfades directly into it without an extra viewport of whitespace. Navigation is fixed outside the transformed scroll content after the entrance. It slides away on downward scrolling and returns upward, with a 16px direction threshold and keyboard-focus protection. White ink uses difference blending over a transparent background. Reduced motion uses native sticky positioning and instant visibility changes. Cormorant Garamond Medium Italic is loaded through next/font for the hero continuation and repeated editorial accents in the work, about, guestbook, and contact headings. Touch scrolling stays native. Reduced-motion users get normal document flow and visible hero copy. A no-JavaScript fallback keeps the full introduction readable. Dialogs use native modal semantics, Escape dismissal, and focus restoration.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

The browser tests run against a production preview on port 3001. They cover the pinned hero, animated navigation, quick-view interactions and focus restoration, accessibility, responsive overflow, and the no-JavaScript fallback.

Taste was installed for Codex using `npx skills add Leonxlnx/taste-skill --skill design-taste-frontend --agent codex --yes`. Its project-local instructions are in `.agents/skills/design-taste-frontend/SKILL.md`. The explicit visual reference takes precedence over the skill's aesthetic defaults.
