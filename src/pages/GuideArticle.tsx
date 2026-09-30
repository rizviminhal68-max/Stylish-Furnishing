import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { site } from '@/config/site';
import { guideBySlug, guides, type GuideBlock } from '@/data/guides';
import { useSeo } from '@/lib/seo';
import { trackEvent } from '@/lib/analytics';
import { articleSchema, breadcrumbSchema, localBusinessSchema } from '@/lib/structuredData';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { CallButton, WhatsappButton } from '@/components/ui/CtaButtons';
import { CtaBand } from '@/components/shared/CtaBand';

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mt-10 text-2xl leading-snug text-ink-900 sm:text-[1.75rem]">
          {block.text}
        </h2>
      );
    case 'p':
      return <p className="mt-5 text-[1.0625rem] leading-[1.75] text-ink-700">{block.text}</p>;
    case 'ul':
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[1.0625rem] leading-relaxed text-ink-700">
              <span
                aria-hidden="true"
                className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-brass-500"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="mt-5 space-y-3">
          {block.items.map((item, i) => (
            <li key={item} className="flex gap-3 text-[1.0625rem] leading-relaxed text-ink-700">
              <span
                aria-hidden="true"
                className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sand-200 font-display text-sm font-semibold text-ink-800"
              >
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case 'note':
      return (
        <p className="mt-7 rounded-xl border-l-2 border-brass-500 bg-sand-100 p-5 text-[0.9375rem] leading-relaxed text-ink-700">
          {block.text}
        </p>
      );
  }
}

export default function GuideArticle() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? guideBySlug(slug) : undefined;

  useEffect(() => {
    if (guide) trackEvent('guide_read', { guide: guide.slug });
  }, [guide]);

  useSeo({
    title: guide?.title ?? 'Guide not found',
    description: guide?.metaDescription ?? 'This guide could not be found.',
    path: slug ? `/guides/${slug}` : '/guides',
    type: guide ? 'article' : 'website',
    jsonLd: guide
      ? [
          localBusinessSchema(),
          articleSchema(guide),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/guides' },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ]),
        ]
      : [],
  });

  if (!guide) {
    return (
      <section className="bg-sand-50 py-20">
        <Container size="narrow" className="text-center">
          <h1 className="text-3xl">We could not find that guide</h1>
          <p className="mt-4 text-ink-600">
            The link may be out of date. All the current guides are listed on the guides page.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/guides"
              data-event="nav_click"
              data-event-label="guide_notfound_guides"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 font-semibold text-sand-50 transition hover:bg-ink-800"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All Guides
            </Link>
            <CallButton size="lg" variant="outline" eventLabel="guide_notfound_call" />
          </div>
        </Container>
      </section>
    );
  }

  const related = guide.related
    .map((slug) => guideBySlug(slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <PageHero
        eyebrow={guide.category}
        title={guide.title}
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ]}
      >
        <p className="inline-flex items-center gap-1.5 text-sm text-ink-300">
          <Clock className="size-3.5" aria-hidden="true" />
          {guide.minutes} min read
        </p>
      </PageHero>

      <article className="bg-white py-14 sm:py-18">
        <Container size="narrow">
          <p className="text-lg leading-relaxed font-medium text-ink-800 sm:text-xl">
            {guide.excerpt}
          </p>

          <div className="mt-4 border-b border-sand-200 pb-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/guides"
                data-event="nav_click"
                data-event-label="guide_back_to_guides"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition-colors hover:text-brass-700"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                All guides
              </Link>
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <WhatsappButton
                  size="sm"
                  eventLabel="guide_article_whatsapp"
                  message={`Hello Stylish Furnishing, I read your guide "${guide.title}" and have a question about my sofa in ${site.location.city}.`}
                >
                  Ask About This
                </WhatsappButton>
                <CallButton size="sm" variant="outline" eventLabel="guide_article_call">
                  Call Now
                </CallButton>
              </div>
            </div>
          </div>

          <div>
            {guide.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-sand-200 bg-sand-50 py-14 sm:py-16">
          <Container>
            <h2 className="font-display text-2xl text-ink-900">Read next</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Reveal as="li" key={item.slug}>
                  <article className="group relative flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-brass-400 hover:shadow-soft">
                    <p className="text-[0.6875rem] font-bold tracking-[0.14em] text-brass-700 uppercase">
                      {item.category}
                    </p>
                    <h3 className="mt-2.5 font-display text-lg leading-snug text-ink-900">
                      <Link
                        to={`/guides/${item.slug}`}
                        data-event="nav_click"
                        data-event-label={`guide_related_${item.slug}`}
                        className="after:absolute after:inset-0 after:rounded-2xl"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
                      {item.excerpt}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-700">
                      Read
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <CtaBand
        title="Ready to get it sorted?"
        description={`Send a photo of your sofa or furniture and we will tell you what it needs, what it will take and what it will cost. Working across ${site.location.areaServed}.`}
      />

      <p className="sr-only">
        More guides:{' '}
        {guides
          .filter((g) => g.slug !== guide.slug)
          .map((g) => g.title)
          .join(', ')}
        .
      </p>
    </>
  );
}
