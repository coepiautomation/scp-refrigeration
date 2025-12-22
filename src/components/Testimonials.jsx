import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: "Dori Hernandez", text: "I had a wonderful experience using SCP Refrigeration today. We had an unexpected HVAC issue...", date: "1 year ago" },
  { name: "Lee Holtzman", text: "I have been selling Real Estate for 42 years and have used many HVAC companies. I saw a review...", date: "1 year ago" },
  { name: "Sam Ahn", text: "Well, it's another hot TX summer and we have 3 systems and one really old unit...", date: "1 year ago" },
  { name: "Brandon Wornick", text: "We love frank! Not only is he fast, reliable, and efficient. He is also honest!", date: "1 year ago" },
  { name: "Windle White", text: "Frank got our AC going during the hot part of the summer. He came on short notice.", date: "2 years ago" },
];

const TestimonialCard = ({ review }) => (
  <div className="min-w-[350px] bg-white p-6 rounded-xl shadow-lg border border-gray-100 mx-4">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-10 h-10 bg-hvac-blue rounded-full flex items-center justify-center text-white font-bold">
        {review.name[0]}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 leading-none">{review.name}</h4>
        <span className="text-xs text-gray-500">{review.date}</span>
      </div>
      <img 
  src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" 
  className="w-5 h-5 ml-auto opacity-80" 
  alt="Google" 
/>
    </div>
    <div className="flex text-yellow-400 mb-3">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-gray-600 text-sm line-clamp-4 italic">"{review.text}"</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-hvac-blue overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Hear From Our Clients</h2>
        <p className="opacity-80">Trusted by homeowners and businesses across DFW</p>
      </div>

      {/* INFINITE SCROLL CONTAINER */}
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ x: [0, -1750] }} // Adjust based on (card width + margin) * count
          transition={{ 
            x: { repeat: Infinity, repeatType: "loop", duration: 120, ease: "linear" } 
          }}
        >
          {/* Render reviews twice for seamless loop */}
          {[...reviews, ...reviews].map((review, idx) => (
            <TestimonialCard key={idx} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;