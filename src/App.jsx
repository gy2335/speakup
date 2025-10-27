import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Policies from "./pages/Policies";
import Map from "./pages/Map";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-24 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
