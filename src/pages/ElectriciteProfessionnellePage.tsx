import ServiceDetailTemplate from '../components/shared/ServiceDetailTemplate';
import { COMPANY } from '../data/company';

const ZONES = [
  'Évreux', 'Pacy-sur-Eure', 'Vernon', 'Louviers', 'Val-de-Reuil',
  'Les Andelys', 'Gisors', 'Pont-Audemer', 'Bernay', 'Verneuil-sur-Avre',
  'Breteuil', 'Conches-en-Ouche', 'Le Cormier', 'Rugles', 'L\'Aigle',
];

export default function ElectriciteProfessionnellePage() {
  return (
    <ServiceDetailTemplate data={{
      seoTitle: "Électricité professionnelle Eure (27) — Commerce & bureau – Home Électricité Normandie",
      seoDescription: "Travaux d'électricité professionnelle dans l'Eure (27) : commerces, bureaux, entrepôts. Installation, rénovation, mise aux normes ERP. Devis gratuit.",
      canonical: `${COMPANY.siteUrl}/electricite-professionnelle`,
      breadcrumb: "Électricité professionnelle",
      h1: "Électricité professionnelle",
      h1Accent: "dans l'Eure (27)",
      intro: "Travaux d'électricité pour commerces, bureaux, entrepôts et locaux professionnels dans toute l'Eure. Installation, rénovation et mise aux normes selon les réglementations ERP et professionnelles.",
      heroImg: '/images/img-10.jpg',
      heroImgAlt: "Installation électrique professionnelle — local commercial dans l'Eure",
      sectionTitle: "Électricité pour locaux professionnels",
      sectionImg: '/images/img-06.jpg',
      sectionImgAlt: "Tableau électrique professionnel — local commercial Eure (27)",
      sectionIntro: "Les locaux professionnels sont soumis à des réglementations spécifiques (ERP, ICPE) en matière d'installations électriques. Nous maîtrisons ces normes et intervenons pour tout type de local.",
      points: [
        "Installation électrique complète pour locaux neufs",
        "Rénovation et mise aux normes ERP",
        "Tableau électrique triphasé ou monophasé",
        "Éclairage professionnel et éclairage de sécurité (BAES)",
        "Prises de courant industrielles et spécialisées",
        "Câblage informatique et réseaux",
        "Borne de recharge pour flotte de véhicules",
      ],
      sectionPoints: [],
      zones: ZONES,
      faqs: [
        {
          question: "Quelles normes s'appliquent à l'électricité dans un commerce ?",
          answer: "Les locaux ERP (établissements recevant du public) sont soumis au règlement de sécurité contre l'incendie ERP, qui impose des installations spécifiques : éclairage de sécurité BAES, tableaux divisionnaires, sections de câbles adaptées, etc.",
        },
        {
          question: "Intervenez-vous sur des chantiers professionnels en cours d'activité ?",
          answer: "Oui, nous planifions nos interventions pour minimiser les interruptions d'activité. Travail en dehors des heures ouvrées possible. Nous nous adaptons à vos contraintes.",
        },
        {
          question: "Proposez-vous des contrats d'entretien pour locaux professionnels ?",
          answer: "Oui, nous établissons des contrats d'entretien annuels pour les PME et commerces de l'Eure : vérification des installations, remplacement préventif des équipements vieillissants.",
        },
        {
          question: "Intervenez-vous pour les artisans et TPE dans l'Eure ?",
          answer: "Absolument. Garage, atelier, boulangerie, salon de coiffure, restaurant — nous intervenons pour tous les corps de métier. Nous comprenons les contraintes spécifiques de chaque activité.",
        },
      ],
      ctaTitle: "Besoin d'un électricien professionnel dans l'Eure ?",
      ctaSubtitle: "Devis gratuit pour vos locaux professionnels. Home Électricité Normandie dans tout le département de l'Eure.",
    }} />
  );
}
