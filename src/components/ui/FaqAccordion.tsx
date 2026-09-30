import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import type { Faq } from '@/data/faq';
import { cx } from '@/lib/utils';

type Props = {
  items: Faq[];
  /** How many panels start open. */
  initiallyOpen?: number;
};

/**
 * Disclosure list, one <button> per question. Keyboard accessible by
 * default because it uses real buttons and no focus traps.
 */
export function FaqAccordion({ items, initiallyOpen = 1 }: Props) {
  const baseId = useId();
  const [open, setOpen] = useState<number[]>(
    Array.from({ length: Math.min(initiallyOpen, items.length) }, (_, i) => i),
  );

  const toggle = (index: number) =>
    setOpen((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index],
    );

  return (
    <div className="divide-y divide-sand-200 border-y border-sand-200">
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        const buttonId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="group flex w-full items-start justify-between gap-4 py-5 text-left"
              >
                <span
                  className={cx(
                    'font-sans text-[1.0625rem] font-semibold transition-colors sm:text-lg',
                    isOpen ? 'text-brass-700' : 'text-ink-900 group-hover:text-brass-700',
                  )}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cx(
                    'mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300',
                    isOpen
                      ? 'rotate-45 border-brass-500 bg-brass-500 text-white'
                      : 'border-ink-900/15 text-ink-600 group-hover:border-brass-500 group-hover:text-brass-700',
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6 pr-10"
            >
              <p className="text-[0.9375rem] leading-relaxed text-ink-600">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
