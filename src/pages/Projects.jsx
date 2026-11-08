import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

/**
 * Projects — halaman Portofolio. Menampilkan SEMUA proyek di src/data/projects.js.
 */
export default function Projects() {
  const corporate = projects.filter((project) => project.group === 'corporate');
  const side = projects.filter((project) => project.group === 'side');

  return (
    <Container className="space-y-20 pt-8 md:space-y-28 md:pt-12">
      <header className="space-y-4">
        <h1 className="heading-1">Work</h1>
        <p className="body-lg max-w-2xl text-white/80">
          A collection of the apps and websites I have worked on, from company products to side
          projects.
        </p>
      </header>

      <section>
        <SectionHeading eyebrow="My Work" title="Corporate Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {corporate.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="corporate" />
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Side Projects" title="Websites & Explorations" />
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
          {side.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
