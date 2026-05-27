import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, Flame, Trophy, Calendar, Star } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { user, classes, weeklyProgress, promotions } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Home() {
  const navigate = useNavigate();
  const upcomingClasses = classes.slice(0, 3);
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches';

  return (
    <PageWrapper>
      <motion.div variants={stagger} initial="hidden" animate="show">
        {/* ── Header ────────────────────────────────────────── */}
        <motion.div variants={fadeUp} className="px-5 pt-14 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 mb-0.5">{greeting} ✨</p>
              <h1
                className="text-[26px] font-semibold text-gray-800 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {user.name}
              </h1>
            </div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/profile')}
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold text-white cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #F4CCC5, #EDBEC5)' }}
            >
              {user.name[0]}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Motivational Banner ───────────────────────────── */}
        <motion.div variants={fadeUp} className="px-5 mb-5">
          <div
            className="rounded-[24px] p-5 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FFF9F8 0%, #E2D6C4 100%)', boxShadow: '0 8px 30px rgba(226, 214, 196, 0.4)' }}
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full" style={{ background: 'rgba(255,255,255,0.6)' }} />
            <div className="absolute -bottom-8 -left-4 w-20 h-20 rounded-full" style={{ background: 'rgba(244, 204, 197, 0.2)' }} />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-[#a09070]" />
                <span className="text-[#a09070] text-xs font-medium uppercase tracking-[0.15em]">Tu progreso</span>
              </div>
              <h2 className="text-gray-800 text-xl font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                ¡Llevas {user.streak} días seguidos!
              </h2>
              <p className="text-gray-500 text-sm">Sigue así, estás más cerca de tu meta 💪</p>
            </div>
          </div>
        </motion.div>

        {/* ── Weekly Progress ───────────────────────────────── */}
        <motion.div variants={fadeUp} className="px-5 mb-6">
          <div className="card-premium p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm text-gray-700">Esta semana</h3>
              <span className="text-xs text-gray-400">{weeklyProgress.filter(d => d.done).length}/7 días</span>
            </div>
            <div className="flex justify-between">
              {weeklyProgress.map((day, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05, type: 'spring' }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300"
                    style={
                      day.done
                        ? { background: 'linear-gradient(135deg, #F4CCC5, #EDBEC5)', color: 'white' }
                        : { background: '#f5f5f5', color: '#bbb' }
                    }
                  >
                    {day.done ? '✓' : day.day}
                  </div>
                  <span className="text-[10px] text-gray-400">{day.day}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Quick Access ──────────────────────────────────── */}
        <motion.div variants={fadeUp} className="px-5 mb-6">
          <h3 className="font-semibold text-sm text-gray-700 mb-3">Acceso rápido</h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: Calendar, label: 'Reservar', path: '/classes', color: '#F4CCC5' },
              { icon: Trophy, label: 'Premios', path: '/rewards', color: '#EDBEC5' },
              { icon: Star, label: 'Guardería', path: '/daycare', color: '#E2D6C4' },
              { icon: Flame, label: 'Pagos', path: '/payments', color: '#F5D4D2' },
            ].map(({ icon: Icon, label, path, color }, i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.92 }}
                onClick={() => navigate(path)}
                className="card-premium p-3 flex flex-col items-center gap-2 cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: `${color}33` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <span className="text-[11px] font-medium text-gray-500">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Upcoming Classes ──────────────────────────────── */}
        <motion.div variants={fadeUp} className="px-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-sm text-gray-700">Próximas clases</h3>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/classes')}
              className="text-xs font-medium flex items-center gap-0.5"
              style={{ color: '#EDBEC5' }}
            >
              Ver todas <ChevronRight size={14} />
            </motion.button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
            {upcomingClasses.map((cls, i) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate('/classes')}
                className="min-w-[200px] rounded-[20px] p-4 relative overflow-hidden cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${cls.color}88, ${cls.color}44)` }}
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
                <span className="text-3xl mb-2 block">{cls.emoji}</span>
                <h4 className="font-semibold text-sm text-gray-700 mb-0.5">{cls.name}</h4>
                <p className="text-xs text-gray-500">{cls.time} · {cls.duration}</p>
                <p className="text-xs text-gray-400 mt-1">{cls.instructor}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Promotions ────────────────────────────────────── */}
        <motion.div variants={fadeUp} className="px-5 mb-6">
          <h3 className="font-semibold text-sm text-gray-700 mb-3">Promociones</h3>
          <div className="flex flex-col gap-3">
            {promotions.map((promo, i) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-[20px] p-4 flex items-center justify-between cursor-pointer"
                style={{ background: promo.gradient }}
              >
                <div>
                  <h4 className="font-semibold text-sm text-white mb-0.5">{promo.title}</h4>
                  <p className="text-xs text-white/70">{promo.subtitle}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <ChevronRight size={16} color="white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
