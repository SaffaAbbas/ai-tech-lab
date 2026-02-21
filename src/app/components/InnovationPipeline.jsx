'use client';

import { useEffect, useRef, useState } from 'react';

export default function InnovationPipeline() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-gray-100 via-indigo-100 to-purple-100 py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div 
            className={`space-y-6 transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="space-y-2">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                Our Process
              </p>
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
                Our Proprietary Innovation Pipeline
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              At Tech Originators, innovation drives how we build, test, and deliver intelligent solutions. Our proprietary innovation pipeline ensures a methodical, risk-managed approach from discovery to product integration, with continuous validation to maximize efficiency and impact.
            </p>

            <p className="text-base font-medium text-gray-800">
              Here's how our innovation pipeline works across each stage of the development process:
            </p>
          </div>

          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-10">
              {/* Image 1 */}
              <div 
                className={`transition-all duration-1000 delay-200 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                
                          >
                              <div className="relative h-100  w-full lg:w-[130%] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                  <img
                                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                                      alt="Team collaboration"
                                      className="w-full h-full object-cover object-left"
                                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div 
                className={`transition-all duration-1000 delay-400 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
              >
                              <div className="relative h-100 w-4/5  ml-auto rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                  <img
                                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                                      alt="Team collaboration"
                                      className="w-full h-full object-cover object-right"
                                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="w-full h-full bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}