import { Home, Sofa, Building2, PhoneCall } from 'lucide-react';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';

const points = [
  { icon: Sofa, label: 'Sofa repair & reupholstery' },
  { icon: Home, label: `Doorstep service in ${site.location.city}` },
  { icon: Building2, label: 'Home and office furniture' },
  { icon: PhoneCall, label: 'Same number for call & WhatsApp' },
];

/**
 * Slim factual strip under the hero. These are service facts, not
 * statistics — nothing here is a number that would need proving.
 */
export function TrustBar() {
  return (
    <section aria-label="What Stylish Furnishing does" className="border-y border-sand-200 bg-white">
      <Container>
        <ul className="grid grid-cols-2 divide-sand-200 lg:grid-cols-4 lg:divide-x">
          {points.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={[
                'flex items-center gap-3 py-4 lg:px-6 lg:first:pl-0',
                i % 2 === 1 ? 'pl-4' : 'pr-4',
                i < 2 ? 'border-b border-sand-200 lg:border-b-0' : '',
                'lg:justify-center',
              ].join(' ')}
            >
              <Icon className="size-[1.15rem] shrink-0 text-brass-600" aria-hidden="true" />
              <span className="text-[0.8125rem] leading-snug font-semibold text-ink-800 sm:text-sm">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
