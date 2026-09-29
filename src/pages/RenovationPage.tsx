import PageLayout from '../components/shared/PageLayout';
import CTASection, { CTAStrip } from '../components/shared/CTASection';
import FAQSection from '../components/shared/FAQSection';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY } from '../data/company';

const RENOV_FAQS = [
  {
    question: 'Quand faut-il rénover l\'installation électrique d\'une maison ?',
    answer: 'Il est fortement recommandé de rénover une installation électrique datant de plus de 20-25 ans. Les signes nécessitant une rénovation urgente : disjoncteurs qui sautent fréquemment, prises sans mise à la terre, tableau vétuste, câbles en aluminium, odeur de brûlé, installation sans différentiel. Une rénovation est aussi recommandée avant toute mise en vente ou location.',
  },
  {
    question: 'Combien coûte une rénovation électrique complète ?',
    answer: 'Le coût d\'une rénovation électrique varie selon la superficie du logement, l\'état de l\'installation existante et les travaux à réaliser. Une rénovation complète d\'une maison de 100m² peut coûter entre 3 000€ et 8 000€. Contactez-nous pour un devis gratuit et précis.',
  },
  {
    question: 'Peut-on vivre dans la maison pendant une rénovation électrique ?',
    answer: 'Dans la plupart des cas, il est possible de rester dans le logement pendant la rénovation électrique, avec quelques contraintes (coupures ponctuelles d\'électricité). Nous planifions les travaux pour minimiser les perturbations. Pour une rénovation complète, il peut être préférable de prévoir un hébergement de quelques jours.',
  },
  {
    question: 'La rénovation électrique est-elle obligatoire lors d\'une vente ?',
    answer: 'Lors d\'une vente, un diagnostic électrique est obligatoire si l\'installation a plus de 15 ans. Ce diagnostic n\'oblige pas à réaliser des travaux, mais en cas d\'anomalies, l\'acheteur peut renégocier le prix. Il est dans l\'intérêt du vendeur de rénover l\'installation pour valoriser son bien et rassurer les acheteurs.',
  },
];

export default function RenovationPage() {
  return (
    <PageLayout
      title="Rénovation électrique dans l'Eure (27) – Home Électricité Normandie"
      description="Rénovation électrique dans l'Eure (27) : remise aux normes, remplacement tableau, câblage. Maisons anciennes et appartements. Devis gratuit. 06 29 51 89 35"
      canonical={`${COMPANY.siteUrl}/renovation-electrique`}
    >
      <Breadcrumb items={[
        { label: 'Accueil', href: '/' },
        { label: 'Nos services', href: '/nos-services' },
        { label: 'Rénovation électrique' },
      ]} />

      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
             Rénovation électrique — Eure (27)
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mb-6">
            Rénovation électrique<br />
            <span className="text-orange-400">dans l'Eure (27)</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Modernisation et remise aux normes de votre installation électrique dans l'Eure. Maisons anciennes, appartements, locaux professionnels.
          </p>
          <CTAStrip />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 uppercase tracking-tight mb-6">
                Rénovation électrique :<br />
                <span className="text-orange-400">sécurité & modernité</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                Une installation électrique vieillissante peut être dangereuse (risque d'incendie, d'électrocution) et peu économique. Home Électricité Normandie vous accompagne dans la rénovation complète ou partielle de votre installation dans toute l'Eure.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Remplacement du tableau électrique', desc: 'Mise aux normes avec disjoncteurs différentiels modernes, interrupteur différentiel de tête.' },
                  { title: 'Remplacement du câblage', desc: 'Remplacement des câbles en aluminium ou vétustes par des câbles cuivre de section adaptée.' },
                  { title: 'Remplacement des prises et interrupteurs', desc: 'Installation de prises avec terre, prises USB, interrupteurs modernes.' },
                  { title: 'Ajout de circuits spécialisés', desc: 'Création de circuits cuisine, salle de bains, chauffage selon les normes NF C 15-100.' },
                  { title: 'Installation VMC', desc: 'Mise en place ou remplacement de la ventilation mécanique contrôlée.' },
                  { title: 'Mise à la terre', desc: 'Vérification et mise en place de la mise à la terre sur l\'ensemble de l\'installation.' },
                ].map(i => (
                  <div key={i.title} className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <span className="text-orange-400 font-bold text-lg flex-shrink-0">✓</span>
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">{i.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{i.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1660330589693-99889d60181e?w=600&h=400&fit=crop&auto=format"
                  alt="Rénovation électrique — tableau électrique dans une maison normande"
                  className="w-full h-56 object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="font-display font-bold text-gray-900 text-xl uppercase mb-4">Maisons normandes anciennes</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Les maisons normandes construites avant les années 1990 présentent souvent des installations électriques en aluminium, sans différentiel ou avec mise à la terre absente. Ces installations représentent un risque réel. Une rénovation complète est souvent nécessaire.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Home Électricité Normandie est spécialisé dans la rénovation électrique des maisons normandes de l'Eure, avec une connaissance précise des contraintes locales : maisons en silex, combles non isolés, caves humides, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
      <FAQSection faqs={RENOV_FAQS} title="Questions sur la rénovation électrique" />
      <CTASection
        title="Rénover votre installation électrique dans l'Eure ?"
        subtitle="Demandez un devis gratuit à Home Électricité Normandie. Intervention dans tout le département de l'Eure (27)."
        variant="orange"
      />
    </PageLayout>
  );
}
