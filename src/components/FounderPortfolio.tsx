import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';
import { 
  Mail, MapPin, Award, Briefcase, Code2, ChevronDown, Download, Phone,
  GraduationCap, Calendar, Sparkles, CheckCircle2, Globe, Heart,
  BookOpen, Music, Plane, PenTool, Utensils, Laptop, MessageSquare, Layers
} from 'lucide-react';
import romaricPhoto from '@/src/assets/romaric.jpg';

// Tech stack avec logos officiels SVG et maîtrise 100% demandée
const TECHS = [
  { name: 'WordPress',      category: 'CMS & E-commerce',  logo: 'https://cdn.simpleicons.org/wordpress/21759B', level: 100, color: '#21759B', desc: 'Sites vitrines, e-commerces, blogs, portfolios & refontes' },
  { name: 'HTML5',          category: 'Markup Standard',   logo: 'https://cdn.simpleicons.org/html5/E34F26',    level: 100, color: '#E34F26', desc: 'Structure sémantique, accessibilité & standards web' },
  { name: 'CSS3',           category: 'Styles & FX',       logo: 'https://cdn.simpleicons.org/css3/1572B6',     level: 100, color: '#1572B6', desc: 'Tailwind CSS, Glassmorphism, animations néon' },
  { name: 'JavaScript',     category: 'Langage Web',       logo: 'https://cdn.simpleicons.org/javascript/F7DF1E',level: 100, color: '#F7DF1E', desc: 'ES6+, DOM dynamique, logique client & intégration d\'APIs' },
  { name: 'Next.js',        category: 'Framework React',   logo: 'https://cdn.simpleicons.org/nextdotjs/ffffff', level: 100, color: '#ffffff', desc: 'SSR, SSG, App Router, performances maximales' },
  { name: 'React',          category: 'UI Library',        logo: 'https://cdn.simpleicons.org/react/61DAFB',    level: 100, color: '#61DAFB', desc: 'Composants interactifs, Hooks, Framer Motion' },
  { name: 'Flutter',        category: 'Mobile Cross-Platform', logo: 'https://cdn.simpleicons.org/flutter/02569B', level: 100, color: '#02569B', desc: 'Apps mobiles iOS & Android performantes & élégantes' },
  { name: 'UI/UX Design',   category: 'Conception d\'Interfaces', logo: 'https://cdn.simpleicons.org/figma/F24E1E', level: 100, color: '#F24E1E', desc: 'Maquettage Figma, ergonomie utilisateur & prototypes' },
];

// Compétences transversales extraites directement du CV
const OTHER_SKILLS = [
  { title: 'Gestion de projet & d’équipes', desc: 'Direction technique, encadrement de développeurs et pilotage de livrables', icon: <Briefcase size={20} />, color: '#3b82f6' },
  { title: 'Référencement d\'entreprises', desc: 'Optimisation Google Maps, référencement local & visibilité numérique', icon: <Globe size={20} />, color: '#60a5fa' },
  { title: 'Conception Graphique (Photoshop & Canva)', desc: 'Création de logos, affiches promotionnelles, chartes et visuels percutants', icon: <PenTool size={20} />, color: '#ec4899' },
  { title: 'Community Management', desc: 'Stratégie sur les réseaux sociaux, création de contenu et newsletters', icon: <MessageSquare size={20} />, color: '#8b5cf6' },
  { title: 'Commerce & Outils bureautiques', desc: 'Gestion commerciale, e-commerce, pack bureautique et modélisation', icon: <Layers size={20} />, color: '#10b981' },
];

// Formations réelles extraites du CV
const FORMATIONS = [
  {
    diplome: 'Brevet de Technicien Supérieur (BTS) en Génie Logiciel',
    mention: 'Avec Mention (6ème National 🇨🇲)',
    etablissement: 'Institut Supérieur d’Étude Scientifiques, Technologiques et Managériale (ISESTM) - Yaoundé',
    annee: '2023 - 2024',
    badgeColor: '#3b82f6',
    details: 'Spécialisation en génie logiciel : conception d\'architectures logicielles, développement web/mobile, modélisation de bases de données et conduite de projets agiles. Reçu 6ème sur le plan national camerounais.',
  },
  {
    diplome: 'Baccalauréat C (Série Scientifique)',
    mention: 'Admis',
    etablissement: 'Lycée d’Abang Nkongoa - Yaoundé',
    annee: '2021 - 2022',
    badgeColor: '#60a5fa',
    details: 'Formation approfondie en mathématiques pures et appliquées, sciences physiques et démarche scientifique analytique.',
  },
  {
    diplome: 'Probatoire C',
    mention: 'Avec Mention',
    etablissement: 'Lycée d’Abang Nkongoa - Yaoundé',
    annee: '2020 - 2021',
    badgeColor: '#6366f1',
    details: 'Validation avec mention des épreuves de mathématiques avancées et sciences physiques.',
  },
  {
    diplome: 'BEPC (Brevet d\'Études du Premier Cycle - Série Espagnol)',
    mention: 'Avec Mention',
    etablissement: 'Lycée d’Abang Nkongoa - Yaoundé',
    annee: '2018 - 2019',
    badgeColor: '#a855f7',
    details: 'Obtention avec mention honorifique, options scientifiques et langue vivante espagnole.',
  },
  {
    diplome: 'CEP (Certificat d’Études Primaires)',
    mention: 'Admis',
    etablissement: 'Enseignement de Base',
    annee: '2014 - 2015',
    badgeColor: '#94a3b8',
    details: 'Bases solides de l\'enseignement primaire d\'excellence.',
  },
];

// Expériences professionnelles réelles extraites du CV
const EXPERIENCES = [
  {
    role: 'Chargé de Communication sur les réseaux sociaux & Création / Gestion des sites webs',
    company: 'Wellborne',
    period: '25 Juin 2024 – En cours',
    current: true,
    tasks: [
      'Élaboration et mise en œuvre de stratégies de communication digitale complètes.',
      'Gestion, maintenance et refonte des sites web dont l’entreprise possède à sa disposition.',
      'Création de contenu engageant pour les médias sociaux, les newsletters et le site web de l’entreprise.',
    ],
  },
  {
    role: 'Stagiaire académique BTS — Génie Logiciel',
    company: 'Glotelho Sarl (Global Telecommunication House)',
    period: 'Juin 2023 – Septembre 2023',
    current: false,
    tasks: [
      'Stage académique au sein du leader du e-commerce au Cameroun (Glotelho).',
      'Thème de soutenance : "Automatisation du dispatching des courses au sein d’une entreprise de E-commerce — cas de Glotelho".',
      'Analyse des processus opérationnels, modélisation et automatisation de l\'assignation des livraisons.',
    ],
  },
  {
    role: 'Fondateur & Lead Développeur Full-Stack',
    company: 'NHR Digital Agency',
    period: '2020 – Présent',
    current: true,
    tasks: [
      'Création et direction générale de l\'agence digitale NHR Digital Agency au Cameroun.',
      'Conception, développement et livraison de plus de 16 plateformes web, e-commerce et applications mobiles pour des entreprises et institutions.',
      'Management d\'équipe, gestion de projet agile, relation client et stratégie technologique.',
    ],
  },
];

// Langues du CV
const LANGUAGES = [
  { name: 'Français', level: 'Langue maternelle', percent: 100, flag: '🇨🇲' },
  { name: 'Anglais', level: 'Niveau moyen / professionnel', percent: 75, flag: '🇬🇧' },
  { name: 'Espagnol', level: 'Notions (Série BEPC)', percent: 45, flag: '🇪🇸' },
];

// Centres d'intérêt du CV
const INTERESTS = [
  { label: 'Développer les sites', icon: <Laptop size={22} />, color: '#3b82f6' },
  { label: 'Écrire les chroniques', icon: <BookOpen size={22} />, color: '#60a5fa' },
  { label: 'Lecture & Veille tech', icon: <GraduationCap size={22} />, color: '#6366f1' },
  { label: 'Musique', icon: <Music size={22} />, color: '#a855f7' },
  { label: 'Voyages', icon: <Plane size={22} />, color: '#06b6d4' },
  { label: 'Cuisine', icon: <Utensils size={22} />, color: '#f59e0b' },
];

// Chiffres clés basés sur son CV et ses réalisations
const STATS = [
  { value: '6ème', label: 'National BTS Génie Logiciel 2024', icon: <Award size={22} />, color: '#60a5fa' },
  { value: '100%', label: 'Maîtrise Web, Mobile & UI/UX', icon: <Code2 size={22} />, color: '#3b82f6' },
  { value: '16+', label: 'Projets d\'Envergure Livrés', icon: <Briefcase size={22} />, color: '#6366f1' },
  { value: '3x', label: 'Mentions aux Concours & Diplômes', icon: <Sparkles size={22} />, color: '#06b6d4' },
];

/* Particules d'arrière-plan */
function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 35 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: i % 4 === 0 ? '#3b82f6' : i % 4 === 1 ? '#60a5fa' : i % 4 === 2 ? '#6366f1' : '#06b6d4',
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#3b82f6' : '#60a5fa'}`,
          }}
          animate={{
            y: [0, -(Math.random() * 200 + 100)],
            opacity: [0, 0.9, 0],
            scale: [0.5, 1.2, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 5,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: 'easeOut',
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
        className="w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.05) 45%, transparent 70%)' }} 
      />
    </motion.div>
  );
}

/* Formes géométriques animées */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[450, 700, 950].map((size, i) => (
        <motion.div
          key={i}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 25 + i * 10, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: size, 
            height: size,
            borderColor: `rgba(59, 130, 246, ${0.14 - i * 0.03})`,
            boxShadow: `0 0 ${25 + i * 10}px rgba(59, 130, 246, ${0.08 - i * 0.02})`,
          }}
        />
      ))}
      {[
        { top: '12%', right: '8%', size: 55, delay: 0 },
        { top: '65%', left: '6%', size: 42, delay: 1.5 },
        { top: '35%', right: '4%', size: 28, delay: 2.5 },
        { top: '85%', right: '12%', size: 36, delay: 3 },
      ].map((d, i) => (
        <motion.div
          key={i}
          animate={{ y: [-15, 15, -15], rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 7 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
          className="absolute border"
          style={{
            ...d,
            width: d.size, 
            height: d.size,
            borderColor: 'rgba(96, 165, 250, 0.4)',
            boxShadow: '0 0 16px rgba(96, 165, 250, 0.35)',
            transform: 'rotate(45deg)',
          }}
        />
      ))}
      <div 
        className="absolute top-1/4 left-1/4 w-[550px] h-[550px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} 
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)', filter: 'blur(50px)' }} 
      />
    </div>
  );
}

export default function FounderPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section ref={containerRef} className="relative bg-nhr-black overflow-hidden selection:bg-nhr-blue/40">
      <MagneticOrb />
      <FloatingShapes />
      <Particles />

      {/* =========================================================================
          HERO SECTION — Fondateur avec photo réelle & néons rotatifs
          ========================================================================= */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20"
      >
        {/* Badge Disponibilité & Rôle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-nhr-blue/50 bg-nhr-blue/10 text-nhr-blue-electric text-xs font-bold mb-8 tracking-widest uppercase shadow-glow-blue"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nhr-blue-electric opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nhr-blue" />
          </span>
          Fondateur de NHR Digital Agency · Développeur Freelance Polyvalent
        </motion.div>

        {/* Photo officielle de Romaric avec triple anneaux néon rotatifs */}
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
            className="absolute -inset-5 rounded-full pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0%, #3b82f6 25%, transparent 50%, #6366f1 75%, transparent 100%)',
              filter: 'blur(8px)',
              opacity: 0.95,
            }}
          />
          {/* Anneau Néon Inverse Tournant 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 rounded-full pointer-events-none"
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

          {/* Conteneur de l'image */}
          <div 
            className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden z-10 border-4 border-nhr-blue/80 shadow-2xl transition-transform duration-500 group-hover:scale-105"
            style={{ boxShadow: '0 0 35px rgba(59,130,246,0.6), inset 0 0 20px rgba(0,0,0,0.4)' }}
          >
            <img 
              src={romaricPhoto} 
              alt="NGUEMI HIRSEIN ROMARIC" 
              className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
            />
            {/* Dégradé bas de photo pour intégration fluide */}
            <div className="absolute inset-0 bg-gradient-to-t from-nhr-black/50 via-transparent to-transparent" />
          </div>

          {/* Badge Flottant "6ème National" sur la photo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: 'spring' }}
            className="absolute -bottom-2 -right-2 z-20 px-3 py-1.5 rounded-full bg-nhr-blue text-white text-[10px] font-mono font-bold uppercase tracking-wider border-2 border-[#020617] shadow-lg flex items-center gap-1.5"
            style={{ boxShadow: '0 0 20px rgba(59,130,246,0.9)' }}
          >
            <Award size={13} className="text-yellow-300 fill-yellow-300" />
            <span>6e National BTS</span>
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
          className="text-lg sm:text-xl font-mono text-nhr-blue-electric font-bold tracking-wider uppercase mb-6"
          style={{ textShadow: '0 0 15px rgba(96,165,250,0.6)' }}
        >
          DÉVELOPPEUR FREELANCE POLYVALENT & LEAD TECHNIQUE
        </motion.p>

        {/* Badges d'informations personnelles du CV */}
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mb-8"
        >
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/10 glass text-[var(--text-secondary)] flex items-center gap-1.5">
            <Calendar size={13} className="text-nhr-blue" />
            Né le 21/05/2005
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/10 glass text-[var(--text-secondary)] flex items-center gap-1.5">
            <MapPin size={13} className="text-nhr-blue" />
            Awae concorde, Yaoundé 🇨🇲
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/10 glass text-[var(--text-secondary)] flex items-center gap-1.5">
            <GraduationCap size={13} className="text-nhr-blue" />
            BTS Génie Logiciel (Mention)
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
                  Profil & Philosophie de Travail
                </h2>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed italic">
                  « Je suis un jeune polyvalent exerçant dans plusieurs domaines et qui prône et recherche l’excellence dans ce que je fais. Je suis vaillant, très respectueux, posé et serviable. En matière de travail, je me soucie du rendement obtenu. J’aime apprendre de tout le monde pour améliorer mes connaissances et partager mon savoir-faire, c’est pourquoi je gère des équipes. Avec mon expertise en génie logiciel, je pilote des projets d’envergure avec rigueur et ouverture. »
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                  <span>— Extrait officiel du CV</span>
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
          {/* Télécharger CV PDF */}
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
            <Download size={18} /> Télécharger mon CV (PDF)
          </motion.a>

          {/* WhatsApp Direct */}
          <motion.a
            href="https://wa.me/237692738430?text=Bonjour%20Romaric,%20j'ai%20consult%C3%A9%20votre%20portfolio%20NHR%20Digital..."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37,211,102,0.6)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all flex items-center gap-2.5 text-sm uppercase tracking-wider shadow-lg"
          >
            <Phone size={18} /> WhatsApp (+237 692 73 84 30)
          </motion.a>

          {/* Email Direct */}
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
          <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Explorer</span>
          <ChevronDown size={16} className="text-nhr-blue animate-bounce" />
        </motion.div>
      </motion.div>

      {/* =========================================================================
          STATS & DISTINCTIONS — Glass Cards avec Néon rotatif
          ========================================================================= */}
      <div className="relative z-10 py-16 px-6 border-y border-nhr-blue/20 bg-gradient-to-r from-transparent via-nhr-blue/5 to-transparent">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
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
                <div className="text-[11px] font-mono font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          TECHNOLOGIES MAÎTRISÉES (100% pour toutes selon la demande)
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
              Stack Technologique du Fondateur
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              Technologies <span className="text-gradient-animated">Maîtrisées à 100%</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base">
              Maîtrise totale et opérationnelle des technologies modernes du web, du mobile et du design d'expérience utilisateur.
            </p>
          </motion.div>

          {/* Grille des 8 technologies principales avec logos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {TECHS.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.08, type: 'spring', bounce: 0.3 }}
                className="neon-card-wrapper"
              >
                <div className="neon-card-content flex flex-col justify-between p-7 h-full">
                  <div>
                    {/* Header carte tech */}
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

                    <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
                    <p className="text-[11px] font-mono text-nhr-blue-electric uppercase tracking-wider mb-3">
                      {tech.category}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                      {tech.desc}
                    </p>
                  </div>

                  {/* Jauge de progression 100% */}
                  <div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-[1px]">
                      <motion.div
                        initial={{ width: 0 }} 
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }} 
                        transition={{ duration: 1.2, delay: i * 0.08 + 0.3 }}
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(to right, ${tech.color}80, ${tech.color})`,
                          boxShadow: `0 0 12px ${tech.color}` 
                        }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono mt-1.5 text-gray-400">
                      <span>Niveau</span>
                      <span className="text-white font-bold">Expert (100%)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Autres compétences du CV */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OTHER_SKILLS.map((sk, idx) => (
              <motion.div
                key={sk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="neon-card-wrapper"
              >
                <div className="neon-card-content p-6 flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: `${sk.color}15`, 
                      border: `1px solid ${sk.color}40`,
                      color: sk.color,
                      boxShadow: `0 0 15px ${sk.color}30` 
                    }}
                  >
                    {sk.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5">{sk.title}</h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{sk.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          FORMATIONS DU CV — Mention 6ème National BTS Génie Logiciel
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
              Diplômes & Cursus Académique
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              Formations <span className="text-gradient-animated">d'Excellence</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base">
              Parcours scolaire et universitaire couronné de mentions et d'un rang national d'élite en génie logiciel.
            </p>
          </motion.div>

          <div className="space-y-6">
            {FORMATIONS.map((f, i) => (
              <motion.div
                key={f.diplome}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="neon-card-wrapper"
              >
                <div className="neon-card-content p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border"
                          style={{ 
                            color: f.badgeColor, 
                            borderColor: `${f.badgeColor}50`, 
                            backgroundColor: `${f.badgeColor}15`,
                            boxShadow: `0 0 10px ${f.badgeColor}30` 
                          }}
                        >
                          {f.mention}
                        </span>
                        <span className="text-xs font-mono text-[var(--text-secondary)]">
                          {f.annee}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">{f.diplome}</h3>
                      <p className="text-sm font-medium text-nhr-blue-electric flex items-center gap-1.5">
                        <GraduationCap size={16} /> {f.etablissement}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-4 pt-4 border-t border-white/5">
                    {f.details}
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
              Carrière Professionnelle
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              Expériences <span className="text-gradient-animated">sur le Terrain</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base">
              Missions d'envergure menées avec succès dans le digital, l'e-commerce et le génie logiciel.
            </p>
          </motion.div>

          <div className="relative">
            {/* Ligne verticale de la timeline */}
            <div 
              className="absolute left-4 sm:left-8 top-4 bottom-4 w-1 hidden sm:block rounded-full"
              style={{ 
                background: 'linear-gradient(to bottom, #3b82f6, #6366f1, #06b6d4, transparent)',
                boxShadow: '0 0 15px #3b82f6' 
              }} 
            />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.15 }}
                  className="relative sm:pl-20"
                >
                  {/* Point lumineux sur la timeline */}
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
                                Actuel
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gradient-animated">
                            {exp.role}
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
                        {exp.tasks.map((task, tIdx) => (
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
          LANGUES & CENTRES D'INTÉRÊT (Fidèles au CV)
          ========================================================================= */}
      <div className="relative z-10 py-24 px-6 border-t border-nhr-blue/15">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Langues */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="neon-card-wrapper"
          >
            <div className="neon-card-content p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-nhr-blue/15 flex items-center justify-center text-nhr-blue border border-nhr-blue/30 shadow-glow-blue">
                    <Globe size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-nhr-blue">Aptitudes Linguistiques</span>
                    <h3 className="text-2xl font-bold text-white">Langues Pratiquées</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base font-bold text-white flex items-center gap-2">
                          <span className="text-xl">{lang.flag}</span>
                          {lang.name}
                        </span>
                        <span className="text-xs font-mono text-nhr-blue-electric font-semibold">{lang.level}</span>
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
                Capacité à collaborer avec des équipes et clients nationaux et internationaux en français et anglais.
              </p>
            </div>
          </motion.div>

          {/* Centres d'intérêt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="neon-card-wrapper"
          >
            <div className="neon-card-content p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-nhr-indigo/15 flex items-center justify-center text-nhr-indigo border border-nhr-indigo/30 shadow-glow-indigo">
                    <Heart size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-nhr-blue">Passions & Mode de Vie</span>
                    <h3 className="text-2xl font-bold text-white">Centres d'Intérêt</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {INTERESTS.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="p-4 rounded-2xl glass border border-white/5 flex flex-col items-center text-center gap-2 transition-colors hover:border-nhr-blue/40"
                    >
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ color: item.color, backgroundColor: `${item.color}15`, boxShadow: `0 0 10px ${item.color}30` }}
                      >
                        {item.icon}
                      </div>
                      <span className="text-xs font-bold text-white">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <span>Écriture · Créativité · Polyvalence</span>
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
        <div className="max-w-4xl mx-auto glass p-8 sm:p-12 rounded-[2.5rem] border border-nhr-blue/30 shadow-glow-blue">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-4">
            Envie de collaborer avec <span className="text-gradient-animated">Romaric</span> ?
          </h3>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl mx-auto mb-8">
            Que ce soit pour un site vitrine, une plateforme e-commerce, une application mobile Flutter ou une stratégie digitale complète, donnons vie à votre vision.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#realisations"
              className="px-8 py-4 rounded-2xl bg-nhr-blue font-bold text-white text-sm uppercase tracking-wider hover:bg-nhr-blue-dark transition-all shadow-glow-blue"
            >
              Découvrir les 16+ Réalisations
            </a>
            <a
              href="https://wa.me/237692738430"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl glass border border-nhr-blue/40 font-bold text-white text-sm uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Phone size={16} className="text-[#25D366]" /> Discuter Maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
