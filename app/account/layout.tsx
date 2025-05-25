import Sidebar from '../components/AccountSidebar/Sidebar';
import React from 'react';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-white border-l border-gray-300">{children}</main>
    </div>
  );
}