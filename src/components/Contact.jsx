import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>
        <div className="mt-12">
          <form className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              <input type="email" placeholder="Your Email" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <textarea placeholder="Your Message" rows="5" className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 mt-6 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
            <div className="text-center mt-6">
              <button type="submit" className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;