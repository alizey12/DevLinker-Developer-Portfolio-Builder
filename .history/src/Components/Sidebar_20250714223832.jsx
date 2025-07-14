import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiUser, FiCode, FiFolder, FiSettings, FiLogOut } from 'react-icons/fi';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { motion ,animationMapKey} from 'framer-motion';

const Sidebar = ({ isCollapsed, onToggle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700"
    >
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle} 
        className="p-4 text-cyan-400 hover:text-cyan-300 transition-all flex items-center justify-center"
      >
        <HiOutlineMenuAlt2 size={24} />
        {!isCollapsed && <span className="ml-2 text-sm font-medium">Menu</span>}
      </motion.button>

      <nav className="flex-1 mt-2">
        <ul className="space-y-2 px-2">
          {[
            { to: "profile", icon: <FiUser size={20} />, label: "Profile" },
            { to: "skills", icon: <FiCode size={20} />, label: "Skills" },
            { to: "projects", icon: <FiFolder size={20} />, label: "Projects" },
            { to: "settings", icon: <FiSettings size={20} />, label: "Settings" }
          ].map((item) => (
            <li key={item.to}>
              <NavLink 
                to={item.to}
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400' 
                      : 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
                  }`
                }
              >
                <span className="flex items-center">
                  {item.icon}
                  {!isCollapsed && <span className="ml-3 text-sm font-medium">{item.label}</span>}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center p-3 rounded-lg text-gray-400 hover:bg-gray-700/50 hover:text-rose-400 w-full transition-all ${
            isCollapsed ? 'justify-center' : 'justify-between'
          }`}
        >
          <FiLogOut size={20} />
          {!isCollapsed && <span className="ml-3 text-sm font-medium">Logout</span>}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Sidebar;