import { useEffect } from 'react';
import { absoluteUrl, site } from '@/config/site';

export type SeoConfig = {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/services". Defaults to the current URL. */
  path?: string;
  /** Site-relative path to the share image. */
  image?: string;
  type?: 'website' | 'article';
  /** JSON-LD objects appended to the page graph. */
  jsonLd?: Record<string, unknown>[];
};

const MANAGED = 'data-seo-managed';

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(MANAGED, '');
    document.head.appendChild(el);
  }
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"][${MANAGED}]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    el.setAttribute(MANAGED, '');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets the document title, meta description, canonical URL, Open Graph and
 * Twitter card tags, and injects JSON-LD structured data for a route.
 *
 * NOTE: this runs in the browser. Social platforms that do not execute
 * JavaScript (WhatsApp, Facebook, some link previewers) will fall back to
 * the static tags in index.html. See README.md for the prerender note.
 */
export function useSeo({
  title,
  description,
  path,
  image = '/images/og-image.jpg',
  type = 'website',
  jsonLd = [],
}: SeoConfig) {
  /* Serialised so the effect only re-runs when the data actually changes,
     not on every render. Callers can pass a fresh array literal safely. */
  const jsonLdKey = JSON.stringify(jsonLd);

  useEffect(() => {
    const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
    const currentPath = path ?? window.location.pathname;
    const canonical = absoluteUrl(currentPath);
    const imageUrl = absoluteUrl(image);

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: `${site.name} — ${site.location.areaServed}`,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: site.name,
    });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_IN' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });

    upsertLink('canonical', canonical);

    const scripts: HTMLScriptElement[] = [];
    for (const data of JSON.parse(jsonLdKey) as Record<string, unknown>[]) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute(MANAGED, '');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      scripts.push(script);
    }

    return () => {
      for (const script of scripts) script.remove();
    };
  }, [title, description, path, image, type, jsonLdKey]);
}
