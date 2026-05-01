import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function WhatsAppButton() {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      {/* Tooltip */}
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 translate-x-[-10px]">
        <div className="bg-[#25D366] text-white text-[10px] sm:text-xs font-bold py-2 px-4 rounded-full shadow-lg">
          {t('contact.whatsapp')}
        </div>
      </div>

      {/* Pulsing Button */}
      <a
        href="https://wa.me/237699999999" // Replace with real number
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
        <Phone className="relative z-10 fill-current" size={24} />
      </a>
    </div>
  );
}
