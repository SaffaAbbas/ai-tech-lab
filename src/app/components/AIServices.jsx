export default function AIServices() {
  return (
    <>
      {/* MAIN SECTION */}
      <section className="relative bg-[#EEF1FA] py-10 pb-40 overflow-visible">
        
        {/* dotted decorations */}
        <div className="absolute right-16 top-16 grid grid-cols-4 gap-6">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1 h-1 bg-black rounded-full" />
          ))}
        </div>

        <div className="absolute left-16 bottom-16 grid grid-cols-4 gap-6">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1 h-1 bg-black rounded-full" />
          ))}
        </div>

        {/* container */}
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Our Services in
          </h2>
          <h3 className="text-3xl font-semibold text-blue-800 mt-1">
            Artificial Intelligence
          </h3>
        </div>

        {/* OVERLAPPING cards */}
        <div className=" absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 w-full max-w-5xl px-6 z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="bg-white rounded-2xl  p-8 text-left hover:scale-105 transition shadow-[0_0_30px_rgba(0,0,0,0.15)]">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                AI
              </div>
              <h4 className="text-lg font-semibold mb-2">
                AI-Powered App and Web Development
              </h4>
              <p className="text-gray-600">
                We build intelligent digital products with AI at the core.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-left hover:scale-105 transition shadow-[0_0_30px_rgba(0,0,0,0.15)]">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                🧠
              </div>
              <h4 className="text-lg font-semibold mb-2">
                Full-Service Machine Learning Product Development
              </h4>
              <p className="text-gray-600">
                From ideation to deployment, production-ready ML solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SPACER (VERY IMPORTANT) */}
    <div className="h-80 md:h-40"></div>

      {/* NORMAL cards BELOW */}
      <section className="bg-white ">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

           <div className="bg-white rounded-2xl p-8 text-left hover:scale-105 transition shadow-[0_0_30px_rgba(0,0,0,0.15)]">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              ⚙️
            </div>
            <h4 className="text-lg font-semibold mb-2">
              AI Infrastructure & MLOps
            </h4>
            <p className="text-gray-600">
              We design scalable AI infrastructure and MLOps pipelines.Full-Service Machine Learning Product Development
            </p>
          </div>

         <div className="bg-white rounded-2xl p-8 text-left hover:scale-105 transition shadow-[0_0_30px_rgba(0,0,0,0.15)]">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              📊
            </div>
            <h4 className="text-lg font-semibold mb-2">
              Data Strategy & Analytics
            </h4>
            <p className="text-gray-600">
              Turn raw data into insights with AI-driven analytics.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
