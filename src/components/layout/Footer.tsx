import { Link } from 'react-router-dom';
import { COMPANY, SERVICES, CITIES, WA_DEFAULT } from '../../data/company';
import { WhatsAppIcon } from './Header';

const topCities = ['evreux', 'pacy-sur-eure', 'vernon', 'louviers', 'bernay', 'les-andelys', 'gisors', 'pont-audemer', 'verneuil-avre-iton', 'val-de-reuil'];

export default function Footer() {
  const cities = topCities.map(s => CITIES.find(c => c.slug === s)).filter(Boolean);

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-block mb-4">
            <div className="bg-white rounded-lg px-2.5 py-1.5 inline-block">
              <img src="/logo.png" alt="Home Électricité Normandie" className="h-10 w-auto" />
            </div>
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            Électricien professionnel dans l'Eure (27) et Normandie. Installation, rénovation, dépannage électrique pour particuliers et professionnels.
          </p>
          <div className="space-y-2 text-sm">
            <a href={COMPANY.phoneUri} className="flex items-center gap-2 text-zinc-300 hover:text-orange-400 transition-colors">
              <PhoneIcon className="w-4 h-4 text-orange-400 flex-shrink-0" />
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-zinc-300 hover:text-orange-400 transition-colors">
              <MailIcon className="w-4 h-4 text-orange-400 flex-shrink-0" />
              {COMPANY.email}
            </a>
            <p className="flex items-start gap-2 text-zinc-400">
              <MapIcon className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
              {COMPANY.address.full}
            </p>
          </div>
          <div className="mt-4 text-xs text-zinc-500 space-y-0.5">
            <p>{COMPANY.hours.weekdays}</p>
            <p>{COMPANY.hours.saturday}</p>
            <p>{COMPANY.hours.sunday}</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display font-bold text-white text-lg uppercase tracking-wide mb-4">Nos services</h3>
          <ul className="space-y-2">
            {SERVICES.map(s => (
              <li key={s.slug}>
                <Link to={s.pageSlug} className="text-sm text-zinc-400 hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-xs">{s.icon}</span>
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h3 className="font-display font-bold text-white text-lg uppercase tracking-wide mb-4">Villes desservies</h3>
          <ul className="space-y-2">
            {cities.map(c => c && (
              <li key={c.slug}>
                <Link
                  to={`/electricien-${c.slug}`}
                  className="text-sm text-zinc-400 hover:text-orange-400 transition-colors"
                >
                  Électricien {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/zones-intervention" className="text-sm text-orange-400 hover:text-orange-300 transition-colors font-medium">
                → Toutes les villes
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display font-bold text-white text-lg uppercase tracking-wide mb-4">Liens rapides</h3>
          <ul className="space-y-2 mb-6">
            {[
              { to: '/devis-electricien', label: 'Demander un devis' },
              { to: '/rendez-vous', label: 'Prendre rendez-vous' },
              { to: '/depannage-electricien', label: 'Dépannage urgent' },
              { to: '/zones-intervention', label: 'Zones d\'intervention' },
              { to: '/realisations', label: 'Nos réalisations' },
              { to: '/blog', label: 'Conseils & guides' },
              { to: '/a-propos', label: 'À propos' },
              { to: '/contact', label: 'Contact' },
            ].map(l => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-zinc-400 hover:text-orange-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-2">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white text-sm font-semibold rounded-xl transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={COMPANY.phoneUri}
              className="flex items-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold rounded-xl transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500 text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY.legalName} — SIRET {COMPANY.siret} — {COMPANY.address.full}
          </p>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {[
              { to: '/mentions-legales', label: 'Mentions légales' },
              { to: '/politique-confidentialite', label: 'Confidentialité' },
              { to: '/cookies', label: 'Cookies' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
