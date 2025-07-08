import React from 'react'
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';
import Profile from '../../Pages/Dashboard/Profile';

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6"></div>
      <Sidebar />

      <main>
         <Outlet />
      </main>
     
    </div>
  )
}

export default DashboardLayout
