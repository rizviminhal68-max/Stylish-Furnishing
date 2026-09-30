import { site, absoluteUrl } from '@/config/site';
import { serviceAreas } from '@/data/serviceAreas';
import { faqs } from '@/data/faq';
import { services } from '@/data/services';
import type { Guide } from '@/data/guides';

/**
 * ------------------------------------------------------------------
 * STRUCTURED DATA (JSON-LD)
 * ------------------------------------------------------------------
 * Only facts we actually know are included.
 *
 * DELIBERATELY OMITTED because the client has not supplied them:
 * street address, postal code, geo coordinates, opening hours,
 * aggregateRating, review count, priceRange and social profiles.
 * Adding any of those without confirmation risks a Google penalty
 * and a manual action, so do not add them until the client confirms
 * the real details. Once you do have them, add the fields here and
 * they will appear sitewide.
 */

const ORG_ID = `${site.domain}/#business`;
const WEBSITE_ID = `${site.domain}/#website`;

export function localBusinessSchema() {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': ORG_ID,
    name: site.name,
    description: site.serviceSummary,
    url: site.domain,
    telephone: `+${site.phone.national}`,
    image: absoluteUrl('/images/og-image.jpg'),
    logo: absoluteUrl('/favicon.svg'),
    areaServed: [
      {
        '@type': 'City',
        name: site.location.city,
        alternateName: site.location.cityAlt,
      },
      {
        '@type': 'State',
        name: site.location.state,
      },
      {
        '@type': 'Country',
        name: site.location.country,
      },
    ],
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sofa and furniture services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
        },
      })),
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+${site.phone.national}`,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.domain,
    name: site.name,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema() {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function serviceAreaSchema() {
  return {
    '@type': 'ItemList',
    name: `Areas served in ${site.location.city}`,
    itemListElement: serviceAreas.areas.map((area, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: area,
    })),
  };
}

/**
 * Article schema. No author and no dates are included, because neither
 * has been confirmed. Google's guidance is that `datePublished` should
 * reflect reality — leave it out rather than invent it. Add
 * `author: { '@type': 'Organization', name: site.name }` if the client
 * wants the business credited as the author.
 */
export function articleSchema(guide: Guide) {
  return {
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    inLanguage: 'en-IN',
    mainEntityOfPage: absoluteUrl(`/guides/${guide.slug}`),
    image: absoluteUrl('/images/og-image.jpg'),
    publisher: { '@id': ORG_ID },
  };
}
