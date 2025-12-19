import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  // 1. STATE MANAGEMENT (Stores what the user types)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    isEmergency: false 
  });
  
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  // REPLACE THIS WITH YOUR N8N WEBHOOK URL LATER
  const WEBHOOK_URL = "https://n8n.coepi.co/webhook/scp-customer-inquiry"; 

  // 2. HANDLE INPUT CHANGES
const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  // 3. HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // If no webhook is set yet, we simulate a success for the demo
      if (!WEBHOOK_URL) {
        console.log("Form Data (Simulated Send):", formData);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form
        return;
      }

      // Real Webhook Send
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Website Contact Form',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need a repair or a quote? Fill out the form below or give us a call. 
            We respond to all online inquiries within 2 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          
          {/* LEFT COLUMN: Contact Info & Map */}
          <div className="bg-hvac-blue text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold opacity-80">Phone</p>
                    <a href="tel:+19407771234" className="text-xl font-bold hover:text-gray-200">(940) 777-1234</a>
                    <p className="text-sm opacity-75 mt-1">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold opacity-80">Email</p>
                    <a href="mailto:SCPRefrigeration@gmail.com" className="text-lg hover:text-gray-200">SCPRefrigeration@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold opacity-80">Service Area</p>
                    <p className="text-lg">Greater DFW Area</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map (Placeholder for DFW) */}
            <div className="mt-12 rounded-lg overflow-hidden h-64 border-2 border-blue-400">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d429195.17129369115!2d-97.12325299609378!3d32.81645242565049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1765848860906!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="Service Area Map"
              ></iframe>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hvac-blue focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hvac-blue focus:border-transparent outline-none transition"
                    placeholder="(940) 777-1234"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hvac-blue focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* NEW: Emergency Checkbox */}
              <div className={`p-4 rounded-lg border-2 transition-all ${formData.isEmergency ? 'bg-red-50 border-red-500 shadow-md' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center gap-3">
                    <input 
                    type="checkbox" 
                    id="isEmergency"
                    name="isEmergency"
                    checked={formData.isEmergency}
                    onChange={handleChange}
                    className="w-6 h-6 text-hvac-red rounded focus:ring-hvac-red cursor-pointer"
                    />
                    <label htmlFor="isEmergency" className="cursor-pointer select-none">
                    <span className={`block font-bold ${formData.isEmergency ? 'text-red-700' : 'text-gray-700'}`}>
                        Is this an Emergency?
                    </span>
                    <span className="text-sm text-gray-500 italic">
                        Check this box for immediate dispatch / 24-7 urgent service.
                    </span>
                    </label>
                </div>
                </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hvac-blue focus:border-transparent outline-none transition"
                  placeholder="I need a quote for a new AC unit..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-hvac-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>

              {/* Success/Error Messages */}
              {status === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span>Message sent! We'll be in touch shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center gap-2">
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try calling us instead.</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;