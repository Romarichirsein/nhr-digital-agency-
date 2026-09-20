export interface Service {
  id: string;
  title_fr: string;
  title_en: string;
  description_fr: string;
  description_en: string;
  icon: string;
}

export interface PricingPack {
  name: string;
  price: {
    africa: string;
    europe: string;
    america: string;
  };
  features_fr: string[];
  features_en: string[];
}

export const SERVICES: Service[] = [
  {
    id: "ia_formation",
    title_fr: "Formation en IA",
    title_en: "AI Training & Coaching",
    description_fr: "Formations pratiques aux outils d'IA générative (ChatGPT, Claude, Perplexity, Google AI Studio) pour booster votre productivité.",
    description_en: "Hands-on training with generative AI tools (ChatGPT, Claude, Perplexity, Google AI Studio) to maximize your productivity.",
    icon: "Cpu"
  },
  {
    id: "consultant_ia",
    title_fr: "Consultant Digital & IA",
    title_en: "Digital & AI Consulting",
    description_fr: "Audit, conseil stratégique et intégration de solutions IA sur mesure pour moderniser vos processus d'entreprise.",
    description_en: "Audit, strategic consulting and bespoke AI integration to streamline and modernize your business workflows.",
    icon: "Brain"
  },
  {
    id: "films_ia",
    title_fr: "Réalisation de Films IA",
    title_en: "AI Film & Video Production",
    description_fr: "Production audiovisuelle cinématographique propulsée par l'intelligence artificielle (génération de scènes, voice-over, FX).",
    description_en: "Cinematic video and short film production powered by state-of-the-art generative video AI models.",
    icon: "Film"
  },
  {
    id: "visuel_image",
    title_fr: "Création de Visuels Publicitaires Image",
    title_en: "Advertising Visuals & Banners",
    description_fr: "Conception graphique d'affiches, bannières et visuels promotionnels à fort impact pour vos campagnes marketing.",
    description_en: "High-converting graphic design, ad banners and promotional visual identity for your brand marketing.",
    icon: "Image"
  },
  {
    id: "visuel_video_ia",
    title_fr: "Création de Visuels Publicitaires Vidéo IA",
    title_en: "AI Video Ads Creation",
    description_fr: "Spots publicitaires vidéo générés par IA, optimisés pour TikTok, Facebook, Instagram et YouTube Shorts.",
    description_en: "Dynamic AI-generated video commercials tailored for TikTok, Facebook Ads, Instagram Reels and YouTube Shorts.",
    icon: "Video"
  },
  {
    id: "seo",
    title_fr: "Référencement Naturel (SEO)",
    title_en: "Organic SEO Optimization",
    description_fr: "Stratégie de référencement naturel pour positionner votre site web en 1ère page de Google et acquérir du trafic qualifié.",
    description_en: "Comprehensive organic search engine optimization to place your business on Google's first page.",
    icon: "Search"
  },
  {
    id: "google_maps",
    title_fr: "Placement sur Google Maps",
    title_en: "Google Maps & Local SEO",
    description_fr: "Création, optimisation et référencement de votre fiche Google My Business pour dominer la recherche locale.",
    description_en: "Google Business Profile creation, verification and local maps optimization to attract nearby customers.",
    icon: "MapPin"
  },
  {
    id: "social_media",
    title_fr: "Gestion de Réseaux Sociaux",
    title_en: "Social Media Management",
    description_fr: "Community management 360°, calendrier éditorial, animation de communauté et croissance d'audience.",
    description_en: "Full-scale community management, content scheduling, audience growth and brand engagement.",
    icon: "Share2"
  },
  {
    id: "youtubeurs",
    title_fr: "Création de Contenu & YouTube",
    title_en: "Content Creation & YouTube",
    description_fr: "Accompagnement de créateurs de contenu, tutoriels digitaux, scripts, montage et stratégie d'acquisition YouTube.",
    description_en: "YouTube channel optimization, digital tutorial workflows, scriptwriting, editing and audience monetization.",
    icon: "Youtube"
  },
  {
    id: "musique_ia",
    title_fr: "Création de Musiques Personnalisées",
    title_en: "Custom Audio & AI Music Creation",
    description_fr: "Composition musicale sur mesure, jingles publicitaires et ambiances sonores uniques adaptées à votre marque.",
    description_en: "Custom music composition, audio branding, advertising jingles and unique atmospheric soundscapes.",
    icon: "Music"
  },
  {
    id: "web",
    title_fr: "Sites Web Vitrine & Institutionnels",
    title_en: "Corporate & Showcase Websites",
    description_fr: "Design moderne, animations néon et navigation responsive ultra-rapide pour valoriser votre entreprise.",
    description_en: "Modern, high-end responsive design with ultra-fast loading speeds to showcase your brand authority.",
    icon: "Globe"
  },
  {
    id: "ecommerce",
    title_fr: "Boutiques E-commerce",
    title_en: "E-commerce Platforms",
    description_fr: "Vendez vos produits en ligne avec paiement sécurisé (Stripe, Mobile Money, PayPal) et gestion des stocks.",
    description_en: "Sell your products online with seamless, secure payment gateways (Stripe, Mobile Money, PayPal).",
    icon: "ShoppingBag"
  },
  {
    id: "saas",
    title_fr: "Applications Web & SaaS",
    title_en: "Web Apps & Custom SaaS",
    description_fr: "Développement sur mesure d'outils SaaS complets (e-learning, gestion scolaire, gestion sportive, etc.).",
    description_en: "End-to-end custom SaaS software architecture (e-learning, gym management, school management).",
    icon: "Layers"
  }
];

export const PRICING_PACKS: PricingPack[] = [
  {
    name: "Landing Page",
    price: {
      africa: "80 000 FCFA",
      europe: "300 €",
      america: "400 $"
    },
    features_fr: ["1 page haute conversion", "Design responsive & néon", "Formulaire & WhatsApp", "SEO de base", "Hébergement inclus"],
    features_en: ["1 high-converting page", "Responsive & neon design", "Contact form & WhatsApp", "Basic SEO", "Hosting included"]
  },
  {
    name: "Standard",
    price: {
      africa: "250 000 FCFA",
      europe: "1 900 €",
      america: "2 500 $"
    },
    features_fr: ["8-12 pages", "SEO Optimisé & Google Maps", "Blog ou Catalogue", "Animations Motion Design", "Formation & Support 3 mois"],
    features_en: ["8-12 pages", "SEO & Google Maps setup", "Blog or Product Catalog", "Custom Motion Animations", "Training & 3-month support"]
  },
  {
    name: "SaaS & IA Pro",
    price: {
      africa: "Sur Devis",
      europe: "Custom Quote",
      america: "Custom Quote"
    },
    features_fr: ["Application Web SaaS", "Intégration d'outils IA", "Base de données & Auth", "Paiement en ligne", "Tableau de bord d'administration"],
    features_en: ["Custom SaaS Web Application", "AI APIs & models integration", "Database & Auth systems", "Online payment checkout", "Full Admin Dashboard"]
  }
];
