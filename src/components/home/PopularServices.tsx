import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';

const PREVIEW_COUNT = 6;

export function PopularServices() {
  return (
    <section className="bg-sand-50 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Popular Services"
            title="What we repair and reupholster"
            description="Most sofas people plan to throw out are still worth fixing. Here are the jobs we take on most often across Gurugram."
          />
          <Reveal delay={80} className="shrink-0">
            <ButtonLink
              to="/services"
              variant="outline"
              event="nav_click"
              eventLabel="popular_services_all"
              iconRight={<ArrowRight className="size-4" aria-hidden="true" />}
            >
              All Services
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {services.slice(0, PREVIEW_COUNT).map((service, i) => (
            <Reveal as="li" key={service.slug} delay={i * 60}>
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
