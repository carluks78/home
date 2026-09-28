import { Link } from 'react-router-dom';
import PageLayout from '../components/shared/PageLayout';
import CTASection, { CTAStrip } from '../components/shared/CTASection';
import FAQSection from '../components/shared/FAQSection';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY, DEPANNAGE_FAQS, WA_DEPANNAGE } from '../data/company';
import { WhatsAppIcon } from '../components/layout/Header';

const FAULT_CARDS = [
  {
    icon: '🔴',
    title: 'Mon disjoncteur saute',
    symptoms: ['Le disjoncteur se déclenche au même endroit', 'Il repart mais retombe après quelques minutes', 'Le disjoncteur général se déclenche'],
    cause: 'Surcharge sur le circuit, appareil défectueux, défaut d\'isolement sur un câble ou connexion desserrée.',
    urgency: 'Moyenne',
  },
  {
    icon: '🌑',
    title: 'Je n\'ai plus d\'électricité',
    symptoms: ['Panne totale dans toute la maison', 'Panne localisée sur une zone', 'Interruption soudaine sans raison apparente'],
    cause: 'Déclenchement du disjoncteur général, panne de réseau Enedis, court-circuit, problème de compteur.',
    urgency: 'Haute',
  },
  {
    icon: '🔌',
    title: 'Une prise ne fonctionne plus',
    symptoms: ['Prise qui ne délivre plus de courant', 'Prise partiellement fonctionnelle', 'Plusieurs prises sur le même circuit en panne'],
    cause: 'Disjoncteur de circuit déclenché, connexion dessoudée, prise endommagée mécaniquement.',
    urgency: 'Basse',
  },
  {
    icon: '🔥',
    title: 'Odeur de brûlé d\'une prise',
    symptoms: ['Odeur de plastique brûlé', 'Prise noircie ou fondue', 'Chaleur anormale autour d\'une prise'],
    cause: 'Court-circuit, surcharge, connexion desserrée provoquant un arc électrique. DANGER IMMÉDIAT.',
    urgency: 'Urgence',
  },
  {
    icon: '🔊',
    title: 'Mon tableau électrique fait du bruit',
    symptoms: ['Bourdonnement dans le tableau', 'Claquements répétés', 'Vibrations anormales'],
    cause: 'Disjoncteur défectueux, connexion mal serrée, interrupteur différentiel en fin de vie.',
    urgency: 'Haute',
  },
  {
    icon: '💡',
    title: 'Un éclairage ne fonctionne plus',
    symptoms: ['Lumière éteinte en permanence', 'Clignotement', 'Circuit d\'éclairage hors service'],
    cause: 'Ampoule grillée, interrupteur défectueux, problème sur le circuit d\'éclairage.',
    urgency: 'Basse',
  },
  {
    icon: '⚡',
    title: 'Problème après des travaux',
    symptoms: ['Panne apparue suite à des travaux', 'Court-circuit après perçage', 'Installation existante en panne'],
    cause: 'Câble sectionné lors des travaux, connexion perturbée, nouveau circuit en court-circuit.',
    urgency: 'Haute',
  },
  {
    icon: '🌡️',
    title: 'Prise ou câble qui chauffe',
    symptoms: ['Chaleur anormale sur une prise', 'Câble chaud au toucher', 'Interrupteur tiède'],
    cause: 'Surcharge sur le circuit, connexion défectueuse, section de câble insuffisante. ATTENTION risque d\'incendie.',
    urgency: 'Urgence',
  },
];

const URGENCY_COLOR: Record<string, string> = {
  'Urgence': 'text-red-400 bg-red-400/10 border-red-400/30',
  'Haute': 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  'Moyenne': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  'Basse': 'text-green-400 bg-green-400/10 border-green-400/30',
};

export default function DepannagePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Dépannage électrique dans l\'Eure (27)',
    provider: {
      '@type': 'Electrician',
      name: COMPANY.legalName,
      telephone: '+33629518935',
      address: { '@type': 'PostalAddress', addressLocality: 'Le Cormier', postalCode: '27120', addressCountry: 'FR' },
    },
    areaServed: 'Eure (27), Normandie',
    description: 'Service de dépannage électrique dans l\'Eure : panne de courant, disjoncteur qui saute, prise défectueuse, urgence électrique.',
  };

  return (
    <PageLayout
      title="Dépannage électrique dans l'Eure (27) – Home Électricité Normandie"
      description="Dépannage électrique dans l'Eure (27) : panne de courant, disjoncteur qui saute, prise défectueuse, urgence électrique. Intervention rapide. ☎ 06 29 51 89 35"
      canonical={`${COMPANY.siteUrl}/depannage-electricien`}
      jsonLd={jsonLd}
    >
      <Breadcrumb items={[
        { label: 'Accueil', href: '/' },
        { label: 'Nos services', href: '/nos-services' },
        { label: 'Dépannage électrique' },
      ]} />

      {/* HERO */}
      <section className="bg-zinc-950 bg-grid py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            🚨 Panne électrique — Intervention rapide
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mb-6">
            Dépannage électrique<br />
            <span className="text-orange-400">dans l'Eure (27)</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Panne de courant, disjoncteur qui saute, prise défectueuse, court-circuit ? Home Électricité Normandie intervient pour diagnostiquer et réparer votre installation électrique dans toute l'Eure.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={COMPANY.phoneUri}
              className="flex items-center gap-2 px-7 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg rounded-xl transition-all glow-orange shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler pour un dépannage
            </a>
            <a
              href={WA_DEPANNAGE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-4 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold text-lg rounded-xl transition-all shadow-xl"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Dépannage WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* EMERGENCY ALERT */}
      <div className="bg-red-600/10 border-y border-red-600/30 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div>
            <p className="text-red-400 font-bold text-sm">⚠️ En cas d'urgence électrique grave (flammes, fumée, danger immédiat)</p>
            <p className="text-zinc-400 text-xs mt-0.5">Coupez le disjoncteur général — Appelez le 18 (pompiers) si nécessaire — puis contactez-nous</p>
          </div>
          <a href={COMPANY.phoneUri} className="flex-shrink-0 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl transition-colors">
            {COMPANY.phone}
          </a>
        </div>
      </div>

      {/* FAULT FINDER */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight">
              Identifiez votre panne électrique
            </h2>
            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto">
              Décrivez votre problème — contactez-nous directement via WhatsApp ou téléphone pour un diagnostic rapide.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FAULT_CARDS.map(card => (
              <div key={card.title} className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 rounded-2xl p-5 transition-all flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{card.icon}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${URGENCY_COLOR[card.urgency]}`}>
                    {card.urgency}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-lg uppercase tracking-tight mb-3">{card.title}</h3>
                <div className="mb-3 flex-1">
                  <p className="text-zinc-500 text-xs font-semibold mb-1.5 uppercase tracking-wider">Symptômes :</p>
                  <ul className="space-y-1">
                    {card.symptoms.map(s => (
                      <li key={s} className="flex items-start gap-1.5 text-xs text-zinc-400">
                        <span className="text-orange-400 mt-0.5 flex-shrink-0">›</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-zinc-500 text-xs mb-4 leading-relaxed">{card.cause}</p>
                <a
                  href={WA_DEPANNAGE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white text-xs font-bold rounded-xl transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  Décrire ce problème
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip emergencyMode />

      {/* WHAT WE DO */}
      <section className="py-16 px-4 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight text-center mb-10">
            Comment se déroule un dépannage électrique ?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Contact', text: 'Appelez ou écrivez sur WhatsApp. Décrivez votre panne. Je vous donne une première estimation.' },
              { step: '02', title: 'Diagnostic', text: 'J\'arrive sur site et réalise un diagnostic complet de votre installation électrique.' },
              { step: '03', title: 'Devis', text: 'Je vous présente le devis détaillé avant toute intervention. Aucun travail sans accord de votre part.' },
              { step: '04', title: 'Réparation', text: 'J\'effectue la réparation avec le matériel adapté. Je teste et vérifie le bon fonctionnement.' },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white font-display font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-display font-bold text-white text-lg uppercase mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-12 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight mb-4">
            Dépannage électrique — Zones d'intervention
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Home Électricité Normandie intervient pour le dépannage électrique dans toutes les communes de l'Eure (27) : Évreux, Pacy-sur-Eure, Vernon, Louviers, Bernay, Les Andelys, Gisors, Pont-Audemer, Verneuil d'Avre et d'Iton, Val-de-Reuil et toutes les communes environnantes.
          </p>
          <Link to="/zones-intervention" className="text-orange-400 hover:text-orange-300 font-semibold text-sm">
            Voir toutes les zones d'intervention →
          </Link>
        </div>
      </section>

      <FAQSection
        faqs={DEPANNAGE_FAQS}
        title="Questions sur le dépannage électrique"
      />

      <CTASection
        title="Panne électrique dans l'Eure ?"
        subtitle="Contactez Home Électricité Normandie immédiatement. Intervention rapide pour toutes les pannes électriques dans l'Eure (27)."
        variant="orange"
      />
    </PageLayout>
  );
}
