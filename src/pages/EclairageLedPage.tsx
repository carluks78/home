import ServiceDetailTemplate from '../components/shared/ServiceDetailTemplate';
import { COMPANY } from '../data/company';

const ZONES = [
  'Évreux', 'Pacy-sur-Eure', 'Vernon', 'Louviers', 'Val-de-Reuil',
  'Les Andelys', 'Gisors', 'Pont-Audemer', 'Bernay', 'Verneuil-sur-Avre',
  'Breteuil', 'Conches-en-Ouche', 'Le Cormier', 'Rugles', 'L\'Aigle',
];

export default function EclairageLedPage() {
  return (
    <ServiceDetailTemplate data={{
      seoTitle: "Éclairage LED Eure (27) — Intérieur & extérieur – Home Électricité Normandie",
      seoDescription: "Installation d'éclairages LED intérieurs et extérieurs dans l'Eure (27) : spots encastrés, rubans LED, jardin, mise en valeur architecturale. Devis gratuit.",
      canonical: `${COMPANY.siteUrl}/eclairage-led`,
      breadcrumb: "Éclairage LED",
      h1: "Éclairage LED",
      h1Accent: "intérieur & extérieur",
      intro: "Installation d'éclairages LED sur mesure dans toute l'Eure : spots encastrés, rubans LED cuisine et salle de bains, éclairages de jardin, mise en valeur architecturale.",
      heroImg: '/images/img-02.jpg',
      heroImgAlt: "Éclairage extérieur LED — jardin et terrasse dans l'Eure",
      sectionTitle: "Éclairage LED sur mesure",
      sectionImg: '/images/img-09.jpg',
      sectionImgAlt: "Ruban LED sous-meuble cuisine — installation LED dans l'Eure",
      sectionIntro: "L'éclairage LED transforme les espaces : ambiance, consommation divisée par 5 et durée de vie multipliée par 10 par rapport à l'incandescent.",
      points: [
        "Spots encastrés LED BBC (basse consommation)",
        "Rubans LED sous-meuble, plinthes, niche TV",
        "Éclairages extérieurs : spots, bornes, lampadaires",
        "Détecteurs de présence et minuteries",
        "Variateurs compatibles LED",
        "Éclairage de mise en valeur architecturale",
        "Étanchéité IP65+ pour extérieurs et pièces humides",
      ],
      sectionPoints: [],
      zones: ZONES,
      faqs: [
        {
          question: "Quelle est la différence entre spots LED intégrés et ampoules LED ?",
          answer: "Les spots LED intégrés sont plus durables (50 000 h) et plus performants que les ampoules LED classiques. L'ampoule se change, le LED intégré se remplace avec le luminaire. Nous conseillons les deux selon le budget et l'usage.",
        },
        {
          question: "Peut-on installer des variateurs avec des ampoules LED ?",
          answer: "Oui, à condition d'utiliser des variateurs compatibles LED (dimmables) et des ampoules LED dimmables. Nous réalisons la mise à niveau de vos variateurs existants ou leur remplacement.",
        },
        {
          question: "Combien coûte l'installation d'un éclairage extérieur LED à Évreux ou Vernon ?",
          answer: "Le coût dépend du nombre de points lumineux et de la longueur de câblage. Pour un éclairage de jardin avec 5 spots encastrés, comptez entre 400 et 800 €. Devis gratuit sur place.",
        },
        {
          question: "Installez-vous des rubans LED dans les cuisines ?",
          answer: "Oui, c'est l'une de nos spécialités. Nous installons des rubans LED sous-meuble, en plinthes, dans les niches et dans toutes les configurations. Rendu professionnel garanti.",
        },
      ],
      ctaTitle: "Projet d'éclairage LED dans l'Eure ?",
      ctaSubtitle: "Devis gratuit pour vos éclairages intérieurs et extérieurs. Nous intervenons dans tout le département de l'Eure.",
    }} />
  );
}
