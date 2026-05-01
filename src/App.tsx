/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import QuotePage from './pages/QuotePage';
import ContactForm from './components/ContactForm';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import logoDark from '@/src/assets/logo-dark.png';
import logoLight from '@/src/assets/logo-light.png';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const { t } = useTranslation();
  const location = useLocation();
  const { scrollY } = useScroll();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };
  
  const bgTranslate1 = useTransform(scrollY, [0, 1000], [0, 100]);
  const bgTranslate2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const bgScale = useTransform(scrollY, [0, 2000], [1, 1.2]);
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative bg-nhr-black text-[var(--text-primary)] selection:bg-nhr-blue/30 overflow-hidden min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-nhr-blue z-[1000] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: bgTranslate1, scale: bgScale }}
          className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-nhr-blue/10 blur-[120px] rounded-full animate-float" 
        />
        <motion.div 
          style={{ y: bgTranslate2, animationDelay: '-5s' }}
          className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-nhr-indigo/10 blur-[100px] rounded-full animate-float" 
        />
        <div className="absolute top-[40%] right-[15%] w-[20vw] h-[20vw] bg-nhr-blue-electric/5 blur-[80px] rounded-full animate-morph" />
        
        {/* Subtle Scanline */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_50%,#3b82f6_50%)] bg-[length:100%_4px] pointer-events-none" />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/devis" element={<QuotePage />} />
          </Routes>
        </AnimatePresence>

        {/* Contact Form Section */}
        <motion.section 
          id="contact" 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-32 px-6 relative"
        >
          <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden group shadow-glow-indigo">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-nhr-blue/10 blur-[100px] pointer-events-none" />
            
            <div className="relative mb-12">
              <h2 className="text-4xl sm:text-6xl font-display font-extrabold mb-6 tracking-tighter">{t('contact.title')}</h2>
              <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg leading-relaxed">
                {t('contact.subtitle')}
              </p>
            </div>

            <ContactForm />
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-24 px-6 relative border-t border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-12">
            <img 
              src={theme === 'dark' ? logoDark : logoLight} 
              alt="NHR DIGITAL" 
              className="h-10 w-auto object-contain transition-all duration-300"
            />
            <span className="font-display font-bold text-2xl tracking-tight uppercase text-[var(--text-primary)]">NHR <span className="text-nhr-blue-electric">.</span></span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 mb-16 text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-widest">
            <Link to="/" className="hover:text-nhr-blue transition-colors">{t('nav.home')}</Link>
            <Link to="/services" className="hover:text-nhr-blue transition-colors">{t('nav.expertise')}</Link>
            <Link to="/portfolio" className="hover:text-nhr-blue transition-colors">{t('nav.portfolio')}</Link>
            <Link to="/pricing" className="hover:text-nhr-blue transition-colors">{t('nav.pricing')}</Link>
            <Link to="/devis" className="hover:text-nhr-blue transition-colors">{t('nav.quote')}</Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-widest opacity-60">
            <span>© 2025 NHR Digital Agency | {t('footer.rights')}</span>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-nhr-blue">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-nhr-blue">{t('footer.legal')}</a>
          </div>
        </div>
      </footer>

      {/* Overlays */}
      <ChatBot />
      <WhatsAppButton />
    </div>
  );
}
