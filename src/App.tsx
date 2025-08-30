import { useState } from 'react';
import { X, Menu, ChefHat } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-sm px-6 py-4 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <ChefHat className="w-8 h-8 text-amber-600" />
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Register for Event
            </button>
            <button className="bg-amber-900 hover:bg-amber-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Join
            </button>
          </div>

          {/* Mobile buttons + hamburger */}
          <div className="flex items-center space-x-3">
            {/* Mobile buttons - smaller on mobile */}
            <div className="flex items-center space-x-2 md:hidden">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                Register
              </button>
              <button className="bg-amber-900 hover:bg-amber-800 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors">
                Join
              </button>
            </div>

            {/* Hamburger button */}
            <button 
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay Menu */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Background overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        />
        
        {/* Menu panel */}
        <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-gradient-to-b from-amber-900 to-amber-800 shadow-2xl">
          {/* Menu header */}
          <div className="flex items-center justify-between p-6 border-b border-amber-700">
            <div className="flex items-center">
              <ChefHat className="w-8 h-8 text-amber-200" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Register for Event
              </button>
              <button className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                Join
              </button>
              <button 
                onClick={closeMenu}
                className="p-2 hover:bg-amber-700 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Book club logo area */}
          <div className="px-6 py-8 border-b border-amber-700">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-24 bg-amber-700 bg-opacity-50 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-amber-200 text-sm font-medium">Jollof and Fiction</span>
                </div>
                <p className="text-amber-200 text-sm">Book Club</p>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="px-6 py-8">
            <ul className="space-y-6">
              <li>
                <a 
                  href="#" 
                  className="block text-2xl font-semibold text-white hover:text-amber-200 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block text-2xl font-semibold text-white hover:text-amber-200 transition-colors py-2"
                  onClick={closeMenu}
                >
                  About us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block text-2xl font-semibold text-white hover:text-amber-200 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Our Book Store
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block text-2xl font-semibold text-white hover:text-amber-200 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Events and Calendar
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block text-2xl font-semibold text-white hover:text-amber-200 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Demo content to show the navbar in context */}
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Page Content</h1>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              This is your main content area. The hamburger menu will overlay on top of this content when opened.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Click the hamburger menu (☰) in the top-right corner to see the navigation overlay in action.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;