'use client';

import { useEffect, useState } from 'react';

export default function   BusinessSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
  <section className="relative bg-[#EEF1FA] pt-[30rem] md:pt-48 pb-16 px-4 mt-32">
      {/* Overlapping Images - Positioned absolutely to overlap top */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Sunglasses Image - Wider */}
          <div 
            className={`bg-white rounded-2xl overflow-hidden shadow-lg md:col-span-3 transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=300&fit=crop" 
              alt="Sunglasses"
              className="w-full h-70 object-cover"
            />
          </div>
          
          {/* Credit Card Image - Smaller */}
          <div 
            className={`bg-white rounded-2xl overflow-hidden shadow-lg md:col-span-2 transition-all duration-800 ease-out  ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
            }`}
          >
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop" 
              alt="Hand holding credit card"
              className="w-full h-70 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-4xl font-semibold text-center mb-12 mt-10">
          We Love What We Do
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-semibold text-blue-800 mb-2">6+</div>
            <div className="text-gray-600 text-sm">Years of Innovation</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-semibold text-blue-800 mb-2">100+</div>
            <div className="text-gray-600 text-sm">Models Deployed</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-semibold text-blue-800 mb-2">10+</div>
            <div className="text-gray-600 text-sm">Industries Transformed</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-semibold text-blue-800 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Availability</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-semibold text-blue-800 mb-2">98%</div>
            <div className="text-gray-600 text-sm">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}