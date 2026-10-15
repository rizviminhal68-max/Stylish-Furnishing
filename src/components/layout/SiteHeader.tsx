import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { navLinks, site } from '@/config/site';
import { cx } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';

export function SiteHeader() {
  const location = useLocation();

  /**
   * The open menu is tied to the route it was opened on, so navigating
   * closes it without needing an effect. Same-path links close it
   * explicitly via onClick.
   */
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === location.pathname;
  const closeMenu = () => setMenuPath(null);

  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 12,
  );
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* Condense the header once the page has scrolled. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock background scrolling and support Escape while the menu is open. */
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cx(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled || open
          ? 'border-sand-200 bg-sand-50/95 backdrop-blur-md shadow-soft'
          : 'border-transparent bg-sand-50',
      )}
    >
      <Container>
        <div
          className={cx(
            'flex items-center justify-between gap-4 transition-all duration-300',
            scrolled ? 'h-16' : 'h-[4.5rem] lg:h-20',
          )}
        >
          <Logo current={location.pathname === '/'} />

          {/* ---------- Desktop navigation ---------- */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    data-event="nav_click"
                    data-event-label={link.label.toLowerCase()}
                    className={({ isActive }) =>
                      cx(
                        'relative block rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors duration-200',
                        isActive
                          ? 'text-ink-900'
                          : 'text-ink-600 hover:text-ink-900',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={cx(
                            'absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-brass-600 transition-transform duration-300',
                            isActive ? 'scale-x-100' : 'scale-x-0',
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- Desktop CTA ---------- */}
          <div className="hidden lg:block">
            <a
              href={site.phone.href}
              data-event="phone_click"
              data-event-label="header_call_now"
              aria-label={`Call Mizan Sofa Repair on ${site.phone.display}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-[0.9375rem] font-semibold text-sand-50 shadow-soft transition duration-200 hover:bg-ink-800"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* ---------- Mobile actions ---------- */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={site.phone.href}
              data-event="phone_click"
              data-event-label="header_mobile_call"
              aria-label={`Call Mizan Sofa Repair on ${site.phone.display}`}
              className="grid size-10 place-items-center rounded-full bg-ink-900 text-sand-50 transition active:scale-95"
            >
              <Phone className="size-[1.15rem]" aria-hidden="true" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuPath(open ? null : location.pathname)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid size-10 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition active:scale-95"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* ---------- Mobile menu panel ---------- */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-sand-200 bg-sand-50 lg:hidden"
      >
        <Container className="py-5">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.to} className="border-b border-sand-200/70 last:border-0">
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={closeMenu}
                    data-event="nav_click"
                    data-event-label={`mobile_${link.label.toLowerCase()}`}
                    className={({ isActive }) =>
                      cx(
                        'flex items-center justify-between py-3.5 font-display text-lg font-medium transition-colors',
                        isActive ? 'text-brass-700' : 'text-ink-900',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-5 flex flex-col gap-2.5">
            <a
              href={site.phone.href}
              data-event="phone_click"
              data-event-label="mobile_menu_call"
              aria-label={`Call Mizan Sofa Repair on ${site.phone.display}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-base font-semibold text-sand-50"
            >
              <Phone className="size-[1.1rem]" aria-hidden="true" />
              Call Now â€” {site.phone.display}
            </a>
            <a
              href="https://wa.me/919599931360"
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_click"
              data-event-label="mobile_menu_whatsapp"
              aria-label="Send a WhatsApp message to Mizan Sofa Repair"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-ink-900"
            >
              <WhatsappGlyph />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-4 text-center text-xs text-ink-500">
            Serving {site.location.areaServed}
          </p>
        </Container>
      </div>
    </header>
  );
}

/** WhatsApp's own mark â€” drawn inline so no extra request or icon font. */
export function WhatsappGlyph({ className = 'size-[1.1rem]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23z" />
    </svg>
  );
}
