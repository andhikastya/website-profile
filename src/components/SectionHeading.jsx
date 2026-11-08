/**
 * SectionHeading — judul bagian dengan teks kecil di atasnya.
 * Contoh tampilan:   Proyek Saya        ← eyebrow (kecil, abu-abu)
 *                    Proyek Korporat    ← title (tebal)
 *
 * `action` (opsional) tampil di kanan, misalnya tombol "Lihat Karya Saya".
 */
export default function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
      <div>
        {eyebrow && <p className="body-sm mb-2 text-muted">{eyebrow}</p>}
        <h2 className="heading-3">{title}</h2>
      </div>
      {action}
    </div>
  );
}
