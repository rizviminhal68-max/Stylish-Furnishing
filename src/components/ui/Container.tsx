import type { ReactNode } from 'react';
import { cx } from '@/lib/utils';

export function Container({
  children,
  className,
  size = 'default',
}: {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow';
}) {
  const width =
    size === 'wide' ? 'max-w-7xl' : size === 'narrow' ? 'max-w-3xl' : 'max-w-6xl';
  return <div className={cx('mx-auto w-full px-5 sm:px-6 lg:px-8', width, className)}>{children}</div>;
}
