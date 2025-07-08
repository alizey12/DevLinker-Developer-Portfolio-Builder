import React from 'react'
import { Outle } from 'react-router';
import Sidebar from '../Sidebar';

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />


      <main>
         <Outlet />
      </main>
     
    </div>
  )
}

export default DashboardLayout
