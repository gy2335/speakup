import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { name: "Home", path: "/home" },
    { name: "Policies", path: "/policies" },
    { name: "Initiatives", path: "/initiatives" },
    { name: "Archives", path: "/archives" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
  <nav className="w-full bg-[#F6FAFF]/90 backdrop-blur-lg border-b-4 border-[#173B64] sticky top-0 left-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div>
          <Link to="/home" className="flex items-center space-x-3 group">
            <img
              src="/speakuplogo.png"
              alt="Logo"
              className="h-14 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
            {/* Custom Font for Speak Up */}
             <span
              className="hidden md:block text-3xl font-extrabold text-[#173B64] tracking-tight drop-shadow-sm"
              style={{ fontFamily: "'Fredoka', 'Outfit', sans-serif" }}
            >
              Speak Up
            </span>
          </Link>
        </div>


        {/* Desktop View - Pill Buttons*/}
        <div className="hidden md:flex space-x-4">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="px-5 py-2.5 rounded-full font-bold text-[#173B64] bg-[#A3C4EB]/30 border-2 border-transparent hover:bg-[#FFDE70] hover:border-[#173B64] hover:shadow-[4px_4px_0px_#173B64] hover:-translate-y-1 transition-all duration-200"
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
