import { site } from '@/config/site';
import { useSeo } from '@/lib/seo';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/structuredData';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/ui/PageHero';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { CallButton, WhatsappButton } from '@/components/ui/CtaButtons';
import { CtaBand } from '@/components/shared/CtaBand';

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
