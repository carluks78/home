import { Link } from 'react-router-dom';
import { COMPANY, WA_DEFAULT, WA_DEPANNAGE } from '../../data/company';
import { WhatsAppIcon } from '../layout/Header';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: 'orange' | 'dark' | 'emergency';
}

export default function CTASection({
  title = 'Besoin d\'un électricien dans l\'Eure ?',
  subtitle = 'Home Électricité Normandie intervient rapidement pour vos travaux électriques, dépannages et installations. Devis gratuit.',
  variant = 'orange',
}: CTASectionProps) {
  const bg = variant === 'orange' ? 'bg-orange-500' : variant === 'emergency' ? 'bg-red-600' : 'bg-gray-900';
  const textMain = variant === 'dark' ? 'text-white' : 'text-white';
  const textSub = variant === 'dark' ? 'text-gray-400' : 'text-orange-100';

  return (
    <section className={`${bg} py-12 px-4`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`font-display font-extrabold text-3xl md:text-4xl uppercase tracking-tight ${textMain} mb-3`}>
          {title}
        </h2>
        <p className={`${textSub} text-lg mb-8 max-w-2xl mx-auto`}>{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={COMPANY.phoneUri}
            className={`flex items-center gap-2 px-6 py-3.5 font-bold text-base rounded-xl transition-all shadow-lg ${
              variant === 'dark'
                ? 'bg-orange-500 hover:bg-orange-400 text-white glow-orange-sm'
                : 'bg-gray-900 hover:bg-gray-800 text-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {COMPANY.phone}
          </a>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold text-base rounded-xl transition-all shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp
          </a>
          <Link
            to="/rendez-vous"
            className={`flex items-center gap-2 px-6 py-3.5 font-bold text-base rounded-xl transition-all border-2 ${
              variant === 'dark'
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Rendez-vous
          </Link>
          <Link
            to="/devis-electricien"
            className={`flex items-center gap-2 px-6 py-3.5 font-bold text-base rounded-xl transition-all border-2 ${
              variant === 'dark'
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            Devis gratuit
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CTAStrip({ emergencyMode = false }: { emergencyMode?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 py-4 px-4 ${emergencyMode ? 'bg-red-600/20 border-y border-red-600/30' : 'bg-gray-100 border-y border-gray-200'}`}>
      <a
        href={COMPANY.phoneUri}
        className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm rounded-xl transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Appeler {COMPANY.phone}
      </a>
      <a
        href={emergencyMode ? WA_DEPANNAGE : WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold text-sm rounded-xl transition-colors"
      >
        <WhatsAppIcon className="w-4 h-4" />
        {emergencyMode ? 'Dépannage WhatsApp' : 'WhatsApp'}
      </a>
      {!emergencyMode && (
        <Link
          to="/devis-electricien"
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-bold text-sm rounded-xl transition-colors"
        >
          Devis gratuit
        </Link>
      )}
    </div>
  );
}
