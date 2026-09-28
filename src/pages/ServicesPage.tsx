import { Link } from 'react-router-dom';
import PageLayout from '../components/shared/PageLayout';
import CTASection from '../components/shared/CTASection';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY, SERVICES } from '../data/company';

export default function ServicesPage() {
  return (
    <PageLayout
      title="Nos services électriques dans l'Eure (27) – Home Électricité Normandie"
      description="Tous nos services électriques dans l'Eure : dépannage, installation, rénovation, mise aux normes, tableau, éclairage, VMC, chauffage, domotique, borne IRVE. Devis gratuit."
      canonical={`${COMPANY.siteUrl}/nos-services`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Nos services' }]} />

      <section className="bg-zinc-950 bg-grid py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            Nos services<br />
            <span className="text-orange-400">électriques dans l'Eure</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Home Électricité Normandie couvre l'ensemble des prestations en électricité pour particuliers et professionnels dans l'Eure (27).
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(s => (
            <Link
              key={s.slug}
              to={s.pageSlug}
              className="group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/40 rounded-2xl p-6 transition-all"
            >
              <span className="text-4xl mb-4 block">{s.icon}</span>
              <h2 className="font-display font-bold text-white text-2xl uppercase tracking-tight mb-3 group-hover:text-orange-400 transition-colors">
                {s.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{s.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.keywords.slice(0, 3).map(k => (
                  <span key={k} className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">{k}</span>
                ))}
              </div>
              <p className="text-orange-400 text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform inline-block">
                Découvrir ce service →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title="Besoin d'un de nos services ?"
        subtitle="Contactez Home Électricité Normandie pour un devis gratuit. Intervention dans tout l'Eure (27)."
        variant="orange"
      />
    </PageLayout>
  );
}
