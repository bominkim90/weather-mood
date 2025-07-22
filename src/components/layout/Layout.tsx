import NavBar from '@/components/navBav/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Outlet />
      <NavBar />
    </div>
  );
}
