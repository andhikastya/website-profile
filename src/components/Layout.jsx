import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout — kerangka yang sama untuk semua halaman: Header, isi halaman, Footer.
 * <Outlet /> adalah tempat isi halaman (Home, About, dll.) ditampilkan.
 */
export default function Layout() {
  useScrollToTop();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

/**
 * Saat pindah halaman, otomatis scroll ke paling atas.
 * Kalau alamatnya mengandung #bagian (misal /#proyek), scroll ke bagian itu.
 */
function useScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}
