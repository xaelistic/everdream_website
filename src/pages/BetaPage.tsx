import { useEffect } from 'react';
import { SignupForm } from '@/components/SignupForm';
import { appUrlWithRef, DISCORD_URL } from '@/lib/config';

const NOTES = [
  {
    title: 'Beta invites',
    body: 'We email this list when a testing round opens, and when there is something new to try.',
  },
  {
    title: 'The app is open',
    body: 'You can journal tonight. The list is for people who want the notes, not a locked door.',
  },
  {
    title: 'Same address, one profile',
    body: 'If you later create an app account with this email, the waitlist row stays attached to it.',
  },
];

export function BetaPage() {
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
        A short newsletter for beta testing. Invites, what to try, and the occasional product note.
        No drip sequence, and we do not sell the address.
      </p>

      <SignupForm page="/beta" showHeading={false} />

      <div className="grid gap-3.5 mt-10">
        {NOTES.map((note) => (
          <section key={note.title} className="glass rounded-2xl p-5">
            <h2 className="font-dream text-xl text-ink m-0 mb-2 font-medium">{note.title}</h2>
            <p className="text-sm text-body m-0 leading-relaxed">{note.body}</p>
          </section>
        ))}
      </div>

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
