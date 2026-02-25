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
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      {/* TOP CONTACT BAR */}
      <div className="bg-indigo-400 text-white">
        <div className="max-w-5xl mx-auto px-6 py-1.5 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@techoriginators.com"
              className="flex items-center gap-1.5 hover:text-indigo-200 transition"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@techoriginators.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-1.5 hover:text-indigo-200 transition"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (+92) 331 4480699
            </a>
          </div>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="hover:text-indigo-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.56 9.88v-6.99h-2.1V12h2.1V9.8c0-2.07 1.23-3.22 3.11-3.22.9 0 1.84.16 1.84.16v2.03h-1.04c-1.02 0-1.34.64-1.34 1.29V12h2.29l-.37 2.89h-1.92v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className="hover:text-indigo-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.45 20.45h-3.56v-5.59c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.68H9.35V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.35 4.24 5.41v6.33zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="hover:text-indigo-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.8A3.95 3.95 0 003.8 7.75v8.5a3.95 3.95 0 003.95 3.95h8.5a3.95 3.95 0 003.95-3.95v-8.5a3.95 3.95 0 00-3.95-3.95h-8.5zM17.5 6.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
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
              type="button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`text-sm font-medium hover:text-[#3C5CCC] transition ${
                pathname.startsWith("/services")
                  ? "text-[#3C5CCC]"
                  : "text-gray-700"
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
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-gray-700 hover:text-[#3C5CCC]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
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
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full text-left py-3 text-sm font-medium hover:text-[#3C5CCC] transition flex items-center justify-between ${
                  pathname.startsWith("/services")
                    ? "text-[#3C5CCC]"
                    : "text-gray-700"
                }`}
              >
                Our Services
                <span className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}>
                  v
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