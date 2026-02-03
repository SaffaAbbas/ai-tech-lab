'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CaseStudy2() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Header Section - Updated Design */}
      <div className="bg-[#EEF1FA] py-16">
        <div className="max-w-5xl mx-auto px-4">       
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
               Generative AI Supercharges Ray-Ban's{' '}
                <span className="text-blue-600">Amazon Operations, Boosting Sales and</span>
                {' '}Slashing Ad Costs
              </h1>
              
              <div className="space-y-4">
                <div>
                  <span className="text-blue-600 font-semibold text-lg">Category:</span>
                  <p className="text-gray-700 mt-1">
                    Generative AI, E-commerce, Customer Engagement, Digital Advertising
                  </p>
                </div>
                
                <div>
                  <span className="text-blue-600 font-semibold text-lg">Services:</span>
                  <p className="text-gray-700 mt-1">
                    Large Language Model Deployment, AI Integration, PPC Optimization, Customer Interaction Automation
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
                        src="/rayban.jpg" 
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
              <div className="text-3xl font-bold mb-2">2X</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30.2%</div>
              <div className="text-sm opacity-90">PPC Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">7%</div>
              <div className="text-sm opacity-90">Lift in Sales</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">80%</div>
              <div className="text-sm opacity-90">Reduction in Time Spent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
            <p className="text-gray-700 mb-4">
            Ray-Ban, a world-renowned leader in the sunglasses industry, sought to elevate their Amazon presence and drive better results in customer interactions and advertising performance. With increasing competition in e-commerce, Ray-Ban needed a solution that could streamline customer engagement, optimize their pay-per-click (PPC) advertising strategy, and boost sales while cutting costs. The company was looking for innovative ways to harness the power of AI to achieve these goals.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Inefficient customer interaction process on Amazon</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">High PPC costs without maximized ad performance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Need for improved sales and customer engagement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Desire to integrate advanced AI for scalable solutions</span>
            </li>
          </ul>
        </div>

        {/* Solution Section */}
        <div className="bg-[#EEF1FA] rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
          <p className="text-gray-700 mb-6">
            Our team partnered with Ray-Ban to implement advanced Generative AI models tailored for their e-commerce operations. The AI-driven solution streamlined customer interactions by automating responses, handling inquiries in real time, and enhancing the overall shopping experience on Amazon. Additionally, we revamped their PPC strategy by leveraging AI models to analyze ad performance and optimize bidding, resulting in reduced costs and increased ad efficiency.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">AI-powered customer interaction to handle inquiries and provide real-time responses</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Enhanced PPC strategy leveraging Generative AI to optimize ad targeting and bidding</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Seamless integration with Ray-Ban’s existing Amazon operati</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Automated workflow for continuous improvement of engagement and ad performance</span>
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
                <img src="/icardio.ai.logo.png" alt="Chatbot" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3">
                  AI-Driven Computer Vision Transforms Echocardiogram Analysis for Icardio.AI, Enhancing Precision and Speed
                </h3>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="mb-2">
                    <span className="font-semibold text-blue-800">Category: </span>
                    Computer Vision, AI in Healthcare, Medical Imaging
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">Services: </span>
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

            {/* Related Study 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-teal-700 h-48 flex items-center justify-center">
                <img src="/images.jfif" alt="Chatbot" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3">
                  AI-Powered Chatbot Transforms Real-Time Support for Enterprise Software, Boosting Efficiency and Customer Satisfaction
                </h3>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="mb-2">
                    <span className="font-semibold text-blue-800">Category: </span>
                   Generative AI, IT Services, Customer Support, Data Analytics
                  </div>
                  <div>
                    <span className="font-semibold text-blue-800">Services: </span>
                    Product Development, AI Chatbot Development,Workflow Automation, Large Language 
                  </div>
                </div>
                <button 
                  onClick={() => router.push('/blog3')}
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