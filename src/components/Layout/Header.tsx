import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/club logo.jpg" 
                  alt="CZSSPC Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight">CZSSPC</span>
                <span className="text-xs text-gray-600 leading-tight">কুমিল্লা জিলা স্কুল বিজ্ঞান প্রজেক্ট ক্লাব</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">হোম</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">সম্পর্কে</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">গ্যালারি</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">ইভেন্ট</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">প্রজেক্ট</Link>
            <Link to="/leaders" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">নেতৃত্ব</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">যোগাযোগ</Link>
          </nav>

          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              হোম
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              সম্পর্কে
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              গ্যালারি
            </Link>
            <Link 
              to="/events" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ইভেন্ট
            </Link>
            <Link 
              to="/projects" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              প্রজেক্ট
            </Link>
            <Link 
              to="/leaders" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              নেতৃত্ব
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              যোগাযোগ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};