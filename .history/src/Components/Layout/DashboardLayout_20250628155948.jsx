import React from 'react'
import { Outlet } from 'react-router';
const DashboardLayout = () => {
  return (
    <div>
      <outlet />
    </div>
  )
}

export default DashboardLayout
