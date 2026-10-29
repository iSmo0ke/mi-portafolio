import React, { useState } from 'react';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  const links = [
    { name: 'Inicio', href: '#' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Certificados', href: '#certificados' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 transition-all">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          <a href="#" className="text-xl font-bold text-white hover:text-blue-500 transition-colors">
            Jesús<span className="text-blue-500">.dev</span>
          </a>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 border-b border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-2 shadow-lg">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} 
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}