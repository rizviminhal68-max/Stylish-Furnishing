import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { site, whatsappLink } from '@/config/site';
import { serviceAreas } from '@/data/serviceAreas';
import { serviceOptions } from '@/data/services';
import { useSeo } from '@/lib/seo';
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceAreaSchema } from '@/lib/structuredData';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { EnquiryForm } from '@/components/contact/EnquiryForm';

export default function Contact() {
  const [params] = useSearchParams();

  /* Deep link from a service card, e.g. /contact?service=Sofa%20Upholstery */
  const defaultService = useMemo(() => {
    const requested = params.get('service');
    if (!requested) return '';
    const match = serviceOptions.find((o) => o.toLowerCase() === requested.toLowerCase());
    return match ?? '';
  }, [params]);

  useSeo({
    title: 'Contact Mizan Sofa Repair â€” Sofa Repair in Gurugram',
    description: `Call or WhatsApp Mizan Sofa Repair on ${site.phone.display} for sofa repair, upholstery and furniture furnishing services across ${site.location.areaServed}. Send a photo and we will advise.`,
    path: '/contact',
    jsonLd: [
      localBusinessSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]),
      serviceAreaSchema(),
      faqSchema(),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call or WhatsApp us"
        description="The fastest way to reach us is a phone call. If it is easier, send a WhatsApp message with a photo of your sofa or furniture and we will reply with an idea of what the job involves."
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <section className="bg-sand-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* ---------- Details ---------- */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl text-ink-900 sm:text-3xl">Reach us directly</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-600">
                One number for calls and WhatsApp. There is no call centre â€” you speak to the
                person who arranges and carries out the work.
              </p>

              <ul className="mt-7 space-y-3">
                <Reveal>
                  <li className="rounded-2xl border border-sand-200 bg-white p-5">
                    <h3 className="flex items-center gap-2 text-[0.6875rem] font-bold tracking-[0.14em] text-ink-500 uppercase">
                      <Phone className="size-3.5 text-brass-600" aria-hidden="true" />
                      Phone
                    </h3>
                    <a
                      href={site.phone.href}
                      data-event="phone_click"
                      data-event-label="contact_page_phone_card"
                      aria-label={`Call Mizan Sofa Repair on ${site.phone.display}`}
                      className="mt-2 block font-display text-2xl text-ink-900 transition-colors hover:text-brass-700"
                    >
                      {site.phone.display}
                    </a>
                    <a
                      href={site.phone.href}
                      data-event="phone_click"
                      data-event-label="contact_page_phone_cta"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3 font-semibold text-sand-50 transition hover:bg-ink-800"
                    >
                      <Phone className="size-4" aria-hidden="true" />
                      Call Now
                    </a>
                  </li>
                </Reveal>

                <Reveal delay={70}>
                  <li className="rounded-2xl border border-sand-200 bg-white p-5">
                    <h3 className="flex items-center gap-2 text-[0.6875rem] font-bold tracking-[0.14em] text-ink-500 uppercase">
                      <MessageCircle className="size-3.5 text-brass-600" aria-hidden="true" />
                      WhatsApp
                    </h3>
                    <p className="mt-2 text-[0.9375rem] text-ink-600">
                      Send photos of the piece and get a reply on what is possible.
                    </p>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-event="whatsapp_click"
                      data-event-label="contact_page_whatsapp_card"
                      aria-label="Send a WhatsApp message to Mizan Sofa Repair"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-ink-900 transition hover:bg-whatsapp-dark hover:text-sand-50"
                    >
                      <MessageCircle className="size-4" aria-hidden="true" />
                      WhatsApp Us
                    </a>
                  </li>
                </Reveal>

                <Reveal delay={140}>
                  <li className="rounded-2xl border border-sand-200 bg-white p-5">
                    <h3 className="flex items-center gap-2 text-[0.6875rem] font-bold tracking-[0.14em] text-ink-500 uppercase">
                      <MapPin className="size-3.5 text-brass-600" aria-hidden="true" />
                      Service Area
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">
                      {site.location.areaServed}. Doorstep service across{' '}
                      {serviceAreas.areas.slice(0, 5).join(', ')} and surrounding areas.
                    </p>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">
                      Outside this list? Ask anyway â€” we will tell you straight away.
                    </p>
                  </li>
                </Reveal>
              </ul>

              <Reveal delay={200}>
                <p className="mt-6 flex items-start gap-2.5 rounded-xl border border-sand-200 bg-white p-4 text-sm leading-relaxed text-ink-600">
                  <Clock className="mt-0.5 size-[1.1rem] shrink-0 text-brass-600" aria-hidden="true" />
                  <span>
                    We do not publish fixed opening hours, because most of the work happens by
                    appointment at your home. Call or WhatsApp and we will agree a time that suits
                    you.
                  </span>
                </p>
              </Reveal>
            </div>

            {/* ---------- Form ---------- */}
            <div className="lg:col-span-7">
              <EnquiryForm defaultService={defaultService} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
