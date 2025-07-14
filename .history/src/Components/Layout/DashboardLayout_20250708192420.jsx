import React, { useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Sidebar from '../Sidebar';
import { ThemeContext } from '../../Context/ThemeContext';
import { HomeIcon } from '@heroicons/react/24/outline'; 
import { AuthContext } from '../../Context/AuthContext'; // Assuming you have an AuthContext

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext); // Get user data from auth context
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      {/* Sidebar */}
      <div className={`${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 ${
        theme === 'dark' ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white border-gray-200'
      } border-r`}>
        <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className={`flex items-center justify-between p-4 border-b ${
          theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <HomeIcon className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            {user && (
              <>
                <span className="font-medium">{user.name || user.email}</span>
                <img 
                  className="h-8 w-8 rounded-full object-cover" 
                  src={user.photoURL || "https://www.gravatar.com/avatar/?d=mp"} 
                  alt="Profile" 
                />
              </>
            )}
          </div>
        </header>
        
        {/* Page Content */}
        <main className={`flex-1 overflow-auto p-4 md:p-6 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;