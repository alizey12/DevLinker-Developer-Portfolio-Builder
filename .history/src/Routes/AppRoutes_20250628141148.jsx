import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../Pages/Login';
import Portfolio from '../Pages/Portfolio';
import Signup from '../Pages/Signup';
import Page404 from "../Pages/Page404";
import DashboardLayout from '../Components/Layout/DashboardLayout';


const AppRoutes = () => {
  return (
    <div>
      <Routes>

      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/portfolio/:username' element={<Portfolio />} />

      <Route path='/dashboard' element={<DashboardLayout />} >
      <Route path="profile" element={<Profile />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="settings" element={<Settings />} />
</Route>
      <Route path='/*' element={<Page404 /> } />

      </Routes>
    </div>
  )
}

export default AppRoutes
