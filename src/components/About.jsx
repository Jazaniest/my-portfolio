import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experiences</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                My name is M. Abdillah Aljazani, and I'm a passionate developer who specializes in creating modern web applications. My journey started with JavaScript, and now I build full-stack solutions with React and Node.js.
              </p>
              <p>
                Currently diving deep into <span className="text-cyan-400 font-semibold">System Security</span> to enhance my understanding of building secure applications. I believe in writing clean, maintainable code and always staying curious about new technologies.
              </p>
              <p>
                When I'm not coding, I'm probably exploring open-source projects or experimenting with new frameworks. Always excited to collaborate on interesting projects!
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-cyan-400">2+</div>
                <div className="text-sm text-gray-500">Years Coding</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-gray-500">Projects Done</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-500">Dedication</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <InfoCard
              date="2022 - Present"
              title="Full-Stack Developer"
              subtitle="RSUD Tengku Rafi'an Siak Project"
              icon="fa-solid fa-suitcase"
            />
            <InfoCard
              date="Currently Learning"
              title="System Security"
              subtitle="Expanding knowledge in secure coding practices"
              icon="fa-solid fa-graduation-cap"
            />
            <InfoCard
              date="Passion"
              title="Open Source Collaboration"
              subtitle="Love contributing to community projects"
              icon="fa-solid fa-rocket"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ date, title, subtitle, icon }) => (
  <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all group">
    <div className="flex items-start gap-4">
      <div className="text-3xl group-hover:scale-110 transition-transform">
        <i className={icon}></i>
      </div>
      <div>
        <div className="text-cyan-400 font-semibold mb-1">{date}</div>
        <div className="text-lg font-semibold mb-2">{title}</div>
        <div className="text-gray-400 text-sm">{subtitle}</div>
      </div>
    </div>
  </div>
);

export default About;
