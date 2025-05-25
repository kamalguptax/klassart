import { ReactNode } from 'react';
import InnerHeader from '../components/Header/InnerHeader'; 

export default function DynamicLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <InnerHeader />
    <main className="h-screen">{children}</main>
    </>
  );
}
