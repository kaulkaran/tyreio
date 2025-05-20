import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Layers } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <Layers className="h-10 w-10 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Veron</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://Veron-registration-page.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://Veron-registration-page.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white px-4 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors text-center mt-4"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;