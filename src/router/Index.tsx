import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Index';
import Records from '@/pages/records/Index';
import Layout from '@/components/layout/Layout';
import NotFound from '@/components/notFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />, // 404 혹은 예외 처리
    children: [
      {
        index: true, // path: '' 와 동일
        element: <Home />,
      },
      {
        path: 'records',
        element: <Records />,
      },
    ],
  },
]);
