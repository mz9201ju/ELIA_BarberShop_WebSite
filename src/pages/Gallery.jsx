import { useMemo } from 'react';
import { loadGalleryImages } from '../logic/gallery.js';

export default function Gallery() {
  const images = useMemo(() => loadGalleryImages(), []);

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, i) => (
          <picture key={image.baseName}>
            {image.avif && <source srcSet={image.avif} type="image/avif" />}
            {image.webp && <source srcSet={image.webp} type="image/webp" />}
            <img
              src={image.jpg}
              alt={`Gallery image ${i + 1}`}
              className="gallery-img"
              loading="lazy"
              decoding="async"
            />
          </picture>
        ))}
      </div>
    </section>
  );
}
