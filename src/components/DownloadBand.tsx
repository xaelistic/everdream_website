import { Smartphone, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appUrlWithRef, DISCORD_URL } from '@/lib/config';

export function DownloadBand({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-deep via-cream to-pearl ${
        compact ? 'px-6 py-10' : 'px-8 py-14 md:px-12'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-aqua/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-lav/10 blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="section-label mb-3">Get EverDream</p>
          <h2 className="font-dream text-3xl md:text-4xl text-ink m-0 mb-3 font-medium">
            Start journaling tonight
          </h2>
          <p className="text-body m-0 max-w-md leading-relaxed">
            Open the web app (PWA), join Discord, or grab store builds when available.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={appUrlWithRef()} className="btn-primary">
            <Globe className="h-4 w-4" />
            Open web app
          </a>
          <Link to="/download" className="btn-secondary">
            <Smartphone className="h-4 w-4" />
            Install & stores
          </Link>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <MessageCircle className="h-4 w-4" />
            Discord
          </a>
        </div>
      </div>
    </section>
  );
}
