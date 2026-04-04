import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { name: "Home", path: "/home" },
    { name: "Policies", path: "/policies" },
    { name: "Initiatives", path: "/initiatives" },
    { name: "Archives", path: "/archives" }
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-yellow-100 via-white to-blue-100 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/home">
            <img src="/speakuplogo.png" alt="Logo" className="h-16" />
          </Link>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex space-x-6">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="text-blue-400 hover:text-blue-600 font-medium text-xl transition"
            >
              {page.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-400 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <span className="text-3xl">&#10005;</span> // x button
          ) : (
            <span className="text-3xl">&#9776;</span> // hamburger
          )}
        </button>
      </div>

      {/* Mobile View */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-gradient-to-r from-yellow-100 via-white to-blue-100 shadow-md absolute top-full left-0 z-40 px-6 py-4 flex flex-col space-y-4">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="text-blue-400 hover:text-blue-600 font-medium transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
