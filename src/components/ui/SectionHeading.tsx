import type { ReactNode } from 'react';
import { cx } from '@/lib/utils';
import { Reveal } from './Reveal';

type Props = {
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  /** Heading level. One H1 per page, so pass 1 only on page heroes. */
  as?: 'h1' | 'h2' | 'h3';
  tone?: 'light' | 'dark';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  tone = 'light',
  className,
}: Props) {
  const centered = align === 'center';
  return (
    <Reveal
      className={cx(
        'max-w-2xl',
        centered && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cx(
            'eyebrow',
            centered && 'justify-center',
            tone === 'dark' && 'text-brass-300 before:bg-brass-400',
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cx(
          'mt-4 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]',
          tone === 'dark' && 'text-sand-50',
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cx(
            'mt-5 text-base leading-relaxed sm:text-[1.0625rem]',
            tone === 'dark' ? 'text-ink-200' : 'text-ink-600',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
