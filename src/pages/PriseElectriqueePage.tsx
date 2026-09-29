import ServiceDetailTemplate from '../components/shared/ServiceDetailTemplate';
import { COMPANY } from '../data/company';

const ZONES = [
  'Évreux', 'Pacy-sur-Eure', 'Vernon', 'Louviers', 'Val-de-Reuil',
  'Les Andelys', 'Gisors', 'Pont-Audemer', 'Bernay', 'Verneuil-sur-Avre',
  'Breteuil', 'Conches-en-Ouche', 'Le Cormier', 'Rugles', 'L\'Aigle',
];

export default function PriseElectriqueePage() {
  return (
    <ServiceDetailTemplate data={{
      seoTitle: "Prises & interrupteurs Eure (27) — Installation & remplacement – Home Électricité Normandie",
      seoDescription: "Installation et remplacement de prises électriques et interrupteurs dans l'Eure (27). Prises USB, prises extérieures IP, appareillage design. Devis gratuit.",
      canonical: `${COMPANY.siteUrl}/prise-electrique`,
      breadcrumb: "Prises & Interrupteurs",
      h1: "Prises & Interrupteurs",
      h1Accent: "dans l'Eure (27)",
      intro: "Installation, remplacement et déplacement de prises électriques et interrupteurs dans toute l'Eure. Appareillage standard ou haut de gamme selon vos goûts.",
      heroImg: '/images/img-16.jpg',
      heroImgAlt: "Prises design noir mat en béton ciré — installation dans l'Eure",
      sectionTitle: "Appareillage électrique sur mesure",
      sectionImg: '/images/img-08.jpg',
      sectionImgAlt: "Variateur Céliane design — prises et interrupteurs haut de gamme dans l'Eure",
      sectionIntro: "L'appareillage électrique est visible au quotidien. Nous proposons aussi bien des gammes standards que des appareillages design haut de gamme pour valoriser votre intérieur.",
      points: [
        "Ajout et déplacement de prises de courant",
        "Prises avec terre (obligatoires NF C 15-100)",
        "Prises USB-A et USB-C intégrées",
        "Prises extérieures étanches IP44/IP55",
        "Interrupteurs va-et-vient, télérupteurs",
        "Variateurs compatibles LED",
        "Appareillage design : Legrand Céliane, Schneider Odace…",
      ],
      sectionPoints: [],
      zones: ZONES,
      faqs: [
        {
          question: "Peut-on ajouter une prise sans refaire l'électricité ?",
          answer: "Oui, dans la plupart des cas. Nous pouvons piquer sur un circuit existant ou créer une extension. Si le tableau est trop chargé ou les câbles vétustes, une mise à niveau partielle peut être nécessaire.",
        },
        {
          question: "Combien de prises faut-il par pièce selon la NF C 15-100 ?",
          answer: "La norme impose minimum 5 prises en séjour, 3 en chambre, 6 en cuisine (dont 4 au plan de travail), 1 en salle de bains (rasoir uniquement, hors zone humide). Nous pouvons réaliser un audit de votre installation.",
        },
        {
          question: "Installez-vous des prises pour les carrelages et béton ciré ?",
          answer: "Oui, nous intervenons dans tout type de revêtement mural. Pour le béton ciré ou le carrelage, nous gérons la découpe soignée pour un résultat impeccable.",
        },
        {
          question: "Quelle différence entre interrupteur va-et-vient et télérupteur ?",
          answer: "Le va-et-vient commande une lumière depuis deux points (2 interrupteurs câblés). Le télérupteur permet de commander depuis autant de points que souhaité avec un câblage simplifié, idéal en rénovation.",
        },
      ],
      ctaTitle: "Besoin de prises ou d'interrupteurs dans l'Eure ?",
      ctaSubtitle: "Ajout, déplacement ou remplacement. Home Électricité Normandie intervient dans tout le département de l'Eure.",
    }} />
  );
}
