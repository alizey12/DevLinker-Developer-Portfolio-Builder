import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../Components/Layout/DashboardLayout';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Page404 from "../Pages/Page404";
import Home from '../Pages/Home';
import Contact from '../Components/Contact';

// Make sure all these imports actually exist at these paths
import Dashboard from '../Pages/Dashboard/Dashboard';
import Profile from '../Pages/Dashboard/Profile';
import Skills from '../Pages/Dashboard/Skill';
import Projects from '../Pages/Dashboard/Project'; // Fixed typo in filename (Project -> Projects)
import Settings from '../Pages/Dashboard/Settings'; // Fixed typo in filename (Setting -> Settings)

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard Routes - Protected */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* 404 - Must be last */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;