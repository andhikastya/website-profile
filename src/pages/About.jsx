import Container from '../components/Container';
import SplitSection from '../components/SplitSection';
import { story, experiences, awards, education } from '../data/experience';

/**
 * About — halaman "Tentang": cerita, pengalaman, penghargaan, pendidikan.
 * Semua teks diambil dari src/data/experience.js.
 */
export default function About() {
  return (
    <Container className="space-y-20 pt-8 md:space-y-28 md:pt-12">
      <SplitSection title={story.title}>
        <p className="heading-4">{story.quote}</p>
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph} className="body-lg text-white/85">
            {paragraph}
          </p>
        ))}
      </SplitSection>

      <SplitSection title="Experience">
        <ul className="divide-y divide-line">
          {experiences.map((item) => (
            <ListItem key={item.company} item={item} title={item.company} subtitle={item.role}>
              <p className="body-sm mt-3 text-white/80">{item.description}</p>
              <p className="caption mt-3 text-muted">{item.period}</p>
            </ListItem>
          ))}
        </ul>
      </SplitSection>

      <SplitSection title="Awards">
        <ul className="divide-y divide-line">
          {awards.map((item) => (
            <ListItem key={item.description} item={item} title={item.title} subtitle={item.description} />
          ))}
        </ul>
      </SplitSection>

      <SplitSection title="Education">
        <ul className="divide-y divide-line">
          {education.map((item) => (
            <ListItem key={item.title} item={item} title={item.title} subtitle={item.description} />
          ))}
        </ul>
      </SplitSection>
    </Container>
  );
}

/** Satu baris daftar: logo (atau inisial) di kiri, teks di kanan. */
function ListItem({ item, title, subtitle, children }) {
  return (
    <li className="flex gap-4 py-6 first:pt-0 md:gap-6">
      {item.logo ? (
        <img src={item.logo} alt={`${title} logo`} loading="lazy" className="size-14 shrink-0 rounded-2xl md:size-[72px]" />
      ) : (
        <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary-500 font-bold md:size-[72px]">
          {item.initials}
        </span>
      )}
      <div>
        <h3 className="heading-3">{title}</h3>
        <p className="body-md mt-1 text-white/80">{subtitle}</p>
        {children}
      </div>
    </li>
  );
}
