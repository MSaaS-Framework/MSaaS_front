// src/app/dashboard/layout.tsx
'use client';

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header"; // Header 컴포넌트 import

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex w-screen min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
