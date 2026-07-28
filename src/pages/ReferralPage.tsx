import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Gift, ArrowRight } from 'lucide-react';
import { storeReferralCode, appUrlWithRef } from '@/lib/config';
import { REFERRAL_INCENTIVES } from '@/data/content';

export function ReferralPage() {
  const { code = '' } = useParams();
  const cleaned = code.trim().toUpperCase();

  useEffect(() => {
    if (cleaned) storeReferralCode(cleaned);
  }, [cleaned]);

  return (
    <div className="page-wrap py-16 md:py-24 max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 mb-8">
        <Gift className="h-3.5 w-3.5 text-gold" />
        <span className="text-xs uppercase tracking-[0.14em] text-gold">You were invited</span>
      </div>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-4 font-medium text-ink">
        Welcome with code{' '}
        <span className="gradient-text">{cleaned || '—'}</span>
      </h1>
      <p className="text-body m-0 mb-10 leading-relaxed">
        Your code is saved for this browser. Open the app to sign up — welcome tokens apply on first
        use, and your friend earns when you join.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-14">
        <a href={appUrlWithRef()} className="btn-primary">
          Get the app with code
          <ArrowRight className="h-4 w-4" />
        </a>
        <Link to="/pricing#referrals" className="btn-secondary">
          How rewards work
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-3 text-left">
        {REFERRAL_INCENTIVES.map((r) => (
          <div key={r.who} className="glass rounded-2xl p-4">
            <div className="text-[0.65rem] uppercase tracking-wider text-muted mb-1">{r.who}</div>
            <div className="text-sm text-ink">{r.reward}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
