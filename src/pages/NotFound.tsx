import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import { navLinks, site } from '@/config/site';
import { useSeo } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { CallButton, WhatsappButton } from '@/components/ui/CtaButtons';

export default function NotFound() {
  useSeo({
    title: 'Page not found',
    description: 'The page you were looking for could not be found. Browse our services or call Stylish Furnishing on ' + site.phone.display + '.',
    path: '/404',
  });

  return (
    <section className="relative overflow-hidden bg-ink-950 text-ink-200 texture-grain">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(194,158,91,0.16),transparent_65%)]"
      />

      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-6xl leading-none text-brass-400 sm:text-7xl">404</p>
          <h1 className="mt-5 text-3xl leading-tight text-sand-50 sm:text-4xl">
            We could not find that page
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-200">
            The link may be old or mistyped. Everything on the site is one click away below — or
            call us and we will point you to the right place.
          </p>

          <ul className="mx-auto mt-9 flex max-w-lg flex-wrap justify-center gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  data-event="nav_click"
                  data-event-label={`404_${link.label.toLowerCase()}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-sand-100/25 px-4 py-2.5 text-sm font-semibold text-sand-50 transition hover:border-sand-50 hover:bg-sand-50 hover:text-ink-900"
                >
                  {link.label}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              data-event="nav_click"
              data-event-label="404_home"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-100/35 px-6 py-3.5 font-semibold text-sand-50 transition hover:border-sand-50 hover:bg-sand-50 hover:text-ink-900"
            >
              <Home className="size-4" aria-hidden="true" />
              Back to Home
            </Link>
            <CallButton size="lg" variant="light" eventLabel="404_call" />
            <WhatsappButton
              size="lg"
              eventLabel="404_whatsapp"
              message={`Hello ${site.name}, I could not find the page I was looking for on your website.`}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
