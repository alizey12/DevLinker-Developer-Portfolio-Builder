import React from 'react'
import { Outlet } from 'react-router';
side
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
