import React from "react";
import Avatar from "/src/assets/Avatar.png";

const Navbar = ({
  activeSection,
  toggleDarkMode,
  darkMode,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <nav>
      <div
        className={`fixed w-full z-50 max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 ${
          darkMode
            ? "bg-gray-800"
            : "bg-gradient-to-l from-purple-500 to-blue-500"
        } shadow-md`}
      >
        <div className="mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <img src={Avatar} />
            </div>
            <span className="text-xl font-bold text-white">Yusuf Hafidzun</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                "Beranda",
                "Informasi Pribadi",
                "Pengalaman",
                "Projek",
                "Kontak",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`nav-link px-3 py-2 rounded-md text-sm font-medium ${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-white hover:text-gray-200"
                  } ${
                    activeSection === item ? "font-bold bg-white/20" : ""
                  } transition-colors duration-200`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-full focus:outline-none hover:bg-white/20 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <i className="fas fa-sun text-yellow-300"></i>
                ) : (
                  <i className="fas fa-moon text-white"></i>
                )}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none hover:bg-white/20 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <i className="fas fa-times text-white text-xl"></i>
              ) : (
                <i className="fas fa-bars text-white text-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden fixed top-16 left-0 right-0 z-40 ${
            darkMode
              ? "bg-gray-800 border-t border-gray-700"
              : "bg-gradient-to-b from-purple-500 to-blue-600 border-t border-white/20"
          } shadow-lg`}
        >
          <div className="px-4 pt-6 pb-4 space-y-2">
            {[
              "Beranda",
              "Informasi Pribadi",
              "Pengalaman",
              "Projek",
              "Kontak",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  darkMode
                    ? "text-gray-200 hover:text-white hover:bg-gray-700"
                    : "text-white hover:text-gray-100 hover:bg-white/20"
                } ${
                  activeSection === item
                    ? darkMode
                      ? "font-bold bg-gray-700 text-white"
                      : "font-bold bg-white/30 text-white"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            {/* Divider */}
            <div
              className={`my-4 border-t ${
                darkMode ? "border-gray-700" : "border-white/20"
              }`}
            ></div>

            {/* Dark mode toggle in mobile menu */}
            <div className="px-4 py-2">
              <button
                onClick={() => {
                  toggleDarkMode();
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full p-3 rounded-lg focus:outline-none transition-all duration-200 ${
                  darkMode
                    ? "text-gray-200 hover:text-white hover:bg-gray-700"
                    : "text-white hover:text-gray-100 hover:bg-white/20"
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <>
                    <i className="fas fa-sun text-yellow-300 text-lg"></i>
                    <span className="text-base font-medium">Light Mode</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-moon text-white text-lg"></i>
                    <span className="text-base font-medium">Dark Mode</span>
                  </>
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
