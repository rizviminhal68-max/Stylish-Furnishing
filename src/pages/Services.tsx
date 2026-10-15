import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { services } from '@/data/services';
import { images } from '@/lib/images';
import { cx } from '@/lib/utils';
import { useSeo } from '@/lib/seo';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/structuredData';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { CallButton, WhatsappButton } from '@/components/ui/CtaButtons';
import { CtaBand } from '@/components/shared/CtaBand';

export default function Services() {
  useSeo({
    title: 'Sofa Repair & Upholstery Services in Gurugram',
    description:
      'Sofa repair, reupholstery, fabric change, foam replacement, furniture repair and polishing in Gurugram. See what each service covers, then call or WhatsApp for a quote.',
    path: '/services',
    jsonLd: [
      localBusinessSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Sofa repair, upholstery and furniture services"
        description="Every job below is done at your home or office across Gurugram. Send a photo of the piece and we will tell you what it needs, what it will take and what it will cost."
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <CallButton size="md" variant="light" eventLabel="services_hero_call" />
          <WhatsappButton
            size="md"
            variant="whatsapp"
            eventLabel="services_hero_whatsapp"
            message={`Hello Mizan Sofa Repair, I would like a quote for a service in ${site.location.city}.`}
          />
        </div>
      </PageHero>

      {/* ---------- Quick index ---------- */}
      <section className="border-b border-sand-200 bg-white py-8">
        <Container>
          <h2 className="text-[0.6875rem] font-bold tracking-[0.16em] text-ink-500 uppercase">
            Jump to a service
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-block rounded-full border border-sand-200 bg-sand-50 px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink-700 transition hover:border-brass-400 hover:text-ink-900"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------- Service details ---------- */}
      <section className="bg-sand-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What Each Service Covers"
            title="Pick the service that matches your problem"
            description="If you are not sure which one applies, describe what the furniture is doing on WhatsApp and we will tell you."
          />

          <ul className="mt-10 space-y-5 lg:mt-12">
            {services.map((service, i) => {
              const Icon = service.icon;
              const asset = service.image ? images[service.image] : null;
              return (
                <Reveal as="li" key={service.slug} delay={i * 40}>
                  <article
                    id={service.slug}
                    className="scroll-mt-28 overflow-hidden rounded-2xl border border-sand-200 bg-white lg:grid lg:grid-cols-12"
                  >
                    {/* Image / accent panel */}
                    <div
                      className={cx(
                        'relative aspect-[4/3] bg-sand-100 lg:col-span-5 lg:aspect-auto lg:h-full',
                        !asset && 'hidden lg:block',
                      )}
                    >
                      {asset ? (
                        <SmartImage
                          asset={asset}
                          fill
                          sizes="(min-width: 1024px) 42vw, 100vw"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className="grid h-full place-items-center bg-sand-100"
                        >
                          <Icon className="size-16 text-brass-400" strokeWidth={1.2} />
                        </div>
                      )}
                    </div>

                    {/* Copy */}
                    <div className="p-6 sm:p-8 lg:col-span-7">
                      <div className="flex items-start gap-4">
                        <span
                          aria-hidden="true"
                          className="grid size-12 shrink-0 place-items-center rounded-xl bg-sand-100 text-ink-800"
                        >
                          <Icon className="size-[1.35rem]" strokeWidth={1.6} />
                        </span>
                        <div>
                          <h2 className="font-display text-2xl leading-snug text-ink-900">
                            {service.name}
                          </h2>
                          <p className="mt-1.5 text-sm font-medium text-brass-700">
                            Best for: {service.bestFor}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-600">
                        {service.description}
                      </p>

                      <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span
                              aria-hidden="true"
                              className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-brass-100 text-brass-700"
                            >
                              <Check className="size-2.5" strokeWidth={3.5} />
                            </span>
                            <span className="text-sm leading-relaxed text-ink-700">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                          to={`/contact?service=${encodeURIComponent(service.name)}`}
                          data-event="service_enquiry_click"
                          data-event-label={`services_page_${service.slug}`}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-[0.9375rem] font-semibold text-sand-50 transition hover:bg-ink-800"
                        >
                          Get a Quote
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                        <WhatsappButton
                          size="md"
                          variant="outline"
                          eventLabel={`services_page_${service.slug}_whatsapp`}
                          message={`Hello Mizan Sofa Repair, I need ${service.name.toLowerCase()} in ${site.location.city}. Please share details.`}
                        >
                          Ask About This
                        </WhatsappButton>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ---------- What affects the price ---------- */}
      <section className="border-t border-sand-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Pricing"
                title="Why we quote after seeing the piece"
                description="Two sofas can need the same repair and cost very different amounts. Rather than guess over the phone, here is exactly what we need to give you a figure you can rely on."
              />
              <Reveal delay={100}>
                <Link
                  to="/guides/how-much-does-sofa-repair-cost-in-gurugram"
                  data-event="nav_click"
                  data-event-label="services_pricing_guide"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-700 underline-offset-4 hover:underline"
                >
                  Read: How much does sofa repair cost in Gurugram?
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {[
                'Size and style of the sofa â€” two-seater, three-seater, sectional or sofa bed.',
                'What actually needs doing â€” foam, fabric, stitching, frame, or a combination.',
                'The material â€” plain woven fabric is quicker than patterned cloth or leatherette.',
                'Condition of the frame, webbing and existing foam before any work starts.',
                'Whether the job can be done on site or the piece needs to go to the workshop.',
                'How you want the finished result to look and how much daily use it takes.',
              ].map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 50}
                  className="flex gap-3 rounded-xl border border-sand-200 bg-sand-50 p-5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brass-100 text-brass-700"
                  >
                    <Check className="size-3" strokeWidth={3.5} />
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-ink-700">{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        description="Send a photo of your sofa or furniture on WhatsApp. We will identify the problem, explain the options and give you a price for the work â€” no obligation to go ahead."
      />
    </>
  );
}
