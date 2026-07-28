import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <a href="#home" className="text-2xl font-bold font-mono text-cyan-400 hover:text-cyan-300 transition-colors">
              &lt;JZX /&gt;
            </a>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer passionate about creating exceptional web experiences with React and Node.js.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/Jazaniest" className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <i className="devicon-github-original"></i>
              </a>
              <a href="mailto:jazaniezt07@gmail.com" className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="https://wa.me/6288200665565" className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Me</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-cyan-400">Fun Facts</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>☕ Powered by Coffee</li>
              <li>🎨 Tailwind &gt; Bootstrap</li>
              <li>🔒 Learning Security</li>
              <li>🚀 Open to Collaborate</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} M. Abdillah Aljazani (JZX). All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Made with 💙 by a developer who loves clean code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

