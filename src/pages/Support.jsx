import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, MoreVertical, Sparkles } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import { chatMessages as initialMessages, quickReplies } from '../data/mockData';

const botResponses = [
  '¡Por supuesto! Déjame verificar esa información para ti 😊',
  'Claro que sí. En JAZFIT queremos que tengas la mejor experiencia 💕',
  '¡Excelente pregunta! Te comparto los detalles...',
  'Entiendo perfectamente. ¿Hay algo más en lo que pueda ayudarte?',
  '¡Listo! He actualizado la información. ¿Necesitas algo más? ✨',
  'Te recomiendo visitar nuestra sucursal para más detalles. ¡Te esperamos!',
];

export default function Support() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      time: new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        time: new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, botMsg]);
      setTyping(false);
    }, 1200 + Math.random() * 800);
  };

  return (
    <PageWrapper className="flex flex-col h-[100dvh]">
      {/* ── Header ────────────────────────────────────────── */}
      <div className="glass-strong px-5 pt-12 pb-4 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #F4CCC5, #EDBEC5)' }}
          >
            <Sparkles size={18} color="white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-800">Soporte JAZFIT</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-[11px] text-gray-400">En línea</span>
            </div>
          </div>
        </div>
        <button className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center">
          <MoreVertical size={16} className="text-gray-400" />
        </button>
      </div>

      {/* ── Messages ──────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3"
        style={{ paddingBottom: '220px' }}
      >
        {/* Date divider */}
        <div className="flex items-center justify-center my-2">
          <span className="text-[11px] text-gray-300 bg-gray-50 px-3 py-1 rounded-full">Hoy</span>
        </div>

        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'rounded-[18px] rounded-br-[6px] text-white'
                  : 'rounded-[18px] rounded-bl-[6px] text-gray-700 bg-white border border-gray-50'
              }`}
              style={
                msg.sender === 'user'
                  ? { background: 'linear-gradient(135deg, #F4CCC5, #EDBEC5)' }
                  : {}
              }
            >
              <p>{msg.text}</p>
              <p
                className={`text-[10px] mt-1.5 ${
                  msg.sender === 'user' ? 'text-white/60 text-right' : 'text-gray-300'
                }`}
              >
                {msg.time}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        {typing && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-white border border-gray-50 rounded-[18px] rounded-bl-[6px] px-5 py-3 flex gap-1.5">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#EDBEC5' }}
                  animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* ── Quick Replies ─────────────────────────────────── */}
      <div className="fixed bottom-[160px] left-1/2 -translate-x-1/2 w-full max-w-[480px] px-5 z-20">
        <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
          {quickReplies.map((reply, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.95 }}
              onClick={() => sendMessage(reply)}
              className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium border transition-all"
              style={{ borderColor: '#EDBEC5', color: '#EDBEC5', background: 'white' }}
            >
              {reply}
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Input ─────────────────────────────────────────── */}
      <div className="fixed bottom-[95px] left-1/2 -translate-x-1/2 w-full max-w-[480px] px-5 py-3 z-20">
        <div className="glass-strong rounded-2xl flex items-center gap-2 px-4 py-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none py-2"
          />
          <motion.button
            whileTap={{ scale: 0.85, rotate: -15 }}
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity"
            style={{
              background: input.trim() ? 'linear-gradient(135deg, #F4CCC5, #EDBEC5)' : '#f0f0f0',
              opacity: input.trim() ? 1 : 0.5,
            }}
          >
            <Send size={16} color={input.trim() ? 'white' : '#bbb'} />
          </motion.button>
        </div>
      </div>
    </PageWrapper>
  );
}
