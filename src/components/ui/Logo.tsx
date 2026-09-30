import { Link } from 'react-router-dom';
import { site } from '@/config/site';
import { cx } from '@/lib/utils';

type Props = {
  /** 'dark' for use on light backgrounds, 'light' for dark backgrounds. */
  tone?: 'dark' | 'light';
  className?: string;
  /** Hides the wordmark, leaving only the mark. */
  markOnly?: boolean;
  /** Marks the link as the current page for assistive tech. */
  current?: boolean;
};

export function Logo({ tone = 'dark', className, markOnly = false, current = false }: Props) {
  const isLight = tone === 'light';
  return (
    <Link
      to="/"
      aria-label={`${site.name} — home`}
      aria-current={current ? 'page' : undefined}
      data-event="nav_click"
      data-event-label="logo"
      className={cx('group inline-flex items-center gap-3', className)}
    >
      <span
        aria-hidden="true"
        className={cx(
          'grid size-10 shrink-0 place-items-center rounded-[0.7rem] transition-transform duration-300 group-hover:-rotate-3 sm:size-11',
          isLight ? 'bg-sand-50' : 'bg-ink-900',
        )}
      >
        <svg viewBox="0 0 40 40" className="size-7 sm:size-8" fill="none">
          <rect x="11" y="12" width="18" height="11" rx="3.5" fill={isLight ? '#1B1815' : '#FDFBF7'} />
          <rect x="7.5" y="21" width="25" height="8.5" rx="2.5" fill={isLight ? '#1B1815' : '#FDFBF7'} />
          <path d="M20 16.5v11" stroke="#C29E5B" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="9" y="29.5" width="2.5" height="3" rx="1.2" fill={isLight ? '#1B1815' : '#FDFBF7'} />
          <rect x="28.5" y="29.5" width="2.5" height="3" rx="1.2" fill={isLight ? '#1B1815' : '#FDFBF7'} />
        </svg>
      </span>

      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={cx(
              'font-display text-[1.0625rem] font-semibold tracking-tight sm:text-xl',
              isLight ? 'text-sand-50' : 'text-ink-900',
            )}
          >
            Stylish<span className={isLight ? 'text-brass-300' : 'text-brass-600'}> Furnishing</span>
          </span>
          <span
            className={cx(
              'mt-1 hidden text-[0.6875rem] font-medium tracking-[0.14em] uppercase sm:block',
              isLight ? 'text-ink-300' : 'text-ink-500',
            )}
          >
            Sofa &amp; Furniture Repair
          </span>
        </span>
      )}
    </Link>
  );
}
