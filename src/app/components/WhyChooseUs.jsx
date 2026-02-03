"use client";

import { Sparkles, SlidersHorizontal, Users } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES */}
          <div className="relative flex gap-6">
            {/* Decorative lines */}
            <div className="absolute -top-6 -left-6">
              <div className="w-10 h-10 border-l-4 border-t-4 border-blue-500"></div>
            </div>

            {/* Image 1 */}
            <div className="w-1/2">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Team discussion"
                className="rounded-xl object-cover h-[360px] w-full"
              />
            </div>

            {/* Image 2 */}
            <div className="w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team working"
                className="rounded-xl object-cover h-[360px] w-full mt-10"
              />

              {/* Pink Accent */}
              <span className="absolute -bottom-6 -right-6 w-12 h-12  rounded-full"></span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Why <span className="text-blue-600">Choose</span> Us?
            </h2>

            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                  <Sparkles className="w-10 h-10 text-gray-800" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Proven Expertise in LLM Implementation
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From NLP-driven chatbots to workflow automation, we’ve implemented
                    solutions that transform interactions and streamline operations across industries.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                  <SlidersHorizontal className="w-10 h-10 text-gray-800" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Tailored Solutions for Maximum Impact
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    No two businesses are the same, and neither are our solutions.
                    We build AI products customized to your specific needs.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                  <Users className="w-10 h-10 text-gray-800" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Dedicated Team of AI Experts
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our team brings 30+ years of combined experience in AI, machine learning,
                    NLP, computer vision, and predictive modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
