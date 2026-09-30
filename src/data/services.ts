import {
  Armchair,
  BedDouble,
  Boxes,
  Hammer,
  Palette,
  PanelsTopLeft,
  Sofa,
  Sparkles,
  SquareStack,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * ------------------------------------------------------------------
 * SERVICES — EDIT HERE
 * ------------------------------------------------------------------
 * Every service on the website is defined in this file. To add, remove
 * or reword a service, change this array only; the Home page preview,
 * the Services page, the enquiry form dropdown and the FAQ all read
 * from here.
 *
 * IMPORTANT: only list services the business actually offers. The
 * `includes` bullets describe typical work in general terms — check
 * them with the client before launch and delete anything that is not
 * accurate.
 */

export type Service = {
  slug: string;
  name: string;
  /** One line, used on cards and in the form dropdown. */
  short: string;
  /** Two or three sentences for the Services page. */
  description: string;
  /** Bullet points of typical work included. */
  includes: string[];
  icon: LucideIcon;
  /** Optional image key from src/lib/images.ts */
  image?: 'sofaUpholstery' | 'sofaFabric' | 'leatherDetail' | 'workshop' | 'craftsmanship' | 'sittingRoom';
  /** Shown under the service name on the Services page. */
  bestFor: string;
};

export const services: Service[] = [
  {
    slug: 'sofa-repair',
    name: 'Sofa Repair',
    short: 'Structural repairs, joint and frame work to get your sofa usable again.',
    description:
      'Sagging seats, broken legs, loose joints and torn frames are usually worth fixing rather than replacing. We assess the sofa, tell you honestly what can be repaired, and carry out the structural work before any reupholstery is considered.',
    includes: [
      'Frame, spring and joint repair',
      'Leg, arm and base reinforcement',
      'Fixing squeaks, wobble and uneven seating',
      'Repair work carried out at your home',
    ],
    icon: Wrench,
    bestFor: 'Sofas that are structurally sound but sagging or unsteady',
  },
  {
    slug: 'sofa-upholstery',
    name: 'Sofa Upholstery',
    short: 'Reupholstery for the whole sofa or a single section, in fabric or leatherette.',
    description:
      'Full reupholstery gives an old sofa a new life without the cost of a replacement. Choose the material and colour, and the covering is cut, stitched and fitted to your existing sofa structure.',
    includes: [
      'Full sofa reupholstery',
      'Single seat or backrest reupholstery',
      'Fabric and leatherette options',
      'Stitching and finishing work',
    ],
    icon: Sofa,
    image: 'sofaUpholstery',
    bestFor: 'Worn, faded or torn coverings on a still-solid sofa',
  },
  {
    slug: 'sofa-fabric-change',
    name: 'Sofa Fabric Change',
    short: 'New fabric on your existing sofa, with the old covering removed properly.',
    description:
      'If the sofa structure is fine and only the fabric has seen better days, changing the fabric is the sensible option. We strip the old covering, repair the padding underneath and fit the new material.',
    includes: [
      'Old fabric removal and disposal',
      'Padding repair or top-up',
      'New fabric cut and stitched to size',
      'Colour and material selection help',
    ],
    icon: Palette,
    image: 'sofaFabric',
    bestFor: 'Good quality sofas with tired or dated fabric',
  },
  {
    slug: 'sofa-foam-replacement',
    name: 'Sofa Foam Replacement',
    short: 'New foam for seats, backrests and armrests to restore the feel.',
    description:
      'Foam loses its shape with use, which is why an old sofa feels flat. Replacing the foam inside your existing sofa is usually far cheaper than buying a new one, and the difference in comfort is immediate.',
    includes: [
      'Old foam removed',
      'Seat, backrest and arm foam replaced',
      'Firmness and density discussed first',
      'Fabric refitted after foam work',
    ],
    icon: Boxes,
    bestFor: 'Sofas where the frame is good but sitting feels flat',
  },
  {
    slug: 'furniture-repair',
    name: 'Furniture Repair',
    short: 'Repairs for wooden furniture in the home, office or shop.',
    description:
      'Chairs, tables, beds, cabinets and storage units that develop loose joints, cracks or broken parts can often be repaired. We look at the piece first and tell you whether repair or replacement makes more sense.',
    includes: [
      'Loose joint and frame repair',
      'Crack, split and break repair',
      'Wooden leg and handle replacement',
      'Repairs for home and office furniture',
    ],
    icon: Hammer,
    image: 'workshop',
    bestFor: 'Chairs, tables, beds, cabinets and office furniture',
  },
  {
    slug: 'furniture-polishing',
    name: 'Furniture Polishing',
    short: 'Surface cleaning and polishing to bring dull wood back to life.',
    description:
      'Over time, wood loses its sheen and picks up marks. Polishing cleans the surface, evens out the colour and brings back a smoother finish, which makes a big difference to how an old piece looks.',
    includes: [
      'Surface cleaning and stain reduction',
      'Colour evening and touch-up',
      'Polish and protective finish',
      'Wood, veneer and finished surfaces',
    ],
    icon: Sparkles,
    bestFor: 'Dull, marked or water-stained wooden furniture',
  },
  {
    slug: 'chair-cushion-repair',
    name: 'Chair & Cushion Repair',
    short: 'Dining chairs, office chairs, stools and loose cushions.',
    description:
      'Loose chair covers, split seams and flattened seat cushions are quick jobs that make a big difference, especially in offices and dining areas where the furniture is used every day.',
    includes: [
      'Chair cover replacement and re-stitching',
      'Seat cushion reupholstery',
      'Loose cushion covers made to measure',
      'Office and dining chair work',
    ],
    icon: Armchair,
    bestFor: 'Dining chairs, office chairs, stools and cushions',
  },
  {
    slug: 'bed-headboard-upholstery',
    name: 'Bed & Headboard Upholstery',
    short: 'Headboards, bed bases, benches and ottomans reupholstered.',
    description:
      'A fabric or leatherette headboard is one of the most noticeable parts of a bedroom. Reupholstering it updates the room at a fraction of the cost of replacing the bed set.',
    includes: [
      'Headboard reupholstery',
      'Bed base and bolster covering',
      'Bench, ottoman and pouf covering',
      'Matching fabric for the room',
    ],
    icon: BedDouble,
    bestFor: 'Bedrooms where the headboard has worn or changed colour',
  },
  {
    slug: 'leatherette-rexine',
    name: 'Leatherette & Rexine Work',
    short: 'Leatherette and rexine covering for sofas, chairs and panels.',
    description:
      'Leatherette and rexine are practical choices for sofas that get a lot of use. They are easier to wipe clean than fabric and suit homes with children, pets or heavy daily use.',
    includes: [
      'Leatherette and rexine selection',
      'Cutting, stitching and fitting',
      'Panel and box work',
      'Cleaning guidance after fitting',
    ],
    icon: SquareStack,
    image: 'leatherDetail',
    bestFor: 'Busy homes and offices wanting an easy-to-clean finish',
  },
  {
    slug: 'custom-furnishing',
    name: 'Custom Furnishing',
    short: 'Made-to-measure covering, cushions and furnishing finishing work.',
    description:
      'If your furniture does not fit neatly — odd shapes, built-in seating, window seating or a matching set that has drifted out of colour — the covering can be made to measure rather than forced into a standard sheet.',
    includes: [
      'Made-to-measure covers and panels',
      'Window and built-in seating work',
      'Matching cushions and bolsters',
      'Set coordination across a room',
    ],
    icon: PanelsTopLeft,
    image: 'craftsmanship',
    bestFor: 'Unusual furniture sizes and matching sets across a home',
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/** Used by the enquiry form dropdown. */
export const serviceOptions = [
  'Sofa Repair',
  'Sofa Upholstery',
  'Sofa Fabric Change',
  'Sofa Foam Replacement',
  'Furniture Repair',
  'Furniture Polishing',
  'Chair & Cushion Repair',
  'Bed & Headboard Upholstery',
  'Leatherette & Rexine Work',
  'Custom Furnishing',
  'Not sure yet — please advise',
];
