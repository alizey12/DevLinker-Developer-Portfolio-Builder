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
import useLocalStorage from '../Hooks/useLocalStorage';
import useThemeSwicher from '../Hooks/useThemeSwicher';
import Page404 from "../Components/Page404";


const AppRoutes = () => {
  return (
    <div>
      <Router>

      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/*' element={<Page404 /> } />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/portfolio/:username' element={< />} />
      <Route path='' element={} />

      <Route path='' element={} />
      <Route path='' element={} />

      </Router>
    </div>
  )
}

export default AppRoutes
