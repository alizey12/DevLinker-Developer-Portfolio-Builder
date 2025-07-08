import React from 'react'
import { Router,Route } from 'react-router'
import {  } from "../Components/ProjectCard";
import SkillCard from "../Components/SkillCard";
import  from "../Components/ThemeSelector";

import {  } from "../Components/ProjectCard";

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
