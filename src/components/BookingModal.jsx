import React, { useState } from 'react';

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
              <h2 className="text-2xl font-bold mb-6">Service Preferences</h2>
              <div className="grid grid-cols-2 gap-4">
                <button onClick={() => { setBookingData({...bookingData, clientStatus: 'new'}); nextStep(); }} 
                  className="p-6 border-2 border-gray-100 dark:border-white/10 rounded-xl hover:border-blue-500 transition-all text-left">
                  <span className="block font-bold">New Client</span>
                  <span className="text-sm text-gray-500">I haven't used you before</span>
                </button>
                <button onClick={() => { setBookingData({...bookingData, clientStatus: 'returning'}); nextStep(); }}
                  className="p-6 border-2 border-gray-100 dark:border-white/10 rounded-xl hover:border-blue-500 transition-all text-left">
                  <span className="block font-bold">Returning</span>
                  <span className="text-sm text-gray-500">I'm a regular customer</span>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in">
              <h2 className="text-2xl font-bold mb-6">Choose a Time</h2>
              <input type="date" className="w-full p-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg mb-4" 
                onChange={(e) => setBookingData({...bookingData, date: e.target.value})} />
              <div className="grid grid-cols-3 gap-3">
                {['8:00 AM', '10:00 AM', '1:00 PM', '3:00 PM'].map(t => (
                  <button key={t} onClick={() => { setBookingData({...bookingData, time: t}); nextStep(); }}
                    className="p-3 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in">
              <h2 className="text-2xl font-bold mb-6">Your Details</h2>
              <div className="space-y-4">
                <input placeholder="First Name" className="w-full p-3 bg-gray-50 dark:bg-white/5 border rounded-lg" onChange={(e) => setBookingData({...bookingData, firstName: e.target.value})} />
                <input placeholder="Last Name" className="w-full p-3 bg-gray-50 dark:bg-white/5 border rounded-lg" onChange={(e) => setBookingData({...bookingData, lastName: e.target.value})} />
                <button onClick={nextStep} className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold">Review & Book</button>
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