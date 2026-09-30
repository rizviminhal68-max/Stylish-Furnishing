import { Phone } from 'lucide-react';
import { site, whatsappLink } from '@/config/site';
import { WhatsappGlyph } from '@/components/layout/SiteHeader';

/**
 * Always-available contact actions.
 *
 * - Below `lg`: a full-width fixed bar with two large tap targets. It sits
 *   above the browser's own bottom edge and respects the iOS safe area.
 * - `lg` and above: two stacked circular buttons in the bottom-right corner.
 *
 * Both variants are rendered and toggled with CSS only, so there is no
 * layout thrash on resize and no JavaScript deciding what the user can tap.
 */
export function FloatingContact() {
  return (
    <>
      {/* ---------------- Mobile / tablet bar ---------------- */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-200 bg-sand-50/95 backdrop-blur-md lg:hidden">
        <div
          className="grid grid-cols-2 gap-2 px-3 pt-2.5"
          style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
        >
          <a
            href={site.phone.href}
            data-event="phone_click"
            data-event-label="floating_bar_call"
            aria-label={`Call Stylish Furnishing on ${site.phone.display}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink-900 px-4 py-3 text-[0.9375rem] font-semibold text-sand-50 transition active:scale-[0.97]"
          >
            <Phone className="size-[1.1rem] shrink-0" aria-hidden="true" />
            Call Now
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            data-event-label="floating_bar_whatsapp"
            aria-label="Send a WhatsApp message to Stylish Furnishing"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-[0.9375rem] font-semibold text-ink-900 transition active:scale-[0.97]"
          >
            <WhatsappGlyph className="size-[1.15rem] shrink-0" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* ---------------- Desktop floating buttons ---------------- */}
      <div className="pointer-events-none fixed right-5 bottom-6 z-40 hidden flex-col items-end gap-3 lg:flex xl:right-8 xl:bottom-8">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_click"
          data-event-label="floating_fab_whatsapp"
          aria-label="Send a WhatsApp message to Stylish Furnishing"
          className="pointer-events-auto grid size-14 place-items-center rounded-full bg-whatsapp text-ink-900 shadow-fab transition duration-200 hover:scale-105 hover:bg-whatsapp-dark hover:text-sand-50 active:scale-95"
        >
          <WhatsappGlyph className="size-7" />
        </a>
        <a
          href={site.phone.href}
          data-event="phone_click"
          data-event-label="floating_fab_call"
          aria-label={`Call Stylish Furnishing on ${site.phone.display}`}
          className="pointer-events-auto grid size-14 place-items-center rounded-full bg-ink-900 text-sand-50 shadow-fab transition duration-200 hover:scale-105 hover:bg-ink-800 active:scale-95"
        >
          <Phone className="size-6" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
