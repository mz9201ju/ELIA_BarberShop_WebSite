export default function Services() {
    const data = [
        { name: 'Regular Haircut', price: '$40', desc: 'Skin, low, mid, high—your call.' },
        { name: 'Haircut + Beard', price: '$60', desc: 'Clean, crisp, even.' },
        { name: 'Fades', price: '$45', desc: 'Classic straight razor experience.' },
        { name: 'Blow-out', price: '$45', desc: 'ADD TEXT HERE' },
        { name: 'Senior Citizen', price: '$35', desc: 'Anyone above 62 and over' },
        { name: 'Hot Towel Shave', price: '$35', desc: 'ADD TEXT HERE' },
        { name: 'Eyebrows', price: '$20', desc: 'Threading' },
        { name: 'Shape Up', price: '$', desc: 'ADD TEXT HERE' },
        { name: 'Beard Trim', price: '$20', desc: 'ADD TEXT HERE' },
        { name: 'Kids Cuts', price: '$40', desc: '10 and Under' },
        { name: 'Designs', price: '$20', desc: 'ADD TEXT HERE' },
        { name: 'Shampoo', price: '$20', desc: 'ADD TEXT HERE' },
        { name: 'Blow-out', price: '$20', desc: 'ADD TEXT HERE' },
        { name: 'Regular Cut + Eyebrows', price: '$40', desc: 'Barber Shop Deal' },
        { name: 'Regular Cut + Eyebrows + Beard', price: '$60', desc: 'Barber Shop Deal' },

    ]
    return (
        <section className="container py-12">
            <h1 className="text-3xl font-bold mb-6">Services & Pricing</h1>
            <div className="grid md:grid-cols-2 gap-4">
                {data.map((s, i) => (
                    <div key={i} className="card p-5 flex items-center justify-between">
                        <div>
                            <div className="font-semibold">{s.name}</div>
                            <div className="text-brand-sub text-sm">{s.desc}</div>
                        </div>
                        <div className="text-brand-accent text-lg font-bold">{s.price}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}