import Container from '../components/Container';
import Button from '../components/Button';

/** NotFound — tampil kalau alamat halaman tidak ada (error 404). */
export default function NotFound() {
  return (
    <Container className="flex flex-col items-center py-24 text-center">
      <p className="heading-1 text-primary-500">404</p>
      <h1 className="heading-2 mt-4">Page not found</h1>
      <p className="body-lg mt-4 max-w-md text-white/80">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Button to="/" className="mt-8">
        Back to Home
      </Button>
    </Container>
  );
}
