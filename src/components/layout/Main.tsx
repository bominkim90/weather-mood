import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="absolute top-0 left-0 right-0 bottom-0 w-full flex-1 overflow-y-auto  p-[64px_16px_90px]">
      {children}
    </main>
  );
}
