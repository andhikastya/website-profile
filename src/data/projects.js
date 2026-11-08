/**
 * projects.js — semua data proyek
 * --------------------------------
 * Setiap proyek adalah satu objek { ... }. Urutan di daftar ini = urutan tampil.
 *
 * CARA MENAMBAH PROYEK BARU
 * 1. Taruh gambar di `images-original/projects/<slug>/`, lalu jalankan `npm run images`.
 * 2. Salin salah satu proyek di bawah (misalnya Kawan Equipment), tempel di daftar,
 *    lalu ganti isinya. `slug` dipakai sebagai alamat halaman: /work/<slug>.
 *
 * Arti setiap bagian:
 * - group        : 'corporate' (kartu besar "Corporate Projects") atau 'side' (grid "Latest Projects").
 * - showOnHome   : true = tampil di Beranda. Semua proyek tetap tampil di halaman Work.
 * - card         : isi kartu di Beranda/halaman Work.
 * - detail       : isi halaman detail. Setiap proyek di daftar ini wajib punya `detail`,
 *                  supaya tidak ada kartu yang mengarah ke halaman kosong.
 */

export const projects = [
  // ─────────────────────────── CORPORATE PROJECTS ───────────────────────────
  {
    slug: 'majoolite',
    group: 'corporate',
    showOnHome: true,
    card: {
      title: 'Majoolite',
      meta: 'Mobile App • 2022–2023',
      description:
        'Majoolite is a simple, easy-to-use POS app for small businesses, with 10K+ downloads on Google Play.',
      image: '/images/home/card-majoolite.webp',
    },
    // Majoolite punya halaman khusus (src/pages/Majoolite.jsx) karena isinya
    // lebih lengkap (wawancara pengguna, statistik). Isinya ada di `majooliteCaseStudy` di bawah.
    detail: true,
  },
  {
    slug: 'wyndham-basketball',
    group: 'corporate',
    showOnHome: true,
    card: {
      title: 'Wyndham Basketball',
      meta: 'Website • 2024',
      description:
        'A community basketball association website in Wyndham, Australia, covering schedules, registration, and news.',
      image: '/images/projects/wyndham-basketball/thumbnail.webp',
    },
    detail: {
      label: 'Website',
      thumbnail: '/images/projects/wyndham-basketball/thumbnail.webp',
      meta: [
        { label: 'Year', value: '2024' },
        { label: 'Client', value: 'Wyndham Basketball' },
        { label: 'Category', value: 'UI · Website' },
      ],
      aboutClient:
        'Wyndham Basketball is the largest community basketball association in the Wyndham region of Victoria, Australia. They run competitions and training programs for every age group, from juniors to seniors.',
      sections: [
        {
          title: 'About the Project',
          text: 'This website was built to make game schedules, registration, news, and event information easy to reach. The design is modern, responsive, and simple to use, supporting the needs of a growing basketball community.',
        },
      ],
      fonts: [
        '/images/projects/wyndham-basketball/font-1.webp',
        '/images/projects/wyndham-basketball/font-2.webp',
      ],
      colors: '/images/projects/wyndham-basketball/colors.webp',
      pages: [
        { title: 'Home Page', images: ['/images/projects/wyndham-basketball/page-home.webp'] },
        { title: 'Event List Page', images: ['/images/projects/wyndham-basketball/page-event-list.webp'] },
        { title: 'Event Calendar Page', images: ['/images/projects/wyndham-basketball/page-event-calendar.webp'] },
      ],
    },
  },

  // ─────────────────────────── SIDE PROJECTS ───────────────────────────
  {
    slug: 'pawmeals',
    group: 'side',
    showOnHome: true,
    card: {
      title: 'Pawmeals.co',
      meta: 'Website • 2022',
      description: 'A healthy pet food website.',
      image: '/images/home/card-pawmeals.webp',
    },
    detail: {
      label: 'Website',
      title: 'Pawmeals',
      thumbnail: '/images/projects/pawmeals/thumbnail.webp',
      meta: [
        { label: 'Year', value: '2022' },
        { label: 'Client', value: 'Pawmeals' },
        { label: 'Category', value: 'UI · Website' },
      ],
      aboutClient:
        'Pawmeals is a pet food brand serving fresh, preservative-free meals for dogs, made from natural ingredients with guidance from pet nutrition experts. Through a subscription model, Pawmeals delivers balanced, nutritious meals straight to pet owners’ homes.',
      sections: [
        {
          title: 'About the Project',
          text: 'The website was designed to make ordering effortless, educate customers, and reflect a brand that is warm, modern, and genuinely caring toward pets.',
        },
      ],
      fonts: ['/images/projects/pawmeals/font-1.webp'],
      colors: '/images/projects/pawmeals/colors.webp',
      pages: [
        {
          title: 'Home Page',
          images: [
            '/images/projects/pawmeals/page-home-1.webp',
            '/images/projects/pawmeals/page-home-2.webp',
            '/images/projects/pawmeals/page-home-3.webp',
          ],
        },
      ],
    },
  },
  {
    slug: 'harwi-gadget',
    group: 'side',
    showOnHome: true,
    card: {
      title: 'Harwi Gadget',
      meta: 'Landing Page • 2024',
      description: 'A landing page for an Apple and Android gadget store in Surabaya.',
      image: '/images/home/card-harwi-gadget.webp',
    },
    detail: {
      label: 'Landing Page Website',
      logo: '/images/projects/harwi-gadget/logo.webp',
      thumbnail: '/images/projects/harwi-gadget/thumbnail.webp',
      meta: [
        { label: 'Duration', value: 'Dec 2023 – Jan 2024' },
        { label: 'Role', value: 'UI/UX Designer' },
      ],
      highlight: { label: 'Instagram Followers', value: '12K' },
      aboutClient:
        'Harwi Gadget is a store in Surabaya that buys and sells genuine, high-quality iPhone, iPad, MacBook, and Mac mini units, along with Android devices and accessories.',
      sections: [
        {
          title: 'The Story',
          text: 'Harwi Gadget is a Surabaya store selling premium devices at the highest quality. This project was a collaboration with Cherrypick Studio, with me as the UI/UX designer.',
          image: '/images/projects/harwi-gadget/section-hero.webp',
        },
        {
          title: 'Product Categories & Services',
          text: 'I placed the product categories right after the hero banner so visitors immediately understand what Harwi Gadget sells and what makes their service stand out.',
          image: '/images/projects/harwi-gadget/section-category.webp',
        },
        {
          title: 'Testimonials',
          text: 'After the product section, I added customer testimonials to build trust in Harwi Gadget. I capped it at six testimonials — the ones that best represent the customer experience.',
          image: '/images/projects/harwi-gadget/section-testimonial.webp',
        },
        {
          title: 'FAQ & Contact',
          text: 'Frequently asked questions sit near the bottom as extra context for first-time visitors, followed by the contact section. After browsing the products, offers, and services, the visitor’s final step is to reach out to a Harwi Gadget admin to continue the purchase personally — this site is a business profile, not an online store. Customers can also browse the products directly through the available marketplaces.',
          image: '/images/projects/harwi-gadget/section-faq.webp',
        },
      ],
    },
  },
  {
    slug: 'kawan-equipment',
    group: 'side',
    showOnHome: true,
    card: {
      title: 'Kawan Equipment',
      meta: 'Website • 2024',
      description: 'An online store for 4x4 vehicle accessories and gear.',
      image: '/images/projects/kawan-equipment/thumbnail.webp',
    },
    detail: {
      label: 'Website',
      thumbnail: '/images/projects/kawan-equipment/thumbnail.webp',
      meta: [
        { label: 'Year', value: '2024' },
        { label: 'Client', value: 'Kawan Equipment' },
        { label: 'Category', value: 'UI · Website' },
      ],
      aboutClient:
        'Kawan Equipment is an online store specializing in accessories and gear for 4x4 vehicles such as Jeeps and other off-road models. With products like bumpers, roof racks, LED lights, suspension kits, and recovery gear, Kawan Equipment serves adventure enthusiasts with high-quality, dependable equipment.',
      sections: [
        {
          title: 'About the Project',
          text: 'The website was designed to be responsive and easy to use, with a well-structured catalog, product filters, and detailed product pages that support a smooth shopping experience.',
        },
      ],
      fonts: [
        '/images/projects/kawan-equipment/font-1.webp',
        '/images/projects/kawan-equipment/font-2.webp',
      ],
      colors: '/images/projects/kawan-equipment/colors.webp',
      pages: [
        { title: 'Home Page', images: ['/images/projects/kawan-equipment/page-home.webp'] },
        { title: 'Product Detail Page', images: ['/images/projects/kawan-equipment/page-detail.webp'] },
        { title: 'Products Page', images: ['/images/projects/kawan-equipment/page-products.webp'] },
      ],
    },
  },
  {
    slug: 'fortress-resistors',
    group: 'side',
    showOnHome: true,
    card: {
      title: 'Fortress Resistors',
      meta: 'Website • 2025',
      description: 'A catalog website for a resistor manufacturer serving industrial and electronics markets.',
      image: '/images/projects/fortress-resistors/thumbnail.webp',
    },
    detail: {
      label: 'Website',
      thumbnail: '/images/projects/fortress-resistors/thumbnail.webp',
      meta: [
        { label: 'Year', value: '2025' },
        { label: 'Client', value: 'Fortress Resistors' },
        { label: 'Category', value: 'UI · Website' },
      ],
      aboutClient:
        'Fortress Resistors manufactures high-quality resistors for industrial and electronics applications. Known for durability and precision, their products are used in electrical systems, automation, and heavy machinery.',
      sections: [
        {
          title: 'About the Project',
          text: 'The website presents the product catalog and technical specifications, and makes it easy for clients to send an inquiry or place an order — all in a clean, professional, tech-forward design.',
        },
      ],
      fonts: ['/images/projects/fortress-resistors/font-1.webp'],
      colors: '/images/projects/fortress-resistors/colors.webp',
      pages: [
        {
          title: 'Home Page',
          images: [
            '/images/projects/fortress-resistors/page-home-1.webp',
            '/images/projects/fortress-resistors/page-home-2.webp',
          ],
        },
        {
          title: 'Product Detail Page',
          images: [
            '/images/projects/fortress-resistors/page-product-detail-1.webp',
            '/images/projects/fortress-resistors/page-product-detail-2.webp',
          ],
        },
        {
          title: 'Products Page',
          images: [
            '/images/projects/fortress-resistors/page-products-1.webp',
            '/images/projects/fortress-resistors/page-products-2.webp',
          ],
        },
      ],
    },
  },
];

/** Cari satu proyek berdasarkan slug-nya, misal getProject('pawmeals'). */
export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

/* ═══════════════════════ ISI CASE STUDY MAJOOLITE ═══════════════════════ */
const M = '/images/projects/majoolite'; // folder gambar Majoolite (biar path tidak terlalu panjang)

export const majooliteCaseStudy = {
  hero: {
    eyebrow: 'MOBILE APP',
    title: 'Majoolite App',
    image: `${M}/hero-phones.webp`,
    logo: `${M}/logo.webp`,
    intro: { highlight: 'Majoolite', text: ' was featured on Chamjo Design, a design inspiration site that curates app patterns from across Asia.' },
    badge: `${M}/chamjo.webp`,
    meta: [
      { label: 'Duration', value: '2022 – 2023' },
      { label: 'Role', value: 'UI/UX Designer' },
    ],
    // TODO: isi dengan link Google Play Majoolite supaya tombol "Download" muncul
    downloadUrl: '',
  },
  background: {
    title: 'Background & My Role',
    quote:
      '“As a UI/UX designer at Majoo, I was assigned by the design manager to lead this project. The feature had already shipped, but several screens needed work.”',
    paragraphs: [
      'POS (Point of Sale) apps are increasingly common in Indonesia, especially among the country’s fast-growing small businesses. Coffee shops, food stalls, and retail stores are all starting to use POS apps to run their sales.',
      'There are also employees starting side businesses and home-based sellers who want a POS app but are held back by subscription prices that are steep for a small operation. On top of that, many POS features are things they simply do not need yet.',
      'So Majoo set out to help early-stage small businesses adopt a POS at an affordable price, matched to what they actually need, backed by a user experience that stays easy and comfortable.',
    ],
    image: `${M}/background-photos.webp`,
  },
  targetUsers: {
    title: 'Target Users',
    items: [
      'Employees running a side business who want technology to record transactions and review sales reports.',
      'Small or early-stage business owners held back by the cost of a Majoo Premium subscription or competing apps.',
      'Small businesses that do not need the full feature set — things like staff management or payroll — because they have only one or two employees, or the owner runs the register themselves.',
    ],
  },
  problem: {
    title: 'Problems & Feedback',
    text: 'After the first release, the CEO and stakeholders noted that the home screen was neither engaging nor informative enough. From there, my team and I reworked the home screen so it felt richer and no longer empty. We also added features Majoolite customers were asking for, such as QRIS payments and online store support.',
    imageCaption: 'Previous Design',
    image: `${M}/old-design-screens.webp`,
  },
  // Bagian yang berisi gambar HP + penjelasan fitur (callout)
  features: [
    {
      title: 'Home Screen',
      text: 'After the feedback from the CEO and stakeholders, we worked through it with the product owner. Based on that input, we built a more engaging and informative layout so users can see the information that matters to their business — reports and balances — straight from the home screen.',
      phones: [`${M}/home-phone.webp`],
      callouts: [
        { title: 'Balance', text: 'I added QRIS and online store balances so owners can see how much they have earned.' },
        { title: 'Shortcuts', text: 'I added a shortcut menu to get users to their destination faster. With the product owner team, we settled on three main shortcuts: add sale, record finances, and add product.' },
        { title: 'Banner', text: 'I added a banner offering an upgrade for when Majoolite no longer covers the business’s needs.' },
      ],
    },
    {
      title: 'Transactions',
      text: 'On the transaction screen, users can pick products quickly and move straight into the order details. There they can review the customer’s order, edit items, add a discount or extra charges, or save the order to the order list if the customer wants to pay later.',
      phones: [`${M}/transaction-phone.webp`, `${M}/order-detail-phone.webp`],
      callouts: [
        { title: 'Add Customer', text: 'Business owners can add and store customer details in Majoolite.' },
        { title: 'Experience & Interface', text: 'Majoolite keeps the same transaction flow and interface patterns as Majoo Premium, so it stays easy to use and users are not thrown off when they upgrade from Majoolite to Majoo Premium.' },
        { title: 'Extra Menu', text: 'Business owners can add discounts and extra charges, save an order, or delete it.' },
      ],
    },
    {
      title: 'Payments',
      text: 'Majoolite offers three payment options — cash, cashless, and QRIS — so customers can pay however they prefer. For a small business, that coverage is more than enough. Previously, Majoolite only supported cash and EDC payments.',
      wideImage: `${M}/payment-phones.webp`,
    },
  ],
  interview: {
    title: 'User Interviews',
    text: 'A few months after Majoolite shipped, we wanted to understand how people experienced it through 2023. With help from Majoo’s UX Researcher team, we gathered feedback from active customers. The details are below.',
    note: 'Some customers were interviewed over the phone.',
    images: [`${M}/interview-1.webp`, `${M}/interview-2.webp`],
    users: [
      {
        business: 'UD. Djaya Bersama',
        name: 'Muhammad Safriansyah',
        profile: ['Small coffee shop', 'Running for 1 year', '4 crew members', 'Based in North Kalimantan', '5 months on Majoolite'],
        reasons: ['Enough to record transactions', 'Affordable and matched to their needs', 'Tried Moka before, but it was expensive with features they did not need yet', 'Planning to upgrade to Majoo Premium'],
        ratings: ['Scored it 8 for being easy to use', 'Scored it 2 for frequent server errors while processing data'],
        painPoints: ['No receipt printing feature at first', 'When a server error hits, they sometimes fall back to recording by hand'],
      },
      {
        business: 'Siomay Kita',
        name: 'Rezky Zulfikor',
        profile: ['Small food stall', 'Running for 2 years', 'Based in Cirebon', '5 months on Majoolite', '1 cashier'],
        reasons: ['Affordable and matched to their needs', 'Previously used Moka, but it was expensive', 'Easy to use and not complicated', 'Prefers using it on a smartphone because it is simpler', 'No plans yet to upgrade to Majoo Premium'],
        ratings: ['Scored it 8 for being easy to use', 'Scored it 2 for server errors and app lag'],
        painPoints: ['Server errors', 'The app lags at times'],
      },
      {
        business: 'Rumah Makan Oasis',
        name: 'Yanti',
        profile: ['Small restaurant', 'Running for 2 years', 'Based in Gorontalo', '9 months on Majoolite', '1 cashier'],
        reasons: ['Affordable and matched to their needs', 'Has used Majoolite from the start', 'Easy and comfortable to use', 'No plans yet to upgrade to Majoo Premium'],
        ratings: ['Scored it 8 for being easy to use', 'Scored it 2 because reports cannot be exported as a full summary'],
        painPoints: ['Majoolite’s price went up, though it is still affordable', 'No way to print a full summary from the report data'],
      },
      {
        business: 'Amor Petshop',
        name: 'Nadia',
        profile: ['Small store', 'Running for 2 years', 'Based in Bangka Belitung', '5 months on Majoolite', 'Several employees'],
        reasons: ['Affordable', 'Good-looking interface', 'Easy to use and understand', 'Even older users pick it up easily', 'No plans yet to upgrade to Majoo Premium'],
        ratings: ['Scored it 9 for being easy and meeting expectations', 'Scored it 1 for frequent server errors'],
        painPoints: ['Server errors when searching for products during a transaction', 'Category data failing to load because of server errors'],
      },
    ],
  },
  conclusion: {
    title: 'Conclusion',
    paragraphs: [
      'Across interviews with four active Majoolite users, the average score was 8.25 out of 10 for a good-looking, easy-to-use interface, while a 1.75 out of 10 was given for server errors. A few features were also still missing.',
      'Overall, the Majoolite improvements landed well with the users we interviewed. Going forward, Majoolite can keep improving without overtaking Majoo Premium’s feature set, so it stays focused and true to its original purpose.',
    ],
    stats: [
      { label: 'Average Score (4 Users)', value: '8.25 out of 10' },
      { label: 'Downloads', value: '+150%' },
    ],
  },
  downloads: {
    title: 'Download Numbers',
    text: 'Majoolite was downloaded 4K+ times between March and May 2023. After the improvements, total downloads grew to 10K+ by January 2024.',
    images: [
      { src: `${M}/stats-downloads-chart.webp`, caption: 'Total downloads from March to May 2023 reached 4,000+' },
      { src: `${M}/stats-play-store.webp`, caption: 'Total downloads through January 2024 reached 10,000+' },
    ],
  },
};
