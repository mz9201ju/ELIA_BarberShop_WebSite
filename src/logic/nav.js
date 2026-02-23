export function getNavLinkClass(isActive) {
  return `block px-3 py-2 text-sm font-medium transition ${
    isActive ? 'text-brand-accent' : 'text-brand-sub hover:text-white'
  }`;
}
