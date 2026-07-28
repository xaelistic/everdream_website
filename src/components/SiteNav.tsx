import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Moon } from 'lucide-react';
import { appUrlWithRef } from '@/lib/config';

const LINKS = [
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/leaderboards', label: 'Leaderboards' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/learn', label: 'Learn' },
  { to: '/roadmap', label: 'Roadmap' },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors ${
      isActive ? 'text-ink' : 'text-body hover:text-ink'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-pearl/90 backdrop-blur-md">
      <div className="page-wrap flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-aqua to-lav">
            <Moon className="h-3.5 w-3.5 text-pearl" strokeWidth={2.5} />
          </span>
          <span className="font-dream text-lg tracking-wide text-ink">everdream</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={appUrlWithRef()} className="btn-primary hidden sm:inline-flex !py-2 !px-4 !text-sm">
            Get the app
          </a>
          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-body lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-deep/95 lg:hidden">
          <nav className="page-wrap flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm ${
                    isActive ? 'bg-white/5 text-ink' : 'text-body'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href={appUrlWithRef()}
              className="btn-primary mt-2 !justify-center"
              onClick={() => setOpen(false)}
            >
              Get the app
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
