import NavBar from '@/components/navBav/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white shadow-md">
      <Outlet />
      <NavBar />
    </div>
  );
}
