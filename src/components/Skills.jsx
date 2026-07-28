import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
            Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Work With</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">Frontend Development</h3>
            {/* Skills items here */}
            <SkillCard name="React.js" icon="devicon-react-original colored" level="Advanced" width="92%" gradient="from-cyan-500 to-blue-600" />
            <SkillCard name="Astro" icon="devicon-astro-plain colored" level="Intermediate" width="78%" gradient="from-orange-500 to-red-600" />
            <SkillCard name="JavaScript" icon="devicon-javascript-plain colored" level="Expert" width="95%" gradient="from-yellow-500 to-orange-600" />
            <SkillCard name="Tailwind CSS" icon="devicon-tailwindcss-original colored" level="Advanced" width="90%" gradient="from-cyan-500 to-blue-600" />
            <SkillCard name="HTML" icon="devicon-html5-plain-wordmark colored" level="Expert" width="98%" gradient="from-orange-500 to-red-600" />
            <SkillCard name="CSS3" icon="devicon-css3-plain-wordmark colored" level="Expert" width="98%" gradient="from-cyan-500 to-blue-600" />
            <SkillCard name="PHP" icon="devicon-php-plain colored" level="Intermediate" width="75%" gradient="from-cyan-500 to-blue-600" />
          </div>

          {/* Backend & Database */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-400 mb-6">Backend & Database</h3>
            {/* Skills items here */}
            <SkillCard name="Node.js" icon="devicon-nodejs-plain-wordmark colored" level="Advanced" width="90%" gradient="from-green-500 to-emerald-600" />
            <SkillCard name="NPM" icon="devicon-npm-original-wordmark colored" level="Expert" width="93%" gradient="from-orange-500 to-red-600" />
            <SkillCard name="PNPM" icon="devicon-pnpm-plain colored" level="Advanced" width="90%" gradient="from-yellow-500 to-orange-600" />
            <SkillCard name="Express.js" icon="devicon-express-original colored" level="Advanced" width="88%" gradient="from-gray-600 to-gray-800" />
            <SkillCard name="PostgreSQL" icon="devicon-postgresql-plain colored" level="Intermediate" width="80%" gradient="from-blue-500 to-indigo-600" />
            <SkillCard name="MySQL" icon="devicon-mysql-original colored" level="Advanced" width="90%" gradient="from-blue-600 to-cyan-600" />
            <SkillCard name="Git" icon="devicon-git-plain colored" level="Advanced" width="92%" gradient="from-orange-500 to-red-600" />
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <AdditionalSkill name="Github" icon="devicon-github-original" />
          <AdditionalSkill name="Laravel" icon="devicon-laravel-original colored" />
          <AdditionalSkill name="Figma" icon="devicon-figma-plain colored" />
          <AdditionalSkill name="Linux" icon="devicon-linux-plain" />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ name, icon, level, width, gradient }) => (
  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all group">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <span className="text-2xl"><i className={icon}></i></span>
        <span className="font-semibold">{name}</span>
      </div>
      <span className="text-cyan-400 text-sm font-medium">{level}</span>
    </div>
    <div className="w-full bg-zinc-800 rounded-full h-2">
      <div className={`bg-gradient-to-r ${gradient} h-2 rounded-full`} style={{ width }}></div>
    </div>
  </div>
);

const AdditionalSkill = ({ name, icon }) => (
    <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-lg p-4 text-center hover:border-cyan-500/30 transition-all">
        <span className="text-2xl mb-2 block"><i className={icon}></i></span>
        <span className="text-sm text-gray-400">{name}</span>
    </div>
);

export default Skills;
