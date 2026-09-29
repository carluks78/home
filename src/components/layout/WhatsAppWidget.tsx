import { useState } from 'react';
import { COMPANY, WA_DEFAULT, WA_DEPANNAGE, WA_DEVIS, WA_RDV } from '../../data/company';
import { WhatsAppIcon } from './Header';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 md:bottom-6 z-40 flex flex-col items-end gap-2">
      {/* Panel */}
      {open && (
        <div className="w-72 bg-gray-50 border border-gray-200 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Home Électricité Normandie</p>
              <p className="text-green-300 text-xs">Réponse rapide</p>
            </div>
          </div>
          <div className="p-3 space-y-2">
            <p className="text-gray-500 text-xs px-1 mb-3">Que puis-je faire pour vous ?</p>
            <WAOption
              href={WA_DEPANNAGE}
              icon=""
              label="Dépannage urgent"
              sub="Panne, disjoncteur, urgence"
            />
            <WAOption
              href={WA_DEVIS}
              icon=""
              label="Demander un devis"
              sub="Travaux, installation, rénovation"
            />
            <WAOption
              href={WA_RDV}
              icon="📅"
              label="Prendre rendez-vous"
              sub="Planifier une intervention"
            />
            <WAOption
              href={WA_DEFAULT}
              icon=""
              label="Renseignements"
              sub="Question sur nos services"
            />
          </div>
          <div className="px-3 pb-3">
            <a
              href={`tel:${COMPANY.whatsappNumber}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-xl transition-colors"
              onClick={() => setOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler {COMPANY.phone}
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] text-white shadow-lg shadow-black/40 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        aria-label="Contacter via WhatsApp"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <WhatsAppIcon className="w-7 h-7" />
        )}
      </button>

      {!open && (
        <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap pointer-events-none">
          Écrivez-nous
        </div>
      )}
    </div>
  );
}

function WAOption({ href, icon, label, sub }: { href: string; icon: string; label: string; sub: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
    >
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-gray-800 text-sm font-semibold leading-none mb-0.5">{label}</p>
        <p className="text-gray-500 text-xs">{sub}</p>
      </div>
    </a>
  );
}
