/**
 * ------------------------------------------------------------------
 * IMAGE MANIFEST
 * ------------------------------------------------------------------
 * These are placeholder photographs. They are stored locally in
 * /public/images with descriptive filenames so they are quick to
 * replace with the client's real job photos.
 *
 * HOW TO REPLACE AN IMAGE
 * 1. Drop your file in /public/images (or /public/images/gallery).
 *    Recommended: .webp, named like the ones below, e.g.
 *    sofa-repair-gurugram.webp
 * 2. Update the entry below â€” change the filenames, the dimensions and,
 *    most importantly, write a descriptive `alt` for screen readers.
 * 3. That is it. The layout picks up the new image automatically.
 *
 * Each entry has a large (`lg`) and a small (`sm`) version so phones
 * on slow connections do not download desktop-sized photos.
 */

export type ImageAsset = {
  /** Large version, e.g. "/images/sofa-repair-gurugram.webp" */
  lg: string;
  /** Small version for mobile, e.g. "/images/sofa-repair-gurugram-sm.webp" */
  sm: string;
  /** Descriptive alt text. Say what the photo shows, not "sofa image". */
  alt: string;
};

export const images = {
  heroSofa: {
    lg: '/images/sofa-repair-gurugram.webp',
    sm: '/images/sofa-repair-gurugram-sm.webp',
    alt: 'A modern fabric sofa in a bright living room, the type of seating Mizan Sofa Repair repairs and reupholsters across Gurugram.',
  },
  sofaUpholstery: {
    lg: '/images/sofa-upholstery-gurugram.webp',
    sm: '/images/sofa-upholstery-gurugram-sm.webp',
    alt: 'Close-up of a brown tufted leather sofa showing the stitching and finish of reupholstery work.',
  },
  sofaFabric: {
    lg: '/images/sofa-fabric-gurugram.webp',
    sm: '/images/sofa-fabric-gurugram-sm.webp',
    alt: 'Close-up of woven upholstery fabric used for sofa fabric changes.',
  },
  leatherDetail: {
    lg: '/images/leather-upholstery-detail-gurugram.webp',
    sm: '/images/leather-upholstery-detail-gurugram-sm.webp',
    alt: 'Close-up of a stitched seam in brown leather upholstery.',
  },
  workshop: {
    lg: '/images/furniture-repair-workshop-gurugram.webp',
    sm: '/images/furniture-repair-workshop-gurugram-sm.webp',
    alt: 'A craftsman sanding a wooden furniture panel in a workshop.',
  },
  craftsmanship: {
    lg: '/images/furniture-craftsmanship-gurugram.webp',
    sm: '/images/furniture-craftsmanship-gurugram-sm.webp',
    alt: 'A carpenter shaping a wooden furniture joint by hand with workshop tools.',
  },
  sittingRoom: {
    lg: '/images/sitting-room-beige-sofa-gurugram.webp',
    sm: '/images/sitting-room-beige-sofa-gurugram-sm.webp',
    alt: 'A bright sitting room with a beige sofa and matching armchairs.',
  },
  serviceArea: {
    lg: '/images/service-area-living-room-gurugram.webp',
    sm: '/images/service-area-living-room-gurugram-sm.webp',
    alt: 'A beige sofa in a well-kept modern living room.',
  },
  contactRoom: {
    lg: '/images/contact-luxury-living-room-gurugram.webp',
    sm: '/images/contact-luxury-living-room-gurugram-sm.webp',
    alt: 'An elegant living room with upholstered seating and warm lighting.',
  },
  ctaBand: {
    lg: '/images/cta-band-living-room-gurugram.webp',
    sm: '/images/cta-band-living-room-gurugram.webp',
    alt: '',
  },
  ogImage: {
    lg: '/images/og-image.jpg',
    sm: '/images/og-image.jpg',
    alt: 'Mizan Sofa Repair â€” sofa and furniture repair in Gurugram',
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
