/**
 * profile.js — data diri & kontak
 * --------------------------------
 * Ubah teks di sini untuk mengganti isi bagian Hero (atas Beranda),
 * menu navigasi, dan Footer. Tidak perlu menyentuh file lain.
 */

export const profile = {
  name: 'Andika Stya Hadi',
  brand: 'Andhika Design', // teks logo di Header

  // Bagian Hero di Beranda
  hero: {
    title: ['Building Products That', 'Grow With The Business'], // setiap item = satu baris
    tagline:
      "Hi, I'm Andika — a UI/UX Designer with 10+ years of experience designing POS apps, SaaS products, and websites that are easy to use and built to support business goals.",
    ctaLabel: 'Get in Touch',
    resume: '/files/andika-stya-hadi-resume.pdf', // file PDF di public/files/
    photo: '/images/home/profile.webp',
  },

  // Logo klien/perusahaan di bawah Hero (satu gambar berisi semua logo)
  clientLogos: '/images/home/client-logos.webp',
};

/**
 * Menu navigasi di Header.
 * - `to` diawali "/" = pindah halaman, "#" = scroll ke bagian di halaman.
 * - Untuk memunculkan menu Blog lagi: hapus tanda // di baris Blog di bawah.
 */
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  // { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '#contact' },
];

/** Kontak di Footer. */
export const contact = {
  title: 'Interested in working together? Get in touch.',
  links: [
    { label: 'Email', icon: 'mail', href: 'mailto:andhikastya.works@gmail.com' },
    { label: 'Dribbble', icon: 'dribbble', href: 'https://dribbble.com/andhikastya' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/andhika-stya-48932b118/' },
  ],
};
