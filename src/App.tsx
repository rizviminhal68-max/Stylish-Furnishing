import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootLayout } from '@/components/layout/RootLayout';
import Home from '@/pages/Home';

/* Route-level code splitting: the landing page ships in the main bundle,
   everything else loads on demand. */
const Services = lazy(() => import('@/pages/Services'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const About = lazy(() => import('@/pages/About'));
const Guides = lazy(() => import('@/pages/Guides'));
const GuideArticle = lazy(() => import('@/pages/GuideArticle'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function RouteFallback() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="text-sm text-ink-500">Loading…</span>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
            <Route path="guides" element={<Guides />} />
            <Route path="guides/:slug" element={<GuideArticle />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
