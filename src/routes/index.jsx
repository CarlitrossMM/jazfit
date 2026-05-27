import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Classes from '../pages/Classes';
import Profile from '../pages/Profile';
import Rewards from '../pages/Rewards';
import Daycare from '../pages/Daycare';
import Support from '../pages/Support';
import Payments from '../pages/Payments';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/classes', element: <Classes /> },
  { path: '/profile', element: <Profile /> },
  { path: '/rewards', element: <Rewards /> },
  { path: '/daycare', element: <Daycare /> },
  { path: '/support', element: <Support /> },
  { path: '/payments', element: <Payments /> },
]);
