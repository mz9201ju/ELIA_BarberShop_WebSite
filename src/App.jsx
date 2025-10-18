import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  Scissors,
  Phone,
  Calendar,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Booking from "./pages/Booking.jsx";
import About from "./pages/About.jsx";

/* ============================================================
   🚀 Root App Component
   - Wraps Header + Routed Pages + Footer
============================================================ */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

/* ============================================================
   🧭 Reusable Navigation Link Component
   - Simplifies nav link rendering and handles active styles
============================================================ */
function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end
      className={({ isActive }) =>
        `text-sm ${isActive
          ? "text-brand-accent"
          : "text-brand-sub hover:text-white transition"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

/* ============================================================
   🧢 Header Component (Responsive + Mobile Support)
   - Includes burger toggle for mobile
   - Uses reusable <NavItem /> for consistency
============================================================ */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Centralized nav items (DRY)
  const nav = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/booking", label: "Booking" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/70 backdrop-blur">
      <div className="container flex items-center justify-between h-16 overflow-x-hidden px-2 sm:px-4">
        {/* 🔹 Logo */}
        <div className="flex items-center gap-2 text-brand-text font-bold">
          <Scissors className="w-6 h-6 text-brand-accent" />
          <span>ELIA BARBER SHOP</span>
        </div>

        {/* 🔹 Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavItem key={n.to} to={n.to} label={n.label} />
          ))}
        </nav>

        {/* 🔹 Right-side Buttons + Burger */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <a
            href="tel:+14255204447"
            className="btn hidden sm:inline-flex h-12 min-w-[140px] justify-center whitespace-nowrap"
          >
            <Phone className="w-4 h-4" /> (425) 520-4447
          </a>

          <NavLink
            to="/booking"
            className="btn hidden sm:inline-flex h-12 min-w-[100px] justify-center whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" /> Book
          </NavLink>

          {/* Burger menu icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-brand-accent ml-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-brand-bg/95 backdrop-blur border-t border-white/10 animate-slide-down">
          <div className="flex flex-col items-center gap-4 py-4">
            {nav.map((n) => (
              <NavItem
                key={n.to}
                to={n.to}
                label={n.label}
                onClick={() => setMenuOpen(false)} // close menu after click
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ============================================================
   🦶 Footer Component
   - Clean grid layout with social + info
============================================================ */
function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="container py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-brand-sub">
        {/* Brand Info */}
        <div>
          <div className="text-white font-semibold mb-2">
            Elia Barber Shop
          </div>
          <p>
            Premium cuts, hot towel shaves, and beard trims. Walk-ins
            welcome. Mon–Sat.
          </p>
        </div>

        {/* Location */}
        <div>
          <div className="text-white font-semibold mb-2">Visit</div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=11115+NE+2nd+St,+Bellevue,+WA+98004"
            target="_blank"
            rel="noopener noreferrer"
            className="link block"
          >
            11115 NE 2nd St
            <br />
            Bellevue, WA 98004
          </a>
        </div>

        {/* Hours */}
        <div>
          <div className="text-white font-semibold mb-2">Hours</div>
          <p>
            Mon–Fri 10:00–7:00
            <br />
            Sat 10:00–6:00
            <br />
            Sun Closed
          </p>
        </div>

        {/* Social Links */}
        <div>
          <div className="text-white font-semibold mb-2">Follow</div>
          <a
            className="link flex items-center gap-2 mb-2"
            href="https://eliabarber.unaux.com/"
          >
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <a
            className="link flex items-center gap-2"
            href="https://www.linkedin.com/in/omer-zahid-developer/"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-brand-sub py-6 border-t border-white/10">
        © {new Date().getFullYear()} ELIA BarberShop. All rights reserved.
      </div>
    </footer>
  );
}