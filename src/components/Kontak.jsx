import React from 'react';

const Kontak = ({ darkMode }) => {
  return (
    <section
      id="Kontak"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-center mb-16 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div
              className={`p-8 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Kontak Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 text-purple-500 text-xl mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4
                      className={`text-base font-semibold mb-1 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Email
                    </h4>
                    <a
                      href="mailto:john.doe@example.com"
                      className={`text-base ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      yusufhafidzn@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 text-purple-500 text-xl mt-1">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4
                      className={`text-base font-semibold mb-1 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Phone
                    </h4>
                    <a
                      href="tel:+6281234567890"
                      className={`text-base ${
                        darkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      +62 xxx
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 text-purple-500 text-xl mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4
                      className={`text-base font-semibold mb-1 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Lokasi
                    </h4>
                    <p
                      className={`text-base ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Kalimantan Timur, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <h3
                className={`text-xl font-bold mt-10 mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Sosial Media
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/yusufhafidzun/"
                  target="_blank"
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label="LinkedIn profile"
                >
                  <i className="fab fa-linkedin-in text-purple-500"></i>
                </a>
                <a
                  href="https://github.com/yusufhafidzun"
                  target='_blank'
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label="GitHub profile"
                >
                  <i className="fab fa-github text-purple-500"></i>
                </a>
                <a
                  href="http://www.instagram.com/yusufhap/"
                  target="_blank"
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label="Instagram profile"
                >
                  <i className="fab fa-instagram text-purple-500"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div
              className={`p-8 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Send Me a Message
              </h3>

              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                    placeholder="Your subject here"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-700"
                    }`}
                    placeholder="Your message here"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full px-6 py-3 rounded-lg font-medium ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-purple-600 hover:bg-purple-700 text-white"
                  }`}
                >
                  Send Message
                  <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;

                    