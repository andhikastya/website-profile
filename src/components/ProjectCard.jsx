import { Link } from 'react-router';
import TextLink from './TextLink';

/**
 * ProjectCard — kartu proyek di Beranda dan halaman Portofolio.
 *
 * Ada 2 gaya (`variant`), sesuai desain Figma:
 * - "corporate": kartu besar berlatar abu gelap, teks di atas, gambar di bawah.
 * - "side"     : gambar di atas, judul + deskripsi di bawah.
 *
 * `project` diambil dari src/data/projects.js.
 * Kalau proyek punya halaman detail, kartu bisa diklik.
 */
export default function ProjectCard({ project, variant = 'side' }) {
  const { card, slug, detail } = project;
  const link = detail ? `/work/${slug}` : null;

  if (variant === 'corporate') {
    return (
      <article className="flex flex-col gap-6 rounded-2xl bg-surface p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="heading-3">{card.title}</h3>
            <p className="body-md text-muted">{card.meta}</p>
          </div>
          <p className="body-md">{card.description}</p>
          <TextLink to={link}>{link ? 'Read more' : 'Coming soon'}</TextLink>
        </div>
        <ProjectImage src={card.image} alt={card.title} link={link} className="aspect-[495/428]" />
      </article>
    );
  }

  return (
    <article className="flex flex-col gap-4">
      <ProjectImage src={card.image} alt={card.title} link={link} className="aspect-[543/400]" />
      <div className="space-y-2">
        <h3 className="heading-3">
          {link ? (
            <Link to={link} className="transition-colors hover:text-[#b4a9f5]">
              {card.title}
            </Link>
          ) : (
            card.title
          )}
        </h3>
        <p className="body-md text-white/80">{card.description}</p>
      </div>
    </article>
  );
}

/** Gambar kartu. Saat hover, gambar sedikit membesar. */
function ProjectImage({ src, alt, link, className }) {
  const image = (
    <div className={`overflow-hidden rounded-2xl bg-line ${className}`}>
      <img
        src={src}
        alt={`${alt} project preview`}
        loading="lazy"
        className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </div>
  );
  return link ? (
    <Link to={link} className="group block" aria-label={`View ${alt} details`}>
      {image}
    </Link>
  ) : (
    image
  );
}
