import { useMemo, useState } from 'react';
import { Expand } from 'lucide-react';
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from '@/data/gallery';
import { trackEvent } from '@/lib/analytics';
import { cx } from '@/lib/utils';
import { Lightbox } from '@/components/ui/Lightbox';

type Filter = GalleryCategory | 'All';

const filters: Filter[] = ['All', ...galleryCategories];

/**
 * Masonry-style gallery. Uses CSS columns rather than JavaScript so there
 * is no layout calculation on scroll and no extra dependency.
 */
export function GalleryGrid({
  items = galleryItems,
  showFilters = true,
}: {
  items?: GalleryItem[];
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState<Filter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === 'All' ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );

  const open = (index: number) => {
    setLightboxIndex(index);
    trackEvent('gallery_open', { category: visible[index]?.category ?? filter });
  };

  return (
    <>
      {showFilters && (
        <div className="no-scrollbar -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
          {filters.map((f) => {
            const active = f === filter;
            const count = f === 'All' ? items.length : items.filter((i) => i.category === f).length;
            return (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFilter(f);
                  trackEvent('gallery_filter', { category: f });
                }}
                aria-pressed={active}
                disabled={count === 0}
                className={cx(
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-40',
                  active
                    ? 'border-ink-900 bg-ink-900 text-sand-50'
                    : 'border-sand-200 bg-white text-ink-700 hover:border-ink-900/30 hover:text-ink-900',
                )}
              >
                {f}
                <span className={cx('ml-1.5 text-xs', active ? 'text-brass-300' : 'text-ink-400')}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Announce the current filter for screen readers. */}
      <p className="sr-only" role="status" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? 'photo' : 'photos'}
        {filter === 'All' ? '' : ` in ${filter}`}.
      </p>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {visible.map((item, i) => (
          <figure key={item.src} className="group break-inside-avoid">
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`Open larger: ${item.caption}`}
              className="relative block w-full cursor-zoom-in overflow-hidden rounded-xl bg-sand-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brass-600"
            >
              <img
                src={item.srcSm}
                srcSet={`${item.srcSm} 480w, ${item.src} 1200w`}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                alt={item.alt}
                width={1200}
                height={Math.round(1200 / item.ratio)}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                style={{ aspectRatio: String(item.ratio) }}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
              <span
                aria-hidden="true"
                className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-sand-50/90 text-ink-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <Expand className="size-4" />
              </span>
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-sm font-medium text-sand-50 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                {item.caption}
              </span>
            </button>
            <figcaption className="mt-2 text-xs text-ink-500 sm:hidden">{item.caption}</figcaption>
          </figure>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="rounded-xl border border-dashed border-sand-300 py-12 text-center text-ink-500">
          No photos in this category yet.
        </p>
      )}

      <Lightbox
        items={visible}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
