import React, { useContext } from 'react';
import { FiCode, FiCpu, FiDatabase, FiExternalLink, FiLayers, FiGitBranch } from 'react-icons/fi';
import { DiReact, DiJavascript1, DiNodejs, DiMongodb, DiSass } from 'react-icons/di';
import { ThemeContext } from '../../Context/ThemeContext';

const Skills = () => {
  const { theme, accentColor, uiDensity } = useContext(ThemeContext);

  // Helper function for dynamic classes
  const themeClass = (lightClass, darkClass) => 
    theme === 'light' ? lightClass : darkClass;

  // Skill categories data
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiCode className={`text-${accentColor}-400`} size={24} />,
      skills: [
        { name: "React", level: 90, icon: <DiReact className="text-blue-400" /> },
        { name: "JavaScript", level: 85, icon: <DiJavascript1 className="text-yellow-400" /> },
        { name: "HTML5/CSS3", level: 95, icon: <DiSass className="text-pink-500" /> },
        { name: "Tailwind CSS", level: 80, icon: <FiLayers className="text-cyan-400" /> },
        { name: "Next.js", level: 75, icon: <DiReact className={themeClass("text-gray-800", "text-gray-100")} /> }
      ]
    },
    // ... other categories
  ];

  return (
    <div className={`min-h-screen ${themeClass(
      "bg-gray-50",
      "bg-gradient-to-br from-gray-900 to-gray-800"
    )} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold mb-4 ${themeClass(
            "text-gray-800",
            "text-gray-100"
          )}`}>My Skills</h1>
          <p className={`text-lg max-w-3xl mx-auto ${themeClass(
            "text-gray-600",
            "text-gray-300"
          )}`}>
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        {/* Skills Grid - Updated card styling */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16`}>
          {/* Radial Chart Card */}
          <div className={`rounded-2xl p-6 border shadow-lg ${themeClass(
            "bg-white border-gray-200",
            "bg-gray-800/50 border-gray-700/50"
          )}`}>
            {/* ... rest of the radial chart content ... */}
          </div>
          
          {/* Other cards follow same pattern */}
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className={`rounded-2xl overflow-hidden shadow-lg border transition-all hover:border-${accentColor}-500/50 ${
              themeClass(
                "bg-white border-gray-200",
                "bg-gray-800/50 border-gray-700/50"
              )
            }`}>
              <div className={`p-6 border-b flex items-center ${
                themeClass(
                  "border-gray-200",
                  "border-gray-700/50"
                )
              }`}>
                <div className={`mr-3 p-2 rounded-lg ${
                  themeClass(
                    "bg-gray-100",
                    "bg-gray-700/30"
                  )
                }`}>
                  {category.icon}
                </div>
                <h2 className={`text-xl font-bold ${
                  themeClass(
                    "text-gray-800",
                    "text-gray-100"
                  )
                }`}>{category.title}</h2>
              </div>
              {/* ... rest of category content ... */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;