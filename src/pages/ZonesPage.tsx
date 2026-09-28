import { Link } from 'react-router-dom';
import PageLayout from '../components/shared/PageLayout';
import CTASection from '../components/shared/CTASection';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY, CITIES, CITY_SECTORS } from '../data/company';

export default function ZonesPage() {
  return (
    <PageLayout
      title="Zones d'intervention – Électricien dans l'Eure (27) – Home Électricité Normandie"
      description="Home Électricité Normandie intervient dans tout le département de l'Eure (27) : Évreux, Pacy-sur-Eure, Vernon, Louviers, Bernay et toutes les communes normandes. ☎ 06 29 51 89 35"
      canonical={`${COMPANY.siteUrl}/zones-intervention`}
    >
      <Breadcrumb items={[
        { label: 'Accueil', href: '/' },
        { label: 'Zones d\'intervention' },
      ]} />

      <section className="bg-zinc-950 bg-grid py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            📍 Eure (27) — Normandie
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mb-6">
            Zones<br />
            <span className="text-orange-400">d'intervention</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Home Électricité Normandie, basé au Cormier (27120), intervient dans tout le département de l'Eure (27) et les départements limitrophes pour tous vos travaux d'électricité.
          </p>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-12 px-4 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden h-64 flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl mb-3">🗺️</p>
              <p className="font-display font-bold text-white text-xl uppercase">Eure (27) — Normandie</p>
              <p className="text-zinc-400 text-sm mt-1">Intervention dans tout le département de l'Eure</p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="w-3 h-3 rounded-full bg-orange-500 inline-block" />
                <span className="text-zinc-400 text-xs">Le Cormier — Siège de Home Électricité Normandie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl text-white uppercase tracking-tight text-center mb-10">
            Toutes les communes desservies
          </h2>
          <div className="space-y-10">
            {CITY_SECTORS.map(sector => {
              const sectorCities = sector.cities.map(s => CITIES.find(c => c.slug === s)).filter(Boolean);
              return (
                <div key={sector.id}>
                  <h3 className="font-display font-bold text-orange-400 text-xl uppercase tracking-wide mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-orange-500 inline-block" />
                    {sector.label}
                    <span className="w-8 h-px bg-orange-500 inline-block" />
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {sectorCities.map(c => c && (
                      <Link
                        key={c.slug}
                        to={`/electricien-${c.slug}`}
                        className="group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/30 rounded-xl px-4 py-3 transition-all"
                      >
                        <p className="text-white text-sm font-semibold group-hover:text-orange-400 transition-colors">
                          {c.name}
                        </p>
                        <p className="text-zinc-500 text-xs">
                          {c.distanceKm === 0 ? 'Siège' : `~${c.distanceKm} km`}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
            <p className="text-zinc-300 text-sm leading-relaxed">
              Vous ne trouvez pas votre commune ? Home Électricité Normandie intervient dans tout le département de l'Eure et peut se déplacer dans les communes limitrophes. <strong className="text-white">Contactez-nous</strong> pour vérifier la faisabilité d'une intervention dans votre secteur.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Votre commune dans l'Eure ?"
        subtitle="Home Électricité Normandie intervient dans tout le département de l'Eure pour vos travaux électriques. Devis gratuit, intervention rapide."
        variant="orange"
      />
    </PageLayout>
  );
}
