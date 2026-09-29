import ServiceDetailTemplate from '../components/shared/ServiceDetailTemplate';
import { COMPANY } from '../data/company';

const ZONES = [
  'Évreux', 'Pacy-sur-Eure', 'Vernon', 'Louviers', 'Val-de-Reuil',
  'Les Andelys', 'Gisors', 'Pont-Audemer', 'Bernay', 'Verneuil-sur-Avre',
  'Breteuil', 'Conches-en-Ouche', 'Le Cormier', 'Rugles', 'L\'Aigle',
];

export default function DomotiquePage() {
  return (
    <ServiceDetailTemplate data={{
      seoTitle: "Domotique Eure (27) — Maison connectée & éclairage intelligent – Home Électricité Normandie",
      seoDescription: "Installation domotique dans l'Eure (27) : maison connectée, éclairage intelligent, volets motorisés, thermostat connecté. Pilotage depuis votre smartphone. Devis gratuit.",
      canonical: `${COMPANY.siteUrl}/domotique`,
      breadcrumb: "Domotique",
      h1: "Domotique",
      h1Accent: "maison connectée dans l'Eure",
      intro: "Installation de systèmes domotiques dans toute l'Eure : éclairage intelligent, volets motorisés, thermostat connecté, alarme. Pilotez votre maison depuis votre smartphone.",
      heroImg: '/images/img-08.jpg',
      heroImgAlt: "Variateur connecté domotique — maison intelligente dans l'Eure",
      sectionTitle: "Maison connectée & intelligente",
      sectionImg: '/images/img-01.jpg',
      sectionImgAlt: "Éclairage LED connecté TV — domotique dans l'Eure",
      sectionIntro: "La domotique transforme votre maison en espace intelligent : confort, sécurité, économies d'énergie et pilotage à distance de tous vos équipements.",
      points: [
        "Éclairage intelligent : variation, scènes, détection de présence",
        "Volets roulants motorisés et store banne connectés",
        "Thermostat connecté pièce par pièce (Netatmo, Somfy…)",
        "Prises connectées et gestion d'énergie",
        "Interrupteurs tactiles et à commande vocale",
        "Systèmes compatibles Google Home, Amazon Alexa, Apple HomeKit",
        "Câblage dédié pour solutions filaires (KNX, bus…)",
      ],
      sectionPoints: [],
      zones: ZONES,
      faqs: [
        {
          question: "Faut-il refaire l'électricité pour installer la domotique ?",
          answer: "Pas nécessairement. Les solutions sans-fil (Zigbee, Z-Wave, Wi-Fi) s'installent sur l'existant sans modification majeure du câblage. Les solutions filaires (KNX) nécessitent un pré-câblage dédié, plus adaptées à la construction neuve ou grande rénovation.",
        },
        {
          question: "Quels systèmes domotiques installez-vous dans l'Eure ?",
          answer: "Nous installons principalement Somfy, Delta Dore, Legrand MyHome, Schneider Wiser, et les solutions compatibles Google Home / Alexa / HomeKit. Nous conseillons selon votre budget et vos besoins.",
        },
        {
          question: "La domotique est-elle adaptée aux maisons normandes anciennes ?",
          answer: "Oui, les solutions sans-fil sont particulièrement adaptées aux maisons en silex ou à colombages où passer des câbles est complexe. Nous maîtrisons les contraintes des bâtiments anciens de l'Eure.",
        },
        {
          question: "Peut-on ajouter la domotique progressivement ?",
          answer: "Absolument. On peut commencer par l'éclairage connecté d'une pièce, puis étendre progressivement aux volets, au chauffage, à l'alarme. Tous les systèmes que nous installons sont évolutifs.",
        },
      ],
      ctaTitle: "Projet domotique dans l'Eure ?",
      ctaSubtitle: "Conseils personnalisés et installation soignée. Home Électricité Normandie à votre service dans tout l'Eure.",
    }} />
  );
}
