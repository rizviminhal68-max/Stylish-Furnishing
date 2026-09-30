import { ArrowRight } from 'lucide-react';
import { galleryItems } from '@/data/gallery';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';

const PREVIEW = [
  galleryItems.find((i) => i.src.includes('sofa-repair-01'))!,
  galleryItems.find((i) => i.src.includes('before-after-02'))!,
  galleryItems.find((i) => i.src.includes('upholstery-01'))!,
  galleryItems.find((i) => i.src.includes('furniture-work-01'))!,
];

/** Visual proof on the Home page. Links through to the full Gallery. */
export function GalleryPreview() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Before & After"
            title="Work on sofas, chairs and furniture"
            description="Fabric changes, reupholstery and frame repairs. Send us a photo of your own piece and we will tell you what is possible."
          />
          <Reveal delay={80} className="shrink-0">
            <ButtonLink
              to="/gallery"
              variant="outline"
              event="nav_click"
              eventLabel="gallery_preview_view_all"
              iconRight={<ArrowRight className="size-4" aria-hidden="true" />}
            >
              View Gallery
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-12 lg:grid-cols-4">
          {PREVIEW.map((item, i) => (
            <Reveal as="li" key={item.src} delay={i * 70} className={i % 2 === 1 ? 'mt-6 lg:mt-10' : ''}>
              <a
                href="/gallery"
                data-event="nav_click"
                data-event-label={`gallery_preview_tile_${i + 1}`}
                className="group block overflow-hidden rounded-xl bg-sand-200"
              >
                <img
                  src={item.srcSm}
                  srcSet={`${item.srcSm} 480w, ${item.src} 1200w`}
                  sizes="(min-width: 1024px) 24vw, 48vw"
                  alt={item.alt}
                  width={1200}
                  height={Math.round(1200 / item.ratio)}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
                <span className="sr-only">{item.caption}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
