'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function CaseStudy1() {
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
                AI-Driven Computer Vision Transforms{' '}
                <span className="text-blue-600">Echocardiogram Analysis for Icardio.Ai,</span>
                {' '}Enhancing Precision and Speed
              </h1>
              
              <div className="space-y-4">
                <div>
                  <span className="text-blue-600 font-semibold text-lg">Category:</span>
                  <p className="text-gray-700 mt-1">
                    Computer Vision, AI in Healthcare, Medical Imaging
                  </p>
                </div>
                
                <div>
                  <span className="text-blue-600 font-semibold text-lg">Services:</span>
                  <p className="text-gray-700 mt-1">
                    AI Model Development, Medical Image Processing, Workflow Automation, Machine Learning Integration
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
                        src="/icardio.ai.logo.png" 
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
            LocalMx, a pioneering biotech company, sought a transformative solution to enhance the accuracy and efficiency of their 
            echocardiogram analysis. Traditional analysis methods involved manually identifying and grading echocardiograms at each stage of the 
            cardiac cycle, a process that was highly time-consuming and prone to human error.
          </p>
          <p className="text-gray-700 mb-6">
            The challenge was to develop an AI-driven solution that could accurately identify the cardiac phases in echocardiogram 
            frames, determine which frame corresponds to which phase, and automatically extract critical insights from the data in an automatic, 
            optimized straight way.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Time-intensive manual analysis processes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Increased workload for the reviews</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Inability to analyze large data amounts in real speed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Potential errors associated with traditional analysis</span>
            </li>
          </ul>
        </div>

        {/* Solution Section */}
        <div className="bg-[#EEF1FA] rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
          <p className="text-gray-700 mb-6">
            We have developed a cutting-edge Computer Vision model, AI to revolutionize the echocardiogram analysis process. 
            Our solution includes an advanced neural network that automatically identifies cardiac phases, classifies echocardiogram 
            frames with high accuracy, and significantly enhances the efficiency of the analysis workflow.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Automated labeling classification with grading of echocardiograms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">High-level databases of cardiac workflows enabling better integration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Seamless integration into existing medical imaging systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span className="text-gray-700">Real-time processing for fast and accurate data analysis results</span>
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
                <img src="/images.jfif" alt="Chatbot" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3">
                  AI-Powered Chatbot Transforms Real-Time Support for Enterprise Software
                </h3>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="mb-2">
                    <span className="font-semibold">Category: </span>
                    Generative AI, IT Services, Customer Support
                  </div>
                  <div>
                    <span className="font-semibold">Services: </span>
                    AI Chatbot Development, Workflow Automation
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