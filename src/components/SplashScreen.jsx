import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen({ onFinish }) {
  const [phase, setPhase] = useState('logo');

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('text'), 600);
    const timer2 = setTimeout(() => setPhase('exit'), 2200);
    const timer3 = setTimeout(() => onFinish(), 2800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {phase !== 'exit' ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #FFF9F8 0%, #E2D6C4 100%)' }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Decorative circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
              style={{ background: 'rgba(244, 204, 197, 0.1)' }}
              animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full"
              style={{ background: 'rgba(244, 204, 197, 0.1)' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="w-32 h-32 rounded-full overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] mb-8"
          >
            <img src="/jazfit.jpeg" alt="JAZFIT Logo" className="w-full h-full object-cover" />
          </motion.div>

          {/* Text */}
          <AnimatePresence>
            {(phase === 'text') && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <h1
                  className="text-gray-800 text-3xl font-semibold tracking-[0.2em] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  JAZFIT
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-400 text-xs font-medium tracking-[0.3em] uppercase"
                >
                  Wellness Studio
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Loading dots */}
          <motion.div
            className="absolute bottom-16 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-white/50"
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
