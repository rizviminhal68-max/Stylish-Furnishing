/**
 * ------------------------------------------------------------------
 * FAQ — EDIT HERE
 * ------------------------------------------------------------------
 * Keep answers honest and specific. If a question needs a price, a time
 * or a guarantee, either answer it properly or remove the question —
 * do not guess.
 */

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'What areas in Gurugram do you service?',
    answer:
      'We work across Gurugram and the wider Gurgaon belt, including Golf Course Road, the DLF phases, Sectors 14 to 58, Sohna Road and New Gurgaon. If you are outside these areas, call us on +91 9599931360 and we will tell you straight away whether we can reach you.',
  },
  {
    question: 'Is sofa repair cheaper than buying a new sofa?',
    answer:
      'In most cases it is, especially when the frame is still solid and only the covering or foam has worn out. Replacing the fabric or foam on a good sofa costs a fraction of a new one. We will tell you honestly if your sofa is beyond reasonable repair rather than taking on a job that will not last.',
  },
  {
    question: 'Do you give a price over the phone?',
    answer:
      'We can give a rough idea for common jobs such as fabric change or foam replacement, but the final quote depends on the sofa size, the material you choose and the condition of the frame. Send us a few photos on WhatsApp and we will be able to be much more specific.',
  },
  {
    question: 'Do I need to move the sofa anywhere?',
    answer:
      'No. This is a doorstep service. Most sofa and upholstery work is done at your home so you can keep using the room. If a piece does need to go to the workshop, we will tell you why and agree it with you first.',
  },
  {
    question: 'How long does a sofa reupholstery job take?',
    answer:
      'It depends on the size of the sofa and the material. Please treat any timeline we discuss on the call as a guide — we will confirm a start and finish date with you before the work begins, and we will tell you early if anything changes.',
  },
  {
    question: 'Can I choose my own fabric?',
    answer:
      'Yes. You can pick the material and colour, and we can help you choose if you are unsure. If you would rather keep it simple, tell us how the sofa is used — daily family use, a formal living room, or an office — and we will suggest options that suit it.',
  },
  {
    question: 'Do you work on furniture other than sofas?',
    answer:
      'Yes. We work on dining and office chairs, tables, beds and headboards, cabinets, benches, ottomans and other wooden furniture. Call or WhatsApp with a photo of the piece and we will tell you what can be done.',
  },
  {
    question: 'Which areas do you cover for home and office work?',
    answer:
      'We take on both residential and office furniture work across Gurugram. For office work, it helps to know how many pieces you need and what kind of wear they have, so we can plan the work properly.',
  },
];
