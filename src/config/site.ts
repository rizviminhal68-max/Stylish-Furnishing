/**
 * ------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH FOR BUSINESS DETAILS
 * ------------------------------------------------------------------
 * Change the business name, phone number, WhatsApp number or domain
 * here and the whole website updates automatically.
 *
 * NOTE FOR THE DEVELOPER: the `domain` below is a PLACEHOLDER.
 * Replace it with the real production domain before going live, then
 * rebuild. `public/robots.txt` and `public/sitemap.xml` also contain
 * the domain and must be updated by hand.
 */

export const site = {
  name: 'Mizan Sofa Repair',
  domain: 'https://www.stylishfurnishing.in',

  /** Phone number. `national` is digits only (used for tel: and wa.me). */
  phone: {
    display: '+91 9599931360',
    national: '9599931360',
    href: 'tel:+919599931360',
  },

  whatsapp: {
    href: 'https://wa.me/919599931360',
    number: '919599931360',
    /** Default message pre-filled in WhatsApp so enquiries start faster. */
    message:
      "Hello Mizan Sofa Repair, I need a sofa / furniture repair or upholstery service in Gurugram. Please share details.",
  },

  location: {
    city: 'Gurugram',
    cityAlt: 'Gurgaon',
    state: 'Haryana',
    country: 'India',
    areaServed: 'Gurugram, Haryana, India',
  },

  /** Short description used in the footer and structured data. */
  description:
    'Sofa repair, upholstery and furniture furnishing services at your doorstep across Gurugram. Call or WhatsApp for a free service discussion.',

  /** Neutral, factual summary of what the business does. */
  serviceSummary:
    'Sofa repair, sofa upholstery, fabric change, foam replacement and general furniture repair and polishing for homes and offices in Gurugram.',

  currency: 'INR',
  locale: 'en_IN',
} as const;

/** Builds a WhatsApp deep link with an optional pre-filled message. */
export function whatsappLink(message?: string) {
  const text = message ?? site.whatsapp.message;
  return `${site.whatsapp.href}?text=${encodeURIComponent(text)}`;
}

/** Builds an absolute URL from a site-relative path such as "/services". */
export function absoluteUrl(path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${site.domain}${clean === '/' ? '/' : clean.replace(/\/$/, '')}`;
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Guides', to: '/guides' },
  { label: 'Contact', to: '/contact' },
] as const;

export const copyrightYear = new Date().getFullYear();
