import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <aside className="w-64 min-h-screen bg-gray-900 text-white p-4">
  <ul className="space-y-4">
    <li><NavLink to="profile">Profile</NavLink></li>
    <li><NavLink to="skills">Skills</NavLink></li>
    <li><NavLink to="projects">Projects</NavLink></li>
    <li><NavLink to="settings">Settings</NavLink></li>
  </ul>
</aside>

    </div>
  )
}

export default Sidebar
