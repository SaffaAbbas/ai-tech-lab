'use client'
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AIServicesSection = () => {
    const router = useRouter();
  const services = [
    {
      id: 1,
      image: "/icardio.ai.logo.png",
      logo: null,
      title: "AI-Driven Computer Vision Transforms Echocardiogram Analysis for Biotech, Enhancing Precision and Speed",
      category: "Generative AI",
      services: "AI Model Development, Medical Image Processing, Workflow Automation, Machine Learning Diagnostic",
      link: "/blog1"
    },
    {
      id: 2,
      image: "/rayban.jpg",
      logo: null,
      title: "Generative AI Elevates Ray-Ban's Amazon Operations, Boosting Sales and Slashing Ad Costs",
      category: "Generative AI, E-commerce, Customer Engagement, Digital Marketing",
      services: "Listing and Ads Model Development, AI-Powered, PPC Optimization, E-commerce Production Automation",
      link: "/blog2"
    },
    {
      id: 3,
      image: "/images.jfif",
      logo: null,
      title: "AI-Powered Chatbot Transforms Real-Time Support for Enterprise Software, Boosting Efficiency and Customer Satisfaction",
      category: "Generative AI, IT Services, Customer Support, Data Analytics",
      services: "Product Development, AI Chatbot Development/Workflow Automation, Large Language Model Integration, Big Data Processing",
      link: "/blog2"
    }
  ];

  const handleReadMore = (link) => {
    router.push(link);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="space-y-6">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition shadow-[0_0_30px_rgba(0,0,0,0.15)]"
          >
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-80">
                <div className="relative bg-gray-900 rounded-lg overflow-hidden h-48 md:h-full flex items-center justify-center">
                  {service.logo ? (
                    <img 
                      src={service.logo} 
                      alt="Company Logo" 
                      className="max-w-full max-h-full object-contain p-4"
                    />
                  ) : (
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-bold text-gray-900">Category: </span>
                      <span className="text-sm text-gray-600">{service.category}</span>
                    </div>
                    
                    <div>
                      <span className="text-sm font-bold text-gray-900">Services: </span>
                      <span className="text-sm text-gray-600">{service.services}</span>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-6">
                  <button
                    onClick={() => handleReadMore(service.link)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIServicesSection;