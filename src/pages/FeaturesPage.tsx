import { FEATURES } from '@/data/content';
import { DownloadBand } from '@/components/DownloadBand';

export function FeaturesPage() {
  return (
    <div className="page-wrap py-16 md:py-24">
      <p className="section-label section-label-accent mb-3">Features</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-4 font-medium text-ink tracking-tight">
        Built for the morning after
      </h1>
      <p className="text-body max-w-2xl m-0 mb-14 leading-relaxed text-base">
        From capture to art, sleep context, social, and referrals — every surface mirrors the app’s
        Pearl Dark glass, privacy defaults, and dream-first media.
      </p>

      <div className="space-y-3.5 mb-20">
        {FEATURES.map((f) => (
          <article
            key={f.id}
            id={f.anchor || f.id}
            className="glass glass-lift scroll-mt-24 rounded-2xl p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-5"
          >
            <div className="text-3xl w-12 h-12 rounded-2xl border border-[rgba(168,237,220,0.12)] bg-[rgba(94,196,168,0.06)] flex items-center justify-center">
              {f.icon}
            </div>
            <div>
              <h2 className="font-dream text-2xl m-0 mb-2 text-ink">{f.title}</h2>
              <p className="text-aqua-light/90 text-sm m-0 mb-3">{f.blurb}</p>
              <p className="text-body m-0 leading-relaxed">{f.detail}</p>
            </div>
          </article>
        ))}
      </div>

      <DownloadBand compact />
    </div>
  );
}
