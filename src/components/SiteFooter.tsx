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
    <footer className="mt-auto border-t border-white/[0.06] pt-16 pb-10">
      <div className="page-wrap">
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-aqua to-lav">
                <Moon className="h-3 w-3 text-pearl" />
              </span>
              <span className="font-dream text-base text-ink/90">everdream</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">{TAGLINE}</p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-aqua hover:text-aqua-light transition-colors"
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

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.05] pt-8">
          <p className="text-xs text-muted/80 m-0">© {new Date().getFullYear()} EverDream. All rights reserved.</p>
          <p className="font-dream italic text-sm text-muted/60 m-0">Your subconscious, your sovereignty.</p>
        </div>
      </div>
    </footer>
  );
}
