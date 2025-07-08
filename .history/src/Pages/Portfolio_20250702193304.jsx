// import React from 'react'
// import { useParams } from 'react-router'
// const Portfolio = () => {
//     const ParamsData = useParams();
//     console.log(ParamsData.username)

//   return (
//     <div>
//       <h1>portfolio :{useParams.id} </h1>
//     </div>
//   )
// }

// export default Portfolio
import React from 'react';

const projects = [
  {
    title: 'Recipe Finder App',
    description: 'Search and view recipes using an external API.',
    image: '/images/recipe-app.png',
    tech: ['React', 'Tailwind', 'API'],
    demoLink: 'https://your-demo-link.com',
    codeLink: 'https://github.com/yourusername/recipe-finder',
  },
  // Add more project objects...
];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 p-10">
      <h2 className="text-4xl font-bold mb-10 text-center">My Portfolio</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-xl shadow-lg p-5 hover:shadow-xl transition">
            <img src={project.image} alt={project.title} className="rounded-md h-48 w-full object-cover mb-4" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {project.tech.map((t, i) => (
                <span key={i} className="text-sm bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <a href={project.demoLink} target="_blank" className="text-emerald-600 font-medium hover:underline">Demo</a>
              <a href={project.codeLink} target="_blank" className="text-gray-700 font-medium hover:underline">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
