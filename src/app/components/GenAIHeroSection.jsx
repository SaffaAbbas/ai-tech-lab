'use client';

import Link from "next/link";

export default function GenAIHeroSection() {
  return (
      // <section className="relative h-[520px] w-full flex items-center overflow-hidden">
      <section className="relative h-[380px] md:h-[520px] w-full flex items-center overflow-hidden">

      <img
        src="https://media.istockphoto.com/id/1051617224/photo/hands-of-robot-and-human-touching-on-global-virtual-network-connection-future-interface.jpg?s=612x612&w=0&k=20&c=MltSzAl-x1twScgwuiStiQj0Cyuj3k_ruqWe7Sx0w9c="
        alt="AI Robot Hand"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
          {/* <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex justify-end pr-32"> */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex justify-center md:justify-end md:pr-32">

        {/* Card */}
              {/* <div className="bg-white/95 rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-[480px]"> */}
              <div className="bg-white/95 rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-full md:max-w-[480px]">

          
          <h1 className="text-2xl md:text-3xl font-semibold leading-snug mb-3">
            TechOriginators is Here, is your{" "}
            <span className="text-blue-800">Business Ready?</span>
          </h1>

         <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left">
            Generative A.I. will generate
            up to <span className="font-semibold">$4.4 Trillion</span> in value annually. 
            Accenture estimates that it could automate up to{" "}
            <span className="font-semibold">70%</span> of work activities, and 
            Oxford Economics predicts that{" "}
            <span className="font-semibold">90%</span> of US jobs will be disrupted by GenAI.
          </p>

          <Link href="/contactUs">
  <button className="bg-blue-800 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-medium text-sm flex items-center gap-2 shadow mx-auto md:mx-0">
    Let’s get started!
    <span className="text-lg">→</span>
  </button>
</Link>
        </div>
      </div>
    </section>
  );
}
