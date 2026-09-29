import { Link } from 'react-router-dom';
import PageLayout from '../components/shared/PageLayout';
import CTASection from '../components/shared/CTASection';
import FAQSection from '../components/shared/FAQSection';
import { COMPANY, SERVICES, CITIES, HOME_FAQS, WA_DEFAULT, WA_DEPANNAGE } from '../data/company';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: COMPANY.name,
    image: 'https://home-electricite-normandie.fr/logo.png',
    url: COMPANY.siteUrl,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      postalCode: COMPANY.address.postalCode,
      addressCountry: 'FR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: COMPANY.address.geo.lat, longitude: COMPANY.address.geo.lng },
    areaServed: { '@type': 'State', name: 'Eure' },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '17:00' },
    ],
    priceRange: '€€',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.name,
    url: COMPANY.siteUrl,
  },
];

export default function HomePage() {
  return (
    <PageLayout
      title={`Électricien dans l'Eure (27) – ${COMPANY.name}`}
      description={`${COMPANY.name} : électricien dans l'Eure (27) pour dépannage, installation, rénovation et mise aux normes électriques. Intervention particuliers et professionnels. Devis gratuit. ${COMPANY.phone}`}
      canonical={COMPANY.siteUrl}
      jsonLd={jsonLd}
    >
      {/* ─── HERO ─── */}
      <section className="relative min-h-[560px] lg:min-h-[640px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/img-02.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-orange-400 mb-5">
              Électricien local — Eure (27) — Normandie
            </p>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none mb-6">
              Électricien<br />
              dans l'Eure<br />
              <span className="text-gradient">(27)</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
              {COMPANY.name} — électricité générale, dépannage, installation, rénovation et mise aux normes. Intervention rapide pour particuliers et professionnels dans tout l'Eure.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={COMPANY.phoneUri}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-lg transition-colors glow-orange-sm"
              >
                <PhoneIcon className="w-5 h-5" />
                {COMPANY.phone}
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#1fbe5e] text-white font-bold rounded-lg transition-colors"
              >
                <WAIcon className="w-5 h-5" />
                WhatsApp
              </a>
              <Link
                to="/rendez-vous"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg transition-all"
              >
                Prendre rendez-vous
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-white/55">
              <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-orange-400" />Devis gratuit</span>
              <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-orange-400" />Intervention rapide</span>
              <span className="flex items-center gap-1.5"><CheckIcon className="w-4 h-4 text-orange-400" />Particuliers et professionnels</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Entreprise locale', value: 'Eure (27) et Normandie' },
              { label: 'Intervention rapide', value: 'Sur rendez-vous' },
              { label: 'Travail soigné', value: 'Conseils personnalisés' },
              { label: 'Électricité générale', value: 'Particuliers et pros' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-10 bg-orange-500 rounded-full shrink-0" />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">{item.label}</p>
                  <p className="font-semibold text-gray-800 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NOS SERVICES ─── */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-orange-500 mb-3">Nos services</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-gray-900">
                Tous vos travaux d'électricité dans l'Eure
              </h2>
            </div>
            <Link to="/nos-services" className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors shrink-0">
              Voir tous les services →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={s.pageSlug}
                className="group bg-white rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-base uppercase tracking-tight text-gray-900 group-hover:text-orange-500 transition-colors mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{s.description}</p>
                  <span className="inline-block mt-3 text-xs font-semibold text-orange-500 group-hover:underline">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RÉALISATIONS PHOTOS ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-orange-500 mb-3">Nos réalisations</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-gray-900">
              Exemples de chantiers réalisés
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="md:row-span-2 rounded-xl overflow-hidden bg-gray-100">
              <img src="/images/img-03.jpg" alt="Éclairage extérieur de jardin — Home Électricité Normandie" className="w-full h-full object-cover" style={{ minHeight: '280px' }} />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <img src="/images/img-09.jpg" alt="Éclairage LED cuisine sous-meuble" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <img src="/images/img-06.jpg" alt="Tableau électrique neuf installé dans l'Eure" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <img src="/images/img-10.jpg" alt="Installation électrique cuisine moderne" className="w-full h-48 object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <img src="/images/img-08.jpg" alt="Interrupteur Céliane design installé" className="w-full h-48 object-cover" />
            </div>
          </div>
          <div className="mt-6">
            <Link to="/realisations" className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
              Voir toutes nos réalisations →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DÉPANNAGE ─── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/img-06.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-orange-400 mb-3">Dépannage électrique</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-white mb-5">
              Une panne électrique ? Nous intervenons.
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Disjoncteur qui saute, coupure de courant, prise défectueuse, odeur de brûlé — nous diagnostiquons et résolvons votre problème en toute sécurité.
            </p>
            <ul className="space-y-2.5 mb-8">
              {[
                'Mon disjoncteur saute régulièrement',
                "Je n'ai plus d'électricité dans une pièce",
                'Une prise ne fonctionne plus',
                'Odeur de brûlé provenant d\'une prise',
                'Mon tableau électrique fait du bruit',
              ].map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-white/75 text-sm">
                  <span className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[10px] font-mono text-orange-400 shrink-0">{i + 1}</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/depannage-electricien"
                className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm rounded-lg transition-colors"
              >
                Voir le dépannage
              </Link>
              <a
                href={WA_DEPANNAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#1fbe5e] text-white font-bold text-sm rounded-lg transition-colors"
              >
                <WAIcon className="w-4 h-4" />
                Dépannage WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POURQUOI NOUS CHOISIR ─── */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-orange-500 mb-3">Pourquoi nous choisir</p>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-gray-900 mb-5">
                {COMPANY.name}, votre électricien de confiance
              </h2>
              <p className="text-gray-500 text-lg mb-8">
                Une entreprise locale, un interlocuteur unique, un travail soigné pour tous vos projets électriques dans l'Eure.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'Entreprise locale', text: "Basée dans l'Eure, nous connaissons le territoire." },
                  { title: 'Électricité générale', text: 'Dépannage, installation, rénovation : un seul interlocuteur.' },
                  { title: 'Particuliers et pros', text: 'Maisons, appartements, commerces, bureaux.' },
                  { title: 'Travail soigné', text: 'Installations propres, sécurisées et conformes.' },
                  { title: 'Conseils personnalisés', text: 'Solutions adaptées à votre budget et projet.' },
                  { title: 'Devis gratuit', text: 'Un devis détaillé avant toute intervention.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-1 bg-orange-500 rounded-full shrink-0 my-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden bg-gray-100 col-span-2">
                <img src="/images/img-04.jpg" alt="Éclairage extérieur de jardin nocturne" className="w-full h-56 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden bg-gray-100">
                <img src="/images/img-05.jpg" alt="Projecteur LED extérieur installé" className="w-full h-36 object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden bg-gray-100">
                <img src="/images/img-07.jpg" alt="Pose de mâts d'éclairage extérieur" className="w-full h-36 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ZONES D'INTERVENTION ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-orange-500 mb-3">Zones d'intervention</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-gray-900">
              Électricien dans toute l'Eure (27)
            </h2>
            <p className="text-gray-500 mt-3">
              Basés au Cormier, nous intervenons dans l'ensemble des communes de l'Eure et de ses environs.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
            {CITIES.slice(0, 20).map((c) => (
              <Link
                key={c.slug}
                to={`/electricien-${c.slug}`}
                className="flex items-center justify-between px-4 py-2.5 rounded-lg border border-gray-100 bg-gray-50 hover:border-orange-200 hover:bg-orange-50 transition-all group text-sm"
              >
                <span className="font-medium text-gray-700 group-hover:text-orange-600 transition-colors">{c.name}</span>
                <span className="text-gray-300 group-hover:text-orange-400 text-xs">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/zones-intervention" className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
              Voir toutes les villes →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TV / ÉCLAIRAGE INTÉRIEUR TEASER ─── */}
      <section className="relative overflow-hidden bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/img-01.jpg')" }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-orange-400 mb-3">Installation & domotique</p>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl uppercase tracking-tight text-white mb-4">
              Éclairage, domotique et multimédia
            </h2>
            <p className="text-white/70 mb-6">
              Intégration TV, éclairage indirect LED, prises HDMI encastrées, système domotique — nous réalisons des installations soignées et discrètes dans votre espace de vie.
            </p>
            <Link to="/eclairage-led" className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm rounded-lg transition-colors">
              Nos services éclairage →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection faqs={HOME_FAQS} title="Questions fréquentes sur l'électricité dans l'Eure" />

      {/* ─── CTA FINAL ─── */}
      <CTASection
        variant="orange"
        title="Besoin d'un électricien dans l'Eure ?"
        subtitle={`Contactez ${COMPANY.name} pour un devis gratuit ou une intervention rapide dans tout le département.`}
      />
    </PageLayout>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WAIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
