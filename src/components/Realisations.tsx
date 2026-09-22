import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Globe, ShoppingBag, Smartphone, Layout, Cloud, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface ProjectItem {
  title: string;
  category: string;
  filterId: string;
  link: string;
  image: string;
  desc_fr: string;
  desc_en: string;
  tech: string[];
  color: string;
  isSaas?: boolean;
  featured?: boolean;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Tous: <Layout size={14} />,
  SaaS: <Cloud size={14} />,
  Web: <Globe size={14} />,
  'E-commerce': <ShoppingBag size={14} />,
  App: <Smartphone size={14} />,
};

const PROJECTS: ProjectItem[] = [
  // =================== SAAS APPS ===================
  {
    title: 'ADS STORE (Academic Data Store)',
    category: 'SaaS Scolaire',
    filterId: 'SaaS',
    link: 'https://academic-data-store.vercel.app/',
    image: '/images/Saas image/ADS store.png',
    desc_fr: "SaaS de Gestion Scolaire Sécurisée. Portail d'accès National aux Établissements Scolaires pour le suivi en temps réel des absences, de la saisie des notes séquentielles et de l'édition des rapports d'audit.",
    desc_en: "Secure School Management SaaS platform. National portal for real-time tracking of student attendance, sequential grades and automated academic audit reports.",
    tech: ['Next.js', 'React', 'PostgreSQL', 'Tailwind'],
    color: '#3b82f6',
    isSaas: true,
    featured: true,
  },
  {
    title: 'Lingua-Flow',
    category: 'SaaS E-learning',
    filterId: 'SaaS',
    link: 'https://lingua-flow-chi.vercel.app/',
    image: '/images/Saas image/lingua flow.png',
    desc_fr: "SaaS plateforme de E-learning moderne pour l'apprentissage et le perfectionnement des langues allemande et italienne avec cours interactifs et suivi des progrès.",
    desc_en: "Modern E-learning SaaS platform dedicated to German and Italian language mastery with interactive exercises and student progress dashboards.",
    tech: ['React', 'Next.js', 'Tailwind', 'Node.js'],
    color: '#06b6d4',
    isSaas: true,
    featured: true,
  },
  {
    title: 'LinguaInscript',
    category: 'SaaS Inscriptions',
    filterId: 'SaaS',
    link: 'https://linguainscript.vercel.app/',
    image: '/images/Saas image/lingua inscript.png',
    desc_fr: "SaaS plateforme de gestion complète des inscriptions, plannings de cours, gestion des formulaires et encaissements dans les centres de cours de langues.",
    desc_en: "Comprehensive language school registration SaaS for student onboarding, course scheduling, billing and administrative workflows.",
    tech: ['Next.js', 'React', 'Supabase', 'Tailwind'],
    color: '#6366f1',
    isSaas: true,
    featured: true,
  },
  {
    title: 'Gym-Sync',
    category: 'SaaS Fitness & Gym',
    filterId: 'SaaS',
    link: 'https://gym-sync-ruby.vercel.app/',
    image: '/images/Saas image/Gymsync.png',
    desc_fr: "SaaS de gestion des adhérents de salle de sport, gestion des abonnements, contrôle d'accès, plannings des coachs et encaissements.",
    desc_en: "Gym and fitness center member management SaaS, handling automated subscriptions, access control, coach booking and revenue analytics.",
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    color: '#ef4444',
    isSaas: true,
    featured: true,
  },
  {
    title: 'Matoa',
    category: 'SaaS Auto-École',
    filterId: 'SaaS',
    link: 'https://matoa-phi.vercel.app/',
    image: '/images/Saas image/matoa.png',
    desc_fr: "SaaS d'auto-école en ligne : révision du code de la route, plannings de leçons de conduite, examens blancs interactifs et suivi des candidats.",
    desc_en: "Online driving school SaaS platform featuring highway code practice, lesson booking, mock exams and candidate driving performance tracking.",
    tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    color: '#f59e0b',
    isSaas: true,
  },
  {
    title: 'Mboa Money Track',
    category: 'SaaS Finance',
    filterId: 'SaaS',
    link: 'https://mboa-money-track.vercel.app/',
    image: '/images/Saas image/MBOA MONEYTRACK.png',
    desc_fr: "SaaS pour suivi financier personnel et professionnel, gestion de trésorerie, suivi des budgets et statistiques graphiques intelligentes.",
    desc_en: "Financial tracker SaaS for individuals and businesses, budgeting, cash flow monitoring, expense classification and real-time visual analytics.",
    tech: ['React', 'Next.js', 'Chart.js', 'Tailwind'],
    color: '#10b981',
    isSaas: true,
  },

  // =================== PROJETS WEB & CLIENTS ===================
  {
    title: 'AFEDIE',
    category: 'Web Institutionnel',
    filterId: 'Web',
    link: 'https://www.afedie.org/',
    image: '/images/Afedie.png',
    desc_fr: "Plateforme officielle de l'AFEDIE (Association des Femmes de la Dignité et de l'Excellence), ONG camerounaise basée à Yaoundé. Site vitrine institutionnel et humanitaire moderne, adhésion et collecte de dons.",
    desc_en: "Official platform for AFEDIE, a Cameroonian humanitarian NGO based in Yaounde. Modern showcase site facilitating membership, donation campaigns and social project tracking.",
    tech: ['Next.js', 'React', 'Tailwind', 'i18n'],
    color: '#3b82f6',
    featured: true,
  },
  {
    title: 'La Lingua International Academy',
    category: 'Web Académie',
    filterId: 'Web',
    link: 'https://www.linguainternationalacademytraining.com/',
    image: '/images/la lingua.png',
    desc_fr: "Plateforme web officielle de Lingua International Academy, centre de formation et cabinet d'accompagnement académique international (Yaoundé, Italie, Bulgarie).",
    desc_en: "Official web platform of Lingua International Academy, an international training and academic consulting academy based in Yaounde, Italy and Bulgaria.",
    tech: ['Next.js', 'Supabase', 'Tailwind', 'TypeScript'],
    color: '#6366f1',
    featured: true,
  },
  {
    title: 'CSBIE',
    category: 'Web Scolaire',
    filterId: 'Web',
    link: 'https://www.csbie.org/',
    image: '/images/csbie.png',
    desc_fr: "Site web institutionnel officiel du Complexe Scolaire Bilingue International Espérance, établissement d'enseignement privé d'excellence à Bastos (Yaoundé), fondé par Mme Crescence Baboké.",
    desc_en: "Official institutional website of the prestigious private bilingual school CSBIE located in Bastos, Yaounde, founded by Mrs. Crescence Baboke.",
    tech: ['WordPress', 'HTML5', 'CSS3', 'SEO'],
    color: '#3b82f6',
    featured: true,
  },
  {
    title: "Justine Kem's",
    category: 'E-commerce & Mode',
    filterId: 'E-commerce',
    link: 'https://www.justinekems.com/fr/',
    image: '/images/justine kem\'s.png',
    desc_fr: "Site officiel d’une maison de haute couture, stylisme et académie de mode camerounaise, basée à Yaoundé (Nvog-Ada / Essos) et à Bafoussam (Cami Toyota).",
    desc_en: "Official website and digital storefront for Justine Kem's haute couture house and fashion design academy, based in Yaounde and Bafoussam.",
    tech: ['Next.js', 'React', 'Tailwind', 'E-commerce'],
    color: '#ec4899',
    featured: true,
  },
  {
    title: 'Meventhouse',
    category: 'Web Décoration',
    filterId: 'Web',
    link: 'https://www.meventhouse.com/fr/',
    image: '/images/meventhouse.png',
    desc_fr: "Site web officiel d'une entreprise de décoration événementielle de prestige, mariages féériques et réceptions haut de gamme.",
    desc_en: "Official website for a premier event decoration, luxury wedding styling and bespoke staging company.",
    tech: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    color: '#8b5cf6',
  },
  {
    title: 'David Kevin Abala',
    category: 'Portfolio & Médias',
    filterId: 'Web',
    link: 'https://david-kevin-abala.vercel.app/',
    image: '/images/kevin abala david.png',
    desc_fr: "Plateforme numérique institutionnelle et portfolio professionnel de Kevin ABALA — Journaliste, Présentateur TV, Producteur Éditorial et Consultant Média à Yaoundé.",
    desc_en: "Official digital platform and portfolio of Kevin ABALA — TV Anchor, Journalist, Editorial Producer and Media Consultant in Yaounde.",
    tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    color: '#eab308',
  },
  {
    title: 'Camuq & Twins Empire Ltd',
    category: 'Web Corporate',
    filterId: 'Web',
    link: 'https://www.ctempireltd.com/',
    image: '/images/camuq & twins empire ltd.png',
    desc_fr: "Partenaire bilingue de confiance pour le secrétariat, l'imprimerie, les Éditions, le commerce général et la formation professionnelle.",
    desc_en: "Trusted bilingual corporate partner for secretariat, publishing, printing, general trade and professional vocational training.",
    tech: ['WordPress', 'HTML5/CSS3', 'JavaScript'],
    color: '#0284c7',
  },
  {
    title: 'MDS Manager',
    category: 'App Santé & Gestion',
    filterId: 'App',
    link: 'https://mds-manager-nine.vercel.app/',
    image: '/images/mds-manager.png',
    desc_fr: "Application de gestion des étudiants, dossiers académiques et plannings dans le centre de santé La Main du Secours.",
    desc_en: "Student, academic records and clinical training management application for La Main du Secours health institution.",
    tech: ['React', 'Next.js', 'Node.js', 'Tailwind'],
    color: '#10b981',
  },
  {
    title: 'Fecasavate',
    category: 'Web Fédération',
    filterId: 'Web',
    link: 'https://www.fecasavate.cm/',
    image: '/images/fecasavate.png',
    desc_fr: "Site web officiel de la Fédération Camerounaise de Savate (boxe française, canne de combat et disciplines associées).",
    desc_en: "Official website of the Cameroonian Savate Federation (French boxing, canne de combat and affiliated combat sports).",
    tech: ['WordPress', 'PHP', 'HTML/CSS', 'Responsive'],
    color: '#dc2626',
  },
  {
    title: 'Expertise au Cameroun',
    category: 'Web Institutionnel',
    filterId: 'Web',
    link: 'https://www.expertiseaucameroun.org/fr',
    image: '/images/expertiseaucameroun.png',
    desc_fr: "Plateforme web officielle de l'organisation Expertise Eau Cameroun dédiée à la gestion, valorisation et préservation des ressources hydriques.",
    desc_en: "Official platform of Expertise Eau Cameroun organization dedicated to sustainable water management and hydraulic infrastructure.",
    tech: ['Next.js', 'React', 'Tailwind', 'i18n'],
    color: '#0284c7',
  },
  {
    title: 'Dualvibe',
    category: 'E-commerce Digital',
    filterId: 'E-commerce',
    link: 'https://dualvibe.vercel.app/',
    image: '/images/dual vibe.png',
    desc_fr: "Plateforme innovante de vente de produits digitaux complets, templates, bundles et solutions logicielles en Afrique.",
    desc_en: "Innovative e-commerce store delivering digital products, premium templates, software bundles and creative assets across Africa.",
    tech: ['Next.js', 'React', 'Stripe', 'Tailwind'],
    color: '#a855f7',
  },
  {
    title: 'Batela Foods',
    category: 'E-commerce Alimentaire',
    filterId: 'E-commerce',
    link: 'https://www.batelafoods.com/fr/',
    image: '/images/batelafoods.png',
    desc_fr: "Site web officiel d'une charcuterie artisanale d'exception Made in Cameroun, catalogue produits et commandes directes.",
    desc_en: "Official website of Batela Foods, premium artisanal charcuterie and gourmet food Made in Cameroon.",
    tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    color: '#ea580c',
  },
  {
    title: 'Le Modenais Groupe',
    category: 'Web Corporate',
    filterId: 'Web',
    link: 'https://le-modenais-groupe.vercel.app/',
    image: '/images/le-modenais-groupe.png',
    desc_fr: "Site corporate multi-activités présentant les différentes filiales, expertises et investissements du groupe Le Modenais.",
    desc_en: "Corporate website presenting the subsidiaries, capabilities, investments and multi-sector services of Le Modenais Group.",
    tech: ['React', 'Next.js', 'Tailwind', 'CSS'],
    color: '#3b82f6',
  },
  {
    title: 'Grüß Gott',
    category: 'Web Langues',
    filterId: 'Web',
    link: 'https://grussgott.vercel.app/',
    image: '/images/grussgott.png',
    desc_fr: "Site web officiel d'un centre spécialisé dans les cours de langue allemande et la préparation aux examens de niveau A1 à C1.",
    desc_en: "Official website of a dedicated German language learning center preparing students for A1-C1 proficiency examinations.",
    tech: ['React', 'Next.js', 'Tailwind'],
    color: '#eab308',
  },
  {
    title: 'La Chancellerie & Me',
    category: 'Web Services',
    filterId: 'Web',
    link: 'https://la-chancellerie-me.vercel.app/',
    image: '/images/La chancellerie & me.png',
    desc_fr: "Plateforme digitale moderne et élégante pour La Chancellerie & Me, services professionnels et conseil personnalisé.",
    desc_en: "Modern and elegant digital showcase for La Chancellerie & Me, providing tailored consulting and professional services.",
    tech: ['React', 'Tailwind', 'Framer Motion'],
    color: '#06b6d4',
  },
  {
    title: 'Wan Company',
    category: 'Web Médias & Studio',
    filterId: 'Web',
    link: 'https://wan-company.vercel.app/',
    image: '/images/wan company.png',
    desc_fr: "Plateforme officielle d'un créateur de contenus et studio de production média & audiovisuelle au Cameroun.",
    desc_en: "Official platform for a dynamic digital media production studio and creative content agency in Cameroon.",
    tech: ['React', 'Next.js', 'Tailwind'],
    color: '#6366f1',
  },
  {
    title: 'Delmas Nguessi',
    category: 'Portfolio',
    filterId: 'Web',
    link: 'https://delmas-nguessi.vercel.app/',
    image: '/images/Delmas nguessi.png',
    desc_fr: "Portfolio professionnel élégant mettant en valeur l'expertise, les travaux et le parcours de Delmas Nguessi.",
    desc_en: "High-end professional portfolio showcasing the expertise, career trajectory and achievements of Delmas Nguessi.",
    tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    color: '#3b82f6',
  },
  {
    title: 'GS Clean',
    category: 'Web Services',
    filterId: 'Web',
    link: 'https://gs-clean.vercel.app/',
    image: '/images/gs clean.png',
    desc_fr: "Site web vitrine d'une entreprise professionnelle spécialisée dans le nettoyage industriel, l'hygiène et l'entretien des locaux.",
    desc_en: "Showcase website for a professional commercial cleaning, facility maintenance and industrial hygiene company.",
    tech: ['React', 'Next.js', 'Tailwind'],
    color: '#10b981',
  },
  {
    title: 'Bimiberd Fitness & Physio',
    category: 'App & Web Fitness',
    filterId: 'App',
    link: 'https://bimiberdfitness-physio.vercel.app/',
    image: '/images/Bimiberd fitness.png',
    desc_fr: "Application et plateforme web fitness & physiothérapie moderne, programmes d'entraînement sur mesure et coaching santé.",
    desc_en: "State-of-the-art fitness & physiotherapy web app featuring personalized workout regimes and virtual health coaching.",
    tech: ['Next.js', 'React', 'Tailwind', 'PWA'],
    color: '#06b6d4',
  },
  {
    title: 'Global IT',
    category: 'Web Tech & Cloud',
    filterId: 'Web',
    link: 'https://global-it.vercel.app/',
    image: '/images/Global it.png',
    desc_fr: "Site vitrine pour services technologiques avancés, cybersécurité, infogérance et infrastructure réseau d'entreprise.",
    desc_en: "Corporate website for advanced IT technology services, cybersecurity, managed cloud and enterprise network solutions.",
    tech: ['React', 'Next.js', 'Tailwind'],
    color: '#3b82f6',
  },
  {
    title: 'Mika Saveurs Authentiques',
    category: 'E-commerce Gastronomie',
    filterId: 'E-commerce',
    link: 'https://mikasaveursauthentiques-2fpl.vercel.app/',
    image: '/images/mika saveur.png',
    desc_fr: "Boutique en ligne dédiée à la gastronomie camerounaise, épices traditionnelles et saveurs authentiques du terroir.",
    desc_en: "E-commerce platform celebrating authentic Cameroonian gastronomy, indigenous spices and local culinary delicacies.",
    tech: ['Next.js', 'React', 'Tailwind', 'E-commerce'],
    color: '#ea580c',
  },
  {
    title: 'Mboko Jobs',
    category: 'Plateforme Emploi',
    filterId: 'Web',
    link: 'https://www.tiktok.com/@mbokojobs',
    image: '/images/mboko jobs.png',
    desc_fr: "Plateforme innovante pour les demandes d'emploi, le recrutement et la valorisation des compétences professionnelles.",
    desc_en: "Innovative job opportunity platform bridging talents and recruiters across Cameroon and the African continent.",
    tech: ['React', 'Next.js', 'Social Growth'],
    color: '#06b6d4',
    featured: true,
  },
  {
    title: 'Dollard Bijoux',
    category: 'E-commerce Bijouterie',
    filterId: 'E-commerce',
    link: '#',
    image: '/images/Dollard bijoux.png',
    desc_fr: "Boutique e-commerce raffinée de bijoux haut de gamme, montres précieuses et accessoires de luxe.",
    desc_en: "Luxurious e-commerce boutique specializing in fine jewelry, luxury watches and timeless fashion accessories.",
    tech: ['Next.js', 'React', 'Tailwind'],
    color: '#f59e0b',
  },
  {
    title: 'NHR Digital Agency',
    category: 'Agence Web & IA',
    filterId: 'Web',
    link: 'https://nhr-digital-agency.vercel.app/',
    image: '/images/dual vibe.png',
    desc_fr: "Notre vitrine technologique officielle — agence digitale 360°, développement web & mobile, solutions IA et croissance numérique.",
    desc_en: "Our official flagship digital agency platform — full-stack engineering, bespoke AI systems and high-converting marketing.",
    tech: ['React', 'Vite', 'Framer Motion', 'Tailwind'],
    color: '#3b82f6',
    featured: true,
  },
];

export default function Realisations() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const [activeFilter, setActiveFilter] = useState('Tous');

  const categories = [
    { id: 'Tous', label: isEn ? 'All (25)' : 'Tous (25)', icon: CATEGORY_ICONS['Tous'] },
    { id: 'SaaS', label: isEn ? 'SaaS Platforms (6)' : 'SaaS & Logiciels (6)', icon: CATEGORY_ICONS['SaaS'] },
    { id: 'Web', label: isEn ? 'Web & Corporate' : 'Sites Web & Vitrines', icon: CATEGORY_ICONS['Web'] },
    { id: 'E-commerce', label: 'E-commerce', icon: CATEGORY_ICONS['E-commerce'] },
    { id: 'App', label: isEn ? 'Apps & Health' : 'Applications Mobiles', icon: CATEGORY_ICONS['App'] },
  ];

  const filtered = activeFilter === 'Tous'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterId === activeFilter);

  return (
    <section id="realisations" className="py-32 px-6 bg-nhr-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-nhr-blue/50 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-nhr-blue/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-nhr-indigo/5 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-bold tracking-widest text-nhr-blue uppercase mb-4 block animate-text-glow flex items-center justify-center gap-2"
          >
            <Sparkles size={14} /> {isEn ? 'Proven Engineering Portfolio' : 'Portfolio de Réalisations & Déploiements Réels'}
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold mb-6 leading-tight text-white">
            {isEn ? 'Our ' : 'Nos '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nhr-blue via-cyan-400 to-indigo-400">
              {isEn ? 'Projects & SaaS Deployments' : 'Réalisations & Plateformes SaaS'}
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {isEn
              ? 'Over 25 real-world platforms, web applications, e-commerce ecosystems and bespoke SaaS software designed and deployed by NHR Digital Agency.'
              : 'Plus de 25 plateformes web réelles, écosystèmes e-commerce, applications d\'entreprise et logiciels SaaS conçus et déployés par NHR Digital Agency.'}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl glass border border-nhr-blue/25 shadow-glow-blue">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`relative flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  activeFilter === cat.id
                    ? 'text-white'
                    : 'text-[var(--text-secondary)] hover:text-white'
                }`}
              >
                {activeFilter === cat.id && (
                  <motion.div
                    layoutId="activeRealisationFilter"
                    className="absolute inset-0 bg-nhr-blue rounded-xl -z-10 shadow-glow-blue"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid avec images réelles et néons rotatifs */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} isEn={isEn} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="/devis"
            className="inline-flex items-center gap-3 px-10 py-5 bg-nhr-blue-dark rounded-2xl font-bold text-white text-base shadow-glow-blue hover:bg-nhr-blue transition-all hover:scale-105 active:scale-95 uppercase tracking-wider"
          >
            {isEn ? 'Start Your Project With Us' : 'Démarrer un projet similaire'} <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, idx, isEn }: { project: ProjectItem; idx: number; isEn: boolean; key?: React.Key }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.4) }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="neon-card-wrapper group flex flex-col h-full"
    >
      <div className="neon-card-content flex flex-col h-full overflow-hidden">
        {/* Barre couleur lumineuse supérieure */}
        <div
          className="h-1.5 w-full transition-all duration-500 group-hover:h-2"
          style={{ backgroundColor: project.color, boxShadow: `0 0 20px ${project.color}80` }}
        />

        {/* Image réelle du projet */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-950 border-b border-white/5">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              // Fallback gracieux si l'image a un problème
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-nhr-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
          
          {/* Badges sur l'image */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md"
              style={{ color: project.color, borderColor: `${project.color}50`, backgroundColor: `${project.color}25` }}
            >
              {project.category}
            </span>
            {project.isSaas && (
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 backdrop-blur-md animate-pulse">
                SaaS
              </span>
            )}
          </div>

          {project.featured && (
            <div className="absolute top-3 right-3 z-10">
              <span className="text-[9px] font-mono uppercase tracking-wider text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-400/40 backdrop-blur-md">
                ★ Star
              </span>
            </div>
          )}
        </div>

        {/* Contenu textuel */}
        <div className="flex flex-col flex-1 p-6 justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-nhr-blue-electric transition-colors leading-snug">
                {project.title}
              </h3>
              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-nhr-blue/20 transition-colors flex-shrink-0 border border-white/10 hover:border-nhr-blue/40"
                  aria-label={`Visiter ${project.title}`}
                >
                  <ExternalLink size={15} className="text-gray-400 group-hover:text-nhr-blue-electric" />
                </a>
              )}
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-5 line-clamp-3">
              {isEn ? project.desc_en : project.desc_fr}
            </p>
          </div>

          <div>
            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Bouton d'action */}
            {project.link !== '#' ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest border border-nhr-blue/30 text-white hover:border-nhr-blue hover:bg-nhr-blue/15 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{isEn ? 'Visit Live Website' : 'Visiter le site en direct'}</span>
                <ExternalLink size={13} className="text-nhr-blue-electric" />
              </a>
            ) : (
              <div className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest border border-white/5 text-gray-500">
                {isEn ? 'Available on Request' : 'Disponible sur demande'}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
