import type { ReactNode } from 'react';

export function PrivacyPage() {
  return (
    <LegalShell title="Privacy policy">
      <p>
        EverDream is designed privacy-first. Your private journal stays private unless you
        explicitly share. Public gallery entries are opt-in only.
      </p>
      <h2>What we collect</h2>
      <p>
        Account identifiers when you sign up; dream content you create; optional wearable-derived
        sleep metrics you connect; usage analytics (e.g. PostHog) when enabled. Referral codes
        stored in your browser are used only to attribute invites. The beta form stores your email
        so we can send a welcome and up to three weekly notes, then later testing invites. Once
        that address is attached to an app profile, the dream note is not sent if a dream is
        already in the journal, and the picture note is not sent if a dream already has an image.
        Turning notifications off in the app skips those two notes. The welcome and the last note
        still send until you use the leave link on a letter. The address is kept with the app
        database and attached to a matching profile.
      </p>
      <h2>What we do not do</h2>
      <p>
        We do not sell private dream text. We do not invent social proof or fake friends. Cross-user
        visibility is governed by your share settings and product RLS policies.
      </p>
      <h2>Contact</h2>
      <p>For privacy requests, contact the operators via Discord or the channels listed on About.</p>
      <p className="text-xs text-muted">Last updated: 2026-11-11. This is a product summary, not legal advice.</p>
    </LegalShell>
  );
}

export function TermsPage() {
  return (
    <LegalShell title="Terms of use">
      <p>
        By using EverDream (app, website, and related bots) you agree to use the service lawfully,
        respect other dreamers’ privacy, and not abuse generation, referral, or share systems.
      </p>
      <h2>Content</h2>
      <p>
        You retain rights to your dreams. Public shares may be moderated (report, NSFW hide, admin
        queue). We may remove content that violates law or community standards.
      </p>
      <h2>Subscriptions & referrals</h2>
      <p>
        Paid tiers and referral rewards (tokens, free months) are subject to product rules and may
        change with notice. Abuse (self-referral farms, fraud) voids rewards.
      </p>
      <h2>Disclaimer</h2>
      <p>
        EverDream is not a medical device. Sleep education is general information, not diagnosis or
        treatment.
      </p>
      <p className="text-xs text-muted">Last updated: 2026-07-28. This is a product summary, not legal advice.</p>
    </LegalShell>
  );
}

function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="page-wrap py-16 md:py-20 max-w-2xl prose-dream">
      <p className="section-label mb-3">Legal</p>
      <h1 className="font-dream text-4xl m-0 mb-8 font-medium text-ink !mt-0">{title}</h1>
      {children}
    </div>
  );
}
