import React from 'react'
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';
Sidebar
const DashboardLayout = () => {
  return (
    <div>
      


      <main>
         <Outlet />
      </main>
     
    </div>
  )
}

export default DashboardLayout
