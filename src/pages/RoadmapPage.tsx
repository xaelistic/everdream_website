import { ROADMAP } from '@/data/content';
import { DownloadBand } from '@/components/DownloadBand';

const COLUMNS = [
  { key: 'now' as const, title: 'Now', tone: 'border-aqua/30 bg-aqua/5' },
  { key: 'next' as const, title: 'Next', tone: 'border-lav/30 bg-lav/5' },
  { key: 'later' as const, title: 'Later', tone: 'border-gold/20 bg-gold/5' },
];

export function RoadmapPage() {
  return (
    <div className="page-wrap py-16 md:py-20">
      <p className="section-label mb-3">Roadmap</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-4 font-medium text-ink">
        Goals, plans, product vision
      </h1>
      <p className="text-body max-w-2xl m-0 mb-14 leading-relaxed">
        Pulled from product specs and community direction. Dates flex; priorities favor journal
        quality, privacy, and honest social surfaces.
      </p>

      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {COLUMNS.map((col) => (
          <section
            key={col.key}
            className={`rounded-2xl border p-6 ${col.tone}`}
          >
            <h2 className="font-dream text-2xl m-0 mb-5 text-ink">{col.title}</h2>
            <ul className="list-none p-0 m-0 space-y-3">
              {ROADMAP[col.key].map((item) => (
                <li
                  key={item}
                  className="text-sm text-body leading-relaxed pl-3 border-l-2 border-white/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <DownloadBand compact />
    </div>
  );
}
