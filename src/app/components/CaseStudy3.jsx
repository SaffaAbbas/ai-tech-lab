'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CaseStudy3() {
  const router = useRouter();

  return (
    <div className="min-h-screen  bg-white ">
      {/* Hero Header Section - Updated Design */}
      <div className="bg-[#EEF1FA] py-16">
        <div className="max-w-5xl mx-auto px-4">       
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                AI-Powered Chatbot{' '}
                <span className="text-blue-600">Transforms Support for Enterprise Software,</span>
                {' '}Boosting Efficiency and Customer Satisfaction
              </h1>
              
              <div className="space-y-4">
                <div>
                  <span className="text-blue-600 font-semibold text-lg">Category:</span>
                  <p className="text-gray-700 mt-1">
                    Generative AI, IT Services, Customer Support, Data Analytics
                  </p>
                </div>
                
                <div>
                  <span className="text-blue-600 font-semibold text-lg">Services:</span>
                  <p className="text-gray-700 mt-1">
                   Product Development, AI Chatbot Development,Workflow Automation, LLM intergration, Big Data Processing
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-full lg:w-1/2 max-w-xl">
              <div className="relative">
                {/* Laptop Frame */}
                <div className="bg-black rounded-t-2xl p-2 shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="bg-gray-900 rounded-t-xl p-3">
                    {/* Screen Content */}
                    <div className="bg-black rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images.jfif" 
                        alt="UltraLinQ Cardio.ai"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-2xl"></div>
                </div>
                {/* Laptop Shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-2xl rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">5,000,000+</div>
              <div className="text-sm opacity-90">Echocardiograms analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.2%</div>
              <div className="text-sm opacity-90">Accuracy in Analysis</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Reduction in Analysis time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">80%</div>
              <div className="text-sm opacity-90">Enhanced diagnostic confidence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
          <p className="text-gray-700 mb-4">
           A leading enterprise software company, faced the challenge of improving the efficiency of their support engineers by streamlining access to real-time client data. Engineers needed to quickly diagnose whether client systems were experiencing downtime, slowness, or other performance issues. The company sought an innovative solution to reduce troubleshooting times and enhance customer support through automation and real-time insights
          </p>        
         <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Implementing a powerful language model to handle natural language queries</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Processing and interpreting complex queries from large datasets in real time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">On-demand querying of large, complex client data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Seamless integration with existing enterprise systems</span>
            </li>
          </ul>
        </div>

        {/* Solution Section */}
        <div className="bg-[#EEF1FA] rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
          <p className="text-gray-700 mb-6">
            We managed the development of a cutting-edge AI-powered chatbot designed to provide real-time answers to support engineers' queries about client system performance. This solution enabled instant access to critical data, allowing engineers to troubleshoot faster and more effectively, resulting in improved customer satisfaction and reduced downtime.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Instant insights into client system status and performance issues</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Automated data retrieval, reducing manual effort</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Seamless integration with big data systems for live reporting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Easy-to-use interface for both technical and non-technical users</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Related Case Studies - FIXED */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Related Case Studies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Related Study 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
             <div className="bg-teal-700 h-48 flex items-center justify-center">
                <img src="/rayban.jpg" alt="Chatbot" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3">
                  Generative AI Supercharges Ray-Ban&apos;s Amazon Operations, Boosting Sales and Slashing Ad Costs
                </h3>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="mb-2">
                    <span className="font-semibold">Category: </span>
                    Generative AI, E-commerce, Customer Engagement
                  </div>
                  <div>
                    <span className="font-semibold">Services: </span>
                    Listing and Ads Model Development, PPC Optimization
                  </div>
                </div>
                <button 
                  onClick={() => router.push('/blog2')}
                  className="text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                >
                  Read More →
                </button>
              </div>
            </div>

            {/* Related Study 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-teal-700 h-48 flex items-center justify-center">
                <img src="/icardio.ai.logo.png" alt="Chatbot" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3">
                 AI-Driven Computer Vision Transforms Echocardiogram Analysis for Icardio.AI, Enhancing Precision and Speed
                </h3>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="mb-2">
                    <span className="font-semibold">Category: </span>
                   Computer Vision, AI in Healthcare, Medical Imaging
                  </div>
                  <div>
                    <span className="font-semibold">Services: </span>
                    AI Model Development, Medical Image Processing, Workflow Automation, Machine Learning Integration
                  </div>
                </div>
                <button 
                  onClick={() => router.push('/blog1')}
                  className="text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all"
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}