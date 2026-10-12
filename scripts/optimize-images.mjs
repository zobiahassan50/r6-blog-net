import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();

/** Display slots up to 2x retina for common layouts + full-bleed hero. */
const widths = [320, 400, 512, 640, 960, 1280, 1920];

const dirs = ['public/images', 'public/images/gameplay', 'public/images/blog'];

/**
 * Resize to the requested width, then encode at quality 100.
 * Size drops because pixels match the display slot — not because quality is lowered.
 */
async function writeVariants(input, baseDir, baseName) {
  for (const width of widths) {
    const webpOut = path.join(baseDir, `${baseName}-${width}.webp`);
    await sharp(input, { failOn: 'none' })
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 100, alphaQuality: 100, effort: 6, smartSubsample: true })
      .toFile(webpOut);
    console.log(`Wrote ${path.relative(root, webpOut)}`);

    const avifOut = path.join(baseDir, `${baseName}-${width}.avif`);
    await sharp(input, { failOn: 'none' })
      .resize({ width, withoutEnlargement: true, kernel: sharp.kernel.lanczos3 })
      .avif({ quality: 100, effort: 6 })
      .toFile(avifOut);
    console.log(`Wrote ${path.relative(root, avifOut)}`);
  }
}

async function optimizeDir(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;

  const files = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((file) => /\.(png|jpe?g)$/i.test(file) && !/-\d+\.(webp|avif)$/i.test(file));

  for (const file of files) {
    const input = path.join(dir, file);
    const base = file.replace(/\.(png|jpe?g)$/i, '');
    await writeVariants(input, dir, base);
  }
}

for (const dir of dirs) {
  await optimizeDir(dir);
}

console.log('Image optimization complete (quality 100 WebP + AVIF, responsive widths).');
