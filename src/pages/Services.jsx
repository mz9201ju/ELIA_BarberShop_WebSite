import { SERVICES } from '../constants/siteData.js'

export default function Services() {
    return (
        <section className="container py-12">
            <h1 className="text-3xl font-bold mb-6">Services & Pricing</h1>
            <div className="grid md:grid-cols-2 gap-4">
                {SERVICES.map((service) => (
                    <div key={service.name} className="card p-5 flex items-center justify-between">
                        <div>
                            <div className="font-semibold">{service.name}</div>
                            <div className="text-brand-sub text-sm">{service.desc}</div>
                        </div>
                        <div className="text-brand-accent text-lg font-bold">{service.price}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}