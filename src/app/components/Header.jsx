"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: "Machine Learning Product Development", href: "/service1" },
    { name: "Large-Language-Model & GPT Integration", href: "/service2" },
    { name: "AI-Powered App and Web Development", href: "/service3" },
    { name: "AI-Driven Product Discovery", href: "/service4" },
  ];

  let closeTimeout;
  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png" 
            alt="GenAI Labs Logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
          <span className="text-[24px] md:text-[30px] font-bold text-black">
            TechOriginators
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`text-sm font-medium hover:text-[#3C5CCC] transition ${
              pathname === "/" ? "text-[#3C5CCC]" : "text-gray-700"
            }`}
          >
            Home
          </Link>

          {/* SERVICES DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`text-sm font-medium hover:text-[#3C5CCC] transition ${
                pathname.startsWith("/services") ? "text-[#3C5CCC]" : "text-gray-700"
              }`}
            >
              Our Services
            </button>

            {/* DROPDOWN MENU */}
            {isServicesOpen && (
              <div 
                className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block px-4 py-3 text-sm hover:bg-gray-50 transition ${
                      pathname === service.href 
                        ? "text-[#3C5CCC] font-medium bg-blue-50" 
                        : "text-gray-700"
                    }`}
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/process" 
            className={`text-sm font-medium hover:text-[#3C5CCC] transition ${
              pathname === "/process" ? "text-[#3C5CCC]" : "text-gray-700"
            }`}
          >
            Our Process
          </Link>
          
          <Link 
            href="/caseStudies" 
            className={`text-sm font-medium hover:text-[#3C5CCC] transition ${
              pathname === "/caseStudies" ? "text-[#3C5CCC]" : "text-gray-700"
            }`}
          >
            Case Studies
          </Link>
          
          <Link 
            href="/contactUs" 
            className={`text-sm font-medium hover:text-[#3C5CCC] transition ${
              pathname === "/contactUs" ? "text-[#3C5CCC]" : "text-gray-700"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA BUTTON (Desktop) */}
        <Link
          href="/#contact-section"
          className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-8 py-3 rounded-full transition"
        >
          Book A Call
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#3C5CCC]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            // Close Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-6 py-4 space-y-1">
            <Link 
              href="/" 
              className={`block py-3 text-sm font-medium hover:text-[#3C5CCC] transition ${
                pathname === "/" ? "text-[#3C5CCC]" : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full text-left py-3 text-sm font-medium hover:text-[#3C5CCC] transition flex items-center justify-between ${
                  pathname.startsWith("/services") ? "text-[#3C5CCC]" : "text-gray-700"
                }`}
              >
                Our Services
                <span className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block py-2 text-sm hover:text-[#3C5CCC] transition ${
                        pathname === service.href 
                          ? "text-[#3C5CCC] font-medium" 
                          : "text-gray-600"
                      }`}
                      onClick={() => {
                        setIsServicesOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/process" 
              className={`block py-3 text-sm font-medium hover:text-[#3C5CCC] transition ${
                pathname === "/process" ? "text-[#3C5CCC]" : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Process
            </Link>
            
            <Link 
              href="/caseStudies" 
              className={`block py-3 text-sm font-medium hover:text-[#3C5CCC] transition ${
                pathname === "/caseStudies" ? "text-[#3C5CCC]" : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            
            <Link 
              href="/contactUs" 
              className={`block py-3 text-sm font-medium hover:text-[#3C5CCC] transition ${
                pathname === "/contactUs" ? "text-[#3C5CCC]" : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* MOBILE CTA BUTTON */}
            <Link
              href="/#contact-section"
              className="block mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-8 py-3 rounded-full transition text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book A Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}