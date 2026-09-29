import PageLayout from '../components/shared/PageLayout';
import CTASection from '../components/shared/CTASection';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY } from '../data/company';

const PROJECTS = [
  {
    img: '/images/img-02.jpg',
    title: 'Éclairage de jardin — spotlights dorés',
    location: 'Eure (27)',
    category: 'Éclairage extérieur',
  },
  {
    img: '/images/img-03.jpg',
    title: 'Spotlights encastrés — allée de jardin',
    location: 'Eure (27)',
    category: 'Éclairage extérieur',
  },
  {
    img: '/images/img-04.jpg',
    title: 'Mise en valeur arboricole — uplighting',
    location: 'Eure (27)',
    category: 'Éclairage extérieur',
  },
  {
    img: '/images/img-05.jpg',
    title: 'Spot extérieur sur muret en pierre',
    location: 'Eure (27)',
    category: 'Éclairage extérieur',
  },
  {
    img: '/images/img-06.jpg',
    title: 'Tableau électrique — mise aux normes',
    location: 'Eure (27)',
    category: 'Tableau électrique',
  },
  {
    img: '/images/img-07.jpg',
    title: 'Lampadaires de jardin — installation',
    location: 'Eure (27)',
    category: 'Éclairage extérieur',
  },
  {
    img: '/images/img-08.jpg',
    title: 'Variateur Céliane — finition design',
    location: 'Eure (27)',
    category: 'Appareillage',
  },
  {
    img: '/images/img-09.jpg',
    title: 'Ruban LED sous-meuble — cuisine',
    location: 'Eure (27)',
    category: 'Éclairage LED',
  },
  {
    img: '/images/img-10.jpg',
    title: 'Cuisine complète — éclairage LED intégré',
    location: 'Eure (27)',
    category: 'Éclairage LED',
  },
  {
    img: '/images/img-16.jpg',
    title: 'Prises rondes noires — béton ciré',
    location: 'Eure (27)',
    category: 'Appareillage',
  },
  {
    img: '/images/img-17.jpg',
    title: 'Bornes solaires — allée gravillonnée',
    location: 'Eure (27)',
    category: 'Éclairage extérieur',
  },
  {
    img: '/images/img-18.jpg',
    title: 'Chemin en pierre — bornes de balisage',
    location: 'Eure (27)',
    category: 'Éclairage extérieur',
  },
  {
    img: '/images/img-19.jpg',
    title: 'Borne de jardin — maison normande',
    location: 'Eure (27)',
    category: 'Éclairage extérieur',
  },
  {
    img: '/images/img-01.jpg',
    title: 'Rétroéclairage LED — salon TV',
    location: 'Eure (27)',
    category: 'Éclairage LED',
  },
];

const CATEGORIES = ['Tous', 'Éclairage extérieur', 'Éclairage LED', 'Tableau électrique', 'Appareillage'];

export default function RealisationsPage() {
  return (
    <PageLayout
      title="Réalisations – Home Électricité Normandie – Électricien Eure (27)"
      description="Découvrez les réalisations de Home Électricité Normandie : éclairages extérieurs, tableaux électriques, LED, appareillage dans l'Eure (27)."
      canonical={`${COMPANY.siteUrl}/realisations`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Réalisations' }]} />

      {/* Hero */}
      <section className="bg-gray-900 py-16 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/img-03.jpg')" }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-orange-400 mb-3">Portfolio</p>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            Nos réalisations
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Quelques exemples de nos interventions dans l'Eure — éclairages extérieurs, tableaux électriques, appareillage design et éclairages LED.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p, i) => (
              <article
                key={i}
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block text-xs font-mono uppercase tracking-widest text-orange-500 mb-1">
                    {p.category}
                  </span>
                  <h2 className="font-display font-bold text-gray-900 text-base uppercase leading-tight">
                    {p.title}
                  </h2>
                  <p className="text-gray-400 text-xs mt-1">{p.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Types of work */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-3xl text-gray-900 uppercase tracking-tight mb-2">
            Nos domaines d'intervention
          </h2>
          <p className="text-gray-500 text-base mb-10">
            Du dépannage d'urgence à l'installation complète, nous intervenons partout dans l'Eure.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              { type: 'Tableau électrique', desc: 'Remplacement et mise aux normes — sécurité NFC 15-100' },
              { type: 'Éclairage LED', desc: 'Strips sous-meuble, spots encastrés, variateurs' },
              { type: 'Éclairage extérieur', desc: 'Spotlights, bornes de jardin, uplighting arboricole' },
              { type: 'Appareillage design', desc: 'Prises, interrupteurs et variateurs haut de gamme' },
              { type: 'Borne IRVE', desc: 'Installation de bornes de recharge pour véhicules électriques' },
              { type: 'Dépannage', desc: 'Intervention rapide 7j/7 pour pannes électriques' },
            ].map(r => (
              <div key={r.type} className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="w-2 h-2 rounded-full bg-orange-500 mb-3" />
                <h3 className="font-display font-bold text-gray-900 text-base uppercase mb-1">{r.type}</h3>
                <p className="text-gray-500 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Votre projet dans l'Eure ?"
        subtitle="Contactez Home Électricité Normandie pour discuter de votre projet électrique et obtenir un devis gratuit."
        variant="orange"
      />
    </PageLayout>
  );
}
