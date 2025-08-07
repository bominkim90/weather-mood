import { createBrowserRouter } from 'react-router-dom';
import RecordsIndex from '@/pages/records/RecordsIndex';
import Layout from '@/components/layout/Layout';
import NotFound from '@/components/notFound/NotFound';
import ProfileIndex from '@/pages/profile/ProfileIndex';
import ProfileEditIndex from '@/pages/profile/profileEdit/ProfileEditIndex';
import LoginIndex from '@/pages/login/LoginIndex';
import SignupIndex from '@/pages/signup/SignupIndex';
import MoodAddIndex from '@/pages/moodAdd/MoodAddIndex';
import HomeIndex from '@/pages/home/HomeIndex';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />, // 404 혹은 예외 처리
    children: [
      {
        index: true, // path: '' 와 동일
        element: <HomeIndex />,
      },
      {
        path: 'login',
        element: <LoginIndex />,
      },
      {
        path: 'mood/add',
        element: <MoodAddIndex />,
      },
      {
        path: 'records',
        element: <RecordsIndex />,
      },
      {
        path: 'profile',
        element: <ProfileIndex />,
      },
      {
        path: 'profile/edit',
        element: <ProfileEditIndex />,
      },
      {
        path: 'signup',
        element: <SignupIndex />,
      },
    ],
  },
]);
