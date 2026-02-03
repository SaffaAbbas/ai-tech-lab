// export default function WhatWeOffer({
//   services = [
//     {
//       title: "Strategy and Consultation",
//       desc:
//         "We start by understanding your vision and the challenges you aim to solve. Our strategy sessions are designed to translate your business goals into AI solutions. We'll help you assess feasibility, identify key performance metrics, and outline a development roadmap.",
//       img: "/consult.webp",
//     },
//     {
//       title: "Design and Prototyping",
//       desc:
//         "A great machine learning product starts with a solid design. We use advanced tools to build prototypes that demonstrate how the AI will function within your business ecosystem. This phase includes defining data pipelines, model architecture, and user interfaces.",
//       img: "/design.jfif",
//     },
//     {
//       title: "Development and Testing",
//       desc:
//         "Our team handles the full-stack development, ensuring seamless integration between machine learning models and your existing platforms. We rigorously test every model to ensure it's accurate, reliable, and scalable, delivering results you can trust.",
//       img: "development.webp",
//     },
//     {
//       title: "Deployment and Scaling",
//       desc:
//         "Once the product is built, we handle its deployment, ensuring that it integrates smoothly into your operations. Our expertise in cloud-based infrastructure ensures your AI solution can scale as your business grows.",
//       img: "/scaling.webp",
//     },
//     {
//       title: "Ongoing Support and Maintenance",
//       desc:
//         "AI products are dynamic and require long-term optimization. We provide continuous monitoring, maintenance, and updates to keep your product running at peak performance. Your success is our success.",
//       img: "support.webp",
//     },
//   ],
//   heading = "What We",
//   highlightedText = "Offer",
//   logo = "/logo.png",
// }) {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-5xl mx-auto px-4">

//         {/* Logo + Heading */}
//         <div className="flex flex-col items-center mb-16">
//           <div className="w-16 h-16 mb-4">
//             <img
//               src={logo}
//               alt="Section Logo"
//               className="w-full h-full object-contain"
//             />
//           </div>

//           <h2 className="text-4xl font-bold text-center">
//             {heading} <span className="text-blue-800">{highlightedText}</span>
//           </h2>
//         </div>

//         {/* Services */}
//         <div className="space-y-0">
//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="
//                 bg-white
//                 flex items-center gap-6
//                 py-8 px-8
//                 transition-all duration-300
//                 hover:bg-blue-800
//                 group
//                 border-b border-gray-100
//                 last:border-b-0
//               "
//               style={{ minHeight: "140px" }}
//             >
//               {/* Image Container */}
//               <div className="flex-shrink-0">
//                 <div
//                   className="w-45 h-24 overflow-hidden bg-white shadow-sm"
//                   style={{ borderRadius: "60px" }}
//                 >
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="flex-1 flex items-center gap-8">
//                 {/* Heading */}
//                 <div className="px-8 py-8 flex items-center w-80 flex-shrink-0">
//                   <h3 className="text-xl font-bold text-black-600 group-hover:text-white transition-colors leading-snug">
//                     {item.title}
//                   </h3>
//                 </div>

//                 {/* Description */}
//                 <p className="text-sm text-gray-600 group-hover:text-white transition-colors leading-relaxed flex-1">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
export default function WhatWeOffer({
  services = [
    {
      title: "Strategy and Consultation",
      desc:
        "We start by understanding your vision and the challenges you aim to solve. Our strategy sessions are designed to translate your business goals into AI solutions. We'll help you assess feasibility, identify key performance metrics, and outline a development roadmap.",
      img: "/consult.webp",
    },
    {
      title: "Design and Prototyping",
      desc:
        "A great machine learning product starts with a solid design. We use advanced tools to build prototypes that demonstrate how the AI will function within your business ecosystem. This phase includes defining data pipelines, model architecture, and user interfaces.",
      img: "/design.jfif",
    },
    {
      title: "Development and Testing",
      desc:
        "Our team handles the full-stack development, ensuring seamless integration between machine learning models and your existing platforms. We rigorously test every model to ensure it's accurate, reliable, and scalable, delivering results you can trust.",
      img: "development.webp",
    },
    {
      title: "Deployment and Scaling",
      desc:
        "Once the product is built, we handle its deployment, ensuring that it integrates smoothly into your operations. Our expertise in cloud-based infrastructure ensures your AI solution can scale as your business grows.",
      img: "/scaling.webp",
    },
    {
      title: "Ongoing Support and Maintenance",
      desc:
        "AI products are dynamic and require long-term optimization. We provide continuous monitoring, maintenance, and updates to keep your product running at peak performance. Your success is our success.",
      img: "support.webp",
    },
  ],
  heading = "What We",
  highlightedText = "Offer",
  logo = "/logo.png",
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-3 sm:px-4">

        {/* Logo + Heading */}
        <div className="flex flex-col items-center mb-10 sm:mb-16">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4">
            <img
              src={logo}
              alt="Section Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-center">
            {heading} <span className="text-blue-800">{highlightedText}</span>
          </h2>
        </div>

        {/* Services */}
        <div className="space-y-0">
          {services.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6
                py-6 sm:py-8 px-4 sm:px-8
                transition-all duration-300
                hover:bg-blue-800
                group
                border-b border-gray-100
                last:border-b-0
              "
              style={{ minHeight: "auto" }}
            >
              {/* Image */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div
                  className="w-32 sm:w-45 h-20 sm:h-24 overflow-hidden bg-white shadow-sm"
                  style={{ borderRadius: "60px" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8 text-center sm:text-left">
                {/* Title */}
                <div className="px-0 sm:px-8 py-2 sm:py-8 flex items-center w-full sm:w-80 flex-shrink-0 justify-center sm:justify-start">
                  <h3 className="text-base sm:text-xl font-bold text-black-600 group-hover:text-white transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Desc */}
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white transition-colors leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
