import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Sparkles, ArrowRight, Code, Cpu, ShieldCheck } from 'lucide-react';
import romaricPhoto from '@/src/assets/romaric.jpeg';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(
    isEn ? 'Connecting to high-performance edge cluster...' : 'Connexion aux serveurs haute performance NHR...'
  );

  const DURATION = 5000; // 5 secondes exactes

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / DURATION) * 100), 100);
      setProgress(pct);

      if (pct < 25) {
        setStatusText(
          isEn 
            ? 'Initializing ultra-fast architecture & CDN...' 
            : 'Initialisation de l\'architecture ultra-rapide & CDN...'
        );
      } else if (pct < 55) {
        setStatusText(
          isEn 
            ? 'Loading proprietary SaaS platforms & web applications...' 
            : 'Chargement des applications SaaS & plateformes web...'
        );
      } else if (pct < 85) {
        setStatusText(
          isEn 
            ? 'Configuring Google SEO indexing & high-speed rendering...' 
            : 'Optimisation du référencement Google & accélération graphique...'
        );
      } else {
        setStatusText(
          isEn ? 'Experience ready. Welcome to NHR Digital Agency.' : 'Expérience prête. Bienvenue sur NHR Digital Agency.'
        );
      }

      if (elapsed >= DURATION) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 350);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete, isEn]);

  // Rayon et circonférence de l'anneau circulaire SVG
  const radius = 98;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[99999] bg-[#020617] text-white flex flex-col items-center justify-center px-6 overflow-hidden select-none"
    >
      {/* Dynamic ambient lights in background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-nhr-blue/15 blur-[150px] animate-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-[110px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_85%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:36px_36px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        
        {/* Badge supérieur officiel */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-nhr-blue/40 bg-nhr-blue/10 text-cyan-400 text-[11px] font-mono font-bold uppercase tracking-widest mb-7 shadow-glow-blue backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nhr-blue" />
          </span>
          NHR DIGITAL AGENCY · FONDATEUR & ARCHITECTE
        </motion.div>

        {/* Cercle avec photo de Romaric et chargement circulaire 5s */}
        <div className="relative w-60 h-60 flex items-center justify-center mb-8">
          
          {/* Anneau SVG de progression circulaire 5s */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none z-20">
            {/* Piste de fond transparente */}
            <circle
              cx="120"
              cy="120"
              r={radius}
              fill="transparent"
              stroke="rgba(59, 130, 246, 0.18)"
              strokeWidth="5"
            />
            {/* Anneau lumineux en progression */}
            <circle
              cx="120"
              cy="120"
              r={radius}
              fill="transparent"
              stroke="url(#preloaderGradient)"
              strokeWidth="5.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: 'stroke-dashoffset 30ms linear',
                filter: 'drop-shadow(0 0 12px rgba(6, 182, 212, 0.95))',
              }}
            />
            <defs>
              <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Halo externe néon diffus */}
          <div 
            className="absolute -inset-3 rounded-full pointer-events-none opacity-70"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(59,130,246,0.2) 50%, transparent 75%)',
              filter: 'blur(16px)',
            }}
          />

          {/* Conteneur circulaire de la photo officielle de Romaric */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-44 h-44 rounded-full overflow-hidden z-10 border-2 border-nhr-blue/70 shadow-2xl bg-slate-950"
            style={{ 
              boxShadow: '0 0 35px rgba(6,182,212,0.45), inset 0 0 25px rgba(0,0,0,0.6)' 
            }}
          >
            <img
              src={romaricPhoto}
              alt="Nguemi Hirsein Romaric"
              className="w-full h-full object-cover object-center scale-105"
            />
            {/* Subtle glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-white/10 pointer-events-none" />
          </motion.div>

          {/* Badge Pourcentage Flottant Haute Précision */}
          <motion.div 
            className="absolute -bottom-2.5 z-30 px-4 py-1 rounded-full bg-[#020617]/95 border border-cyan-500/50 text-xs font-mono font-extrabold text-cyan-300 shadow-xl flex items-center gap-1.5 backdrop-blur-md"
            style={{ boxShadow: '0 0 18px rgba(6,182,212,0.5)' }}
          >
            <Sparkles size={12} className="text-cyan-400 animate-spin-slow" />
            <span>{progress}%</span>
          </motion.div>
        </div>

        {/* Nom du Fondateur */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-2"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
            {isEn ? 'Founder & Lead Architect' : 'Fondateur & Architecte Digital'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white mt-1">
            NGUEMI HIRSEIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-nhr-blue to-indigo-400">ROMARIC</span>
          </h2>
        </motion.div>

        {/* Message d'impact exigé par l'utilisateur */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-2 mb-6 px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md max-w-lg shadow-inner"
        >
          <p className="text-base sm:text-lg font-semibold tracking-tight text-slate-200 leading-snug">
            {isEn ? (
              <>
                Creator of <span className="text-white font-bold underline decoration-cyan-400/60 decoration-2 underline-offset-4">Ultra-Professional Websites</span> & <span className="text-cyan-400 font-bold">SaaS</span> · <span className="text-nhr-blue-electric font-bold">Google SEO</span>
              </>
            ) : (
              <>
                Créateur de <span className="text-white font-bold underline decoration-cyan-400/60 decoration-2 underline-offset-4">Sites Web</span>, <span className="text-cyan-400 font-bold">SaaS Ultra Professionnels</span> et <span className="text-nhr-blue-electric font-bold">Référencement Google</span>
              </>
            )}
          </p>
        </motion.div>

        {/* Barre de statut fine et message de progression */}
        <div className="w-full max-w-md mb-3">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-[0.5px]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-nhr-blue to-indigo-500 transition-all duration-75"
              style={{ width: `${progress}%`, boxShadow: '0 0 10px #06b6d4' }}
            />
          </div>
        </div>

        <p className="text-[11px] font-mono text-slate-400 h-5 transition-all duration-300">
          {statusText}
        </p>

        {/* Bouton d'accès direct discret (Skip) */}
        <button
          onClick={onComplete}
          className="mt-6 text-[10px] font-mono uppercase tracking-widest text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 opacity-60 hover:opacity-100"
        >
          <span>{isEn ? 'Skip and enter directly' : 'Passer et accéder directement'}</span>
          <ArrowRight size={11} />
        </button>

      </div>
    </motion.div>
  );
}
