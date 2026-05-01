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
    id: "web",
    title_fr: "Sites Web Vitrine",
    title_en: "Showcase Websites",
    description_fr: "Design moderne et navigation intuitive pour votre entreprise.",
    description_en: "Modern design and intuitive navigation for your business.",
    icon: "Globe"
  },
  {
    id: "ecommerce",
    title_fr: "E-commerce",
    title_en: "E-commerce",
    description_fr: "Vendez vos produits en ligne avec des solutions sécurisées.",
    description_en: "Sell your products online with secure solutions.",
    icon: "ShoppingBag"
  },
  {
    id: "saas",
    title_fr: "Applications Web / SaaS",
    title_en: "Web Apps / SaaS",
    description_fr: "Développement sur mesure d'outils complexes.",
    description_en: "Custom development of complex tools.",
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
    features_fr: ["1 page", "Design responsive", "Formulaire de contact"],
    features_en: ["1 page", "Responsive design", "Contact form"]
  },
  {
    name: "Standard",
    price: {
      africa: "250 000 FCFA",
      europe: "1 900 €",
      america: "2 500 $"
    },
    features_fr: ["8-12 pages", "SEO Optimisé", "Blog intégré", "Formation"],
    features_en: ["8-12 pages", "SEO Optimized", "Integrated blog", "Training"]
  }
];
