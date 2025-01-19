import  { useState } from "react";
import { Menu, X } from "lucide-react";
// import AppLogo2 from "../../assets/AppLogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/Calorie", label: "CALORIE" },
    { path: "/About", label: "ABOUT" },
    { path: "/Team", label: "TEAM" },
    { path: "/Login", label: "Login/SignUp" },
    { path: "/KnowWhy", label: "Know Why?", isSpecial: true },
  ];
  return (
    <nav className="bg-blue-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-16 w-auto"
              src="https://ik.imagekit.io/m9qnay09g/DiScanner-removebg-preview.png?updatedAt=1737288472259"
              alt="App Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(({ path, label, isSpecial }) => (
              <a
                key={path}
                href={path}
                className={`text-gray-600 hover:text-gray-900 transition-colors duration-200
                  ${
                    isSpecial
                      ? "border-2 border-gray-600 px-4 py-1 rounded-full hover:border-gray-900"
                      : ""
                  }
                  text-sm font-medium`}
              >
                {label}
              </a>
            ))}
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
          {navLinks.map(({ path, label, isSpecial }) => (
            <a
              key={path}
              href={path}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50
                ${
                  isSpecial
                    ? "mt-4 border-2 border-gray-600 text-center mx-3"
                    : ""
                }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
