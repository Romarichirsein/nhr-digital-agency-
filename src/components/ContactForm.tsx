import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID || '',
        process.env.EMAILJS_TEMPLATE_ID || '',
        {
          from_name: data.name,
          reply_to: data.email,
          subject: data.subject,
          message: data.message,
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
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-12 rounded-[2rem] text-center max-w-2xl mx-auto border-nhr-blue/30 shadow-glow-blue"
      >
        <div className="w-20 h-20 bg-nhr-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-nhr-blue w-10 h-10" />
        </div>
        <h3 className="text-3xl font-display font-bold mb-4">{t('contact.success.title')}</h3>
        <p className="text-[var(--text-secondary)] mb-8">
          {t('contact.success.message')}
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-nhr-blue font-bold hover:underline"
        >
          {t('contact.success.another')}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left max-w-2xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-[10px] font-mono font-bold tracking-[0.2em] text-nhr-blue uppercase ml-1">
            {t('contact.form.company')}
          </label>
          <input
            {...register('name')}
            className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-nhr-blue/50 focus:bg-white/5 outline-none transition-all duration-300 placeholder:text-gray-600"
            placeholder={t('quote.form.company_placeholder')}
          />
          {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-1">{errors.name.message}</p>}
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-mono font-bold tracking-[0.2em] text-nhr-blue uppercase ml-1">
            {t('contact.form.email')}
          </label>
          <input
            {...register('email')}
            className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-nhr-blue/50 focus:bg-white/5 outline-none transition-all duration-300 placeholder:text-gray-600"
            placeholder="contact@votre-entreprise.com"
          />
          {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-1">{errors.email.message}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] ml-1">{t('contact.form.subject')}</label>
        <input
          {...register('subject')}
          className={`w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-nhr-blue/50 outline-none transition-all ${errors.subject ? 'border-red-500/50' : ''}`}
          placeholder={t('contact.form.subject_placeholder')}
        />
        {errors.subject && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider ml-1">{errors.subject.message}</p>}
      </div>

      <div className="space-y-3">
        <label className="text-[10px] font-mono font-bold tracking-[0.2em] text-nhr-blue uppercase ml-1">
          {t('quote.form.details')}
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-6 py-4 rounded-xl glass border-white/5 focus:border-nhr-blue/50 focus:bg-white/5 outline-none transition-all duration-300 resize-none placeholder:text-gray-600"
          placeholder={t('quote.form.details_placeholder')}
        />
        {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-1">{errors.message.message}</p>}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full py-5 rounded-2xl bg-nhr-blue-dark text-white font-bold text-lg shadow-glow-blue hover:bg-nhr-blue hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            {t('contact.form.submit')}
            <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}
