import React from 'react';
import { 
  Home, Wind, Thermometer, ShieldCheck, 
  Zap, Clock, Heart, Phone, ArrowRight 
} from 'lucide-react';

const Residential = () => {
  const residentialServices = [
    {
      title: 'AC Installation & Repair',
      desc: 'Beat the Texas heat with high-efficiency cooling systems. We specialize in fast repairs and professional installs that keep your family cool.',
      icon: <Wind className="w-8 h-8 text-hvac-blue" />,
    },
    {
      title: 'Heating & Furnaces',
      desc: 'Ensure your home stays warm during the winter months with our reliable furnace repair and heating system maintenance.',
      icon: <Thermometer className="w-8 h-8 text-hvac-blue" />,
    },
    {
      title: 'Mini-Split Systems',
      desc: 'Perfect for sunrooms, additions, or specific zones. Energy-efficient ductless cooling without the need for major renovations.',
      icon: <Home className="w-8 h-8 text-hvac-blue" />,
    },
    {
      title: 'Indoor Air Quality',
      desc: 'Keep your home healthy with advanced filtration and UV light air purifiers that remove allergens, dust, and pollutants.',
      icon: <Heart className="w-8 h-8 text-hvac-blue" />,
    },
    {
      title: 'Smart Thermostats',
      desc: 'Take control of your comfort and energy bills with smart thermostat installation and integration for your entire home.',
      icon: <Zap className="w-8 h-8 text-hvac-blue" />,
    },
    {
      title: 'System Tune-Ups',
      desc: 'Preventative maintenance to extend the life of your equipment and catch small issues before they become expensive repairs.',
      icon: <ShieldCheck className="w-8 h-8 text-hvac-blue" />,
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: RESIDENTIAL HERO */}
      <section className="relative py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block bg-hvac-blue text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                Residential Services
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Family Comfort <br />Starts with <span className="text-hvac-blue">SCP</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We believe every North Texas home deserves reliable, efficient, and 
                affordable cooling. Our certified technicians treat your home 
                like their own.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="bg-hvac-blue hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold transition">
                  Schedule Your Tune-Up
                </a>
                <a href="tel:9407771234" className="flex items-center gap-2 text-gray-900 font-bold px-8 py-4 hover:text-hvac-blue transition">
                  <Phone size={20} /> (940) 777-1234
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
               {/* Visual representation of home comfort */}
               <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Family Protection Plan</h4>
                      <p className="text-sm text-gray-500">Priority service & 15% off repairs</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-hvac-blue w-3/4"></div>
                    </div>
                    <p className="text-sm text-gray-600 italic">"Frank and his team are the only ones I trust with my family's AC. Reliable and honest!" - DFW Homeowner</p>
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-hvac-blue opacity-10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICE CARDS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {residentialServices.map((service, idx) => (
              <div key={idx} className="group border-b-4 border-transparent hover:border-hvac-blue bg-white p-8 transition-all">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 font-bold text-hvac-blue group-hover:gap-3 transition-all">
                  Book Now <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SCP PROMISE */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Homeowners Choose Us</h2>
            <div className="w-20 h-1 bg-hvac-red mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-6 text-hvac-red" />
              <h4 className="text-xl font-bold mb-3">On-Time Arrival</h4>
              <p className="opacity-70">We value your time. Our technicians arrive within their window and provide live updates.</p>
            </div>
            <div className="text-center">
              <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-hvac-red" />
              <h4 className="text-xl font-bold mb-3">Certified & Insured</h4>
              <p className="opacity-70">Expertise you can trust. Every technician is fully certified and background-checked for your safety.</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-6 text-hvac-red" />
              <h4 className="text-xl font-bold mb-3">No Surprise Pricing</h4>
              <p className="opacity-70">You'll see the full price before any work begins. No hidden fees, no unnecessary upselling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-gray-900 mb-6">Ready to live comfortably?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Get your home ready for the season. Schedule a free estimate or a 
            standard service call today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="/contact" className="bg-hvac-red text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition">
               Get My Free Estimate
             </a>
             <a href="tel:9407771234" className="bg-gray-100 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition">
               Call Our Dispatcher
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residential;