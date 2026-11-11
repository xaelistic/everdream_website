import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NewsletterLetterCard } from '@/components/NewsletterLetter';
import { BETA_LETTERS } from '@/data/newsletter';

export function NewsletterPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'EverDream beta letters';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="page-wrap py-16 md:py-20">
      <div className="max-w-3xl mb-12">
        <p className="section-label mb-3">Beta newsletter</p>
        <h1 className="font-dream text-4xl md:text-5xl m-0 mb-4 font-medium text-ink">
          Four notes
        </h1>
        <p className="text-body m-0 mb-8 leading-relaxed max-w-xl">
          The same sequence the list receives. A welcome when you join, then one email every seven
          days. Each step has one job.
        </p>
        <ol className="grid sm:grid-cols-2 gap-3 list-none p-0 m-0">
          {BETA_LETTERS.map((letter) => (
            <li key={letter.key} className="glass rounded-2xl p-4">
              <p className="section-label section-label-accent m-0 mb-2">
                {letter.funnel} · day {letter.day}
              </p>
              <p className="text-sm text-ink m-0 mb-1">{letter.subject}</p>
              <p className="text-xs text-muted m-0">{letter.preheader}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="space-y-8">
        {BETA_LETTERS.map((letter) => (
          <section key={letter.key}>
            <p className="text-center text-[0.6875rem] uppercase tracking-[0.18em] text-muted m-0 mb-3">
              {letter.subject}
            </p>
            <NewsletterLetterCard letter={letter} />
          </section>
        ))}
      </div>

      <p className="text-center mt-10 mb-0">
        <Link to="/beta" className="text-sm text-aqua-light no-underline hover:text-aqua">
          Join the list
        </Link>
      </p>
    </div>
  );
}
