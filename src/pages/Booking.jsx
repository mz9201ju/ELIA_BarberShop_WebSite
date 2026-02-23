import { CONTACT } from '../constants/siteData.js'

export default function Booking() {
    return (
        <section className="container py-12">
            <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
            <p className="text-brand-sub">Call us or send a DM—online scheduling coming soon.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <a href={`tel:${CONTACT.phoneRaw}`} className="btn">Call {CONTACT.phoneDisplay}</a>
                <a href="https://eliabarber.unaux.com/" className="btn" target="_blank" rel="noopener noreferrer">Website for More Information</a>
            </div>
        </section>
    )
}