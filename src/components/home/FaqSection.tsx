import { faqs } from '@/data/faq';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaqAccordion } from '@/components/ui/FaqAccordion';

export function FaqSection({
  eyebrow = 'Common Questions',
  title = 'Questions we get asked most',
  description = `Straight answers about sofa repair, upholstery and furniture work in ${site.location.city}. If your question is not here, just ask on WhatsApp.`,
  items = faqs,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: typeof faqs;
}) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
