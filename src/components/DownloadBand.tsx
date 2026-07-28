import { Smartphone, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appUrlWithRef, DISCORD_URL } from '@/lib/config';

export function DownloadBand({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`relative overflow-hidden rounded-[1.75rem] border border-[rgba(168,237,220,0.14)] bg-[rgba(26,26,46,0.65)] backdrop-blur-md ${
        compact ? 'px-6 py-10' : 'px-8 py-14 md:px-12'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-aqua/10 blur-[90px]" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-lav/10 blur-[90px]" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="section-label section-label-accent mb-3">Get EverDream</p>
          <h2 className="font-dream text-3xl md:text-[2.35rem] text-ink m-0 mb-3 font-medium tracking-tight">
            Start journaling tonight
          </h2>
          <p className="text-body m-0 max-w-md leading-relaxed text-[0.95rem]">
            Same Pearl Dark calm as the app — open the PWA, join Discord, or install when stores open.
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
