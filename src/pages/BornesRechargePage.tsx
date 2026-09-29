import ServiceDetailTemplate from '../components/shared/ServiceDetailTemplate';
import { COMPANY } from '../data/company';

const ZONES = [
  'Évreux', 'Pacy-sur-Eure', 'Vernon', 'Louviers', 'Val-de-Reuil',
  'Les Andelys', 'Gisors', 'Pont-Audemer', 'Bernay', 'Verneuil-sur-Avre',
  'Breteuil', 'Conches-en-Ouche', 'Le Cormier', 'Rugles', 'L\'Aigle',
];

export default function BornesRechargePage() {
  return (
    <ServiceDetailTemplate data={{
      seoTitle: "Borne de recharge voiture électrique Eure (27) — IRVE – Home Électricité Normandie",
      seoDescription: "Installation de bornes de recharge pour véhicules électriques (IRVE) dans l'Eure (27). Domicile ou entreprise. Certifié IRVE. Aide CEE et crédit d'impôt. Devis gratuit.",
      canonical: `${COMPANY.siteUrl}/bornes-recharge`,
      breadcrumb: "Borne de recharge",
      h1: "Borne de recharge",
      h1Accent: "IRVE dans l'Eure (27)",
      intro: "Installation de bornes de recharge pour véhicules électriques dans toute l'Eure. Certifié IRVE — à domicile, en copropriété ou en entreprise. Bénéficiez des aides disponibles.",
      heroImg: '/images/img-19.jpg',
      heroImgAlt: "Installation électrique extérieure — borne de recharge IRVE dans l'Eure",
      sectionTitle: "Borne IRVE certifiée",
      sectionImg: '/images/img-19.jpg',
      sectionImgAlt: "Installation borne recharge voiture électrique — Normandie Eure",
      sectionIntro: "L'installation d'une borne de recharge à domicile est la solution la plus pratique et économique pour recharger votre véhicule électrique. Nous sommes certifiés IRVE.",
      points: [
        "Wallbox 7 kW ou 22 kW selon votre abonnement",
        "Câblage dédié depuis le tableau (section adaptée)",
        "Protection différentielle type A obligatoire",
        "Prise T2 universelle compatible tous véhicules",
        "Bornes connectées avec suivi de consommation",
        "Installation en maison individuelle ou parking",
        "Attestation IRVE obligatoire pour les aides",
      ],
      sectionPoints: [],
      zones: ZONES,
      faqs: [
        {
          question: "Quelles aides pour l'installation d'une borne à domicile dans l'Eure ?",
          answer: "Le crédit d'impôt CITE couvre 75 % du coût d'installation (hors matériel) pour les résidences principales. Des aides CEE sont également disponibles. Nous vous orientons vers les dispositifs applicables à votre situation.",
        },
        {
          question: "Quelle puissance choisir pour une borne de recharge ?",
          answer: "La borne 7,4 kW (monophasé) suffit pour la grande majorité des particuliers : recharge complète en 6-8h la nuit. La borne 22 kW (triphasé) est utile si votre véhicule supporte ce mode et que vous avez un compteur triphasé.",
        },
        {
          question: "Faut-il modifier le tableau électrique pour installer une borne ?",
          answer: "Généralement oui, il faut ajouter un disjoncteur dédié et un différentiel type A. Si le tableau est vétuste, une mise aux normes préalable peut être nécessaire. Nous évaluons l'ensemble lors de notre visite.",
        },
        {
          question: "Installez-vous des bornes pour les entreprises dans l'Eure ?",
          answer: "Oui, nous intervenons pour les entreprises, flottes de véhicules, parkings et copropriétés. Nous dimensionnons l'installation selon le nombre de véhicules et les contraintes du bâtiment.",
        },
      ],
      ctaTitle: "Besoin d'une borne de recharge dans l'Eure ?",
      ctaSubtitle: "Certifié IRVE — installation rapide, attestation fournie. Home Électricité Normandie dans tout le département.",
    }} />
  );
}
