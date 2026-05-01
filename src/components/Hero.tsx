import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-20" />
        
        {/* Animated Blur Spheres */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-nhr-blue/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] rounded-full bg-nhr-indigo/10 blur-[120px]" 
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nhr-blue/10 border border-nhr-blue/20 text-nhr-blue-electric text-xs font-bold mb-8 tracking-wider uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nhr-blue-electric opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nhr-blue"></span>
          </span>
          Innovation Digitale 2025
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] mb-6 tracking-tight"
        >
          {t('hero.title').split(' ').map((word, i) => (
            <span key={i} className={i === 2 ? "text-gradient" : "text-[var(--text-primary)]"}>
              {word}{i !== t('hero.title').split(' ').length - 1 ? ' ' : ''}
              {i === 1 && <br />}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg sm:text-xl text-[var(--text-secondary)] mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button className="px-8 py-4 bg-nhr-blue-dark rounded-2xl font-bold text-lg hover:bg-nhr-blue transition-all shadow-glow-blue active:scale-95">
            {t('hero.cta')}
          </button>
          
          <button className="px-8 py-4 glass rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
            {t('nav.portfolio')}
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t('hero.scroll')}</span>
        <ArrowDown size={14} className="text-nhr-blue" />
      </motion.div>

      {/* Side Decorative Data Lines */}
      <div className="absolute left-6 bottom-32 hidden lg:flex flex-col gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-px w-24 bg-gradient-to-r from-nhr-blue/50 to-transparent" />
        ))}
        <span className="font-mono text-[8px] text-nhr-blue/40 rotate-90 origin-left mt-2 tracking-[0.5em]">SYSTEM_INIT</span>
      </div>
    </section>
  );
}
