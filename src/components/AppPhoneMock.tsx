/** Product chrome mock — mirrors Pearl Dark HomeScreen language */
export function AppPhoneMock() {
  return (
    <div className="device-frame float-slow" aria-hidden>
      <div className="device-notch" />
      <div className="device-frame-screen px-3.5 pt-9 pb-4 flex flex-col gap-3">
        {/* App header */}
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-full border border-[rgba(168,237,220,0.14)] bg-[rgba(26,26,46,0.8)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                stroke="#9b8fd4"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-light tracking-[0.32em] uppercase text-ink m-0 leading-none">
              EVERDREAM
            </p>
            <p className="text-[8px] text-muted tracking-wide m-0 mt-1">
              Dreams · Sleep · Calm reflection
            </p>
          </div>
        </div>

        {/* Daily reflection card */}
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(168,237,220,0.12)] bg-gradient-to-br from-[#1a1a2e] via-[#1f1a2e] to-[rgba(200,184,255,0.12)] p-3.5">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-lav/15 blur-2xl" />
          <p className="text-[8px] uppercase tracking-[0.2em] text-muted m-0 mb-1.5 relative">
            Daily reflection
          </p>
          <p className="font-dream text-[15px] leading-snug text-ink m-0 relative">
            “The dream is the small hidden door in the deepest and most intimate sanctum of the soul.”
          </p>
          <p className="text-[10px] text-muted m-0 mt-2 relative">— Carl Jung</p>
          <div className="mt-3 w-full rounded-xl bg-aqua text-pearl text-[11px] font-semibold py-2 text-center">
            Journal about this
          </div>
        </div>

        {/* Energy check-in strip */}
        <div className="rounded-xl border border-[rgba(168,237,220,0.1)] bg-[rgba(26,26,46,0.7)] p-2.5">
          <p className="text-[8px] uppercase tracking-[0.18em] text-muted m-0 mb-2">
            How are you feeling?
          </p>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { e: '😌', l: 'Good', on: true },
              { e: '😐', l: 'Okay', on: false },
              { e: '😔', l: 'Low', on: false },
            ].map((x) => (
              <div
                key={x.l}
                className={`rounded-lg border py-1.5 text-center ${
                  x.on
                    ? 'border-aqua/40 bg-aqua/10'
                    : 'border-white/[0.06] bg-white/[0.02]'
                }`}
              >
                <div className="text-sm leading-none">{x.e}</div>
                <div className="text-[8px] text-muted mt-0.5">{x.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dream cards */}
        <div className="rounded-xl border border-[rgba(168,237,220,0.12)] bg-[rgba(26,26,46,0.75)] p-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] rounded-full px-2 py-0.5 bg-lav/15 text-lav-light border border-lav/20">
              Lucid
            </span>
            <span className="text-[9px] text-muted">Today</span>
          </div>
          <p className="font-dream text-[13px] text-ink m-0 leading-snug">
            Stairs into aurora
          </p>
          <p className="text-[10px] text-body m-0 mt-1 leading-relaxed line-clamp-2">
            A spiral of light that hummed like a choir underwater…
          </p>
          <div className="mt-2 h-16 rounded-lg bg-gradient-to-br from-violet-600/35 via-teal-500/20 to-indigo-900/40 border border-white/[0.06]" />
        </div>

        <div className="rounded-xl border border-[rgba(168,237,220,0.1)] bg-[rgba(26,26,46,0.6)] p-3 opacity-80">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] rounded-full px-2 py-0.5 bg-aqua/10 text-aqua border border-aqua/20">
              Surreal
            </span>
            <span className="text-[9px] text-muted">Yesterday</span>
          </div>
          <p className="font-dream text-[12px] text-ink m-0">Station of whales</p>
          <p className="text-[10px] text-body m-0 mt-1 line-clamp-1">
            A metro platform where whales docked instead of trains.
          </p>
        </div>

        {/* Bottom nav fake */}
        <div className="mt-auto flex items-end justify-around pt-2 border-t border-[rgba(168,237,220,0.08)]">
          {['Home', 'Journal', '', 'Sleep', 'More'].map((label, i) =>
            i === 2 ? (
              <div key="orb" className="relative -mt-5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-aqua/40 to-lav/40 border border-aqua/30 flex items-center justify-center shadow-[0_0_20px_rgba(94,196,168,0.25)]">
                  <div className="w-3 h-3 rounded-full bg-aqua-light/90" />
                </div>
              </div>
            ) : (
              <div key={label} className="text-center py-1">
                <div
                  className={`w-1 h-1 rounded-full mx-auto mb-1 ${
                    label === 'Home' ? 'bg-aqua' : 'bg-muted/50'
                  }`}
                />
                <span
                  className={`text-[8px] ${
                    label === 'Home' ? 'text-aqua-light' : 'text-muted'
                  }`}
                >
                  {label}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
