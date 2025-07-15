import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Index';
import Records from '../pages/records/Index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/records',
    element: <Records />,
  },
]); 