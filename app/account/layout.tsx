import Sidebar from '../components/AccountSidebar/Sidebar';
import React from 'react';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  // Define handleLogout function (dummy example)
  const handleLogout = () => {
    // Your logout logic here
    console.log("User logged out");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar handleLogout={handleLogout} />
      <main className="flex-1 bg-white border-l border-gray-300">{children}</main>
    </div>
  );
}