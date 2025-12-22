import React, { useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    { id: 1, category: 'commercial', title: 'Walk-In Cooler Install', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800' },
    { id: 2, category: 'residential', title: 'Standard AC Tune-up', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800' },
    { id: 3, category: 'commercial', title: 'Rooftop Package Unit', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800' },
    { id: 4, category: 'residential', title: 'Modern Mini-Split Setup', image: 'src/assets/minisplitroom.png' },
    { id: 5, category: 'commercial', title: 'Kitchen Exhaust System', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' },
    { id: 6, category: 'residential', title: 'Furnace Replacement', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <section className="bg-hvac-blue py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Project Gallery</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            A look at our recent HVAC and refrigeration projects across the Greater DFW area.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'residential', 'commercial'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold capitalize transition-all ${
                filter === cat 
                ? 'bg-hvac-red text-white shadow-lg' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MASONRY-STYLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100 aspect-video"
              onClick={() => setSelectedImg(item)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div className="flex justify-between items-center text-white">
                  <div>
                    <span className="text-xs uppercase tracking-widest font-bold text-hvac-red mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <Maximize2 size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX / MODAL */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button 
            className="absolute top-8 right-8 text-white hover:text-hvac-red transition"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} />
          </button>
          <div className="max-w-5xl w-full">
            <img 
              src={selectedImg.image} 
              alt={selectedImg.title} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold">{selectedImg.title}</h3>
              <p className="opacity-70 capitalize">{selectedImg.category} Project</p>
            </div>
          </div>
        </div>
      )}

      {/* CALL TO ACTION */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <Camera className="w-12 h-12 mx-auto mb-6 text-hvac-blue opacity-20" />
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Have a specific project in mind?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We handle everything from standard home repairs to massive custom 
            commercial installations. Let's get your project started.
          </p>
          <a 
            href="/contact" 
            className="bg-hvac-blue text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg inline-block"
          >
            Get a Free Estimate
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;