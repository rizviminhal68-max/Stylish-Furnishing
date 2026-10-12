import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { copyrightYear, navLinks, site, whatsappLink } from '@/config/site';
import { serviceAreas } from '@/data/serviceAreas';
import { services } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/ui/Logo';
import { WhatsappGlyph } from './SiteHeader';

export function SiteFooter() {
  const year = copyrightYear;

  return (
    <footer className="bg-ink-950 text-ink-200 texture-grain">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* ---- Brand ---- */}
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">
              {site.name} provides sofa repair, upholstery and furniture furnishing services
              across {site.location.city}, {site.location.state}. Call or WhatsApp to discuss your
              sofa or furniture.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={site.phone.href}
                data-event="phone_click"
                data-event-label="footer_call_now"
                aria-label={`Call Mizan Sofa Repair on ${site.phone.display}`}
                className="inline-flex items-center gap-2 rounded-full bg-sand-50 px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-white"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_click"
                data-event-label="footer_whatsapp"
                aria-label="Send a WhatsApp message to Mizan Sofa Repair"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-whatsapp-dark hover:text-sand-50"
              >
                <WhatsappGlyph className="size-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* ---- Quick links ---- */}
          <nav aria-labelledby="footer-quick-links" className="lg:col-span-2">
            <h2
              id="footer-quick-links"
              className="font-sans text-[0.6875rem] font-bold tracking-[0.16em] text-brass-400 uppercase"
            >
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-event="nav_click"
                    data-event-label={`footer_${link.label.toLowerCase()}`}
                    className="text-sm text-ink-300 transition-colors hover:text-sand-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- Services ---- */}
          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h2
              id="footer-services"
              className="font-sans text-[0.6875rem] font-bold tracking-[0.16em] text-brass-400 uppercase"
            >
              Our Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    data-event="nav_click"
                    data-event-label={`footer_service_${s.slug}`}
                    className="text-sm text-ink-300 transition-colors hover:text-sand-50"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  data-event="nav_click"
                  data-event-label="footer_all_services"
                  className="text-sm font-semibold text-brass-300 underline-offset-4 transition-colors hover:text-brass-200 hover:underline"
                >
                  View all services
                </Link>
              </li>
            </ul>
          </nav>

          {/* ---- Service area + contact ---- */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-[0.6875rem] font-bold tracking-[0.16em] text-brass-400 uppercase">
              Service Area
            </h2>
            <p className="mt-5 flex items-start gap-2 text-sm text-ink-300">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brass-400" aria-hidden="true" />
              <span>
                {serviceAreas.primary}
                <span className="mt-1 block text-ink-400">
                  Including {serviceAreas.areas.slice(0, 3).join(', ')} and surrounding areas.
                </span>
              </span>
            </p>

            <h2 className="mt-6 font-sans text-[0.6875rem] font-bold tracking-[0.16em] text-brass-400 uppercase">
              Contact
            </h2>
            <a
              href={site.phone.href}
              data-event="phone_click"
              data-event-label="footer_phone_number"
              aria-label={`Call Mizan Sofa Repair on ${site.phone.display}`}
              className="mt-4 flex items-center gap-2 text-lg font-semibold text-sand-50 transition-colors hover:text-brass-300"
            >
              <Phone className="size-4 text-brass-400" aria-hidden="true" />
              {site.phone.display}
            </a>
            <p className="mt-1 text-sm text-ink-400">Call or WhatsApp for service enquiries</p>
          </div>
        </div>

        <div className="rule mt-12 opacity-30" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>
            Sofa repair, upholstery and furniture furnishing in {site.location.city},{' '}
            {site.location.state}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
