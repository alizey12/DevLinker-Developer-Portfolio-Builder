import React from 'react'
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
<Profile />

      <main>
         <Outlet />
      </main>
     
    </div>
  )
}

export default DashboardLayout
