import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <>
            <Hero />
            <USPs />
            <CTA />
        </>
    )
}


function Hero() {
    return (
        <section className="container pt-14 pb-16 grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    Sharp fades. Clean shaves. <span className="text-brand-accent">Zero fuss.</span>
                </h1>
                <p className="text-brand-sub mt-4 max-w-prose">
                    Book a chair with stylists who actually listen. Modern cuts, classic service, and good vibes only.
                </p>
                <div className="mt-8 flex gap-3">
                    <Link to="/booking" className="btn">Book Now <ArrowRight className="w-4 h-4" /></Link>
                    <Link to="/services" className="btn bg-transparent text-white border border-white/10 hover:bg-white/5">View Services</Link>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="card overflow-hidden max-w-[270px] max-h-[400px] rounded-xl2 mx-auto">
                    <img
                        src={`${import.meta.env.BASE_URL}elia-barber-shop.png`}
                        alt="Elia Barber Shop Logo"
                        className="max-w-[400px] max-h-[400px]  object-contain object-center rounded-xl2 mx-auto"
                    />
                </div>
            </motion.div>
        </section>
    )
}


function USPs() {
    const items = [
        { title: 'Walk‑ins welcome', copy: 'But booking keeps your day on track' },
        { title: 'Hot towel shaves', copy: 'Yes, the classic treatment' },
        { title: 'Beard & lineup pros', copy: 'Sharp, symmetric, consistent' },
    ]
    return (
        <section className="container grid md:grid-cols-3 gap-6">
            {items.map((it, i) => (
                <div key={i} className="card p-6">
                    <div className="flex items-center gap-2 text-brand-accent font-semibold"><Star className="w-4 h-4" />{it.title}</div>
                    <p className="text-brand-sub mt-1">{it.copy}</p>
                </div>
            ))}
        </section>
    )
}


function CTA() {
    return (
        <section className="container my-16">
            <div className="card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-bold">Need a fresh cut before the weekend?</h2>
                    <p className="text-brand-sub">Grab a slot—average wait under 5 minutes when you book.</p>
                </div>
                <Link to="/booking" className="btn">Reserve a Chair</Link>
            </div>
        </section>
    )
}