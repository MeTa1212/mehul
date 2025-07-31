import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">GFG-RBU</div>
        <nav className="space-x-6 text-gray-800 font-medium">
          <a href="#features" className="hover:text-green-600">
            Features
          </a>
          <a href="#faqs" className="hover:text-green-600">
            FAQs
          </a>
          <a href="#contact" className="hover:text-green-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
