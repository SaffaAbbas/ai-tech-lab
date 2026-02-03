export default function AIPrecision() {
  return (
    <section className="bg-[#EEF1FA] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT IMAGE CARD */}
        <div className="relative">

          <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl p-32 sm:p-40">
            <video
              className="absolute inset-0 w-full h-full rounded-3xl object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* overlay points */}
            <div className="absolute top-[35%] left-[48%] bg-cyan-400 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs shadow">
              ●
            </div>
            <div className="absolute top-[60%] left-[38%] bg-cyan-400 w-6 h-6 rounded-full shadow">
              ●
            </div>
          </div>

          {/* STATS — MOBILE STACK / DESKTOP OVERLAY */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:mt-0">
            
            <div className="lg:absolute lg:-bottom-10 lg:left-6 bg-white rounded-xl shadow-lg px-6 py-5 text-center w-full sm:w-56">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800">
                5,000,000+
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Frames processed
              </p>
            </div>

            <div className="lg:absolute lg:-bottom-10 lg:right-6 bg-white rounded-xl shadow-lg px-6 py-5 text-center w-full sm:w-44">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-800">
                99+%
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Accuracy
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Ready to Unlock <br />
            <span className="text-blue-800">AI-Driven Precision?</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
            We partnered with a leading biotech company to revolutionize their
            echocardiogram analysis process using advanced computer vision
            technology. Our solution automatically labels, classifies, and
            grades echocardiograms in a fraction of the time significantly
            reducing manual workload and enhancing diagnostic precision.
          </p>

          <p className="mt-5 font-semibold text-gray-800">
            Looking to build something groundbreaking?
          </p>

          <button className="mt-8 inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition">
            Find Out How →
          </button>
        </div>

      </div>
    </section>
  );
}
