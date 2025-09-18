import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0 text-center md:text-left">
            © 2025 Tutorial Maker. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <Link to="/about" className="hover:text-gray-900 transition-colors">About</Link>
            <Link to="/help" className="hover:text-gray-900 transition-colors">Help</Link>
            <Link to="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
            <Link to="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}