import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaPhone, FaInfo, FaBook } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? 'bg-gray-900 px-3 py-2 rounded text-white flex items-center space-x-2'
      : 'px-3 py-2 rounded text-gray-300 hover:text-white hover:bg-gray-700 flex items-center space-x-2';

  const navItems = [
    { name: 'Home', to: '/', icon: <IoHome /> },
    { name: 'Tutorial', to: '/tutorial', icon: <FaBook /> },
    { name: 'Login', to: '/login', icon: <FaUser /> },
    { name: 'Contact', to: '/contact', icon: <FaPhone /> },
    { name: 'About', to: '/about', icon: <FaInfo /> },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white rounded-full"></div>
          <span className="text-lg font-semibold">Tutorial Maker</span>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.to} className={linkClasses}>
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2">
          {navItems.map((item) => (
            <NavLink key={item.name} to={item.to} className={linkClasses}
            onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
              
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;