import { motion } from 'motion/react';
import { 
  Globe, ShoppingBag, Layers, BarChart, Smartphone, Search, 
  Cpu, Brain, Film, Image, Video, MapPin, Share2, Youtube, Music, Sparkles, ArrowRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SERVICES } from '@/src/constants';

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = { 
  Globe, ShoppingBag, Layers, BarChart, Smartphone, Search,
  Cpu, Brain, Film, Image, Video, MapPin, Share2, Youtube, Music 
};

export default function Services() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section id="services" className="py-28 px-6 bg-nhr-black relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-nhr-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-nhr-indigo/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-nhr-blue uppercase mb-3 block animate-text-glow flex items-center gap-2">
              <Sparkles size={14} /> {isEn ? 'Our Capabilities' : 'Solutions Complètes & IA'}
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold mb-4">
              {isEn ? 'Our Digital & AI ' : 'Nos Expertises '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nhr-blue via-nhr-blue-electric to-nhr-indigo">
                {isEn ? 'Expertises' : 'Digitales & IA'}
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
              {isEn 
                ? 'From bespoke web and mobile architectures to cutting-edge AI production, we turn your ambition into measurable digital reality.'
                : 'De la création de sites et applications SaaS aux productions d\'intelligence artificielle et stratégies publicitaires, nous propulsons votre activité.'}
            </p>
          </div>
          <div className="h-px flex-1 bg-[var(--glass-border)] mx-8 mb-4 hidden md:block" />
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const IconComponent = ICONS[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="neon-card-wrapper group cursor-pointer"
              >
                <div className="neon-card-content p-8 flex flex-col justify-between h-full relative overflow-hidden">
                  {/* Glow back on card hover */}
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-nhr-blue/10 blur-[50px] group-hover:bg-nhr-blue/30 transition-all pointer-events-none" />
                  
                  <div>
                    <div className="h-14 w-14 rounded-2xl bg-nhr-blue/10 border border-nhr-blue/25 flex items-center justify-center text-nhr-blue-electric mb-6 group-hover:scale-110 group-hover:bg-nhr-blue group-hover:text-white transition-all shadow-glow-blue pointer-events-none">
                      <IconComponent size={26} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-nhr-blue-electric transition-colors leading-snug">
                      {isEn ? service.title_en : service.title_fr}
                    </h3>
                    
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                      {isEn ? service.description_en : service.description_fr}
                    </p>
                  </div>

                  <Link 
                    to="/devis"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-nhr-blue group-hover:text-nhr-blue-electric transition-all"
                  >
                    <span>{isEn ? 'REQUEST A QUOTE' : 'DEMANDER UN DEVIS'}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
