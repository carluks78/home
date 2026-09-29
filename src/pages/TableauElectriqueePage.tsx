import ServiceDetailTemplate from '../components/shared/ServiceDetailTemplate';
import { COMPANY } from '../data/company';

const ZONES = [
  'Évreux', 'Pacy-sur-Eure', 'Vernon', 'Louviers', 'Val-de-Reuil',
  'Les Andelys', 'Gisors', 'Pont-Audemer', 'Bernay', 'Verneuil-sur-Avre',
  'Breteuil', 'Conches-en-Ouche', 'Le Cormier', 'Rugles', 'L\'Aigle',
];

export default function TableauElectriqueePage() {
  return (
    <ServiceDetailTemplate data={{
      seoTitle: "Tableau électrique Eure (27) — Remplacement & mise aux normes – Home Électricité Normandie",
      seoDescription: "Remplacement et mise aux normes de tableaux électriques dans l'Eure (27). Disjoncteurs différentiels, protection NF C 15-100. Devis gratuit. 06 29 51 89 35",
      canonical: `${COMPANY.siteUrl}/tableau-electrique`,
      breadcrumb: "Tableau électrique",
      h1: "Tableau électrique",
      h1Accent: "dans l'Eure (27)",
      intro: "Remplacement, mise aux normes et installation de tableaux électriques pour particuliers et professionnels dans toute l'Eure. Conformité NF C 15-100 garantie.",
      heroImg: '/images/img-06.jpg',
      heroImgAlt: "Tableau électrique avec disjoncteurs différentiels — Eure (27)",
      sectionTitle: "Remplacement de tableau électrique",
      sectionImg: '/images/img-06.jpg',
      sectionImgAlt: "Tableau électrique neuf — Home Électricité Normandie Eure",
      sectionIntro: "Un tableau électrique vétuste représente un risque d'incendie et de surtension. Home Électricité Normandie remplace votre tableau dans les règles de l'art.",
      points: [
        "Disjoncteur de branchement conforme aux normes Enedis",
        "Interrupteur différentiel de tête 500 mA type A",
        "Disjoncteurs différentiels 30 mA par groupe de circuits",
        "Circuits spécialisés cuisine, salle de bains, chauffage",
        "Mise à la terre vérifiée et certifiée",
        "Étiquetage complet de tous les circuits",
        "Attestation de conformité sur demande",
      ],
      sectionPoints: [],
      zones: ZONES,
      faqs: [
        {
          question: "Quand faut-il remplacer un tableau électrique ?",
          answer: "Un tableau électrique doit être remplacé s'il date de plus de 20-25 ans, s'il ne comporte pas de disjoncteurs différentiels 30 mA, si des disjoncteurs sautent fréquemment, ou en cas de traces de brûlure ou d'odeur suspecte.",
        },
        {
          question: "Quel est le coût d'un remplacement de tableau électrique dans l'Eure ?",
          answer: "Le coût varie selon la puissance du branchement et le nombre de circuits. Comptez entre 800 € et 2 500 € pour un logement standard. Un devis gratuit est fourni sur demande.",
        },
        {
          question: "Faut-il couper l'électricité pour changer le tableau ?",
          answer: "Oui, l'intervention nécessite une coupure générale. Enedis intervient si besoin pour le disjoncteur de branchement. Nos interventions sont planifiées pour minimiser la gêne.",
        },
        {
          question: "Le remplacement de tableau est-il obligatoire pour vendre un logement ?",
          answer: "Le diagnostic électrique DPE identifie les anomalies. Bien que non obligatoire pour vendre, un tableau non conforme est signalé et peut dévaluer le bien ou bloquer une vente. Nous réalisons la mise aux normes rapidement.",
        },
      ],
      ctaTitle: "Besoin d'un nouveau tableau électrique dans l'Eure ?",
      ctaSubtitle: "Devis gratuit sous 24h. Home Électricité Normandie intervient rapidement dans tout le département.",
    }} />
  );
}
