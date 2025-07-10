import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("theme");
      if (storedMode) return storedMode === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`
        w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
            : "bg-transparent"
        }
      `}
    >
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 bg-clip-text text-transparent">
            Jay Lakhani
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 rounded-lg group"
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></div>
            </a>
          ))}
        </nav>

        {/* Desktop Right Controls */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="relative p-3 rounded-xl bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group backdrop-blur-sm"
          >
            <div className="relative w-5 h-5">
              <Sun
                className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
                  darkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
                }`}
              />
              <Moon
                className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
                  darkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                }`}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            className="relative p-2 rounded-lg bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 backdrop-blur-sm"
          >
            <div className="relative w-5 h-5">
              <Sun
                className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
                  darkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
                }`}
              />
              <Moon
                className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
                  darkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                }`}
              />
            </div>
          </button>

          <button
            onClick={toggleMenu}
            className="relative p-2 text-gray-700 dark:text-gray-200 focus:outline-none group"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <Menu
                className={`w-6 h-6 transition-all duration-300 ${
                  isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute w-6 h-6 transition-all duration-300 ${
                  isOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg px-4 pb-6 space-y-2 border-t border-gray-200/20 dark:border-gray-700/20">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`
                block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 
                hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 
                rounded-lg transition-all duration-300 transform hover:translate-x-2
                animate-fade-in-up
              `}
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: "both",
              }}
            >
              <span className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span>{link.name}</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
