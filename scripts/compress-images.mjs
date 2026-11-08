/**
 * Script kompres gambar
 * ---------------------
 * Cara pakai:  npm run images
 *
 * Yang dilakukan script ini:
 * 1. Membaca semua gambar di folder `images-original/` (PNG, JPG, JPEG, WebP).
 * 2. Mengecilkan lebarnya (maksimal 1600px) supaya tidak terlalu berat.
 * 3. Mengubahnya ke format WebP (jauh lebih kecil dari PNG/JPG).
 * 4. Menyimpan hasilnya ke `public/images/` dengan struktur folder yang sama.
 *
 * Contoh:
 *   images-original/projects/pawmeals/thumbnail.png
 *   → public/images/projects/pawmeals/thumbnail.webp
 *
 * Kalau menambah gambar baru: taruh di `images-original/`, lalu jalankan
 * `npm run images` lagi. Gambar yang sudah ada akan ditimpa dengan versi terbaru.
 */
import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const SOURCE_DIR = 'images-original';
const OUTPUT_DIR = 'public/images';
const MAX_WIDTH = 1600; // lebar maksimal (px)
const QUALITY = 80; // kualitas WebP (0–100). 80 = kecil tapi tetap tajam
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];

// Cari semua file gambar di dalam folder (termasuk sub-folder)
async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return findImages(fullPath);
      const ext = path.extname(entry.name).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext) ? [fullPath] : [];
    }),
  );
  return files.flat();
}

const formatKB = (bytes) => `${Math.round(bytes / 1024)} KB`;

const images = await findImages(SOURCE_DIR);
let totalBefore = 0;
let totalAfter = 0;

for (const inputPath of images) {
  // Ganti folder asal → folder tujuan, dan ekstensi → .webp
  const relativePath = path.relative(SOURCE_DIR, inputPath);
  const outputPath = path.join(OUTPUT_DIR, relativePath).replace(/\.(png|jpe?g|webp)$/i, '.webp');
  await mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true }) // jangan perbesar gambar kecil
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  const before = (await stat(inputPath)).size;
  const after = (await stat(outputPath)).size;
  totalBefore += before;
  totalAfter += after;
  console.log(`✔ ${relativePath}  ${formatKB(before)} → ${formatKB(after)}`);
}

console.log(`\nSelesai: ${images.length} gambar, ${formatKB(totalBefore)} → ${formatKB(totalAfter)}`);
