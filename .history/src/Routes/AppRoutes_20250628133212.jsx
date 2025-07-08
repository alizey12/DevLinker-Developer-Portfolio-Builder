import React from 'react'
import { Router,Route } from 'react-router'
import ProjectCard from "../Components/ProjectCard";
import SkillCard from "../Components/SkillCard";
import ThemeSelector from "../Components/ThemeSelector";
import ThemeContext from "../Context/ThemeContext";
import AuthContext from "../Context/AuthContext";
import moduleName from '../Pages/Dashboard';
import moduleName from '../Pages/Dashboard';
import moduleName from '../Pages/Dashboard';
import moduleName from '../Pages/Dashboard';
import moduleName from '../Pages/Dashboard';


const AppRoutes = () => {
  return (
    <div>
      <Router>

      <Route path='/' element={<Login />} />
      <Route path='' element={} />
      <Route path='' element={} />
      <Route path='' element={} />
      <Route path='' element={} />
      <Route path='' element={} />

      <Route path='' element={} />
      <Route path='' element={} />

      </Router>
    </div>
  )
}

export default AppRoutes
