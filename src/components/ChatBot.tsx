import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Bot, Loader2, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GoogleGenAI } from "@google/genai/web";
import { cn } from '@/src/lib/utils';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `You are the AI assistant for NHR Digital Agency. Speak in ${i18n.language === 'fr' ? 'French' : 'English'}. NHR Digital Agency is a premium web development agency. Offer services like Showcase sites, E-commerce, SaaS, SEO, and UI/UX design. Speak professionally.`,
        },
        contents: [
          ...messages.map(m => ({ text: `${m.role}: ${m.text}` })),
          { text: userMessage }
        ]
      });

      const text = response.text || (i18n.language === 'fr' ? "Désolé, je ne peux pas répondre." : "I'm sorry, I couldn't generate a response.");
      setMessages(prev => [...prev, { role: 'bot', text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: t('chat.error') }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendWhatsAppReport = () => {
    const phoneNumber = "237699999999"; // Remplacez par le numéro réel du service client
    const conversation = messages
      .map(m => `${m.role === 'user' ? 'Client' : 'Assistant'}: ${m.text}`)
      .join('\n\n');
    
    const header = i18n.language === 'fr' 
      ? "📑 *RAPPORT DE CONVERSATION - NHR DIGITAL*\n\n" 
      : "📑 *CONVERSATION REPORT - NHR DIGITAL*\n\n";
    const footer = i18n.language === 'fr'
      ? "\n\nContactez-moi pour donner suite à cette demande."
      : "\n\nContact me to follow up on this request.";
    const fullMessage = encodeURIComponent(header + conversation + footer);
    
    window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-[350px] overflow-hidden rounded-2xl glass-dark shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-nhr-blue-dark p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                  <span className="text-lg">🤖</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t('chat.agent')}</p>
                  <p className="text-[10px] text-white/80 uppercase tracking-widest font-semibold">{t('chat.status')}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-white/60 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="h-64 space-y-4 overflow-y-auto p-4 bg-transparent scrollbar-hide"
            >
              {messages.length === 0 && (
                <div className="text-center py-6">
                  <div className="p-3 bg-white/10 rounded-2xl rounded-tl-none text-xs leading-relaxed text-nhr-slate-400">
                    {t('chat.welcome')}
                  </div>
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col gap-1",
                    msg.role === 'user' ? "items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "p-3 rounded-2xl text-xs leading-relaxed max-w-[85%]",
                      msg.role === 'user' 
                        ? "bg-nhr-blue-dark text-white rounded-tr-none" 
                        : "bg-white/10 text-white rounded-tl-none"
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-nhr-slate-400">
                  <Loader2 size={12} className="animate-spin text-nhr-blue-electric" />
                  <span className="text-[10px]">{t('chat.thinking')}</span>
                </div>
              )}
            </div>

            {/* Actions Quick Access */}
            {messages.length >= 2 && !isLoading && (
              <div className="px-4 pb-2">
                <button 
                  onClick={sendWhatsAppReport}
                  className="w-full py-2 bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-[10px] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#25D366]/30 transition-all"
                >
                  <Share2 size={12} />
                  {t('chat.whatsapp_report')}
                </button>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10 flex gap-2 bg-slate-900/50">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chat.placeholder')}
                className="flex-1 bg-white/5 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-nhr-blue/50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-nhr-blue-dark rounded-xl flex items-center justify-center text-white hover:bg-nhr-blue transition-colors disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-nhr-blue-dark text-white shadow-glow-blue transition-all hover:scale-110 active:scale-95"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
}
