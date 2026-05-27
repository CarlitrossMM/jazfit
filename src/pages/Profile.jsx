import { motion } from 'framer-motion';
import { Settings, QrCode, Award, Calendar, TrendingUp, ChevronRight, LogOut, Heart, Bell, Shield } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { user, attendanceHistory } from '../data/mockData';
import { useState } from 'react';

export default function Profile() {
  const [showQR, setShowQR] = useState(false);

  return (
    <PageWrapper>
      {/* ── Header bg ─────────────────────────────────────── */}
      <div
        className="relative h-44 rounded-b-[32px] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #FFF9F8 0%, #E2D6C4 100%)' }}
      >
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full" style={{ background: 'rgba(244, 204, 197, 0.2)' }} />
        <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.4)' }} />

        {/* Settings button */}
        <div className="absolute top-12 right-5">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full flex items-center justify-center glass shadow-sm"
          >
            <Settings size={18} className="text-gray-500" />
          </motion.button>
        </div>
      </div>

      {/* ── Avatar ────────────────────────────────────────── */}
      <div className="px-5 relative z-10 mb-4">
        <div className="flex flex-col gap-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] -mt-12 overflow-hidden border-[3px] border-white"
          >
            <img src="/jazfit.jpeg" alt="Profile" className="w-full h-full object-cover" />
          </motion.div>
          <div className="mt-1">
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name} {user.lastName}
            </h2>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>
      </div>

      {/* ── Membership Badge ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mx-5 mb-5"
      >
        <div
          className="rounded-[20px] p-4 flex items-center justify-between"
          style={{ background: 'linear-gradient(135deg, #E2D6C4 0%, #F4CCC5 100%)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center">
              <Award size={20} color="white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{user.membership}</p>
              <p className="text-white/70 text-xs">Desde {user.memberSince}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white font-bold text-lg">{user.points.toLocaleString()}</p>
            <p className="text-white/70 text-[11px]">puntos</p>
          </div>
        </div>
      </motion.div>

      {/* ── Stats ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="px-5 mb-5"
      >
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: user.totalClasses, label: 'Clases', icon: Calendar, color: '#F4CCC5' },
            { value: `${user.streak} días`, label: 'Racha', icon: TrendingUp, color: '#EDBEC5' },
            { value: user.points.toLocaleString(), label: 'Puntos', icon: Award, color: '#E2D6C4' },
          ].map(({ value, label, icon: Icon, color }, i) => (
            <div key={i} className="card-premium p-3 flex flex-col items-center">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-2"
                style={{ background: `${color}33` }}
              >
                <Icon size={16} style={{ color }} />
              </div>
              <span className="font-bold text-gray-800 text-sm">{value}</span>
              <span className="text-[11px] text-gray-400">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── QR Check-in ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="px-5 mb-5"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowQR(!showQR)}
          className="w-full card-premium p-4 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: '#F4CCC533' }}>
              <QrCode size={20} style={{ color: '#EDBEC5' }} />
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-sm text-gray-800">Check-in QR</h4>
              <p className="text-xs text-gray-400">Muestra tu código al llegar</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-300" />
        </motion.button>

        {/* QR Display */}
        {showQR && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3"
          >
            <div className="card-premium p-6 flex flex-col items-center">
              {/* Fake QR */}
              <div className="w-44 h-44 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center mb-4 relative overflow-hidden">
                <div className="grid grid-cols-8 gap-0.5 w-36 h-36">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-[2px]"
                      style={{
                        background: Math.random() > 0.4 ? '#2d2d2d' : 'transparent',
                      }}
                    />
                  ))}
                </div>
                {/* Center logo */}
                <div className="absolute w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm">
                  <span className="text-sm font-bold" style={{ color: '#EDBEC5', fontFamily: "'Playfair Display', serif" }}>JF</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 font-mono">{user.qrCode}</p>
              <p className="text-[11px] text-gray-300 mt-1">Escanea al entrar al gimnasio</p>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* ── Attendance History ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="px-5 mb-5"
      >
        <h3 className="font-semibold text-sm text-gray-700 mb-3">Historial reciente</h3>
        <div className="card-premium divide-y divide-gray-50">
          {attendanceHistory.map((item, i) => (
            <div key={i} className="px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700">{item.class}</p>
                <p className="text-xs text-gray-400">{item.date} · {item.time}</p>
              </div>
              <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-500">
                Asistió
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Menu Options ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="px-5 mb-6"
      >
        <div className="card-premium divide-y divide-gray-50">
          {[
            { icon: Heart, label: 'Favoritos', color: '#F4CCC5' },
            { icon: Bell, label: 'Notificaciones', color: '#EDBEC5' },
            { icon: Shield, label: 'Privacidad', color: '#E2D6C4' },
            { icon: LogOut, label: 'Cerrar sesión', color: '#848585' },
          ].map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={i}
              whileTap={{ scale: 0.98, backgroundColor: '#f9f9f9' }}
              className="px-4 py-3.5 flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}22` }}>
                  <Icon size={16} style={{ color }} />
                </div>
                <span className="text-sm font-medium text-gray-700">{label}</span>
              </div>
              <ChevronRight size={16} className="text-gray-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageWrapper>
  );
}
