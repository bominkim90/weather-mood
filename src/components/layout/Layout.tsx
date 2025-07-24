import NavBar from '@/components/layout/navBar/NavBar';
import { Outlet } from 'react-router-dom';
import Main from './Main';

export default function Layout() {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-bg-default shadow-md">
      <Main>
        <Outlet />
      </Main>
      <NavBar />
    </div>
  );
}
