import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight } from 'lucide-react';
import romaricPhoto from '@/src/assets/romaric.jpg';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(
    isEn ? 'Initializing high-performance digital environment...' : 'Initialisation de l\'environnement haute performance...'
  );

  const DURATION = 5000; // 5 secondes exactes

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / DURATION) * 100), 100);
      setProgress(pct);

      if (pct < 30) {
        setStatusText(
          isEn 
            ? 'Initializing high-performance digital environment...' 
            : 'Initialisation de l\'environnement haute performance...'
        );
      } else if (pct < 65) {
        setStatusText(
          isEn 
            ? 'Loading proprietary SaaS architectures & live platforms...' 
            : 'Chargement des architectures SaaS & plateformes en ligne...'
        );
      } else if (pct < 90) {
        setStatusText(
          isEn 
            ? 'Optimizing ultra-modern visual rendering & Google SEO...' 
            : 'Optimisation du rendu graphique & référencement Google...'
        );
      } else {
        setStatusText(
          isEn ? 'Experience ready. Welcome.' : 'Expérience prête. Bienvenue.'
        );
      }

      if (elapsed >= DURATION) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete, isEn]);

  // Rayon du cercle SVG
  const radius = 96;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[99999] bg-[#020617] text-white flex flex-col items-center justify-center px-6 overflow-hidden select-none"
    >
      {/* Background radial ambiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-nhr-blue/10 blur-[140px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_80%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        
        {/* Badge supérieur */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-nhr-blue/40 bg-nhr-blue/10 text-nhr-blue-electric text-[11px] font-mono font-bold uppercase tracking-widest mb-8 shadow-glow-blue"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nhr-blue-electric opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nhr-blue" />
          </span>
          NHR DIGITAL AGENCY · FONDATEUR
        </motion.div>

        {/* Cercle avec photo de Romaric et anneau de progression circulaire 5s */}
        <div className="relative w-56 h-56 flex items-center justify-center mb-8">
          {/* SVG Circular Progress Bar */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-20">
            {/* Background circle track */}
            <circle
              cx="112"
              cy="112"
              r={radius}
              fill="transparent"
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="5"
            />
            {/* Animated progress circle */}
            <circle
              cx="112"
              cy="112"
              r={radius}
              fill="transparent"
              stroke="url(#progressGradient)"
              strokeWidth="5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 40ms linear',
                filter: 'drop-shadow(0 0 10px rgba(96, 165, 250, 0.9))',
              }}
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Halo externe lumineux */}
          <div 
            className="absolute -inset-2 rounded-full pointer-events-none animate-pulse opacity-60"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
              filter: 'blur(12px)',
            }}
          />

          {/* Conteneur de l'image de Romaric */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-44 h-44 rounded-full overflow-hidden z-10 border-2 border-nhr-blue/60 shadow-2xl bg-slate-950"
            style={{ boxShadow: '0 0 30px rgba(59,130,246,0.5), inset 0 0 20px rgba(0,0,0,0.5)' }}
          >
            <img
              src={romaricPhoto}
              alt="Nguemi Hirsein Romaric"
              className="w-full h-full object-cover object-top scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Badge Pourcentage Flottant */}
          <motion.div 
            className="absolute -bottom-2 z-30 px-3.5 py-1 rounded-full bg-[#020617]/95 border border-nhr-blue/60 text-xs font-mono font-extrabold text-nhr-blue-electric shadow-lg flex items-center gap-1.5"
            style={{ boxShadow: '0 0 15px rgba(59,130,246,0.6)' }}
          >
            <Sparkles size={11} className="text-cyan-400" />
            <span>{progress}%</span>
          </motion.div>
        </div>

        {/* Nom du Fondateur */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white mb-2"
        >
          NGUEMI HIRSEIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-nhr-blue to-indigo-400">ROMARIC</span>
        </motion.h1>

        {/* Message d'impact exigé par l'utilisateur */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm sm:text-base font-medium text-slate-300 max-w-lg leading-relaxed mb-6"
        >
          {isEn ? (
            <>
              Creator of <span className="text-white font-bold">Ultra-Professional Websites</span> & <span className="text-cyan-400 font-bold">SaaS Platforms</span> · <span className="text-nhr-blue-electric font-bold">Google SEO</span> & AI Architecture
            </>
          ) : (
            <>
              Créateur de <span className="text-white font-bold">Sites Web</span> & <span className="text-cyan-400 font-bold">SaaS Ultra Professionnels</span> · <span className="text-nhr-blue-electric font-bold">Référencement Google</span> & Solutions IA
            </>
          )}
        </motion.p>

        {/* Barre linéaire discrète + statut */}
        <div className="w-full max-w-md mb-3">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-[0.5px]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-nhr-blue to-indigo-500 transition-all duration-75"
              style={{ width: `${progress}%`, boxShadow: '0 0 10px #3b82f6' }}
            />
          </div>
        </div>

        <p className="text-[11px] font-mono text-slate-400 h-5 transition-all duration-300">
          {statusText}
        </p>

        {/* Bouton d'accès direct discret (Skip) */}
        <button
          onClick={onComplete}
          className="mt-6 text-[10px] font-mono uppercase tracking-widest text-slate-500 hover:text-white transition-colors flex items-center gap-1 opacity-70 hover:opacity-100"
        >
          <span>{isEn ? 'Enter Website Directly' : 'Accéder directement'}</span>
          <ArrowRight size={10} />
        </button>

      </div>
    </motion.div>
  );
}
