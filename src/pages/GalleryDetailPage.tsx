import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import { SAMPLE_GALLERY, RARITY_COLORS } from '@/data/content';
import { appUrlWithRef } from '@/lib/config';

export function GalleryDetailPage() {
  const { id } = useParams();
  const dream = SAMPLE_GALLERY.find((d) => d.id === id);

  if (!dream) {
    return (
      <div className="page-wrap py-20 text-center">
        <h1 className="font-dream text-3xl text-ink">Dream not found</h1>
        <p className="text-body">This share may be private or removed.</p>
        <Link to="/gallery" className="btn-secondary mt-4 inline-flex">
          Back to gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="page-wrap py-12 md:py-16 max-w-3xl">
      <Link
        to="/gallery"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-body no-underline mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Gallery
      </Link>

      <div
        className={`aspect-[16/10] rounded-3xl bg-gradient-to-br ${dream.gradient} border border-white/10 mb-8 relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.1),transparent_55%)]" />
        <div className="absolute bottom-4 left-4">
          <span
            className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wider ${
              RARITY_COLORS[dream.rarity]
            }`}
          >
            {dream.rarity}
          </span>
        </div>
      </div>

      <h1 className="font-dream text-4xl m-0 mb-3 text-ink font-medium">{dream.title}</h1>
      <p className="text-lg text-body leading-relaxed m-0 mb-6">{dream.nugget}</p>

      <div className="flex flex-wrap gap-3 text-sm text-muted mb-8">
        <span className="capitalize glass rounded-full px-3 py-1">{dream.emotion}</span>
        <span className="capitalize glass rounded-full px-3 py-1">{dream.category}</span>
        <span className="glass rounded-full px-3 py-1">{dream.date}</span>
        <span className="glass rounded-full px-3 py-1">{dream.shares} shares</span>
      </div>

      <div className="glass rounded-2xl p-6 mb-8">
        <p className="text-sm text-muted m-0 mb-1 uppercase tracking-wider">Narrative teaser</p>
        <p className="text-body m-0 leading-relaxed">
          Full narrative lives in EverDream. This public card is a teaser — made for sharing without
          exposing your private journal.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a href={appUrlWithRef()} className="btn-primary">
          <Share2 className="h-4 w-4" />
          Made in EverDream — open app
        </a>
        <Link to="/gallery" className="btn-secondary">
          More dreams
        </Link>
      </div>
    </div>
  );
}
