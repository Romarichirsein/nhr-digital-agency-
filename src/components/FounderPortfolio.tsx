import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Mail, MapPin, Award, Briefcase, Code2, ChevronDown, Download, Phone,
  GraduationCap, Calendar, Sparkles, CheckCircle2, Globe, Heart,
  BookOpen, Music, Plane, PenTool, Utensils, Laptop, MessageSquare, Layers,
  Youtube, Video, ExternalLink, Share2, Bot, Cpu
} from 'lucide-react';
import romaricPhoto from '@/src/assets/romaric.jpeg';

// Tech stack avec pourcentages précis demandés par l'utilisateur
const TECHS = [
  { name: 'WordPress',      category_fr: 'CMS & E-commerce', category_en: 'CMS & E-commerce', logo: 'https://cdn.simpleicons.org/wordpress/21759B', level: 100, color: '#21759B', desc_fr: 'Sites vitrines, e-commerces, blogs, portfolios & refontes', desc_en: 'Corporate websites, e-commerce, blogs, portfolios & redesigns' },
  { name: 'HTML5 / CSS3',   category_fr: 'Markup & Styles', category_en: 'Markup & Styles', logo: 'https://cdn.simpleicons.org/html5/E34F26',    level: 100, color: '#E34F26', desc_fr: 'Structure sémantique, Tailwind CSS, Glassmorphism, néons', desc_en: 'Semantic structure, Tailwind CSS, Glassmorphism, neons' },
  { name: 'UI/UX Design',   category_fr: 'Conception d\'Interfaces', category_en: 'Interface Design', logo: 'https://cdn.simpleicons.org/figma/F24E1E', level: 100, color: '#F24E1E', desc_fr: 'Maquettage Figma, ergonomie utilisateur & prototypes', desc_en: 'Figma wireframing, user-centric ergonomics & prototypes' },
  { name: 'JavaScript',     category_fr: 'Langage Web', category_en: 'Web Language', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E',level: 60, color: '#F7DF1E', desc_fr: 'ES6+, DOM dynamique, logique client & APIs', desc_en: 'ES6+, dynamic DOM, client-side logic & APIs' },
  { name: 'React',          category_fr: 'UI Library', category_en: 'UI Library', logo: 'https://cdn.simpleicons.org/react/61DAFB',    level: 60, color: '#61DAFB', desc_fr: 'Composants interactifs, Hooks, Framer Motion', desc_en: 'Interactive components, Hooks, Framer Motion' },
  { name: 'Next.js',        category_fr: 'Framework React', category_en: 'React Framework', logo: 'https://cdn.simpleicons.org/nextdotjs/ffffff', level: 50, color: '#ffffff', desc_fr: 'SSR, SSG, App Router, performances maximales', desc_en: 'SSR, SSG, App Router, maximal web performance' },
  { name: 'Flutter',        category_fr: 'Mobile Cross-Platform', category_en: 'Cross-Platform Mobile', logo: 'https://cdn.simpleicons.org/flutter/02569B', level: 50, color: '#02569B', desc_fr: 'Apps mobiles iOS & Android fluides & natives', desc_en: 'Fast, smooth native iOS & Android mobile applications' },
  { name: 'GitHub',         category_fr: 'Contrôle de Version', category_en: 'Version Control', logo: 'https://cdn.simpleicons.org/github/ffffff', level: 50, color: '#94a3b8', desc_fr: 'Gestion de code, CI/CD, collaboration open-source', desc_en: 'Code management, CI/CD pipelines & collaboration' },
  { name: 'Vercel',         category_fr: 'Déploiement Cloud', category_en: 'Cloud Deployment', logo: 'https://cdn.simpleicons.org/vercel/ffffff', level: 50, color: '#60a5fa', desc_fr: 'Déploiements ultra-rapides, edge functions & SSL', desc_en: 'Instant edge deployments, serverless functions & SSL' },
];

// Outils d'Intelligence Artificielle & Plateformes demandés
const AI_TOOLS = [
  { name: 'Google AI Studio', category: 'LLM & Prototypage', level: 89, color: '#4285F4', icon: '🤖' },
  { name: 'Antigravity',      category: 'Agentic Coding & DeepMind', level: 85, color: '#6366f1', icon: '⚡' },
  { name: 'ChatGPT (OpenAI)', category: 'Prompting & Automation', level: 80, color: '#10a37f', icon: '🧠' },
  { name: 'Claude (Anthropic)', category: 'Deep Reasoning & Code', level: 70, color: '#d97706', icon: '✨' },
  { name: 'Perplexity AI',    category: 'Recherche & Fact-Checking', level: 70, color: '#20b2aa', icon: '🔍' },
  { name: 'Google Stitch',    category: 'Design & Code Workflows', level: 70, color: '#ea4335', icon: '🧵' },
  { name: 'Google Flow',      category: 'Pipeline & Automatisation', level: 70, color: '#34a853', icon: '🌊' },
  { name: 'Facebook Ads & IA',category: 'Marketing & Acquisition', level: 70, color: '#1877f2', icon: '📢' },
  { name: 'TikTok Ads & Growth', category: 'Viral Video & Marketing', level: 70, color: '#ff0050', icon: '🎵' },
];

// Réseaux sociaux et chaînes du Fondateur
const SOCIAL_CHANNELS = [
  {
    name: 'NHR DIGITAL AGENCY',
    platform: 'YouTube',
    desc_fr: 'Chaîne de tutoriels sur le digital, l\'intelligence artificielle et l\'entrepreneuriat digital.',
    desc_en: 'YouTube channel dedicated to digital tutorials, AI tools and digital entrepreneurship.',
    link: 'https://www.youtube.com/channel/UCl0SgOq2lnxUg_Z2uKHy9Ng',
    icon: <Youtube size={24} className="text-red-500" />,
    color: '#ef4444',
    badge: 'Tutoriels & IA'
  },
  {
    name: 'CARNAGE PRODUCTION',
    platform: 'YouTube',
    desc_fr: 'Chaîne officielle pour la réalisation et diffusion de mes différents films et courts métrages.',
    desc_en: 'Official channel for the production and broadcasting of cinematic films and short movies.',
    link: 'https://www.youtube.com/@Carnage_production',
    icon: <Video size={24} className="text-red-400" />,
    color: '#dc2626',
    badge: 'Cinéma & Films IA'
  },
  {
    name: '@mbokojobs',
    platform: 'TikTok',
    desc_fr: 'Contenus dynamiques sur les opportunités professionnelles, emplois et conseils de carrière.',
    desc_en: 'Dynamic short-form content on career opportunities, hiring tips and digital skills.',
    link: 'https://www.tiktok.com/@mbokojobs',
    icon: <Share2 size={24} className="text-cyan-400" />,
    color: '#06b6d4',
    badge: 'Carrière & Emploi'
  },
  {
    name: 'Dr Romaric Hirsein',
    platform: 'Facebook',
    desc_fr: 'Page officielle de tutoriels technologiques, astuces digitales et partages professionnels.',
    desc_en: 'Official page for tech tutorials, digital insights and professional development.',
    link: 'https://web.facebook.com/profile.php?id=61592524810840',
    icon: <Globe size={24} className="text-blue-500" />,
    color: '#3b82f6',
    badge: 'Tutoriels & Tech'
  },
  {
    name: 'Carnage Production',
    platform: 'Facebook',
    desc_fr: 'Page dédiée aux actualités cinématographiques, coulisses de tournage et projets de films.',
    desc_en: 'Page dedicated to cinema news, behind-the-scenes and film production projects.',
    link: 'https://web.facebook.com/profile.php?id=61590917223952',
    icon: <Film size={24} className="text-indigo-400" />,
    color: '#6366f1',
    badge: 'Page Films'
  }
];

// Formations réelles du CV + NOUVELLE LICENCE PRO 2025
const FORMATIONS = [
  {
    diplome_fr: 'Licence Professionnelle en Génie Logiciel',
    diplome_en: 'Bachelor\'s Degree (BSc) in Software Engineering',
    mention_fr: 'Obtenue en 2025 · Mention Spéciale',
    mention_en: 'Graduated in 2025 · With Honors',
    etablissement_fr: 'Institut Supérieur d’Étude Scientifiques, Technologiques et Managériale (ISESTM) - Yaoundé',
    etablissement_en: 'Higher Institute of Scientific, Technological and Managerial Studies (ISESTM) - Yaounde',
    annee: '2024 - 2025 (Diplômé 2025)',
    badgeColor: '#06b6d4',
    highlight: true,
    details_fr: 'Approfondissement des architectures logicielles distribuées, génie logiciel avancé, gestion de projets digitaux complexes, sécurité applicative et développement web/mobile de haute performance.',
    details_en: 'Advanced distributed software architectures, advanced software engineering, complex digital project management, application security and high-performance web/mobile development.',
  },
  {
    diplome_fr: 'Brevet de Technicien Supérieur (BTS) en Génie Logiciel',
    diplome_en: 'Higher National Diploma (HND) in Software Engineering',
    mention_fr: 'Avec Mention (6ème National Cameroun 🇨🇲)',
    mention_en: 'With Honors (6th National Rank Cameroon 🇨🇲)',
    etablissement_fr: 'Institut Supérieur d’Étude Scientifiques, Technologiques et Managériale (ISESTM) - Yaoundé',
    etablissement_en: 'Higher Institute of Scientific, Technological and Managerial Studies (ISESTM) - Yaounde',
    annee: '2023 - 2024',
    badgeColor: '#3b82f6',
    highlight: true,
    details_fr: 'Conception d\'architectures logicielles, développement full-stack, modélisation de bases de données relationnelles et conduite de projets agiles. Lauréat national (6e du Cameroun).',
    details_en: 'Software architecture design, full-stack development, relational database modeling and agile project management. National laureate (ranked 6th across Cameroon).',
  },
  {
    diplome_fr: 'Baccalauréat C (Série Scientifique)',
    diplome_en: 'Scientific Baccalaureate (Series C - Math & Physics)',
    mention_fr: 'Admis',
    mention_en: 'Passed',
    etablissement_fr: 'Lycée d’Abang Nkongoa - Yaoundé',
    etablissement_en: 'Abang Nkongoa High School - Yaounde',
    annee: '2021 - 2022',
    badgeColor: '#60a5fa',
    highlight: false,
    details_fr: 'Formation rigoureuse en mathématiques avancées, physique fondamentale, chimie et démarche analytique cartésienne.',
    details_en: 'Rigorous foundation in pure mathematics, physics, chemistry and analytical problem solving.',
  },
  {
    diplome_fr: 'Probatoire C',
    diplome_en: 'Probatoire C (Advanced Scientific Examination)',
    mention_fr: 'Avec Mention',
    mention_en: 'With Honors',
    etablissement_fr: 'Lycée d’Abang Nkongoa - Yaoundé',
    etablissement_en: 'Abang Nkongoa High School - Yaounde',
    annee: '2020 - 2021',
    badgeColor: '#6366f1',
    highlight: false,
    details_fr: 'Validation avec mention des épreuves scientifiques de mathématiques et physique.',
    details_en: 'Validated with honors in advanced mathematics and physical science.',
  },
  {
    diplome_fr: 'BEPC (Brevet d\'Études du Premier Cycle - Série Espagnol)',
    diplome_en: 'Junior High Certificate (BEPC - Spanish Series)',
    mention_fr: 'Avec Mention',
    mention_en: 'With Honors',
    etablissement_fr: 'Lycée d’Abang Nkongoa - Yaoundé',
    etablissement_en: 'Abang Nkongoa High School - Yaounde',
    annee: '2018 - 2019',
    badgeColor: '#a855f7',
    highlight: false,
    details_fr: 'Obtention avec mention honorifique, options scientifiques et langue vivante espagnole.',
    details_en: 'Obtained with honors, scientific electives and Spanish foreign language.',
  },
  {
    diplome_fr: 'CEP (Certificat d’Études Primaires)',
    diplome_en: 'Primary School Certificate (CEP)',
    mention_fr: 'Admis',
    mention_en: 'Passed',
    etablissement_fr: 'Enseignement de Base',
    etablissement_en: 'Basic Education',
    annee: '2014 - 2015',
    badgeColor: '#94a3b8',
    highlight: false,
    details_fr: 'Bases solides de l\'enseignement primaire d\'excellence.',
    details_en: 'Solid elementary education and academic fundamentals.',
  },
];

// Expériences professionnelles
const EXPERIENCES = [
  {
    role_fr: 'Chargé de Communication sur les réseaux sociaux & Création / Gestion des sites webs',
    role_en: 'Social Media Communications Manager & Web Platforms Lead',
    company: 'Wellborne',
    period: '25 Juin 2024 – En cours',
    current: true,
    tasks_fr: [
      'Élaboration et mise en œuvre de stratégies de communication digitale complètes.',
      'Gestion, maintenance et refonte des sites web dont l’entreprise possède à sa disposition.',
      'Création de contenu engageant pour les médias sociaux, les newsletters et le site web de l’entreprise.',
    ],
    tasks_en: [
      'Design and execution of full digital communication and branding strategies.',
      'Comprehensive administration, maintenance and redesign of corporate websites.',
      'Creation of high-impact content for social platforms, email campaigns and digital showcases.',
    ],
  },
  {
    role_fr: 'Stagiaire académique BTS — Génie Logiciel',
    role_en: 'Software Engineering Academic Intern',
    company: 'Glotelho Sarl (Global Telecommunication House)',
    period: 'Juin 2023 – Septembre 2023',
    current: false,
    tasks_fr: [
      'Stage académique au sein du leader du e-commerce au Cameroun (Glotelho).',
      'Thème de soutenance : "Automatisation du dispatching des courses au sein d’une entreprise de E-commerce — cas de Glotelho".',
      'Analyse des processus opérationnels, modélisation et automatisation de l\'assignation des livraisons.',
    ],
    tasks_en: [
      'Academic internship at the premier e-commerce leader in Cameroon (Glotelho).',
      'Thesis topic: "Automation of errand and delivery dispatching within an E-commerce company — Glotelho case".',
      'Operational workflow modeling and automated dispatch dispatching algorithms.',
    ],
  },
  {
    role_fr: 'Fondateur & Lead Développeur Full-Stack',
    role_en: 'Founder & Full-Stack Tech Lead',
    company: 'NHR Digital Agency',
    period: '2020 – Présent',
    current: true,
    tasks_fr: [
      'Création et direction générale de l\'agence digitale NHR Digital Agency au Cameroun.',
      'Conception, développement et livraison de plus de 24 plateformes web, e-commerce et applications SaaS innovantes.',
      'Management d\'équipe, gestion de projet agile, relation client et intégration IA.',
    ],
    tasks_en: [
      'Founding and technical leadership of NHR Digital Agency in Cameroon.',
      'Design, architecture and delivery of over 24 web, e-commerce and SaaS platforms.',
      'Agile team management, client partnerships and cutting-edge AI integration.',
    ],
  },
];

// Langues avec ajout de l'Allemand niveau B1 demandé
const LANGUAGES = [
  { name_fr: 'Français', name_en: 'French', level_fr: 'Langue maternelle', level_en: 'Native language', percent: 100, flag: '🇨🇲' },
  { name_fr: 'Anglais', name_en: 'English', level_fr: 'Niveau moyen / professionnel', level_en: 'Professional working proficiency', percent: 80, flag: '🇬🇧' },
  { name_fr: 'Allemand', name_en: 'German', level_fr: 'Niveau B1 (Intermédiaire supérieur)', level_en: 'B1 Level (Upper Intermediate)', percent: 70, flag: '🇩🇪' },
  { name_fr: 'Espagnol', name_en: 'Spanish', level_fr: 'Notions (Série BEPC)', level_en: 'Basic conversational', percent: 45, flag: '🇪🇸' },
];

// Centres d'intérêt
const INTERESTS = [
  { label_fr: 'Développer les sites & SaaS', label_en: 'Web & SaaS Development', icon: <Laptop size={22} />, color: '#3b82f6' },
  { label_fr: 'Réalisation de films IA', label_en: 'AI Film Production', icon: <Video size={22} />, color: '#ef4444' },
  { label_fr: 'Écrire les chroniques', label_en: 'Writing Chronicles', icon: <BookOpen size={22} />, color: '#60a5fa' },
  { label_fr: 'Lecture & Veille tech', label_en: 'Reading & Tech Watch', icon: <GraduationCap size={22} />, color: '#6366f1' },
  { label_fr: 'Création de Musique', label_en: 'Music & Production', icon: <Music size={22} />, color: '#a855f7' },
  { label_fr: 'Voyages', label_en: 'Travel & Exploration', icon: <Plane size={22} />, color: '#06b6d4' },
  { label_fr: 'Cuisine', label_en: 'Culinary Arts', icon: <Utensils size={22} />, color: '#f59e0b' },
];

function Film(props: { size?: number; className?: string }) {
  return <Video {...props} />;
}

/* Particules d'arrière-plan */
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 4 === 0 ? '#3b82f6' : i % 4 === 1 ? '#60a5fa' : i % 4 === 2 ? '#6366f1' : '#06b6d4',
            boxShadow: `0 0 12px ${i % 2 === 0 ? '#3b82f6' : '#60a5fa'}`,
          }}
          animate={{
            y: [0, -(Math.random() * 260 + 120)],
            x: [0, (Math.random() - 0.5) * 60],
            opacity: [0, 0.95, 0],
            scale: [0.4, 1.4, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

/* Orbe magnétique qui suit la souris */
function MagneticOrb() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
    >
      <div 
        className="w-[650px] h-[650px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.13) 0%, rgba(99,102,241,0.06) 45%, transparent 70%)' }} 
      />
    </motion.div>
  );
}

/* Formes géométriques 3D */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[450, 700, 950].map((size, i) => (
        <motion.div
          key={i}
          animate={{ 
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            rotate: { duration: 25 + i * 10, repeat: Infinity, ease: 'linear' },
            scale: { duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: size, 
            height: size,
            borderColor: `rgba(59, 130, 246, ${0.15 - i * 0.03})`,
            boxShadow: `0 0 ${25 + i * 10}px rgba(59, 130, 246, ${0.08 - i * 0.02})`,
          }}
        />
      ))}
      {[
        { top: '10%', right: '8%', size: 60, delay: 0 },
        { top: '65%', left: '5%', size: 45, delay: 1.2 },
        { top: '35%', right: '3%', size: 30, delay: 2.2 },
        { top: '85%', right: '10%', size: 40, delay: 3 },
      ].map((d, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [-20, 20, -20], 
            x: [-10, 10, -10],
            rotate: [0, 90, 180, 270, 360] 
          }}
          transition={{ duration: 7 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
          className="absolute border"
          style={{
            ...d,
            width: d.size, 
            height: d.size,
            borderColor: 'rgba(96, 165, 250, 0.45)',
            boxShadow: '0 0 18px rgba(96, 165, 250, 0.4)',
            transform: 'rotate(45deg)',
          }}
        />
      ))}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full animate-pulse"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)', filter: 'blur(55px)' }} 
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', filter: 'blur(55px)' }} 
      />
    </div>
  );
}

export default function FounderPortfolio() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const bgTranslate = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const STATS = [
    { value: '2025', label: isEn ? 'BSc in Software Engineering' : 'Licence Pro Génie Logiciel', sub: isEn ? 'Graduated in 2025' : 'Diplômé en 2025', icon: <GraduationCap size={24} />, color: '#06b6d4' },
    { value: '6ème', label: isEn ? '6th National Rank HND' : '6e National BTS Génie Logiciel', sub: isEn ? 'Excellence & Honors' : 'Avec Mention', icon: <Award size={24} />, color: '#60a5fa' },
    { value: '100%', label: isEn ? 'Web, Mobile & UI/UX Mastery' : 'Maîtrise Web, Mobile & UI/UX', sub: isEn ? 'WordPress, Next, Flutter' : 'WordPress, Next, Flutter', icon: <Code2 size={24} />, color: '#3b82f6' },
    { value: '24+', label: isEn ? 'Websites & SaaS Platforms' : 'Sites Web & SaaS Livrés', sub: isEn ? 'Proven Track Record' : 'Afrique & International', icon: <Briefcase size={24} />, color: '#6366f1' },
  ];

  return (
    <section ref={containerRef} className="relative bg-nhr-black overflow-hidden selection:bg-nhr-blue/40">
      <MagneticOrb />
      <motion.div style={{ y: bgTranslate }} className="pointer-events-none">
        <FloatingShapes />
        <Particles />
      </motion.div>

      {/* =========================================================================
          HERO SECTION — Fondateur avec photo réelle & néons rotatifs
          ========================================================================= */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20"
      >
        {/* Badge Disponibilité & Titre */}
        <motion.div
          initial={{ opacity: 0, y: -25, scale: 0.95 }} 
          animate={{ opacity: 1, y: 0, scale: 1 }} 
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-nhr-blue/50 bg-nhr-blue/10 text-nhr-blue-electric text-xs font-bold mb-8 tracking-widest uppercase shadow-glow-blue"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nhr-blue-electric opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nhr-blue" />
          </span>
          {t('founder.badge')}
        </motion.div>

        {/* Photo officielle de Romaric avec triple anneaux néon rotatifs et badges orbitaux */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring', bounce: 0.35 }}
          className="relative mb-8 group"
        >
          {/* Anneau Néon Externe Tournant 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-6 rounded-full pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0%, #06b6d4 20%, #3b82f6 40%, transparent 60%, #6366f1 80%, transparent 100%)',
              filter: 'blur(8px)',
              opacity: 0.95,
            }}
          />
          {/* Anneau Néon Inverse Tournant 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-full pointer-events-none"
            style={{
              background: 'conic-gradient(from 180deg, transparent 0%, #60a5fa 35%, transparent 70%)',
              filter: 'blur(12px)',
              opacity: 0.85,
            }}
          />
          {/* Halo permanent vibrant */}
          <div 
            className="absolute -inset-2 rounded-full pointer-events-none animate-pulse"
            style={{ 
              background: 'radial-gradient(circle, rgba(96,165,250,0.5), transparent 70%)', 
              filter: 'blur(10px)' 
            }} 
          />

          {/* Conteneur de l'image de Romaric */}
          <motion.div 
            whileHover={{ scale: 1.06, rotate: [0, -1, 1, 0] }}
            transition={{ duration: 0.4 }}
            className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden z-10 border-4 border-nhr-blue/90 shadow-2xl"
            style={{ boxShadow: '0 0 45px rgba(59,130,246,0.7), inset 0 0 20px rgba(0,0,0,0.5)' }}
          >
            <img 
              src={romaricPhoto} 
              alt="NGUEMI HIRSEIN ROMARIC" 
              className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nhr-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Badge Flottant 1 : "Licence Pro 2025" */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-2 -left-4 sm:-left-8 z-20 px-3.5 py-1.5 rounded-full bg-cyan-950/90 text-cyan-300 text-[10px] font-mono font-bold uppercase tracking-wider border border-cyan-400/50 shadow-lg flex items-center gap-1.5 backdrop-blur-md"
            style={{ boxShadow: '0 0 20px rgba(6,182,212,0.6)' }}
          >
            <GraduationCap size={14} className="text-cyan-400" />
            <span>{isEn ? 'BSc 2025' : 'Licence Pro 2025'}</span>
          </motion.div>

          {/* Badge Flottant 2 : "6e National BTS" */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -bottom-2 -right-4 sm:-right-8 z-20 px-3.5 py-1.5 rounded-full bg-nhr-blue text-white text-[10px] font-mono font-bold uppercase tracking-wider border-2 border-[#020617] shadow-lg flex items-center gap-1.5"
            style={{ boxShadow: '0 0 25px rgba(59,130,246,0.9)' }}
          >
            <Award size={14} className="text-yellow-300 fill-yellow-300" />
            <span>{t('founder.rank_badge')}</span>
          </motion.div>
        </motion.div>

        {/* Nom Complet avec Dégradé Néon Animé */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold mb-3 tracking-tight leading-[1.1]"
        >
          <span className="text-white">NGUEMI HIRSEIN </span>
          <span className="text-gradient-animated">ROMARIC</span>
        </motion.h1>

        {/* Titre professionnel du CV */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-xl font-mono text-nhr-blue-electric font-bold tracking-wider uppercase mb-6"
          style={{ textShadow: '0 0 15px rgba(96,165,250,0.6)' }}
        >
          {t('founder.title_role')}
        </motion.p>

        {/* Badges d'informations personnelles du CV */}
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mb-8"
        >
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-cyan-400/30 bg-cyan-950/20 text-cyan-300 flex items-center gap-1.5 shadow-sm">
            <GraduationCap size={13} className="text-cyan-400" />
            {isEn ? 'BSc in Software Engineering (2025)' : 'Licence Pro Génie Logiciel (2025)'}
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/10 glass text-[var(--text-secondary)] flex items-center gap-1.5">
            <Calendar size={13} className="text-nhr-blue" />
            {t('founder.born')}
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/10 glass text-[var(--text-secondary)] flex items-center gap-1.5">
            <MapPin size={13} className="text-nhr-blue" />
            {t('founder.location')}
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/10 glass text-[var(--text-secondary)] flex items-center gap-1.5">
            <Briefcase size={13} className="text-nhr-blue" />
            Wellborne & Glotelho
          </span>
        </motion.div>

        {/* Philosophie et Description du CV */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5 }}
          className="neon-card-wrapper max-w-3xl mb-10 text-left"
        >
          <div className="neon-card-content p-6 sm:p-8 relative">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex w-10 h-10 rounded-xl bg-nhr-blue/20 text-nhr-blue items-center justify-center flex-shrink-0 border border-nhr-blue/30 shadow-glow-blue">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-nhr-blue-electric mb-2">
                  {t('founder.philo_title')}
                </h2>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed italic">
                  « {t('founder.philo_text')} »
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                  <span>{t('founder.cv_source')}</span>
                  <span className="text-nhr-blue font-bold">Nguemi Hirsein Romaric</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Boutons d'action CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="/CV_Romaric_Hirsein.pdf"
            download="CV_Romaric_Hirsein.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(59,130,246,0.8)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl font-bold text-white flex items-center gap-2.5 text-sm uppercase tracking-wider"
            style={{ 
              background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #6366f1 100%)', 
              boxShadow: '0 0 25px rgba(59,130,246,0.5)' 
            }}
          >
            <Download size={18} /> {t('founder.download_cv')}
          </motion.a>

          <motion.a
            href="https://wa.me/237692738430?text=Bonjour%20Romaric,%20j'ai%20consult%C3%A9%20votre%20portfolio%20NHR%20Digital..."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37,211,102,0.6)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all flex items-center gap-2.5 text-sm uppercase tracking-wider shadow-lg"
          >
            <Phone size={18} /> {t('founder.whatsapp')}
          </motion.a>

          <motion.a
            href="mailto:romarichirsein@gmail.com"
            whileHover={{ scale: 1.05, borderColor: 'rgba(96,165,250,0.8)', boxShadow: '0 0 25px rgba(59,130,246,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl font-bold border border-nhr-blue/40 glass text-white flex items-center gap-2.5 text-sm uppercase tracking-wider"
          >
            <Mail size={18} className="text-nhr-blue" /> romarichirsein@gmail.com
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{t('founder.explore')}</span>
          <ChevronDown size={16} className="text-nhr-blue animate-bounce" />
        </motion.div>
      </motion.div>

      {/* =========================================================================
          STATS & DISTINCTIONS — Glass Cards
          ========================================================================= */}
      <div className="relative z-10 py-16 px-6 border-y border-nhr-blue/20 bg-gradient-to-r from-transparent via-nhr-blue/5 to-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="neon-card-wrapper"
            >
              <div className="neon-card-content flex flex-col items-center justify-center py-8 px-5 text-center gap-2">
                <div style={{ color: stat.color, filter: `drop-shadow(0 0 10px ${stat.color})` }}>
                  {stat.icon}
                </div>
                <div 
                  className="text-3xl sm:text-4xl font-display font-extrabold"
                  style={{ color: stat.color, textShadow: `0 0 25px ${stat.color}80` }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[10px] font-mono text-[var(--text-secondary)]">
                  {stat.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          TECHNOLOGIES MAÎTRISÉES (Avec pourcentages précis demandés)
          ========================================================================= */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-nhr-blue uppercase mb-3 block animate-text-glow">
              {t('founder.tech_badge')}
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              Technologies & <span className="text-gradient-animated">Langages</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base">
              {isEn 
                ? 'Precise mastery of web & mobile technologies, source control and cloud deployments.'
                : 'Maîtrise rigoureuse des technologies web, mobile, versioning et déploiement cloud.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {TECHS.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.06, type: 'spring', bounce: 0.3 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="neon-card-wrapper group cursor-pointer"
              >
                <div className="neon-card-content flex flex-col justify-between p-7 h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative">
                        <div 
                          className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: tech.color }} 
                        />
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-12 h-12 object-contain relative z-10 drop-shadow-lg"
                          style={{ filter: `drop-shadow(0 0 10px ${tech.color}90)` }}
                        />
                      </div>
                      <span 
                        className="text-lg font-mono font-extrabold px-3 py-1 rounded-xl border"
                        style={{ 
                          color: tech.color, 
                          borderColor: `${tech.color}50`, 
                          backgroundColor: `${tech.color}15`,
                          textShadow: `0 0 10px ${tech.color}80` 
                        }}
                      >
                        {tech.level}%
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-nhr-blue-electric transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-[11px] font-mono text-nhr-blue-electric uppercase tracking-wider mb-3">
                      {isEn ? tech.category_en : tech.category_fr}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                      {isEn ? tech.desc_en : tech.desc_fr}
                    </p>
                  </div>

                  <div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-[1px]">
                      <motion.div
                        initial={{ width: 0 }} 
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }} 
                        transition={{ duration: 1.2, delay: i * 0.06 + 0.2 }}
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(to right, ${tech.color}80, ${tech.color})`,
                          boxShadow: `0 0 12px ${tech.color}` 
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono mt-1.5 text-gray-400">
                      <span>{isEn ? 'Proficiency' : 'Niveau'}</span>
                      <span className="text-white font-bold">{tech.level}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SECTION SPÉCIALE IA & OUTILS AVANCÉS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-3 block animate-text-glow flex items-center justify-center gap-2">
              <Bot size={16} /> {isEn ? 'Artificial Intelligence & Modern Workflows' : 'Outils d\'Intelligence Artificielle & Marketing'}
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white mb-3">
              Expertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-nhr-blue to-indigo-400">IA Générative & Growth</span>
            </h3>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm">
              {isEn 
                ? 'Advanced proficiency in cutting-edge LLMs, agentic AI frameworks and automated acquisition channels.'
                : 'Maîtrise avancée des modèles d\'IA de pointe, des frameworks d\'agents et des leviers d\'acquisition publicitaire.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {AI_TOOLS.map((ai, idx) => (
              <motion.div
                key={ai.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="neon-card-wrapper"
              >
                <div className="neon-card-content p-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{ai.icon}</span>
                      <span 
                        className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg border"
                        style={{ color: ai.color, borderColor: `${ai.color}40`, backgroundColor: `${ai.color}15` }}
                      >
                        {ai.level}%
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{ai.name}</h4>
                    <p className="text-[11px] font-mono text-gray-400 mb-4">{ai.category}</p>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${ai.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: ai.color, boxShadow: `0 0 10px ${ai.color}` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          CHAÎNES YOUTUBE & RÉSEAUX SOCIAUX DU FONDATEUR
          ========================================================================= */}
      <div className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-red-950/10 to-transparent border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase mb-3 block animate-text-glow flex items-center justify-center gap-2">
              <Youtube size={16} /> {isEn ? 'Official Media Channels' : 'Canaux Média & Réseaux Officiels'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4 text-white">
              Chaînes YouTube & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-indigo-400">Réseaux Sociaux</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base">
              {isEn
                ? 'Follow my specialized tutorials on tech & AI, discover my film productions and engage with my digital community.'
                : 'Suivez mes tutoriels sur le digital & l\'IA, découvrez mes productions cinématographiques et rejoignez ma communauté.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOCIAL_CHANNELS.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="neon-card-wrapper"
              >
                <div className="neon-card-content p-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-lg">
                        {item.icon}
                      </div>
                      <span 
                        className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
                        style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}15` }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1">{item.platform}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                      {isEn ? item.desc_en : item.desc_fr}
                    </p>
                  </div>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl glass border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-xs font-bold uppercase tracking-widest text-white transition-all flex items-center justify-center gap-2"
                  >
                    <span>{isEn ? 'Visit Channel' : 'Rejoindre / S\'abonner'}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          FORMATIONS DU CV — LICENCE PRO 2025 & Mention 6ème National BTS
          ========================================================================= */}
      <div className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-nhr-blue/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-nhr-blue uppercase mb-3 block animate-text-glow">
              {t('founder.edu_badge')}
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              {t('founder.edu_title')}
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base">
              {t('founder.edu_desc')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {FORMATIONS.map((f, i) => (
              <motion.div
                key={f.diplome_fr}
                initial={{ opacity: 0, x: i % 2 === 0 ? -35 : 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="neon-card-wrapper"
              >
                <div className={`neon-card-content p-6 sm:p-8 ${f.highlight ? 'border-cyan-500/30' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span 
                          className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border flex items-center gap-1.5"
                          style={{ 
                            color: f.badgeColor, 
                            borderColor: `${f.badgeColor}50`, 
                            backgroundColor: `${f.badgeColor}15`,
                            boxShadow: `0 0 12px ${f.badgeColor}35` 
                          }}
                        >
                          <Award size={13} /> {isEn ? f.mention_en : f.mention_fr}
                        </span>
                        <span className="text-xs font-mono text-[var(--text-secondary)]">
                          {f.annee}
                        </span>
                        {f.highlight && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 animate-pulse">
                            {isEn ? 'Major Milestone' : 'Diplôme Clé'}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                        {isEn ? f.diplome_en : f.diplome_fr}
                      </h3>
                      <p className="text-sm font-medium text-nhr-blue-electric flex items-center gap-1.5">
                        <GraduationCap size={16} /> {isEn ? f.etablissement_en : f.etablissement_fr}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-4 pt-4 border-t border-white/5">
                    {isEn ? f.details_en : f.details_fr}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          EXPÉRIENCES PROFESSIONNELLES (Wellborne, Glotelho, NHR Digital)
          ========================================================================= */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-nhr-blue uppercase mb-3 block animate-text-glow">
              {t('founder.exp_badge')}
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              {t('founder.exp_title')}
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base">
              {t('founder.exp_desc')}
            </p>
          </motion.div>

          <div className="relative">
            <div 
              className="absolute left-4 sm:left-8 top-4 bottom-4 w-1 hidden sm:block rounded-full"
              style={{ 
                background: 'linear-gradient(to bottom, #06b6d4, #3b82f6, #6366f1, transparent)',
                boxShadow: '0 0 15px #3b82f6' 
              }} 
            />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -35 }} 
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ x: 6 }}
                  className="relative sm:pl-20"
                >
                  <div 
                    className="absolute left-5 top-8 w-7 h-7 rounded-full hidden sm:flex items-center justify-center border-2 border-nhr-blue bg-[#020617] z-20"
                    style={{ boxShadow: '0 0 20px #3b82f6' }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-nhr-blue-electric animate-ping" />
                  </div>

                  <div className="neon-card-wrapper">
                    <div className="neon-card-content p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg font-bold text-white">{exp.company}</span>
                            {exp.current && (
                              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse">
                                {isEn ? 'Current Role' : 'Actuel'}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gradient-animated">
                            {isEn ? exp.role_en : exp.role_fr}
                          </h3>
                        </div>
                        <span 
                          className="text-xs font-mono font-bold text-nhr-blue-electric bg-nhr-blue/10 px-4 py-1.5 rounded-full border border-nhr-blue/30 whitespace-nowrap self-start sm:self-auto"
                          style={{ boxShadow: '0 0 10px rgba(59,130,246,0.25)' }}
                        >
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2.5 mt-4">
                        {(isEn ? exp.tasks_en : exp.tasks_fr).map((task, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                            <CheckCircle2 size={16} className="text-nhr-blue flex-shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LANGUES & CENTRES D'INTÉRÊT (Allemand B1 inclus)
          ========================================================================= */}
      <div className="relative z-10 py-24 px-6 border-t border-nhr-blue/15">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Langues */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="neon-card-wrapper"
          >
            <div className="neon-card-content p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-nhr-blue/15 flex items-center justify-center text-nhr-blue border border-nhr-blue/30 shadow-glow-blue">
                    <Globe size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-nhr-blue">{t('founder.lang_badge')}</span>
                    <h3 className="text-2xl font-bold text-white">{t('founder.lang_title')}</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name_fr}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base font-bold text-white flex items-center gap-2">
                          <span className="text-xl">{lang.flag}</span>
                          {isEn ? lang.name_en : lang.name_fr}
                        </span>
                        <span className="text-xs font-mono text-nhr-blue-electric font-semibold">
                          {isEn ? lang.level_en : lang.level_fr}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-nhr-blue to-nhr-blue-electric shadow-glow-blue"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[var(--text-secondary)] mt-8 pt-4 border-t border-white/5">
                {isEn 
                  ? 'Fluent capacity to lead cross-cultural teams and communicate with clients in French, English, German and Spanish.' 
                  : 'Capacité avérée à échanger et collaborer avec des équipes et partenaires en français, anglais, allemand et espagnol.'}
              </p>
            </div>
          </motion.div>

          {/* Centres d'intérêt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="neon-card-wrapper"
          >
            <div className="neon-card-content p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-nhr-indigo/15 flex items-center justify-center text-nhr-indigo border border-nhr-indigo/30 shadow-glow-indigo">
                    <Heart size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-nhr-blue">{t('founder.interests_badge')}</span>
                    <h3 className="text-2xl font-bold text-white">{t('founder.interests_title')}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {INTERESTS.map((item) => (
                    <motion.div
                      key={item.label_fr}
                      whileHover={{ scale: 1.06, y: -5 }}
                      className="p-4 rounded-2xl glass border border-white/5 flex flex-col items-center text-center gap-2 transition-colors hover:border-nhr-blue/40"
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ color: item.color, backgroundColor: `${item.color}15`, boxShadow: `0 0 10px ${item.color}30` }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-xs font-bold text-white">{isEn ? item.label_en : item.label_fr}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span>{isEn ? 'Innovation · Cinema & AI · Passion' : 'Innovation · Cinéma & IA · Passion'}</span>
                <span className="text-nhr-blue-electric font-mono font-bold">NHR Agency</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================================
          FOOTER DU PORTFOLIO — Raccordement direct vers Réalisations & Contact
          ========================================================================= */}
      <div className="relative z-10 py-16 px-6 text-center">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="max-w-4xl mx-auto glass p-8 sm:p-12 rounded-[2.5rem] border border-nhr-blue/35 shadow-glow-blue"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4">
            {t('founder.cta_title')}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl mx-auto mb-8">
            {t('founder.cta_desc')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#realisations"
              className="px-8 py-4 rounded-2xl bg-nhr-blue font-bold text-white text-sm uppercase tracking-wider hover:bg-nhr-blue-dark transition-all shadow-glow-blue hover:scale-105 active:scale-95"
            >
              {t('founder.cta_projects')}
            </a>
            <a
              href="https://wa.me/237692738430"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl glass border border-nhr-blue/40 font-bold text-white text-sm uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Phone size={16} className="text-[#25D366]" /> {t('founder.cta_chat')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
