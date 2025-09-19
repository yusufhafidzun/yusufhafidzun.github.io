import React from "react";

const Projek = ({ darkMode }) => {
  return (
    <section
      id="Projek"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Projek Saya
        </h2>
        <p
          className={`text-center mb-16 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Some of my best works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projek 1 */}
          <div
            className={`rounded-2xl overflow-hidden shadow-lg card-hover ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c90956f3-6b91-48b8-b179-46d58d69defc.png"
                alt="Dashboard interface for analytics platform with data visualizations and metrics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3
                className={`text-xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Analytics Dashboard
              </h3>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                A comprehensive analytics platform with real-time data
                visualization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  React
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Chart.js
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  REST API
                </span>
              </div>
              <div className="mt-4 flex space-x-3">
                <a
                  href="#"
                  className={`flex items-center text-sm ${
                    darkMode
                      ? "text-purple-400 hover:text-purple-300"
                      : "text-purple-600 hover:text-purple-800"
                  }`}
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
                <a
                  href="#"
                  className={`flex items-center text-sm ${
                    darkMode
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <i className="fab fa-github mr-1"></i> Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Projek 2 */}
          <div
            className={`rounded-2xl overflow-hidden shadow-lg card-hover ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0b3f0409-d5eb-4189-883b-daa6516e0b98.png"
                alt="E-commerce website showcasing products with clean product cards and filters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3
                className={`text-xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                E-Commerce Store
              </h3>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                A full-featured online store with product catalog, cart, and
                checkout.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Next.js
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Stripe
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Tailwind CSS
                </span>
              </div>
              <div className="mt-4 flex space-x-3">
                <a
                  href="#"
                  className={`flex items-center text-sm ${
                    darkMode
                      ? "text-purple-400 hover:text-purple-300"
                      : "text-purple-600 hover:text-purple-800"
                  }`}
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
                <a
                  href="#"
                  className={`flex items-center text-sm ${
                    darkMode
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <i className="fab fa-github mr-1"></i> Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Projek 3 */}
          <div
            className={`rounded-2xl overflow-hidden shadow-lg card-hover ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/96fc07ee-3430-494a-8b7a-c429ac5889db.png"
                alt="Task management application with kanban board, to-do lists, and calendar integration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3
                className={`text-xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Task Manager
              </h3>
              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Productivity app with drag-and-drop interface and team
                collaboration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Vue.js
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Firebase
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode
                      ? "bg-gray-600 text-gray-200"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  DnD
                </span>
              </div>
              <div className="mt-4 flex space-x-3">
                <a
                  href="#"
                  className={`flex items-center text-sm ${
                    darkMode
                      ? "text-purple-400 hover:text-purple-300"
                      : "text-purple-600 hover:text-purple-800"
                  }`}
                >
                  <i className="fas fa-external-link-alt mr-1"></i> Live Demo
                </a>
                <a
                  href="#"
                  className={`flex items-center text-sm ${
                    darkMode
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <i className="fab fa-github mr-1"></i> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium ${
              darkMode
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "gradient-bg hover:opacity-90 text-white"
            }`}
          >
            View All Projek
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projek;
