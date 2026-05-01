import { motion } from 'motion/react';
import { Globe, ShoppingBag, Layers, BarChart, Smartphone, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SERVICES } from '@/src/constants';

const ICONS = { Globe, ShoppingBag, Layers, BarChart, Smartphone, Search };

export default function Services() {
  const { t, i18n } = useTranslation();

  return (
    <section id="services" className="py-24 px-6 bg-nhr-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold mb-4">Nos Expertise <span className="text-nhr-blue">Digitales</span></h2>
            <p className="text-[var(--text-secondary)]">Nous transformons vos idées en réalités numériques performantes et esthétiques.</p>
          </div>
          <div className="h-px flex-1 bg-[var(--glass-border)] mx-8 mb-4 hidden md:block" />
        </div>

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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const IconComponent = ICONS[service.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="group p-10 rounded-3xl glass hover:border-nhr-blue/50 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Glow back */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-nhr-blue/10 blur-[50px] group-hover:bg-nhr-blue/20 transition-all" />
                
                <motion.div 
                  variants={{
                    hover: {
                      y: [0, -8, 0],
                      transition: {
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }
                  }}
                  whileHover="hover"
                  className="h-14 w-14 rounded-2xl bg-nhr-blue-dark/20 flex items-center justify-center text-nhr-blue mb-8 group-hover:scale-110 group-hover:bg-nhr-blue-dark/40 transition-all pointer-events-none"
                >
                  <IconComponent size={28} />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)] group-hover:text-nhr-blue-electric transition-colors">
                  {i18n.language === 'fr' ? service.title_fr : service.title_en}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
                  {i18n.language === 'fr' ? service.description_fr : service.description_en}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-nhr-blue opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  LEARN MORE <span className="h-px w-8 bg-nhr-blue" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
