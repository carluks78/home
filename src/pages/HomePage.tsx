import { Link } from 'react-router-dom';
import PageLayout from '../components/shared/PageLayout';
import CTASection, { CTAStrip } from '../components/shared/CTASection';
import FAQSection from '../components/shared/FAQSection';
import { COMPANY, SERVICES, CITIES, HOME_FAQS, WA_DEFAULT, WA_DEPANNAGE } from '../data/company';
import { WhatsAppIcon } from '../components/layout/Header';

const TOP_CITIES = ['evreux', 'pacy-sur-eure', 'vernon', 'louviers', 'les-andelys', 'gisors', 'bernay', 'pont-audemer', 'verneuil-avre-iton', 'val-de-reuil', 'le-neubourg', 'damville'];

const WHY_US = [
  { icon: '📍', title: 'Électricien local', text: 'Basé au Cormier (27120), j\'interviens dans toute l\'Eure. Je connais le territoire, les artisans locaux et les spécificités du bâti normand.' },
  { icon: '⚡', title: 'Intervention rapide', text: 'Dépannage électrique urgent ? Je m\'efforce d\'intervenir le plus rapidement possible pour rétablir votre installation.' },
  { icon: '📋', title: 'Devis gratuit', text: 'Chaque intervention commence par un devis transparent et gratuit. Aucune surprise sur la facture.' },
  { icon: '🏠', title: 'Particuliers & professionnels', text: 'J\'interviens pour les particuliers comme pour les professionnels : commerces, artisans, PME dans l\'Eure.' },
  { icon: '🔧', title: 'Travail soigné', text: 'Chaque installation est réalisée avec soin, respect des normes NF C 15-100 et du bâti existant.' },
  { icon: '💬', title: 'Conseil personnalisé', text: 'Je prends le temps d\'expliquer, de conseiller et de vous accompagner dans vos projets électriques.' },
];

const DEPANNAGE_PROBLEMS = [
  { problem: 'Mon disjoncteur saute', icon: '🔴', response: 'Vérification du circuit, identification de la cause, remplacement si nécessaire.', wa: WA_DEPANNAGE },
  { problem: 'Je n\'ai plus de courant', icon: '🌑', response: 'Diagnostic complet de l\'installation, identification de la panne, intervention immédiate.', wa: WA_DEPANNAGE },
  { problem: 'Une prise ne fonctionne plus', icon: '🔌', response: 'Contrôle du circuit, remplacement ou réparation de la prise défectueuse.', wa: WA_DEPANNAGE },
  { problem: 'Odeur de brûlé électrique', icon: '🔥', response: 'Urgence absolue : intervention prioritaire pour identifier et sécuriser l\'installation.', wa: WA_DEPANNAGE },
  { problem: 'Tableau électrique bruyant', icon: '🔊', response: 'Contrôle du tableau, remplacement du matériel défectueux, mise aux normes.', wa: WA_DEPANNAGE },
  { problem: 'Éclairage défaillant', icon: '💡', response: 'Diagnostic complet, remplacement des composants défectueux, installation LED.', wa: WA_DEPANNAGE },
];

export default function HomePage() {
  const topCities = TOP_CITIES.map(s => CITIES.find(c => c.slug === s)).filter(Boolean);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: COMPANY.legalName,
      url: COMPANY.siteUrl,
      telephone: '+33629518935',
      email: COMPANY.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        postalCode: COMPANY.address.postalCode,
        addressRegion: COMPANY.address.department,
        addressCountry: 'FR',
      },
      geo: { '@type': 'GeoCoordinates', latitude: COMPANY.address.geo.lat, longitude: COMPANY.address.geo.lng },
      openingHours: ['Mo-Fr 08:00-19:00', 'Sa 08:00-17:00'],
      areaServed: { '@type': 'AdministrativeArea', name: 'Eure, Normandie' },
      taxID: COMPANY.siret,
      priceRange: '€€',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: COMPANY.legalName,
      url: COMPANY.siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${COMPANY.siteUrl}/recherche?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ];

  return (
    <PageLayout
      title="Électricien dans l'Eure (27) – Home Électricité Normandie"
      description="Home Électricité Normandie, électricien dans l'Eure (27). Dépannage électrique, installation, rénovation, mise aux normes. Intervention rapide. Devis gratuit. ☎ 06 29 51 89 35"
      canonical={COMPANY.siteUrl}
      jsonLd={jsonLd}
    >
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-zinc-950 bg-grid overflow-hidden py-16 lg:py-24">
        {/* Orange glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              ⚡ Eure (27) — Normandie
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mb-6">
              Électricien<br />
              <span className="text-gradient">dans l'Eure</span><br />
              <span className="text-2xl sm:text-3xl font-bold text-zinc-400">(27)</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
              <strong className="text-zinc-200">Home Électricité Normandie</strong> — électricité générale, dépannage électrique, installation et rénovation électrique pour particuliers et professionnels dans l'Eure et toute la Normandie.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={COMPANY.phoneUri}
                className="flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-bold text-base rounded-xl transition-all glow-orange shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY.phone}
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold text-base rounded-xl transition-all shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>
              <Link
                to="/rendez-vous"
                className="flex items-center gap-2 px-6 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-base rounded-xl transition-colors border border-zinc-700"
              >
                Rendez-vous
              </Link>
              <Link
                to="/devis-electricien"
                className="flex items-center gap-2 px-6 py-3.5 border-2 border-zinc-700 hover:border-orange-500 text-zinc-300 hover:text-orange-400 font-semibold text-base rounded-xl transition-colors"
              >
                Devis gratuit
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
              {['📍 Le Cormier, Eure (27)', '⚡ Intervention rapide', '📋 Devis gratuit', '✅ Particuliers & pros'].map(b => (
                <span key={b} className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">{b}</span>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-orange-500/5">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&h=500&fit=crop&auto=format"
                alt="Électricien professionnel intervenant sur une installation électrique dans l'Eure"
                className="w-full h-auto object-cover"
                loading="eager"
                width="700"
                height="500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
              {/* Floating card */}
              <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">HÉN</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Home Électricité Normandie</p>
                  <p className="text-zinc-400 text-xs">Électricien dans l'Eure · Le Cormier (27120)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────────────────── */}
      <div className="bg-zinc-900 border-y border-zinc-800 py-4 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 lg:gap-10 text-sm whitespace-nowrap">
          {[
            { icon: '⚡', text: 'Dépannage électrique' },
            { icon: '🔧', text: 'Installation' },
            { icon: '🏠', text: 'Rénovation' },
            { icon: '✅', text: 'Mise aux normes' },
            { icon: '🚗', text: 'Borne IRVE' },
            { icon: '📱', text: 'Domotique' },
            { icon: '📍', text: 'Eure (27)' },
          ].map(i => (
            <div key={i.text} className="flex items-center gap-2 text-zinc-400">
              <span>{i.icon}</span>
              <span>{i.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-zinc-950" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-bold text-sm uppercase tracking-widest">Ce que nous faisons</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight mt-2">
              Nos services d'électricité
            </h2>
            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
              Électricité générale dans l'Eure : de l'installation neuve à la rénovation, du dépannage à la domotique.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map(s => (
              <Link
                key={s.slug}
                to={s.pageSlug}
                className="group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/40 rounded-2xl p-5 transition-all"
              >
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-display font-bold text-white text-lg uppercase tracking-tight mb-2 group-hover:text-orange-400 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2">{s.description}</p>
                <span className="text-orange-400 text-xs font-semibold mt-3 inline-block group-hover:translate-x-1 transition-transform">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPANNAGE URGENCE ──────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-red-400 font-bold text-sm uppercase tracking-widest">Panne électrique ?</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight mt-2 mb-4">
                Dépannage électrique<br />
                <span className="text-orange-400">dans l'Eure (27)</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-6">
                Disjoncteur qui saute, panne de courant, prise défectueuse, tableau électrique en panne ? Home Électricité Normandie intervient pour diagnostiquer et résoudre vos problèmes électriques dans tout le département de l'Eure.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href={COMPANY.phoneUri}
                  className="flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-colors"
                >
                  Appeler pour un dépannage
                </a>
                <a
                  href={WA_DEPANNAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold rounded-xl transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Dépannage WhatsApp
                </a>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEPANNAGE_PROBLEMS.map(p => (
                <a
                  key={p.problem}
                  href={WA_DEPANNAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-xl p-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{p.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1 group-hover:text-orange-400 transition-colors">{p.problem}</p>
                      <p className="text-zinc-500 text-xs leading-relaxed">{p.response}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <CTAStrip emergencyMode={false} />

      {/* ── WHY US ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-400 font-bold text-sm uppercase tracking-widest">Notre différence</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight mt-2">
              Pourquoi choisir<br />Home Électricité Normandie ?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map(w => (
              <div key={w.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <span className="text-3xl mb-4 block">{w.icon}</span>
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight mb-2">{w.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONES ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-orange-400 font-bold text-sm uppercase tracking-widest">Où intervenons-nous ?</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight mt-2">
              Zones d'intervention
            </h2>
            <p className="text-zinc-400 mt-3 max-w-xl mx-auto">
              Basé à Le Cormier (27120), nous intervenons dans tout le département de l'Eure et en Normandie.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {topCities.map(c => c && (
              <Link
                key={c.slug}
                to={`/electricien-${c.slug}`}
                className="group bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/30 rounded-xl px-4 py-3 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white text-sm font-semibold group-hover:text-orange-400 transition-colors">{c.name}</p>
                    <p className="text-zinc-500 text-xs">{c.distanceKm > 0 ? `~${c.distanceKm} km` : 'Siège'}</p>
                  </div>
                  <svg className="w-4 h-4 text-zinc-600 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/zones-intervention"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors"
            >
              Voir toutes les villes de l'Eure →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────────── */}
      <FAQSection faqs={HOME_FAQS} title="Questions fréquentes sur nos services électriques" />

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────── */}
      <CTASection
        title="Besoin d'un électricien dans l'Eure ?"
        subtitle="Contactez Home Électricité Normandie pour un dépannage, un devis ou une prise de rendez-vous. Intervention rapide sur tout le département de l'Eure (27)."
        variant="orange"
      />
    </PageLayout>
  );
}
