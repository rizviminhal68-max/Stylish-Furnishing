import { site } from '@/config/site';
import { useSeo } from '@/lib/seo';
import {
  faqSchema,
  localBusinessSchema,
  websiteSchema,
} from '@/lib/structuredData';
import { Hero } from '@/components/home/Hero';
import { TrustBar } from '@/components/home/TrustBar';
import { PopularServices } from '@/components/home/PopularServices';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ServiceAreaSection } from '@/components/home/ServiceAreaSection';
import { GuidesPreview } from '@/components/home/GuidesPreview';
import { EnquiryCta } from '@/components/home/EnquiryCta';
import { FaqSection } from '@/components/home/FaqSection';
import { CtaBand } from '@/components/shared/CtaBand';

export default function Home() {
  useSeo({
    title: 'Premium Sofa & Furniture Repair in Gurugram',
    description:
      'Stylish Furnishing provides professional sofa repair, upholstery and furniture furnishing services across Gurugram. Call or WhatsApp for service enquiries.',
    path: '/',
    jsonLd: [localBusinessSchema(), websiteSchema(), faqSchema()],
  });

  return (
    <>
      <Hero />
      <TrustBar />
      <PopularServices />
      <WhyChooseUs />
      <GalleryPreview />
      <HowItWorks />
      <ServiceAreaSection />
      <GuidesPreview />
      <EnquiryCta />
      <FaqSection />
      <CtaBand
        title={`Ready to get your sofa sorted in ${site.location.city}?`}
        description="Call or WhatsApp us with a photo of your sofa or furniture. We will tell you what needs doing, what it will take and what it will cost before anything starts."
      />
    </>
  );
}
