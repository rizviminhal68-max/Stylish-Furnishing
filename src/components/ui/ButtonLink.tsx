import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'whatsapp' | 'outline' | 'light' | 'outlineLight';
export type ButtonSize = 'sm' | 'md' | 'lg';

type Props = {
  /** Internal path ("/services") or any href (tel:, https://wa.me/...). */
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  /** Value for the data-event attribute used by src/lib/analytics.ts */
  event?: string;
  /** Overrides the data-event-label. Defaults to the visible text. */
  eventLabel?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 select-none ' +
  'focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-60';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-ink-900 text-sand-50 hover:bg-ink-800 active:bg-ink-950 shadow-soft',
  whatsapp: 'bg-whatsapp text-ink-900 hover:bg-whatsapp-dark hover:text-sand-50',
  outline:
    'border border-ink-900/20 bg-transparent text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-sand-50',
  light: 'bg-sand-50 text-ink-900 hover:bg-white shadow-soft',
  outlineLight:
    'border border-sand-100/35 text-sand-50 hover:border-sand-50 hover:bg-sand-50 hover:text-ink-900',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-[0.9375rem]',
  lg: 'px-7 py-4 text-base',
};

function isInternal(to: string) {
  return to.startsWith('/') && !to.startsWith('//');
}

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconRight,
  event,
  eventLabel,
  ariaLabel,
  target,
  rel,
}: Props) {
  const classes = cx(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      {icon}
      <span>{children}</span>
      {iconRight}
    </>
  );

  const dataProps = {
    'data-event': event,
    'data-event-label': eventLabel,
  };

  if (isInternal(to)) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} {...dataProps}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={to}
      className={classes}
      aria-label={ariaLabel}
      target={target}
      rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
      {...dataProps}
    >
      {inner}
    </a>
  );
}
