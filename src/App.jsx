import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import logo from './assets/SCP-Refrigeration-Logo-1024x741.png';

// IMPORT REAL PAGES
import Home from './pages/Home';
import About from './pages/About';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        
        {/* Top Bar - Call to Action */}
        <div className="bg-hvac-blue text-white py-2 px-4 text-center md:text-right">
          <div className="container mx-auto flex justify-between items-center md:justify-end">
            <span className="text-sm md:text-base font-medium mr-4 hidden md:inline">Emergency Service 24/7</span>
            <a href="tel:+15551234567" className="flex items-center gap-2 font-bold hover:text-gray-200">
              <Phone size={18} />
              (555) 123-4567
            </a>
          </div>
        </div>

{/* Navigation Bar */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            
{/* LOGO SECTION */}
            <Link to="/" className="flex items-center gap-3 group">
              {/* This uses the "logo" variable we imported at the top */}
              <img src={logo} className="h-16 w-auto my-0" alt="SCP Refrigeration Logo" />
              

            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 font-medium text-gray-700">
              <Link to="/" className="hover:text-hvac-blue transition">Home</Link>
              <Link to="/about" className="hover:text-hvac-blue transition">About</Link>
              <Link to="/residential" className="hover:text-hvac-blue transition">Residential</Link>
              <Link to="/commercial" className="hover:text-hvac-blue transition">Commercial</Link>
              <Link to="/gallery" className="hover:text-hvac-blue transition">Gallery</Link>
              <Link to="/contact" className="bg-hvac-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition">Contact Us</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 shadow-lg">
              <Link to="/" className="block text-lg" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block text-lg" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/residential" className="block text-lg" onClick={() => setIsMenuOpen(false)}>Residential</Link>
              <Link to="/commercial" className="block text-lg" onClick={() => setIsMenuOpen(false)}>Commercial</Link>
              <Link to="/gallery" className="block text-lg" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link to="/contact" className="block text-lg text-hvac-red font-bold" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </div>
          )}
        </nav>

        {/* Main Content Area */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;