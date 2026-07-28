import React from 'react';

const Projects = () => {
  const projectData = [
    {
      category: 'Healthcare',
      type: 'Professional',
      title: "RSUD Tengku Rafi'an Siak",
      description: "Healthcare management system for nursing department. Built with React and Node.js, featuring patient management, real-time notifications, and comprehensive reporting.",
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'Express'],
      demoUrl: "https://rsudtr-frontend.vercel.app/dashboard",
      sourceUrl: null,
    },
    {
      category: 'E-Commerce',
      type: 'Personal',
      title: "Kalwi Web Store",
      description: "Full-featured e-commerce platform for minecraft with shopping cart, payment integration, order management, and admin dashboard. Built for scalability and performance.",
      tags: ['Astro', 'Node.js', 'MySQL', 'Tailwind'],
      demoUrl: "https://kalwi-frontend.vercel.app/",
      sourceUrl: null,
    },
    {
      category: 'Productivity',
      type: 'Artificial Intelegence',
      title: "Tani AI",
      description: "Developed a modern farming app UI with weed detection through image analysis and a crop recommendation feature, winning first place in the IMPHNEN AI Hackathon.",
      tags: ['React.js', 'Tailwind'],
      demoUrl: "https://tani-ai.vercel.app/",
      sourceUrl: "https://github.com/Jazaniest/garuda-ai-frontend",
    },
    {
      category: 'E-Commerce',
      type: 'Public',
      title: "Albagani.com",
      description: "Designed a modern e-commerce application with seamless integration of shopping cart, user accounts, and product search features.",
      tags: ['React.js', 'Express.js', 'MySQL', 'Node.js'],
      demoUrl: "https://albagani.com",
      sourceUrl: "https://github.com/Jazaniest/albagani-frontend",
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/Jazaniest" className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg font-medium transition-all group">
            <span>View More on GitHub</span>
            <i className="devicon-github-original text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ category, type, title, description, tags, demoUrl, sourceUrl }) => {
  const categoryColors = {
    'Healthcare': 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    'E-Commerce': 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    'Productivity': 'bg-green-500/10 border-green-500/30 text-green-400',
  };
  const typeColors = {
    'Professional': 'bg-green-500/10 border-green-500/30 text-green-400',
    'Personal': 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
    'Artificial Intelegence': 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    'Public': 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  };

  return (
    <div className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all">
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[category] || ''}`}>{category}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[type] || ''}`}>{type}</span>
        </div>
        <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => <span key={i} className="px-3 py-1 bg-zinc-800 rounded-lg text-xs text-gray-400">{tag}</span>)}
        </div>
        <div className="flex gap-4 pt-4">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 font-medium transition-all text-sm text-center">
            View Demo
          </a>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all text-sm text-center ${sourceUrl ? 'bg-zinc-800 hover:bg-zinc-700 text-gray-300' : 'bg-zinc-800/50 text-gray-500 cursor-not-allowed'}`}>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
