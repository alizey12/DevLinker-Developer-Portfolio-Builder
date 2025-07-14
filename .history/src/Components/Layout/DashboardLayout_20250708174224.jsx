import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';
import { ThemeContext } from '../../Context/ThemeContext';

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme } = useContext(ThemeContext);

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
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
        isCollapsed ? 'ml-5' : 'ml-7'
      }`}>
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