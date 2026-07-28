import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-bold font-mono text-cyan-400 hover:text-cyan-300 transition-colors">
              &lt;JZX /&gt;
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium">About</a>
              <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium">Projects</a>
              <a href="#contact" className="px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-medium transition-all">
                Let's Talk
              </a>
            </div>

            <button onClick={toggleMobileMenu} className="md:hidden text-gray-400 hover:text-cyan-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-zinc-950/98 backdrop-blur-xl z-40 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a href="#about" onClick={closeMobileMenu} className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" onClick={closeMobileMenu} className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" onClick={closeMobileMenu} className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" onClick={closeMobileMenu} className="text-2xl text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
