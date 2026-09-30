import { Eye, Handshake, Leaf, Ruler, Scissors, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * ------------------------------------------------------------------
 * WHY CHOOSE US — EDIT HERE
 * ------------------------------------------------------------------
 * Deliberately no numbers. There are no "10+ years", "500+ customers"
 * or "100% satisfaction" claims on this site because those figures
 * have not been confirmed by the client. If real, verifiable numbers
 * exist, add them here and only here.
 */

export type Reason = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const reasons: Reason[] = [
  {
    title: 'Doorstep service in Gurugram',
    description:
      'We come to your home or office across Gurugram. No need to arrange a van, a lift booking or a day without your sofa.',
    icon: Handshake,
  },
  {
    title: 'Repair before replace',
    description:
      'Most sofas people want to throw out are still worth fixing. We look at the piece, explain what is actually wrong, and only then talk about cost.',
    icon: Eye,
  },
  {
    title: 'Work you can inspect',
    description:
      'Frames, stitching, foam and finishing are all discussed before the job starts, so you know what is being done to your furniture.',
    icon: Ruler,
  },
  {
    title: 'Material that suits the use',
    description:
      'Fabric, leatherette or rexine — we recommend based on how the seat is used and how much cleaning it will need, not just on looks.',
    icon: Scissors,
  },
  {
    title: 'Honest advice first',
    description:
      'If a piece is beyond reasonable repair, we will say so. There is no point spending money on a sofa that will need the same work again next year.',
    icon: ShieldCheck,
  },
  {
    title: 'One point of contact',
    description:
      'Call or WhatsApp the same number, send photos, and get a clear answer. You do not need to explain your sofa twice.',
    icon: Leaf,
  },
];

/**
 * Trust indicators for the hero. Keep these factual and verifiable —
 * they are not marketing numbers.
 */
export const trustPoints = [
  'Doorstep service',
  'Skilled workmanship',
  'Gurugram service area',
] as const;

/** The four-step process shown on the Home page. */
export const processSteps = [
  {
    step: '01',
    title: 'Call or WhatsApp us',
    description:
      'Tell us what the sofa or furniture is doing, and send a few photos if you can. The number goes straight to the person doing the work.',
  },
  {
    step: '02',
    title: 'Assessment and quote',
    description:
      'We look at the piece, tell you what is actually needed, and give you a clear price. If it is not worth repairing, we will say that too.',
  },
  {
    step: '03',
    title: 'Work at your home',
    description:
      'Most work is done on the spot, so the room is back in use quickly. You do not need to move the sofa anywhere.',
  },
  {
    step: '04',
    title: 'Checking and finishing',
    description:
      'Stitching, foam and finishing are checked with you before we call the job done. Tell us if anything is not right.',
  },
] as const;
