'use client';

import { useEffect, useRef, useState } from 'react';

export default function CaseHero({
  badge = "Case Studies",
  heading = "We Love What We Do",
  description = "See how our tailored solutions drive real results, empowering businesses to excel and innovate."
}) {
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
      className="relative w-full min-h-[20vh] flex items-center justify-center bg-gradient-to-br from-gray-100 via-indigo-100 to-purple-100 py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Text Content */}
        <div 
          className={`space-y-6 text-center transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-2">
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              {badge}
            </p>

            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight mt-4">
              {heading}
            </h2>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="w-full h-full bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
