import { MapPin, PhoneCall } from 'lucide-react';
import { site } from '@/config/site';
import { serviceAreas } from '@/data/serviceAreas';
import { images } from '@/lib/images';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SmartImage } from '@/components/ui/SmartImage';
import { Reveal } from '@/components/ui/Reveal';

export function ServiceAreaSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Service Area"
              title={`Doorstep service across ${site.location.city}`}
              description={`We work in ${site.location.city} and the surrounding ${site.location.cityAlt} areas. Most sofa and furniture work is done at your home or office, so you can keep using the room.`}
            />

            <Reveal delay={100}>
              <div className="mt-8 rounded-2xl border border-sand-200 bg-sand-50 p-5">
                <p className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-ink-700">
                  <PhoneCall
                    className="mt-0.5 size-[1.15rem] shrink-0 text-brass-600"
                    aria-hidden="true"
                  />
                  <span>
                    Not sure whether we reach your area? Call{' '}
                    <a
                      href={site.phone.href}
                      data-event="phone_click"
                      data-event-label="service_area_phone"
                      aria-label={`Call Mizan Sofa Repair on ${site.phone.display}`}
                      className="font-semibold text-ink-900 underline decoration-brass-400 underline-offset-4 transition-colors hover:text-brass-700"
                    >
                      {site.phone.display}
                    </a>{' '}
                    and we will tell you straight away.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <SmartImage
                asset={images.serviceArea}
                ratio={16 / 10}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="rounded-2xl shadow-soft"
              />
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-8">
                <h3 className="flex items-center gap-2 text-sm font-bold tracking-[0.14em] text-brass-700 uppercase">
                  <MapPin className="size-4" aria-hidden="true" />
                  Areas we regularly cover
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {serviceAreas.areas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-sand-200 bg-sand-50 px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink-700"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-ink-500">
                  Nearby localities not listed here are usually fine too â€” just ask.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
