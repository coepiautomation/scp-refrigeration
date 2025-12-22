import React from 'react';
import { Wrench, ShieldCheck, Zap, Users, BarChart3, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '400+', icon: <Users className="w-6 h-6" /> },
    { label: 'Projects Completed', value: '740+', icon: <ShieldCheck className="w-6 h-6" /> },
    { label: 'Team Members', value: '30+', icon: <Users className="w-6 h-6" /> },
  ];

  const values = [
    {
      title: 'Reliability',
      description: 'We approach transparency across all aspects of our services to guarantee quality at every step.',
      icon: <Clock className="text-hvac-blue" />
    },
    {
      title: 'Energy Conscious',
      description: 'Smart designs built for lasting performance and lower energy costs for your home or business.',
      icon: <Zap className="text-hvac-blue" />
    },
    {
      title: 'Expert Guidance',
      description: 'From initial consultation to long-term maintenance, our team provides personalized solutions.',
      icon: <Wrench className="text-hvac-blue" />
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-hvac-blue py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6">About SCP Refrigeration</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
            Where every appliance is installed with precision, repaired with care, 
            and maintained with expertise. We don't just install systems; we build lasting comfort.
          </p>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Approach</h2>
              <p className="text-gray-600 mb-4 text-lg">
                At SCP Refrigeration, our work blends hands-on expertise with innovative problem-solving. Serving Sanger, TX, and the surrounding areas, we focus on shaping spaces that work better for you through energy-smart HVAC and custom refrigeration solutions.
              </p>
              <p className="text-gray-600 text-lg">
                Every project reflects our core values: reliability, energy-conscious design, and personalized service. With upgraded tools and a proven approach, we deliver results that keep systems performing at their best.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-hvac-red shadow-sm">
                  <div className="mt-1">{value.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STATS COUNTER */}
          <div className="bg-hvac-red rounded-2xl p-10 text-white shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-4xl font-black">{stat.value}</div>
                  <div className="uppercase tracking-widest text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Certified Technicians, Proven Results</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <BarChart3 className="w-10 h-10 text-hvac-blue mb-4" />
              <h3 className="text-xl font-bold mb-3">Customized Installations</h3>
              <p className="text-gray-600 italic">"Every space is different, and so is our approach. We design systems built around your exact needs."</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <Zap className="w-10 h-10 text-hvac-red mb-4" />
              <h3 className="text-xl font-bold mb-3">Modern Diagnostic Tools</h3>
              <p className="text-gray-600 italic">"We use the latest tools to deliver precise, dependable results that ensure smooth operation from day one."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Lasting Performance?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a quick quote—schedule your expert consultation with us today. 
            Serving residential & commercial clients with excellence.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-hvac-blue text-white font-bold px-10 py-4 rounded-lg hover:bg-blue-800 transition shadow-lg"
          >
            Schedule Free Estimate
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;