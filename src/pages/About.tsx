import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { images } from '@/lib/images';
import { useSeo } from '@/lib/seo';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/structuredData';
import { reasons } from '@/data/whyChooseUs';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SmartImage } from '@/components/ui/SmartImage';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand } from '@/components/shared/CtaBand';

export default function About() {
  useSeo({
    title: 'About Stylish Furnishing — Furniture Repair in Gurugram',
    description:
      'Stylish Furnishing repairs and reupholsterses sofas and furniture across Gurugram. Doorstep service, honest advice and work you can inspect before the job is called done.',
    path: '/about',
    jsonLd: [
      localBusinessSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Furniture repair, done properly at your home"
        description="Stylish Furnishing is a local furniture and sofa furnishing service working across Gurugram. We repair, reupholster and finish sofas, chairs and wooden furniture at the customer's doorstep."
        trail={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />

      {/* ---------- What we do ---------- */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="What We Do"
                title="Restoring furniture instead of replacing it"
                description="Most sofas and furniture pieces that people want to throw away are still worth saving. The covering has worn, the foam has flattened or a joint has loosened, but the frame underneath is usually fine."
              />

              <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-ink-600">
                <p>
                  That is the work we do. We repair frames, replace foam, change fabric and
                  reupholster sofas, chairs, headboards and other furniture — and we do it at your
                  home or office, so the room is back in use quickly and you do not have to arrange
                  a van or a lift booking.
                </p>
                <p>
                  We are a local business, which means the person you speak to on the phone is the
                  person arranging and carrying out the work. There is no call centre and no
                  hand-off. If a piece is not worth repairing, we will tell you before you spend
                  anything on it.
                </p>
              </div>

              <Reveal delay={80}>
                <Link
                  to="/services"
                  data-event="nav_click"
                  data-event-label="about_services_link"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-[0.9375rem] font-semibold text-sand-50 transition hover:bg-ink-800"
                >
                  See All Services
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
              <Reveal className="sm:col-span-2">
                <SmartImage
                  asset={images.sittingRoom}
                  ratio={16 / 10}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="rounded-2xl shadow-soft"
                />
              </Reveal>
              <Reveal delay={80}>
                <SmartImage
                  asset={images.craftsmanship}
                  ratio={4 / 5}
                  sizes="(min-width: 640px) 24vw, 48vw"
                  className="h-full rounded-2xl shadow-soft"
                />
              </Reveal>
              <Reveal delay={140}>
                <SmartImage
                  asset={images.workshop}
                  ratio={4 / 5}
                  sizes="(min-width: 640px) 24vw, 48vw"
                  className="h-full rounded-2xl shadow-soft"
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- How we work ---------- */}
      <section className="bg-sand-100 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="Clear advice, clear price, work you can inspect"
            description="Four things we do on every job, whether it is a single cushion or a full sofa reupholstery."
            align="center"
          />

          <ul className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.slice(0, 4).map((reason, i) => {
              const Icon = reason.icon;
              return (
                <Reveal
                  as="li"
                  key={reason.title}
                  delay={i * 70}
                  className="rounded-2xl border border-sand-200 bg-white p-6"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-11 place-items-center rounded-xl bg-sand-100 text-ink-800"
                  >
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-display text-lg leading-snug text-ink-900">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">
                    {reason.description}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* ---------- What we will not claim ---------- */}
      <section className="border-y border-sand-200 bg-white py-16 sm:py-20">
        <Container size="narrow">
          <div className="text-center">
            <SectionHeading
              eyebrow="Straight With You"
              title="What we will not tell you"
              description="Trust matters more than a sales line. So here is what you will never hear from us:"
            />
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'No invented numbers',
                text: 'We do not quote “years of experience” or customer counts to win a job. Ask us what we have actually worked on and we will answer plainly.',
              },
              {
                title: 'No pressure',
                text: 'You are not committed to anything after a call or a quote. Take the time you need to decide.',
              },
              {
                title: 'No work we cannot stand behind',
                text: 'If a piece is beyond reasonable repair we say so, rather than take a job that will need redoing.',
              },
            ].map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 70}
                className="rounded-2xl border border-sand-200 bg-sand-50 p-6"
              >
                <h3 className="font-display text-lg leading-snug text-ink-900">{item.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-600">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </ul>

          <p className="mt-10 text-center text-[0.9375rem] text-ink-500">
            Serving {site.location.areaServed} and nearby areas in {site.location.cityAlt}.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Talk to the person who will do the work"
        description={`Call or WhatsApp ${site.phone.display} and describe your sofa or furniture. We will tell you honestly whether it is worth repairing, and what the job involves.`}
      />
    </>
  );
}
