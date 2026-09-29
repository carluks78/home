import { Link } from 'react-router-dom';
import PageLayout from '../components/shared/PageLayout';
import CTASection from '../components/shared/CTASection';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY, SERVICES } from '../data/company';

export default function AProposPage() {
  return (
    <PageLayout
      title="À propos – Home Électricité Normandie – Électricien Eure (27)"
      description="Home Électricité Normandie, électricien local dans l'Eure (27). Basé au Cormier. Électricité générale, dépannage, installation, rénovation pour particuliers et professionnels."
      canonical={`${COMPANY.siteUrl}/a-propos`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]} />

      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
              À propos de<br />
              <span className="text-orange-400">Home Électricité Normandie</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Électricien professionnel dans l'Eure (27) et Normandie
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-extrabold text-3xl text-gray-900 uppercase tracking-tight mb-6">
              Une entreprise locale<br />
              <span className="text-orange-400">ancrée dans l'Eure</span>
            </h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                <strong className="text-gray-700">Home Électricité Normandie</strong> est une entreprise d'électricité générale basée au Cormier, dans le département de l'Eure (27120). Nous intervenons pour les particuliers et les professionnels dans tout le département de l'Eure et en Normandie.
              </p>
              <p>
                Notre activité couvre l'ensemble des prestations en électricité : installation électrique, rénovation, mise aux normes, dépannage, remplacement de tableau électrique, installation d'éclairage, VMC, chauffage électrique, domotique et bornes de recharge IRVE.
              </p>
              <p>
                Notre implantation locale est un atout majeur : nous connaissons le territoire, le bâti normand spécifique (maisons en silex, à colombages, constructions d'après-guerre), et nous pouvons intervenir rapidement sur l'ensemble du département.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="font-display font-bold text-gray-900 text-xl uppercase mb-4">Informations légales</h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: 'Dénomination', value: COMPANY.legalName },
                  { label: 'SIRET', value: COMPANY.siret },
                  { label: 'Adresse', value: COMPANY.address.full },
                  { label: 'Téléphone', value: COMPANY.phone },
                  { label: 'Email', value: COMPANY.email },
                  { label: 'Zone d\'intervention', value: COMPANY.zone },
                ].map(i => (
                  <div key={i.label} className="flex gap-2">
                    <span className="text-gray-500 flex-shrink-0 w-32">{i.label} :</span>
                    <span className="text-gray-700">{i.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=600&h=350&fit=crop&auto=format"
                alt="Électricien professionnel au travail dans l'Eure"
                className="w-full h-52 object-cover"
                loading="lazy"
                width="600"
                height="350"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl text-gray-900 uppercase tracking-tight text-center mb-10">
            Nos valeurs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '', title: 'Sécurité', desc: 'La sécurité de votre installation électrique est notre priorité absolue. Chaque intervention respecte les normes NF C 15-100.' },
              { icon: '', title: 'Transparence', desc: 'Devis détaillé et gratuit avant toute intervention. Aucune surprise sur la facture. Tarifs honnêtes.' },
              { icon: '', title: 'Local', desc: 'Électricien de l\'Eure, pour l\'Eure. Nous connaissons le territoire et ses spécificités architecturales.' },
              { icon: '', title: 'Qualité', desc: 'Travail soigné, matériel de qualité, finitions impeccables. Chaque client mérite le meilleur.' },
            ].map(v => (
              <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                <span className="text-4xl mb-3 block">{v.icon}</span>
                <h3 className="font-display font-bold text-gray-900 text-xl uppercase mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl text-gray-900 uppercase tracking-tight text-center mb-10">
            Nos services
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map(s => (
              <Link
                key={s.slug}
                to={s.pageSlug}
                className="group bg-gray-50 hover:bg-gray-100 border border-gray-100 hover:border-orange-500/30 rounded-xl p-4 transition-all"
              >
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <p className="text-white text-sm font-semibold group-hover:text-orange-400 transition-colors">{s.shortTitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Contactez Home Électricité Normandie"
        subtitle="Devis gratuit, intervention rapide dans tout l'Eure (27). Particuliers et professionnels."
        variant="orange"
      />
    </PageLayout>
  );
}
