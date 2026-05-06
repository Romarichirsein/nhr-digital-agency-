import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Code2, PenTool, Layout, Layers, MonitorSmartphone } from 'lucide-react';

const PROJECT_CATEGORIES = ["All", "Web", "E-commerce", "App"];

const PROJECTS = [
  { title: "Afedie", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1551288049-bbda38a10950?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Plateforme web professionnelle pour l'association Afedie." },
  { title: "La Lingua", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Site institutionnel pour l'académie de langues internationales." },
  { title: "Herta Intek", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1576091160550-217359f4ea08?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Site vitrine B2B pour Herta Intek." },
  { title: "CSBIE", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Portail web pour le Complexe Scolaire Bilingue International." },
  { title: "Justine Kem's", category: "E-commerce", filterId: "E-commerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Boutique en ligne élégante et performante." },
  { title: "Meventhouse", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Plateforme de gestion et présentation d'événements." },
  { title: "Camerbuild Sarl", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1541888086225-f6c04f9829cd?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Site corporate pour une entreprise de construction BTP." },
  { title: "Wellborne", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Plateforme digitale pour les services de Wellborne." },
  { title: "Mika Saveur Authentiques", category: "E-commerce", filterId: "E-commerce", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Site e-commerce dédié à la gastronomie." },
  { title: "ISZ Zentrum", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Plateforme d'information pour le centre ISZ." },
  { title: "Bimiberd", category: "App", filterId: "App", image: "https://images.unsplash.com/photo-1526506118305-6535d5159493?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Application fitness et physio moderne." },
  { title: "Global IT", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Site vitrine pour services technologiques avancés." },
  { title: "Un Geste Divin", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Site web pour une association caritative." },
  { title: "Leelou Baby Food", category: "E-commerce", filterId: "E-commerce", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Boutique e-commerce de nutrition infantile." },
  { title: "Teint Afrique", category: "E-commerce", filterId: "E-commerce", image: "https://images.unsplash.com/photo-1615397323891-626a57c2a71f?auto=format&fit=crop&q=80&w=800", link: "#", desc: "E-commerce de produits cosmétiques africains." },
  { title: "NHR Digital Agency", category: "Web", filterId: "Web", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", link: "#", desc: "Notre propre site vitrine digital premium." },
];

const SKILLS = [
  { name: "WordPress", icon: <Layout size={24} />, percent: 100 },
  { name: "HTML/CSS", icon: <Code2 size={24} />, percent: 100 },
  { name: "JavaScript", icon: <Code2 size={24} />, percent: 100 },
  { name: "Next.js", icon: <Layers size={24} />, percent: 100 },
  { name: "React", icon: <MonitorSmartphone size={24} />, percent: 100 },
  { name: "Flutter", icon: <MonitorSmartphone size={24} />, percent: 100 },
  { name: "UI/UX Design", icon: <PenTool size={24} />, percent: 100 },
];

export default function Portfolio() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.filterId === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-nhr-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* FOUNDER SECTION */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-extrabold mb-6">
              Le Fondateur <span className="text-transparent bg-clip-text bg-gradient-to-r from-nhr-blue to-nhr-blue-electric">Romaric</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
              Expert en d&eacute;veloppement web, mobile et UI/UX Design, avec une ma&icirc;trise totale des technologies modernes pour cr&eacute;er des exp&eacute;riences digitales inoubliables.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="neon-card-wrapper h-40"
              >
                <div className="neon-card-content flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-nhr-blue mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-2">{skill.name}</h3>
                  <div className="text-2xl font-mono font-bold text-nhr-blue-electric">
                    {skill.percent}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PROJECTS SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Portfolio <span className="text-nhr-blue">d'Excellence</span></h2>
            <p className="text-[var(--text-secondary)] text-sm font-medium tracking-wide">Une s&eacute;lection de nos r&eacute;alisations les plus marquantes.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl glass">
            {PROJECT_CATEGORIES.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-colors ${
                  activeFilter === filter ? "text-white" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-nhr-blue rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="neon-card-wrapper h-[400px]"
              >
                <div className="neon-card-content group cursor-pointer flex flex-col">
                  {/* Image/Video Area */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nhr-black via-transparent to-transparent opacity-90" />
                    
                    <div className="absolute bottom-4 left-6">
                      <span className="text-[10px] font-mono font-bold text-nhr-blue uppercase tracking-widest bg-nhr-blue/10 px-3 py-1 rounded-full backdrop-blur-md border border-nhr-blue/20">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-nhr-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                        {project.desc}
                      </p>
                    </div>
                    
                    <a 
                      href={project.link}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] group-hover:text-nhr-blue transition-colors mt-4"
                    >
                      VOIR LE PROJET <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full glass text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all hover:shadow-glow-blue hover:border-nhr-blue/30">
            D&Eacute;MARRER UN PROJET SIMILAIRE
          </button>
        </div>
      </div>
    </section>
  );
}
