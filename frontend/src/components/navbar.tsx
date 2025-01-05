import React from "react";

export default function Navbar() {
  return (
    <nav
      id="navbar"
      className="fixed w-full z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-white">
              Analytics<span className="text-blue-500">Pro</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                  id="hamburger"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  id="close"
                  className="hidden"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className="hidden md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              Contact
            </a>
            <button className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
