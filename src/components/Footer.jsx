import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p
            className={`text-center md:text-left mb-4 md:mb-0 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="www.linkedin.com/in/yusufhafidzun"
              target="_blank"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label="LinkedIn profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="www.github.com/yusufhafidzun"
              target="_blank"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label="GitHub profile"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="www.instagram.com/yusufhap/"
              target="_blank"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label="Instagram profile"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
