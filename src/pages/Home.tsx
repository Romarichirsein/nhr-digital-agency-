import Hero from '../components/Hero';
import Services from '../components/Services';
import FounderPortfolio from '../components/FounderPortfolio';
import Realisations from '../components/Realisations';
import Pricing from '../components/Pricing';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Award, Briefcase, Code2, GraduationCap } from 'lucide-react';

export default function Home() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />
      
      {/* Statistiques synchronisées avec la Licence Pro 2025 et le 6e National BTS */}
      <section className="py-20 border-y border-nhr-blue/20 relative z-10 bg-slate-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { val: "2025", label: isEn ? "BSc in Software Engineering" : "Licence Pro Génie Logiciel", sub: isEn ? "Graduated in 2025 (ISESTM)" : "Diplômé en 2025 (ISESTM)", icon: <GraduationCap size={24} />, color: "#06b6d4" },
              { val: "6ème", label: isEn ? "6th National Rank HND" : "6e National BTS Génie Logiciel", sub: isEn ? "Cameroon National Honors" : "Mention Spéciale 🇨🇲", icon: <Award size={24} />, color: "#60a5fa" },
              { val: "25+", label: isEn ? "Real-World Projects" : "Projets Réalisés & Déployés", sub: isEn ? "National & International" : "Web, Mobile & E-commerce", icon: <Briefcase size={24} />, color: "#3b82f6" },
              { val: "6", label: isEn ? "Proprietary SaaS Software" : "Logiciels SaaS Déployés", sub: isEn ? "E-learning, Gym, School, Finance" : "E-learning, Sport, Scolaire, Finance", icon: <Code2 size={24} />, color: "#a855f7" },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="neon-card-wrapper"
              >
                <div className="neon-card-content p-6 text-center flex flex-col items-center justify-center gap-2">
                  <div style={{ color: stat.color, filter: `drop-shadow(0 0 10px ${stat.color})` }}>
                    {stat.icon}
                  </div>
                  <div 
                    className="text-3xl sm:text-4xl font-display font-extrabold"
                    style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}80` }}
                  >
                    {stat.val}
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
          </motion.div>
        </div>
      </section>

      {/* Services & Nouvelles Expertises Digitales & IA */}
      <Services />

      {/* Portfolio du Fondateur Romaric synchronisé (Photo réelle, 2025 Licence Pro, Allemand B1, Outils IA & Chaînes YouTube) */}
      <div id="founder">
        <FounderPortfolio />
      </div>

      {/* Réalisations & Déploiements SaaS synchronisés (avec toutes les images réelles) */}
      <Realisations />

      {/* Tarifs & Packs */}
      <Pricing />
    </motion.div>
  );
}
