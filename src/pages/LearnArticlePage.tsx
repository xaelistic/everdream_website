import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LEARN_ARTICLES } from '@/data/content';
import { DownloadBand } from '@/components/DownloadBand';

export function LearnArticlePage() {
  const { slug } = useParams();
  const article = LEARN_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="page-wrap py-20 text-center">
        <h1 className="font-dream text-3xl">Article not found</h1>
        <Link to="/learn" className="btn-secondary mt-4 inline-flex">
          Back to Learn
        </Link>
      </div>
    );
  }

  return (
    <article className="page-wrap py-12 md:py-16 max-w-2xl">
      <Link
        to="/learn"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-body no-underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Learn
      </Link>
      <div className="text-4xl mb-4">{article.icon}</div>
      <p className="section-label mb-2">
        {article.category} · {article.readTimeMinutes} min read
      </p>
      <h1 className="font-dream text-4xl m-0 mb-6 font-medium text-ink">{article.title}</h1>
      <p className="text-body text-lg leading-relaxed m-0 mb-10">{article.content}</p>

      <h2 className="font-dream text-2xl m-0 mb-4 text-ink">Practical tips</h2>
      <ul className="m-0 mb-12 pl-5 space-y-2 text-body">
        {article.tips.map((t) => (
          <li key={t} className="leading-relaxed">
            {t}
          </li>
        ))}
      </ul>

      <DownloadBand compact />
    </article>
  );
}
