import React from 'react';
import { Briefcase, Clock, MapPin, CheckCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const jobs = [
    {
      title: "Lead HVAC Technician",
      type: "Full-Time",
      location: "Denton County & North Tarrant County",
      description: "We're looking for an experienced tech with 5+ years in residential and light commercial HVAC. Must have EPA certification and a clean driving record.",
      pay: "$28 - $40 / hr"
    },
    {
      title: "Commercial Refrigeration Tech",
      type: "Full-Time",
      location: "DFW Metroplex",
      description: "Specializing in walk-in coolers and ice machines. Seeking a problem-solver who takes pride in high-quality installs and repairs.",
      pay: "$30 - $45 / hr"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Join the SCP Team</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Build a career with a local company that values honesty, hard work, and family. We offer competitive pay, consistent hours, and a professional environment.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50 border-b">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-hvac-blue">
              <CheckCircle size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Top Industry Pay</h3>
            <p className="text-gray-600">We reward skill and reliability with the best rates in Grand Prairie.</p>
          </div>
          <div className="p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-hvac-blue">
              <Clock size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Stable Hours</h3>
            <p className="text-gray-600">No "on-call" burnout. We value work-life balance for our technicians.</p>
          </div>
          <div className="p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-hvac-blue">
              <Briefcase size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Modern Tools</h3>
            <p className="text-gray-600">We invest in the best equipment and trucks to help you succeed.</p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-20 container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Current Openings</h2>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="border rounded-xl p-8 hover:shadow-lg transition bg-white border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                  <div className="flex gap-4 mt-2 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                  </div>
                </div>
                <div className="text-hvac-blue font-bold text-xl">{job.pay}</div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>
              <Link 
                to="/apply" 
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-hvac-blue transition"
              >
                Apply Now <Send size={18} />
              </Link>
              
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-hvac-blue py-16 text-center text-white px-4">
        <h2 className="text-3xl font-bold mb-4">Don't see a role that fits?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
          We are always looking for talented individuals. Send your resume to <strong>careers@scprefrigeration.com</strong>
        </p>
      </div>
    </div>
  );
};

export default Careers;