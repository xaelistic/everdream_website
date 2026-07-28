import { Link } from 'react-router-dom';
import { LEARN_ARTICLES } from '@/data/content';

export function LearnPage() {
  return (
    <div className="page-wrap py-16 md:py-20">
      <p className="section-label mb-3">Learn</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-4 font-medium text-ink">
        Sleep & dream education
      </h1>
      <p className="text-body max-w-2xl m-0 mb-12 leading-relaxed">
        Short modules reused from the app — SEO-friendly landings for lucid journaling, REM, and
        sleep hygiene.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {LEARN_ARTICLES.map((a) => (
          <Link
            key={a.slug}
            to={`/learn/${a.slug}`}
            className="glass rounded-2xl p-5 no-underline hover:border-lav/30 transition-colors"
          >
            <div className="text-2xl mb-3">{a.icon}</div>
            <div className="text-[0.65rem] uppercase tracking-wider text-muted mb-2">
              {a.category} · {a.readTimeMinutes} min
            </div>
            <h2 className="font-dream text-xl m-0 text-ink">{a.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
