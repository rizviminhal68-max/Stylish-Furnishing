import { Check, Clock, ShieldCheck } from 'lucide-react';
import { site } from '@/config/site';
import { images } from '@/lib/images';
import { trustPoints } from '@/data/whyChooseUs';
import { Container } from '@/components/ui/Container';
import { SmartImage } from '@/components/ui/SmartImage';
import { CallButton, WhatsappButton } from '@/components/ui/CtaButtons';
import { Reveal } from '@/components/ui/Reveal';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand-50">
      {/* Warm background wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_85%_10%,rgba(226,214,192,0.65),transparent_60%),radial-gradient(60%_50%_at_0%_100%,rgba(239,231,216,0.7),transparent_65%)]"
      />

      <Container className="relative py-14 sm:py-18 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ---------- Copy ---------- */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow">
                {site.location.city}, {site.location.state}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-5 text-[2.1rem] leading-[1.1] sm:text-[2.9rem] lg:text-[3.35rem]">
                Premium Sofa &amp; Furniture Repair in{' '}
                <span className="text-brass-700">{site.location.city}</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-600">
                Give an old sofa a fresh look instead of replacing it. We handle sofa repair,
                upholstery, fabric change and furniture finishing at your doorstep across{' '}
                {site.location.city}.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CallButton size="lg" eventLabel="hero_call_now" className="w-full sm:w-auto" />
                <WhatsappButton
                  size="lg"
                  eventLabel="hero_whatsapp"
                  message={`Hello Mizan Sofa Repair, I need sofa repair or upholstery work in ${site.location.city}. Please share details.`}
                  className="w-full sm:w-auto"
                />
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                    <span
                      aria-hidden="true"
                      className="grid size-5 shrink-0 place-items-center rounded-full bg-brass-100 text-brass-700"
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ---------- Image ---------- */}
          <div className="lg:col-span-6">
            <Reveal delay={120} className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-lift">
                <SmartImage
                  asset={images.heroSofa}
                  ratio={4 / 5}
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="rounded-2xl"
                  imgClassName="scale-[1.01]"
                />
              </div>

              {/* Overlapping detail card â€” adds depth without cluttering */}
              <div className="absolute -bottom-5 left-4 hidden w-56 rounded-xl border border-sand-200 bg-white/95 p-4 shadow-lift backdrop-blur-sm sm:block lg:-left-6">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-lg bg-ink-900 text-brass-300"
                  >
                    <ShieldCheck className="size-[1.1rem]" />
                  </span>
                  <p className="text-[0.8125rem] leading-snug font-semibold text-ink-900">
                    Doorstep service
                    <span className="block font-normal text-ink-500">across {site.location.city}</span>
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2 border-t border-sand-200 pt-3">
                  <Clock className="size-3.5 shrink-0 text-brass-600" aria-hidden="true" />
                  <a
                    href={site.phone.href}
                    data-event="phone_click"
                    data-event-label="hero_card_phone"
                    aria-label={`Call Mizan Sofa Repair on ${site.phone.display}`}
                    className="text-sm font-semibold text-ink-900 transition-colors hover:text-brass-700"
                  >
                    {site.phone.display}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
