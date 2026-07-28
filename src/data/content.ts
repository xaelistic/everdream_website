export type Feature = {
  id: string;
  title: string;
  blurb: string;
  detail: string;
  icon: string;
  anchor?: string;
};

export const FEATURES: Feature[] = [
  {
    id: 'journal',
    title: 'Dream journal',
    blurb: 'Text, voice, video, and photo OCR — capture mornings while memory is fresh.',
    detail:
      'Multiple capture modes so you never lose a night. Voice memos and video journals sit alongside typed entries and OCR from photos of handwritten notes.',
    icon: '📓',
  },
  {
    id: 'ai-art',
    title: 'AI dream assets',
    blurb: 'Narrative, image, rarity, and keepsakes generated from your dreams.',
    detail:
      'Turn raw dream notes into structured narratives and visual art. Assets carry rarity and become shareable keepsakes — opt-in public when you choose.',
    icon: '✨',
  },
  {
    id: 'sleep',
    title: 'Sleep tracker',
    blurb: 'Stages, scores, and wearable context alongside your journal.',
    detail:
      'See how sleep quality tracks with dream intensity. Connect wearables for stages and scores without burying education in the tracker UI.',
    icon: '🌙',
    anchor: 'wearables',
  },
  {
    id: 'education',
    title: 'Daily education',
    blurb: 'Full-screen learn pieces on sleep, REM, and lucid practice.',
    detail:
      'Short, high-signal modules — blue light, routines, dream science — designed to be read, not buried in settings.',
    icon: '📖',
  },
  {
    id: 'social',
    title: 'Social & share cards',
    blurb: 'Public profiles, friends, and “Made in EverDream” share cards.',
    detail:
      'Share when you want to. Gallery and profiles are opt-in only — no fake social proof, no forced network.',
    icon: '🔗',
  },
  {
    id: 'achievements',
    title: 'Achievements & referrals',
    blurb: 'First journal, first share, first friend — tokens and free months.',
    detail:
      'Milestones unlock generation tokens. Referrals reward both sides: tokens on signup and a free month when a friend upgrades.',
    icon: '🏆',
  },
  {
    id: 'economy',
    title: 'Dream economy',
    blurb: 'XAEL, mint, combine — Discord bot parity (flagged).',
    detail:
      'Experimental economy layer: mint dream assets, combine, and Discord commands. Enabled when product flags allow.',
    icon: '💎',
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Morning capture',
    body: 'Open EverDream while the dream is still warm. Type, speak, film, or photograph notes.',
  },
  {
    step: 2,
    title: 'Analysis & art',
    body: 'AI structures your narrative and can render dream imagery with rarity metadata.',
  },
  {
    step: 3,
    title: 'Sleep context',
    body: 'Wearables and sleep scores sit next to the night’s journal for pattern insight.',
  },
  {
    step: 4,
    title: 'Share & achieve',
    body: 'Publish opt-in share cards, climb streaks, and unlock achievements.',
  },
  {
    step: 5,
    title: 'Invite friends',
    body: 'Referral codes earn generation tokens — and free months when friends subscribe.',
  },
];

export const PRICING = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    highlights: [
      'Dream journal (text, voice, media)',
      'Limited AI images / month',
      'Local-first storage options',
      'Core sleep education',
      'Achievements & referral codes',
    ],
    cta: 'Get the app',
    featured: false,
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '$7',
    period: '/ month',
    highlights: [
      'Unlimited dream images',
      'Wearables sync',
      'Cloud sync & analytics',
      'Full education library',
      'Priority share gallery features',
    ],
    cta: 'Start Plus',
    featured: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$15',
    period: '/ month',
    highlights: [
      'Everything in Plus',
      'Simulacra / VR pathways',
      'Advanced exports',
      'Early economy features',
      'Founding dreamer perks',
    ],
    cta: 'Go Pro',
    featured: false,
  },
];

export const REFERRAL_INCENTIVES = [
  { who: 'Referrer', reward: '+5 generation tokens per signup' },
  { who: 'Referee', reward: '+3 welcome tokens on first use of code' },
  { who: 'Both', reward: '1 free month when referee pays for Plus/Pro' },
];

export const ROADMAP = {
  now: [
    'Dream journal (text, voice, video, OCR)',
    'Sleep tracker + wearables connect',
    'Achievements & client referral ledger',
    'PWA install path',
    'Discord community & bot workflows',
  ],
  next: [
    'Full friends graph',
    'Backend referral claims',
    'Live website gallery from public shares',
    'Weekly leaderboard snapshots',
  ],
  later: [
    'Simulacra / VR experiences',
    'Asset exchange',
    'Deeper conversational coaching',
    'Seasonal Discord competitions on web',
  ],
};

export type GalleryDream = {
  id: string;
  title: string;
  nugget: string;
  emotion: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  category: string;
  date: string;
  shares: number;
  featured?: boolean;
  gradient: string;
};

/** Static sample gallery — replaced by Supabase public_shares when API is live */
export const SAMPLE_GALLERY: GalleryDream[] = [
  {
    id: 'aurora-stairs',
    title: 'Stairs into aurora',
    nugget: 'I climbed a spiral of light that hummed like a choir underwater.',
    emotion: 'awe',
    rarity: 'rare',
    category: 'lucid',
    date: '2026-07-12',
    shares: 42,
    featured: true,
    gradient: 'from-violet-600/40 via-teal-500/20 to-indigo-900/50',
  },
  {
    id: 'library-rain',
    title: 'The library that rained',
    nugget: 'Books opened themselves; every page was a map of a city I almost remembered.',
    emotion: 'curious',
    rarity: 'uncommon',
    category: 'symbolic',
    date: '2026-07-10',
    shares: 28,
    featured: true,
    gradient: 'from-amber-500/30 via-rose-400/15 to-slate-900/60',
  },
  {
    id: 'whale-station',
    title: 'Station of whales',
    nugget: 'A metro platform where whales docked instead of trains. Soft blue tickets.',
    emotion: 'calm',
    rarity: 'legendary',
    category: 'surreal',
    date: '2026-07-08',
    shares: 91,
    featured: true,
    gradient: 'from-cyan-500/35 via-blue-700/25 to-slate-950/70',
  },
  {
    id: 'mirror-market',
    title: 'Mirror market at dusk',
    nugget: 'Vendors sold reflections of people who had not yet arrived.',
    emotion: 'unease',
    rarity: 'rare',
    category: 'symbolic',
    date: '2026-07-05',
    shares: 19,
    gradient: 'from-fuchsia-600/30 via-purple-800/20 to-black/50',
  },
  {
    id: 'garden-clocks',
    title: 'Garden of stopped clocks',
    nugget: 'Every flower was a face. None of them agreed on the hour.',
    emotion: 'wistful',
    rarity: 'common',
    category: 'recurring',
    date: '2026-07-03',
    shares: 11,
    gradient: 'from-emerald-500/30 via-lime-600/10 to-stone-900/60',
  },
  {
    id: 'paper-sea',
    title: 'Paper sea',
    nugget: 'Waves of origami; each crest folded into a letter from my younger self.',
    emotion: 'tender',
    rarity: 'uncommon',
    category: 'emotional',
    date: '2026-06-28',
    shares: 33,
    featured: true,
    gradient: 'from-sky-400/25 via-indigo-500/20 to-zinc-900/60',
  },
];

export type LeaderboardRow = {
  rank: number;
  handle: string;
  metric: string;
  value: string;
};

export const LEADERBOARDS: {
  id: string;
  title: string;
  metric: string;
  cadence: string;
  rows: LeaderboardRow[];
}[] = [
  {
    id: 'streaks',
    title: 'Streak masters',
    metric: 'Current journal streak',
    cadence: 'Live / weekly',
    rows: [
      { rank: 1, handle: 'luna_ink', metric: 'streak', value: '47 nights' },
      { rank: 2, handle: 'rem_walker', metric: 'streak', value: '39 nights' },
      { rank: 3, handle: 'night.orchard', metric: 'streak', value: '31 nights' },
      { rank: 4, handle: 'soft_eclipse', metric: 'streak', value: '28 nights' },
      { rank: 5, handle: 'void.sketch', metric: 'streak', value: '22 nights' },
    ],
  },
  {
    id: 'shares',
    title: 'Share champions',
    metric: 'Public shares / viral cards',
    cadence: 'Weekly',
    rows: [
      { rank: 1, handle: 'whale.station', metric: 'shares', value: '128 cards' },
      { rank: 2, handle: 'paper_sea', metric: 'shares', value: '96 cards' },
      { rank: 3, handle: 'aurora.steps', metric: 'shares', value: '74 cards' },
      { rank: 4, handle: 'mirror.dusk', metric: 'shares', value: '61 cards' },
      { rank: 5, handle: 'clock.garden', metric: 'shares', value: '48 cards' },
    ],
  },
  {
    id: 'referrals',
    title: 'Referral heroes',
    metric: 'Signups / paid conversions',
    cadence: 'Monthly',
    rows: [
      { rank: 1, handle: 'host.ember', metric: 'referrals', value: '24 signups' },
      { rank: 2, handle: 'guide.sage', metric: 'referrals', value: '18 signups' },
      { rank: 3, handle: 'invite.moon', metric: 'referrals', value: '15 signups' },
      { rank: 4, handle: 'bridge.night', metric: 'referrals', value: '12 signups' },
      { rank: 5, handle: 'spark.ref', metric: 'referrals', value: '9 signups' },
    ],
  },
];

export type LearnArticle = {
  slug: string;
  category: string;
  title: string;
  readTimeMinutes: number;
  icon: string;
  content: string;
  tips: string[];
  seoKeywords: string[];
};

export const LEARN_ARTICLES: LearnArticle[] = [
  {
    slug: 'blue-light-and-sleep',
    category: 'Sleep hygiene',
    title: 'Blue Light & Sleep',
    readTimeMinutes: 2,
    icon: '📱',
    content: `Blue light from screens suppresses melatonin production by up to 50%. Your brain interprets blue light as daylight, delaying your natural sleep signal. The most impactful change you can make is reducing screen exposure 60–90 minutes before bed. If you must use screens, enable night mode / blue light filters and reduce brightness to minimum.`,
    tips: [
      'Enable night mode on all devices after sunset',
      'Use blue light blocking glasses in the evening',
      'Keep screens out of the bedroom entirely',
      'Replace evening scrolling with reading or journaling',
      'Use dim, warm lighting in your bedroom',
    ],
    seoKeywords: ['blue light sleep', 'melatonin screens', 'sleep hygiene'],
  },
  {
    slug: 'building-a-sleep-routine',
    category: 'Sleep hygiene',
    title: 'Building a Sleep Routine',
    readTimeMinutes: 3,
    icon: '🕐',
    content: `A consistent sleep routine trains your circadian clock. Going to bed and waking at the same time every day (even weekends) is the single most effective sleep improvement strategy. Your body thrives on predictability. A wind-down routine signals to your brain that sleep is coming.`,
    tips: [
      'Set a fixed wake time and stick to it 7 days a week',
      'Start winding down 60–90 minutes before target bedtime',
      'Create a consistent pre-sleep sequence (e.g. shower, read, meditate)',
      'Avoid caffeine after 2pm (6–8 hour half-life)',
      'Avoid alcohol within 3 hours of bed',
      'Exercise earlier in the day, not within 4 hours of bedtime',
    ],
    seoKeywords: ['sleep routine', 'circadian rhythm', 'bedtime ritual'],
  },
  {
    slug: 'optimizing-sleep-environment',
    category: 'Environment',
    title: 'Optimizing Your Sleep Environment',
    readTimeMinutes: 2,
    icon: '🛏️',
    content: `Your bedroom environment has a profound impact on sleep quality. The ideal sleep environment is cool (65–68°F / 18–20°C), dark, and quiet. Even small improvements can significantly increase deep sleep and REM.`,
    tips: [
      'Keep your bedroom cool: 65–68°F (18–20°C)',
      'Use blackout curtains or a sleep mask',
      'Use earplugs or white noise to mask sound',
      'Reserve your bed for sleep and intimacy only',
      'Remove clocks that glow or tick loudly',
    ],
    seoKeywords: ['sleep environment', 'bedroom temperature', 'deep sleep'],
  },
  {
    slug: 'lucid-dreaming-journal',
    category: 'Dreams',
    title: 'Why a Lucid Dreaming Journal Works',
    readTimeMinutes: 4,
    icon: '✨',
    content: `Dream recall is a skill. A consistent morning journal trains attention toward the dream state and is the foundation of most lucid practice. Writing within minutes of waking captures details that evaporate under daylight and distraction. Over time, patterns, dream signs, and emotional themes become visible — the raw material for intentional lucidity.`,
    tips: [
      'Capture within 5–10 minutes of waking',
      'Note emotions and odd details first; plot second',
      'Tag recurring places, people, and impossibilities as dream signs',
      'Review weekly for themes rather than perfect prose',
      'Pair with a short intention phrase before sleep',
    ],
    seoKeywords: ['lucid dreaming journal', 'dream recall', 'dream signs'],
  },
  {
    slug: 'rem-sleep-basics',
    category: 'Dreams',
    title: 'REM Sleep Basics',
    readTimeMinutes: 3,
    icon: '🧠',
    content: `REM (rapid eye movement) sleep is when most vivid dreaming occurs. Periods lengthen across the night; the final third often holds the richest narratives. Alcohol, sleep restriction, and irregular schedules fragment REM. Protecting total sleep time and a stable schedule is the simplest way to protect dream life.`,
    tips: [
      'Prioritize 7–9 hours in bed for fuller late-night REM',
      'Avoid alcohol near bedtime if dream intensity matters to you',
      'Keep a consistent wake time even after late nights',
      'Note when dreams feel cut short — often a REM disruption signal',
    ],
    seoKeywords: ['REM sleep', 'vivid dreams', 'dream science'],
  },
  {
    slug: 'wearables-and-dream-context',
    category: 'Wearables',
    title: 'Wearables & Dream Context',
    readTimeMinutes: 3,
    icon: '⌚',
    content: `Wearables don’t “record dreams,” but stages, heart-rate variability, and sleep scores provide context for the night you journaled. EverDream pairs that context with your own words so patterns (poor deep sleep + intense nightmares, long REM + lucid nights) become easier to notice without medical claims.`,
    tips: [
      'Connect a wearable when you want sleep stages next to entries',
      'Treat scores as signals, not diagnoses',
      'Compare weeks, not single nights',
      'Journal first — wearables are optional enrichment',
    ],
    seoKeywords: ['sleep wearable', 'dream journal wearable', 'sleep stages'],
  },
];

export const RARITY_COLORS: Record<string, string> = {
  common: 'text-body border-white/10 bg-white/5',
  uncommon: 'text-aqua border-aqua/30 bg-aqua/10',
  rare: 'text-lav-light border-lav/40 bg-lav/15',
  legendary: 'text-gold border-gold/40 bg-gold/10',
};
