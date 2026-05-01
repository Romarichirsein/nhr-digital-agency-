import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

const PROJECT_CATEGORIES = ["All", "SaaS", "E-commerce", "Showcase"];

const PROJECTS = [
  {
    title: "FinTech Dashboard",
    category: "SaaS / Web App",
    filterId: "SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a10950?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Luxury Watch Shop",
    category: "E-commerce",
    filterId: "E-commerce",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Health Care Platform",
    category: "Showcase / AI",
    filterId: "Showcase",
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ea08?auto=format&fit=crop&q=80&w=800",
  }
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Portfolio <span className="text-nhr-blue">d'Excellence</span></h2>
            <p className="text-[var(--text-secondary)] text-sm font-medium tracking-wide">Une sélection de nos réalisations les plus marquantes.</p>
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
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hover: { 
                    scale: 1.02,
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }
                }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden glass border-white/5 aspect-video cursor-pointer hover:shadow-glow-blue hover:border-nhr-blue/30 transition-shadow duration-300"
              >
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  variants={{
                    initial: { scale: 1, x: 0, y: 0 },
                    hover: { 
                      scale: 1.15, 
                      x: -10, 
                      y: -10,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }
                  }}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nhr-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] font-mono font-bold text-nhr-blue uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                    VOIR LE PROJET <ExternalLink size={14} className="text-nhr-blue" />
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-nhr-blue/0 group-hover:border-nhr-blue/30 rounded-3xl transition-all pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full glass text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all">
            VOIR TOUTES NOS RÉALISATIONS
          </button>
        </div>
      </div>
    </section>
  );
}
