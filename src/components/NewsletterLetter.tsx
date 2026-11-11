import { APP_URL, DISCORD_URL } from '@/lib/config';
import type { NewsletterCta, NewsletterLetter as Letter } from '@/data/newsletter';

function hrefFor(to: NewsletterCta): string {
  if (to === 'app') return APP_URL;
  if (to === 'discord') return DISCORD_URL;
  return '/beta/letters';
}

export function NewsletterLetterCard({ letter }: { letter: Letter }) {
  const ctaHref = hrefFor(letter.cta.to);
  const quietHref = letter.quiet ? hrefFor(letter.quiet.to) : '';
  const ctaExternal = letter.cta.to !== 'letters';
  const quietExternal = letter.quiet ? letter.quiet.to !== 'letters' : false;

  return (
    <article className="mx-auto max-w-[560px] overflow-hidden rounded-[1.75rem] border border-[rgba(168,237,220,0.14)] bg-[#0d0d1a] shadow-[0_1px_6px_rgba(0,0,0,0.3)]">
      <div className="px-8 pt-8 pb-2 md:px-10">
        <p className="wordmark m-0">Everdream</p>
        <p className="wordmark-sub m-0">Dreams · Sleep · Calm reflection</p>
      </div>
      <div className="px-8 pb-8 md:px-10">
        <div className="mt-6 rounded-2xl border border-[rgba(168,237,220,0.12)] bg-[rgba(26,26,46,0.75)] px-6 py-7">
          <p className="section-label section-label-accent m-0 mb-4">
            {letter.funnel} · {letter.when}
          </p>
          <h2 className="font-dream text-[1.85rem] leading-tight text-ink m-0 mb-4 font-medium">
            {letter.headline}
          </h2>
          {letter.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm text-body leading-relaxed m-0 mb-3">
              {paragraph}
            </p>
          ))}
          <a
            href={ctaHref}
            className="btn-primary mt-4"
            {...(ctaExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {letter.cta.label}
          </a>
          {letter.quiet ? (
            <p className="m-0 mt-4">
              <a
                href={quietHref}
                className="text-sm text-aqua-light no-underline hover:text-aqua"
                {...(quietExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {letter.quiet.label}
              </a>
            </p>
          ) : null}
        </div>
        <p className="text-[0.6875rem] text-muted leading-relaxed m-0 mt-5">
          EverDream · Capture dreams. Understand sleep. Share wonder.
          <br />
          You’re on this list because you joined the beta. Each letter has a way to leave.
        </p>
      </div>
    </article>
  );
}
