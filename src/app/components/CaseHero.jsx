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
      className="relative w-full min-h-[20vh] flex items-center justify-center bg-[#f0f2fa] py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="absolute top-6 left-6 w-14 h-14 border-4 border-indigo-400/70 rounded-full" />
      <div className="absolute bottom-10 left-12 w-8 h-8 bg-pink-500/60 rounded-full" />
      <div className="absolute top-1/2 left-4 w-5 h-5 bg-indigo-600/50 rounded-full" />

      <svg className="absolute top-4 left-10 w-8 h-8 text-indigo-500/65" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="4" y1="4" x2="20" y2="20" />
        <line x1="4" y1="10" x2="14" y2="20" />
      </svg>

      <svg className="absolute bottom-8 right-16 w-10 h-10 text-indigo-500/60" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 22,22 2,22" />
      </svg>

      <div className="absolute top-8 right-10 w-10 h-10 border-4 border-indigo-400/60 rounded-full" />
      <div className="absolute top-1/2 right-6 w-4 h-4 bg-rose-500/55 rounded-full" />

      <svg className="absolute bottom-12 left-1/4 w-6 h-6 text-indigo-500/50" viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="2" />
      </svg>

      <div className="absolute top-12 right-1/4 grid grid-cols-3 gap-1.5 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
        ))}
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
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

          {description && (
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
