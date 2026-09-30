import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import { cx } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds. Keep under 200ms or it starts to feel slow. */
  delay?: number;
  as?: ElementType;
};

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Fades content up as it scrolls into view. One IntersectionObserver is
 * created per element, which is fine at this page size. If the browser
 * has no IntersectionObserver, or the user prefers reduced motion, the
 * content renders immediately — it is never left hidden.
 */
export function Reveal({ children, className, delay = 0, as }: Props) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  /* Starts visible when motion is not wanted, so content is never hidden
     for a visitor who has asked for reduced motion. */
  const [shown, setShown] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === 'undefined',
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={cx(
        shown ? 'animate-fade-up' : 'opacity-0',
        className,
      )}
      style={shown && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
