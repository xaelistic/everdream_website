import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FEATURES, SAMPLE_GALLERY, LEADERBOARDS } from '@/data/content';
import { GalleryCard } from '@/components/GalleryCard';
import { DownloadBand } from '@/components/DownloadBand';
import { appUrlWithRef, TAGLINE } from '@/lib/config';

export function HomePage() {
  const featured = SAMPLE_GALLERY.filter((d) => d.featured).slice(0, 6);
  const streakBoard = LEADERBOARDS[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-lav/15 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-aqua/10 blur-[100px]" />
        </div>
        <div className="page-wrap relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-aqua/20 bg-aqua/10 px-4 py-1.5 mb-8">
            <Sparkles className="h-3.5 w-3.5 text-aqua" />
            <span className="text-xs uppercase tracking-[0.14em] text-aqua-light">
              Dream journal · sleep · community
            </span>
          </div>
          <h1 className="font-dream text-4xl sm:text-5xl md:text-6xl font-medium text-ink m-0 mb-5 leading-[1.15]">
            <span className="gradient-text">{TAGLINE}</span>
          </h1>
          <p className="text-lg text-body m-0 mb-10 leading-relaxed max-w-xl mx-auto">
            Journal your nights, generate AI dream art, connect wearables, unlock achievements,
            and share wonder — privately by default.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={appUrlWithRef()} className="btn-primary">
              Get the app
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/gallery" className="btn-secondary">
              Explore gallery
            </Link>
          </div>

          {/* Social proof — honest framing */}
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { label: 'Capture modes', value: '4+' },
              { label: 'Learn modules', value: '6+' },
              { label: 'Public by choice', value: '100%' },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl px-3 py-4">
                <div className="font-dream text-2xl text-ink">{s.value}</div>
                <div className="text-[0.7rem] text-muted mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="page-wrap pb-20">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="section-label mb-2">Features</p>
            <h2 className="font-dream text-3xl m-0 text-ink font-medium">Everything in one night stack</h2>
          </div>
          <Link to="/features" className="text-sm text-aqua hover:text-aqua-light no-underline hidden sm:inline">
            Full deep-dive →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.slice(0, 6).map((f) => (
            <Link
              key={f.id}
              to={`/features#${f.anchor || f.id}`}
              className="glass rounded-2xl p-5 no-underline transition-colors hover:border-lav/30"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-dream text-xl text-ink m-0 mb-2">{f.title}</h3>
              <p className="text-sm text-body m-0 leading-relaxed">{f.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured gallery */}
      <section className="page-wrap pb-20">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="section-label mb-2">Gallery</p>
            <h2 className="font-dream text-3xl m-0 text-ink font-medium">Featured public dreams</h2>
            <p className="text-sm text-muted mt-2 m-0">
              Sample showcase — live feed wires to opt-in public shares.
            </p>
          </div>
          <Link to="/gallery" className="text-sm text-aqua hover:text-aqua-light no-underline hidden sm:inline">
            Open gallery →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((d) => (
            <GalleryCard key={d.id} dream={d} />
          ))}
        </div>
      </section>

      {/* Leaderboard teaser */}
      <section className="page-wrap pb-20">
        <div className="glass rounded-3xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <div className="md:w-2/5">
              <p className="section-label mb-2">Leaderboards</p>
              <h2 className="font-dream text-3xl m-0 text-ink font-medium mb-3">
                Streaks & shares this week
              </h2>
              <p className="text-body text-sm leading-relaxed m-0 mb-5">
                Opt-in handles only. Climb journal streaks, share champions, and referral heroes.
              </p>
              <Link to="/leaderboards" className="btn-secondary !text-sm">
                View all boards
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="text-xs text-muted uppercase tracking-wider mb-3">
                {streakBoard.title} · {streakBoard.cadence}
              </div>
              <ul className="list-none p-0 m-0 space-y-2">
                {streakBoard.rows.map((r) => (
                  <li
                    key={r.handle}
                    className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-muted text-sm w-6">#{r.rank}</span>
                      <span className="text-ink text-sm font-medium">@{r.handle}</span>
                    </div>
                    <span className="text-aqua text-sm">{r.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap pb-24">
        <DownloadBand />
      </section>
    </>
  );
}
