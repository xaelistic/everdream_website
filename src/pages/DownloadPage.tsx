import { useEffect, useState } from 'react';
import { Globe, Smartphone, QrCode } from 'lucide-react';
import { appUrlWithRef, APP_URL, getReferralCode } from '@/lib/config';
import { SignupForm } from '@/components/SignupForm';

function detectPlatform(): 'ios' | 'android' | 'desktop' {
  if (typeof navigator === 'undefined') return 'desktop';
  const ua = navigator.userAgent || '';
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'desktop';
}

export function DownloadPage() {
  const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const ref = getReferralCode();

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const appLink = appUrlWithRef();

  return (
    <div className="page-wrap py-16 md:py-20 max-w-3xl">
      <p className="section-label mb-3">Download</p>
      <h1 className="font-dream text-4xl md:text-5xl m-0 mb-4 font-medium text-ink">
        Install EverDream
      </h1>
      <p className="text-body m-0 mb-2 leading-relaxed">
        Detected: <span className="text-aqua capitalize">{platform}</span>
        {ref ? (
          <>
            {' '}
            · Referral <code className="text-gold">{ref}</code> will apply on open
          </>
        ) : null}
      </p>
      <p className="text-muted text-sm m-0 mb-12">
        Native store badges go live when builds ship. Today the PWA / web app is the primary path.
      </p>

      <div className="mb-12">
        <SignupForm page="/download" />
      </div>

      <div className="space-y-4 mb-12">
        <a
          href={appLink}
          className="glass flex items-center gap-4 rounded-2xl p-5 no-underline hover:border-aqua/30 transition-colors"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-aqua/15 text-aqua">
            <Globe className="h-5 w-5" />
          </span>
          <div>
            <div className="text-ink font-medium">Open web app</div>
            <div className="text-sm text-muted">{APP_URL}</div>
          </div>
        </a>

        <div className="glass rounded-2xl p-5 opacity-70">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-muted">
              <Smartphone className="h-5 w-5" />
            </span>
            <div>
              <div className="text-ink font-medium">App Store & Play</div>
              <div className="text-sm text-muted">Coming soon — join Discord for beta invites</div>
            </div>
          </div>
        </div>
      </div>

      <section className="glass rounded-2xl p-6 md:p-8 mb-10">
        <h2 className="font-dream text-xl m-0 mb-3 text-ink">PWA install</h2>
        <ul className="text-sm text-body leading-relaxed m-0 pl-5 space-y-2">
          <li>
            <strong className="text-ink">iOS Safari:</strong> Share → Add to Home Screen
          </li>
          <li>
            <strong className="text-ink">Android Chrome:</strong> Menu → Install app / Add to Home
            screen
          </li>
          <li>
            <strong className="text-ink">Desktop:</strong> Install icon in the address bar when
            offered
          </li>
        </ul>
      </section>

      <section className="glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
        <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl border border-dashed border-white/15 bg-pearl">
          <QrCode className="h-12 w-12 text-muted" />
        </div>
        <div>
          <h2 className="font-dream text-xl m-0 mb-2 text-ink">QR for IRL / Discord</h2>
          <p className="text-sm text-body m-0 mb-3 leading-relaxed">
            Point people at the open-app link (referral preserved when present):
          </p>
          <code className="text-xs text-aqua break-all block bg-pearl/80 rounded-lg p-3 border border-white/5">
            {appLink}
          </code>
        </div>
      </section>
    </div>
  );
}
