import { NavLink } from 'react-router-dom';
import { Home, Dumbbell, User, Gift, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const tabs = [
  { to: '/', icon: Home, label: 'Inicio' },
  { to: '/classes', icon: Dumbbell, label: 'Clases' },
  { to: '/rewards', icon: Gift, label: 'Premios' },
  { to: '/profile', icon: User, label: 'Perfil' },
  { to: '/support', icon: MessageCircle, label: 'Soporte' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50">
      <div className="glass-strong mx-4 mb-4 rounded-3xl px-2 py-2 flex items-center justify-around shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
        {tabs.map(({ to, icon: Icon, label }) => (
          <NavLink key={to} to={to} end={to === '/'} className="flex-1">
            {({ isActive }) => (
              <motion.div
                className="flex flex-col items-center gap-0.5 py-2 rounded-2xl transition-all duration-300"
                whileTap={{ scale: 0.92 }}
                style={isActive ? { background: '#FFF9F8', boxShadow: '0 4px 12px rgba(226, 214, 196, 0.4)' } : {}}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 2}
                  color={isActive ? '#E2D6C4' : '#a3a3a3'}
                />
                <span
                  className="text-[10px] font-semibold tracking-wide mt-0.5"
                  style={{ color: isActive ? '#c0b4a2' : '#a3a3a3' }}
                >
                  {label}
                </span>
              </motion.div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
