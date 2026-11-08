import Container from '../components/Container';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

/**
 * Home — halaman Beranda.
 * Urutan bagian: Hero → Logo klien → Proyek Korporat → Proyek Terbaru.
 * Proyek yang tampil = proyek dengan `showOnHome: true` di src/data/projects.js.
 */
export default function Home() {
  const homeProjects = projects.filter((project) => project.showOnHome);
  const corporate = homeProjects.filter((project) => project.group === 'corporate');
  const side = homeProjects.filter((project) => project.group === 'side');

  return (
    <>
      {/* ── Hero ── */}
      <Container className="grid items-center gap-10 pb-16 pt-8 md:grid-cols-[1.4fr_1fr] md:pb-20 md:pt-12">
        <div className="space-y-6">
          {/* Judul hero sedikit lebih kecil dari heading-1 di desktop (64px → 52px)
              supaya dua baris teksnya tetap proporsional terhadap foto di sebelahnya. */}
          <h1 className="heading-1 lg:text-[3.25rem]">
            {profile.hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="body-lg max-w-xl text-white/80">{profile.hero.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Button href="#contact">{profile.hero.ctaLabel}</Button>
            <Button href={profile.hero.resume} variant="outline" icon="download" download>
              Download My Resume
            </Button>
          </div>
        </div>
        <img
          src={profile.hero.photo}
          alt={`Photo of ${profile.name}`}
          className="mx-auto w-64 md:ml-auto md:mr-0 md:w-full md:max-w-sm"
        />
      </Container>

      {/* ── Logo klien ── (di HP bisa digeser ke samping supaya logo tidak terlalu kecil) */}
      <Container className="pb-20 md:pb-28">
        <div className="overflow-x-auto">
          <img
            src={profile.clientLogos}
            alt="Client and company logos: Alamaya, Smart Soft Studio, Jagoan Hosting, Travelingyuk, Majoo"
            loading="lazy"
            className="w-full min-w-[640px] opacity-90"
          />
        </div>
      </Container>

      {/* ── Proyek Korporat ── */}
      <Container className="pb-20 md:pb-28">
        <section id="proyek" className="scroll-mt-28">
          <SectionHeading eyebrow="My Work" title="Corporate Projects" />
          <div className="grid gap-6 md:grid-cols-2">
            {corporate.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="corporate" />
            ))}
          </div>
        </section>
      </Container>

      {/* ── Proyek Terbaru ── */}
      <Container>
        <section>
          <SectionHeading
            eyebrow="Side Projects"
            title="Latest Projects"
            action={<Button to="/work">See All Work</Button>}
          />
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
            {side.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
