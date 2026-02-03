export default function AIHero() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Is It Time to <br />
            <span className="text-blue-800">Leverage AI Like GPT?</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
            We empowered one of the world's largest enterprise software companies
            to make smarter, faster customer support decisions by building them a
            real time AI-chatbot that leveraged the power of their historical
            customer data.
          </p>

          <p className="mt-4 font-semibold text-gray-800">
            Looking to leverage large language models in your application?
          </p>

          <button className="mt-8 inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition">
            Read More →
          </button>
        </div>

        {/* RIGHT IMAGE + FLOATING STATS */}
        <div className="relative">
          <img
            src="/chatgpt.png"   // replace with your image path
            alt="AI Laptop"
            className="rounded-2xl shadow-xl w-full"
          />

          {/* STAT CARD 1 */}
        {/* STAT CARD 1 */}
<div className="
  absolute -bottom-10 left-4
  sm:-bottom-16 sm:left-10
  bg-white rounded-lg sm:rounded-xl
  shadow-lg
  px-4 py-3 sm:px-8 sm:py-6
  text-center
  w-32 sm:w-44
">
  <h3 className="text-xl sm:text-3xl font-bold text-blue-800">40%</h3>
  <p className="text-gray-600 mt-1 text-xs sm:text-sm">
    Faster support response time
  </p>
</div>

{/* STAT CARD 2 */}
<div className="
  absolute -bottom-10 right-4
  sm:-bottom-16 sm:right-10
  bg-white rounded-lg sm:rounded-xl
  shadow-lg
  px-4 py-3 sm:px-8 sm:py-6
  text-center
  w-32 sm:w-44
">
  <h3 className="text-xl sm:text-3xl font-bold text-blue-800">2X</h3>
  <p className="text-gray-600 mt-1 text-xs sm:text-sm">
    Case volume handled per day
  </p>
</div>

        </div>

      </div>
    </section>
  );
}
