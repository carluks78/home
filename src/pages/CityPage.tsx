import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PageLayout from '../components/shared/PageLayout';
import CTASection, { CTAStrip } from '../components/shared/CTASection';
import FAQSection from '../components/shared/FAQSection';
import Breadcrumb from '../components/shared/Breadcrumb';
import NotFoundPage from './NotFoundPage';
import { COMPANY, SERVICES, getCityBySlug, getCityNeighbors, WA_DEFAULT, buildWhatsApp } from '../data/company';
import { WhatsAppIcon } from '../components/layout/Header';

export default function CityPage() {
  const { slug } = useParams<{ slug: string }>();
  const citySlug = slug?.startsWith('electricien-') ? slug.replace('electricien-', '') : slug;
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!city) return <NotFoundPage />;

  const neighbors = getCityNeighbors(city);
  const waCity = buildWhatsApp(`Bonjour Home Électricité Normandie, je suis à ${city.name} et je souhaite obtenir des renseignements pour une prestation électrique.`);
  const waCityDepannage = buildWhatsApp(`Bonjour Home Électricité Normandie, j'ai un problème électrique à ${city.name} et je souhaite une intervention.`);

  const cityFaqs = [
    {
      question: `Comment trouver un électricien à ${city.name} ?`,
      answer: `Home Électricité Normandie est votre électricien à ${city.name} et dans tout le département de l'Eure (27). Basés au Cormier (27120, à ${city.distanceKm} km de ${city.name}), nous intervenons pour tous vos travaux électriques. Appelez le ${COMPANY.phone} ou écrivez sur WhatsApp.`,
    },
    {
      question: `Quels services électriques proposez-vous à ${city.name} ?`,
      answer: `À ${city.name}, nous proposons tous nos services électriques : dépannage électrique d'urgence, installation électrique (maison neuve ou rénovation), rénovation électrique, mise aux normes, remplacement de tableau électrique, installation d'éclairage LED, VMC, borne de recharge IRVE, et domotique.`,
    },
    {
      question: `Intervenez-vous en urgence à ${city.name} ?`,
      answer: `Oui, nous intervenons pour les dépannages électriques urgents à ${city.name}. En cas de panne électrique, de disjoncteur qui saute ou de tout autre problème électrique urgent, contactez-nous au ${COMPANY.phone} ou via WhatsApp.`,
    },
    {
      question: `Combien coûte une intervention électrique à ${city.name} ?`,
      answer: `Le coût d'une intervention à ${city.name} dépend de la nature des travaux. Nous proposons systématiquement un devis gratuit avant toute intervention. Contactez-nous pour obtenir un devis personnalisé adapté à votre besoin.`,
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Électricien à ${city.name} (${city.department})`,
    provider: {
      '@type': 'Electrician',
      name: COMPANY.legalName,
      telephone: '+33629518935',
      address: { '@type': 'PostalAddress', addressLocality: 'Le Cormier', postalCode: '27120', addressCountry: 'FR' },
    },
    areaServed: { '@type': 'City', name: city.name, addressRegion: 'Normandie', addressCountry: 'FR' },
    description: `Électricien à ${city.name} : installation électrique, dépannage, rénovation, mise aux normes. Home Électricité Normandie, basé dans l'Eure.`,
  };

  return (
    <PageLayout
      title={`Électricien à ${city.name} (${city.department}) | Dépannage & Installation – Home Électricité Normandie`}
      description={`Home Électricité Normandie intervient à ${city.name} et dans l'Eure pour vos travaux d'électricité, dépannage, rénovation, installation et mise en sécurité. ${COMPANY.phone}`}
      canonical={`${COMPANY.siteUrl}/electricien-${city.slug}`}
      jsonLd={jsonLd}
    >
      <Breadcrumb items={[
        { label: 'Accueil', href: '/' },
        { label: 'Zones d\'intervention', href: '/zones-intervention' },
        { label: `Électricien ${city.name}` },
      ]} />

      {/* HERO */}
      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
             {city.name} — Eure ({city.department})
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mb-6">
            Électricien à<br />
            <span className="text-orange-400">{city.name}</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {city.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={COMPANY.phoneUri}
              className="flex items-center gap-2 px-6 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all glow-orange-sm"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler {COMPANY.phone}
            </a>
            <a
              href={waCity}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold rounded-xl transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
            <Link
              to="/rendez-vous"
              className="flex items-center gap-2 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-white font-semibold rounded-xl border border-gray-200 transition-colors"
            >
              Prendre RDV
            </Link>
            <Link
              to="/devis-electricien"
              className="flex items-center gap-2 px-6 py-3.5 border-2 border-gray-200 hover:border-orange-500 text-gray-600 hover:text-orange-400 font-semibold rounded-xl transition-colors"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* DISTANCE INFO */}
      {city.distanceKm > 0 && (
        <div className="bg-gray-50 border-y border-gray-100 py-3 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span> Le Cormier (siège) → {city.name} : environ {city.distanceKm} km</span>
            <span className="text-gray-600">|</span>
            <span> Intervention dans tout l'Eure (27)</span>
            <span className="text-gray-600">|</span>
            <span> Devis gratuit sans engagement</span>
          </div>
        </div>
      )}

      {/* SERVICES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl text-gray-900 uppercase tracking-tight text-center mb-4">
            Nos services électriques à {city.name}
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Home Électricité Normandie intervient à {city.name} pour tous vos besoins en électricité.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map(s => (
              <Link
                key={s.slug}
                to={s.pageSlug}
                className="group bg-gray-50 hover:bg-gray-100 border border-gray-100 hover:border-orange-500/40 rounded-2xl p-4 transition-all"
              >
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <h3 className="font-display font-bold text-gray-900 text-base uppercase tracking-tight mb-1 group-hover:text-orange-400 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-gray-500 text-xs line-clamp-2">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL CONTEXT */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-extrabold text-3xl text-gray-900 uppercase tracking-tight mb-4">
              Électricité à {city.name} :<br />
              <span className="text-orange-400">contexte local</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">{city.specificContext}</p>
            <div className="bg-white border border-gray-100 rounded-xl p-5">
              <h3 className="font-display font-bold text-gray-900 text-lg uppercase mb-3">Profil immobilier</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{city.housingProfile}</p>
            </div>
          </div>
          <div>
            <h3 className="font-display font-bold text-gray-900 text-xl uppercase mb-4">Besoins électriques fréquents à {city.name}</h3>
            <ul className="space-y-3">
              {city.mainIssues.map((issue, i) => (
                <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4">
                  <span className="text-orange-400 font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-600 text-sm">{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTAStrip />

      {/* DEPANNAGE */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-3xl text-gray-900 uppercase tracking-tight mb-4">
            Dépannage électrique à {city.name}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            Panne électrique à {city.name} ? Home Électricité Normandie intervient rapidement pour diagnostiquer et réparer votre installation. Disjoncteur qui saute, prise défectueuse, panne de courant — nous trouverons la solution.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waCityDepannage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold rounded-xl transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Dépannage à {city.name}
            </a>
            <a href={COMPANY.phoneUri} className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-colors">
              Appeler maintenant
            </a>
            <Link to="/depannage-electricien" className="px-6 py-3 border-2 border-gray-200 text-gray-600 hover:text-orange-400 hover:border-orange-500 font-semibold rounded-xl transition-colors">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      {/* NEIGHBORS */}
      {neighbors.length > 0 && (
        <section className="py-12 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-extrabold text-2xl text-gray-900 uppercase tracking-tight text-center mb-6">
              Communes voisines desservies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {neighbors.map(n => (
                <Link
                  key={n.slug}
                  to={`/electricien-${n.slug}`}
                  className="bg-white hover:bg-gray-100 border border-gray-100 hover:border-orange-500/30 rounded-xl px-4 py-3 transition-all group"
                >
                  <p className="text-white text-sm font-semibold group-hover:text-orange-400 transition-colors">
                    Électricien {n.name}
                  </p>
                  <p className="text-gray-500 text-xs">~{n.distanceKm} km</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={cityFaqs} title={`Questions fréquentes — Électricien ${city.name}`} />

      <CTASection
        title={`Besoin d'un électricien à ${city.name} ?`}
        subtitle={`Home Électricité Normandie intervient à ${city.name} et dans toute l'Eure (27). Devis gratuit, intervention rapide.`}
        variant="orange"
      />
    </PageLayout>
  );
}
