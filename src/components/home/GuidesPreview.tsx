import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { guides } from '@/data/guides';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const PREVIEW_COUNT = 3;

/** Compact guides strip. Mostly for internal linking and topical SEO. */
export function GuidesPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Guides"
            title="Helpful reading before you call"
            description="Plain answers about sofa repair costs, fabric choices and when repair stops making sense."
          />
          <Reveal delay={80} className="shrink-0">
            <Link
              to="/guides"
              data-event="nav_click"
              data-event-label="guides_preview_all"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-5 py-3 text-[0.9375rem] font-semibold text-ink-900 transition hover:border-ink-900 hover:bg-ink-900 hover:text-sand-50"
            >
              All Guides
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-3">
          {guides.slice(0, PREVIEW_COUNT).map((guide, i) => (
            <Reveal as="li" key={guide.slug} delay={i * 70}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-sand-200 bg-sand-50 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-brass-400 hover:shadow-soft">
                <p className="text-[0.6875rem] font-bold tracking-[0.14em] text-brass-700 uppercase">
                  {guide.category}
                </p>
                <h3 className="mt-3 font-display text-lg leading-snug text-ink-900">
                  <Link
                    to={`/guides/${guide.slug}`}
                    data-event="nav_click"
                    data-event-label={`guide_${guide.slug}`}
                    className="after:absolute after:inset-0 after:rounded-2xl"
                  >
                    {guide.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
                  {guide.excerpt}
                </p>
                <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-ink-500">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {guide.minutes} min read
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
