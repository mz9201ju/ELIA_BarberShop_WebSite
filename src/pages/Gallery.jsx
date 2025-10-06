export default function Gallery() {
  // Automatically import all .jpg images from src/assets (and subfolders)
  const imgs = Object.values(
    import.meta.glob('/src/assets/**/*.jpg', { eager: true, import: 'default' })
  );

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery image ${i + 1}`}
            className="rounded-2xl object-cover w-full h-56 md:h-64 lg:h-72 hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}
