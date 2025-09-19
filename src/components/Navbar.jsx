import React from "react";


const Navbar = ({
  activeSection,
  toggleDarkMode,
  darkMode,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <nav>
      <div className={`fixed w-full z-50 max-w-7x1 mx-auto px- sm:px-6 lg:px-18 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-l from-purple-500 to-blue-500'} shadow-md`}>
        <div className=" mx-20 flex items-center justify-between h-16 ">
          <div className="flex items-center  ">
            <span
              className={`text-xl font-bold text-white`}
            >
              Yusuf Hafidzun
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Beranda", "Informasi Pribadi", "Pengalaman", "Projek", "Kontak"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${
                      darkMode ? "text-gray-300 hover:text-white" : "text-white"
                    } ${activeSection === item ? "font-bold" : ""}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                )
              )}
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-full focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <i className="fas fa-sun text-yellow-300"></i>
                ) : (
                  <i className="fas fa-moon text-gray-800"></i>
                )}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <i className="fas fa-times text-white"></i>
              ) : (
                <i className="fas fa-bars text-white"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${darkMode ? "bg-gray-800" : "gradient-bg"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Beranda", "Informasi Pribadi", "Pengalaman", "Projek", "Kontak"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    darkMode ? "text-gray-300 hover:text-white" : "text-white"
                  } ${activeSection === item ? "font-bold" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )
            )}
            <div className="px-3 py-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <i className="fas fa-sun text-yellow-300"></i>
                ) : (
                  <i className="fas fa-moon text-gray-800"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
