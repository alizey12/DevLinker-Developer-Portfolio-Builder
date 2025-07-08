import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
