import React from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, Flame, Wrench, ShieldCheck, Clock, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <div 
        className="relative bg-cover bg-center h-[600px] flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-cd6829517186?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dark Overlay */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Reliable Cooling & Heating <br />
            <span className="text-blue-400">When You Need It Most</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
            Expert residential and commercial HVAC services in Grand Prairie and DFW. 
            Honest pricing, quality work, and 24/7 emergency support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-hvac-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded text-center transition duration-300">
              Request Service
            </Link>
            <a href="tel:+15551234567" className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded text-center transition duration-300 flex items-center justify-center gap-2">
              <Phone size={20} /> Call Now
            </a>
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Grand Prairie Trusts SCP Refrigeration</h2>
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
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Technician working" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;