// ── Mock Data para JAZFIT ─────────────────────────────────────

export const user = {
  name: 'Valentina',
  lastName: 'Arvizu',
  email: 'valentina@jazfit.com',
  membership: 'Premium Gold',
  memberSince: 'Enero 2025',
  points: 2450,
  totalClasses: 87,
  streak: 12,
  avatar: null,
  qrCode: 'JAZFIT-VIP-2025-VM-0847',
  phone: '+52 614 555 0123',
};

export const weeklyProgress = [
  { day: 'L', done: true },
  { day: 'M', done: true },
  { day: 'Mi', done: true },
  { day: 'J', done: false },
  { day: 'V', done: false },
  { day: 'S', done: false },
  { day: 'D', done: false },
];

export const classes = [
  {
    id: 1,
    name: 'Vinyasa Flow',
    type: 'Yoga',
    instructor: 'María Elena',
    time: '7:00 AM',
    duration: '60 min',
    spots: 4,
    totalSpots: 15,
    level: 'Intermedio',
    calories: '320 cal',
    color: '#E2D6C4',
    emoji: '🧘‍♀️',
    description: 'Fluye con movimientos conectados a tu respiración para energizar cuerpo y mente.',
  },
  {
    id: 2,
    name: 'Power Pilates',
    type: 'Pilates',
    instructor: 'Carolina Ruiz',
    time: '9:00 AM',
    duration: '50 min',
    spots: 7,
    totalSpots: 12,
    level: 'Avanzado',
    calories: '280 cal',
    color: '#EDBEC5',
    emoji: '🤸‍♀️',
    description: 'Fortalece tu core con ejercicios de alta intensidad y control muscular.',
  },
  {
    id: 3,
    name: 'Zumba Party',
    type: 'Zumba',
    instructor: 'Daniela Vega',
    time: '6:00 PM',
    duration: '55 min',
    spots: 12,
    totalSpots: 25,
    level: 'Todos los niveles',
    calories: '450 cal',
    color: '#F4CCC5',
    emoji: '💃',
    description: 'Baila al ritmo de la música latina y quema calorías mientras te diviertes.',
  },
  {
    id: 4,
    name: 'Hatha Yoga',
    type: 'Yoga',
    instructor: 'Laura Jiménez',
    time: '8:00 AM',
    duration: '75 min',
    spots: 6,
    totalSpots: 15,
    level: 'Principiante',
    calories: '200 cal',
    color: '#E2D6C4',
    emoji: '🧘‍♀️',
    description: 'Ideal para principiantes. Posturas suaves y meditación guiada.',
  },
  {
    id: 5,
    name: 'Mat Pilates',
    type: 'Pilates',
    instructor: 'Sofía Mendoza',
    time: '10:30 AM',
    duration: '45 min',
    spots: 3,
    totalSpots: 10,
    level: 'Intermedio',
    calories: '250 cal',
    color: '#EDBEC5',
    emoji: '🤸‍♀️',
    description: 'Trabajo en colchoneta enfocado en flexibilidad y tonificación.',
  },
  {
    id: 6,
    name: 'Reggaeton Fit',
    type: 'Zumba',
    instructor: 'Fernanda López',
    time: '7:30 PM',
    duration: '50 min',
    spots: 18,
    totalSpots: 30,
    level: 'Todos los niveles',
    calories: '500 cal',
    color: '#F4CCC5',
    emoji: '💃',
    description: 'La mejor energía con los hits del reggaeton en una clase explosiva.',
  },
];

export const rewards = [
  {
    id: 1,
    name: 'Smoothie Gratis',
    points: 500,
    unlocked: true,
    icon: '🥤',
    description: 'Un smoothie de proteína en nuestro bar',
    category: 'Alimentos',
  },
  {
    id: 2,
    name: 'Clase VIP',
    points: 1000,
    unlocked: true,
    icon: '⭐',
    description: 'Acceso a una clase exclusiva con instructora premium',
    category: 'Clases',
  },
  {
    id: 3,
    name: 'Toalla Premium',
    points: 1500,
    unlocked: true,
    icon: '🧖‍♀️',
    description: 'Toalla de microfibra con el logo de JAZFIT',
    category: 'Merchandise',
  },
  {
    id: 4,
    name: '20% Off Mensualidad',
    points: 2000,
    unlocked: true,
    icon: '💎',
    description: 'Descuento en tu próxima mensualidad',
    category: 'Descuentos',
  },
  {
    id: 5,
    name: 'Sesión Spa',
    points: 3000,
    unlocked: false,
    icon: '💆‍♀️',
    description: 'Sesión de spa y masaje relajante',
    category: 'Wellness',
  },
  {
    id: 6,
    name: 'Kit Fitness',
    points: 5000,
    unlocked: false,
    icon: '🎁',
    description: 'Kit completo: mat, banda y botella JAZFIT',
    category: 'Merchandise',
  },
];

export const daycareSlots = [
  { id: 1, time: '7:00 - 9:00 AM', capacity: 10, occupied: 6, available: true },
  { id: 2, time: '9:00 - 11:00 AM', capacity: 10, occupied: 8, available: true },
  { id: 3, time: '11:00 - 1:00 PM', capacity: 10, occupied: 10, available: false },
  { id: 4, time: '3:00 - 5:00 PM', capacity: 10, occupied: 4, available: true },
  { id: 5, time: '5:00 - 7:00 PM', capacity: 10, occupied: 7, available: true },
];

export const children = [
  { id: 1, name: 'Sofía', age: 3, photo: null },
  { id: 2, name: 'Isabella', age: 5, photo: null },
];

export const chatMessages = [
  { id: 1, text: '¡Hola! 👋 Bienvenida al soporte de JAZFIT. ¿En qué puedo ayudarte?', sender: 'bot', time: '10:00 AM' },
  { id: 2, text: 'Hola, quiero saber el horario de pilates del sábado', sender: 'user', time: '10:01 AM' },
  { id: 3, text: '¡Claro! Los sábados tenemos Pilates de 9:00 AM a 10:00 AM y de 11:00 AM a 12:00 PM. ¿Te gustaría reservar un lugar? 😊', sender: 'bot', time: '10:01 AM' },
];

export const quickReplies = [
  'Horarios de clases',
  'Mi membresía',
  'Cancelar reservación',
  'Hablar con una persona',
  'Precios',
  'Guardería',
];

export const payments = [
  { id: 1, concept: 'Membresía Premium Gold', amount: '$1,299.00', date: '1 Mayo 2025', status: 'Pagado', icon: '💳' },
  { id: 2, concept: 'Clase Extra - Yoga VIP', amount: '$199.00', date: '15 Abril 2025', status: 'Pagado', icon: '🧘‍♀️' },
  { id: 3, concept: 'Guardería - Abril', amount: '$499.00', date: '1 Abril 2025', status: 'Pagado', icon: '👶' },
  { id: 4, concept: 'Smoothie Bar x3', amount: '$150.00', date: '20 Marzo 2025', status: 'Pagado', icon: '🥤' },
];

export const paymentCards = [
  { id: 1, type: 'Visa', last4: '4582', brand: 'visa', primary: true },
  { id: 2, type: 'Mastercard', last4: '7891', brand: 'mastercard', primary: false },
];

export const promotions = [
  {
    id: 1,
    title: 'Prueba Pilates Gratis',
    subtitle: 'Primera clase sin costo',
    gradient: 'linear-gradient(135deg, #EDBEC5 0%, #F5D4D2 100%)',
  },
  {
    id: 2,
    title: 'Refiere a una amiga',
    subtitle: 'Gana 500 puntos extra',
    gradient: 'linear-gradient(135deg, #E2D6C4 0%, #D5D5D5 100%)',
  },
  {
    id: 3,
    title: '2x1 en Zumba',
    subtitle: 'Solo este fin de semana',
    gradient: 'linear-gradient(135deg, #F4CCC5 0%, #EDBEC5 100%)',
  },
];

export const attendanceHistory = [
  { date: '26 Mayo', class: 'Vinyasa Flow', time: '7:00 AM' },
  { date: '25 Mayo', class: 'Power Pilates', time: '9:00 AM' },
  { date: '24 Mayo', class: 'Zumba Party', time: '6:00 PM' },
  { date: '23 Mayo', class: 'Hatha Yoga', time: '8:00 AM' },
  { date: '22 Mayo', class: 'Mat Pilates', time: '10:30 AM' },
];
