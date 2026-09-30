import { reasons } from '@/data/whyChooseUs';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CallButton, WhatsappButton } from '@/components/ui/CtaButtons';

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 text-ink-200 texture-grain sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_0%,rgba(194,158,91,0.14),transparent_60%)]"
      />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Repair first, replace only if it makes sense"
              description="A sofa is usually worth saving. We look at the piece, explain what is actually wrong, and tell you when a replacement would be the better call."
              tone="dark"
            />
            <Reveal delay={120} className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <CallButton
                size="md"
                variant="light"
                eventLabel="why_us_call"
                className="w-full sm:w-auto lg:w-auto"
              />
              <WhatsappButton
                size="md"
                variant="outlineLight"
                eventLabel="why_us_whatsapp"
                className="w-full sm:w-auto lg:w-auto"
              />
            </Reveal>
          </div>

          <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <Reveal as="li" key={reason.title} delay={i * 60}>
                  <div className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-11 shrink-0 place-items-center rounded-xl border border-brass-500/30 bg-brass-500/10 text-brass-300"
                    >
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg leading-snug text-sand-50">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-300">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
