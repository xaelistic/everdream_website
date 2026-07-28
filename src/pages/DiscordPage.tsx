import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DISCORD_URL } from '@/lib/config';

const BRIDGE = [
  { discord: 'Share / showcase dreams', web: 'Gallery', to: '/gallery' },
  { discord: 'Competitions / seasons', web: 'Leaderboards', to: '/leaderboards' },
  { discord: 'Bot commands (combine, simulacrum, xael)', web: 'Features + open in Discord', to: '/features' },
  { discord: 'Announcements', web: 'Roadmap + Learn', to: '/roadmap' },
];

export function DiscordPage() {
  useEffect(() => {
    const t = window.setTimeout(() => {
      window.location.href = DISCORD_URL;
    }, 2800);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="page-wrap py-16 md:py-20 max-w-2xl">
      <p className="section-label mb-3">Discord</p>
      <h1 className="font-dream text-4xl m-0 mb-4 font-medium text-ink">Join the community</h1>
      <p className="text-body m-0 mb-6 leading-relaxed">
        Redirecting you to Discord… If nothing happens,{' '}
        <a href={DISCORD_URL} className="text-aqua" target="_blank" rel="noreferrer">
          open this link
        </a>
        .
      </p>
      <a href={DISCORD_URL} className="btn-primary mb-12 inline-flex" target="_blank" rel="noreferrer">
        Open Discord now
      </a>

      <h2 className="font-dream text-2xl m-0 mb-4 text-ink">Bot ↔ website bridge</h2>
      <ul className="list-none p-0 m-0 space-y-3">
        {BRIDGE.map((row) => (
          <li
            key={row.discord}
            className="glass rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <span className="text-sm text-body">{row.discord}</span>
            <Link to={row.to} className="text-sm text-aqua no-underline hover:text-aqua-light">
              {row.web} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
