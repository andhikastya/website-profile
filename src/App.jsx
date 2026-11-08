import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Majoolite from './pages/Majoolite';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

/**
 * App — daftar semua halaman (routes) di website.
 * path = alamat di browser, element = halaman yang ditampilkan.
 *
 * Semua halaman dibungkus <Layout> supaya punya Header & Footer yang sama.
 * Alamat lama berbahasa Indonesia (/proyek, /tentang) tetap dialihkan ke
 * alamat baru supaya link yang sudah tersebar tidak mati.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/work/majoolite" element={<Majoolite />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />

          {/* Alamat lama → alamat baru */}
          <Route path="/proyek" element={<Navigate to="/work" replace />} />
          <Route path="/tentang" element={<Navigate to="/about" replace />} />
          <Route path="/proyek/:slug" element={<LegacyProjectRedirect />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/** Alihkan /proyek/<slug> ke /work/<slug>. */
function LegacyProjectRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/work/${slug}`} replace />;
}
