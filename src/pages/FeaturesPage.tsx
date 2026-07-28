import { FEATURES } from '@/data/content';
import { DownloadBand } from '@/components/DownloadBand';

export function FeaturesPage() {
  return (
    <div className="page-wrap py-16 md:py-20">
      <p className="section-label mb-3">Features</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-4 font-medium text-ink">
        Built for the morning after
      </h1>
      <p className="text-body max-w-2xl m-0 mb-14 leading-relaxed">
        From capture to art, sleep context, social, and referrals — every surface is designed around
        privacy defaults and dream-first media.
      </p>

      <div className="space-y-6 mb-20">
        {FEATURES.map((f) => (
          <article
            key={f.id}
            id={f.anchor || f.id}
            className="glass scroll-mt-24 rounded-2xl p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-5"
          >
            <div className="text-4xl">{f.icon}</div>
            <div>
              <h2 className="font-dream text-2xl m-0 mb-2 text-ink">{f.title}</h2>
              <p className="text-aqua/90 text-sm m-0 mb-3">{f.blurb}</p>
              <p className="text-body m-0 leading-relaxed">{f.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <DownloadBand compact />
    </div>
  );
}
