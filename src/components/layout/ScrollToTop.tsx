import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Sends the viewport back to the top on every route change, and scrolls
 * to the in-page anchor when the URL has a hash (e.g. /services#sofa-repair).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    // The target may not exist on the first frame after a route change,
    // so retry briefly before giving up.
    let attempts = 0;
    const tryScroll = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < 10) window.setTimeout(tryScroll, 60);
    };
    tryScroll();
  }, [pathname, hash]);

  return null;
}
