import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Veron</h3>
            <p className="text-gray-400">Empowering businesses through innovative IT solutions since 2020.</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Software Development</li>
              <li className="text-gray-400">Cybersecurity</li>
              <li className="text-gray-400">Cloud Services</li>
              <li className="text-gray-400">AI & Machine Learning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span>karankaul02@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>+91 8004635705</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>Landmark Tower, Plot No. - 3, South City L, Sector 44, Gurugram, Haryana 122001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Veron. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
