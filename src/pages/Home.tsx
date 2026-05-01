import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />
      
      <section className="py-24 border-y border-white/5 relative z-10 bg-slate-900/40 backdrop-blur-sm">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { val: "150+", label: t('stats.projects') },
              { val: "120+", label: t('stats.clients') },
              { val: "15+", label: t('stats.countries') },
              { val: "5+", label: t('stats.years') },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                className="text-center group p-8 rounded-3xl glass border-white/5 shadow-glow-indigo transition-transform hover:scale-105"
              >
                <div className="text-4xl md:text-5xl font-display font-extrabold text-gradient mb-3">
                  {stat.val}
                </div>
                <div className="text-[10px] font-mono font-bold tracking-[0.3em] text-nhr-slate-400 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Services />
      <Portfolio />
      <Pricing />
    </motion.div>
  );
}
