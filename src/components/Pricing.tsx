import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PRICING_PACKS } from '@/src/constants';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const { t, i18n } = useTranslation();
  const [region, setRegion] = useState<'africa' | 'europe' | 'america'>('africa');

  // Simple auto-detection fallback
  useEffect(() => {
    // This could call a real geolocation API
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone.includes('Africa')) setRegion('africa');
    else if (timezone.includes('Europe')) setRegion('europe');
    else if (timezone.includes('America')) setRegion('america');
  }, []);

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 text-[var(--text-primary)]">{t('nav.pricing')}</h2>
          <p className="text-[var(--text-secondary)] mb-8 sm:mb-12">{t('pricing.note').split('*')[1].trim()}</p>
          
          {/* Region Switcher */}
          <div className="inline-flex p-1 rounded-full glass mb-8">
            {(['africa', 'europe', 'america'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  region === r 
                  ? "bg-nhr-blue text-white shadow-lg" 
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {t(`pricing.${r}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_PACKS.map((pack, idx) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-3xl backdrop-blur-lg border transition-all ${
                idx === 1 
                ? "bg-nhr-blue-dark/10 border-nhr-blue/40 shadow-glow-blue lg:scale-105" 
                : "glass"
              }`}
            >
              {idx === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nhr-blue text-[10px] font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg text-white">
                  {t('pricing.popular')}
                </div>
              )}
              
              <h3 className="text-lg font-bold text-[var(--text-secondary)] mb-2">{pack.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl font-display font-bold text-[var(--text-primary)]">
                  {pack.price[region]}
                </span>
                {region !== 'africa' && <span className="text-[var(--text-secondary)] text-sm italic">{t('pricing.tax_excl')}</span>}
              </div>

              <ul className="space-y-4 mb-10">
                {(i18n.language === 'fr' ? pack.features_fr : pack.features_en).map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                    <div className="h-5 w-5 rounded-full bg-nhr-blue/20 flex items-center justify-center text-nhr-blue group-hover:scale-110 transition-transform">
                      <Check size={12} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/devis"
                className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center ${
                  idx === 1 
                  ? "bg-nhr-blue text-white hover:bg-nhr-blue/80" 
                  : "glass text-[var(--text-primary)]"
                }`}
              >
                {t('pricing.cta')}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-gray-500 italic">
          <Info size={14} />
          {t('pricing.note')}
        </div>
      </div>
    </section>
  );
}
