import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Clock, Users, Flame, MapPin } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { SuccessModal } from '../components/Modal';
import { classes } from '../data/mockData';

const filters = ['Todas', 'Yoga', 'Pilates', 'Zumba'];

export default function Classes() {
  const [active, setActive] = useState('Todas');
  const [search, setSearch] = useState('');
  const [bookModal, setBookModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const filtered = classes.filter(c => {
    const matchFilter = active === 'Todas' || c.type === active;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
                        c.instructor.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const handleBook = (cls) => {
    setSelectedClass(cls);
    setShowDetail(false);
    setBookModal(true);
  };

  return (
    <PageWrapper>
      {/* ── Header ────────────────────────────────────────── */}
      <div className="px-5 pt-14 pb-2">
        <h1
          className="text-[26px] font-semibold text-gray-800 mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Clases
        </h1>
        <p className="text-sm text-gray-400 mb-4">Encuentra tu clase perfecta</p>

        {/* Search */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Buscar clase o instructora..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-gray-100 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:border-[#EDBEC5] focus:ring-2 focus:ring-[#EDBEC5]/20 transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {filters.map(f => (
            <motion.button
              key={f}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(f)}
              className="px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200"
              style={
                active === f
                  ? { background: 'linear-gradient(135deg, #F4CCC5, #EDBEC5)', color: 'white', border: 'none' }
                  : { background: 'white', color: '#848585', border: '1.5px solid #eee' }
              }
            >
              {f}
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Class List ────────────────────────────────────── */}
      <div className="px-5 mt-3 flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((cls, i) => (
            <motion.div
              key={cls.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { setSelectedClass(cls); setShowDetail(true); }}
              className="card-premium p-4 cursor-pointer"
            >
              <div className="flex gap-4">
                {/* Emoji Accent */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl"
                  style={{ background: `${cls.color}33` }}
                >
                  {cls.emoji}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-semibold text-[15px] text-gray-800">{cls.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{cls.instructor}</p>
                    </div>
                    <span
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${cls.color}22`, color: cls.color === '#E2D6C4' ? '#a09070' : '#c48a92' }}
                    >
                      {cls.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock size={12} />
                      <span className="text-[11px]">{cls.time}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Users size={12} />
                      <span className="text-[11px]">{cls.spots}/{cls.totalSpots}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Flame size={12} />
                      <span className="text-[11px]">{cls.calories}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capacity bar */}
              <div className="mt-3">
                <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((cls.totalSpots - cls.spots) / cls.totalSpots) * 100}%` }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${cls.color}, ${cls.color}aa)` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Class Detail Modal ────────────────────────────── */}
      <AnimatePresence>
        {showDetail && selectedClass && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
              onClick={() => setShowDetail(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-[61]"
            >
              <div className="bg-white rounded-t-[28px] p-6 pb-8">
                <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-5" />

                {/* Class header */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${selectedClass.color}33` }}
                  >
                    {selectedClass.emoji}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{selectedClass.name}</h3>
                    <p className="text-sm text-gray-400">{selectedClass.type} · {selectedClass.level}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-5 leading-relaxed">{selectedClass.description}</p>

                {/* Details grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Clock, label: 'Horario', value: `${selectedClass.time} · ${selectedClass.duration}` },
                    { icon: Users, label: 'Cupos', value: `${selectedClass.spots} disponibles` },
                    { icon: Flame, label: 'Calorías', value: selectedClass.calories },
                    { icon: MapPin, label: 'Instructora', value: selectedClass.instructor },
                  ].map(({ icon: Icon, label, value }, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon size={13} className="text-gray-400" />
                        <span className="text-[11px] text-gray-400 font-medium">{label}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleBook(selectedClass)}
                  className="btn-primary w-full text-center"
                >
                  Reservar Clase
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Success Modal ─────────────────────────────────── */}
      <SuccessModal
        isOpen={bookModal}
        onClose={() => setBookModal(false)}
        message="¡Clase reservada!"
      />
    </PageWrapper>
  );
}
