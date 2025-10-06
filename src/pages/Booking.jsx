export default function Booking() {
    return (
        <section className="container py-12">
            <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
            <p className="text-brand-sub">Call us or send a DM—online scheduling coming soon.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <a href="tel:+14255204447" className="btn">Call (425) 520-4447</a>
                <a href="https://eliabarber.unaux.com/" className="btn">Website for More Information</a>
            </div>
        </section>
    )
}