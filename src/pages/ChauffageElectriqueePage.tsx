import ServiceDetailTemplate from '../components/shared/ServiceDetailTemplate';
import { COMPANY } from '../data/company';

const ZONES = [
  'Évreux', 'Pacy-sur-Eure', 'Vernon', 'Louviers', 'Val-de-Reuil',
  'Les Andelys', 'Gisors', 'Pont-Audemer', 'Bernay', 'Verneuil-sur-Avre',
  'Breteuil', 'Conches-en-Ouche', 'Le Cormier', 'Rugles', 'L\'Aigle',
];

export default function ChauffageElectriqueePage() {
  return (
    <ServiceDetailTemplate data={{
      seoTitle: "Chauffage électrique Eure (27) — Installation radiateurs & plancher chauffant – Home Électricité Normandie",
      seoDescription: "Installation de chauffage électrique dans l'Eure (27) : radiateurs à inertie, panneaux rayonnants, plancher chauffant électrique. Programmation et économies d'énergie. Devis gratuit.",
      canonical: `${COMPANY.siteUrl}/chauffage-electrique`,
      breadcrumb: "Chauffage électrique",
      h1: "Chauffage électrique",
      h1Accent: "dans l'Eure (27)",
      intro: "Installation et remplacement de chauffages électriques dans toute l'Eure : radiateurs à inertie, convecteurs, panneaux rayonnants, plancher chauffant. Programmation intelligente et économies d'énergie.",
      heroImg: '/images/img-10.jpg',
      heroImgAlt: "Installation électrique chauffage — maison dans l'Eure (27)",
      sectionTitle: "Chauffage électrique performant",
      sectionImg: '/images/img-10.jpg',
      sectionImgAlt: "Chauffage électrique à inertie — installation dans l'Eure",
      sectionIntro: "Le chauffage électrique moderne est loin des anciens convecteurs énergivores. Les radiateurs à inertie et le plancher chauffant offrent un confort thermique optimal.",
      points: [
        "Radiateurs à inertie sèche ou fluide (meilleur confort)",
        "Panneaux rayonnants basse consommation",
        "Plancher chauffant électrique rayonnant",
        "Sèche-serviettes électriques pour salles de bains",
        "Programmation filaire ou connectée (domotique)",
        "Circuits dédiés depuis le tableau",
        "Conformité NF C 15-100 et RE2020",
      ],
      sectionPoints: [],
      zones: ZONES,
      faqs: [
        {
          question: "Quelle différence entre convecteur et radiateur à inertie ?",
          answer: "Le convecteur chauffe l'air directement (montée rapide, descente rapide, air sec). Le radiateur à inertie stocke la chaleur dans sa masse et la restitue progressivement : confort supérieur et consommation réduite de 10 à 20 %.",
        },
        {
          question: "Le plancher chauffant électrique est-il adapté aux maisons normandes ?",
          answer: "Oui, surtout en rénovation légère de pièces de vie ou de salles de bains. Il est moins invasif que le plancher hydraulique (pas de chaudière) et apporte un confort excellent. Idéal pour les carrelages et béton ciré.",
        },
        {
          question: "Peut-on connecter les radiateurs à un thermostat intelligent ?",
          answer: "Oui, nous installons des radiateurs compatibles avec les thermostats connectés (Netatmo, Google Nest, Somfy…) pour une gestion pièce par pièce depuis votre smartphone.",
        },
        {
          question: "Quel circuit électrique faut-il pour le chauffage ?",
          answer: "Chaque radiateur doit être raccordé sur un circuit dédié depuis le tableau. Un disjoncteur par appareil, section de câble adaptée à la puissance. Nous réalisons cette mise aux normes en même temps que l'installation.",
        },
      ],
      ctaTitle: "Projet de chauffage électrique dans l'Eure ?",
      ctaSubtitle: "Installation soignée, économies garanties. Devis gratuit — Home Électricité Normandie dans tout l'Eure.",
    }} />
  );
}
