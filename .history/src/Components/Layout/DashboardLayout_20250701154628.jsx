import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from './Header'; // You'll want to create this component

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-emerald-950 text-emerald-100">
      {/* Sidebar - Fixed width */}
      <div className="hidden md:block w-20 lg:w-64 bg-emerald-900/50 border-r border-emerald-800/50">
        <Sidebar />
      </div>
      
      {/* Main Content Area - Flexible width */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Fixed height */}
        <Dashboard />
        
        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-auto p-4 md:p-6 bg-emerald-950">
          {/* Outlet for nested routes */}
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;