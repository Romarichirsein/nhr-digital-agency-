import Portfolio from '../components/Portfolio';
import { motion } from 'motion/react';

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="pt-24 min-h-screen"
    >
      <Portfolio />
    </motion.div>
  );
}
