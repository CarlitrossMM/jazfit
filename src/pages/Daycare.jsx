import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Baby, Clock, Users, Plus, CheckCircle, AlertCircle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { SuccessModal } from '../components/Modal';
import { daycareSlots, children } from '../data/mockData';

export default function Daycare() {
  const [registerModal, setRegisterModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleReserve = (slot) => {
    setSelectedSlot(slot);
    setSuccessModal(true);
  };

  return (
    <PageWrapper>
      {/* ── Header ────────────────────────────────────────── */}
      <div className="px-5 pt-14 pb-2">
        <h1
          className="text-[26px] font-semibold text-gray-800 mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Guardería
        </h1>
        <p className="text-sm text-gray-400">Cuidamos a tus pequeños mientras entrenas 👶</p>
      </div>

      {/* ── Info Banner ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-5 mt-4 mb-6"
      >
        <div
          className="rounded-[24px] p-5 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #E2D6C4 0%, #F4CCC5 100%)' }}
        >
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/25 flex items-center justify-center">
              <Baby size={28} color="white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-base">Guardería JAZFIT</h3>
              <p className="text-white/70 text-sm">Lun - Sáb · 7:00 AM - 7:00 PM</p>
              <p className="text-white/50 text-xs mt-0.5">Incluida en membresía Premium</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── My Children ───────────────────────────────────── */}
      <div className="px-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm text-gray-700">Mis hijos registrados</h3>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setRegisterModal(true)}
            className="flex items-center gap-1 text-xs font-medium"
            style={{ color: '#EDBEC5' }}
          >
            <Plus size={14} /> Agregar
          </motion.button>
        </div>

        <div className="flex gap-3">
          {children.map((child, i) => (
            <motion.div
              key={child.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="card-premium p-4 flex-1 flex flex-col items-center"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-2"
                style={{ background: i === 0 ? '#F4CCC533' : '#E2D6C433' }}
              >
                {i === 0 ? '👧' : '👧🏻'}
              </div>
              <h4 className="font-semibold text-sm text-gray-800">{child.name}</h4>
              <p className="text-xs text-gray-400">{child.age} años</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Available Slots ───────────────────────────────── */}
      <div className="px-5 mb-6">
        <h3 className="font-semibold text-sm text-gray-700 mb-3">Horarios disponibles hoy</h3>

        <div className="flex flex-col gap-3">
          {daycareSlots.map((slot, i) => {
            const percentOccupied = (slot.occupied / slot.capacity) * 100;
            const remaining = slot.capacity - slot.occupied;

            return (
              <motion.div
                key={slot.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="card-premium p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center"
                      style={{ background: slot.available ? '#F4CCC533' : '#f5f5f5' }}
                    >
                      <Clock size={18} style={{ color: slot.available ? '#EDBEC5' : '#ccc' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">{slot.time}</h4>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Users size={11} className="text-gray-400" />
                        <span className="text-[11px] text-gray-400">
                          {remaining > 0 ? `${remaining} lugares disponibles` : 'Sin disponibilidad'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {slot.available ? (
                    <motion.button
                      whileTap={{ scale: 0.92 }}
                      onClick={() => handleReserve(slot)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white"
                      style={{ background: 'linear-gradient(135deg, #F4CCC5, #EDBEC5)' }}
                    >
                      Reservar
                    </motion.button>
                  ) : (
                    <span className="px-3 py-1.5 rounded-xl text-[11px] font-medium bg-gray-100 text-gray-400">
                      Lleno
                    </span>
                  )}
                </div>

                {/* Capacity bar */}
                <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentOccupied}%` }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      background: percentOccupied >= 100
                        ? '#ddd'
                        : percentOccupied > 70
                          ? 'linear-gradient(90deg, #F4CCC5, #EDBEC5)'
                          : 'linear-gradient(90deg, #E2D6C4, #F4CCC5)'
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── Tips ───────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="px-5 mb-6"
      >
        <div className="card-premium p-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#E2D6C433' }}>
              <AlertCircle size={16} style={{ color: '#a09070' }} />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-1">Información importante</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                La guardería está disponible para niños de 1 a 6 años. Máximo 2 horas por sesión. 
                Por favor traer pañales y snacks si es necesario.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Register Child Modal ──────────────────────────── */}
      <AnimatePresence>
        {registerModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
              onClick={() => setRegisterModal(false)}
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
                <h3 className="font-semibold text-lg text-gray-800 mb-5">Registrar hijo/a</h3>

                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1.5 block">Nombre</label>
                    <input
                      type="text"
                      placeholder="Nombre del niño/a"
                      className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:border-[#EDBEC5] focus:ring-2 focus:ring-[#EDBEC5]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1.5 block">Edad</label>
                    <input
                      type="number"
                      placeholder="Edad en años"
                      min="1"
                      max="6"
                      className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-100 text-sm focus:outline-none focus:border-[#EDBEC5] focus:ring-2 focus:ring-[#EDBEC5]/20 transition-all"
                    />
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setRegisterModal(false); setSuccessModal(true); }}
                  className="btn-primary w-full text-center"
                >
                  Registrar
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SuccessModal
        isOpen={successModal}
        onClose={() => setSuccessModal(false)}
        message="¡Reserva confirmada!"
      />
    </PageWrapper>
  );
}

