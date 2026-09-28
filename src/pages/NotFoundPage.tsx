import { Link } from 'react-router-dom';
import PageLayout from '../components/shared/PageLayout';
import { COMPANY } from '../data/company';

export default function NotFoundPage() {
  return (
    <PageLayout title="Page introuvable – Home Électricité Normandie">
      <section className="py-24 px-4 bg-zinc-950 text-center">
        <p className="text-8xl mb-6">⚡</p>
        <h1 className="font-display font-black text-5xl text-white uppercase tracking-tight mb-4">
          Panne 404
        </h1>
        <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">
          Cette page est introuvable. Pas de panique — nos électriciens peuvent réparer à peu près tout, mais pas les liens cassés !
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/" className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-colors">
            Retour à l'accueil
          </Link>
          <a href={COMPANY.phoneUri} className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl border border-zinc-700 transition-colors">
            {COMPANY.phone}
          </a>
          <Link to="/contact" className="px-6 py-3 border-2 border-zinc-700 text-zinc-300 hover:border-orange-500 hover:text-orange-400 font-semibold rounded-xl transition-colors">
            Contact
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
