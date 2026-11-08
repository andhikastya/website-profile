import { useParams } from 'react-router';
import Container from '../components/Container';
import SplitSection, { Dots } from '../components/SplitSection';
import { getProject } from '../data/projects';
import NotFound from './NotFound';

/**
 * ProjectDetail — SATU template untuk semua halaman detail proyek
 * (Kawan Equipment, Wyndham Basketball, Fortress Resistors, Pawmeals, Harwi Gadget).
 *
 * Alamat halaman: /proyek/<slug>. Slug dibaca dari alamat, lalu datanya dicari
 * di src/data/projects.js. Bagian yang datanya kosong otomatis tidak ditampilkan.
 */
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  // Proyek tidak ditemukan / belum punya halaman detail → tampilkan halaman 404
  if (!project || !project.detail) return <NotFound />;

  const { detail, card } = project;
  const title = detail.title ?? card.title;

  return (
    <Container className="space-y-20 md:space-y-24">
      {/* ── Kartu hero ── */}
      <section className="grid gap-10 rounded-2xl bg-surface p-6 md:p-12 lg:grid-cols-[557fr_389fr] lg:gap-16">
        <div className="space-y-8">
          <img
            src={detail.thumbnail}
            alt={`${title} project preview`}
            className="aspect-[4/3] w-full rounded-lg object-cover"
          />
          <div>
            <p className="body-sm">{detail.label}</p>
            <h1 className="heading-2 mt-2">{title}</h1>
            <dl className="mt-6 flex flex-wrap gap-x-12 gap-y-4 md:gap-x-16">
              {detail.meta.map((item) => (
                <div key={item.label} className="space-y-2">
                  <dt className="body-md text-muted">{item.label}:</dt>
                  <dd className="body-md">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="space-y-4">
          {detail.logo && <img src={detail.logo} alt={`${title} logo`} className="mb-6 h-8 w-auto" />}
          <p className="body-md font-semibold text-muted">About the Client</p>
          <p className="body-md leading-relaxed">{detail.aboutClient}</p>
          {detail.highlight && (
            <div className="inline-block rounded-lg bg-white px-4 py-3 text-ink">
              <p className="caption text-muted">{detail.highlight.label}</p>
              <p className="heading-3">{detail.highlight.value}</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Bagian teks (Tentang Proyek, Cerita, dst.) ── */}
      {detail.sections?.map((section) => (
        <div key={section.title} className="space-y-10">
          <SplitSection title={section.title}>
            <p className="body-lg text-white/85">{section.text}</p>
          </SplitSection>
          {section.image ? <ShowcaseImage src={section.image} alt={section.title} /> : <Dots />}
        </div>
      ))}

      {/* ── Tipografi ── */}
      {detail.fonts && (
        <SplitSection title="Typography">
          <div className="grid gap-6 sm:grid-cols-2">
            {detail.fonts.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${title} typography sample ${index + 1}`}
                loading="lazy"
                className={`w-full rounded-lg ${detail.fonts.length === 1 ? 'sm:col-span-2' : ''}`}
              />
            ))}
          </div>
        </SplitSection>
      )}

      {/* ── Warna ── */}
      {detail.colors && (
        <div className="space-y-10">
          <SplitSection title="Colors">
            <img src={detail.colors} alt={`${title} color palette`} loading="lazy" className="w-full rounded-lg" />
          </SplitSection>
          <Dots />
        </div>
      )}

      {/* ── Screenshot halaman ── */}
      {detail.pages?.map((page) => (
        <section key={page.title} className="space-y-8">
          <h2 className="heading-3">{page.title}</h2>
          <ScreenGrid images={page.images} alt={`${page.title} ${title}`} />
        </section>
      ))}
    </Container>
  );
}

/** Gambar besar di tengah dengan sudut membulat. */
function ShowcaseImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={`${alt} section preview`}
      loading="lazy"
      className="mx-auto w-full max-w-[700px] rounded-2xl"
    />
  );
}

/**
 * Susunan screenshot:
 * - 1 gambar  → penuh
 * - 2 gambar  → berdampingan
 * - 3 gambar  → 1 besar di atas, 2 berdampingan di bawah
 * Di HP semuanya bertumpuk.
 */
function ScreenGrid({ images, alt }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {images.map((src, index) => {
        const isFullWidth = images.length === 1 || (images.length === 3 && index === 0);
        return (
          <img
            key={src}
            src={src}
            alt={`${alt} (${index + 1})`}
            loading="lazy"
            className={`aspect-[4/3] w-full rounded-2xl object-cover ${isFullWidth ? 'md:col-span-2' : ''}`}
          />
        );
      })}
    </div>
  );
}
