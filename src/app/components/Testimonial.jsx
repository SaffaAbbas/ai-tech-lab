"use client"; // Must be at the top for hooks like useRef

import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
import { useRef } from "react";

const reviews = [
  {
    text: "They are amazing at creative problem-solving.",
    author: "Sr Machine Learning Engineer",
    company: "Google",
    verified: true,
  },
  {
    text: "Their dedication to our success set them apart.",
    author: "Multimedia Journalist",
    company: "ABC10 News",
    verified: true,
  },
  {
    text: "They were reliable, transparent, and always accessible, fostering a reassuring and...",
    author: "Sr. Data Scientist",
    company: "Quantum Metric",
    verified: false,
  },
  {
    text: "They kept us informed with regular updates, maintained open communication, and...",
    author: "Asst Admin",
    company: "Rockport Healthcare Administrative Services",
    verified: true,
    },
  {
    text: "They are amazing at creative problem-solving.",
    author: "Sr Machine Learning Engineer",
    company: "Google",
    verified: true,
  },
  {
    text: "Their dedication to our success set them apart.",
    author: "Multimedia Journalist",
    company: "ABC10 News",
    verified: true,
  },
  {
    text: "They were reliable, transparent, and always accessible, fostering a reassuring and...",
    author: "Sr. Data Scientist",
    company: "Quantum Metric",
    verified: false,
  },
  {
    text: "They kept us informed with regular updates, maintained open communication, and...",
    author: "Asst Admin",
    company: "Rockport Healthcare Administrative Services",
    verified: true,
  },
];

export default function Testimonials() {
  const carouselRef = useRef(null);

 const SCROLL_AMOUNT = 380;

const scrollRight = () => {
  const slider = carouselRef.current;
  if (!slider) return;

  const maxScroll = slider.scrollWidth - slider.clientWidth;

  if (slider.scrollLeft >= maxScroll - 10) {
    // end → jump to start
    slider.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  }
};

const scrollLeft = () => {
  const slider = carouselRef.current;
  if (!slider) return;

  if (slider.scrollLeft <= 10) {
    // start → jump to end
    slider.scrollTo({
      left: slider.scrollWidth,
      behavior: "smooth",
    });
  } else {
    slider.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  }
};


  return (
    <section className="bg-gray-50 py-10">
      {/* Header */}
      <div className="w-full bg-[#C4D1F86B] py-5 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-center px-4">
          What people are saying about{" "}
          <span className="text-blue-800">GenAI.Labs</span>
        </h2>
      </div>

      {/* Reviews Header */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 md:gap-0">
        <div className="flex items-center gap-4 flex-wrap -ml-12">
          <h3 className="text-lg font-semibold">GenAI.Labs USA Reviews</h3>
          <div className="flex items-center gap-1 text-blue-800">
            <span className="font-semibold text-sm md:text-base">5.0</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" />
            ))}
            <span className="text-xs md:text-sm text-gray-500 ml-1">23 reviews</span>
          </div>
        </div>

        <span className="text-sm md:text-base text-gray-500 mt-2 md:mt-0 -mr-12">
          Powered by <b>Clutch</b>
        </span>
      </div>

      {/* Carousel */}
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Left Arrow */}
      <button
  onClick={scrollLeft}
  className="hidden md:flex absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 bg-transparent p-2 z-10 hover:scale-110 transition">
  <ChevronLeft size={32} className="text-gray-700" />
</button>



        {/* Cards */}
        <div
          ref={carouselRef}
         className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"

        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-md shadow-sm p-4 flex-shrink-0 w-[190px] md:w-[210px] lg:w-[230px] min-h-[160px] md:min-h-[160px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-blue-800 mb-3">
                  <span className="font-semibold text-sm md:text-base">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm md:text-base mb-6">
                  “{review.text}”
                </p>
              </div>

              <div>
                <p className="text-sm md:text-base font-medium text-gray-900">
                  {review.author}
                </p>
                <p className="text-xs md:text-sm text-gray-500 mb-3">
                  {review.company}
                </p>

                {review.verified && (
                  <div className="flex items-center gap-1 text-green-600 text-xs md:text-sm">
                    <CheckCircle size={14} />
                    Verified Review
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
       <button
  onClick={scrollRight}
  className="hidden md:flex absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 bg-transparent p-2 z-10 hover:scale-110 transition"
>
  <ChevronRight size={32} className="text-gray-700" />
</button>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
        <span className="w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
    </section>
  );
}
