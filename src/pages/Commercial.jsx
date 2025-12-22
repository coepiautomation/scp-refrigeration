import React from 'react';
import { 
  Snowflake, Utensils, Factory, Droplets, 
  Wind, ShieldCheck, Zap, Phone, ArrowRight 
} from 'lucide-react';

const Commercial = () => {
  const commercialServices = [
    {
      title: 'Walk-In Coolers & Freezers',
      desc: 'Precision cold storage for restaurants, floral shops, and medical facilities. We handle everything from door gaskets to full compressor replacements.',
      icon: <Snowflake className="w-8 h-8 text-white" />,
      color: 'bg-blue-600'
    },
    {
      title: 'Rooftop Package Units (RTU)',
      desc: 'High-capacity HVAC solutions for commercial buildings. Specialized in installation, repair, and preventative maintenance for major brands.',
      icon: <Factory className="w-8 h-8 text-white" />,
      color: 'bg-red-600'
    },
    {
      title: 'Commercial Kitchen Equipment',
      desc: 'Installation and gas-line hookups for ovens, fryers, and prep stations. We ensure your kitchen meets all local safety and performance codes.',
      icon: <Utensils className="w-8 h-8 text-white" />,
      color: 'bg-orange-600'
    },
    {
      title: 'Ice Machines & Filtration',
      desc: 'Reliable ice production with professional descaling and sanitization. We service Hoshizaki, Manitowoc, and Scotsman systems.',
      icon: <Droplets className="w-8 h-8 text-white" />,
      color: 'bg-cyan-600'
    },
    {
      title: 'Exhaust & Fire Suppression',
      desc: 'Kitchen hood exhaust fan installation and fire suppression systems to keep your cooking areas safe and compliant.',
      icon: <Wind className="text-white w-8 h-8" />,
      color: 'bg-gray-700'
    },
    {
      title: 'Make-Up Air Systems',
      desc: 'Balanced ventilation solutions to improve indoor air quality and reduce energy costs in high-volume commercial spaces.',
      icon: <ShieldCheck className="text-white w-8 h-8" />,
      color: 'bg-green-600'
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: COMMERCIAL HERO */}
      <section className="relative h-[500px] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-black to-transparent z-10"></div>
        {/* Placeholder for a high-res commercial kitchen/rooftop image */}
        <div className="absolute inset-0 bg-hvac-blue opacity-30"></div> 
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-hvac-red text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              Commercial Services
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Powering DFW's <br /><span className="text-hvac-red">Cold Storage & HVAC</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              From busy restaurant kitchens to large-scale industrial warehouses, 
              we provide 24/7 emergency support and precision installations for 
              all your commercial refrigeration and cooling needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:9407771234" className="bg-hvac-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition flex items-center gap-2">
                <Phone size={20} /> Emergency Dispatch
              </a>
              <a href="/contact" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold transition">
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE EQUIPMENT GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Commercial Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in the high-stakes equipment that keeps your business running. 
              Minimized downtime, maximized efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.desc}
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 font-bold text-hvac-blue hover:text-blue-800 transition">
                  Details & Pricing <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MAINTENANCE PLAN VALUE PROP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-hvac-blue rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 italic">Stop waiting for failures.</h2>
              <h3 className="text-2xl mb-8 opacity-90">Preventative Maintenance Plans starting for DFW Businesses.</h3>
              <ul className="space-y-4 mb-10 text-lg">
                <li className="flex items-center gap-3"><Zap className="text-yellow-400" /> Reduced Energy Consumption</li>
                <li className="flex items-center gap-3"><Zap className="text-yellow-400" /> Extended Equipment Lifespan</li>
                <li className="flex items-center gap-3"><Zap className="text-yellow-400" /> Priority Emergency Dispatch</li>
              </ul>
              <a href="/contact" className="bg-white text-hvac-blue px-10 py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition inline-block">
                View Maintenance Tiers
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              <ShieldCheck size={300} className="text-white opacity-10 absolute -top-20" />
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                 <p className="text-5xl font-black mb-2">24/7</p>
                 <p className="uppercase tracking-widest font-bold">Priority Response</p>
                 <p className="mt-4 text-sm opacity-70 italic">Exclusive for our Commercial Maintenance Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CLIENT TRUST */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 uppercase tracking-widest">Equipped to handle</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* These are placeholder names for the types of businesses he serves */}
            <span className="text-2xl font-black">RESTAURANTS</span>
            <span className="text-2xl font-black">WAREHOUSES</span>
            <span className="text-2xl font-black">HOSPITALS</span>
            <span className="text-2xl font-black">GROCERY STORES</span>
            <span className="text-2xl font-black">HOTELS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commercial;