import { NavLink } from 'react-router-dom';

interface NavButtonProps {
  text: 'Home' | 'Records' | 'Profile';
}

export default function NavButton({ text }: NavButtonProps) {
  const navConfig = {
    Home: {
      path: '/',
      icon: '/icons/home',
      label: 'Home',
    },
    Records: {
      path: '/records',
      icon: '/icons/record',
      label: 'Records',
    },
    Profile: {
      path: '/profile',
      icon: '/icons/profile',
      label: 'Profile',
    },
  }[text];

  return (
    <NavLink
      to={navConfig.path}
      className={`w-full h-full flex-1 flex flex-col items-center justify-center gap-1`}
    >
      {({ isActive }) => {
        const iconSrc = isActive
          ? `${navConfig.icon}_on.svg`
          : `${navConfig.icon}.svg`;

        return (
          <>
            <div>
              <img src={iconSrc} alt="" className={'w-6 h-6'} />
            </div>
            <span className="sr-only">{navConfig.label} 페이지로 이동</span>
            <span
              className={`text-xs ${isActive ? 'text-pink-primary' : 'text-text-gray'}`}
            >
              {navConfig.label}
            </span>
          </>
        );
      }}
    </NavLink>
  );
}
