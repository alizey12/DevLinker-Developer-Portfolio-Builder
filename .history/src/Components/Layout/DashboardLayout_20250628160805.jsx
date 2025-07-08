import React from 'react'
import { Outlet } from 'react-router';
const DashboardLayout = () => {
  return (
    <div>
      
      <main></main>
      <Outlet />
    </div>
  )
}

export default DashboardLayout
