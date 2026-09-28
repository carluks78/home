import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY, WA_DEFAULT, SERVICES } from '../../data/company';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/98 shadow-lg shadow-black/40' : 'bg-zinc-950'
      } border-b border-zinc-800`}
    >
      {/* Top bar */}
      <div className="bg-orange-500 text-zinc-950 text-xs font-semibold py-1.5 px-4 text-center hidden md:block">
        ⚡ Électricien dans l'Eure (27) — Intervention rapide — Devis gratuit — Appelez le{' '}
        <a href={COMPANY.phoneUri} className="font-bold underline">{COMPANY.phone}</a>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" aria-label="Accueil Home Électricité Normandie">
          <div className="bg-white rounded-lg px-2.5 py-1.5">
            <img
              src="/logo.png"
              alt="Home Électricité Normandie"
              className="h-9 lg:h-10 w-auto"
              width="160"
              height="40"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          <Link to="/" className="nav-link px-3 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
            Accueil
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
              Nos services
              <svg className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-72 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl shadow-black/60 p-3 grid grid-cols-2 gap-1">
                {SERVICES.map(s => (
                  <Link
                    key={s.slug}
                    to={s.pageSlug}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                  >
                    <span>{s.icon}</span>
                    <span>{s.shortTitle}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/depannage-electricien" className="px-3 py-2 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors">
            🚨 Dépannage
          </Link>
          <Link to="/zones-intervention" className="px-3 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
            Zones
          </Link>
          <Link to="/a-propos" className="px-3 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
            À propos
          </Link>
          <Link to="/contact" className="px-3 py-2 text-sm text-zinc-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-[#25D366] hover:bg-[#20BA5C] text-white text-sm font-semibold rounded-lg transition-colors"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden xl:inline">WhatsApp</span>
          </a>
          <a
            href={COMPANY.phoneUri}
            className="flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold rounded-lg transition-all glow-orange-sm"
            aria-label={`Appeler ${COMPANY.phone}`}
          >
            <PhoneIcon className="w-4 h-4" />
            <span>{COMPANY.phone}</span>
          </a>
        </div>

        {/* Mobile phone + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={COMPANY.phoneUri}
            className="flex items-center gap-1.5 px-3 py-2 bg-orange-500 text-white text-sm font-bold rounded-lg"
            aria-label="Appeler"
          >
            <PhoneIcon className="w-4 h-4" />
            <span className="hidden sm:inline text-xs">{COMPANY.phone}</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-zinc-300 hover:text-white transition-colors"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 space-y-1">
          <Link to="/" className="block px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            Accueil
          </Link>
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
            >
              Nos services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="mt-1 pl-3 grid grid-cols-2 gap-1">
                {SERVICES.map(s => (
                  <Link
                    key={s.slug}
                    to={s.pageSlug}
                    className="flex items-center gap-2 px-2 py-2 text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                  >
                    <span>{s.icon}</span>
                    <span>{s.shortTitle}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/depannage-electricien" className="block px-3 py-2.5 text-sm font-semibold text-orange-400 hover:bg-zinc-800 rounded-lg transition-colors">
            🚨 Dépannage électrique
          </Link>
          <Link to="/zones-intervention" className="block px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            Zones d'intervention
          </Link>
          <Link to="/devis-electricien" className="block px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            Demander un devis
          </Link>
          <Link to="/rendez-vous" className="block px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            Prendre rendez-vous
          </Link>
          <Link to="/a-propos" className="block px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            À propos
          </Link>
          <Link to="/contact" className="block px-3 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors">
            Contact
          </Link>
          <div className="pt-3 flex gap-2">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-sm font-semibold rounded-xl"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
            <Link
              to="/devis-electricien"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-orange-500 text-white text-sm font-bold rounded-xl"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
