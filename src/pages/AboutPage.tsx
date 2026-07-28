import { DownloadBand } from '@/components/DownloadBand';
import { DISCORD_URL } from '@/lib/config';

export function AboutPage() {
  return (
    <div className="page-wrap py-16 md:py-20 max-w-3xl">
      <p className="section-label mb-3">About</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-6 font-medium text-ink">
        Mission & EverDream
      </h1>
      <div className="prose-dream">
        <p>
          EverDream helps people capture dreams, understand sleep, and share wonder — without
          turning private nights into unpaid surveillance product.
        </p>
        <p>
          We build for <strong className="text-ink font-medium">local-first options</strong>,{' '}
          <strong className="text-ink font-medium">opt-in public shares</strong>, and product
          surfaces that refuse fake social proof. The app (PWA), Discord bot, and this site form
          one stack: journal deeply, learn lightly, compete kindly.
        </p>
        <h2>EDI</h2>
        <p>
          EverDream sits alongside broader EDI / foundation explorations around subjective
          experience, data dignity, and equitable exchange with AI systems. This marketing site is
          specifically for the consumer dream journal product.
        </p>
        <h2>Community</h2>
        <p>
          Announcements, seasons, and bot workflows live on Discord. Gallery and leaderboards on
          the web mirror those rituals for visitors who are not yet in the app.
        </p>
      </div>
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noreferrer"
        className="btn-secondary mt-8 inline-flex"
      >
        Join Discord
      </a>
      <div className="mt-16">
        <DownloadBand compact />
      </div>
    </div>
  );
}
