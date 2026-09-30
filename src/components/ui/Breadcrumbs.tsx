import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cx } from '@/lib/utils';

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ trail, tone = 'light' }: { trail: Crumb[]; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark';
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cx(
          'flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.8125rem]',
          dark ? 'text-ink-300' : 'text-ink-500',
        )}
      >
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={dark ? 'text-brass-300' : 'text-ink-800'}>
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link
                    to={crumb.path}
                    data-event="nav_click"
                    data-event-label={`breadcrumb_${crumb.name.toLowerCase()}`}
                    className={cx(
                      'transition-colors',
                      dark ? 'hover:text-sand-50' : 'hover:text-ink-900',
                    )}
                  >
                    {crumb.name}
                  </Link>
                  <ChevronRight className="size-3.5 shrink-0 opacity-60" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
