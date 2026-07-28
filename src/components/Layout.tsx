import { useEffect } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { SiteNav } from './SiteNav';
import { SiteFooter } from './SiteFooter';
import { storeReferralCode } from '@/lib/config';

export function Layout() {
  const { pathname } = useLocation();
  const [params] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const ref = params.get('ref');
    if (ref) storeReferralCode(ref);
  }, [params]);

  return (
    <>
      <div className="atmosphere" aria-hidden />
      <div className="site-root">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
