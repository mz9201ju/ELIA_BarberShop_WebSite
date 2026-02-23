import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const GALLERY_DIR = path.join(rootDir, 'src', 'assets');
const HERO_INPUT = path.join(rootDir, 'public', 'elia-barber-shop.png');

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function optimizeGalleryImages() {
  const entries = await fs.readdir(GALLERY_DIR);
  const jpgFiles = entries.filter((fileName) => fileName.toLowerCase().endsWith('.jpg'));

  for (const fileName of jpgFiles) {
    const inputPath = path.join(GALLERY_DIR, fileName);
    const baseName = fileName.replace(/\.jpg$/i, '');
    const avifPath = path.join(GALLERY_DIR, `${baseName}.avif`);
    const webpPath = path.join(GALLERY_DIR, `${baseName}.webp`);

    const image = sharp(inputPath);

    await image.clone().avif({ quality: 52, effort: 7 }).toFile(avifPath);
    await image.clone().webp({ quality: 74, effort: 6 }).toFile(webpPath);

    process.stdout.write(`Optimized gallery image: ${fileName}\n`);
  }
}

async function optimizeHeroImage() {
  if (!(await fileExists(HERO_INPUT))) {
    throw new Error(`Hero image not found at ${HERO_INPUT}`);
  }

  const heroBasePath = HERO_INPUT.replace(/\.png$/i, '');
  const heroAvifPath = `${heroBasePath}.avif`;
  const heroWebpPath = `${heroBasePath}.webp`;

  const heroImage = sharp(HERO_INPUT);
  await heroImage.clone().avif({ quality: 54, effort: 7 }).toFile(heroAvifPath);
  await heroImage.clone().webp({ quality: 76, effort: 6 }).toFile(heroWebpPath);

  process.stdout.write('Optimized hero image: elia-barber-shop.png\n');
}

async function main() {
  await optimizeGalleryImages();
  await optimizeHeroImage();
  process.stdout.write('Image optimization complete.\n');
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
