interface HeaderProps {
  left?: React.ReactNode;
  title: string;
  right?: React.ReactNode;
}

export default function Header({ left, title, right }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 w-full h-[56px] bg-white shadow-xs z-10">
      <div className="absolute left-4 top-[50%] translate-y-[-50%]">{left}</div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-textDefault">
        {title}
      </h1>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">{right}</div>
    </header>
  );
}
