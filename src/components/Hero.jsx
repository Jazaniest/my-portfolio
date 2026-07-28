import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Open for collaboration
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">JZX</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 -mt-2">M. Abdillah Aljazani</h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl pt-2">
              Full-Stack Developer who loves building things with <span className="text-cyan-400 font-semibold">React</span> & <span className="text-green-400 font-semibold">Node.js</span>
            </p>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 max-w-2xl font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-500 text-xs">~/portfolio.js</span>
            </div>
            <pre className="text-gray-300">
              <span className="text-purple-400">const</span> <span className="text-blue-400">jzx</span> = &#123;
              <br />
              {'  '}<span className="text-cyan-400">role</span>: <span className="text-green-400">"Full-Stack Developer"</span>,
              <br />
              {'  '}<span className="text-cyan-400">currentFocus</span>: [<span className="text-green-400">"React.js"</span>, <span className="text-green-400">"Node.js"</span>],
              <br />
              {'  '}<span className="text-cyan-400">learning</span>: <span className="text-green-400">"System Security"</span>,
              <br />
              {'  '}<span className="text-cyan-400">funFact</span>: <span className="text-green-400">"Tailwind &gt; Bootstrap <i className="fa-solid fa-palette"></i>"</span>
              <br />
              &#125;;
            </pre>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              View Projects
            </a>
            <a href="https://wa.me/6288200665565" className="px-8 py-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 rounded-lg font-semibold transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
