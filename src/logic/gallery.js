const galleryImageModules = import.meta.glob('../assets/*.{avif,webp,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

function extractNumericSortKey(path) {
  const fileName = path.split('/').pop() ?? '';
  const numericPart = Number.parseInt(fileName, 10);
  return Number.isFinite(numericPart) ? numericPart : Number.MAX_SAFE_INTEGER;
}

function getFileExtension(pathName) {
  return pathName.split('.').pop()?.toLowerCase() ?? '';
}

function getBaseName(pathName) {
  const fileName = pathName.split('/').pop() ?? '';
  return fileName.replace(/\.(avif|webp|jpe?g)$/i, '');
}

export function loadGalleryImages() {
  const entries = Object.entries(galleryImageModules);
  const resolved = entries.map(([path, src]) => ({
    path,
    src,
    ext: getFileExtension(path),
    baseName: getBaseName(path),
  }));

  const grouped = new Map();

  for (const entry of resolved) {
    const current = grouped.get(entry.baseName) ?? { baseName: entry.baseName };

    if (entry.ext === 'avif') {
      current.avif = entry.src;
    }
    if (entry.ext === 'webp') {
      current.webp = entry.src;
    }
    if (entry.ext === 'jpg' || entry.ext === 'jpeg') {
      current.jpg = entry.src;
    }

    grouped.set(entry.baseName, current);
  }

  return [...grouped.values()]
    .filter((entry) => entry.jpg)
    .sort((a, b) => extractNumericSortKey(a.baseName) - extractNumericSortKey(b.baseName));
}
