import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <img
            src="https://brandfetch.com/geeksforgeeks.org?view=library&library=default&collection=logos&asset=idFKvyQOZ_&utm_source=https%253A%252F%252Fbrandfetch.com%252Fgeeksforgeeks.org&utm_medium=copyAction&utm_campaign=brandPageReferral"
            alt="GeeksforGeeks logo"
            className="h-8 w-auto"
          />
          <p className="text-gray-600 text-sm">
            Empowering learners to build frontend skills with React and modern
            UI.
          </p>
        </div>

        <div>
          <h4 className="text-md font-semibold text-gray-800 mb-2">
            Quick Links
          </h4>
          <ul className="text-gray-600 space-y-1 text-sm">
            <li>
              <a href="#features" className="hover:text-green-600">
                Features
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-green-600">
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold text-gray-800 mb-2">Connect</h4>
          <p className="text-sm text-gray-600">Email: support@gfg-rbu.in</p>
          <p className="text-sm text-gray-600">Phone: +91 99999 99999</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-100">
        © {new Date().getFullYear()} GFG-RBU. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
