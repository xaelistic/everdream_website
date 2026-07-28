import { Link } from 'react-router-dom';
import type { GalleryDream } from '@/data/content';
import { RARITY_COLORS } from '@/data/content';

export function GalleryCard({ dream }: { dream: GalleryDream }) {
  return (
    <Link
      to={`/gallery/${dream.id}`}
      className="group glass glass-lift block overflow-hidden rounded-2xl no-underline"
    >
      <div
        className={`aspect-[4/3] bg-gradient-to-br ${dream.gradient} flex items-end p-4 relative`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
        <span
          className={`relative z-10 rounded-full border px-2.5 py-0.5 text-[0.625rem] uppercase tracking-[0.14em] ${
            RARITY_COLORS[dream.rarity] || RARITY_COLORS.common
          }`}
        >
          {dream.rarity}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-dream text-lg text-ink m-0 mb-1.5 group-hover:text-aqua-light transition-colors duration-200">
          {dream.title}
        </h3>
        <p className="text-sm text-body/90 m-0 line-clamp-2 leading-relaxed">{dream.nugget}</p>
        <div className="mt-3 flex items-center gap-2 text-[0.6875rem] text-muted tracking-wide">
          <span className="capitalize">{dream.emotion}</span>
          <span className="opacity-40">·</span>
          <span className="capitalize">{dream.category}</span>
        </div>
      </div>
    </Link>
  );
}
