export default function GenerativeAISection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center">
            
            <img
              src="/logo.png"
              alt="Generative AI"
              className="w-16 h-16 object-contain"
            />

          </div>
        </div>

        {/* Heading */}
       <h2 className="text-4xl md:text-4xl font-semibold mb-4">
  Looking to transform your business with
  <br />
  <span className="text-blue-800">Generative AI?</span>
</h2>


        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
          We partnered with a leading sunglass company to supercharge their amazon operations. Using advanced
          Generative AI models, we streamlined customer interactions and optimized their PPC strategy, driving
          real-time engagement and maximizing advertising performance.
        </p>

        {/* Sub-heading */}
        <p className="text-black font-semibold text-lg mb-8">
          Looking to leverage large language models in your application?
        </p>

        {/* CTA Button */}
        <button className="bg-blue-800 text-white px-14 py-2 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-lg mb-16">
          Learn How
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="text-3xl font-semibold text-blue-800 mb-2">2x</div>
            <div className="text-gray-600 text-base">Customer Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-blue-800 mb-2">30%</div>
            <div className="text-gray-600 text-base">Reduction in PPC Cost</div>
          </div>
          <div>
            <div className="text-3xl font-semibold text-blue-800 mb-2">7%</div>
            <div className="text-gray-600 text-base">Lift in Sales</div>
          </div>
        </div>
      </div>
    </section>
  );
}