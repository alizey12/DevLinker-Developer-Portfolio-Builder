import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Sidebar'
import Dashboard from '../../Pages/Dashboard'

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <Sidebar />
<Dashboard />
      {/* Main content */}
      <main className=" p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
