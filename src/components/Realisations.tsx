import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Globe, ShoppingBag, Smartphone, Layout } from 'lucide-react';

const CATEGORIES = ['Tous', 'Web', 'E-commerce', 'App'];

const PROJECTS = [
  {
    title: 'Afedie',
    category: 'Web',
    filterId: 'Web',
    link: 'https://afedie.vercel.app/',
    desc: "Plateforme web institutionnelle pour l'Association pour la Formation et le Développement des Enfants. Design moderne, multilingue, avec galerie et espace rapports.",
    tech: ['Next.js', 'React', 'Tailwind'],
    color: '#3b82f6',
  },
  {
    title: 'La Lingua',
    category: 'Web',
    filterId: 'Web',
    link: 'https://lingua-international-academy.vercel.app/',
    desc: "Site institutionnel pour la Lingua International Academy — académie de langues. Plateforme de cours en ligne, authentification, catalogue de formations.",
    tech: ['Next.js', 'Supabase', 'Tailwind'],
    color: '#6366f1',
  },
  {
    title: 'Herta Intek',
    category: 'Web',
    filterId: 'Web',
    link: 'https://herta-intek.vercel.app/',
    desc: "Site vitrine B2B premium pour Herta Intek — solutions technologiques industrielles. Design épuré et professionnel axé conversion.",
    tech: ['React', 'CSS', 'Framer Motion'],
    color: '#60a5fa',
  },
  {
    title: 'CSBIE',
    category: 'Web',
    filterId: 'Web',
    link: 'https://www.csbie.org/',
    desc: "Portail web officiel du Complexe Scolaire Bilingue International. Interface institutionnelle, présentation pédagogique, gestion des informations scolaires.",
    tech: ['WordPress', 'HTML/CSS', 'JS'],
    color: '#3b82f6',
  },
  {
    title: "Justine Kem's",
    category: 'E-commerce',
    filterId: 'E-commerce',
    link: 'https://justine-kems.vercel.app/fr/',
    desc: "Boutique en ligne élégante pour produits cosmétiques et beauté. Interface fluide, panier d'achat, fiches produits détaillées, expérience premium.",
    tech: ['Next.js', 'React', 'Tailwind'],
    color: '#ec4899',
  },
  {
    title: 'Meventhouse',
    category: 'Web',
    filterId: 'Web',
    link: 'https://m-event-house.vercel.app/',
    desc: "Plateforme digitale pour l'organisation et la présentation d'événements. Design événementiel premium, galeries, calendrier interactif.",
    tech: ['React', 'Next.js', 'CSS'],
    color: '#8b5cf6',
  },
  {
    title: 'Camerbuild Sarl',
    category: 'Web',
    filterId: 'Web',
    link: 'https://dualvibe.vercel.app/',
    desc: "Site corporate pour une entreprise BTP & construction au Cameroun. Présentation de projets, portfolio de réalisations, devis en ligne.",
    tech: ['Next.js', 'Tailwind', 'React'],
    color: '#f59e0b',
  },
  {
    title: 'Wellborne',
    category: 'Web',
    filterId: 'Web',
    link: 'https://batelafoods.vercel.app/fr/',
    desc: "Plateforme digitale multi-services pour Wellborne. Design premium, présentation des activités et solutions digitales de l'entreprise.",
    tech: ['Next.js', 'React', 'Framer Motion'],
    color: '#10b981',
  },
  {
    title: 'Mika Saveurs Authentiques',
    category: 'E-commerce',
    filterId: 'E-commerce',
    link: 'https://mikasaveursauthentiques-2fpl.vercel.app',
    desc: "Site e-commerce gastronomique dédié aux saveurs authentiques camerounaises. Produits locaux, commandes en ligne, livraison.",
    tech: ['Next.js', 'React', 'Tailwind'],
    color: '#f97316',
  },
  {
    title: 'ISZ Zentrum',
    category: 'Web',
    filterId: 'Web',
    link: '#',
    desc: "Plateforme d'information et de services pour le centre ISZ. Interface institutionnelle claire, gestion de contenu dynamique.",
    tech: ['WordPress', 'HTML/CSS', 'PHP'],
    color: '#3b82f6',
  },
  {
    title: 'Bimiberd',
    category: 'App',
    filterId: 'App',
    link: 'https://bimiberdfitness-physio.vercel.app/',
    desc: "Application fitness & physiothérapie moderne. Programme d'entraînement personnalisé, suivi de santé, prise de rendez-vous en ligne.",
    tech: ['Next.js', 'React', 'Tailwind'],
    color: '#06b6d4',
  },
  {
    title: 'Global IT',
    category: 'Web',
    filterId: 'Web',
    link: 'https://global-it.vercel.app/',
    desc: "Site vitrine pour services technologiques avancés — infogérance, cybersécurité, développement. Design tech et professionnel.",
    tech: ['React', 'Next.js', 'CSS'],
    color: '#3b82f6',
  },
  {
    title: 'Un Geste Divin',
    category: 'Web',
    filterId: 'Web',
    link: '#',
    desc: "Site web pour une association caritative à vocation spirituelle et humanitaire. Appel aux dons, actualités, galeries d'activités.",
    tech: ['WordPress', 'HTML', 'CSS'],
    color: '#a78bfa',
  },
  {
    title: 'Leelou Baby Food',
    category: 'E-commerce',
    filterId: 'E-commerce',
    link: '#',
    desc: "Boutique e-commerce spécialisée en nutrition infantile artisanale. Produits sains pour bébés, commandes en ligne, livraison.",
    tech: ['WordPress', 'WooCommerce', 'CSS'],
    color: '#f472b6',
  },
  {
    title: 'Teint Afrique',
    category: 'E-commerce',
    filterId: 'E-commerce',
    link: '#',
    desc: "E-commerce de cosmétiques et produits de soin africains premium. Fiches produits détaillées, paiement sécurisé, interface élégante.",
    tech: ['Next.js', 'React', 'Stripe'],
    color: '#d97706',
  },
  {
    title: 'NHR Digital Agency',
    category: 'Web',
    filterId: 'Web',
    link: 'https://nhr-digital-agency.vercel.app/',
    desc: "Notre propre vitrine digitale premium — chatbot IA intégré, animations avancées, devis en ligne, portfolio interactif. Le meilleur de notre savoir-faire.",
    tech: ['React', 'Vite', 'Framer Motion'],
    color: '#3b82f6',
    featured: true,
  },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Web: <Globe size={14} />,
  'E-commerce': <ShoppingBag size={14} />,
  App: <Smartphone size={14} />,
  Tous: <Layout size={14} />,
};

export default function Realisations() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filtered = activeFilter === 'Tous'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterId === activeFilter);

  return (
    <section id="realisations" className="py-32 px-6 bg-nhr-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-nhr-blue/40 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-nhr-blue/4 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-nhr-indigo/4 blur-[120px] rounded-full" />
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
            className="text-xs font-mono font-bold tracking-widest text-nhr-blue uppercase mb-4 block"
          >
            Projets Réalisés
          </motion.span>
          <h2 className="text-5xl sm:text-6xl font-display font-extrabold mb-6 leading-tight">
            Nos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nhr-blue via-nhr-blue-electric to-nhr-indigo">
              Réalisations
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg leading-relaxed">
            Une sélection de nos projets les plus marquants — chaque réalisation est une preuve
            de notre engagement envers l'excellence digitale.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl glass">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeFilter === cat
                    ? 'text-white'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeRealisationFilter"
                    className="absolute inset-0 bg-nhr-blue rounded-xl -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {CATEGORY_ICONS[cat]}
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
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
            className="inline-flex items-center gap-3 px-10 py-5 bg-nhr-blue-dark rounded-2xl font-bold text-white text-base shadow-glow-blue hover:bg-nhr-blue transition-all hover:scale-105 active:scale-95"
          >
            Démarrer un projet similaire <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, idx }: { project: typeof PROJECTS[0]; idx: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: idx * 0.04 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      className="neon-card-wrapper group"
    >
      <div className="neon-card-content flex flex-col h-full overflow-visible">
        {/* Top color bar */}
        <div
          className="h-1 w-full rounded-t-[1.4rem] transition-all duration-500 group-hover:h-2"
          style={{ backgroundColor: project.color, boxShadow: `0 0 20px ${project.color}60` }}
        />

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span
                className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-2 inline-block"
                style={{ color: project.color, borderColor: `${project.color}40`, backgroundColor: `${project.color}10` }}
              >
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-nhr-blue-electric transition-colors leading-tight">
                {project.title}
                {project.featured && (
                  <span className="ml-2 text-[9px] font-mono uppercase tracking-wider text-nhr-blue-electric bg-nhr-blue/10 px-2 py-0.5 rounded-full border border-nhr-blue/20">
                    Featured
                  </span>
                )}
              </h3>
            </div>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl bg-white/5 hover:bg-nhr-blue/20 transition-colors flex-shrink-0 border border-[var(--glass-border)] hover:border-nhr-blue/40"
              style={project.link === '#' ? { opacity: 0.3, pointerEvents: 'none' } : {}}
            >
              <ExternalLink size={16} className="text-[var(--text-secondary)] group-hover:text-nhr-blue transition-colors" />
            </motion.a>
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
            {project.desc}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-[var(--glass-border)] text-[var(--text-secondary)]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Link button */}
          {project.link !== '#' ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest border border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-nhr-blue/50 hover:text-nhr-blue-electric hover:bg-nhr-blue/5 transition-all flex items-center justify-center gap-2"
            >
              Visiter le site <ExternalLink size={12} />
            </a>
          ) : (
            <div className="w-full py-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest border border-[var(--glass-border)] text-[var(--text-secondary)]/40">
              Bientôt disponible
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
