import React, { useState } from 'react';
import { Upload, Send, CheckCircle, FileText, User, Phone, Mail, Briefcase } from 'lucide-react';

const Apply = () => {
  const [status, setStatus] = useState('idle');
  // 1. NEW: State to hold the file object
  const [file, setFile] = useState(null); 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'HVAC Technician',
    experience: '',
    message: ''
  });

  // 2. NEW: Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // 3. UPDATED: Submit logic using FormData for file support
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // YOUR N8N WEBHOOK URL
    const WEBHOOK_URL = "https://n8n.coepi.co/webhook/submit-application";

    // Create the FormData package
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', formData.position);
    data.append('experience', formData.experience);
    data.append('message', formData.message);
    data.append('submittedAt', new Date().toLocaleString());
    
    // Append the file if one exists
    // Note: The name 'resume' must match the "Binary Property" field in your n8n Webhook node
    if (file) {
      data.append('resume', file);
    }

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        // IMPORTANT: Do NOT set Content-Type header when sending FormData
        // The browser automatically sets it to multipart/form-data with the correct boundary
        body: data, 
      });

      if (response.ok) {
        setStatus('success');
        // Clear form and file state
        setFile(null);
        setFormData({ name: '', email: '', phone: '', position: 'HVAC Technician', experience: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
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

            {/* Resume Upload - NOW FULLY WIRED UP */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Resume (PDF/Word)</label>
              <input
                type="file"
                id="resume-upload"
                className="hidden" 
                onChange={handleFileChange} // Connected to state
                accept=".pdf,.doc,.docx"
              />
              <label 
                htmlFor="resume-upload" 
                className={`border-2 border-dashed rounded-xl p-8 text-center transition cursor-pointer flex flex-col items-center ${
                  file ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-hvac-blue hover:bg-blue-50 bg-gray-50'
                }`}
              >
                {file ? (
                  <>
                    <FileText className="text-green-600 mb-2" size={32} />
                    <p className="text-sm text-green-700 font-medium">File Selected:</p>
                    <p className="text-sm font-bold text-gray-800">{file.name}</p>
                  </>
                ) : (
                  <>
                    <Upload className="text-gray-400 mb-2" size={32} />
                    <p className="text-sm text-gray-600 font-medium">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-1">PDF or Word docs only</p>
                  </>
                )}
              </label>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tell us about yourself</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hvac-blue outline-none" placeholder="Relevant certifications, previous companies, etc."></textarea>
            </div>

            <button type="submit" disabled={status === 'submitting'} className="w-full bg-hvac-blue text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50">
              {status === 'submitting' ? 'Processing...' : <><Send size={20} /> Submit Application</>}
            </button>

            {status === 'success' && (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg flex items-center gap-2 border border-green-200">
                <CheckCircle size={20} /> 
                <span className="font-medium">Application sent successfully! We'll be in touch soon.</span>
              </div>
            )}
            
            {status === 'error' && (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg flex items-center gap-2 border border-red-200">
                <span className="font-medium">Something went wrong. Please try again or email us directly.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;