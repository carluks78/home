import { Link } from 'react-router-dom';
import PageLayout from '../components/shared/PageLayout';
import CTASection from '../components/shared/CTASection';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY } from '../data/company';

const BLOG_TOPICS = [
  { slug: 'prix-renovation-electrique', title: 'Combien coûte une rénovation électrique complète ?', category: 'Prix & Devis', excerpt: 'Le coût d\'une rénovation électrique dépend de nombreux facteurs. Voici ce qu\'il faut savoir avant de demander un devis.', icon: '💰', date: 'À venir' },
  { slug: 'disjoncteur-qui-saute', title: 'Pourquoi mon disjoncteur saute-t-il ?', category: 'Dépannage', excerpt: 'Un disjoncteur qui saute régulièrement n\'est pas anodin. Découvrez les causes principales et les solutions.', icon: '⚡', date: 'À venir' },
  { slug: 'prix-tableau-electrique', title: 'Prix d\'un remplacement de tableau électrique en 2024', category: 'Prix & Devis', excerpt: 'Remplacement de tableau électrique : tout ce que vous devez savoir sur le coût, la durée et les étapes de l\'intervention.', icon: '📋', date: 'À venir' },
  { slug: 'installation-borne-recharge', title: 'Installer une borne de recharge à domicile : guide complet', category: 'Installation', excerpt: 'Voiture électrique : comment installer une borne de recharge chez vous dans l\'Eure ? Coût, normes, aides financières.', icon: '🚗', date: 'À venir' },
  { slug: 'normes-electriques-nf-c-15-100', title: 'Comprendre les normes électriques NF C 15-100', category: 'Normes & Sécurité', excerpt: 'La norme NF C 15-100 encadre les installations électriques en France. Ce qu\'elle impose et pourquoi c\'est important.', icon: '📕', date: 'À venir' },
  { slug: 'renovation-maison-ancienne-electricite', title: 'Rénover l\'électricité d\'une maison normande ancienne', category: 'Rénovation', excerpt: 'Les maisons normandes ont des spécificités architecturales qui nécessitent une approche adaptée pour la rénovation électrique.', icon: '🏠', date: 'À venir' },
  { slug: 'eclairage-led-guide', title: 'Tout savoir sur l\'éclairage LED pour votre maison', category: 'Éclairage', excerpt: 'L\'éclairage LED : économies d\'énergie, choix des ampoules, installation. Guide complet pour optimiser votre éclairage.', icon: '💡', date: 'À venir' },
  { slug: 'vmc-installation-guide', title: 'VMC : pourquoi et comment l\'installer dans votre logement ?', category: 'VMC', excerpt: 'La ventilation mécanique contrôlée est obligatoire dans les logements neufs. Mais est-elle utile dans l\'ancien ?', icon: '🌬️', date: 'À venir' },
  { slug: 'domotique-maison-connectee', title: 'Domotique : transformer votre maison en maison connectée', category: 'Domotique', excerpt: 'Éclairage intelligent, volets automatiques, thermostat connecté : les possibilités de la domotique pour votre maison.', icon: '📱', date: 'À venir' },
];

export default function BlogPage() {
  return (
    <PageLayout
      title="Conseils & guides électriques – Home Électricité Normandie – Eure (27)"
      description="Conseils, guides et informations sur l'électricité dans l'Eure : prix des travaux, dépannage, normes, rénovation, installation. Home Électricité Normandie."
      canonical={`${COMPANY.siteUrl}/blog`}
    >
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Conseils & guides' }]} />

      <section className="bg-zinc-950 bg-grid py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight mb-4">
            Conseils &<br />
            <span className="text-orange-400">guides électriques</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Informations, conseils et guides pratiques sur l'électricité pour les particuliers et professionnels de l'Eure.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_TOPICS.map(post => (
              <article key={post.slug} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{post.icon}</span>
                    <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h2 className="font-display font-bold text-white text-lg uppercase tracking-tight mb-3 group-hover:text-orange-400 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600 text-xs">{post.date}</span>
                    <span className="text-orange-400 text-xs font-semibold">À paraître →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 bg-zinc-900 border border-orange-500/20 rounded-2xl p-6 text-center">
            <p className="text-orange-400 font-display font-bold text-xl uppercase mb-2">
              📖 Section en cours de rédaction
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-lg mx-auto">
              Nos guides et articles de conseil sont en cours de rédaction. Revenez bientôt pour des contenus détaillés sur l'électricité dans l'Eure.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Une question sur l'électricité ?"
        subtitle="Contactez directement Home Électricité Normandie. Nous répondons à toutes vos questions et proposons des devis gratuits dans toute l'Eure."
        variant="orange"
      />
    </PageLayout>
  );
}
