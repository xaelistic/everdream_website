export type NewsletterCta = 'app' | 'discord' | 'letters';

export type NewsletterLetter = {
  key: 'welcome' | 'capture' | 'picture' | 'circle';
  funnel: 'Subscribe' | 'Activate' | 'Engage' | 'Stay';
  day: 0 | 7 | 14 | 21;
  when: string;
  subject: string;
  preheader: string;
  headline: string;
  paragraphs: string[];
  cta: { label: string; to: NewsletterCta; hash?: string };
  quiet?: { label: string; to: NewsletterCta; hash?: string };
};

/** Beta CRM. Welcome on join, then one email every 7 days. */
export const BETA_LETTERS: NewsletterLetter[] = [
  {
    key: 'welcome',
    funnel: 'Subscribe',
    day: 0,
    when: 'When you join',
    subject: 'You’re on the EverDream beta list',
    preheader: 'A welcome now, then one note a week for three weeks.',
    headline: 'You’re on the list.',
    paragraphs: [
      'This is the EverDream beta list. Four notes, then we only write when there is a test worth your time.',
      'Today is the welcome. In seven days, a prompt to write one dream. Seven days after that, one picture. Seven days after that, a request for what we should keep.',
      'The app is open if you want to look tonight. You do not have to wait for the next letter.',
    ],
    cta: { label: 'Open EverDream', to: 'app', hash: '/#/?nurture=welcome' },
    quiet: { label: 'Read the four notes', to: 'letters' },
  },
  {
    key: 'capture',
    funnel: 'Activate',
    day: 7,
    when: 'Day 7',
    subject: 'Write one dream before it fades',
    preheader: 'Tomorrow morning, a few sentences are enough.',
    headline: 'Catch one morning.',
    paragraphs: [
      'Open EverDream when you wake and write the dream while it is still warm. A few sentences count. If typing feels like too much, leave a voice note.',
      'Leave the pictures for next week. This note is only about whether capture is calm enough to use half-asleep.',
    ],
    cta: { label: 'Open the journal', to: 'app', hash: '/#/record?nurture=capture' },
  },
  {
    key: 'picture',
    funnel: 'Engage',
    day: 14,
    when: 'Day 14',
    subject: 'Turn one dream into a picture',
    preheader: 'Writing stays free. One image is enough this week.',
    headline: 'Give one night a picture.',
    paragraphs: [
      'If a dream is in the journal, make a single image from it. A new account includes 14 starter images. Spend one. The question is whether the picture feels like your dream.',
      'The journal itself does not cost a credit. Images do.',
    ],
    cta: { label: 'Make one image', to: 'app', hash: '/#/journal?nurture=picture' },
  },
  {
    key: 'circle',
    funnel: 'Stay',
    day: 21,
    when: 'Day 21',
    subject: 'Tell us what to keep',
    preheader: 'The last note in this sequence. One reply is enough.',
    headline: 'What should we keep?',
    paragraphs: [
      'This is the last of the four notes. Later letters are for a real test, not a weekly nudge.',
      'If you used the app, reply with one thing that helped and one thing that got in the way. If you would rather talk in a room, Discord is where the beta conversations sit.',
    ],
    cta: { label: 'Join Discord', to: 'discord' },
    quiet: { label: 'Open the app', to: 'app', hash: '/#/?nurture=circle' },
  },
];
