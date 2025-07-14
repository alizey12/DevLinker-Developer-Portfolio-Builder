import React, { useContext, useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Sidebar from '../Sidebar';
import { ThemeContext } from '../../Context/ThemeContext';
import img1 from "../../assets/Leonardo.png";
import { FaHome } from "react-icons/fa";

const DashboardLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { theme } = useContext(ThemeContext);
  const [profileData, setProfileData] = useState({
    name: 'Kinza Fatima',
    title: 'MERN Stack Developer',
    bio: 'Passionate MERN Stack developer crafting clean and user-focused web apps.',
    website: 'https://kinzadevportfolio.web.app'
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
      setProfileData(JSON.parse(storedData));
    }
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`flex min-h-screen ${theme === 'dark' ? 'bg-emerald-400/70 text-emerald-100' : 'bg-gray-50 text-emerald-800'}`}>
      {/* Sidebar */}
      <div className={`${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 ${
        theme === 'dark' ? 'bg-emerald-700/50 border-emerald-700/50' : 'bg-white border-emerald-200'
      } border-r`}>
        <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className={`flex items-center justify-between p-4 border-b ${
          theme === 'dark' ? 'bg-emerald-400 border-emerald-700' : 'bg-white border-emerald-200'
        }`}>
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-emerald-700' : 'hover:bg-emerald-100'}`}
            >
              <FaHome className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="font-medium">{profileData.name}</span>
            <img 
              className="h-8 w-8 rounded-full object-cover" 
              src={img1} 
              alt="Profile" 
            />
          </div>
        </header>
        
        {/* Page Content */}
        <main className={`flex-1 overflow-auto p-4 md:p-6 ${
          theme === 'dark' ? 'bg-emerald-900' : 'bg-emerald-50'
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