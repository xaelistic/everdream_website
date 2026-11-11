import { Link } from 'react-router-dom';
import { Moon } from 'lucide-react';
import { DISCORD_URL, TAGLINE } from '@/lib/config';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { to: '/features', label: 'Features' },
      { to: '/how-it-works', label: 'How it works' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/leaderboards', label: 'Leaderboards' },
      { to: '/pricing', label: 'Pricing' },
      { to: '/download', label: 'Download' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/about', label: 'About' },
      { to: '/roadmap', label: 'Roadmap' },
      { to: '/learn', label: 'Learn' },
      { to: '/discord', label: 'Discord' },
      { to: '/beta', label: 'Beta waitlist' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/privacy', label: 'Privacy' },
      { to: '/terms', label: 'Terms' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[rgba(168,237,220,0.08)] pt-16 pb-10">
      <div className="page-wrap">
        <div className="grid gap-12 md:grid-cols-4 mb-14">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(168,237,220,0.14)] bg-[rgba(26,26,46,0.8)]">
                <Moon className="h-3.5 w-3.5 text-lav" strokeWidth={1.75} />
              </span>
              <span className="wordmark !text-xs">Everdream</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs m-0">{TAGLINE}</p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm text-aqua-light hover:text-aqua transition-colors"
            >
              Join Discord →
            </a>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="section-label mb-4">{col.title}</div>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted hover:text-body transition-colors no-underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted/90 m-0">
            © {new Date().getFullYear()} EverDream. All rights reserved.
          </p>
          <p className="font-dream italic text-sm text-dream m-0">
            Your subconscious, your sovereignty.
          </p>
        </div>
      </div>
    </footer>
  );
}
