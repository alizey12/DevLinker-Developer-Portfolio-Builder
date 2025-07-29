import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import { FiUser, FiCode, FiFolder, FiSettings, FiLogOut } from 'react-icons/fi';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { toast } from 'react-toastify';

const Sidebar = ({ isCollapsed, onToggle }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    toast.success('Signed out successfully!');
    navigate('/login');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen flex flex-col bg-gradient-to-b from-emerald-950 to-emerald-900 border-r border-emerald-800"
    >
      {/* Header with toggle button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle} 
        className="p-4 text-emerald-400 hover:text-emerald-300 transition-all flex items-center justify-center"
      >
        <HiOutlineMenuAlt2 size={24} />
        {!isCollapsed && <span className="ml-2 text-sm font-medium">Menu</span>}
      </motion.button>

      {/* Navigation links */}
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
                      ? 'bg-emerald-800/30 text-emerald-400 border-l-4 border-emerald-500' 
                      : 'text-emerald-300 hover:bg-emerald-800/40 hover:text-emerald-100'
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

      {/* Footer with logout button */}
      <div className="p-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className={`flex items-center p-3 rounded-lg text-emerald-300 hover:bg-emerald-800/40 hover:text-rose-400 w-full transition-all ${
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
