import { useMemo, useState } from 'react';
import { SAMPLE_GALLERY } from '@/data/content';
import { GalleryCard } from '@/components/GalleryCard';

type SortKey = 'newest' | 'shares' | 'rarity';

const RARITY_RANK: Record<string, number> = {
  common: 1,
  uncommon: 2,
  rare: 3,
  legendary: 4,
};

export function GalleryPage() {
  const [emotion, setEmotion] = useState('all');
  const [category, setCategory] = useState('all');
  const [rarity, setRarity] = useState('all');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>('newest');

  const emotions = useMemo(
    () => ['all', ...Array.from(new Set(SAMPLE_GALLERY.map((d) => d.emotion)))],
    []
  );
  const categories = useMemo(
    () => ['all', ...Array.from(new Set(SAMPLE_GALLERY.map((d) => d.category)))],
    []
  );
  const rarities = ['all', 'common', 'uncommon', 'rare', 'legendary'];

  const filtered = useMemo(() => {
    let list = [...SAMPLE_GALLERY];
    if (emotion !== 'all') list = list.filter((d) => d.emotion === emotion);
    if (category !== 'all') list = list.filter((d) => d.category === category);
    if (rarity !== 'all') list = list.filter((d) => d.rarity === rarity);
    if (featuredOnly) list = list.filter((d) => d.featured);
    if (sort === 'newest') list.sort((a, b) => b.date.localeCompare(a.date));
    if (sort === 'shares') list.sort((a, b) => b.shares - a.shares);
    if (sort === 'rarity')
      list.sort((a, b) => (RARITY_RANK[b.rarity] || 0) - (RARITY_RANK[a.rarity] || 0));
    return list;
  }, [emotion, category, rarity, featuredOnly, sort]);

  return (
    <div className="page-wrap py-16 md:py-20">
      <p className="section-label mb-3">Gallery</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-3 font-medium text-ink">
        Public dream gallery
      </h1>
      <p className="text-body max-w-2xl m-0 mb-4 leading-relaxed">
        Opt-in shares only — from the app and Discord showcase. Live API will replace the sample
        set; empty is better than fake friends.
      </p>
      <p className="text-xs text-muted mb-10">
        Submit path: share publicly in-app. Report / NSFW moderation arrives with the live queue.
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        <FilterSelect label="Emotion" value={emotion} options={emotions} onChange={setEmotion} />
        <FilterSelect
          label="Category"
          value={category}
          options={categories}
          onChange={setCategory}
        />
        <FilterSelect label="Rarity" value={rarity} options={rarities} onChange={setRarity} />
        <FilterSelect
          label="Sort"
          value={sort}
          options={['newest', 'shares', 'rarity']}
          onChange={(v) => setSort(v as SortKey)}
        />
        <label className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-deep px-3 py-2 text-sm text-body cursor-pointer">
          <input
            type="checkbox"
            checked={featuredOnly}
            onChange={(e) => setFeaturedOnly(e.target.checked)}
            className="accent-aqua"
          />
          Featured
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="glass rounded-2xl p-12 text-center">
          <p className="font-dream text-xl text-ink m-0 mb-2">No dreams match</p>
          <p className="text-sm text-muted m-0">Try clearing filters — or check back when live shares land.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((d) => (
            <GalleryCard key={d.id} dream={d} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-xs text-muted">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-white/10 bg-deep px-3 py-2 text-sm text-ink capitalize outline-none focus:border-aqua/40"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
