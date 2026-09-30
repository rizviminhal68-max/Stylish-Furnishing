import type { ReactNode } from 'react';
import { Container } from './Container';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';
import { Reveal } from './Reveal';

type Props = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  trail: Crumb[];
  children?: ReactNode;
};

/**
 * Shared banner for every interior page. One H1 per page lives here.
 */
export function PageHero({ eyebrow, title, description, trail, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-sand-100 texture-grain">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,rgba(194,158,91,0.16),transparent_60%)]"
      />
      <Container className="relative py-14 sm:py-18 lg:py-22">
        <Breadcrumbs trail={trail} tone="dark" />
        <Reveal className="mt-7 max-w-3xl">
          {eyebrow && (
            <p className="eyebrow text-brass-300 before:bg-brass-400">{eyebrow}</p>
          )}
          <h1 className="mt-4 text-[2rem] leading-[1.12] text-sand-50 sm:text-[2.6rem] lg:text-[3.1rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-[1.0625rem]">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
