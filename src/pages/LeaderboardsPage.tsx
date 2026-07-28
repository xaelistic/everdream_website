import { LEADERBOARDS } from '@/data/content';
import { DownloadBand } from '@/components/DownloadBand';

export function LeaderboardsPage() {
  return (
    <div className="page-wrap py-16 md:py-20">
      <p className="section-label mb-3">Leaderboards</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-3 font-medium text-ink">
        Streaks, shares & referrals
      </h1>
      <p className="text-body max-w-2xl m-0 mb-4 leading-relaxed">
        Privacy first: opt-in display names and handles only. Sample boards below — weekly live
        snapshots ship with the public shares API.
      </p>
      <p className="text-xs text-muted mb-12">
        Also planned: prolific dreamers, rare collectors, Discord seasonal event scores.
      </p>

      <div className="grid lg:grid-cols-3 gap-6 mb-16">
        {LEADERBOARDS.map((board) => (
          <section key={board.id} className="glass rounded-2xl p-5 md:p-6">
            <h2 className="font-dream text-xl m-0 mb-1 text-ink">{board.title}</h2>
            <p className="text-xs text-muted m-0 mb-1">{board.metric}</p>
            <p className="text-[0.65rem] uppercase tracking-wider text-aqua m-0 mb-4">
              {board.cadence}
            </p>
            <ul className="list-none p-0 m-0 space-y-2">
              {board.rows.map((r) => (
                <li
                  key={`${board.id}-${r.rank}`}
                  className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/[0.05] px-3 py-2.5"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-muted text-xs w-5">#{r.rank}</span>
                    <span className="text-ink text-sm truncate">@{r.handle}</span>
                  </div>
                  <span className="text-aqua text-xs shrink-0 ml-2">{r.value}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <DownloadBand compact />
    </div>
  );
}
