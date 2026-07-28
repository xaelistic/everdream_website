# EverDream Website

Public marketing + community site for **EverDream** — built from [`docs/WEBSITE_MAP.md`](https://github.com/xaelistic/EverDream) in the product monorepo.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- React Router (SPA)
- nginx (Docker) for Coolify deploy

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/features` | Features deep-dive |
| `/how-it-works` | Journey steps |
| `/gallery`, `/gallery/:id` | Public dream gallery |
| `/leaderboards` | Streaks / shares / referrals |
| `/pricing` | Free / Plus / Pro + referrals |
| `/download` | PWA + store placeholders |
| `/roadmap` | Now / Next / Later |
| `/about` | Mission |
| `/learn`, `/learn/:slug` | Education articles |
| `/discord` | Community redirect |
| `/r/:code` | Referral landing |
| `/privacy`, `/terms` | Legal summaries |

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Env (optional):

```
VITE_APP_URL=https://your-app-url
VITE_DISCORD_URL=https://discord.gg/your-invite
```

## Deploy (Coolify)

Dockerfile multi-stage build → nginx on port **80**. SPA fallback via `nginx.conf`.
