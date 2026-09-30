import { Info } from 'lucide-react';
import { site } from '@/config/site';
import { GALLERY_PLACEHOLDER_NOTICE, galleryItems } from '@/data/gallery';
import { useSeo } from '@/lib/seo';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/structuredData';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { CallButton, WhatsappButton } from '@/components/ui/CtaButtons';
import { CtaBand } from '@/components/shared/CtaBand';

const showPlaceholderNotice = galleryItems.some((i) => i.placeholder);

export default function Gallery() {
  useSeo({
    title: 'Sofa Repair & Upholstery Gallery in Gurugram',
    description:
      'Photos of sofa repair, upholstery, fabric change and furniture work by Stylish Furnishing, Gurugram. Filter by service and tap any photo to view it larger.',
    path: '/gallery',
    jsonLd: [
      localBusinessSchema(),
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Sofa repair and furniture work"
        description="Filter by the type of work, or tap any photo to see it larger. Send us a photo of your own piece and we will tell you what is possible."
        trail={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery' },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsappButton
            size="md"
            eventLabel="gallery_hero_whatsapp"
            message={`Hello Stylish Furnishing, I saw your gallery and would like to discuss similar work in ${site.location.city}.`}
          />
          <CallButton size="md" variant="outlineLight" eventLabel="gallery_hero_call" />
        </div>
      </PageHero>

      <section className="bg-sand-50 py-12 sm:py-16 lg:py-20">
        <Container>
          {showPlaceholderNotice && (
            <p className="mb-8 flex items-start gap-3 rounded-xl border border-brass-300 bg-brass-100/50 p-4 text-sm text-ink-700">
              <Info className="mt-0.5 size-[1.15rem] shrink-0 text-brass-700" aria-hidden="true" />
              <span>{GALLERY_PLACEHOLDER_NOTICE}</span>
            </p>
          )}

          <GalleryGrid />
        </Container>
      </section>

      <CtaBand
        title="Like what you see? Send us your sofa."
        description={`Tell us what your sofa needs in ${site.location.city} and we will send you photos of similar work once it is done. Call or WhatsApp any time.`}
      />
    </>
  );
}
