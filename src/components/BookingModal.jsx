import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose }) => {
  // 1. ALL state must be inside the component
  const [step, setStep] = useState(1);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookingData, setBookingData] = useState({
    clientStatus: '',
    serviceType: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '' // Added phone to initial state
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  // 2. This function needs to be inside to access setAvailableSlots
  const fetchSlots = async (selectedDate) => {
    // Save the date to our booking state first
    setBookingData(prev => ({ ...prev, date: selectedDate }));
    
    try {
      const res = await fetch(`https://n8n.coepi.co/webhook/get-availability?date=${selectedDate}`);
      const data = await res.json();
      setAvailableSlots(data.slots || []); // Default to empty array if no slots
    } catch (err) {
      console.error("Error fetching slots:", err);
      setAvailableSlots(["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"]); // Fallback for demo
    }
  };

  const handleFinalSubmit = async () => {
    try {
      // This triggers the requestCreate mutation logic in n8n [cite: 29, 60]
      const response = await fetch("https://n8n.coepi.co/webhook/scp-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `${bookingData.serviceType.toUpperCase()} - Web Request`,
          description: `Requested Slot: ${bookingData.date} at ${bookingData.time}`,
          firstName: bookingData.firstName,
          lastName: bookingData.lastName,
          email: bookingData.email,
          phone: bookingData.phone
        }),
      });

      if (response.ok) {
        nextStep(); 
      }
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden text-gray-900 dark:text-white">
        
        {/* Progress Bar */}
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

        <div className="p-8 min-h-[450px]">
          {/* STEP 1: SERVICE TYPE */}
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
            <div className="animate-in fade-in">
              <h2 className="text-2xl font-bold mb-4">Select a Time</h2>
              
              {/* 1. Weekly Horizontal Scroller */}
              <div className="flex gap-2 overflow-x-auto pb-4 mb-6 snap-x">
                {weekRange.map((dateObj) => (
                  <button
                    key={dateObj.date}
                    onClick={() => setSelectedDate(dateObj.date)}
                    className={`flex-shrink-0 w-24 p-3 rounded-xl border-2 transition-all snap-start ${
                      selectedDate === dateObj.date 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-100 hover:border-gray-300'
                    }`}
                  >
                    <span className="block text-xs uppercase text-gray-500">{dateObj.weekday}</span>
                    <span className="block text-lg font-bold">{dateObj.dayNum}</span>
                    <span className="block text-xs text-blue-600 font-medium">
                      {availability[dateObj.date]?.length || 0} slots
                    </span>
                  </button>
                ))}
              </div>

              {/* 2. Times for the selected day */}
              <div className="grid grid-cols-3 gap-3">
                {availability[selectedDate]?.map(slot => (
                  <button 
                    key={slot} 
                    onClick={() => { setBookingData({...bookingData, date: selectedDate, time: slot}); nextStep(); }}
                    className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT INFO */}
          {step === 3 && (
            <div className="animate-in fade-in">
              <h2 className="text-2xl font-bold mb-6">Your Details</h2>
              <div className="space-y-4 text-left">
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="First Name *" className="p-3 bg-gray-50 dark:bg-white/5 border rounded-lg w-full" onChange={(e) => setBookingData({...bookingData, firstName: e.target.value})} />
                  <input placeholder="Last Name *" className="p-3 bg-gray-50 dark:bg-white/5 border rounded-lg w-full" onChange={(e) => setBookingData({...bookingData, lastName: e.target.value})} />
                </div>
                <input type="email" placeholder="Email Address *" className="w-full p-3 bg-gray-50 dark:bg-white/5 border rounded-lg" onChange={(e) => setBookingData({...bookingData, email: e.target.value})} />
                <input type="tel" placeholder="Phone Number *" className="w-full p-3 bg-gray-50 dark:bg-white/5 border rounded-lg" onChange={(e) => setBookingData({...bookingData, phone: e.target.value})} />
                <button onClick={handleFinalSubmit} className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg mt-4">
                  Confirm Appointment Request
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS */}
          {step === 4 && (
            <div className="text-center py-10 animate-in zoom-in">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold mb-2">Request Sent!</h2>
              <p className="text-gray-500 leading-relaxed">
                SCP Refrigeration has received your request for <strong>{bookingData.time}</strong> on <strong>{bookingData.date}</strong>. 
                <br/>We will contact you shortly to confirm.
              </p>
              <button onClick={onClose} className="mt-8 px-10 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">Close</button>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {step < 4 && (
          <div className="p-6 bg-gray-50 dark:bg-white/5 flex justify-between">
            <button onClick={step === 1 ? onClose : prevStep} className="text-gray-500 hover:text-black dark:hover:text-white font-medium">
              {step === 1 ? 'Cancel' : 'Previous'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;