'use client';

const logos = [
  "/gucci.png",
  "/bill.png",
  "/ucla.png",
  "/google.png",
  "/dreamers.png",
  "/allied.png",
  "/quantum.png",
];

export default function Slider({ title = "These Companies", highlight = "Trust Us", bgColor = "bg-white",heightClass = "py-10", }) {
  const displayLogos = logos.concat(logos);

  return (
    <section  className={`${bgColor} ${heightClass}  overflow-hidden`}>
      
      {/* HEADING */}
      <h2 className="text-center text-2xl font-semibold mb-10">
        {title} <span className="text-blue-800">{highlight}</span>
      </h2>

      {/* SLIDER */}
      <div className="relative w-full -mt-10 -mb-12">
        <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">

          {/* LOGOS */}
          {displayLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company logo"
              className="h-40 w-40 object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}

        </div>
      </div>
    </section>
  );
}
