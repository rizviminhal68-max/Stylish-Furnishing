import { processSteps } from '@/data/whyChooseUs';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CallButton, WhatsappButton } from '@/components/ui/CtaButtons';

export function HowItWorks() {
  return (
    <section className="bg-sand-100 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Four steps, no back and forth"
          description="You talk to the person doing the work, you know the price before anything starts, and most jobs are finished at your home in a single visit."
          align="center"
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 80} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6">
                <span className="font-display text-3xl leading-none text-brass-400">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-lg leading-snug text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton size="lg" eventLabel="how_it_works_call" className="w-full sm:w-auto" />
          <WhatsappButton size="lg" eventLabel="how_it_works_whatsapp" className="w-full sm:w-auto" />
        </Reveal>
      </Container>
    </section>
  );
}
