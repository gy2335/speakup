import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pages = [
    { name: "Home", path: "/home" },
    { name: "Policies", path: "/policies" },
    { name: "Initiatives", path: "/initiatives" },
    { name: "Archives", path: "/archives" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Outfit:wght@500;600;700&display=swap');
      `}</style>

      <nav
        className={`w-full sticky top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-gradient-to-r from-[#FFE8A1] via-[#FDF5E6] to-[#B0CDEB]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-3 group">
            <img
              src="/speakuplogo.png"
              alt="Logo"
              className="h-20 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 drop-shadow-md"
            />
            <span
              className="hidden md:block text-5xl text-[#173B64]"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              Speak Up
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            className="hidden md:flex items-center gap-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <Link
                  key={page.name}
                  to={page.path}
                  className={`px-5 py-2.5 rounded-full text-lg font-bold transition-all duration-200 border-2 ${
                    isActive
                      ? "bg-[#173B64] text-white border-[#173B64] shadow-[3px_3px_0px_#0d2540]"
                      : "text-[#173B64] border-[#173B64] hover:bg-[#173B64] hover:text-white shadow-[3px_3px_0px_#173B64] hover:shadow-[4px_4px_0px_#0d2540] hover:-translate-y-0.5"
                  }`}
                >
                  {page.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-blue-50 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#173B64] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#173B64] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#173B64] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-blue-100 px-6 py-5 flex flex-col gap-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <Link
                  key={page.name}
                  to={page.path}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive ? "bg-[#173B64] text-white" : "text-[#173B64] hover:bg-blue-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {page.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}