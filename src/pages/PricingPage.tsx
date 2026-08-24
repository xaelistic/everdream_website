import { Link } from 'react-router-dom';
import { Check, Sparkles } from 'lucide-react';
import { CREDIT_PACKS, PRICING, REFERRAL_INCENTIVES } from '@/data/content';
import { appUrlWithRef } from '@/lib/config';

export function PricingPage() {
  return (
    <div className="page-wrap py-16 md:py-20">
      <p className="section-label mb-3">Pricing</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-4 font-medium text-ink">
        Capture is free. Credits paint the night.
      </h1>
      <p className="text-body max-w-2xl m-0 mb-14 leading-relaxed">
        Journals, analysis and sleep tracking stay free. Stripe unlocks Plus or Pro, or a credit pack,
        after you sign in. Monthly credits reset; packs you buy stay until you use them.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-20">
        {PRICING.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-[1.5rem] p-6 md:p-8 flex flex-col border ${
              tier.featured
                ? 'border-aqua/35 bg-gradient-to-b from-aqua/10 to-[rgba(26,26,46,0.9)] shadow-[0_0_48px_rgba(94,196,168,0.1)]'
                : 'border-[rgba(168,237,220,0.1)] bg-[rgba(26,26,46,0.7)] backdrop-blur-md'
            }`}
          >
            {tier.featured && (
              <span className="text-[0.65rem] uppercase tracking-wider text-aqua mb-3">
                Most popular
              </span>
            )}
            <h2 className="font-dream text-2xl m-0 text-ink">{tier.name}</h2>
            <div className="mt-3 mb-6">
              <span className="font-dream text-4xl text-ink">{tier.price}</span>
              <span className="text-muted text-sm ml-1">{tier.period}</span>
            </div>
            <ul className="list-none p-0 m-0 space-y-3 flex-1 mb-8">
              {tier.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-body">
                  <Check className="h-4 w-4 text-aqua shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
            <a
              href={appUrlWithRef(tier.href)}
              className={tier.featured ? 'btn-primary !w-full' : 'btn-secondary !w-full'}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      <section className="mb-20">
        <p className="section-label mb-2">Tokens</p>
        <h2 className="font-dream text-3xl m-0 mb-3 text-ink font-medium">Buy more credits</h2>
        <p className="text-body text-sm m-0 mb-8 max-w-xl leading-relaxed">
          One credit paints one image. Storyboards use one credit per scene. Stripe checkout opens in
          the app after you sign in.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {CREDIT_PACKS.map((pack) => (
            <article
              key={pack.id}
              className="rounded-[1.5rem] border border-[rgba(168,237,220,0.1)] bg-[rgba(26,26,46,0.7)] p-6 flex flex-col"
            >
              <Sparkles className="h-4 w-4 text-aqua mb-3" />
              <h3 className="font-dream text-xl m-0 text-ink">{pack.credits} credits</h3>
              <p className="font-dream text-2xl text-ink mt-2 mb-1">{pack.price}</p>
              <p className="text-sm text-muted m-0 mb-6 flex-1">{pack.blurb}</p>
              <a href={appUrlWithRef(pack.href)} className="btn-secondary !w-full">
                Buy with Stripe
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="referrals" className="scroll-mt-24 glass rounded-3xl p-8 md:p-10 mb-8">
        <p className="section-label mb-2">Referrals</p>
        <h2 className="font-dream text-3xl m-0 mb-3 text-ink font-medium">
          Share your code. Earn together.
        </h2>
        <p className="text-body text-sm m-0 mb-8 max-w-xl leading-relaxed">
          Use{' '}
          <code className="text-aqua bg-white/5 px-1.5 py-0.5 rounded">/r/YOURCODE</code> or{' '}
          <code className="text-aqua bg-white/5 px-1.5 py-0.5 rounded">?ref=CODE</code>. Code is
          stored in session and passed into the app on open.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {REFERRAL_INCENTIVES.map((r) => (
            <div key={r.who} className="rounded-2xl border border-white/10 bg-pearl/50 p-5">
              <div className="text-xs uppercase tracking-wider text-muted mb-2">{r.who}</div>
              <div className="text-ink text-sm leading-relaxed">{r.reward}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-6 m-0">
          Example link:{' '}
          <Link to="/r/DEMO" className="text-aqua no-underline">
            /r/DEMO
          </Link>
        </p>
      </section>
    </div>
  );
}
