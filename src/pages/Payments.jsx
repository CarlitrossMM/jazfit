import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Plus, Check, Clock, ChevronRight, Shield, Receipt } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { SuccessModal } from '../components/Modal';
import { payments, paymentCards } from '../data/mockData';

export default function Payments() {
  const [payModal, setPayModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setPayModal(false);
      setSuccessModal(true);
    }, 2000);
  };

  return (
    <PageWrapper>
      {/* ── Header ────────────────────────────────────────── */}
      <div className="px-5 pt-14 pb-2">
        <h1
          className="text-[26px] font-semibold text-gray-800 mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pagos
        </h1>
        <p className="text-sm text-gray-400">Administra tus pagos y métodos 💳</p>
      </div>

      {/* ── Balance Card ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-5 mt-4 mb-6"
      >
        <div
          className="rounded-[24px] p-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #EDBEC5 0%, #F5D4D2 50%, #F4CCC5 100%)' }}
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="absolute bottom-0 left-8 w-20 h-20 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />

          <div className="relative z-10">
            <p className="text-white/70 text-sm mb-1">Próximo pago</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-white text-3xl font-bold">$1,299</span>
              <span className="text-white/60 text-sm">.00 MXN</span>
            </div>
            <p className="text-white/50 text-xs mb-5">Membresía Premium Gold · 1 Junio 2025</p>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setPayModal(true)}
              className="w-full py-3.5 rounded-2xl bg-white/20 backdrop-blur text-white font-semibold text-sm text-center border border-white/10"
            >
              Pagar ahora
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* ── Payment Methods ───────────────────────────────── */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm text-gray-700">Métodos de pago</h3>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 text-xs font-medium"
            style={{ color: '#EDBEC5' }}
          >
            <Plus size={14} /> Agregar
          </motion.button>
        </div>

        <div className="flex flex-col gap-2">
          {paymentCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card-premium p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{
                    background: card.brand === 'visa'
                      ? 'linear-gradient(135deg, #1a1f71, #2a3f9f)'
                      : 'linear-gradient(135deg, #cc0000, #ff6600)'
                  }}
                >
                  {card.type.slice(0, 4)}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{card.type} •••• {card.last4}</p>
                  <p className="text-[11px] text-gray-400">{card.primary ? 'Tarjeta principal' : 'Tarjeta secundaria'}</p>
                </div>
              </div>
              {card.primary && (
                <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#F4CCC533' }}>
                  <Check size={14} style={{ color: '#EDBEC5' }} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Payment History ───────────────────────────────── */}
      <div className="px-5 mb-6">
        <h3 className="font-semibold text-sm text-gray-700 mb-3">Historial de pagos</h3>
        <div className="card-premium divide-y divide-gray-50">
          {payments.map((payment, i) => (
            <motion.div
              key={payment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
              className="px-4 py-3.5 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{payment.icon}</span>
                <div>
                  <p className="text-sm font-medium text-gray-700">{payment.concept}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Clock size={11} className="text-gray-300" />
                    <span className="text-[11px] text-gray-400">{payment.date}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">{payment.amount}</p>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-500">
                  {payment.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Security Note ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="px-5 mb-6"
      >
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <Shield size={14} />
          <span className="text-[11px]">Pagos seguros con encriptación SSL</span>
        </div>
      </motion.div>

      {/* ── Pay Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {payModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
              onClick={() => !processing && setPayModal(false)}
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
                <h3 className="font-semibold text-lg text-gray-800 mb-5">Confirmar pago</h3>

                <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Concepto</span>
                    <span className="text-sm font-medium text-gray-700">Membresía Premium Gold</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Método</span>
                    <span className="text-sm font-medium text-gray-700">Visa •••• 4582</span>
                  </div>
                  <div className="border-t border-gray-200 mt-3 pt-3 flex justify-between">
                    <span className="text-sm font-semibold text-gray-700">Total</span>
                    <span className="text-lg font-bold text-gray-800">$1,299.00</span>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handlePay}
                  disabled={processing}
                  className="btn-primary w-full text-center flex items-center justify-center gap-2"
                >
                  {processing ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Procesando...
                    </>
                  ) : (
                    'Confirmar y Pagar'
                  )}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SuccessModal
        isOpen={successModal}
        onClose={() => setSuccessModal(false)}
        message="¡Pago exitoso!"
      />
    </PageWrapper>
  );
}
