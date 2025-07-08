import React from 'react';
import { NavLink } from 'react-router';
import { CgProfile } from "react-icons/cg";
import { FaRegFileCode } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = ({ isCollapsed, onToggle }) => {
  return (
    <div className="h-screen flex flex-col">
      <button 
        onClick={onToggle} 
        className="p-4 text-emerald-300 hover:text-emerald-400 transition-colors"
      >
        <GiHamburgerMenu size={25} />
      </button>

      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <NavLink 
              to="profile" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg mx-2 transition-colors ${
                  isActive ? 'bg-emerald-800 text-emerald-100' : 'text-emerald-300 hover:bg-emerald-800/50'
                }`
              }
            >
              <CgProfile size={20} />
              {!isCollapsed && <span className="ml-3">Profile</span>}
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="skills" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg mx-2 transition-colors ${
                  isActive ? 'bg-emerald-800 text-emerald-100' : 'text-emerald-300 hover:bg-emerald-800/50'
                }`
              }
            >
              <FaRegFileCode size={20} />
              {!isCollapsed && <span className="ml-3">Skills</span>}
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="projects" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg mx-2 transition-colors ${
                  isActive ? 'bg-emerald-800 text-emerald-100' : 'text-emerald-300 hover:bg-emerald-800/50'
                }`
              }
            >
              <GoProjectSymlink size={20} />
              {!isCollapsed && <span className="ml-3">Projects</span>}
            </NavLink>
          </li>

          <li>
            <NavLink 
              to="settings" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg mx-2 transition-colors ${
                  isActive ? 'bg-emerald-800 text-emerald-100' : 'text-emerald-300 hover:bg-emerald-800/50'
                }`
              }
            >
              <IoSettingsOutline size={20} />
              {!isCollapsed && <span className="ml-3">Settings</span>}
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="p-4">
        <button className="flex items-center jus p-3 rounded-lg mx-2 text-emerald-300 hover:bg-emerald-800/50 w-full transition-colors">
          <IoMdLogOut size={20} />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;