import { useEffect } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import WhatsAppWidget from '../layout/WhatsAppWidget';
import MobileCTABar from '../layout/MobileCTABar';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: object | object[];
}

export default function PageLayout({ children, title, description, canonical, jsonLd }: PageLayoutProps) {
  useEffect(() => {
    if (title) document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) metaDesc.setAttribute('content', description);

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl && canonical) canonicalEl.setAttribute('href', canonical);

    if (jsonLd) {
      const existing = document.getElementById('json-ld-page');
      if (existing) existing.remove();
      const script = document.createElement('script');
      script.id = 'json-ld-page';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, jsonLd]);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col mobile-cta-spacer">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppWidget />
      <MobileCTABar />
    </div>
  );
}
