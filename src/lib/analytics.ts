/**
 * ------------------------------------------------------------------
 * CONVERSION TRACKING
 * ------------------------------------------------------------------
 * Nothing is sent anywhere yet. Every element that represents a
 * conversion carries a `data-event` attribute, and a single delegated
 * click listener pushes that event onto the `window.dataLayer`.
 *
 * To connect Google Tag Manager later, all you have to do is add the
 * GTM container snippet to index.html. GTM can then read these events
 * without any further code changes.
 *
 * Events used across the site:
 *   phone_click          - any "Call Now" button or phone link
 *   whatsapp_click       - any "WhatsApp" button or link
 *   contact_form_submit  - enquiry form sent successfully
 *   service_enquiry_click- "Get a Quote" / "Enquire Now" on a service
 *   gallery_open         - a gallery image was opened in the lightbox
 *   gallery_filter       - a gallery category was selected
 *   nav_click            - a header/footer navigation link was used
 *   guide_read           - a guide article page was opened
 */

export type TrackingEvent =
  | 'phone_click'
  | 'whatsapp_click'
  | 'contact_form_submit'
  | 'service_enquiry_click'
  | 'gallery_open'
  | 'gallery_filter'
  | 'nav_click'
  | 'guide_read';

type DataLayerWindow = Window & {
  dataLayer?: Record<string, unknown>[];
};

let listenerAttached = false;

export function trackEvent(event: TrackingEvent, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

function handleClick(e: MouseEvent) {
  const target = e.target;
  if (!(target instanceof Element)) return;
  const el = target.closest<HTMLElement>('[data-event]');
  if (!el) return;
  trackEvent(el.dataset.event as TrackingEvent, {
    label: el.dataset.eventLabel ?? el.textContent?.trim().slice(0, 80) ?? '',
    location: el.dataset.eventLocation ?? window.location.pathname,
  });
}

/** Installed once from the root layout. Safe to call on every render. */
export function initTracking() {
  if (typeof window === 'undefined' || listenerAttached) return;
  listenerAttached = true;
  document.addEventListener('click', handleClick, { capture: true });
}
