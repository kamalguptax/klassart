'use client';

import React from 'react';
import MenuSidebar from '../components/Sidebar/MenuSidebar';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {


  return (
    <div className="flex min-h-screen">
      <MenuSidebar />
      <main className="flex-1 bg-white border-l border-gray-300">{children}</main>
    </div>
  );
}