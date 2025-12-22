import React, { useState, useEffect } from 'react'; // Added useEffect here
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import logo from './assets/SCP-Refrigeration-Logo-1024x741.png';
window.logoPath = logo;
import Footer from './Footer';
import Careers from './pages/Careers'
import Apply from './pages/Apply'
import BookingModal from "./components/BookingModal";

// IMPORT REAL PAGES
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
// Add the new state for the Booking Modal
  const [isBookingOpen, setIsBookingOpen] = useState(false);

// Inside your App() function in App.jsx
useEffect(() => {
  const fixRetellAlignment = () => {
    // 1. Find the host div (the one with z-index 999999)
    const host = document.querySelector('div[style*="z-index: 999999"]');
    
    if (host && host.shadowRoot) {
      // 2. Reach inside the Shadow DOM to find the chat window
      const chatWindow = host.shadowRoot.querySelector('.retell-chat-window');
      const fab = host.shadowRoot.querySelector('.retell-fab');

      if (chatWindow) {
        // 3. Force the window to align left
        chatWindow.style.setProperty('right', 'auto', 'important');
        chatWindow.style.setProperty('left', '0', 'important');
      }
      
      // Optional: If the FAB itself looks off, you can adjust it here too
      if (fab) {
        fab.style.setProperty('margin-left', '0', 'important');
      }
    }
  };

  // Run every 1s for 5s to catch the widget when it finishes injecting
  const interval = setInterval(fixRetellAlignment, 1000);
  return () => clearInterval(interval);
}, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        
        {/* Top Bar - Call to Action */}
        <div className="bg-hvac-blue text-white py-2 px-4 text-center md:text-right">
          <div className="container mx-auto flex justify-between items-center md:justify-end">
            <span className="text-sm md:text-base font-medium mr-4 hidden md:inline">Emergency Service 24/7</span>
            <a href="tel:+19407771234" className="flex items-center gap-2 font-bold hover:text-gray-200">
              <Phone size={18} />
              (940) 777-1234
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
              <Link to="/careers" className="hover:text-hvac-blue transition">Careers</Link>
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
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>


          <Footer />

{/* --- ADD THE NEW BOOKING BUTTON HERE --- */}
        {/* This stays fixed at the bottom right as the user scrolls */}
        <button 
          onClick={() => setIsBookingOpen(true)}
          className="fixed bottom-8 right-8 z-[999] bg-hvac-blue hover:bg-blue-800 text-white px-6 py-4 rounded-full shadow-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="hidden md:inline">Schedule Service</span>
        </button>

        {/* --- ADD THE BOOKING MODAL COMPONENT HERE --- */}
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
        />

      </div>
    </Router>
  );
}

export default App;