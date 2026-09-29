import PageLayout from '../components/shared/PageLayout';
import CTASection, { CTAStrip } from '../components/shared/CTASection';
import FAQSection from '../components/shared/FAQSection';
import Breadcrumb from '../components/shared/Breadcrumb';
import { COMPANY } from '../data/company';

const NORMES_FAQS = [
  {
    question: 'Qu\'est-ce que la mise aux normes électriques ?',
    answer: 'La mise aux normes électriques consiste à mettre une installation électrique existante en conformité avec les normes en vigueur, notamment la norme NF C 15-100. Elle comprend généralement le remplacement ou l\'ajout de protections différentielles, la vérification de la mise à la terre, et la mise aux normes des circuits spécialisés. À ne pas confondre avec une certification officielle.',
  },
  {
    question: 'Comment savoir si mon installation électrique est aux normes ?',
    answer: 'Plusieurs signes indiquent une installation non conforme : prises sans mise à la terre (deux trous seulement), tableau électrique sans interrupteur différentiel de 30mA, absence de circuit spécialisé en cuisine ou salle de bains, câbles en aluminium visible, installation réalisée avant 1991. Un diagnostic électrique réalisé par un professionnel permettra de dresser un bilan complet.',
  },
  {
    question: 'La mise aux normes est-elle obligatoire ?',
    answer: 'La mise aux normes n\'est pas obligatoire pour les logements existants, sauf lors d\'une vente immobilière (diagnostic obligatoire si plus de 15 ans) ou lors d\'une demande d\'assurance. Cependant, elle est fortement recommandée pour des raisons de sécurité. Les propriétaires bailleurs peuvent également être tenus de garantir la sécurité des installations.',
  },
  {
    question: 'Quel est le coût d\'une mise aux normes électriques ?',
    answer: 'Le coût varie selon l\'ampleur des travaux nécessaires. Une mise aux normes partielle (remplacement tableau, ajout différentiel) peut coûter entre 500€ et 2000€. Une mise aux normes complète avec recâblage peut atteindre 5000€ à 10000€ pour une maison de taille moyenne. Contactez-nous pour un devis précis.',
  },
];

export default function MiseAuxNormesPage() {
  return (
    <PageLayout
      title="Mise aux normes électriques dans l'Eure (27) – Home Électricité Normandie"
      description="Mise aux normes électriques dans l'Eure (27) : sécurisation, mise en conformité NF C 15-100, diagnostic électrique. Devis gratuit. 06 29 51 89 35"
      canonical={`${COMPANY.siteUrl}/mise-aux-normes-electriques`}
    >
      <Breadcrumb items={[
        { label: 'Accueil', href: '/' },
        { label: 'Nos services', href: '/nos-services' },
        { label: 'Mise aux normes' },
      ]} />

      <section className="bg-gray-900 py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
             Mise aux normes — Eure (27)
          </div>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none mb-6">
            Mise aux normes<br />
            <span className="text-orange-400">électriques — Eure (27)</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Sécurisation et mise en conformité de votre installation électrique. Diagnostic, identification des anomalies, travaux de mise en sécurité dans tout l'Eure.
          </p>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-left max-w-xl mx-auto mb-6">
            <p className="text-orange-300 text-sm font-semibold mb-1"> Important</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Home Électricité Normandie réalise des travaux de mise en sécurité et de conformité de votre installation électrique selon les normes NF C 15-100. Nous n'assurons pas la délivrance de certificats de conformité officiels (CONSUEL) — ceux-ci sont émis par des organismes agréés indépendants après vérification.
            </p>
          </div>
          <CTAStrip />
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl text-gray-900 uppercase tracking-tight text-center mb-10">
            Signes d'une installation électrique dangereuse
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: '', sign: 'Prises sans mise à la terre', detail: 'Prises à 2 trous sans broche de terre — obligation depuis 1991' },
              { icon: '★', sign: 'Tableau électrique vétuste', detail: 'Fusibles à cartouche, fusibles à fusible, tableau très ancien' },
              { icon: '', sign: 'Pas de différentiel 30mA', detail: 'Protection obligatoire dans les salles de bains et cuisines' },
              { icon: '★', sign: 'Câbles en aluminium', detail: 'Câbles datant des années 60-80, plus utilisés en France' },
              { icon: '', sign: 'Prises qui chauffent', detail: 'Signe de connexions défectueuses ou de surcharge — urgence' },
              { icon: '★', sign: 'Disjoncteurs qui sautent', detail: 'Circuits surchargés ou en court-circuit à diagnostiquer' },
              { icon: '', sign: 'Absence de mise à la terre', detail: 'Toute l\'installation doit être reliée à la terre' },
              { icon: '★', sign: 'Câbles apparents mal protégés', detail: 'Câbles sans gaine ou gainettes non conformes' },
              { icon: '', sign: 'Installation antérieure à 1991', detail: 'Normes très différentes — vérification impérative' },
            ].map(s => (
              <div key={s.sign} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-lg flex-shrink-0">{s.icon}</span>
                <div>
                  <p className="text-gray-800 font-semibold text-sm">{s.sign}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
      <FAQSection faqs={NORMES_FAQS} title="Questions sur la mise aux normes électriques" />
      <CTASection
        title="Mise aux normes électriques dans l'Eure ?"
        subtitle="Contactez Home Électricité Normandie pour un diagnostic gratuit de votre installation électrique dans l'Eure (27)."
        variant="orange"
      />
    </PageLayout>
  );
}
