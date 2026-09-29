import ServiceDetailTemplate from '../components/shared/ServiceDetailTemplate';
import { COMPANY } from '../data/company';

const ZONES = [
  'Évreux', 'Pacy-sur-Eure', 'Vernon', 'Louviers', 'Val-de-Reuil',
  'Les Andelys', 'Gisors', 'Pont-Audemer', 'Bernay', 'Verneuil-sur-Avre',
  'Breteuil', 'Conches-en-Ouche', 'Le Cormier', 'Rugles', 'L\'Aigle',
];

export default function VmcPage() {
  return (
    <ServiceDetailTemplate data={{
      seoTitle: "VMC Eure (27) — Installation ventilation mécanique contrôlée – Home Électricité Normandie",
      seoDescription: "Installation et remplacement de VMC dans l'Eure (27). VMC simple flux, double flux hygroréglable. Qualité de l'air, économies d'énergie. Devis gratuit.",
      canonical: `${COMPANY.siteUrl}/vmc`,
      breadcrumb: "VMC",
      h1: "Installation VMC",
      h1Accent: "Ventilation dans l'Eure (27)",
      intro: "Installation, remplacement et entretien de VMC (ventilation mécanique contrôlée) dans toute l'Eure. Qualité de l'air améliorée, humidité maîtrisée, économies d'énergie.",
      heroImg: '/images/img-10.jpg',
      heroImgAlt: "Installation électrique intérieure — VMC dans l'Eure (27)",
      sectionTitle: "VMC simple et double flux",
      sectionImg: '/images/img-10.jpg',
      sectionImgAlt: "Installation VMC dans une maison normande — Eure",
      sectionIntro: "Obligatoire dans les logements depuis 1982, la VMC assure un renouvellement constant de l'air et prévient les problèmes d'humidité fréquents dans les maisons normandes.",
      points: [
        "VMC simple flux auto-réglable ou hygroréglable A/B",
        "VMC double flux avec récupérateur de chaleur",
        "Pose du caisson en combles ou garage",
        "Pose des bouches d'extraction (salle de bains, WC, cuisine)",
        "Gaines souples ou rigides selon configuration",
        "Raccordement électrique au tableau",
        "Réglage et mise en service inclus",
      ],
      sectionPoints: [],
      zones: ZONES,
      faqs: [
        {
          question: "Quelle VMC choisir pour une maison normande ?",
          answer: "Pour les maisons normandes anciennes souvent sujettes à l'humidité, la VMC hygroréglable B est idéale : elle adapte le débit d'extraction au taux d'humidité des pièces, réduisant les consommations tout en évitant condensation et moisissures.",
        },
        {
          question: "La VMC est-elle obligatoire lors d'une rénovation ?",
          answer: "Oui, lors de travaux de rénovation importants (isolation, remplacement des fenêtres), l'installation d'une VMC devient obligatoire car l'étanchéité accrue nécessite une ventilation mécanique pour maintenir une qualité d'air correcte.",
        },
        {
          question: "Combien coûte l'installation d'une VMC dans l'Eure ?",
          answer: "Une VMC simple flux hygroréglable installée dans une maison individuelle coûte entre 600 et 1 200 €. La VMC double flux revient entre 2 000 et 4 000 €. Devis gratuit selon votre configuration.",
        },
        {
          question: "Faut-il entretenir une VMC ?",
          answer: "Oui, il faut nettoyer les bouches d'extraction tous les 6 mois et faire réviser le caisson tous les 2 ans. Nous proposons ce service d'entretien pour les VMC que nous installons.",
        },
      ],
      ctaTitle: "Besoin d'une VMC dans l'Eure ?",
      ctaSubtitle: "Installation rapide et propre. Home Électricité Normandie intervient dans tout le département de l'Eure.",
    }} />
  );
}
