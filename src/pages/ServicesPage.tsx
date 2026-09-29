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

      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            Nos services<br />
            <span className="text-orange-400">électriques dans l'Eure</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Home Électricité Normandie couvre l'ensemble des prestations en électricité pour particuliers et professionnels dans l'Eure (27).
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(s => (
            <Link
              key={s.slug}
              to={s.pageSlug}
              className="group border border-gray-100 hover:border-orange-200 rounded-2xl overflow-hidden hover:shadow-md transition-all bg-white"
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
                <h2 className="font-display font-bold text-gray-900 text-xl uppercase tracking-tight mb-2 group-hover:text-orange-500 transition-colors">
                  {s.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <p className="text-orange-500 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                  Découvrir ce service →
                </p>
              </div>
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
