import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { CgProfile } from "react-icons/cg";
import { FaRegFileCode } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleSideToggle() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div>
      <aside className={`${isCollapsed ? 'w-20' : 'w-64'} h-full bg-emerald-950 text-white p-4 transition-all duration-300 border-r border-emerald-900/70 backk`}>
        <button onClick={handleSideToggle} className="text-emerald-300 hover:text-emerald-400">
          <GiHamburgerMenu size={30} />
        </button>

        <ul className="space-y-6 my-5">
          <li>
            <NavLink 
              to="profile" 
              className="flex items-center text-emerald-200 hover:text-emerald-400"
              activeClassName="text-emerald-400"
            >
              <CgProfile size={25} />
              {!isCollapsed && <span className="ml-3 font-semibold text-lg">Profile</span>}
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="skills" 
              className="flex items-center text-emerald-200 hover:text-emerald-400"
              activeClassName="text-emerald-400"
            >
              <FaRegFileCode size={25} />
              {!isCollapsed && <span className="ml-3 font-semibold text-lg">Skills</span>}
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="projects" 
              className="flex items-center text-emerald-200 hover:text-emerald-400"
              activeClassName="text-emerald-400"
            >
              <GoProjectSymlink size={25} />
              {!isCollapsed && <span className="ml-3 font-semibold text-lg">Projects</span>}
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="settings" 
              className="flex items-center text-emerald-200 hover:text-emerald-400"
              activeClassName="text-emerald-400"
            >
              <IoSettingsOutline size={25} />
              {!isCollapsed && <span className="ml-3 font-semibold text-lg">Settings</span>}
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;