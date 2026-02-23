import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Menu, Phone, Scissors, X } from 'lucide-react';
import { CONTACT, NAV_LINKS } from '../../constants/siteData.js';
import { getNavLinkClass } from '../../logic/nav.js';

function NavItems({ onSelect }) {
  return NAV_LINKS.map((navLink) => (
    <NavLink
      key={navLink.to}
      to={navLink.to}
      onClick={onSelect}
      className={({ isActive }) => getNavLinkClass(isActive)}
      end={navLink.to === '/'}
    >
      {navLink.label}
    </NavLink>
  ));
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-base font-bold text-brand-text transition hover:text-brand-accent sm:text-lg"
        >
          <Scissors className="h-6 w-6 text-brand-accent" />
          <span>ELIA BARBER SHOP</span>
        </NavLink>

        <button
          type="button"
          className="p-2 text-brand-sub transition hover:text-white md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          <NavItems />
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a href={`tel:${CONTACT.phoneRaw}`} className="btn hidden sm:inline-flex">
            <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
          </a>
          <NavLink to="/booking" className="btn">
            <Calendar className="h-4 w-4" /> Book
          </NavLink>
        </div>
      </div>

      {isMenuOpen && (
        <div className="animate-slide-down border-t border-white/10 bg-brand-bg/90 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col items-start space-y-2 px-4 py-3">
            <NavItems onSelect={() => setIsMenuOpen(false)} />
            <a href={`tel:${CONTACT.phoneRaw}`} className="btn mt-2 w-full justify-center">
              <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
            </a>
            <NavLink
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="btn mt-2 w-full justify-center"
            >
              <Calendar className="h-4 w-4" /> Book
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
