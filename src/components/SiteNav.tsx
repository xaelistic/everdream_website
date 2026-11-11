import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Moon } from 'lucide-react';
import { appUrlWithRef } from '@/lib/config';

const LINKS = [
  { to: '/features', label: 'Features' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/leaderboards', label: 'Boards' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/learn', label: 'Learn' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/beta', label: 'Beta' },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[13px] transition-colors duration-200 ${
      isActive ? 'text-ink' : 'text-muted hover:text-body'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(168,237,220,0.1)] bg-[rgba(13,13,26,0.88)] backdrop-blur-xl">
      <div className="page-wrap flex h-[4.25rem] items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 no-underline min-w-0 group">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(168,237,220,0.14)] bg-[rgba(26,26,46,0.8)] shadow-[0_1px_6px_rgba(0,0,0,0.25)] group-hover:border-aqua/30 transition-colors">
            <Moon className="h-4 w-4 text-lav" strokeWidth={1.75} />
          </span>
          <span className="min-w-0">
            <span className="wordmark block truncate">Everdream</span>
            <span className="wordmark-sub hidden sm:block">Dreams · Sleep · Calm reflection</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            to="/pricing"
            className="hidden md:inline text-[13px] text-muted hover:text-body no-underline"
          >
            Buy tokens
          </Link>
          <a
            href={appUrlWithRef()}
            className="btn-primary hidden sm:inline-flex !py-2.5 !px-4 !text-[13px] !rounded-2xl"
          >
            Get the app
          </a>
          <button
            type="button"
            className="rounded-xl border border-[rgba(168,237,220,0.12)] bg-[rgba(26,26,46,0.6)] p-2.5 text-body xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[rgba(168,237,220,0.08)] bg-[rgba(13,13,26,0.97)] xl:hidden">
          <nav className="page-wrap flex flex-col gap-0.5 py-4">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-sm ${
                    isActive ? 'bg-white/[0.04] text-ink' : 'text-body'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/pricing"
              className="rounded-xl px-3 py-3 text-sm text-body"
              onClick={() => setOpen(false)}
            >
              Buy tokens
            </Link>
            <a
              href={appUrlWithRef()}
              className="btn-primary mt-3 !justify-center !rounded-2xl"
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
