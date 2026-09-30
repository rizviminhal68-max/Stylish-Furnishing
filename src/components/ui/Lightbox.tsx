import { useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type LightboxItem = {
  src: string;
  srcSm: string;
  alt: string;
  caption: string;
  category: string;
  ratio: number;
};

type Props = {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

/**
 * Accessible image lightbox: focus moves into the dialog on open, Escape
 * closes, arrow keys move between photos, and focus returns to the tile
 * that opened it.
 */
export function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const open = index !== null;

  const go = useCallback(
    (direction: 1 | -1) => {
      if (index === null) return;
      onNavigate((index + direction + items.length) % items.length);
    },
    [index, items.length, onNavigate],
  );

  /* Keyboard: Escape closes, arrows navigate, Tab is trapped in the dialog. */
  useEffect(() => {
    if (!open) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
        return;
      }
      if (e.key !== 'Tab') return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      openerRef.current?.focus?.();
    };
  }, [open, go, onClose]);

  if (!open || index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex animate-fade-in flex-col bg-ink-950/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${items.length}: ${item.caption}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div ref={dialogRef} className="flex h-full flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.14em] text-brass-300 uppercase">
            {item.category}
            <span className="ml-3 tracking-normal text-ink-400 normal-case">
              {index + 1} / {items.length}
            </span>
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="grid size-10 place-items-center rounded-full border border-sand-100/25 text-sand-50 transition hover:bg-sand-50 hover:text-ink-900"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {/* Image */}
        <div className="flex min-h-0 flex-1 items-center justify-center px-3 sm:px-16">
          <img
            src={item.src}
            alt={item.alt}
            width={1200}
            height={Math.round(1200 / item.ratio)}
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>

        {/* Caption + controls */}
        <div className="flex flex-col items-center gap-4 px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:flex-row sm:justify-between sm:px-6 sm:pb-6">
          <p className="order-2 text-center text-sm text-ink-300 sm:order-1 sm:text-left">
            {item.caption}
          </p>
          <div className="order-1 flex items-center gap-2 sm:order-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="grid size-11 place-items-center rounded-full border border-sand-100/25 text-sand-50 transition hover:bg-sand-50 hover:text-ink-900"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="grid size-11 place-items-center rounded-full border border-sand-100/25 text-sand-50 transition hover:bg-sand-50 hover:text-ink-900"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
