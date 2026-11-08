import { Link } from 'react-router';
import Icon from './Icons';

/**
 * Button — tombol utama berwarna ungu (komponen "Button" di Figma).
 * Saat kursor di atas tombol (hover), warnanya berubah ke ungu yang lebih gelap.
 *
 * Props:
 * - to       : alamat halaman di website ini, misal "/work"
 * - href     : link luar atau link ke bagian halaman, misal "#contact" / "https://..."
 * - icon     : nama ikon opsional di sebelah kiri teks, misal "download"
 * - variant  : "primary" (ungu, default) atau "outline" (garis + teks putih)
 * - download : true = file di `href` diunduh, bukan dibuka di tab baru
 *
 * Contoh: <Button href="#contact">Get in Touch</Button>
 */
export default function Button({
  to,
  href,
  icon,
  variant = 'primary',
  download = false,
  children,
  className = '',
}) {
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    outline: 'border border-white text-white hover:bg-white hover:text-ink',
  };

  const classes =
    'inline-flex h-12 min-w-40 items-center justify-center gap-2 rounded-lg px-6 font-bold ' +
    'transition-colors duration-200 ' +
    variants[variant] +
    ' focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-page ' +
    className;

  const content = (
    <>
      {icon && <Icon name={icon} className="size-5" />}
      {children}
    </>
  );

  // Pakai <Link> untuk halaman di dalam website (tidak reload), <a> untuk lainnya
  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  const isExternal = href?.startsWith('http');
  return (
    <a
      href={href}
      className={classes}
      {...(download && { download: '' })}
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
    >
      {content}
    </a>
  );
}
