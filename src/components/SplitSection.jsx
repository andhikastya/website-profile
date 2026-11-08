/**
 * SplitSection — bagian dengan judul di kiri dan isi di kanan.
 * Di HP, judul dan isi otomatis bertumpuk (judul di atas).
 *
 * Contoh:
 *   <SplitSection title="About the Project">
 *     <p>Isi paragraf...</p>
 *   </SplitSection>
 */
export default function SplitSection({ title, children, id }) {
  return (
    <section id={id} className="grid gap-4 md:grid-cols-[1fr_2fr] md:gap-8">
      <h2 className="heading-3">{title}</h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

/** Tiga titik kecil pemisah antar bagian (seperti di desain Figma). */
export function Dots() {
  return (
    <div className="flex justify-center gap-6 py-4" aria-hidden="true">
      <span className="size-2 rounded-full bg-muted" />
      <span className="size-2 rounded-full bg-muted" />
      <span className="size-2 rounded-full bg-muted" />
    </div>
  );
}
