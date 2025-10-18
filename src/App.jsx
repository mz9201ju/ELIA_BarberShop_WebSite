import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Scissors, Phone, Calendar, Instagram, Linkedin, Menu, X } from "lucide-react";
import BarberPoleCursor from "./components/BarberPoleCursor.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Booking from "./pages/Booking.jsx";
import About from "./pages/About.jsx";

/* =====================================================
   🧠 MAIN APP
===================================================== */
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BarberPoleCursor />
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

/* =====================================================
   🧭 HEADER (Mobile + Desktop Navigation)
===================================================== */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/booking", label: "Booking" },
    { to: "/about", label: "About" },
  ];

  // 🧩 Reusable NavLink Renderer
  const renderNavLinks = (onClick) =>
    navLinks.map((n) => (
      <NavLink
        key={n.to}
        to={n.to}
        onClick={() => onClick && onClick()} // closes menu on mobile
        className={({ isActive }) =>
          `block px-3 py-2 text-sm font-medium transition ${isActive ? "text-brand-accent" : "text-brand-sub hover:text-white"
          }`
        }
        end
      >
        {n.label}
      </NavLink>
    ));

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/70 backdrop-blur">
      <div className="container flex items-center justify-between h-16 px-4 sm:px-6">
        {/* 🪒 Logo */}
        {/* 🪒 Logo — clickable to go Home */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-brand-text font-bold text-base sm:text-lg hover:text-brand-accent transition"
        >
          <Scissors className="w-6 h-6 text-brand-accent" />
          <span>ELIA BARBER SHOP</span>
        </NavLink>


        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-brand-sub hover:text-white transition"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* 🖥️ Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">{renderNavLinks()}</nav>

        {/* 📞 Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a href="tel:+14255204447" className="btn hidden sm:inline-flex">
            <Phone className="w-4 h-4" /> (425) 520-4447
          </a>
          <NavLink to="/booking" className="btn">
            <Calendar className="w-4 h-4" /> Book
          </NavLink>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-brand-bg/90 backdrop-blur-sm">
          <nav className="flex flex-col items-start px-4 py-3 space-y-2">
            {renderNavLinks(() => setMenuOpen(false))}
            {/* Optional: Booking button also in mobile menu */}
            <a href="tel:+12065551234" className="btn w-full justify-center mt-2">
              <Phone className="w-4 h-4" /> (206) 555-1234
            </a>
            <NavLink
              to="/booking"
              onClick={() => setMenuOpen(false)}
              className="btn w-full justify-center mt-2"
            >
              <Calendar className="w-4 h-4" /> Book
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

/* =====================================================
   ⚓ FOOTER
===================================================== */
function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="container px-4 sm:px-6 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-brand-sub">
        {/* 🏪 About */}
        <div>
          <div className="text-white font-semibold mb-2">Elia Barber Shop</div>
          <p>Premium cuts, hot towel shaves, and beard trims. Walk-ins welcome. Mon–Sat.</p>
        </div>

        {/* 📍 Location */}
        <div>
          <div className="text-white font-semibold mb-2">Visit</div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=11115+NE+2nd+St,+Bellevue,+WA+98004"
            target="_blank"
            rel="noopener noreferrer"
            className="link block"
          >
            11115 NE 2nd St<br />Bellevue, WA 98004
          </a>
        </div>

        {/* 🕒 Hours */}
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

        {/* 🌐 Social Links */}
        <div>
          <div className="text-white font-semibold mb-2">Follow</div>
          <a
            className="link flex items-center gap-2 mb-2"
            href="https://eliabarber.unaux.com/"
            target="_blank"
          >
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <a
            className="link flex items-center gap-2"
            href="https://www.linkedin.com/in/omer-zahid-developer/"
            target="_blank"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-brand-sub py-6 border-t border-white/10">
        © {new Date().getFullYear()} Omer Zahid. All rights reserved.
      </div>
    </footer>
  );
}
