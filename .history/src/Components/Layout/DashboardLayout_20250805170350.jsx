import React, { useContext, useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Sidebar from '../Sidebar';
import { ThemeContext } from '../../Context/ThemeContext';
import img1 from "/assets/Leonardo.png";
import { FaHome } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  useEffect(() => {
    const storedData = localStorage.getItem('profileData');
    if (storedData) setProfileData(JSON.parse(storedData));
  }, []);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const themeClasses = {
    bg: theme === 'dark' ? 'bg-emerald-900 text-emerald-100' : 'bg-emerald-50 text-emerald-800',
    sidebar: theme === 'dark' ? 'bg-emerald-800/90 border-emerald-700 text-emerald-100' : 'bg-emerald-100 border-emerald-200 text-emerald-800',
    sidebarIcons: theme === 'dark' ? 'text-emerald-100' : 'text-emerald-700',
    header: theme === 'dark' ? 'bg-emerald-600/70 border-emerald-700' : 'bg-emerald-100 border-emerald-300',
    btnHover: theme === 'dark' ? 'hover:bg-emerald-700' : 'hover:bg-emerald-200',
    main: theme === 'dark' ? 'bg-emerald-950' : 'bg-emerald-50'
  };

  const fadeIn = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const cardHover = { whileHover: { scale: 1.03 } };

  return (
    <motion.div
      className={`flex min-h-screen transition-colors duration-500 ${themeClasses.bg}`}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
      ref={ref}
    >
      {/* Sidebar */}
      <motion.div
        className={`${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 border-r ${themeClasses.sidebar}`}
        {...cardHover}
      >
        <Sidebar 
          isCollapsed={isCollapsed} 
          onToggle={toggleSidebar} 
          iconColor={themeClasses.sidebarIcons}
          bgColor={theme === 'dark' ? 'bg-emerald-800/90' : 'bg-emerald-100'}
        />
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <motion.header
          className={`flex items-center justify-between p-4 border-b ${themeClasses.header}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex items-center">
            <motion.button
              onClick={() => navigate('/')}
              className={`p-2 rounded-full transition ${themeClasses.btnHover} ${themeClasses.sidebarIcons}`}
              whileTap={{ scale: 0.9 }}
            >
              <FaHome className="h-6 w-6" />
            </motion.button>
          </div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-medium text-sm md:text-base">{profileData.name}</span>
            <motion.img
              className="h-8 w-8 rounded-full object-cover border-2 border-emerald-300 shadow-md"
              src={img1}
              alt="Profile"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.header>

        {/* Page Content */}
        <motion.main
          className={`flex-1 overflow-auto p-4 md:p-6 transition-colors duration-500 ${themeClasses.main}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div
            className="max-w-7xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <Outlet />
          </motion.div>
        </motion.main>
      </div>
    </motion.div>
  );
};

export default DashboardLayout;