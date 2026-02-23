# Agent Execution Notes

## Primary Mission
Maintain a clean, performant React codebase for the ELIA Barber Shop website.

## Working Rules
1. Keep changes scoped and minimal to the requested task.
2. Remove dead/unused/duplicated code as part of touched areas.
3. Preserve design language and existing UX unless explicitly asked to change it.
4. Prioritize runtime performance and bundle efficiency.
5. Keep architecture clear:
   - Data/constants: `src/constants`
   - Business logic: `src/logic`
   - Presentation: `src/components`, `src/pages`
   - Styling: `src/styles`

## Delivery Checklist
- [ ] No duplicate render paths for same feature.
- [ ] No obviously unused imports/files in touched scope.
- [ ] No high-frequency state update bottlenecks.
- [ ] Build passes successfully.
- [ ] Notes provided about key improvements.
