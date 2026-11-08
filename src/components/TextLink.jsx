import { Link } from 'react-router';
import Icon from './Icons';

/**
 * TextLink — link teks dengan panah kecil (komponen "Text Link" di Figma).
 * Saat hover: teks berubah ungu muda dan panah bergeser sedikit.
 * Kalau `to` tidak diisi, yang tampil hanya teks biasa (misal "Segera hadir").
 *
 * Contoh: <TextLink to="/proyek/majoolite">Selengkapnya</TextLink>
 */
export default function TextLink({ to, children }) {
  if (!to) {
    return <span className="body-md font-semibold text-muted">{children}</span>;
  }
  return (
    <Link
      to={to}
      className="group body-md inline-flex items-center gap-1 font-semibold text-white transition-colors hover:text-[#b4a9f5]"
    >
      {children}
      <Icon
        name="arrow"
        className="size-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}
