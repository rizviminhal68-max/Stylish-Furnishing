import { renderToString } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Gallery from '@/pages/Gallery';
import About from '@/pages/About';
import Guides from '@/pages/Guides';
import GuideArticle from '@/pages/GuideArticle';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import { EnquiryForm } from '@/components/contact/EnquiryForm';

type Case = [string, string, string, React.ComponentType];

const cases: Case[] = [
  ['/', 'Home', '/', Home],
  ['/services', 'Services', '/services', Services],
  ['/gallery', 'Gallery', '/gallery', Gallery],
  ['/about', 'About', '/about', About],
  ['/guides', 'Guides', '/guides', Guides],
  [
    '/guides/how-much-does-sofa-repair-cost-in-gurugram',
    'GuideArticle',
    '/guides/:slug',
    GuideArticle,
  ],
  [
    '/guides/sofa-repair-vs-buying-a-new-sofa',
    'GuideArticle#2',
    '/guides/:slug',
    GuideArticle,
  ],
  ['/contact', 'Contact', '/contact', Contact],
  ['/404', 'NotFound', '/404', NotFound],
];

let failures = 0;

function render(url: string, routePath: string, Page: React.ComponentType) {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <Routes>
        <Route path={routePath} element={<Page />} />
      </Routes>
    </MemoryRouter>,
  );
}

for (const [url, name, routePath, Page] of cases) {
  try {
    const html = render(url, routePath, Page);
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(
      `PASS ${name.padEnd(15)} ${String(html.length).padStart(7)}b  text=${String(text.length).padStart(5)}  | ${text.slice(0, 62)}...`,
    );
  } catch (error) {
    failures += 1;
    console.log(`FAIL ${name}: ${(error as Error).message}`);
  }
}

/* Does a ?service= deep link pre-select the matching dropdown option? */
try {
  const plain = render('/contact', '/contact', Contact);
  const prefilled = render(
    '/contact?service=Sofa%20Upholstery',
    '/contact',
    Contact,
  );
  const differs = plain !== prefilled;
  const marked = /<option value="Sofa Upholstery" selected=""/.test(prefilled);
  console.log(
    `${differs ? 'PASS' : 'FAIL'} prefill      page html differs=${differs}  option[selected]=${marked}`,
  );
  if (!differs || !marked) failures += 1;
} catch (error) {
  failures += 1;
  console.log(`FAIL prefill: ${(error as Error).message}`);
}

/* Every other dropdown option should pre-select too, and rubbish should not. */
try {
  let bad = 0;
  for (const option of [
    'Sofa Repair',
    'Furniture Polishing',
    'Not sure yet — please advise',
  ]) {
    const html = render(
      `/contact?service=${encodeURIComponent(option)}`,
      '/contact',
      Contact,
    );
    if (!new RegExp(`<option value="${option}" selected=""`).test(html)) {
      bad += 1;
      console.log(`FAIL prefill "${option}" not selected`);
    }
  }
  const junk = render('/contact?service=not-a-real-service', '/contact', Contact);
  const junkSelected = /<option value="[^"]+" selected=""/.test(junk);
  if (junkSelected) {
    bad += 1;
    console.log('FAIL prefill accepted an unknown service');
  }
  if (bad === 0) console.log('PASS prefill-all  all known options pre-selected, unknown ignored');
  failures += bad;
} catch (error) {
  failures += 1;
  console.log(`FAIL prefill-all: ${(error as Error).message}`);
}

/* The form must never claim backend email delivery. */
try {
  const html = renderToString(<EnquiryForm defaultService="Sofa Repair" />);
  const honest = /send via WhatsApp/i.test(html);
  const dishonest = /we have (?:received|emailed)/i.test(html);
  console.log(`${honest && !dishonest ? 'PASS' : 'FAIL'} form-copy   whatsapp wording=${honest}  false-claim=${dishonest}`);
  if (!honest || dishonest) failures += 1;
} catch (error) {
  failures += 1;
  console.log(`FAIL form-copy: ${(error as Error).message}`);
}

console.log(failures === 0 ? '\nAll checks passed.' : `\n${failures} check(s) failed.`);
