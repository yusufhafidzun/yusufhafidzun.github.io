import React from "react";
import Avatar from "/src/assets/Avatar.png";

const Tentang = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold text-center mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Informasi Pribadi
        </h2>
        <p
          className={`text-center mb-16 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Keterangan diri saya
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-purple-500">
              <img
                src={Avatar}
                alt="John Doe smiling in a casual setting with a blurred office background"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Keterangan Diri
            </h3>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <div className="flex items-center">
                <div className="mr-4 text-purple-500 text-xl">
                  <i className="fas fa-birthday-cake"></i>
                </div>
                <div>
                  <p className="font-semibold">Tanggal Lahir</p>
                  <p>23 Maret 2007</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 text-purple-500 text-xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="font-semibold">Lokasi</p>
                  <p>Kalimantan Timur, Kota Samarinda</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 text-purple-500 text-xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>yusufhafidzn@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 text-purple-500 text-xl">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p>@yusufhap</p>
                </div>
              </div>
            </div>

            <h3
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Pendidikan
            </h3>
            <div className="space-y-6">
              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-white"
                } shadow-md`}
              >
                <div className="flex items-start">
                  <div className="mr-4 text-purple-500 text-xl mt-1">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-lg ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Universitas Muhammadiyah Kalimantan Timur
                    </h4>
                    <p
                      className={`mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Teknik Informatika | 2025 - now
                    </p>
                    <p className={darkMode ? "text-gray-400" : "text-gray-700"}>
                      Spesialisasi keahlian Full stack Developer & Flutter Developer
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-700" : "bg-white"
                } shadow-md`}
              >
                <div className="flex items-start">
                  <div className="mr-4 text-purple-500 text-xl mt-1">
                    <i className="fas fa-school"></i>
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-lg ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      SMK Negeri 8 Samarinda
                    </h4>
                    <p
                      className={`mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Multimedia | 2023 - 2025
                    </p>
                    <p className={darkMode ? "text-gray-400" : "text-gray-700"}>
                      Mendalami design & video animasi serta pemrograman dasar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
