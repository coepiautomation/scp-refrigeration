import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

// Placeholder Components (We will build these out fully later)
const Home = () => <div className="p-10 text-2xl font-bold">Home Page - Hero Section & Services Overview</div>;
const About = () => <div className="p-10 text-2xl font-bold">About Us - History & Team</div>;
const Residential = () => <div className="p-10 text-2xl font-bold">Residential Services</div>;
const Commercial = () => <div className="p-10 text-2xl font-bold">Commercial & Refrigeration</div>;
const Gallery = () => <div className="p-10 text-2xl font-bold">Project Gallery</div>;
const Contact = () => <div className="p-10 text-2xl font-bold">Contact Form & Maps</div>;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        
        {/* Top Bar - Call to Action */}
        <div className="bg-hvac-blue text-white py-2 px-4 text-center md:text-right">
          <div className="container mx-auto flex justify-between items-center md:justify-end">
            <span className="text-sm md:text-base font-medium mr-4 hidden md:inline">Emergency Service 24/7</span>
            <a href="tel:+1234567890" className="flex items-center gap-2 font-bold hover:text-gray-200">
              <Phone size={18} />
              (555) 123-4567
            </a>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo Placeholder */}
            <Link to="/" className="text-2xl font-extrabold text-hvac-blue">SCP REFRIGERATION</Link>

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