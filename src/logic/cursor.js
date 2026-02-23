export function shouldEnableCustomCursor() {
  if (typeof window === 'undefined') {
    return false;
  }

  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return hasFinePointer && !prefersReducedMotion;
}
