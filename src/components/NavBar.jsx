import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { name: "Home", path: "/home" },
    { name: "Policies", path: "/policies" },
    { name: "Map", path: "/map" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center space-x-6">
        {/* Logo only for now*/}
        {/* <img src="/logo.png" alt="Logo" className="h-12" /> */}
        <h1 className="text-2xl font-bold text-pink-700">Logo</h1>

        {/* Desktop View */}
        <div className="hidden md:flex space-x-4">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="text-pink-600 hover:text-pink-800 font-medium transition"
            >
              {page.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-pink-700 focus:outline-none absolute right-6"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <span className="text-2xl">&#x2715;</span> // ✕
          ) : (
            <span className="text-2xl">&#9776;</span> // ☰
          )}
        </button>
      </div>

      {/* Mobile View */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pink-50 px-6 py-4 flex flex-col space-y-4 shadow-md">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className="text-pink-700 hover:text-pink-900 font-medium transition"
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
