import PageLayout from '../components/shared/PageLayout';
import CTASection from '../components/shared/CTASection';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY, WA_DEFAULT } from '../data/company';

export default function RealisationsPage() {
  return (
    <PageLayout
      title="Réalisations – Home Électricité Normandie – Électricien Eure (27)"
      description="Découvrez les réalisations de Home Électricité Normandie : installations, rénovations et dépannages électriques dans l'Eure (27)."
      canonical={`${COMPANY.siteUrl}/realisations`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Réalisations' }]} />

      <section className="bg-zinc-950 bg-grid py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            Nos réalisations
          </h1>
          <p className="text-zinc-400 text-lg">
            Retrouvez quelques exemples de nos interventions électriques dans l'Eure (27).
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          {/* Placeholder for future projects */}
          <div className="bg-zinc-900 border border-dashed border-zinc-700 rounded-2xl p-12 text-center">
            <p className="text-5xl mb-4">📷</p>
            <h2 className="font-display font-bold text-white text-2xl uppercase mb-3">Photos de chantiers à venir</h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto mb-6">
              Cette section est réservée aux photos de nos réalisations. Les photos de nos chantiers dans l'Eure seront ajoutées prochainement : installations de tableaux électriques, rénovations complètes, bornes de recharge, etc.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-colors"
            >
              Nous contacter pour plus d'informations
            </a>
          </div>

          {/* What we do */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: 'Installation complète', desc: 'Installation électrique de maisons neuves et rénovées dans l\'Eure', icon: '🔧' },
              { type: 'Tableau électrique', desc: 'Remplacement et mise aux normes de tableaux électriques', icon: '⚡' },
              { type: 'Rénovation', desc: 'Remise aux normes complète d\'installations électriques vétustes', icon: '🏠' },
              { type: 'Éclairage LED', desc: 'Installation d\'éclairages intérieurs et extérieurs en LED', icon: '💡' },
              { type: 'Borne IRVE', desc: 'Installation de bornes de recharge pour véhicules électriques', icon: '🚗' },
              { type: 'Dépannage', desc: 'Résolution de pannes électriques dans tout l\'Eure', icon: '🔴' },
            ].map(r => (
              <div key={r.type} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <span className="text-3xl mb-3 block">{r.icon}</span>
                <h3 className="font-display font-bold text-white text-lg uppercase mb-2">{r.type}</h3>
                <p className="text-zinc-400 text-sm">{r.desc}</p>
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
