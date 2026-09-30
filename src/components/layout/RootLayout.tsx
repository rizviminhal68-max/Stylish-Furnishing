import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { initTracking } from '@/lib/analytics';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { ScrollToTop } from './ScrollToTop';
import { FloatingContact } from '@/components/contact/FloatingContact';

export function RootLayout() {
  useEffect(() => {
    initTracking();
  }, []);

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-sand-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <SiteHeader />

      {/* Bottom padding keeps the mobile contact bar from covering content. */}
      <main id="main" className="flex-1 pb-[calc(4.75rem+env(safe-area-inset-bottom))] lg:pb-0">
        <Outlet />
      </main>

      <SiteFooter />
      <FloatingContact />
    </div>
  );
}
