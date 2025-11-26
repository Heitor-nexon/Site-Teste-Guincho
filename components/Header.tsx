import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-brand-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tighter italic">
                RP<span className="text-orange-500">AUTO</span>
              </span>
              <span className="text-xs text-gray-400 font-bold tracking-widest uppercase">Mecânica & Guincho</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:11999999999" 
              className="flex items-center text-orange-500 border border-orange-500 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all font-bold"
            >
              <Phone className="w-4 h-4 mr-2" />
              (11) 99999-9999
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-b border-gray-800 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-orange-500 block px-3 py-4 rounded-md text-base font-bold border-b border-gray-800 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:11999999999"
              className="block w-full text-center bg-orange-600 text-white font-bold py-3 mt-4 rounded"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};