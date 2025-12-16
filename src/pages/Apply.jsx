import React, { useState } from 'react';
import { Upload, Send, CheckCircle, FileText, User, Phone, Mail, Briefcase } from 'lucide-react';

const Apply = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'HVAC Technician',
    experience: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call for the demo
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', position: 'HVAC Technician', experience: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-hvac-blue p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Employment Application</h1>
            <p className="opacity-90">Please fill out the details below and we will contact you for an interview.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-hvac-blue outline-none" placeholder="John Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Desired Position</label>
                <select name="position" value={formData.position} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hvac-blue outline-none bg-white">
                  <option>HVAC Technician</option>
                  <option>Refrigeration Specialist</option>
                  <option>Office Admin</option>
                  <option>Sales Representative</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-hvac-blue outline-none" placeholder="john@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-hvac-blue outline-none" placeholder="(555) 123-4567" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Years of Experience</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 text-gray-400" size={20} />
                <input type="text" name="experience" required value={formData.experience} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-hvac-blue outline-none" placeholder="e.g. 5 years" />
              </div>
            </div>

            {/* Resume Upload Placeholder */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Resume (PDF/Word)</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-hvac-blue transition cursor-pointer bg-gray-50">
                <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about yourself</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hvac-blue outline-none" placeholder="Relevant certifications, previous companies, etc."></textarea>
            </div>

            <button type="submit" disabled={status === 'submitting'} className="w-full bg-hvac-blue text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
              {status === 'submitting' ? 'Processing...' : <><Send size={20} /> Submit Application</>}
            </button>

            {status === 'success' && (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg flex items-center gap-2">
                <CheckCircle size={20} /> Application sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;