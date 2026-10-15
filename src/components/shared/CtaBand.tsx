import type { ReactNode } from 'react';
import { images } from '@/lib/images';
import { site } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { CallButton, WhatsappButton } from '@/components/ui/CtaButtons';

type Props = {
  title: string;
  description: ReactNode;
  /** 'dark' uses a photographic background, 'light' stays flat and calm. */
  variant?: 'dark' | 'light';
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
};

/** The closing call-to-action. Reused on every page. */
export function CtaBand({
  title,
  description,
  variant = 'dark',
  primaryLabel = 'Call Now',
  secondaryLabel = 'WhatsApp Us',
  className,
}: Props) {
  const dark = variant === 'dark';

  return (
    <section
      className={[
        'relative overflow-hidden py-16 sm:py-20',
        dark ? 'bg-ink-950 text-sand-100 texture-grain' : 'bg-sand-100 text-ink-800',
        className ?? '',
      ].join(' ')}
    >
      {dark && (
        <>
          <img
            src={images.ctaBand.lg}
            alt=""
            aria-hidden="true"
            width={1600}
            height={700}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover opacity-25"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-ink-950/70" />
        </>
      )}

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            className={[
              'text-3xl leading-[1.15] sm:text-4xl',
              dark ? 'text-sand-50' : 'text-ink-900',
            ].join(' ')}
          >
            {title}
          </h2>
          <p
            className={[
              'mt-5 text-base leading-relaxed',
              dark ? 'text-ink-200' : 'text-ink-600',
            ].join(' ')}
          >
            {description}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <CallButton
              size="lg"
              variant={dark ? 'light' : 'primary'}
              eventLabel="cta_band_call"
              className="w-full sm:w-auto"
            >
              {primaryLabel}
            </CallButton>
            <WhatsappButton
              size="lg"
              variant={dark ? 'whatsapp' : 'whatsapp'}
              eventLabel="cta_band_whatsapp"
              message={`Hello Mizan Sofa Repair, I would like to discuss sofa repair or upholstery work in ${site.location.city}.`}
              className="w-full sm:w-auto"
            >
              {secondaryLabel}
            </WhatsappButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
