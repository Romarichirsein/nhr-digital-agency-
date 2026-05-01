import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { FileText, Send, CheckCircle2, Layout, Search, Zap, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const quoteSchema = z.object({
  company: z.string().min(2, "Nom de l'entreprise requis"),
  website: z.string().url("URL invalide").optional().or(z.literal('')),
  serviceType: z.enum(['showcase', 'ecommerce', 'saas', 'seo', 'other']),
  budget: z.string().min(1, "Veuillez indiquer un budget approximatif"),
  deadline: z.string().min(1, "Veuillez indiquer un délai"),
  details: z.string().min(20, "Veuillez donner plus de détails sur votre projet"),
  email: z.string().email("Email invalide"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const SERVICES = [
  { id: 'showcase', label: 'Site Vitrine', icon: Layout },
  { id: 'ecommerce', label: 'E-commerce', icon: Globe },
  { id: 'saas', label: 'Plateforme SaaS', icon: Zap },
  { id: 'seo', label: 'SEO & Marketing', icon: Search },
];

export default function QuotePage() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const selectedService = watch('serviceType');

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Find selected service title
      const service = SERVICES.find(s => s.id === data.serviceType);
      const serviceTitle = service ? service.label : data.serviceType;
      
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID || '',
        process.env.EMAILJS_TEMPLATE_ID || '',
        {
          from_name: data.company,
          reply_to: data.email,
          subject: `NOUVEAU DEVIS: ${serviceTitle}`,
          message: `
            Type de Projet: ${serviceTitle}
            Entreprise: ${data.company}
            Site Actuel: ${data.website || 'N/A'}
            Budget: ${data.budget}
            Délai: ${data.deadline}
            
            Description du besoin:
            ${data.details}
            
            Contact: ${data.email}
          `,
          to_name: 'NHR Digital Agency',
        },
        process.env.EMAILJS_PUBLIC_KEY || ''
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert(t('chat.error'));
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-12 sm:p-20 rounded-[3rem] text-center max-w-3xl mx-auto border-nhr-blue/30 shadow-glow-blue"
        >
          <CheckCircle2 className="text-nhr-blue w-24 h-24 mx-auto mb-8 animate-bounce" />
          <h1 className="text-4xl sm:text-6xl font-display font-bold mb-6">{t('quote.success.title')}</h1>
          <p className="text-xl text-[var(--text-secondary)] mb-12">
            {t('quote.success.message')}
          </p>
          <a href="/" className="px-10 py-5 rounded-2xl bg-nhr-blue-dark text-white font-bold text-lg shadow-glow-blue hover:bg-nhr-blue transition-all">
            {t('quote.success.back')}
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nhr-blue/20 bg-nhr-blue/5 text-nhr-blue text-xs font-bold uppercase tracking-widest mb-6"
          >
            <FileText size={14} />
            {t('quote.badge')}
          </motion.div>
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold mb-6 tracking-tighter">
            {t('quote.title')}
          </h1>
          <p className="text-[var(--text-secondary)] text-xl max-w-2xl mx-auto">
            {t('quote.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          {/* Step 1: Project Type */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-nhr-blue text-white flex items-center justify-center text-sm">1</span>
              {t('quote.step1')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setValue('serviceType', s.id as any)}
                  className={`p-6 rounded-2xl border transition-all flex flex-col items-center gap-4 ${
                    selectedService === s.id 
                    ? "bg-nhr-blue/10 border-nhr-blue shadow-glow-blue text-[var(--text-primary)]" 
                    : "glass border-white/5 text-[var(--text-secondary)] hover:border-white/20"
                  }`}
                >
                  <s.icon size={24} />
                  <span className="text-xs font-bold uppercase tracking-wider text-center">{s.label}</span>
                </button>
              ))}
            </div>
            {errors.serviceType && <p className="text-red-500 text-xs font-bold mt-2">{errors.serviceType.message}</p>}
          </section>

          {/* Step 2: Details */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-nhr-blue text-white flex items-center justify-center text-sm">2</span>
              {t('quote.step2')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">{t('contact.form.company')}</label>
                <input
                  {...register('company')}
                  className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-nhr-blue/50 outline-none"
                  placeholder={t('quote.form.company_placeholder')}
                />
                {errors.company && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.company.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">{t('quote.form.website')}</label>
                <input
                  {...register('website')}
                  className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-nhr-blue/50 outline-none"
                  placeholder="https://votre-site.com"
                />
                {errors.website && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.website.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">{t('quote.form.budget')}</label>
                <select
                  {...register('budget')}
                  className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-nhr-blue/50 outline-none appearance-none"
                >
                  <option value="">{t('quote.form.budget_placeholder')}</option>
                  <option value="<2000">Moins de 2 000€</option>
                  <option value="2000-5000">2 000€ - 5 000€</option>
                  <option value="5000-10000">5 000€ - 10 000€</option>
                  <option value="10000+">Plus de 10 000€</option>
                </select>
                {errors.budget && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.budget.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">{t('quote.form.deadline')}</label>
                <select
                  {...register('deadline')}
                  className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-nhr-blue/50 outline-none appearance-none"
                >
                  <option value="">{t('quote.form.deadline_placeholder')}</option>
                  <option value="urgent">Urgent (&lt; 1 mois)</option>
                  <option value="medium">Standard (1-3 mois)</option>
                  <option value="flexible">Flexible</option>
                </select>
                {errors.deadline && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.deadline.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">{t('quote.form.details')}</label>
              <textarea
                {...register('details')}
                rows={6}
                className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-nhr-blue/50 outline-none resize-none"
                placeholder={t('quote.form.details_placeholder')}
              />
              {errors.details && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.details.message}</p>}
            </div>
          </section>

          {/* Step 3: Contact Info */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-nhr-blue text-white flex items-center justify-center text-sm">3</span>
              {t('quote.step3')}
            </h3>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">{t('contact.form.email')}</label>
              <input
                {...register('email')}
                className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-nhr-blue/50 outline-none"
                placeholder="contact@votre-entreprise.com"
              />
              {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.email.message}</p>}
            </div>
          </section>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-6 rounded-2xl bg-nhr-blue-dark text-white font-bold text-xl shadow-glow-blue hover:bg-nhr-blue hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                {t('quote.form.submit')}
                <Send className="w-6 h-6" />
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
