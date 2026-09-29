import { Link } from 'react-router-dom';
import { COMPANY, WA_DEFAULT } from '../../data/company';
import { WhatsAppIcon } from './Header';

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-100 flex">
      <a
        href={COMPANY.phoneUri}
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-white hover:bg-gray-50 transition-colors"
        aria-label="Appeler"
      >
        <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="text-[10px] font-semibold text-gray-500">Appeler</span>
      </a>
      <div className="w-px bg-gray-100" />
      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-white hover:bg-gray-50 transition-colors"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
        <span className="text-[10px] font-semibold text-gray-500">WhatsApp</span>
      </a>
      <div className="w-px bg-gray-100" />
      <Link
        to="/rendez-vous"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 bg-orange-500 text-white hover:bg-orange-400 transition-colors"
        aria-label="Rendez-vous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-[10px] font-bold">RDV</span>
      </Link>
    </div>
  );
}
