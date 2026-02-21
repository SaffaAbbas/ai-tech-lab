'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      className="relative h-[65vh] sm:h-[65vh] md:h-[75vh] w-full overflow-hidden"
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2024/01/25/198110-906384648_large.mp4" type="video/mp4" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 sm:px-12 md:px-16 lg:px-50">
        <div className="max-w-4xl">
          <h2
            className={`text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-3 sm:mb-4 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            We do one thing.
          </h2>

          <h1
            className={`text-blue-800 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Build AI.
          </h1>

          <p
            className={`text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mb-6 sm:mb-8 leading-relaxed transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            We've collected the world's top AI experts to help forward-thinking companies transform digital <strong>visions into value.</strong>
          </p>

          <Link
            href="/contactUs"
            className={`inline-block bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            Talk to an AI Expert &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
