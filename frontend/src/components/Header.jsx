import { Link, NavLink, useLocation } from "react-router-dom";
import { BookOpen,icons,Settings } from "lucide-react";
import { useState } from "react";
import { FaBars, FaTimes, FaUser, FaPhone, FaInfo, FaBook } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { SiBloglovin } from "react-icons/si";
import { IoHome } from "react-icons/io5";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "bg-blue-600 text-white px-3 py-2 rounded flex items-center space-x-2"
      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded flex items-center space-x-2";

  const navItems = [
    { name: "Home", to: "/", icon: <IoHome /> },
    { name: "Tutorial", to: "/tutorial", icon: <FaBook /> },
    {name:"Blog", to:"/blog", icon:<SiBloglovin className="h-4 w-4"/>},
    {name:"admin", to:"/admin", icon:<Settings className="h-4 w-4" />},
    // 👇 Login will be visible only on large screens
    { name: "Login", to: "/login", icon: <FaUser />, showOnMobile: false },
    { name: "Contact", to: "/contact", icon: <FaPhone /> },
    { name: "About", to: "/about", icon: <FaInfo /> },
    { name: "help", to: "/help", icon: <IoMdHelpCircle /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                Tutorial Maker
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map(
              (item) =>
                (item.showOnMobile !== false || window.innerWidth >= 1024) && (
                  <NavLink key={item.name} to={item.to} className={linkClasses}>
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white/80 backdrop-blur-md shadow-md border-t border-gray-200">
          <nav className="flex flex-col px-4 py-2 space-y-2">
            {navItems.map(
              (item) =>
                item.showOnMobile !== false && ( // hide login on mobile
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={linkClasses}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
