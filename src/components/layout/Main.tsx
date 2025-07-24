import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return <main className="p-[64px_16px]">{children}</main>;
}
