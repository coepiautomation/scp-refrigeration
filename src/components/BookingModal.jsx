import React, { useState } from 'react';

const [availableSlots, setAvailableSlots] = useState([]);
// Fetch slots when a date is selected
const fetchSlots = async (selectedDate) => {
  const res = await fetch(`https://n8n.coepi.co/webhook/get-availability?date=${selectedDate}`);
  const data = await res.json();
  setAvailableSlots(data.slots); // e.g. ["9:00 AM", "2:00 PM"]
};

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    clientStatus: '',
    serviceType: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  if (!isOpen) return null;

// PUT THIS INSIDE YOUR BookingModal COMPONENT
const handleFinalSubmit = async () => {
  try {
    // 1. Send data to your n8n "Intake" Webhook
    const response = await fetch("https://n8n.coepi.co/webhook/scp-booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // This payload matches the RequestCreateInput requirements 
        title: `${bookingData.serviceType.toUpperCase()} - Web Request`,
        description: `Requested Slot: ${bookingData.date} at ${bookingData.time}`,
        client: {
          firstName: bookingData.firstName,
          lastName: bookingData.lastName,
          email: bookingData.email,
          phone: bookingData.phone
        },
        // If they are a new client, we let n8n handle the Property creation
      }),
    });

    if (response.ok) {
      nextStep(); // Shows "Request Sent!" 🎉
    }
  } catch (error) {
    console.error("Submission Error:", error);
  }
};


  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden text-gray-900 dark:text-white">
        
        {/* Progress Bar (PetDesk Style) */}
        <div className="p-6 border-b border-gray-100 dark:border-white/10">
          <div className="flex justify-between items-center relative">
            <div className="absolute h-0.5 bg-gray-200 dark:bg-gray-700 w-full top-1/2 -z-10" />
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-500'}`}>
                {step > num ? '✓' : num}
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Step Content */}
        <div className="p-8 min-h-[400px]">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-2xl font-bold mb-6">What can we help with?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'ice', label: 'Ice Machine Repair', icon: '🧊' },
                  { id: 'cooler', label: 'Walk-in Cooler/Freezer', icon: '❄️' },
                  { id: 'hvac', label: 'AC & Heating Service', icon: '🌡️' },
                  { id: 'emergency', label: 'Emergency - Out of Temp', icon: '🚨' }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => { setBookingData({...bookingData, serviceType: item.id}); nextStep(); }} 
                    className="p-5 border-2 border-gray-100 dark:border-white/10 rounded-xl hover:border-blue-500 hover:bg-blue-50/50 transition-all text-left flex items-center gap-4"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="font-bold text-lg">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Select an Available Time</h2>
              <input 
                type="date" 
                onChange={(e) => fetchSlots(e.target.value)} 
                className="..." 
              />
              <div className="grid grid-cols-3 gap-2 mt-4">
                {availableSlots.map(slot => (
                  <button key={slot} onClick={() => { setBookingData({...bookingData, time: slot}); nextStep(); }} className="...">
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in">
              <h2 className="text-2xl font-bold mb-6">Your Details</h2>
              <div className="space-y-4 text-left">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    placeholder="First Name *" 
                    required
                    className="p-3 bg-gray-50 border rounded-lg w-full" 
                    onChange={(e) => setBookingData({...bookingData, firstName: e.target.value})} 
                  />
                  <input 
                    placeholder="Last Name *" 
                    required
                    className="p-3 bg-gray-50 border rounded-lg w-full" 
                    onChange={(e) => setBookingData({...bookingData, lastName: e.target.value})} 
                  />
                </div>
                <input 
                  type="email"
                  placeholder="Email Address *" 
                  required
                  className="w-full p-3 bg-gray-50 border rounded-lg" 
                  onChange={(e) => setBookingData({...bookingData, email: e.target.value})} 
                />
                <input 
                  type="tel"
                  placeholder="Phone Number *" 
                  required
                  className="w-full p-3 bg-gray-50 border rounded-lg" 
                  onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} 
                />
                
                <button 
                  onClick={handleFinalSubmit} 
                  className="w-full py-4 bg-hvac-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                >
                  Confirm Appointment Request
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-10 animate-in zoom-in">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold mb-2">Request Sent!</h2>
              <p className="text-gray-500">SCP Refrigeration will confirm your {bookingData.time} slot on {bookingData.date} shortly.</p>
              <button onClick={onClose} className="mt-8 px-8 py-3 border rounded-full">Close</button>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {step < 4 && (
          <div className="p-6 bg-gray-50 dark:bg-white/5 flex justify-between">
            <button onClick={step === 1 ? onClose : prevStep} className="text-gray-500 hover:text-black dark:hover:text-white">
              {step === 1 ? 'Cancel' : 'Previous'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;