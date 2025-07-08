import React from 'react';
import { Routes, Route } from 'react-router';

import DashboardLayout from '../Components/Layout/DashboardLayout';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Portfolio from '../Pages/Portfolio';
import Page404 from "../Pages/Page404";

import Profile from '../Pages/Dashboard/Profile';
import Skills from '../Pages/Dashboard/Skills';
import Projects from '../Pages/Dashboard/Project';
import Settings from '../Pages/Dashboard/Setting';
import Home from '../Pages/Home';
contact

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/portfolio/:username' element={<Portfolio />} />

      {/* Dashboard Routes */}
      <Route path='/dashboard' element={<DashboardLayout />}>
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
