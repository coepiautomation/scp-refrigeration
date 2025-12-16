import React from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, Flame, Wrench, ShieldCheck, Clock, Phone } from 'lucide-react';
import heroImage from '../assets/SCPtruck.jpg'; 
import technicianImage from '../assets/Ice-Machines-envato.jpg';
// Example: import heroImage from '../assets/technician-on-roof.jpg';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
{/* NEW "FADE" HERO SECTION */}
      <div className="relative h-[650px] flex items-center overflow-hidden bg-gray-100">
        
        {/* 1. The Image (Pushed to the right) */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={heroImage} 
            alt="SCP Refrigeration service truck" 
            className="w-full h-full object-cover object-right"
          />
        </div>

        {/* 2. The Gradient Fade (The magic part) */}
        {/* from-gray-100 (solid) -> via-gray-100/90 (mostly solid) -> to-transparent (invisible) */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/95 md:via-gray-100/70 to-transparent/10"></div>

        {/* 3. The Content (Sitting on top of the solid gray part) */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-hvac-blue font-semibold text-sm mb-6 border border-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Emergency Service
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Expert Cooling. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hvac-blue to-blue-400">
                Honest Pricing.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We keep Grand Prairie homes and businesses comfortable year-round. 
              No hidden fees, just quality refrigeration and HVAC work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-hvac-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1">
                Get a Free Quote
              </Link>
              <a href="tel:+15551234567" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold py-4 px-8 rounded-lg transition flex items-center justify-center gap-2">
                <Phone size={20} className="text-hvac-blue" /> (555) 123-4567
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center gap-6 text-gray-500 text-sm font-medium grayscale opacity-70">
              <div className="flex items-center gap-1"><ShieldCheck size={16}/> Licensed & Insured</div>
              <div className="flex items-center gap-1"><Clock size={16}/> 24/7 Support</div>
              <div className="flex items-center gap-1"><Wrench size={16}/> 10+ Years Exp</div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES SNAPSHOT */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <div className="w-24 h-1 bg-hvac-blue mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-hvac-blue">
              <Snowflake className="w-12 h-12 text-hvac-blue mb-4" />
              <h3 className="text-xl font-bold mb-3">Residential AC</h3>
              <p className="text-gray-600 mb-6">Installation, repair, and maintenance for your home. Keep your family cool all summer long.</p>
              <Link to="/residential" className="text-hvac-blue font-semibold hover:underline">Learn More &rarr;</Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-hvac-red">
              <Flame className="w-12 h-12 text-hvac-red mb-4" />
              <h3 className="text-xl font-bold mb-3">Heating & Furnaces</h3>
              <p className="text-gray-600 mb-6">Don't get caught in the cold. We service all makes and models of gas and electric furnaces.</p>
              <Link to="/residential" className="text-hvac-blue font-semibold hover:underline">Learn More &rarr;</Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-gray-800">
              <Wrench className="w-12 h-12 text-gray-800 mb-4" />
              <h3 className="text-xl font-bold mb-3">Commercial Refrigeration</h3>
              <p className="text-gray-600 mb-6">Walk-in coolers, freezers, and ice machines. Fast repairs to protect your inventory.</p>
              <Link to="/commercial" className="text-hvac-blue font-semibold hover:underline">Learn More &rarr;</Link>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why North Texas Trusts SCP Refrigeration</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <ShieldCheck className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Licensed & Insured</h4>
                  <p className="text-gray-600">Fully certified technicians who do the job right the first time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-8 h-8 text-hvac-blue flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Prompt Response</h4>
                  <p className="text-gray-600">We respect your time. When we say we'll be there, we'll be there.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Wrench className="w-8 h-8 text-gray-800 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Fair Pricing</h4>
                  <p className="text-gray-600">No hidden fees or surprise upcharges. Just honest work.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Image Side */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={technicianImage} 
              alt="SCP Technicians working" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;