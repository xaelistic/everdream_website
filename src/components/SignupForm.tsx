import { useState, type FormEvent } from 'react';
import { getReferralCode, SIGNUP_URL } from '@/lib/config';

export function SignupForm({
  page,
  showHeading = true,
}: {
  page: string;
  showHeading?: boolean;
}) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('saving');
    setMessage('');
    try {
      const response = await fetch(SIGNUP_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'beta-newsletter',
          newsletter: true,
          page,
          referral_code: getReferralCode(),
          company,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.ok !== true) {
        setStatus('error');
        setMessage(typeof data.error === 'string' ? data.error : 'Could not save that signup.');
        return;
      }
      setStatus('done');
      setEmail('');
      setMessage('You’re on the beta list. We’ll write when there’s a test to join.');
    } catch {
      setStatus('error');
      setMessage('Could not reach signup. Try again in a moment.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-6 md:p-8">
      {showHeading ? (
        <>
          <p className="section-label mb-3">Beta newsletter</p>
          <h2 className="font-dream text-3xl text-ink m-0 mb-2 font-medium">Join the beta list</h2>
          <p className="text-body text-sm m-0 mb-5 leading-relaxed max-w-xl">
            Beta invites and product notes. If you later open the app with the same address, this
            stays on your profile.
          </p>
        </>
      ) : (
        <p className="text-body text-sm m-0 mb-5 leading-relaxed">
          Use an address you check. We’ll send beta invites and product notes there.
        </p>
      )}
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Company
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="flex-1 rounded-xl border border-white/10 bg-pearl px-4 py-3 text-sm text-ink outline-none focus:border-aqua/50"
        />
        <button type="submit" className="btn-primary" disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving…' : 'Join the list'}
        </button>
      </div>
      {message ? (
        <p className={`text-sm mt-3 mb-0 ${status === 'error' ? 'text-rose' : 'text-aqua-light'}`}>{message}</p>
      ) : null}
    </form>
  );
}
