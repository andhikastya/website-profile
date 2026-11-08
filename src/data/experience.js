/**
 * experience.js — isi halaman "Tentang"
 * --------------------------------------
 * Cerita, pengalaman kerja, penghargaan, dan pendidikan.
 * Untuk menambah pengalaman baru: salin satu objek { ... } di `experiences`,
 * taruh paling atas, lalu ubah isinya.
 *
 * `logo`     : path gambar logo (opsional). Kalau tidak ada logo,
 * `initials` : teks singkat yang tampil di kotak ungu (misal "AG").
 */

export const story = {
  title: 'My Story',
  quote: '“My name is Andika Stya Hadi. I am currently a UI Designer at Apique Group.”',
  paragraphs: [
    'I am from Indonesia and started my career in 2014 as a front-end developer, then joined Jagoan Hosting as a UI Engineer in 2016. Around 2017, working on a range of web and mobile projects drew me toward interface design, and I have been doing it ever since.',
    'In 2017 and 2018, through Beon Intermedia, I worked on the UN-Habitat Surabaya website together with the Kreavi team — an initiative of the mayor of Surabaya at the time, Tri Rismaharini — as well as the official Arema FC website. In 2019, I joined Travelingyuk and collaborated with DOT Indonesia to design the data and information center website for the Indonesian House of Representatives (DPR RI).',
    'From 2020 to 2024, I led the design of Majoolite, the Majoo app, and the back-office dashboard at Majoo, while also serving as design division supervisor. Today I am a UI Designer at Apique Group and a freelance UI/UX designer at Mulaidaripagi Studio (MDP).',
  ],
};

export const experiences = [
  {
    company: 'Mulaidaripagi Studio (MDP)',
    role: 'Freelance UI/UX Designer',
    period: 'Present',
    description:
      'Designing websites, landing pages, mobile apps, and web dashboards for the studio’s clients.',
    logo: '/images/about/logo-mdp.webp',
  },
  {
    company: 'Apique Group',
    role: 'UI Designer',
    period: 'Aug 2024 – Present',
    description:
      'Designing tablet and mobile POS apps for laundry businesses, plus the ticketing app, web dashboard, and landing page for the Laundry Innovation Summit.',
    logo: '/images/about/logo-apique-group.webp',
  },
  {
    company: 'Majoo',
    role: 'Product Designer',
    period: 'Jan 2020 – Jan 2024',
    description:
      'Led the design of Majoolite, the Majoo app, and the back-office dashboard across web, mobile, and tablet, and served as design division supervisor.',
    logo: '/images/about/logo-majoo.webp',
  },
  {
    company: 'Travelingyuk',
    role: 'UI Engineer',
    period: 'Mar 2019 – Jan 2020',
    description:
      'Designed and built travelingyuk.com, then maintained it in line with the company’s goals.',
    logo: '/images/about/logo-travelingyuk.webp',
  },
  {
    company: 'Jagoan Hosting',
    role: 'UI Engineer',
    period: 'Jan 2016 – Feb 2019',
    description:
      'Designed templates for jagoanweb.com and jagoanstore.com, then turned them into WordPress themes with a builder plugin.',
    logo: '/images/about/logo-jagoan-hosting.webp',
  },
  {
    company: 'Smart Soft Studio',
    role: 'Front End Developer',
    period: 'Aug 2014 – Jan 2016',
    description: 'Built WordPress themes from PSD designs and handled several clients.',
    logo: '/images/about/logo-smart-soft-studio.webp',
  },
];

export const awards = [
  {
    title: '1st Place · 2022',
    description: 'Website Design Competition — Jagoan Hosting',
    logo: '/images/about/award-lomba-desain-website.webp',
  },
  {
    title: '1st Place · 2013',
    description: 'STIKI Student Competition — Web Design',
    logo: '/images/about/award-stiki.webp',
  },
  {
    title: '2nd Place · 2013',
    description: 'Java Bali IT Competition — Universitas Negeri Malang',
    logo: '/images/about/award-java-bali.webp',
  },
];

export const education = [
  {
    title: 'Institut ASIA',
    description: 'Computer Science · 2014 – 2018',
    logo: '/images/about/edu-institut-asia.webp',
  },
];
