import Link from "next/link";

export default function CTASection({
  title = "Get Started Today",
  description = "Ready to turn your AI vision into a tangible, impactful product? Reach out to us today, and let's start building your custom machine learning solution.",
  buttonText = "Contact Us",
  buttonHref = "/contactUs",
  sectionId = "contact-section"
}) {
  return (
    <section id={sectionId} className="bg-blue-800 py-12 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-8">
        
        <div className="max-w-2xl">
          <h2 className="text-white text-4xl md:text-4xl font-bold mb-4">
            {title}
          </h2>

          {/* Optional description */}
          {description && (
            <p className="text-white text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

 <Link
          href={buttonHref}
          className="bg-white text-blue-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-lg"
        >
          {buttonText}
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
        </Link>

      </div>
    </section>
  );
}
