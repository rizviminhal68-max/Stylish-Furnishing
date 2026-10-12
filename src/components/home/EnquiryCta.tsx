import { Camera, MapPin, Wrench } from 'lucide-react';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsappButton, CallButton } from '@/components/ui/CtaButtons';

const whatToSend = [
  {
    icon: Camera,
    title: 'A photo of the whole piece',
    text: 'The full sofa or furniture item, taken from a few steps back so the size is clear.',
  },
  {
    icon: Wrench,
    title: 'A close-up of the problem',
    text: 'The tear, the sagging seat, the loose joint â€” whatever made you get in touch.',
  },
  {
    icon: MapPin,
    title: 'Your area in Gurugram',
    text: 'A locality name or a nearby landmark is enough for us to confirm we can reach you.',
  },
];

/**
 * Mid-page conversion block. Asking for photos is the single most useful
 * thing a visitor can do, and it makes the WhatsApp button convert better.
 */
export function EnquiryCta() {
  return (
    <section className="bg-sand-100 py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Get a Quote"
              title="Send us a photo and we will tell you what is possible"
              description="You do not need to work out what is wrong with your sofa before calling. Three quick photos are usually enough for us to understand the job and talk about a price."
            />
            <Reveal delay={120} className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <WhatsappButton
                size="lg"
                eventLabel="enquiry_cta_whatsapp"
                message={`Hello Mizan Sofa Repair, I am in ${site.location.city}. I would like to send photos of my sofa for a repair or upholstery quote.`}
                className="w-full sm:w-auto lg:w-auto"
              >
                Send Photos on WhatsApp
              </WhatsappButton>
              <CallButton
                size="lg"
                variant="outline"
                eventLabel="enquiry_cta_call"
                className="w-full sm:w-auto lg:w-auto"
              >
                Call {site.phone.display}
              </CallButton>
            </Reveal>
          </div>

          <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1 lg:gap-5">
            {whatToSend.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 80}
                className="flex gap-4 rounded-2xl border border-sand-200 bg-white p-5 lg:p-6"
              >
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-xl bg-sand-100 text-ink-800"
                >
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-lg leading-snug text-ink-900">{title}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
