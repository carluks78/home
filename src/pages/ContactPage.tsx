import PageLayout from '../components/shared/PageLayout';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY, WA_DEFAULT, WA_DEVIS, WA_RDV } from '../data/company';
import { WhatsAppIcon } from '../components/layout/Header';

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact – Home Électricité Normandie – Électricien Eure (27)"
      description="Contactez Home Électricité Normandie : 06 29 51 89 35 – berthou.jerome@gmail.com – 7 rue de l'Église, 27120 Le Cormier. WhatsApp, téléphone, formulaire."
      canonical={`${COMPANY.siteUrl}/contact`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]} />

      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            Contactez-nous
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            Électricien dans l'Eure (27) — Réponse rapide par téléphone ou WhatsApp
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div>
            <h2 className="font-display font-bold text-gray-900 text-2xl uppercase mb-8">Nos coordonnées</h2>
            <div className="space-y-5">
              <ContactCard icon="" title="Téléphone" href={COMPANY.phoneUri} linkLabel={COMPANY.phone}>
                Appel direct — disponible Lun-Sam
              </ContactCard>
              <ContactCard icon="" title="WhatsApp" href={WA_DEFAULT} linkLabel="Écrire sur WhatsApp" external>
                Message ou vocale — réponse rapide
              </ContactCard>
              <ContactCard icon="" title="Email" href={`mailto:${COMPANY.email}`} linkLabel={COMPANY.email} external>
                Pour les demandes non urgentes
              </ContactCard>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <p className="text-2xl mb-2"></p>
                <p className="text-gray-800 font-semibold text-sm mb-1">Adresse</p>
                <p className="text-gray-500 text-sm">{COMPANY.address.full}</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <p className="text-2xl mb-2"></p>
                <p className="text-gray-800 font-semibold text-sm mb-2">Horaires</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>{COMPANY.hours.weekdays}</p>
                  <p>{COMPANY.hours.saturday}</p>
                  <p className="text-orange-400">{COMPANY.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick contact options */}
          <div>
            <h2 className="font-display font-bold text-gray-900 text-2xl uppercase mb-8">Contactez-nous maintenant</h2>
            <div className="space-y-4">
              <a
                href={COMPANY.phoneUri}
                className="flex items-center gap-4 p-5 bg-orange-500 hover:bg-orange-400 text-white rounded-2xl transition-all group w-full"
              >
                <svg className="w-8 h-8 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-bold text-lg">{COMPANY.phone}</p>
                  <p className="text-orange-100 text-sm">Appeler maintenant</p>
                </div>
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-2xl transition-all w-full"
              >
                <WhatsAppIcon className="w-8 h-8 flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg">WhatsApp</p>
                  <p className="text-green-100 text-sm">Renseignements & devis</p>
                </div>
              </a>
              <a
                href={WA_DEVIS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-100 hover:bg-gray-200 text-white rounded-2xl border border-gray-200 transition-all w-full"
              >
                <span className="text-3xl"></span>
                <div>
                  <p className="font-bold text-lg">Demander un devis</p>
                  <p className="text-gray-500 text-sm">Via WhatsApp — devis gratuit</p>
                </div>
              </a>
              <a
                href={WA_RDV}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-gray-100 hover:bg-gray-200 text-white rounded-2xl border border-gray-200 transition-all w-full"
              >
                <span className="text-3xl"></span>
                <div>
                  <p className="font-bold text-lg">Prendre rendez-vous</p>
                  <p className="text-gray-500 text-sm">Via WhatsApp — réponse rapide</p>
                </div>
              </a>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <p className="text-gray-800 font-semibold text-sm mb-1"> {COMPANY.legalName}</p>
              <p className="text-gray-500 text-xs">SIRET : {COMPANY.siret}</p>
              <p className="text-gray-500 text-xs mt-0.5">Zone d'intervention : {COMPANY.zone}</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function ContactCard({ icon, title, href, linkLabel, children, external }: {
  icon: string; title: string; href: string; linkLabel: string; children: React.ReactNode; external?: boolean;
}) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <p className="text-gray-800 font-semibold text-sm mb-0.5">{title}</p>
          <p className="text-gray-500 text-xs mb-2">{children}</p>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="text-orange-400 hover:text-orange-300 font-semibold text-sm transition-colors"
          >
            {linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
