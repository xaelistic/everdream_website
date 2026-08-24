/** Site + product URLs — override via VITE_* at build time */
export const APP_URL =
  import.meta.env.VITE_APP_URL || 'https://everdream.n1g3.com';
export const DISCORD_URL =
  import.meta.env.VITE_DISCORD_URL || 'https://discord.gg/everdream';
export const SITE_NAME = 'EverDream';
export const TAGLINE = 'Capture dreams. Understand sleep. Share wonder.';

export const REF_STORAGE_KEY = 'everdream_ref_code';

export function storeReferralCode(code: string) {
  const cleaned = code.trim().toUpperCase();
  if (!cleaned) return;
  try {
    sessionStorage.setItem(REF_STORAGE_KEY, cleaned);
    localStorage.setItem(REF_STORAGE_KEY, cleaned);
  } catch {
    /* private mode */
  }
}

export function getReferralCode(): string | null {
  try {
    return (
      sessionStorage.getItem(REF_STORAGE_KEY) ||
      localStorage.getItem(REF_STORAGE_KEY)
    );
  } catch {
    return null;
  }
}

export function appUrlWithRef(path = '/#/'): string {
  const code = getReferralCode();
  const base = APP_URL.replace(/\/$/, '');
  const url = `${base}${path.startsWith('/') ? path : `/${path}`}`;
  if (!code) return url;
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}ref=${encodeURIComponent(code)}`;
}
