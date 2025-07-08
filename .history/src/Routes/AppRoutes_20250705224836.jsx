import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Fixed import

import DashboardLayout from '../Components/Layout/DashboardLayout';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Page404 from "../Pages/Page404";

// Dashboard Pages
import Dashboard from '../Pages/Dashboard/Dashboard'; // Ensure this exists
import Profile from '../Pages/Dashboard/Profile';
import Skills from '../Pages/Dashboard/Skills';
import Projects from '../Pages/Dashboard/Project';
import Settings from '../Pages/Dashboard/Setting';

// Public Pages
import Home from '../Pages/Home';
import Contact from '../Components/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      {/* Dashboard Routes */}
      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route index element={<Dashboard />} /> {/* Uncommented */}
        <Route path="profile" element={<Profile />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* 404 Page */}
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;