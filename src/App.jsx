import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Policies from "./pages/Policies";
import IntiativesMap from "./pages/Initiatives";
import Archives from "./pages/Archives";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
       <main className="flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/initiatives" element={<IntiativesMap />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}