import { motion } from 'framer-motion';
import { Star, Lock, Gift, Trophy, Sparkles } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { rewards, user } from '../data/mockData';
import { useState } from 'react';
import { SuccessModal } from '../components/Modal';

export default function Rewards() {
  const [redeemModal, setRedeemModal] = useState(false);

  const unlockedCount = rewards.filter(r => r.unlocked).length;
  const progress = (user.points / 5000) * 100;

  return (
    <PageWrapper>
      {/* ── Header ────────────────────────────────────────── */}
      <div className="px-5 pt-14 pb-2">
        <h1
          className="text-[26px] font-semibold text-gray-800 mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Recompensas
        </h1>
        <p className="text-sm text-gray-400">Gana puntos y desbloquea premios ✨</p>
      </div>

      {/* ── Points Card ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-5 mt-4 mb-6"
      >
        <div
          className="rounded-[24px] p-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #F4CCC5 0%, #EDBEC5 50%, #F5D4D2 100%)' }}
        >
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
          <div className="absolute bottom-0 right-8 w-16 h-16 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Trophy size={18} color="white" />
              <span className="text-white/80 text-sm font-medium">Tus puntos</span>
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-white text-4xl font-bold">{user.points.toLocaleString()}</span>
              <span className="text-white/60 text-sm">pts</span>
            </div>

            {/* Progress bar */}
            <div className="mb-2">
              <div className="flex justify-between text-[11px] text-white/60 mb-1.5">
                <span>Progreso al siguiente nivel</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                  className="h-full rounded-full bg-white/60"
                />
              </div>
            </div>

            <div className="flex justify-between text-[11px] text-white/50 mt-1">
              <span>{unlockedCount} desbloqueadas</span>
              <span>{rewards.length - unlockedCount} por desbloquear</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Rewards Grid ──────────────────────────────────── */}
      <div className="px-5 mb-4">
        <h3 className="font-semibold text-sm text-gray-700 mb-3">Catálogo de premios</h3>
      </div>

      <div className="px-5 grid grid-cols-2 gap-3 mb-6">
        {rewards.map((reward, i) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            whileTap={{ scale: reward.unlocked ? 0.96 : 1 }}
            onClick={() => reward.unlocked && setRedeemModal(true)}
            className={`card-premium p-4 flex flex-col items-center text-center relative overflow-hidden ${
              reward.unlocked ? 'cursor-pointer' : 'opacity-60'
            }`}
          >
            {/* Lock overlay */}
            {!reward.unlocked && (
              <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center z-10 rounded-[20px]">
                <Lock size={20} className="text-gray-300" />
              </div>
            )}

            <span className="text-3xl mb-2">{reward.icon}</span>
            <h4 className="font-semibold text-sm text-gray-800 mb-1">{reward.name}</h4>
            <p className="text-[11px] text-gray-400 mb-3 leading-relaxed">{reward.description}</p>

            <div className="flex items-center gap-1 mt-auto">
              <Star size={12} style={{ color: '#EDBEC5' }} fill="#EDBEC5" />
              <span className="text-xs font-semibold" style={{ color: '#EDBEC5' }}>
                {reward.points.toLocaleString()} pts
              </span>
            </div>

            {reward.unlocked && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute top-3 right-3"
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#F4CCC533' }}>
                  <Sparkles size={10} style={{ color: '#EDBEC5' }} />
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* ── How to Earn ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="px-5 mb-6"
      >
        <h3 className="font-semibold text-sm text-gray-700 mb-3">¿Cómo ganar puntos?</h3>
        <div className="flex flex-col gap-2">
          {[
            { emoji: '🧘‍♀️', text: 'Asiste a una clase', pts: '+50 pts' },
            { emoji: '🔥', text: 'Racha de 7 días', pts: '+200 pts' },
            { emoji: '👯‍♀️', text: 'Refiere a una amiga', pts: '+500 pts' },
            { emoji: '⭐', text: 'Deja una reseña', pts: '+100 pts' },
          ].map((item, i) => (
            <div key={i} className="card-premium p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.emoji}</span>
                <span className="text-sm text-gray-600">{item.text}</span>
              </div>
              <span className="text-xs font-semibold" style={{ color: '#EDBEC5' }}>{item.pts}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <SuccessModal
        isOpen={redeemModal}
        onClose={() => setRedeemModal(false)}
        message="¡Premio canjeado!"
      />
    </PageWrapper>
  );
}
