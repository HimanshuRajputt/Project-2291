import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UserContext } from "../Context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleUserLogin } = useContext(UserContext);
  const role= localStorage.getItem("role")
  const token= localStorage.getItem("authToken")
  // console.log(role)

  return (
    <nav className="bg-blue-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-16 w-auto"
                src="https://ik.imagekit.io/m9qnay09g/DiScanner-removebg-preview.png?updatedAt=1737288472259"
                alt="App Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              HOME
            </Link>
            {role === "admin" ? (
              <Link
                to="/all-dishes"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
              >
                {/* <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-2 rounded-full text-l  shadow-lg hover:shadow-l transform hover:scale-105 transition-all "> */}
                AdminPanel
                {/* <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-2 rounded-full text-l  shadow-lg hover:shadow-l transform hover:scale-105 transition-all ">
                  AdminPanel
                </button> */}
              </Link>
            ) : (
              ""
            )}

            {token ? (
              <Link
                to="/Scanner"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
              >
                {/* <button  */}
                SCANNER
                {/* </button> */}
              </Link>
            ) : (
              ""
            )}
            {token ? (
              <Link
                to="/Calorie"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
              >
                CALORIE
              </Link>
            ) : (
              ""
            )}

            <Link
              to="/About"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              ABOUT
            </Link>
            <Link
              to="/Team"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              TEAM
            </Link>
            {token ? (
              <button
                onClick={() => handleUserLogin()}
                className="bg-red-500 px-3 py-2 rounded-lg text-white hover:text-gray-900 text-sm font-medium transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/Login"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
              >
                LOGIN / SIGNUP
              </Link>
            )}

            <Link
              to="/KnowWhy"
              className="border-2 border-gray-600 px-4 py-1 rounded-full hover:border-gray-900 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              Know Why?
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            HOME
          </Link>
          {token ? (
            <Link
              to="/Scanner"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-2 rounded-full text-l  shadow-lg hover:shadow-l transform hover:scale-105 transition-all "> */}
              SCANNER
              {/* </button> */}
            </Link>
          ) : (
            ""
          )}

          {token ? (
            <Link
              to="/Calorie"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              CALORIE
            </Link>
          ) : (
            ""
          )}
          <Link
            to="/About"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            ABOUT
          </Link>
          <Link
            to="/Team"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            TEAM
          </Link>
          {token ? (
            <button
              onClick={() => handleUserLogin()}
              className="bg-red-500 px-3 py-2 rounded-lg text-white hover:text-gray-900 text-sm font-medium transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/Login"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              LOGIN / SIGNUP
            </Link>
          )}
          <Link
            to="/KnowWhy"
            className="block px-3 py-2 mt-4 border-2 border-gray-600 text-center mx-3 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            Know Why?
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
