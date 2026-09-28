import PageLayout from '../components/shared/PageLayout';
import CTASection, { CTAStrip } from '../components/shared/CTASection';
import FAQSection from '../components/shared/FAQSection';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY } from '../data/company';

const INSTALL_TYPES = [
  { icon: '🏠', title: 'Maison individuelle', desc: 'Installation électrique complète pour construction neuve ou rénovation : tableau, circuits, prises, éclairage, VMC, chauffage.' },
  { icon: '🏢', title: 'Appartement', desc: 'Installation ou réfection complète du réseau électrique en appartement. Respect des contraintes de copropriété.' },
  { icon: '🏗️', title: 'Construction neuve', desc: 'Travail en coordination avec le maître d\'œuvre dès le gros-œuvre. Installation neuve selon plan d\'architecte.' },
  { icon: '🏪', title: 'Local professionnel', desc: 'Installation électrique pour commerces, bureaux, ateliers selon les normes ERP et professionnelles.' },
  { icon: '💡', title: 'Éclairage', desc: 'Installation de luminaires intérieurs et extérieurs, spots LED, éclairages de mise en valeur.' },
  { icon: '🔌', title: 'Prises & Interrupteurs', desc: 'Ajout, déplacement ou remplacement de prises, interrupteurs, va-et-vient, télérupteurs.' },
];

const INSTALL_FAQS = [
  {
    question: 'Qu\'inclut une installation électrique complète pour une maison ?',
    answer: 'Une installation électrique complète pour une maison comprend : le tableau électrique avec disjoncteurs différentiels, les circuits de distribution (éclairage, prises de courant, circuit cuisine, salle de bains), la mise à la terre, l\'installation VMC, les circuits de chauffage, et les prises de courant avec terre. Tout est réalisé conformément à la norme NF C 15-100.',
  },
  {
    question: 'Combien de temps prend une installation électrique dans une maison ?',
    answer: 'La durée dépend de la superficie et de la complexité du projet. Pour une maison de 100m², compter 3 à 5 jours. Pour un appartement, 1 à 3 jours. Pour une construction neuve, le temps est réparti en plusieurs phases (premier œuvre, second œuvre). Je vous donnerai une estimation précise lors du devis.',
  },
  {
    question: 'Combien coûte une installation électrique pour une maison neuve ?',
    answer: 'Le coût d\'une installation électrique pour une maison neuve varie selon la superficie, le nombre de pièces et les équipements souhaités (domotique, borne IRVE...). Pour avoir une idée précise, contactez-nous pour un devis gratuit et personnalisé.',
  },
  {
    question: 'Faut-il respecter des normes particulières pour une installation électrique ?',
    answer: 'Oui, en France toute installation électrique doit respecter la norme NF C 15-100. Cette norme définit les règles de sécurité pour les installations électriques basse tension dans les logements. Elle précise notamment les protections obligatoires, les types de prises à utiliser selon les pièces, les circuits obligatoires en cuisine et salle de bains.',
  },
];

export default function InstallationPage() {
  return (
    <PageLayout
      title="Installation électrique dans l'Eure (27) – Home Électricité Normandie"
      description="Installation électrique dans l'Eure (27) : maison neuve, appartement, local professionnel. Norme NF C 15-100. Devis gratuit. ☎ 06 29 51 89 35"
      canonical={`${COMPANY.siteUrl}/installation-electrique`}
    >
      <Breadcrumb items={[
        { label: 'Accueil', href: '/' },
        { label: 'Nos services', href: '/nos-services' },
        { label: 'Installation électrique' },
      ]} />

      <section className="bg-zinc-950 bg-grid py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            🔧 Installation électrique — Eure (27)
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mb-6">
            Installation électrique<br />
            <span className="text-orange-400">dans l'Eure (27)</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Home Électricité Normandie réalise vos installations électriques dans tout le département de l'Eure : maisons neuves, appartements, locaux professionnels. Conformité NF C 15-100 garantie.
          </p>
          <CTAStrip />
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl text-white uppercase tracking-tight text-center mb-10">
            Types d'installations électriques réalisées
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTALL_TYPES.map(t => (
              <div key={t.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <h3 className="font-display font-bold text-white text-xl uppercase tracking-tight mb-2">{t.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white uppercase tracking-tight mb-6">
                Installation électrique<br />
                <span className="text-orange-400">conforme NF C 15-100</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-6">
                Chaque installation est réalisée dans le respect strict de la norme NF C 15-100, la réglementation française pour les installations électriques basse tension dans les bâtiments d'habitation.
              </p>
              <ul className="space-y-3">
                {[
                  'Tableau électrique avec disjoncteurs différentiels adaptés',
                  'Circuits spécialisés cuisine et salle de bains',
                  'Mise à la terre obligatoire sur toutes les prises',
                  'Protection différentielle 30mA pour salles d\'eau',
                  'Câbles de section adaptée à chaque circuit',
                  'Éclairage de sécurité si requis',
                  'VMC (Ventilation Mécanique Contrôlée)',
                ].map(i => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <span className="text-orange-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&h=450&fit=crop&auto=format"
                alt="Tableau électrique avec disjoncteurs — installation électrique dans l'Eure"
                className="w-full h-64 lg:h-80 object-cover"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />

      <FAQSection faqs={INSTALL_FAQS} title="Questions sur l'installation électrique" />

      <CTASection
        title="Besoin d'une installation électrique dans l'Eure ?"
        subtitle="Contactez Home Électricité Normandie pour un devis gratuit. Intervention sur toute l'Eure (27)."
        variant="orange"
      />
    </PageLayout>
  );
}
