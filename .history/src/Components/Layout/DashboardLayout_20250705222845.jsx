import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';
import {  } from "../../Pages/Dashboard";
const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-emerald-950 text-emerald-100">
      {/* Sidebar */}
      <div className={`${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 bg-emerald-900/50 border-r border-emerald-800/50`}>
        <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      </div>
      
      {/* Main Content */}
      <div 
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
          isCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
      <Dashboard />
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-emerald-950">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;