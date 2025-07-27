import NavButton from './NavButton';

export default function NavBar() {
  return (
    <nav className="absolute bottom-0 w-full h-[64px] flex justify-evenly items-center bg-white shadow-[0px_-1px_2px_0px_rgba(0,0,0,0.05)]">
      <NavButton text="Home" />
      <NavButton text="Records" />
      <NavButton text="Profile" />
    </nav>
  );
}
