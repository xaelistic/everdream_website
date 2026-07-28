import { Link } from 'react-router-dom';
import { HOW_IT_WORKS } from '@/data/content';
import { DownloadBand } from '@/components/DownloadBand';

export function HowItWorksPage() {
  return (
    <div className="page-wrap py-16 md:py-20">
      <p className="section-label mb-3">How it works</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-4 font-medium text-ink">
        Journal → assets → share → sleep insights
      </h1>
      <p className="text-body max-w-2xl m-0 mb-14 leading-relaxed">
        A simple loop from morning capture to community and referrals — with wearables as optional
        context, never a requirement.
      </p>

      <ol className="list-none p-0 m-0 space-y-4 mb-16">
        {HOW_IT_WORKS.map((s) => (
          <li
            key={s.step}
            className="glass rounded-2xl p-6 md:p-8 flex gap-5 items-start"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-aqua/30 to-lav/30 border border-white/10 font-dream text-lg text-ink">
              {s.step}
            </span>
            <div>
              <h2 className="font-dream text-xl m-0 mb-2 text-ink">{s.title}</h2>
              <p className="text-body m-0 leading-relaxed">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="text-sm text-muted mb-10">
        Ready to invite friends?{' '}
        <Link to="/pricing#referrals" className="text-aqua no-underline hover:text-aqua-light">
          See referral rewards
        </Link>
        .
      </p>

      <DownloadBand compact />
    </div>
  );
}
