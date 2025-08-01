import React from "react";

const Header = () => (
  <header className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
    {/* Left: GFG Logo + divider */}
    <div className="flex items-center space-x-4">
      <img
        src="https://www.svgrepo.com/download/330494/geeksforgeeks.svg"
        alt="GeeksforGeeks logo"
        className="h-8 w-auto"
      />
      <div className="h-6 border-r border-dotted border-gray-400"></div>
    </div>

    {/* Center: Navigation */}
    <nav className="flex items-center space-x-6 text-sm font-medium text-gray-700">
      <a href="#products" className="hover:text-black">
        Products
      </a>
      <a href="#resources" className="hover:text-black">
        Resources
      </a>
      <a href="#developers" className="hover:text-black">
        Developers
      </a>
    </nav>

    {/* Right: Open App button */}
    <button className="bg-black text-white px-4 py-1.5 rounded-full text-sm hover:bg-gray-900 transition">
      Open App
    </button>
  </header>
);

export default Header;
