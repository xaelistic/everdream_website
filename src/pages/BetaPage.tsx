import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SignupForm } from '@/components/SignupForm';
import { BETA_LETTERS } from '@/data/newsletter';
import { appUrlWithRef, DISCORD_URL } from '@/lib/config';

export function BetaPage() {
  const [params] = useSearchParams();
  const left = params.get('left') === '1';

  useEffect(() => {
    const previous = document.title;
    document.title = 'Join the EverDream beta';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="page-wrap py-16 md:py-20 max-w-3xl">
      <p className="section-label mb-3">Beta</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-4 font-medium text-ink">
        Join the beta list
      </h1>
      <p className="text-body m-0 mb-10 leading-relaxed max-w-xl">
        Four notes in the same quiet voice as the site. A welcome when you join, then one email
        every seven days: write a dream, make one picture, tell us what to keep. We do not sell
        the address.
      </p>
      {left ? (
        <p className="text-sm text-aqua-light m-0 mb-6">You’re off the list. The remaining notes will not send.</p>
      ) : null}

      <SignupForm page="/beta" showHeading={false} />

      <div className="grid sm:grid-cols-2 gap-3.5 mt-10">
        {BETA_LETTERS.map((letter) => (
          <section key={letter.key} className="glass rounded-2xl p-5">
            <p className="section-label section-label-accent m-0 mb-2">
              {letter.funnel} · day {letter.day}
            </p>
            <h2 className="font-dream text-xl text-ink m-0 mb-2 font-medium">{letter.headline}</h2>
            <p className="text-sm text-body m-0 leading-relaxed">{letter.preheader}</p>
          </section>
        ))}
      </div>
      <p className="mt-4 mb-0">
        <Link to="/beta/letters" className="text-sm text-aqua-light no-underline hover:text-aqua">
          Read the four notes
        </Link>
      </p>

      <div className="flex flex-wrap gap-3 mt-10">
        <a href={appUrlWithRef()} className="btn-primary">
          Open the app
        </a>
        <a href={DISCORD_URL} target="_blank" rel="noreferrer" className="btn-secondary">
          Talk on Discord
        </a>
      </div>
    </div>
  );
}
