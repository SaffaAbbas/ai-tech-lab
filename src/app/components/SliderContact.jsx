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

export default function SliderContact({ bgColor = "bg-[#EEF1FA] ",heightClass = "py-5", }) {
  const displayLogos = logos.concat(logos);

  return (
    <section  className={`${bgColor} ${heightClass}  overflow-hidden`}>
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
