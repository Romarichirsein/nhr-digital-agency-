import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Download, Mail, MapPin, Award, Briefcase, Code2 } from 'lucide-react';

// Tech stack with SVG logos (CDN)
const TECHS = [
  {
    name: 'WordPress',
    logo: 'https://cdn.simpleicons.org/wordpress/21759B',
    level: 100,
    color: '#21759B',
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.simpleicons.org/html5/E34F26',
    level: 100,
    color: '#E34F26',
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.simpleicons.org/css3/1572B6',
    level: 100,
    color: '#1572B6',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    level: 100,
    color: '#F7DF1E',
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.simpleicons.org/nextdotjs/ffffff',
    level: 100,
    color: '#ffffff',
  },
  {
    name: 'React',
    logo: 'https://cdn.simpleicons.org/react/61DAFB',
    level: 100,
    color: '#61DAFB',
  },
  {
    name: 'Flutter',
    logo: 'https://cdn.simpleicons.org/flutter/02569B',
    level: 100,
    color: '#02569B',
  },
  {
    name: 'UI/UX Design',
    logo: 'https://cdn.simpleicons.org/figma/F24E1E',
    level: 100,
    color: '#F24E1E',
  },
];

const EXPERIENCES = [
  {
    year: '2020 – Présent',
    role: 'Fondateur & Lead Developer',
    company: 'NHR Digital Agency',
    desc: 'Création et direction d\'une agence digitale premium au Cameroun — développement web, mobile, UI/UX et stratégie digitale pour +16 clients.',
  },
  {
    year: '2019 – 2020',
    role: 'Développeur Full-Stack Freelance',
    company: 'Indépendant',
    desc: 'Conception de plateformes web sur mesure pour entreprises camerounaises et internationales.',
  },
  {
    year: '2017 – 2019',
    role: 'Designer UI/UX & Intégrateur Web',
    company: 'Agence Locale',
    desc: 'Design d\'interfaces modernes, intégration WordPress et développement de thèmes sur mesure.',
  },
];

const STATS = [
  { value: '16+', label: 'Projets livrés', icon: <Briefcase size={22} /> },
  { value: '100%', label: 'Maîtrise Tech', icon: <Code2 size={22} /> },
  { value: '5+', label: 'Années d\'exp.', icon: <Award size={22} /> },
  { value: '10+', label: 'Clients satisfaits', icon: <Award size={22} /> },
];

// Floating geometric shapes for background
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large rotating ring top-left */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-32 -left-32 w-96 h-96 border border-nhr-blue/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-24 -left-24 w-72 h-72 border border-nhr-blue-electric/15 rounded-full"
      />
      {/* Bottom right ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] border border-nhr-indigo/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-24 -right-24 w-80 h-80 border border-nhr-blue/15 rounded-full"
      />
      {/* Center floating diamond */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-[15%] w-16 h-16 border border-nhr-blue-electric/30 rotate-45"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[12%] w-10 h-10 border border-nhr-indigo/30 rotate-45"
      />
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nhr-blue/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-nhr-indigo/8 blur-[100px] rounded-full" />
    </div>
  );
}

export default function FounderPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-nhr-black overflow-hidden">
      <FloatingShapes />

      {/* ===== HERO ===== */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nhr-blue/10 border border-nhr-blue/25 text-nhr-blue-electric text-xs font-bold mb-8 tracking-widest uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nhr-blue-electric opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nhr-blue" />
          </span>
          Fondateur · NHR Digital Agency
        </motion.div>

        {/* Avatar with animated neon ring */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring', bounce: 0.3 }}
          className="relative mb-10"
        >
          {/* Spinning neon ring around avatar */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 -m-3 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0%, #3b82f6 25%, transparent 50%, #6366f1 75%, transparent 100%)',
              filter: 'blur(4px)',
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 -m-5 rounded-full"
            style={{
              background: 'conic-gradient(from 180deg, transparent 0%, #60a5fa 20%, transparent 40%, transparent 100%)',
              filter: 'blur(8px)',
            }}
          />
          <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-nhr-blue-dark via-nhr-indigo to-nhr-blue-electric flex items-center justify-center z-10 border-2 border-nhr-blue/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-nhr-blue/20 to-nhr-indigo/20" />
            <span className="text-5xl font-display font-extrabold text-white z-10 select-none">R</span>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nhr-blue-electric to-transparent" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold mb-4 tracking-tight leading-[1.1]"
        >
          <span className="text-[var(--text-primary)]">Romaric </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nhr-blue via-nhr-blue-electric to-nhr-indigo">
            Hirsein
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          {['Développeur Full-Stack', 'UI/UX Designer', 'Architecte Digital'].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-nhr-blue/25 text-nhr-blue-electric bg-nhr-blue/5"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[var(--text-secondary)] max-w-2xl text-lg leading-relaxed mb-10"
        >
          Passionné par la création d'expériences digitales d'exception. Fondateur de NHR Digital Agency,
          je transforme vos visions en réalités numériques avec une maîtrise totale des technologies modernes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-4 bg-nhr-blue-dark rounded-2xl font-bold text-white shadow-glow-blue hover:bg-nhr-blue transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Mail size={18} /> Me Contacter
          </a>
          <a
            href="#realisations"
            className="px-8 py-4 glass rounded-2xl font-bold hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2"
          >
            <ExternalLink size={18} /> Voir mes réalisations
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-2 mt-10 text-sm text-[var(--text-secondary)]"
        >
          <MapPin size={14} className="text-nhr-blue" />
          <span>Cameroun · Disponible à l'international</span>
        </motion.div>
      </motion.div>

      {/* ===== STATS ===== */}
      <div className="relative z-10 py-16 px-6 border-y border-[var(--glass-border)]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="neon-card-wrapper"
            >
              <div className="neon-card-content flex flex-col items-center justify-center py-8 px-4 text-center gap-2">
                <div className="text-nhr-blue mb-1">{stat.icon}</div>
                <div className="text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-nhr-blue to-nhr-blue-electric">
                  {stat.value}
                </div>
                <div className="text-xs font-mono font-bold text-[var(--text-secondary)] uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== TECHNOLOGIES ===== */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-nhr-blue uppercase mb-4 block">
              Stack Technologique
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              Technologies{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nhr-blue to-nhr-blue-electric">
                Maîtrisées
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Maîtrise complète à 100% de l'ensemble des technologies du développement web et mobile moderne.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {TECHS.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring', bounce: 0.3 }}
                className="neon-card-wrapper"
                style={{ '--neon-color': tech.color } as React.CSSProperties}
              >
                <div className="neon-card-content flex flex-col items-center justify-center p-8 gap-4 group cursor-default">
                  {/* Tech logo */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <div
                      className="absolute inset-0 blur-xl rounded-full opacity-0 group-hover:opacity-60 transition-opacity"
                      style={{ backgroundColor: tech.color }}
                    />
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-14 h-14 object-contain relative z-10 drop-shadow-lg"
                    />
                  </motion.div>

                  <div className="text-center">
                    <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2">{tech.name}</h3>
                    {/* Progress bar */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.08 + 0.3 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold mt-1 block" style={{ color: tech.color }}>
                      {tech.level}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== EXPERIENCE TIMELINE ===== */}
      <div className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent via-nhr-indigo/3 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono font-bold tracking-widest text-nhr-blue uppercase mb-4 block">
              Parcours Professionnel
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold">
              Mon{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nhr-blue to-nhr-indigo">
                Expérience
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-nhr-blue via-nhr-indigo to-transparent hidden md:block" />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative md:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-nhr-blue border-2 border-nhr-blue-electric shadow-glow-blue hidden md:block" />

                  <div className="neon-card-wrapper">
                    <div className="neon-card-content p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-[var(--text-primary)]">{exp.role}</h3>
                          <span className="text-nhr-blue-electric text-sm font-bold">{exp.company}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-[var(--text-secondary)] bg-nhr-blue/10 px-3 py-1 rounded-full border border-nhr-blue/20 whitespace-nowrap">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
