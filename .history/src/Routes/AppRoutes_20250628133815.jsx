import React from 'react'
import { Router,Route } from 'react-router'
import ProjectCard from "../Components/ProjectCard";
import SkillCard from "../Components/SkillCard";
import ThemeSelector from "../Components/ThemeSelector";
import ThemeContext from "../Context/ThemeContext";
import AuthContext from "../Context/AuthContext";
import Dashboard from '../Pages/Dashboard';
import Login from '../Pages/Login';
import Portfolio from '../Pages/Portfolio';
import Signup from '../Pages/Signup';
import moduleName from '../Hooks/useLocalStorage';
import moduleName from '../Hooks/useThemeSwicher';
useThemeSwicher


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
