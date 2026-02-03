import Image from "next/image";

export default function ServiceHero2({
  badgeText = "Full-Service Machine Learning Product Development",
  title = "Turning Vision into Reality",
  description = `At GenAI Studio we’re passionate about bringing AI ideas to life. 
With over a decade of experience, our team of experts is dedicated 
to guiding you through every step of the machine learning product 
development process. Whether you have a fully formed concept or 
just an idea, we will work with you to create a tailored solution 
that meets your needs and exceeds your expectations.`,
  buttonText = "Talk to an AI Expert",
  imageSrc = "/openai.jfif",
  bgColor = "bg-[#eef1fb]",
  onButtonClick,
}) {
  return (
    <section className={`relative w-full ${bgColor} overflow-hidden`}>
      <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 text-sm font-medium mb-4">
            {badgeText}
          </p>

          <h1 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
            {title}
          </h1>

          <p className="text-gray-600 text-base leading-relaxed max-w-xl mb-8">
            {description}
          </p>

          <button
            onClick={onButtonClick}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-4 rounded-full transition"
          >
            {buttonText}
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center rounded-full">
          <Image
            src={imageSrc}
            alt={title}
            width={520}
            height={520}
            className="object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
