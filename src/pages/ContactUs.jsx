import React, { useState } from "react";

const founders = [
  {
    name: "Mabel Yang",
    role: "Co-Founder",
    bio: "",
  },
  {
    name: "Grace Yang",
    role: "Co-Founder",
    bio: "",
  },
];

export default function ContactUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Outfit:wght@400;500;600;700&display=swap');

        .founder-card {
          background: white;
          border-radius: 20px;
          border: 2px solid #173B64;
          box-shadow: 4px 4px 0px #173B64;
          padding: 2rem;
          font-family: 'Outfit', sans-serif;
          transition: box-shadow 0.2s ease;
        }
        .founder-card:hover {
          box-shadow: 6px 6px 0px #173B64;
        }
        .form-wrapper {
          background: white;
          border-radius: 20px;
          border: 2px solid #173B64;
          box-shadow: 4px 4px 0px #173B64;
          overflow: hidden;
        }
        .email-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          border: 2px solid #173B64;
          box-shadow: 3px 3px 0px #173B64;
          border-radius: 999px;
          padding: 0.5rem 1.25rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #173B64;
          text-decoration: none;
          transition: box-shadow 0.15s ease;
        }
        .email-chip:hover {
          box-shadow: 5px 5px 0px #173B64;
        }
      `}</style>

      <div
        className="min-h-screen w-screen overflow-y-auto"
        style={{
          background: "linear-gradient(135deg, #fffbe8 0%, #f0f7ff 100%)",
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {/* Hero */}
        <div className="flex flex-col items-center px-8 pt-16 pb-10 text-center">
          <div className="inline-block bg-[#173B64] text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Get in Touch
          </div>
          <h1
            className="text-6xl md:text-7xl text-[#173B64] mb-4 leading-tight"
            style={{ fontFamily: "'Bungee Shade', cursive" }}
          >
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-6">
            Have a question, suggestion, or just want to say hi? We'd love to hear from you.
            Reach out directly or fill out the form below.
          </p>
          <a href="mailto:nycspeakup@gmail.com" className="email-chip">
            nycspeakup@gmail.com
          </a>
        </div>

        {/* Founders divider */}
        <div className="max-w-4xl mx-auto px-8 mb-10">
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t-2 border-dashed border-[#B0CDEB]" />
            <h2
              className="text-2xl text-[#173B64] whitespace-nowrap"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              Meet the Founders
            </h2>
            <div className="flex-1 border-t-2 border-dashed border-[#FFE8A1]" />
          </div>
        </div>

        {/* Founder Cards */}
        <div className="px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {founders.map((founder) => (
            <div key={founder.name} className="founder-card">
              {/* Avatar placeholder */}
              <div
                className="w-16 h-16 rounded-full bg-[#173B64] flex items-center justify-center text-white text-2xl font-bold mb-4"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {founder.name.charAt(0)}
              </div>
              <span className="inline-block bg-[#173B64] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                {founder.role}
              </span>
              <h3 className="text-xl font-bold text-[#173B64] mb-2">{founder.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{founder.bio}</p>
              <div className="mt-4 pt-4 border-t-2 border-dashed border-[#B0CDEB]">
                <a
                  href="mailto:nycspeakup@gmail.com"
                  
                  className="text-sm font-bold text-[#173B64] underline decoration-[#FFE8A1] decoration-2 underline-offset-2 hover:text-blue-600 transition-colors"
                >
                  nycspeakup@gmail.com
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Form divider */}
        <div className="max-w-4xl mx-auto px-8 mb-10">
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t-2 border-dashed border-[#B0CDEB]" />
            <h2
              className="text-2xl text-[#173B64] whitespace-nowrap"
              style={{ fontFamily: "'Bungee Shade', cursive" }}
            >
              Send Us a Message
            </h2>
            <div className="flex-1 border-t-2 border-dashed border-[#FFE8A1]" />
          </div>
        </div>

        {/* Google Form */}
        <div className="px-8 pb-20 max-w-4xl mx-auto">
          <div className="form-wrapper">
            <iframe
              src="https://docs.google.com/forms/d/1jqNIHWHNwXU6DyVHZwWElPSwlHFiOesSLVtFcwFPwSg/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}
