// import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 bg-orange-50 px-4 py-8">
        <div className="h-full max-w-5xl mx-auto flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Left Column */}
            <div className="space-y-4 text-center md:text-left">
              <div className="rounded w-full max-w-sm mx-auto md:mx-0">
                <img
                  className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto md:mx-0"
                  src="https://img.freepik.com/free-vector/qr-code-scanning-concept-with-characters_23-2148637164.jpg?t=st=1737236975~exp=1737240575~hmac=505f72c9cc3f638ffc6d21768c497e2e6c0c7528c14296f88c524b5532e911fd&w=740"
                  alt="QR Code Scanner"
                />
              </div>
              <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-sm md:text-base">
                Effortlessly track your meal's nutritional value with our QR
                Code Calories Calculator. Simply scan the QR code of your dish,
                and get instant insights into its calorie count and nutritional
                breakdown. Stay informed and make healthier choices with ease!
              </p>

              <Link to="/Login">
                <button className="w-full md:w-auto bg-yellow-300 hover:bg-yellow-400 px-6 py-2 rounded-full font-medium">Scan QR</button>{" "}
              </Link>

              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  {/* SVG Icons */}
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative mt-8 md:mt-0">
              <div className="bg-yellow-200 rounded-full p-4 md:p-8">
                <div className="relative">
                  <img
                    src="https://img.freepik.com/premium-vector/qr-code-scanning-smartphone-screen-outline-icon-digital-designs_1137529-47469.jpg?w=740"
                    alt="QR Code verification illustration"
                    className="w-full h-auto rounded-full"
                  />
                  <div className="absolute -left-2 md:-left-4 bottom-0">
                    <div className="bg-blue-600 text-white p-1.5 md:p-2 rounded-full">
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
            <p className="text-xs md:text-base text-center md:text-left">
              © 2025 Calorie Counter. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end gap-4 text-xs md:text-sm">
              <a href="#" className="hover:text-gray-200">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-200">
                Terms
              </a>
              <a href="#" className="hover:text-gray-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
