import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Container from './Container';
import Icon from './Icons';
import { profile, navLinks } from '../data/profile';

/**
 * Header — logo + menu navigasi (komponen "Header" di Figma).
 * - Desktop/tablet: menu tampil berjajar di kanan.
 * - HP: menu disembunyikan, diganti tombol ☰ yang membuka/menutup menu.
 * Daftar menu diambil dari `navLinks` di src/data/profile.js.
 */
export default function Header() {
  // `isOpen` menyimpan status menu HP: true = terbuka, false = tertutup
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-page/90 backdrop-blur-[4px]">
      <Container className="flex h-20 items-center justify-between md:h-[104px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="flex size-6 items-center justify-center rounded-md bg-primary-500">
            <Icon name="feather" className="size-4" />
          </span>
          <span className="text-lg font-bold">{profile.brand}</span>
        </Link>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main menu">
          {navLinks.map((link) => (
            <MenuLink key={link.label} link={link} />
          ))}
        </nav>

        {/* Tombol menu HP */}
        <button
          type="button"
          className="rounded-lg p-2 transition-colors hover:bg-surface md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
      </Container>

      {/* Menu HP (hanya tampil kalau isOpen = true) */}
      {isOpen && (
        <nav className="border-t border-line bg-page md:hidden" aria-label="Main menu">
          <Container className="flex flex-col py-2">
            {navLinks.map((link) => (
              <MenuLink key={link.label} link={link} onClick={closeMenu} mobile />
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}

/** Satu item menu. Menu halaman yang sedang dibuka ditebalkan. */
function MenuLink({ link, onClick, mobile = false }) {
  const base = `body-md transition-colors hover:text-[#b4a9f5] ${mobile ? 'py-3' : ''}`;

  // Link ke bagian halaman (misal "#kontak") memakai <a> biasa
  if (link.to.startsWith('#')) {
    return (
      <a href={link.to} className={base} onClick={onClick}>
        {link.label}
      </a>
    );
  }
  return (
    <NavLink
      to={link.to}
      end={link.to === '/'}
      onClick={onClick}
      className={({ isActive }) => `${base} ${isActive ? 'font-bold' : ''}`}
    >
      {link.label}
    </NavLink>
  );
}
