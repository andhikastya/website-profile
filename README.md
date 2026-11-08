# Website Portofolio Andika Stya Hadi

Website portofolio yang dibuat dengan **React** + **Tailwind CSS**, berdasarkan desain di Figma
(file "Untitled", Page 1 dan page "Design System").

---

## 1. Menjalankan website di laptop

Butuh **Node.js** (sudah terpasang). Buka Terminal di folder `website`, lalu:

```bash
npm install
```

(cukup sekali di awal, untuk mengunduh semua paket)

```bash
npm run dev
```

Buka alamat yang muncul, biasanya **http://localhost:5173**. Setiap kali kamu menyimpan file,
halaman di browser langsung ikut berubah. Tekan `Ctrl + C` di Terminal untuk berhenti.

---

## 2. Susunan folder

```
website/
├── images-original/   ← gambar ASLI (besar). Taruh gambar baru di sini.
├── public/images/     ← gambar hasil kompres (WebP). Jangan diedit manual.
├── scripts/           ← script kompres gambar
└── src/
    ├── data/          ← ★ SEMUA TEKS ADA DI SINI ★
    │   ├── profile.js     (hero, menu, kontak)
    │   ├── experience.js  (halaman Tentang: cerita, pengalaman, penghargaan)
    │   └── projects.js    (semua proyek + isi halaman detail)
    ├── components/    ← potongan tampilan yang dipakai ulang (Header, Footer, Button, …)
    ├── pages/         ← halaman: Home, Projects (Portofolio), About, ProjectDetail, Majoolite
    ├── App.jsx        ← daftar alamat halaman
    └── index.css      ← warna & gaya teks (design system)
```

**Aturan sederhananya:** mau ganti **isi** → buka `src/data/`. Mau ganti **tampilan** → buka
`src/components/` atau `src/pages/`.

---

## 3. Hal yang paling sering diubah

### Mengganti teks
Buka file di `src/data/`, ubah teks di antara tanda kutip `'...'`, lalu simpan.

```js
tagline: 'Merancang produk yang menyenangkan: ...',   // ← ubah teks ini
```

> Hati-hati: jangan menghapus tanda kutip `'`, koma `,`, atau kurung `{ }`.

### Mengganti link Dribbble dan LinkedIn
Buka `src/data/profile.js`, cari bagian `contact`, lalu ganti `href` dengan link profilmu.

### Menambah proyek baru
1. Buat folder `images-original/projects/nama-proyek/`, lalu taruh gambarnya di sana
   (misalnya `thumbnail.png`, `page-home.png`).
2. Jalankan `npm run images` untuk mengompres gambar.
3. Buka `src/data/projects.js`. Salin satu proyek yang mirip (misalnya Kawan Equipment),
   tempel di dalam daftar, lalu ganti `slug`, teks, dan path gambarnya
   (`.png` → `.webp`, `images-original` → `/images`).
4. Halaman detailnya otomatis tersedia di `/proyek/nama-proyek`.

### Menampilkan proyek di Beranda
Di `src/data/projects.js`, ubah `showOnHome: false` menjadi `true` (atau sebaliknya).
Halaman **Portofolio** selalu menampilkan semua proyek.

### Memunculkan menu Blog lagi
Di `src/data/profile.js`, hapus `//` di depan baris `{ label: 'Blog', ... }`.

### Mengganti warna
Buka `src/index.css`, ubah nilai di dalam `@theme`. Contoh: ganti `--color-primary-500`
untuk mengubah warna ungu di seluruh website. `--color-primary-600` adalah warna saat tombol di-hover.

---

## 4. Gambar

```bash
npm run images
```

Script ini mengubah semua gambar di `images-original/` menjadi WebP (maksimal lebar 1600px)
dan menyimpannya di `public/images/`. Hasil saat ini: **63 gambar, dari 28 MB menjadi ±3 MB**.

Di kode, gambar dipanggil dengan path yang diawali `/images/...`, contoh:
`/images/projects/pawmeals/thumbnail.webp`.

---

## 5. Class Tailwind yang sering dipakai

| Class | Arti |
|---|---|
| `bg-primary-500` / `hover:bg-primary-600` | latar ungu / ungu lebih gelap saat hover |
| `bg-surface`, `bg-page` | latar kartu / latar halaman |
| `text-muted` | teks abu-abu |
| `heading-1` … `heading-4` | ukuran judul (sesuai Text Style Figma) |
| `body-lg`, `body-md`, `body-sm`, `caption` | ukuran teks isi |
| `rounded-lg` / `rounded-2xl` | sudut membulat 8px / 16px |
| `md:...`, `lg:...` | berlaku mulai lebar tablet (768px) / desktop (1024px) |

Contoh: `grid md:grid-cols-2` artinya di HP satu kolom, mulai tablet dua kolom.

---

## 6. Online-kan website (deploy)

```bash
npm run build
```

Hasilnya ada di folder `dist/`. Cara termudah:

- **Netlify**: buka app.netlify.com/drop, lalu seret folder `dist` ke halaman itu.
- **Vercel**: hubungkan folder ini lewat GitHub di vercel.com. Pengaturannya sudah ada di `vercel.json`.

File `public/_redirects` (untuk Netlify) dan `vercel.json` (untuk Vercel) memastikan alamat seperti
`/proyek/pawmeals` tetap bisa dibuka langsung tanpa error 404.
