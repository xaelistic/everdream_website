import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, PenLine, Watch, Share2, Trophy } from 'lucide-react';
import { CREDIT_PACKS, FEATURES, LEADERBOARDS, PRICING, SAMPLE_GALLERY } from '@/data/content';
import { GalleryCard } from '@/components/GalleryCard';
import { DownloadBand } from '@/components/DownloadBand';
import { SignupForm } from '@/components/SignupForm';
import { AppPhoneMock } from '@/components/AppPhoneMock';
import { appUrlWithRef, TAGLINE } from '@/lib/config';

const STARS = [
  { t: '12%', l: '8%', d: '2.4s' },
  { t: '22%', l: '78%', d: '3.1s' },
  { t: '38%', l: '18%', d: '2.8s' },
  { t: '55%', l: '88%', d: '3.6s' },
  { t: '70%', l: '12%', d: '2.2s' },
  { t: '18%', l: '52%', d: '4s' },
  { t: '62%', l: '42%', d: '3.3s' },
  { t: '8%', l: '34%', d: '2.6s' },
];

const PILLARS = [
  {
    icon: PenLine,
    title: 'Morning capture',
    body: 'Text, voice, video, photo OCR — while the dream is still warm.',
  },
  {
    icon: Sparkles,
    title: 'AI dream assets',
    body: 'Narrative, imagery, and rarity that feel like keepsakes, not spam.',
  },
  {
    icon: Watch,
    title: 'Sleep context',
    body: 'Wearables optional. Stages and scores beside your own words.',
  },
  {
    icon: Share2,
    title: 'Opt-in social',
    body: 'Public only when you choose. No fake friends. No fake proof.',
  },
];

export function HomePage() {
  const featured = SAMPLE_GALLERY.filter((d) => d.featured).slice(0, 6);
  const streakBoard = LEADERBOARDS[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="star hidden md:block"
            style={{ top: s.t, left: s.l, ['--d' as string]: s.d }}
          />
        ))}

        <div className="page-wrap relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(168,237,220,0.18)] bg-[rgba(94,196,168,0.08)] px-3.5 py-1.5 mb-7">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-40" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-aqua" />
              </span>
              <span className="text-[0.625rem] uppercase tracking-[0.18em] text-aqua-light font-medium">
                Dream journal · sleep · community
              </span>
            </div>

            <h1 className="font-dream text-[2.65rem] sm:text-5xl md:text-[3.35rem] font-medium text-ink m-0 mb-5 leading-[1.12] tracking-tight">
              <span className="gradient-text">{TAGLINE}</span>
            </h1>

            <p className="text-base md:text-lg text-body m-0 mb-8 leading-[1.7] max-w-md mx-auto lg:mx-0">
              The same Pearl Dark calm as the app: journal your nights, generate AI art, connect
              wearables, unlock achievements — privately by default.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <a href={appUrlWithRef()} className="btn-primary">
                Get the app
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/gallery" className="btn-secondary">
                Explore gallery
              </Link>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-left">
              {[
                { k: '4+', v: 'Capture modes' },
                { k: 'Opt-in', v: 'Public shares only' },
                { k: 'PWA', v: 'Install in seconds' },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-dream text-xl text-ink">{s.k}</div>
                  <div className="text-[0.6875rem] text-muted uppercase tracking-[0.14em] mt-0.5">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-aqua/10 blur-[80px] pointer-events-none" />
            <div className="absolute top-[20%] right-[10%] w-[180px] h-[180px] rounded-full bg-lav/15 blur-[60px] pointer-events-none" />
            <AppPhoneMock />
            {/* Floating orb badge */}
            <div className="absolute -bottom-2 left-[8%] md:left-[4%] hidden sm:flex flex-col items-center gap-2">
              <div className="orb scale-[0.72]" />
              <span className="text-[0.625rem] uppercase tracking-[0.18em] text-muted">
                Capture orb
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="page-wrap">
        <div className="hairline" />
      </div>

      {/* Pillars — editorial, not icon soup */}
      <section className="page-wrap py-20 md:py-24">
        <div className="max-w-2xl mb-12">
          <p className="section-label section-label-accent mb-3">Why EverDream</p>
          <h2 className="font-dream text-3xl md:text-4xl m-0 text-ink font-medium tracking-tight">
            Built like a night journal, not a dopamine feed
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-5 glass-lift">
              <div className="w-9 h-9 rounded-xl border border-[rgba(168,237,220,0.14)] bg-[rgba(94,196,168,0.08)] flex items-center justify-center mb-4">
                <p.icon className="h-4 w-4 text-aqua-light" strokeWidth={1.75} />
              </div>
              <h3 className="font-dream text-lg text-ink m-0 mb-2">{p.title}</h3>
              <p className="text-sm text-body m-0 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Feature grid */}
      <section className="page-wrap pb-20 md:pb-24">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-label mb-2">Features</p>
            <h2 className="font-dream text-3xl md:text-4xl m-0 text-ink font-medium tracking-tight">
              Everything in one night stack
            </h2>
          </div>
          <Link
            to="/features"
            className="text-sm text-aqua-light hover:text-aqua no-underline hidden sm:inline transition-colors"
          >
            Full deep-dive →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {FEATURES.slice(0, 6).map((f) => (
            <Link
              key={f.id}
              to={`/features#${f.anchor || f.id}`}
              className="glass glass-lift rounded-2xl p-5 no-underline"
            >
              <div className="text-2xl mb-3 opacity-90">{f.icon}</div>
              <h3 className="font-dream text-xl text-ink m-0 mb-2">{f.title}</h3>
              <p className="text-sm text-body m-0 leading-relaxed">{f.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote band — app reflection language */}
      <section className="page-wrap pb-20 md:pb-24">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[rgba(168,237,220,0.12)] bg-gradient-to-br from-[#1a1a2e] via-[#1c1a2c] to-[rgba(200,184,255,0.1)] px-8 py-12 md:px-14 md:py-16">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lav/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-aqua/10 blur-3xl pointer-events-none" />
          <p className="section-label mb-5 relative">Daily reflection</p>
          <blockquote className="font-dream text-2xl md:text-[2rem] leading-snug text-ink m-0 max-w-3xl relative">
            “Capture first. Interpret gently. Share only when the night wants company.”
          </blockquote>
          <p className="text-sm text-muted mt-5 m-0 relative italic">
            The EverDream morning ritual — journal before the day rewrites the dream.
          </p>
          <a href={appUrlWithRef()} className="btn-primary mt-8 relative inline-flex">
            <PenLine className="h-4 w-4" />
            Journal about this
          </a>
        </div>
      </section>

      {/* Featured gallery */}
      <section className="page-wrap pb-20 md:pb-24">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-label mb-2">Gallery</p>
            <h2 className="font-dream text-3xl md:text-4xl m-0 text-ink font-medium tracking-tight">
              Featured public dreams
            </h2>
            <p className="text-sm text-muted mt-2 m-0 max-w-md">
              Opt-in shares only — sample showcase until live public_shares wire up.
            </p>
          </div>
          <Link
            to="/gallery"
            className="text-sm text-aqua-light hover:text-aqua no-underline hidden sm:inline"
          >
            Open gallery →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((d) => (
            <GalleryCard key={d.id} dream={d} />
          ))}
        </div>
      </section>

      {/* Leaderboard teaser */}
      <section className="page-wrap pb-20 md:pb-24">
        <div className="glass rounded-[1.75rem] p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-10">
            <div className="md:w-2/5">
              <div className="w-9 h-9 rounded-xl border border-[rgba(168,237,220,0.14)] bg-[rgba(94,196,168,0.08)] flex items-center justify-center mb-4">
                <Trophy className="h-4 w-4 text-gold" strokeWidth={1.75} />
              </div>
              <p className="section-label mb-2">Leaderboards</p>
              <h2 className="font-dream text-3xl m-0 text-ink font-medium mb-3 tracking-tight">
                Streaks & shares
              </h2>
              <p className="text-body text-sm leading-relaxed m-0 mb-5">
                Opt-in handles only. Climb journal streaks, share champions, and referral heroes —
                kindly competitive, never performative.
              </p>
              <Link to="/leaderboards" className="btn-secondary !text-sm !py-2.5">
                View all boards
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="text-[0.625rem] text-muted uppercase tracking-[0.18em] mb-3">
                {streakBoard.title} · {streakBoard.cadence}
              </div>
              <ul className="list-none p-0 m-0 space-y-2">
                {streakBoard.rows.map((r) => (
                  <li
                    key={r.handle}
                    className="flex items-center justify-between rounded-xl bg-white/[0.025] border border-[rgba(168,237,220,0.08)] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-muted text-sm w-6 tabular-nums">#{r.rank}</span>
                      <span className="text-ink text-sm font-medium">@{r.handle}</span>
                    </div>
                    <span className="text-aqua-light text-sm tabular-nums">{r.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap pb-20 md:pb-24">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-label mb-2">Pricing</p>
            <h2 className="font-dream text-3xl md:text-4xl m-0 text-ink font-medium tracking-tight">
              Capture free. Unlock art with Stripe.
            </h2>
            <p className="text-sm text-muted mt-2 m-0 max-w-xl">
              Journals and analysis stay free. Sign in on the app, then Stripe Checkout opens for Plus,
              Pro, or a credit pack.
            </p>
          </div>
          <Link
            to="/pricing"
            className="text-sm text-aqua-light hover:text-aqua no-underline hidden sm:inline"
          >
            Full pricing →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-3.5 mb-6">
          {PRICING.map((tier) => (
            <a
              key={tier.id}
              href={appUrlWithRef(tier.href)}
              className={`glass glass-lift rounded-2xl p-5 no-underline ${
                tier.featured ? 'border-aqua/30' : ''
              }`}
            >
              <div className="text-[0.625rem] uppercase tracking-[0.18em] text-muted mb-2">
                {tier.name}
              </div>
              <div className="font-dream text-3xl text-ink">
                {tier.price}
                <span className="text-sm text-muted font-ui ml-1">{tier.period}</span>
              </div>
              <p className="text-sm text-body m-0 mt-3 leading-relaxed">{tier.highlights[2]}</p>
              <p className="text-sm text-aqua-light mt-4 mb-0">{tier.cta} →</p>
            </a>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {CREDIT_PACKS.map((pack) => (
            <a key={pack.id} href={appUrlWithRef(pack.href)} className="btn-secondary !text-sm !py-2">
              {pack.credits} tokens · {pack.price}
            </a>
          ))}
        </div>
      </section>

      <section className="page-wrap pb-10">
        <SignupForm page="/" />
      </section>

      <section className="page-wrap pb-24 md:pb-28">
        <DownloadBand />
      </section>
    </>
  );
}
