import { NavLink } from 'react-router-dom';

interface NavButtonProps {
  text: 'Home' | 'Record' | 'Signup';
}

export default function NavButton({ text }: NavButtonProps) {
  const navConfig = {
    Home: {
      path: '/',
      icon: '/icons/home.svg',
      label: 'Home',
    },
    Record: {
      path: '/records',
      icon: '/icons/record.svg',
      label: 'Record',
    },
    Signup: {
      path: '/signup',
      icon: '/icons/profile.svg',
      label: 'Signup',
    },
  }[text];

  return (
    <NavLink
      to={navConfig.path}
      className={`w-full h-full flex-1 flex flex-col items-center justify-center gap-1`}
    >
      {({ isActive }) => (
        <>
          <div>
            <img src={navConfig.icon} alt="" className={'w-6 h-6'} />
          </div>
          <span className="sr-only">{navConfig.label} 페이지로 이동</span>
          <span
            className={`text-xs ${isActive ? 'text-main-pink' : 'text-text-gray'}`}
          >
            {navConfig.label}
          </span>
        </>
      )}
    </NavLink>
  );
}
