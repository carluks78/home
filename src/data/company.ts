export const COMPANY = {
  name: 'Home Électricité Normandie',
  shortName: 'HEN',
  legalName: 'HOME ÉLECTRICITÉ NORMANDIE',
  siret: '95220268700010',
  phone: '06 29 51 89 35',
  phoneUri: 'tel:+33629518935',
  whatsappNumber: '33629518935',
  email: 'berthou.jerome@gmail.com',
  address: {
    street: '7 rue de l\'Église',
    city: 'Le Cormier',
    postalCode: '27120',
    department: 'Eure',
    departmentCode: '27',
    region: 'Normandie',
    country: 'France',
    full: '7 rue de l\'Église, 27120 Le Cormier',
    geo: { lat: 48.9328, lng: 1.5089 },
  },
  hours: {
    weekdays: 'Lun – Ven : 8h00 – 19h00',
    saturday: 'Sam : 8h00 – 17h00',
    sunday: 'Urgences : sur appel',
    short: 'Lun-Ven 8h-19h / Sam 8h-17h',
  },
  zone: 'Eure (27) et Normandie',
  siteUrl: 'https://home-electricite-normandie.fr',
};

export const buildWhatsApp = (message: string) =>
  `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT = buildWhatsApp(
  'Bonjour Home Électricité Normandie, je souhaite obtenir des renseignements concernant une prestation électrique.'
);

export const WA_DEPANNAGE = buildWhatsApp(
  'Bonjour Home Électricité Normandie, j\'ai un problème électrique urgent et je souhaite une intervention de dépannage.'
);

export const WA_DEVIS = buildWhatsApp(
  'Bonjour Home Électricité Normandie, je souhaite obtenir un devis pour des travaux électriques.'
);

export const WA_RDV = buildWhatsApp(
  'Bonjour Home Électricité Normandie, je souhaite prendre rendez-vous.'
);

// ─── Services ─────────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  description: string;
  keywords: string[];
  pageSlug: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'depannage',
    title: 'Dépannage électrique',
    shortTitle: 'Dépannage',
    image: '/images/img-06.jpg',
    description: 'Intervention rapide pour toutes pannes électriques : disjoncteur qui saute, panne de courant, prise défectueuse, court-circuit.',
    keywords: ['panne électrique', 'dépannage électricien', 'urgence électrique', 'disjoncteur qui saute'],
    pageSlug: '/depannage-electricien',
  },
  {
    slug: 'installation',
    title: 'Installation électrique',
    shortTitle: 'Installation',
    image: '/images/img-10.jpg',
    description: 'Installation électrique complète pour maison neuve, appartement ou local professionnel. Tableau, prises, éclairage, VMC.',
    keywords: ['installation électrique', 'câblage', 'installation neuve'],
    pageSlug: '/installation-electrique',
  },
  {
    slug: 'renovation',
    title: 'Rénovation électrique',
    shortTitle: 'Rénovation',
    image: '/images/img-06.jpg',
    description: 'Remise aux normes et modernisation de l\'installation électrique dans les maisons anciennes, appartements et locaux professionnels.',
    keywords: ['rénovation électrique', 'mise aux normes', 'remplacement câblage'],
    pageSlug: '/renovation-electrique',
  },
  {
    slug: 'mise-aux-normes',
    title: 'Mise aux normes',
    shortTitle: 'Mise aux normes',
    image: '/images/img-06.jpg',
    description: 'Sécurisation et mise en conformité de votre installation électrique selon les normes en vigueur (NF C 15-100).',
    keywords: ['mise aux normes électriques', 'conformité électrique', 'sécurité électrique'],
    pageSlug: '/mise-aux-normes-electriques',
  },
  {
    slug: 'tableau',
    title: 'Tableau électrique',
    shortTitle: 'Tableau',
    image: '/images/img-06.jpg',
    description: 'Installation, remplacement et mise aux normes de tableaux électriques, disjoncteurs et interrupteurs différentiels.',
    keywords: ['tableau électrique', 'disjoncteur', 'interrupteur différentiel'],
    pageSlug: '/tableau-electrique',
  },
  {
    slug: 'eclairage',
    title: 'Éclairage LED',
    shortTitle: 'Éclairage',
    image: '/images/img-09.jpg',
    description: 'Installation et remplacement d\'éclairages intérieurs et extérieurs, spots LED, luminaires, détecteurs de présence.',
    keywords: ['éclairage LED', 'éclairage intérieur', 'spots LED'],
    pageSlug: '/eclairage-led',
  },
  {
    slug: 'prises',
    title: 'Prises & Interrupteurs',
    shortTitle: 'Prises',
    image: '/images/img-16.jpg',
    description: 'Installation et remplacement de prises électriques et d\'interrupteurs. Ajout de prises, USB, prises extérieures.',
    keywords: ['prise électrique', 'interrupteur', 'ajout prises'],
    pageSlug: '/prise-electrique',
  },
  {
    slug: 'vmc',
    title: 'VMC',
    shortTitle: 'VMC',
    image: '/images/img-10.jpg',
    description: 'Installation et entretien de ventilation mécanique contrôlée (VMC simple flux, double flux) pour une meilleure qualité d\'air.',
    keywords: ['VMC', 'ventilation mécanique', 'installation VMC'],
    pageSlug: '/vmc',
  },
  {
    slug: 'chauffage',
    title: 'Chauffage électrique',
    shortTitle: 'Chauffage',
    image: '/images/img-10.jpg',
    description: 'Installation et remplacement de radiateurs électriques, convecteurs, panneaux rayonnants, plancher chauffant électrique.',
    keywords: ['chauffage électrique', 'radiateur électrique', 'plancher chauffant'],
    pageSlug: '/chauffage-electrique',
  },
  {
    slug: 'domotique',
    title: 'Domotique',
    shortTitle: 'Domotique',
    image: '/images/img-08.jpg',
    description: 'Installation de systèmes domotiques, maison connectée, éclairage intelligent, pilotage à distance de vos équipements.',
    keywords: ['domotique', 'maison connectée', 'éclairage intelligent'],
    pageSlug: '/domotique',
  },
  {
    slug: 'bornes',
    title: 'Borne de recharge',
    shortTitle: 'Borne IRVE',
    image: '/images/img-19.jpg',
    description: 'Installation de bornes de recharge pour véhicules électriques (IRVE) à domicile ou en entreprise.',
    keywords: ['borne de recharge', 'IRVE', 'voiture électrique'],
    pageSlug: '/bornes-recharge',
  },
  {
    slug: 'pro',
    title: 'Électricité professionnelle',
    shortTitle: 'Élec. pro',
    image: '/images/img-10.jpg',
    description: 'Travaux électriques pour commerces, bureaux, entrepôts et locaux professionnels : installation, rénovation, mise aux normes.',
    keywords: ['électricité professionnelle', 'électricité commerce', 'local professionnel'],
    pageSlug: '/electricite-professionnelle',
  },
];

// ─── Cities ───────────────────────────────────────────────────────────────────

export interface City {
  slug: string;
  name: string;
  department: string;
  population: number;
  distanceKm: number;
  intro: string;
  mainIssues: string[];
  housingProfile: string;
  specificContext: string;
  neighbors: string[];
  sector: string;
}

export const CITIES: City[] = [
  {
    slug: 'evreux',
    name: 'Évreux',
    department: '27',
    population: 49500,
    distanceKm: 25,
    intro: 'Évreux est la préfecture du département de l\'Eure et sa plus grande ville. Avec une population de près de 50 000 habitants, elle concentre un parc immobilier varié : immeubles d\'appartements, maisons des années 1960-80, bâtiments commerciaux et locaux professionnels. Les besoins en électricité y sont importants et diversifiés.',
    mainIssues: ['Rénovation d\'installations électriques vétustes dans les logements anciens', 'Mise aux normes d\'appartements avant mise en location', 'Installation de bornes de recharge dans les copropriétés', 'Dépannage électrique urgent en centre-ville'],
    housingProfile: 'Mélange d\'appartements des années 1960-80, maisons individuelles et immeubles récents. Fort besoin de rénovation électrique dans l\'ancien parc.',
    specificContext: 'En tant que chef-lieu du département, Évreux accueille de nombreux commerces, services et établissements publics qui nécessitent des interventions électriques professionnelles et réactives. La ville est dotée d\'un réseau de transport développé.',
    neighbors: ['gravigny', 'miserey', 'saint-andre-de-leure', 'acquigny', 'damville'],
    sector: 'evreux',
  },
  {
    slug: 'pacy-sur-eure',
    name: 'Pacy-sur-Eure',
    department: '27',
    population: 4500,
    distanceKm: 15,
    intro: 'Pacy-sur-Eure est une commune dynamique au cœur de la vallée de l\'Eure. Ville de marché historique, elle est entourée de nombreuses communes résidentielles. Son tissu de maisons individuelles, souvent construites dans les années 1970-1990, représente un terrain privilégié pour la rénovation électrique.',
    mainIssues: ['Rénovation électrique de maisons individuelles des années 1970-1990', 'Mise aux normes avant vente immobilière', 'Installation de chauffage électrique', 'Dépannage dans les zones périurbaines'],
    housingProfile: 'Majoritairement des maisons individuelles avec jardins, quelques petits immeubles en centre-ville. Fort potentiel de rénovation électrique.',
    specificContext: 'Pacy-sur-Eure est idéalement située entre Évreux et Vernon, dans la vallée de l\'Eure. La commune attire des familles cherchant un cadre de vie résidentiel à proximité des axes routiers.',
    neighbors: ['ivry-la-bataille', 'saint-andre-de-leure', 'bueil', 'ezy-sur-eure', 'anet'],
    sector: 'pacy',
  },
  {
    slug: 'vernon',
    name: 'Vernon',
    department: '27',
    population: 24000,
    distanceKm: 35,
    intro: 'Vernon est une ville de 24 000 habitants au bord de la Seine, aux portes de l\'Île-de-France. Sa proximité avec Giverny et Paris en fait une ville attractive où la demande en rénovation et en installation électrique est soutenue. Les maisons normandes typiques côtoient des résidences plus modernes.',
    mainIssues: ['Rénovation d\'habitations normandes anciennes', 'Installation pour résidences secondaires', 'Mise aux normes avant transaction immobilière', 'Installations pour commerces et restaurants'],
    housingProfile: 'Mélange de maisons normandes anciennes, d\'appartements en centre-ville et de pavillons récents en périphérie. Nombreuses résidences secondaires.',
    specificContext: 'Proche de Giverny (les jardins de Monet) et de l\'Île-de-France, Vernon bénéficie d\'une attractivité touristique et résidentielle forte. La ville est traversée par l\'axe routier Paris-Rouen.',
    neighbors: ['saint-marcel', 'gaillon', 'les-andelys'],
    sector: 'vernon',
  },
  {
    slug: 'louviers',
    name: 'Louviers',
    department: '27',
    population: 18000,
    distanceKm: 40,
    intro: 'Louviers, ville d\'environ 18 000 habitants dans la vallée de l\'Eure, possède un riche patrimoine industriel et architectural. Son centre historique abrite de nombreuses maisons à colombages et des bâtiments du XIXe siècle dont les installations électriques nécessitent souvent une remise aux normes complète.',
    mainIssues: ['Remise aux normes d\'installations très anciennes dans les maisons historiques', 'Rénovation électrique de bâtiments industriels reconvertis', 'Installation VMC dans l\'habitat ancien', 'Domotique dans les quartiers résidentiels récents'],
    housingProfile: 'Centre ancien avec maisons à colombages, quartiers résidentiels des années 1960-80 en périphérie, zones industrielles en reconversion.',
    specificContext: 'Louviers a une forte tradition industrielle (textile, puis industrie) et possède un centre-ville historique remarquable. La ville est en pleine revitalisation avec plusieurs projets de réhabilitation.',
    neighbors: ['val-de-reuil', 'acquigny', 'le-neubourg'],
    sector: 'louviers',
  },
  {
    slug: 'val-de-reuil',
    name: 'Val-de-Reuil',
    department: '27',
    population: 14500,
    distanceKm: 45,
    intro: 'Val-de-Reuil est une ville nouvelle créée dans les années 1970, caractérisée par une architecture contemporaine et un parc immobilier homogène. Ses logements collectifs et ses maisons individuelles construits à la même période nécessitent aujourd\'hui des rénovations et mises aux normes électriques systématiques.',
    mainIssues: ['Mise aux normes électriques des logements construits dans les années 1970', 'Remplacement des tableaux électriques vieillissants', 'Installation de bornes de recharge dans les résidences', 'Amélioration des performances énergétiques'],
    housingProfile: 'Ville nouvelle : logements collectifs et maisons individuelles des années 1970-1980 avec installations électriques d\'origine nécessitant une rénovation.',
    specificContext: 'Construite dans le cadre de la politique des villes nouvelles, Val-de-Reuil présente un tissu urbain cohérent mais vieillissant. La proximité de l\'autoroute A13 favorise les déplacements.',
    neighbors: ['louviers', 'acquigny', 'les-andelys'],
    sector: 'louviers',
  },
  {
    slug: 'les-andelys',
    name: 'Les Andelys',
    department: '27',
    population: 8200,
    distanceKm: 50,
    intro: 'Les Andelys, dominée par les ruines du Château Gaillard, est une ville médiévale au bord de la Seine. Son patrimoine architectural remarquable comprend de nombreuses maisons anciennes dont les installations électriques sont souvent insuffisantes ou dangereuses, nécessitant une intervention qualifiée.',
    mainIssues: ['Rénovation électrique dans les maisons médiévales et anciennes', 'Mise en sécurité d\'installations vétustes', 'Installation d\'éclairages pour la mise en valeur du patrimoine', 'Dépannage dans les zones rurales environnantes'],
    housingProfile: 'Centre historique avec maisons anciennes, hameaux ruraux alentours. Fort besoin de remise aux normes dans le bâti ancien.',
    specificContext: 'Site touristique reconnu, Les Andelys attire de nombreux visiteurs pour le Château Gaillard. La présence de gîtes et d\'hébergements touristiques génère une demande spécifique en installation et rénovation électrique.',
    neighbors: ['gaillon', 'val-de-reuil', 'vernon'],
    sector: 'andelys',
  },
  {
    slug: 'gisors',
    name: 'Gisors',
    department: '27',
    population: 11000,
    distanceKm: 60,
    intro: 'Gisors, avec son imposant château médiéval, est une ville du Vexin normand proche de Paris. Sa position géographique en fait une ville résidentielle attractive pour les actifs travaillant en Île-de-France, avec un développement important de quartiers pavillonnaires récents.',
    mainIssues: ['Installation électrique pour pavillons neufs et récents', 'Mise aux normes dans le centre historique', 'Installation de bornes de recharge pour les navetteurs', 'Domotique dans les nouvelles constructions'],
    housingProfile: 'Centre médiéval avec bâti ancien, larges extensions pavillonnaires récentes. Profil résidentiel attractif pour les Franciliens.',
    specificContext: 'Gisors est un pôle urbain important du Vexin normand, avec un marché immobilier dynamique alimenté par la proximité de Paris. La présence du château attire également touristes et investisseurs.',
    neighbors: [],
    sector: 'gisors',
  },
  {
    slug: 'gaillon',
    name: 'Gaillon',
    department: '27',
    population: 7500,
    distanceKm: 30,
    intro: 'Gaillon est une commune au bord de la Seine, connue pour son château Renaissance. Ville résidentielle avec un parc immobilier mixte, elle voit affluer des familles cherchant un cadre de vie agréable entre Évreux et Vernon.',
    mainIssues: ['Rénovation électrique dans les maisons des années 1970-80', 'Installation dans les nouveaux lotissements', 'Mise aux normes de bâtiments anciens'],
    housingProfile: 'Maisons individuelles des années 1970-80, quelques pavillons récents, bâtiments historiques en centre-ville.',
    specificContext: 'Commune résidentielle entre Évreux et Vernon, Gaillon offre un cadre de vie calme tout en restant bien connectée aux grands axes. Le château Renaissance de Gaillon est un monument historique classé.',
    neighbors: ['vernon', 'les-andelys', 'pacy-sur-eure'],
    sector: 'vernon',
  },
  {
    slug: 'verneuil-avre-iton',
    name: 'Verneuil d\'Avre et d\'Iton',
    department: '27',
    population: 12000,
    distanceKm: 45,
    intro: 'Verneuil d\'Avre et d\'Iton est une ville médiévale fortifiée du sud de l\'Eure. Avec ses remparts et ses maisons à colombages, elle possède un patrimoine architectural exceptionnel dont l\'entretien nécessite des interventions électriques respectueuses du bâti ancien.',
    mainIssues: ['Rénovation électrique respectueuse du bâti ancien protégé', 'Installation dans les maisons à colombages', 'Mise aux normes avant transactions immobilières', 'Éclairage architectural extérieur'],
    housingProfile: 'Maisons médiévales et à colombages en centre historique, maisons individuelles en périphérie. Fort besoin de rénovation dans le bâti ancien.',
    specificContext: 'Ville fortifiée du Perche normand, Verneuil d\'Avre et d\'Iton est classée parmi les "Plus beaux détours de France". Son patrimoine architectural imposant génère des besoins spécifiques en électricité.',
    neighbors: ['breteuil', 'damville'],
    sector: 'verneuil',
  },
  {
    slug: 'bernay',
    name: 'Bernay',
    department: '27',
    population: 10500,
    distanceKm: 55,
    intro: 'Bernay est une ville du centre de l\'Eure, ville de marché dynamique et centre commercial du Pays du Roumois. Son parc immobilier mêle maisons à colombages du centre historique et quartiers résidentiels plus récents en périphérie.',
    mainIssues: ['Rénovation électrique dans les maisons à colombages', 'Travaux électriques pour commerces et artisans', 'Installation VMC dans le bâti ancien', 'Mise aux normes dans les maisons des années 1960-80'],
    housingProfile: 'Centre historique avec maisons à colombages, quartiers pavillonnaires des années 60-90 en périphérie.',
    specificContext: 'Centre commercial important du Roumois normand, Bernay dispose d\'un marché hebdomadaire animé et d\'un tissu commercial et artisanal dense. La ville est bien desservie par les axes routiers.',
    neighbors: ['brionne', 'beaumont-le-roger', 'rugles'],
    sector: 'bernay',
  },
  {
    slug: 'conches-en-ouche',
    name: 'Conches-en-Ouche',
    department: '27',
    population: 4800,
    distanceKm: 35,
    intro: 'Conches-en-Ouche, nichée dans la forêt de Conches, est une petite ville pittoresque du pays d\'Ouche. Ses maisons normandes et ses ruelles médiévales lui confèrent un charme authentique, avec un parc immobilier ancien qui nécessite régulièrement des interventions électriques.',
    mainIssues: ['Mise en sécurité d\'installations électriques très anciennes', 'Rénovation dans les maisons normandes', 'Installation éclairage extérieur dans les maisons de caractère'],
    housingProfile: 'Maisons normandes et bâti médiéval en centre, maisons individuelles plus récentes en périphérie.',
    specificContext: 'Ville touristique et résidentielle du pays d\'Ouche, Conches-en-Ouche est appréciée pour son cadre de vie forestier. Sa population comprend de nombreux retraités et familles cherchant la tranquillité.',
    neighbors: ['damville', 'breteuil', 'rugles'],
    sector: 'evreux',
  },
  {
    slug: 'pont-audemer',
    name: 'Pont-Audemer',
    department: '27',
    population: 8500,
    distanceKm: 65,
    intro: 'Pont-Audemer, surnommée la "Venise normande" pour ses canaux, est une ville au patrimoine architectural remarquable. Ses nombreuses maisons à colombages des XVe et XVIe siècles représentent un défi technique pour les interventions électriques, nécessitant expertise et délicatesse.',
    mainIssues: ['Rénovation électrique dans les maisons à colombages classées', 'Éclairage architectural pour la mise en valeur du patrimoine', 'Installations pour les commerces touristiques', 'Mise aux normes dans le bâti historique protégé'],
    housingProfile: 'Maisons à colombages classées en centre historique, quartiers résidentiels modernes en périphérie.',
    specificContext: 'Pont-Audemer, connue pour son architecture médiévale et ses canaux, attire touristes et résidents aisés. La ville possède une forte identité patrimoniale qui impose des contraintes spécifiques pour les travaux.',
    neighbors: ['brionne', 'bourg-achard'],
    sector: 'pont-audemer',
  },
  {
    slug: 'le-neubourg',
    name: 'Le Neubourg',
    department: '27',
    population: 4000,
    distanceKm: 30,
    intro: 'Le Neubourg est une ville agricole au cœur du plateau du Neubourg, l\'une des terres agricoles les plus fertiles de France. Centre commercial et de services de la plaine, elle dessert un vaste arrière-pays rural avec des besoins électriques spécifiques aux exploitations agricoles et aux logements ruraux.',
    mainIssues: ['Installations électriques pour exploitations agricoles', 'Rénovation dans les fermes normandes reconverties', 'Installation de bornes de recharge pour véhicules agricoles', 'Mise aux normes dans les corps de ferme'],
    housingProfile: 'Corps de ferme normands, maisons de bourg, quelques lotissements récents. Fort besoin d\'adaptation aux nouvelles normes.',
    specificContext: 'Situé sur le plateau du Neubourg, l\'un des greniers à blé de Normandie, Le Neubourg sert de pôle commercial pour de nombreuses communes agricoles. Les exploitations agricoles représentent une clientèle spécifique.',
    neighbors: ['acquigny', 'louviers', 'conches-en-ouche'],
    sector: 'louviers',
  },
  {
    slug: 'damville',
    name: 'Damville',
    department: '27',
    population: 2500,
    distanceKm: 30,
    intro: 'Damville est un bourg rural du centre de l\'Eure, point central d\'un riche territoire agricole. Ses maisons normandes en brique et silex représentent le bâti traditionnel de la région, avec des installations électriques souvent à remettre aux normes pour sécuriser les habitations.',
    mainIssues: ['Remise aux normes dans les maisons normandes en brique et silex', 'Installations électriques pour bâtiments agricoles', 'Dépannage dans les hameaux isolés', 'Remplacement de tableaux électriques anciens'],
    housingProfile: 'Maisons normandes traditionnelles en brique et silex, corps de ferme, maisons de bourg.',
    specificContext: 'Bourg rural du centre-Eure, Damville est entouré de nombreux hameaux et fermes isolées. Les distances peuvent compliquer les interventions d\'urgence, rendant un électricien local particulièrement précieux.',
    neighbors: ['evreux', 'conches-en-ouche', 'breteuil'],
    sector: 'evreux',
  },
  {
    slug: 'ivry-la-bataille',
    name: 'Ivry-la-Bataille',
    department: '27',
    population: 2700,
    distanceKm: 20,
    intro: 'Ivry-la-Bataille, bourg historique de la vallée de l\'Eure, porte le souvenir de la célèbre bataille d\'Ivry de 1590. Ses maisons normandes, souvent construites en silex et brique, présentent des installations électriques anciennes nécessitant une remise aux normes.',
    mainIssues: ['Rénovation électrique dans les maisons normandes anciennes', 'Mise aux normes pour les gîtes et hébergements ruraux', 'Dépannage dans les zones rurales'],
    housingProfile: 'Maisons normandes traditionnelles, fermes, quelques constructions récentes en périphérie du bourg.',
    specificContext: 'Situé dans la vallée de l\'Eure entre Pacy-sur-Eure et Anet, Ivry-la-Bataille est un bourg rural typique de la région. Le tourisme lié au souvenir historique génère quelques besoins spécifiques.',
    neighbors: ['pacy-sur-eure', 'anet', 'bueil'],
    sector: 'pacy',
  },
  {
    slug: 'anet',
    name: 'Anet',
    department: '27',
    population: 2900,
    distanceKm: 22,
    intro: 'Anet est un village connu pour son château Renaissance exceptionnel, construit pour Diane de Poitiers. Ses maisons du village et les propriétés de prestige alentours nécessitent des interventions électriques soignées et respectueuses du cadre architectural.',
    mainIssues: ['Installations électriques pour propriétés de caractère', 'Éclairage architectural pour mise en valeur du patrimoine', 'Rénovation dans les maisons du village', 'Domotique pour résidences secondaires de prestige'],
    housingProfile: 'Maisons de village typiques, propriétés de caractère, résidences secondaires de prestige autour du château.',
    specificContext: 'Le château d\'Anet, chef-d\'œuvre de la Renaissance française, confère à la commune un prestige particulier. La proximité de l\'Île-de-France attire des acquéreurs aisés en résidence secondaire.',
    neighbors: ['pacy-sur-eure', 'ivry-la-bataille', 'nonancourt'],
    sector: 'pacy',
  },
  {
    slug: 'bueil',
    name: 'Bueil',
    department: '27',
    population: 1200,
    distanceKm: 18,
    intro: 'Bueil est une commune rurale de la vallée de l\'Eure, proche de Pacy-sur-Eure. Village agricole typique de la Normandie, ses maisons en silex et brique constituent le tissu bâti traditionnel de la région.',
    mainIssues: ['Remise aux normes dans les maisons en silex', 'Dépannage électrique dans les zones rurales', 'Installations pour bâtiments agricoles'],
    housingProfile: 'Maisons rurales normandes, fermes, corps de ferme. Installations électriques souvent anciennes.',
    specificContext: 'Commune rurale dans la vallée de l\'Eure, Bueil est caractéristique des villages normands de l\'arrière-pays avec un bâti traditionnel et des exploitations agricoles.',
    neighbors: ['pacy-sur-eure', 'ivry-la-bataille', 'saint-andre-de-leure'],
    sector: 'pacy',
  },
  {
    slug: 'saint-andre-de-leure',
    name: 'Saint-André-de-l\'Eure',
    department: '27',
    population: 3500,
    distanceKm: 20,
    intro: 'Saint-André-de-l\'Eure est une commune proche d\'Évreux, au bord de l\'Iton. Bourg résidentiel en développement, elle accueille de nombreuses familles attirées par sa proximité avec la préfecture et son cadre de vie agréable.',
    mainIssues: ['Installation électrique dans les lotissements récents', 'Rénovation dans les maisons des années 1970-90', 'Installation de bornes de recharge'],
    housingProfile: 'Maisons individuelles récentes et des années 1970-90, quelques logements collectifs. Dynamique résidentielle.',
    specificContext: 'Proche d\'Évreux, Saint-André-de-l\'Eure attire des familles cherchant une vie résidentielle calme avec accès rapide aux services de la préfecture.',
    neighbors: ['evreux', 'pacy-sur-eure', 'damville'],
    sector: 'evreux',
  },
  {
    slug: 'nonancourt',
    name: 'Nonancourt',
    department: '27',
    population: 2100,
    distanceKm: 30,
    intro: 'Nonancourt, aux confins de l\'Eure et de l\'Eure-et-Loir, est un bourg frontière historique sur la route de Paris à Brest. Ses maisons normandes traditionnelles côtoient des constructions plus récentes dans ce bourg commerçant.',
    mainIssues: ['Rénovation électrique dans les maisons normandes', 'Travaux électriques pour commerces locaux', 'Mise aux normes des installations anciennes'],
    housingProfile: 'Maisons normandes en centre-bourg, quelques lotissements récents en périphérie.',
    specificContext: 'Situé sur la Route Nationale 12 (Paris-Brest), Nonancourt est un bourg commerçant de passage. Sa situation de carrefour génère un tissu commercial local actif.',
    neighbors: ['anet', 'verneuil-avre-iton', 'breteuil'],
    sector: 'verneuil',
  },
  {
    slug: 'breteuil',
    name: 'Breteuil',
    department: '27',
    population: 3800,
    distanceKm: 40,
    intro: 'Breteuil est un bourg du Pays d\'Ouche, situé entre Évreux et Verneuil. Centre de vie pour un bassin rural important, ses commerces, services et habitations ont des besoins électriques variés, de la rénovation simple à l\'installation complète.',
    mainIssues: ['Rénovation électrique dans les maisons du centre-bourg', 'Installation pour artisans et petits commerces', 'Dépannage dans les communes rurales environnantes'],
    housingProfile: 'Maisons de bourg normandes, quelques lotissements récents, fermes dans les alentours.',
    specificContext: 'Breteuil est un pôle de service pour l\'ensemble du Pays d\'Ouche, un territoire rural vaste mais bien structuré autour de ce bourg.',
    neighbors: ['damville', 'verneuil-avre-iton', 'conches-en-ouche'],
    sector: 'verneuil',
  },
  {
    slug: 'brionne',
    name: 'Brionne',
    department: '27',
    population: 4200,
    distanceKm: 50,
    intro: 'Brionne est une petite ville de la vallée de la Risle, au cœur du Pays du Roumois. Son site pittoresque avec le donjon médiéval surplombant la Risle en fait une destination appréciée, avec un patrimoine architectural qui nécessite des soins particuliers.',
    mainIssues: ['Rénovation électrique dans le bâti ancien', 'Installations pour gîtes et hébergements touristiques', 'Travaux électriques respectueux du patrimoine'],
    housingProfile: 'Maisons normandes en centre-ville, pavillons en périphérie, fermes dans les alentours.',
    specificContext: 'Brionne est au cœur du Pays du Roumois, entre Bernay et Pont-Audemer. Sa position dans la vallée de la Risle lui confère un attrait touristique.',
    neighbors: ['bernay', 'beaumont-le-roger', 'pont-audemer'],
    sector: 'bernay',
  },
  {
    slug: 'beaumont-le-roger',
    name: 'Beaumont-le-Roger',
    department: '27',
    population: 2800,
    distanceKm: 55,
    intro: 'Beaumont-le-Roger, avec ses ruines de l\'abbaye de la Trinité, est une commune de la vallée de la Risle. Bourg rural avec un centre historique remarquable, ses maisons normandes ont besoin d\'interventions électriques régulières.',
    mainIssues: ['Mise aux normes dans les maisons normandes', 'Rénovation pour les résidences secondaires', 'Dépannage électrique rural'],
    housingProfile: 'Maisons normandes typiques, fermes, quelques constructions récentes.',
    specificContext: 'Commune de la vallée de la Risle avec un patrimoine remarquable, Beaumont-le-Roger attire des résidents cherchant la tranquillité de la campagne normande.',
    neighbors: ['bernay', 'brionne'],
    sector: 'bernay',
  },
  {
    slug: 'bourg-achard',
    name: 'Bourg-Achard',
    department: '27',
    population: 3200,
    distanceKm: 70,
    intro: 'Bourg-Achard est une commune proche de Rouen, sur l\'axe Rouen-Pont-Audemer. Commune résidentielle attractive pour les actifs rouennais, elle connaît un développement pavillonnaire soutenu nécessitant des installations électriques neuves.',
    mainIssues: ['Installation électrique pour pavillons neufs', 'Rénovation dans les maisons existantes', 'Installation de bornes de recharge pour navetteurs'],
    housingProfile: 'Pavillons récents et des années 80-90, quelques maisons normandes plus anciennes.',
    specificContext: 'Proche de Rouen et de l\'autoroute A13, Bourg-Achard attire des actifs rouennais cherchant un cadre de vie résidentiel tout en restant proches de leur lieu de travail.',
    neighbors: ['pont-audemer'],
    sector: 'pont-audemer',
  },
  {
    slug: 'acquigny',
    name: 'Acquigny',
    department: '27',
    population: 1600,
    distanceKm: 30,
    intro: 'Acquigny est un charmant village de la confluence de l\'Eure et de l\'Iton, connu pour son château et ses jardins remarquables. Village résidentiel proche d\'Évreux et de Louviers, il accueille une population aisée dans un cadre verdoyant.',
    mainIssues: ['Installation électrique pour propriétés de caractère', 'Domotique et éclairage de prestige', 'Rénovation dans les maisons de village'],
    housingProfile: 'Maisons de village normandes, propriétés de caractère, quelques constructions récentes.',
    specificContext: 'Acquigny est connu pour son château et ses jardins exceptionnels. Sa position entre Évreux et Louviers en fait un village résidentiel prisé.',
    neighbors: ['evreux', 'louviers', 'le-neubourg'],
    sector: 'evreux',
  },
  {
    slug: 'gravigny',
    name: 'Gravigny',
    department: '27',
    population: 3800,
    distanceKm: 22,
    intro: 'Gravigny est une commune périurbaine d\'Évreux, intégrée dans l\'aire urbaine de la préfecture. Commune résidentielle avec un important parc pavillonnaire, elle bénéficie de tous les services de la ville d\'Évreux tout en offrant un cadre plus calme.',
    mainIssues: ['Installation électrique dans les lotissements récents', 'Rénovation dans les pavillons des années 70-90', 'Installation de bornes de recharge'],
    housingProfile: 'Pavillons individuels des années 1970-2000, quelques petits collectifs. Commune résidentielle.',
    specificContext: 'Commune périurbaine d\'Évreux, Gravigny offre un cadre résidentiel calme à quelques minutes de la préfecture.',
    neighbors: ['evreux', 'miserey', 'damville'],
    sector: 'evreux',
  },
  {
    slug: 'miserey',
    name: 'Miserey',
    department: '27',
    population: 1400,
    distanceKm: 20,
    intro: 'Miserey est une commune rurale à proximité d\'Évreux, dans la plaine du Neubourg. Village agricole avec un tissu bâti traditionnel normand, ses maisons en silex et brique constituent le paysage caractéristique de la région.',
    mainIssues: ['Remise aux normes dans les maisons rurales', 'Installations pour bâtiments agricoles', 'Dépannage en zone rurale'],
    housingProfile: 'Maisons rurales normandes, corps de ferme, quelques maisons individuelles récentes.',
    specificContext: 'Village agricole proche d\'Évreux, Miserey est représentatif des communes rurales de la plaine du Neubourg avec son architecture traditionnelle normande.',
    neighbors: ['evreux', 'gravigny', 'damville'],
    sector: 'evreux',
  },
  {
    slug: 'le-cormier',
    name: 'Le Cormier',
    department: '27',
    population: 600,
    distanceKm: 0,
    intro: 'Le Cormier est la commune du chef d\'entreprise de Home Électricité Normandie. Ce village rural de l\'Eure concentre tous les atouts de la campagne normande : tranquillité, paysages verdoyants et architecture traditionnelle. L\'entreprise y est domiciliée et intervient quotidiennement dans les environs.',
    mainIssues: ['Entretien et maintenance des installations électriques locales', 'Rénovation dans les maisons normandes', 'Dépannage pour les habitants du village et des hameaux voisins'],
    housingProfile: 'Maisons normandes en silex et brique, fermes, corps de ferme traditionnels.',
    specificContext: 'Le Cormier est la commune de domiciliation de Home Électricité Normandie. Jérôme Berthou connaît parfaitement ce village et tous les alentours, garantissant une intervention ultra-rapide.',
    neighbors: ['pacy-sur-eure', 'bueil', 'saint-andre-de-leure'],
    sector: 'pacy',
  },
  {
    slug: 'saint-marcel',
    name: 'Saint-Marcel',
    department: '27',
    population: 9000,
    distanceKm: 35,
    intro: 'Saint-Marcel est une commune de l\'agglomération de Vernon, sur la rive droite de la Seine. Commune résidentielle dynamique, elle accueille de nombreuses familles dans des lotissements pavillonnaires modernes et bénéficie de l\'attractivité de Vernon.',
    mainIssues: ['Installation électrique dans les pavillons récents', 'Rénovation dans les maisons des années 80-90', 'Installation de bornes de recharge'],
    housingProfile: 'Pavillons récents et des années 80-90, quelques appartements. Commune résidentielle en développement.',
    specificContext: 'Faisant partie de l\'agglomération de Vernon, Saint-Marcel bénéficie des services de la ville tout en offrant un cadre résidentiel pavillonnaire. La proximité de Paris en fait un lieu attractif.',
    neighbors: ['vernon', 'gaillon'],
    sector: 'vernon',
  },
  {
    slug: 'la-couture-boussey',
    name: 'La Couture-Boussey',
    department: '27',
    population: 1500,
    distanceKm: 18,
    intro: 'La Couture-Boussey est un village connu pour sa tradition de fabrication d\'instruments de musique à vent, unique en son genre. Ce patrimoine artisanal exceptionnel se reflète dans un tissu de maisons bourgeoises et d\'ateliers qui ont des besoins électriques spécifiques.',
    mainIssues: ['Installations électriques pour ateliers artisanaux', 'Rénovation dans les maisons bourgeoises', 'Éclairage professionnel'],
    housingProfile: 'Maisons bourgeoises, anciens ateliers artisanaux, maisons de village normandes.',
    specificContext: 'Village unique en Europe pour sa tradition d\'instruments à vent (flûtes, hautbois...), La Couture-Boussey possède un caractère artisanal particulier qui génère des besoins électriques spécifiques.',
    neighbors: ['pacy-sur-eure', 'ivry-la-bataille', 'anet'],
    sector: 'pacy',
  },
  {
    slug: 'ezy-sur-eure',
    name: 'Ézy-sur-Eure',
    department: '27',
    population: 2800,
    distanceKm: 25,
    intro: 'Ézy-sur-Eure est une commune au bord de la rivière Eure, proche de Pacy-sur-Eure. Village résidentiel tranquille, elle accueille des familles appréciées pour son cadre de vie le long de la rivière.',
    mainIssues: ['Rénovation électrique dans les maisons en bord de rivière', 'Installation pour maisons individuelles', 'Dépannage électrique local'],
    housingProfile: 'Maisons individuelles normandes, quelques constructions récentes en bord de rivière.',
    specificContext: 'Commune de la vallée de l\'Eure entre Pacy-sur-Eure et Nonancourt, Ézy-sur-Eure est un village résidentiel calme très apprécié des familles.',
    neighbors: ['pacy-sur-eure', 'anet', 'ivry-la-bataille'],
    sector: 'pacy',
  },
  {
    slug: 'rugles',
    name: 'Rugles',
    department: '27',
    population: 2500,
    distanceKm: 50,
    intro: 'Rugles est une commune du Pays d\'Ouche, ancienne ville métallurgique. Les forges de Rugles constituent un patrimoine industriel important, et la commune garde cette tradition d\'artisanat et d\'industrie qui génère des besoins électriques professionnels spécifiques.',
    mainIssues: ['Installations électriques pour ateliers et petites industries', 'Rénovation dans les maisons ouvrières', 'Mise aux normes des installations industrielles'],
    housingProfile: 'Maisons ouvrières historiques, ateliers reconvertis, maisons de bourg normandes.',
    specificContext: 'Ancienne ville de forges du Pays d\'Ouche, Rugles conserve une tradition industrielle et artisanale. La présence d\'ateliers et de petites entreprises génère des besoins électriques professionnels.',
    neighbors: ['bernay', 'conches-en-ouche', 'breteuil'],
    sector: 'bernay',
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find(c => c.slug === slug);
}

export function getCityNeighbors(city: City): City[] {
  return city.neighbors
    .map(slug => getCityBySlug(slug))
    .filter((c): c is City => c !== undefined);
}

export const CITY_SECTORS = [
  { id: 'evreux', label: 'Secteur Évreux', cities: ['evreux', 'gravigny', 'miserey', 'saint-andre-de-leure', 'acquigny', 'damville', 'conches-en-ouche'] },
  { id: 'pacy', label: 'Secteur Pacy-sur-Eure', cities: ['pacy-sur-eure', 'ivry-la-bataille', 'anet', 'bueil', 'ezy-sur-eure', 'la-couture-boussey', 'le-cormier', 'nonancourt'] },
  { id: 'vernon', label: 'Secteur Vernon', cities: ['vernon', 'saint-marcel', 'gaillon', 'les-andelys', 'val-de-reuil'] },
  { id: 'louviers', label: 'Secteur Louviers', cities: ['louviers', 'val-de-reuil', 'le-neubourg', 'acquigny'] },
  { id: 'bernay', label: 'Secteur Bernay', cities: ['bernay', 'brionne', 'beaumont-le-roger', 'rugles'] },
  { id: 'verneuil', label: 'Secteur Verneuil', cities: ['verneuil-avre-iton', 'breteuil', 'nonancourt'] },
  { id: 'pont-audemer', label: 'Secteur Pont-Audemer', cities: ['pont-audemer', 'bourg-achard'] },
  { id: 'andelys', label: 'Secteur Les Andelys', cities: ['les-andelys', 'gaillon', 'val-de-reuil'] },
  { id: 'gisors', label: 'Secteur Gisors', cities: ['gisors'] },
];

// ─── FAQ Data ──────────────────────────────────────────────────────────────────

export interface FAQ {
  question: string;
  answer: string;
}

export const HOME_FAQS: FAQ[] = [
  {
    question: 'Comment trouver un bon électricien dans l\'Eure (27) ?',
    answer: 'Pour trouver un électricien fiable dans l\'Eure, privilégiez un artisan local avec une adresse dans le département, joignable facilement et capable d\'intervenir rapidement. Home Électricité Normandie est basée à Le Cormier (27120) et intervient dans tout le département de l\'Eure. Contactez-nous au 06 29 51 89 35 ou via WhatsApp pour obtenir un devis rapide.',
  },
  {
    question: 'Quand faut-il appeler un électricien d\'urgence ?',
    answer: 'Appelez un électricien d\'urgence dans ces situations : disjoncteur général qui saute et refuse de se réenclencher, odeur de brûlé provenant d\'une prise ou d\'un tableau électrique, étincelles visibles, prise qui chauffe anormalement, panne totale d\'électricité, court-circuit visible. En cas de danger immédiat (flammes, fumée), coupez le disjoncteur général et appelez le 18 (pompiers).',
  },
  {
    question: 'Combien coûte un dépannage électrique dans l\'Eure ?',
    answer: 'Le coût d\'un dépannage électrique dépend de la nature de la panne, du temps d\'intervention et des pièces éventuellement nécessaires. Nous pratiquons des tarifs transparents et fournissons toujours une estimation avant intervention. Contactez-nous pour obtenir un devis gratuit adapté à votre situation.',
  },
  {
    question: 'Pourquoi mon disjoncteur saute-t-il sans cesse ?',
    answer: 'Un disjoncteur qui saute régulièrement peut indiquer : une surcharge sur un circuit (trop d\'appareils branchés simultanément), un défaut d\'isolation sur un câble (vieillissement, rongeurs), un appareil électroménager défectueux, ou un tableau électrique sous-dimensionné. Un électricien professionnel peut diagnostiquer la cause précise et y remédier durablement.',
  },
  {
    question: 'Quand faut-il rénover ou remplacer un tableau électrique ?',
    answer: 'Votre tableau électrique doit être remplacé si : il a plus de 25-30 ans, il ne dispose pas d\'un interrupteur différentiel de 30mA en tête de tableau, les disjoncteurs sont du type "ancienne génération" (sans différentiel pour les salles d\'eau), les câbles sont en aluminium ou en ancien matériau, ou si vous faites des travaux importants qui augmentent les besoins électriques.',
  },
  {
    question: 'Comment savoir si mon installation électrique est dangereuse ?',
    answer: 'Signes d\'une installation dangereuse : câbles apparents mal protégés, prises qui chauffent ou noircissent, disjoncteurs qui sautent fréquemment, absence de mise à la terre, tableau électrique vétuste, câbles en aluminium, installation sans différentiel, maison construite avant les années 1990. En cas de doute, faites réaliser un diagnostic électrique par un professionnel.',
  },
  {
    question: 'Faut-il rénover l\'électricité d\'une maison ancienne ?',
    answer: 'Oui, la rénovation électrique est fortement recommandée dans les maisons de plus de 20-25 ans, et indispensable dans les maisons de plus de 40 ans. Une installation vieillissante est potentiellement dangereuse (risque d\'incendie, d\'électrocution) et peu performante. Lors d\'une vente, un diagnostic électrique est obligatoire pour les installations de plus de 15 ans.',
  },
  {
    question: 'Peut-on installer une borne de recharge à domicile dans l\'Eure ?',
    answer: 'Oui, Home Électricité Normandie installe des bornes de recharge pour véhicules électriques (IRVE) à domicile dans toute l\'Eure. L\'installation nécessite un tableau électrique dimensionné et une ligne dédiée. Des aides financières existent (ADVENIR pour les particuliers en maison individuelle ou en copropriété). Contactez-nous pour un devis.',
  },
  {
    question: 'Dans quelles communes de l\'Eure intervenez-vous ?',
    answer: 'Home Électricité Normandie intervient dans tout le département de l\'Eure (27) : Évreux, Pacy-sur-Eure, Vernon, Louviers, Val-de-Reuil, Les Andelys, Gisors, Bernay, Pont-Audemer, et toutes les communes environnantes. Nous sommes basés au Cormier (27120) et pouvons intervenir rapidement sur l\'ensemble du département.',
  },
  {
    question: 'Comment demander un devis ou prendre rendez-vous ?',
    answer: 'Plusieurs façons de nous contacter : par téléphone au 06 29 51 89 35 (appel ou SMS), via WhatsApp pour un contact direct et rapide, via notre formulaire de devis en ligne, ou via notre formulaire de prise de rendez-vous. Nous répondons dans les meilleurs délais et proposons des créneaux adaptés à votre emploi du temps.',
  },
];

export const DEPANNAGE_FAQS: FAQ[] = [
  {
    question: 'Que faire en cas de panne totale d\'électricité dans ma maison ?',
    answer: 'Vérifiez d\'abord si vos voisins ont également une panne (coupure réseau Enedis). Ensuite, vérifiez votre disjoncteur général (tableau électrique) et tentez de le réenclencher. Si la panne persiste, vérifiez les disjoncteurs individuels un par un. Si rien ne fonctionne, appelez un électricien. Ne touchez jamais à un câble électrique si vous n\'êtes pas qualifié.',
  },
  {
    question: 'Pourquoi une prise électrique ne fonctionne-t-elle plus ?',
    answer: 'Une prise défectueuse peut être causée par : un disjoncteur de circuit déclenché, un interrupteur différentiel déclenché, une prise détériorée mécaniquement, un câble sectionné, ou un problème de connexion. Vérifiez le tableau électrique et tentez de réenclencher le disjoncteur concerné. Si le problème persiste, faites appel à un électricien.',
  },
  {
    question: 'Que faire en cas d\'odeur de brûlé provenant d\'une prise ou d\'un câble ?',
    answer: 'En cas d\'odeur de brûlé électrique : coupez immédiatement le disjoncteur de la zone concernée (ou le disjoncteur général), ne rebranchez aucun appareil, n\'utilisez pas la prise. Appelez immédiatement un électricien. Une odeur de brûlé peut indiquer un court-circuit, une surchauffe ou une connexion défectueuse — situation potentiellement incendiaire.',
  },
  {
    question: 'Un disjoncteur qui saute est-il dangereux ?',
    answer: 'Le disjoncteur est un dispositif de protection : quand il saute, c\'est qu\'il remplit son rôle de protection. Ce n\'est pas dangereux en soi. Cependant, si un disjoncteur saute régulièrement sur le même circuit, c\'est le signe d\'un problème sous-jacent (surcharge, défaut isolation, appareil défectueux) qui nécessite l\'intervention d\'un électricien.',
  },
  {
    question: 'Quelle est la durée d\'une intervention de dépannage électrique ?',
    answer: 'La durée dépend de la nature de la panne. Un disjoncteur déclenché se règle en quelques minutes. Une recherche de court-circuit peut prendre 1 à 3 heures. Un remplacement de prise ou d\'interrupteur demande 30 minutes à 1 heure. Nous intervenons avec le matériel nécessaire pour résoudre la grande majorité des pannes en une seule visite.',
  },
];
