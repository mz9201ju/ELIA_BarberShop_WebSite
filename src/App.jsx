import { Routes, Route, NavLink } from 'react-router-dom'
import BarberPoleCursor from "./components/BarberPoleCursor.jsx";
import { Scissors, Phone, Calendar, Instagram, Linkedin } from 'lucide-react'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Booking from './pages/Booking.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <BarberPoleCursor/>
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
  )
}


function Header() {
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/booking', label: 'Booking' },
    { to: '/about', label: 'About' }
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-bg/70 backdrop-blur">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2 text-brand-text font-bold">
          <Scissors className="w-6 h-6 text-brand-accent" />
          <span>ELIA BARBER SHOP</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map(n => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => `text-sm ${isActive ? 'text-brand-accent' : 'text-brand-sub hover:text-white'} transition`}
              end
            >{n.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+14255204447" className="btn hidden sm:inline-flex"><Phone className="w-4 h-4" /> (425) 520‑4447</a>
          <NavLink to="/booking" className="btn"><Calendar className="w-4 h-4" /> Book</NavLink>
        </div>
      </div>
    </header>
  )
}


function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="container py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-brand-sub">
        <div>
          <div className="text-white font-semibold mb-2">Elia Barber Shop</div>
          <p>Premium cuts, hot towel shaves, and beard trims. Walk‑ins welcome. Mon–Sat.</p>
        </div>
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
        <div>
          <div className="text-white font-semibold mb-2">Hours</div>
          <p>Mon–Fri 10:00–7:00<br />Sat 10:00–6:00<br />Sun Closed</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Follow</div>
          <a className="link flex items-center gap-2 mb-2" href="https://eliabarber.unaux.com/"><Instagram className="w-4 h-4" /> Instagram</a>
          <a className="link flex items-center gap-2" href="https://www.linkedin.com/in/omer-zahid-developer/"><Linkedin className="w-4 h-4" /> LinkedIn</a>
        </div>
      </div>
      <div className="text-center text-xs text-brand-sub py-6 border-t border-white/10">© {new Date().getFullYear()} Omer Zahid. All rights reserved.</div>
    </footer>
  )
}