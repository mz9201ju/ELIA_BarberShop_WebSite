# Copilot Instructions

## Project Goals
- Keep pages lightweight and fast to render.
- Prefer separation of concerns:
  - `src/constants/*` for static data and config-like content.
  - `src/logic/*` for reusable business logic and helpers.
  - `src/styles/*` for CSS concerns.
  - UI components/pages should stay focused on rendering.

## Coding Conventions
- Use React functional components.
- Keep props and names explicit.
- Avoid one-letter variable names.
- Remove dead code, duplicate content, and unused imports quickly.
- Use stable React keys (avoid index keys where possible).

## Performance Conventions
- Avoid frequent React state updates for pointer/mouse tracking.
- Use route-level code splitting for pages.
- Lazy-load non-critical images and defer heavy work to route/component mount.
- Keep initial bundle path minimal.

## Styling Conventions
- Keep global styles in `src/styles/` and import from `src/index.css`.
- Reuse existing tokens and utility classes.
- Do not add arbitrary design systems unless explicitly requested.

## Quality Checks
- Validate with production build (`npm run build`) after meaningful refactors.
- If linting is configured, ensure no new lint errors are introduced.
