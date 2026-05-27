import { motion } from 'framer-motion';
import { Clock, Users, Flame, ChevronRight } from 'lucide-react';

export default function ClassCard({ cls, onBook, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="card-premium p-4 flex gap-4 cursor-pointer"
      whileTap={{ scale: 0.98 }}
    >
      {/* Color accent */}
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
            <h3 className="font-semibold text-[15px] text-gray-800 leading-tight">{cls.name}</h3>
            <p className="text-xs text-gray-400 mt-0.5">{cls.instructor}</p>
          </div>
          <span
            className="text-[10px] font-medium px-2.5 py-1 rounded-full"
            style={{ background: `${cls.color}22`, color: cls.color === '#E2D6C4' ? '#a09070' : '#c48a92' }}
          >
            {cls.type}
          </span>
        </div>

        <div className="flex items-center gap-3 mt-2.5">
          <div className="flex items-center gap-1 text-gray-400">
            <Clock size={12} />
            <span className="text-[11px]">{cls.time}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Users size={12} />
            <span className="text-[11px]">{cls.spots} cupos</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Flame size={12} />
            <span className="text-[11px]">{cls.calories}</span>
          </div>
        </div>
      </div>

      {/* Action */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => { e.stopPropagation(); onBook?.(cls); }}
        className="self-center w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #F4CCC5, #EDBEC5)' }}
      >
        <ChevronRight size={16} color="white" />
      </motion.button>
    </motion.div>
  );
}
