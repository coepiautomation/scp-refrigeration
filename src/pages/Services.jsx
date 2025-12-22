import React from 'react';
import { 
  Wind, Thermometer, Snowflake, Wrench, 
  Utensils, Droplets, Factory, ShieldCheck,
  ChevronRight, Phone
} from 'lucide-react';

const Services = () => {
  const residentialServices = [
    {
      title: 'Heating & AC',
      desc: 'Expert installation and maintenance to keep your home comfortable in every season.',
      icon: <Wind className="text-hvac-blue" />
    },
    {
      title: 'AC Contractor Services',
      desc: 'Certified repair and tune-ups for peak performance and lower energy bills.',
      icon: <Thermometer className="text-hvac-blue" />
    },
    {
      title: 'Mini Split Installation',
      desc: 'Energy-efficient, ductless cooling solutions for specific zones or smaller spaces.',
      icon: <Snowflake className="text-hvac-blue" />
    },
    {
      title: 'System Replacements',
      desc: 'Professional replacement of aging HVAC units with modern, high-efficiency systems.',
      icon: <Wrench className="text-hvac-blue" />
    }
  ];

  const commercialServices = [
    {
      title: 'Walk-In Coolers & Freezers',
      desc: 'Custom cold storage solutions with advanced insulation and precise temperature control.',
      icon: <Snowflake className="text-hvac-red" />
    },
    {
      title: 'Commercial Kitchens',
      desc: 'Full-service setup for ovens, gas lines, and prep stations to keep your kitchen running.',
      icon: <Utensils className="text-hvac-red" />
    },
    {
      title: 'Ice Machines',
      desc: 'High-volume ice maker installation and essential descaling services for clean production.',
      icon: <Droplets className="text-hvac-red" />
    },
    {
      title: 'Rooftop Package Units (RTU)',
      desc: 'Powerful, weatherproof HVAC units designed specifically for large commercial buildings.',
      icon: <Factory className="text-hvac-red" />
    },
    {
      title: 'Exhaust Fans & Hoods',
      desc: 'Installation of high-performance exhaust fans and fire suppression hood systems.',
      icon: <Wind className="text-hvac-red" />
    },
    {
      title: 'Make-Up Air Units',
      desc: 'Maintain balanced airflow and indoor air quality in busy commercial environments.',
      icon: <ShieldCheck className="text-hvac-red" />
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-hvac-blue py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Professional HVAC and refrigeration solutions built for precision 
            and long-term reliability.
          </p>
        </div>
      </section>

      {/* RESIDENTIAL SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Residential</h2>
            <div className="h-1 flex-grow bg-hvac-blue opacity-20 rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {residentialServices.map((service, idx) => (
              <div key={idx} className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:bg-hvac-blue group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="/contact" className="text-hvac-blue font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Get a Quote <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 flex-grow bg-hvac-red opacity-20 rounded"></div>
            <h2 className="text-4xl font-bold text-gray-900">Commercial</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:bg-hvac-red group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="/contact" className="text-hvac-red font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 EMERGENCY BANNER */}
      <section className="py-16 bg-hvac-red text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter">24/7 Emergency Repairs</h2>
            <p className="text-lg opacity-90">Systems don't wait for business hours. Neither do we.</p>
          </div>
          <a 
            href="tel:9407771234" 
            className="bg-white text-hvac-red px-10 py-5 rounded-full font-black text-xl flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <Phone fill="currentColor" /> (940) 777-1234
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;