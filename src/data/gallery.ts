/**
 * ------------------------------------------------------------------
 * GALLERY — EDIT HERE
 * ------------------------------------------------------------------
 * PLACEHOLDER PHOTOS ARE IN USE. No project descriptions, locations
 * or client names have been invented — each caption describes only
 * what the photograph shows.
 *
 * TO GO LIVE WITH REAL WORK:
 * 1. Delete every file in /public/images/gallery.
 * 2. Add the client's own job photos there as .webp (ideally landscape
 *    3:2 and portrait 3:4), naming them like
 *    "sofa-fabric-change-golf-course-road-01".
 * 3. Replace the entries below. `src` is the large file, `srcSm` is a
 *    smaller version for phones — having both keeps the page fast.
 * 4. Write a real, specific `alt` for each photo. That is the single
 *    biggest thing that helps this page rank in image search.
 * 5. Set `placeholder: false` on each entry and delete
 *    `GALLERY_PLACEHOLDER_NOTICE` usage in src/pages/Gallery.tsx.
 */

export type GalleryCategory =
  | 'Sofa Repair'
  | 'Upholstery'
  | 'Fabric Change'
  | 'Furniture Work'
  | 'Before & After';

export type GalleryItem = {
  src: string;
  srcSm: string;
  /** Specific, descriptive alt text. */
  alt: string;
  /** Short neutral caption. Do not invent project details. */
  caption: string;
  category: GalleryCategory;
  /** Intrinsic ratio as width/height, used to reserve space and avoid layout shift. */
  ratio: number;
  placeholder: boolean;
};

export const galleryCategories: GalleryCategory[] = [
  'Sofa Repair',
  'Upholstery',
  'Fabric Change',
  'Furniture Work',
  'Before & After',
];

/** Shown above the gallery so nobody mistakes the samples for real jobs. */
export const GALLERY_PLACEHOLDER_NOTICE =
  'Sample photos for now. Replace these with pictures of your own completed work before publishing.';

export const galleryItems: GalleryItem[] = [
  {
    src: '/images/gallery/sofa-repair-01.webp',
    srcSm: '/images/gallery/sofa-repair-01-sm.webp',
    alt: 'A fabric sofa in a sunlit living room, repaired and re-covered.',
    caption: 'Fabric sofa, repaired and re-covered',
    category: 'Sofa Repair',
    ratio: 1.5,
    placeholder: true,
  },
  {
    src: '/images/gallery/upholstery-01.webp',
    srcSm: '/images/gallery/upholstery-01-sm.webp',
    alt: 'Close-up of a brown tufted leather sofa showing button work and stitching.',
    caption: 'Button tufting and stitching detail',
    category: 'Upholstery',
    ratio: 1.5,
    placeholder: true,
  },
  {
    src: '/images/gallery/furniture-work-01.webp',
    srcSm: '/images/gallery/furniture-work-01-sm.webp',
    alt: 'A craftsman working on a furniture repair job in a workshop.',
    caption: 'Furniture repair work in progress',
    category: 'Furniture Work',
    ratio: 1.5,
    placeholder: true,
  },
  {
    src: '/images/gallery/sofa-repair-02.webp',
    srcSm: '/images/gallery/sofa-repair-02-sm.webp',
    alt: 'A warm living room with a comfortable sofa and floor lamp.',
    caption: 'Seating area after reupholstery',
    category: 'Sofa Repair',
    ratio: 1.5,
    placeholder: true,
  },
  {
    src: '/images/gallery/before-after-01.webp',
    srcSm: '/images/gallery/before-after-01-sm.webp',
    alt: 'A cosy sitting corner with a sofa under warm lamp light.',
    caption: 'Warm neutral finish on a sofa corner',
    category: 'Before & After',
    ratio: 1.5,
    placeholder: true,
  },
  {
    src: '/images/gallery/upholstery-02.webp',
    srcSm: '/images/gallery/upholstery-02-sm.webp',
    alt: 'A pair of leather reclining chairs with fresh upholstery.',
    caption: 'Leatherette on recliner chairs',
    category: 'Upholstery',
    ratio: 1.5,
    placeholder: true,
  },
  {
    src: '/images/gallery/fabric-change-01.webp',
    srcSm: '/images/gallery/fabric-change-01-sm.webp',
    alt: 'A minimalist living room with beige sofas in a neutral fabric.',
    caption: 'Neutral fabric change on a sofa set',
    category: 'Fabric Change',
    ratio: 1.5,
    placeholder: true,
  },
  {
    src: '/images/gallery/furniture-work-02.webp',
    srcSm: '/images/gallery/furniture-work-02-sm.webp',
    alt: 'A carpenter shaping a wooden furniture joint by hand with chisels.',
    caption: 'Joinery and wood shaping work',
    category: 'Furniture Work',
    ratio: 1.5,
    placeholder: true,
  },
  {
    src: '/images/gallery/sofa-repair-03.webp',
    srcSm: '/images/gallery/sofa-repair-03-sm.webp',
    alt: 'Soft daylight falling across a sofa in a quiet living room.',
    caption: 'Daylight finish on a reupholstered sofa',
    category: 'Sofa Repair',
    ratio: 0.75,
    placeholder: true,
  },
  {
    src: '/images/gallery/upholstery-03.webp',
    srcSm: '/images/gallery/upholstery-03-sm.webp',
    alt: 'A leather armchair with a padded seat and wooden frame.',
    caption: 'Leather armchair, seat and back reworked',
    category: 'Upholstery',
    ratio: 0.75,
    placeholder: true,
  },
  {
    src: '/images/gallery/before-after-02.webp',
    srcSm: '/images/gallery/before-after-02-sm.webp',
    alt: 'A bright living room with a beige sofa and a wooden floor.',
    caption: 'Before and after: full fabric change',
    category: 'Before & After',
    ratio: 1.5,
    placeholder: true,
  },
  {
    src: '/images/gallery/furniture-work-03.webp',
    srcSm: '/images/gallery/furniture-work-03-sm.webp',
    alt: 'An elegant living room with upholstered seating in a warm palette.',
    caption: 'Complete furnishing of a living room',
    category: 'Furniture Work',
    ratio: 1.39,
    placeholder: true,
  },
  {
    src: '/images/gallery/fabric-change-02.webp',
    srcSm: '/images/gallery/fabric-change-02-sm.webp',
    alt: 'A spacious modern living room with a light grey sofa and wooden flooring.',
    caption: 'Fabric changed to a light neutral shade',
    category: 'Fabric Change',
    ratio: 1.5,
    placeholder: true,
  },
  {
    src: '/images/gallery/upholstery-04.webp',
    srcSm: '/images/gallery/upholstery-04-sm.webp',
    alt: 'A bright modern flat with a sofa and cushions near a coffee table.',
    caption: 'Seat cushions re-covered to match',
    category: 'Upholstery',
    ratio: 1.31,
    placeholder: true,
  },
];

/** The handful of photos shown in the Home page gallery preview. */
export const homeGalleryPreviewIds = [
  'sofa-repair-01',
  'upholstery-01',
  'furniture-work-01',
  'before-after-02',
  'upholstery-02',
  'fabric-change-01',
];
