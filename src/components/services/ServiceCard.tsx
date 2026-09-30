import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '@/data/services';
import { cx } from '@/lib/utils';

type Props = {
  service: Service;
  /** Adds a hover border colour tied to the service. */
  className?: string;
};

/** Card used on the Home page preview and the Services page index. */
export function ServiceCard({ service, className }: Props) {
  const Icon = service.icon;

  return (
    <article
      className={cx(
        'group relative flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6 transition duration-300',
        'hover:-translate-y-0.5 hover:border-brass-400 hover:shadow-lift',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="grid size-12 place-items-center rounded-xl bg-sand-100 text-ink-800 transition-colors duration-300 group-hover:bg-ink-900 group-hover:text-brass-300"
      >
        <Icon className="size-[1.35rem]" strokeWidth={1.6} />
      </span>

      <h3 className="mt-5 font-display text-xl leading-snug text-ink-900">
        <Link
          to={`/services#${service.slug}`}
          data-event="service_enquiry_click"
          data-event-label={service.slug}
          className="after:absolute after:inset-0 after:rounded-2xl"
        >
          {service.name}
          <span className="sr-only"> — see details</span>
        </Link>
      </h3>

      <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-600">
        {service.short}
      </p>

      <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brass-700">
        Enquire Now
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </p>
    </article>
  );
}
