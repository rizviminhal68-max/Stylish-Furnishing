import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { site } from '@/config/site';
import { guides } from '@/data/guides';
import { useSeo } from '@/lib/seo';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/structuredData';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CtaBand } from '@/components/shared/CtaBand';

export default function Guides() {
  useSeo({
    title: 'Sofa Repair & Furniture Guides for Gurugram Homeowners',
    description:
      'Practical guides on sofa repair costs, fabric choices, foam replacement and upholstery care from Stylish Furnishing, Gurugram. Plain answers, no sales pitch.',
    path: '/guides',
    jsonLd: [
      localBusinessSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Guides', path: '/guides' },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Straight answers before you call"
        description={`Costs, fabric choices, foam, and how to tell whether a sofa is worth repairing. Written for people in ${site.location.city} deciding what to do with their own furniture.`}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
        ]}
      />

      <section className="bg-sand-50 py-16 sm:py-20">
        <Container>
          <ul className="grid gap-4 lg:grid-cols-2">
            {guides.map((guide, i) => (
              <Reveal as="li" key={guide.slug} delay={i * 50}>
                <article className="group relative flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-brass-400 hover:shadow-lift sm:p-7">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] font-bold tracking-[0.14em] uppercase">
                    <span className="text-brass-700">{guide.category}</span>
                    <span className="inline-flex items-center gap-1 text-ink-400">
                      <Clock className="size-3" aria-hidden="true" />
                      {guide.minutes} min read
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-xl leading-snug text-ink-900 sm:text-[1.4rem]">
                    <Link
                      to={`/guides/${guide.slug}`}
                      data-event="nav_click"
                      data-event-label={`guides_list_${guide.slug}`}
                      className="after:absolute after:inset-0 after:rounded-2xl"
                    >
                      {guide.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
                    {guide.excerpt}
                  </p>

                  <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-700">
                    Read Guide
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>

          <p className="mt-10 text-center text-sm text-ink-500">
            More guides on sofa care and furniture finishing are added regularly. Have a question we
            have not covered? Ask us on WhatsApp.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Still deciding what to do with your sofa?"
        description="These guides explain the general picture. For your specific sofa, send us a photo and we will give you a straight answer about what needs doing."
      />
    </>
  );
}
