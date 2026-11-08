/**
 * Container — membatasi lebar konten (maksimal 1110px, sama seperti di Figma)
 * dan memberi jarak kiri-kanan di layar kecil.
 *
 * Contoh: <Container> ...isi... </Container>
 */
export default function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-[1110px] px-5 md:px-8 lg:px-0 ${className}`}>{children}</div>;
}
