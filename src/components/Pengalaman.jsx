import React from "react";

const Pengalaman = ({ darkMode }) => {
  return (
    <section
      id="Pengalaman"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Pengalaman
        </h2>
        <p
          className={`text-center mb-16 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Pengalaman saya
        </p>

        <div className="relative">
          <div
            className={`absolute left-8 md:left-1/2 h-full w-0.5 transform -translate-x-1/2 ${
              darkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          ></div>

          <div className="space-y-12">
            {/* Pengalaman item 1 */}
            <div className="relative pl-10 md:pl-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 sm:ml-5">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Crew Production
                  </h3>
                  <h1>SMKN 8 Samarinda</h1>
                  <p
                    className={`mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    2022-2024
                  </p>
                </div>
                <div className="sm:flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 absolute  sm:left-8 sm:my-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0.5">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div
                    className={`p-6 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } shadow-md`}
                  >
                    <ul
                      className={`list-disc pl-5 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <li className="mb-2">
                        Editing ( Adobe Premiere Pro, After Effect, Adobe
                        Animate )
                      </li>
                      <li className="mb-2">Jurnalistik</li>
                      <li className="mb-2">Videographer</li>
                      <li>Desain</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative pl-10 md:pl-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 sm:ml-5">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Desain Grafis
                  </h3>
                  <h1>Kaltim Post</h1>
                  <p
                    className={`mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    25 Jan. - 24 Apr. 2024
                  </p>
                </div>
                <div className="sm:flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 absolute  sm:left-8 sm:my-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0.5">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div
                    className={`p-6 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } shadow-md`}
                  >
                    <ul
                      className={`list-disc pl-5 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <li className="mb-2">
                        Menjadi tim digital media sosial akun instagram
                        @kaltimpost
                      </li>
                      <li className="mb-2">Jurnalistik</li>
                      <li className="mb-2">Videographer</li>
                      <li>Desain foto & video</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Pengalaman item 3
            <div className="relative pl-10 md:pl-0">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Junior Web Developer
                  </h3>
                  <p
                    className={`mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    StartUp Komputer | Jul 2017 - Feb 2018
                  </p>
                </div>
                <div className="hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div
                    className={`p-6 rounded-lg ${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } shadow-md`}
                  >
                    <ul
                      className={`list-disc pl-5 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <li className="mb-2">
                        Built and maintained company website and internal tools
                        using HTML, CSS, and JavaScript
                      </li>
                      <li className="mb-2">
                        Implemented responsive design for mobile users,
                        increasing mobile traffic by 25%
                      </li>
                      <li className="mb-2">
                        Assisted in database design and API development
                      </li>
                      <li>
                        Participated in Agile development processes and daily
                        standups
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pengalaman;
