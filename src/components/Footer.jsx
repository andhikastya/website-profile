import Container from './Container';
import Icon from './Icons';
import { contact, profile } from '../data/profile';

/**
 * Footer — ajakan kolaborasi + link kontak (komponen "Footer" di Figma).
 * Punya id="contact", jadi menu "Contact" dan tombol "Get in Touch" akan scroll ke sini.
 */
export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 pb-12 pt-24 md:pt-32">
      <Container className="flex flex-col items-center text-center">
        <h2 className="heading-2 max-w-xl">{contact.title}</h2>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-4 md:mt-16 md:gap-x-24">
          {contact.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="inline-flex items-center gap-2 text-xl transition-colors hover:text-[#b4a9f5] md:text-2xl"
                {...(link.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
              >
                <Icon name={link.icon} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="caption mt-16 text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </Container>
    </footer>
  );
}
