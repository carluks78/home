import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import CTASection, { CTAStrip } from './CTASection';
import FAQSection from './FAQSection';
import Breadcrumb from './Breadcrumb';
import type { FAQ } from '../../data/company';
import { COMPANY } from '../../data/company';

export interface ServiceDetailData {
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  breadcrumb: string;
  h1: string;
  h1Accent: string;
  intro: string;
  heroImg: string;
  heroImgAlt: string;
  points: string[];
  sectionTitle: string;
  sectionImg: string;
  sectionImgAlt: string;
  sectionIntro: string;
  sectionPoints: string[];
  zones: string[];
  faqs: FAQ[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export default function ServiceDetailTemplate({ data }: { data: ServiceDetailData }) {
  return (
    <PageLayout
      title={data.seoTitle}
      description={data.seoDescription}
      canonical={data.canonical}
    >
      <Breadcrumb items={[
        { label: 'Accueil', href: '/' },
        { label: 'Nos services', href: '/nos-services' },
        { label: data.breadcrumb },
      ]} />

      {/* Hero */}
      <section className="bg-gray-900 py-14 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${data.heroImg}')` }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-orange-400 mb-3">
            Eure (27) — Normandie
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mb-5">
            {data.h1}<br />
            <span className="text-orange-400">{data.h1Accent}</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {data.intro}
          </p>
          <CTAStrip />
        </div>
      </section>

      {/* Points forts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 uppercase tracking-tight mb-6">
                {data.sectionTitle}
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">{data.sectionIntro}</p>
              <ul className="space-y-3">
                {data.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <img
                src={data.sectionImg}
                alt={data.sectionImgAlt}
                className="w-full h-64 lg:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />

      {/* Zones */}
      <section className="py-14 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 uppercase tracking-tight mb-4">
            Zones d'intervention — Eure (27)
          </h2>
          <p className="text-gray-500 text-sm mb-6 max-w-2xl mx-auto">
            Home Électricité Normandie intervient dans toutes les communes de l'Eure, notamment :
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {data.zones.map(z => (
              <span key={z} className="text-sm text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full">
                {z}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-6">
            Basé à {COMPANY.address.city} — Déplacement sur devis au-delà de 30 km
          </p>
        </div>
      </section>

      <FAQSection faqs={data.faqs} title={`Questions fréquentes`} />

      <CTASection title={data.ctaTitle} subtitle={data.ctaSubtitle} variant="orange" />
    </PageLayout>
  );
}
