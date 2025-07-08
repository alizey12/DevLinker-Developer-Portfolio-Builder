import React from 'react';
import { FiCode, FiCpu, FiDatabase,FiExternalLink, FiLayers, FiGitBranch } from 'react-icons/fi';
import { DiReact, DiJavascript1, DiNodejs, DiMongodb, DiSass } from 'react-icons/di';

const Skills = () => {
  // Skill categories data
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiCode className="text-emerald-400" size={24} />,
      skills: [
        { name: "React", level: 90, icon: <DiReact className="text-blue-400" /> },
        { name: "JavaScript", level: 85, icon: <DiJavascript1 className="text-yellow-400" /> },
        { name: "HTML5/CSS3", level: 95, icon: <DiSass className="text-pink-500" /> },
        { name: "Tailwind CSS", level: 80, icon: <FiLayers className="text-cyan-400" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <FiCpu className="text-emerald-400" size={24} />,
      skills: [
        { name: "Node.js", level: 75, icon: <DiNodejs className="text-green-500" /> },
        { name: "Express", level: 70, icon: <FiCode className="text-gray-300" /> },
        { name: "REST APIs", level: 80, icon: <FiGitBranch className="text-red-400" /> }
      ]
    },
    {
      title: "Database & Tools",
      icon: <FiDatabase className="text-emerald-400" size={24} />,
      skills: [
        { name: "MongoDB", level: 70, icon: <DiMongodb className="text-green-400" /> },
        { name: "Git/GitHub", level: 85, icon: <FiGitBranch className="text-orange-400" /> },
        { name: "VS Code", level: 90, icon: <FiCode className="text-blue-400" /> }
      ]
    }
  ];

  // Languages/frameworks for radial chart
  const languages = [
    { name: "JavaScript", value: 35, color: "text-yellow-400" },
    { name: "TypeScript", value: 25, color: "text-blue-500" },
    { name: "HTML/CSS", value: 20, color: "text-pink-500" },
    { name: "Python", value: 15, color: "text-emerald-400" },
    { name: "Other", value: 5, color: "text-gray-400" }
  ];

  return (
    <div className="min-h-screen bg-emerald-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-emerald-100 mb-4">My Skills</h1>
          <p className="text-lg text-emerald-300 max-w-3xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        {/* Skills Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Radial Chart */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-800/50 shadow-lg flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-emerald-200 mb-6">Language Breakdown</h2>
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {languages.map((lang, i) => {
                  const angle = (lang.value / 100) * 360;
                  const startAngle = languages.slice(0, i).reduce((acc, l) => acc + (l.value / 100) * 360, 0);
                  return (
                    <path
                      key={lang.name}
                      d={describeArc(50, 50, 40, startAngle, startAngle + angle)}
                      fill="currentColor"
                      className={`${lang.color} opacity-80 hover:opacity-100 transition-opacity`}
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-2xl font-bold text-emerald-100">5+</span>
                  <p className="text-emerald-400">Languages</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${lang.color} mr-2`}></div>
                  <span className="text-sm text-emerald-300">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Stats */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-800/50 shadow-lg">
            <h2 className="text-xl font-bold text-emerald-200 mb-6">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-emerald-400 mb-2">Years Coding</h3>
                <div className="text-5xl font-bold text-emerald-100">3+</div>
              </div>
              <div>
                <h3 className="text-emerald-400 mb-2">Projects Completed</h3>
                <div className="text-5xl font-bold text-emerald-100">12+</div>
              </div>
              <div>
                <h3 className="text-emerald-400 mb-2">Technologies Used</h3>
                <div className="text-5xl font-bold text-emerald-100">15+</div>
              </div>
            </div>
          </div>

          {/* GitHub Stats */}
          <div className="bg-emerald-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-800/50 shadow-lg">
            <h2 className="text-xl font-bold text-emerald-200 mb-6">GitHub Activity</h2>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-emerald-400">Repositories</h3>
                <div className="text-2xl font-bold text-emerald-100">24</div>
              </div>
              <div>
                <h3 className="text-emerald-400">Commits (2023)</h3>
                <div className="text-2xl font-bold text-emerald-100">387</div>
              </div>
            </div>
            <div className="bg-emerald-950/30 p-4 rounded-lg">
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div 
                    key={i}
                    className={`h-3 rounded-sm ${i % 5 === 0 ? 'bg-emerald-600' : 'bg-emerald-800/50'}`}
                    style={{ opacity: 0.3 + (Math.random() * 0.7) }}
                  />
                ))}
              </div>
              <p className="text-center text-sm text-emerald-400 mt-2">Recent activity</p>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center mt-4 text-emerald-400 hover:text-emerald-300"
            >
              View GitHub Profile <FiExternalLink className="ml-1" />
            </a>
          </div>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-emerald-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-emerald-800/50">
              <div className="p-6 border-b border-emerald-800/50 flex items-center">
                <div className="mr-3 p-2 bg-emerald-800/30 rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold text-emerald-200">{category.title}</h2>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center mb-3">
                      <div className="mr-3 text-xl">
                        {skill.icon}
                      </div>
                      <h3 className="font-medium text-emerald-100">{skill.name}</h3>
                    </div>
                    <div className="w-full bg-emerald-950/30 h-2 rounded-full">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-emerald-400">Proficiency</span>
                      <span className="text-xs font-medium text-emerald-300">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 bg-emerald-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-800/50 shadow-lg">
          <h2 className="text-xl font-bold text-emerald-200 mb-6">Additional Skills</h2>
          <div className="flex flex-wrap gap-3">
            {['Redux', 'Context API', 'Jest', 'React Testing Library', 'Webpack', 'Vite', 'Figma', 'Agile Methodologies', 'JIRA', 'Postman'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-emerald-800/30 text-emerald-200 rounded-full border border-emerald-700/50 hover:bg-emerald-700/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function for radial chart
function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", x, y,
    "L", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    "Z"
  ].join(" ");
}

function polarToCartesian(x, y, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: x + (radius * Math.cos(angleInRadians)),
    y: y + (radius * Math.sin(angleInRadians))
  };
}

export default Skills;