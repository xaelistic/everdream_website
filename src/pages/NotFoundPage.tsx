import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="page-wrap py-24 text-center">
      <p className="section-label mb-3">404</p>
      <h1 className="font-dream text-4xl m-0 mb-4 text-ink">This dream dissolved</h1>
      <p className="text-body mb-8">The page you wanted isn’t here anymore.</p>
      <Link to="/" className="btn-primary">
        Back home
      </Link>
    </div>
  );
}
