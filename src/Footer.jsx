// src/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700">
        
        {/* Column 1: Logo & Mission */}
        <div>
          {/* Using the same stacked logo style from App.jsx, but white text */}
          <Link to="/" className="flex items-center gap-3 mb-4">
            {/* If you have a white logo version, use it here. Otherwise, the h-12 one is fine */}
            <img src={window.logoPath} className="h-12 w-auto" alt="SCP Refrigeration Logo" />
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            Your trusted partner for residential and commercial HVAC and refrigeration services in the DFW area. Quality, honesty, and reliability since 2013.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-hvac-blue">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/residential" className="hover:text-white transition">Residential Services</Link></li>
            <li><Link to="/commercial" className="hover:text-white transition">Commercial Refrigeration</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition">Recent Projects</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Request Service</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Hours */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-hvac-blue">Contact & Hours</h4>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-hvac-red flex-shrink-0" />
              <div>
                <a href="tel:+15551234567" className="font-bold text-lg hover:text-white">(940) 777-1234</a>
                <p className="text-gray-400">24/7 Emergency Dispatch</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-hvac-red flex-shrink-0" />
              <a href="mailto:info@scprefrigeration.com" className="hover:text-white transition">info@scprefrigeration.com</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-hvac-red flex-shrink-0" />
              <p className="text-gray-400">Serving North Texas</p>
            </div>
          </div>
        </div>

        {/* Column 4: Social Media & Legal */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-hvac-blue">Follow Us</h4>
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition"><Instagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><Twitter size={24} /></a>
          </div>
          
          <h4 className="text-lg font-bold mb-4 text-hvac-blue">Business Hours</h4>
          <p className="text-sm text-gray-400">
            **Regular Service:** Mon-Fri, 8:00 AM - 5:00 PM
            <br />
            **Emergency:** 24/7 Available
          </p>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} SCP Refrigeration. All Rights Reserved. | AMDG | Designed by Coepi
      </div>
    </footer>
  );
};

export default Footer;