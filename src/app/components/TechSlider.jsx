'use client';

const technologies = [
  { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable/18BFFF" },
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "Nuxt.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Together AI", logo: "/together-ai.svg" },
  { name: "Auth0", logo: "https://cdn.simpleicons.org/auth0/EB5424" },
  { name: "Ruby", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic/111111" },
  { name: "Bolt", logo: "https://cdn.simpleicons.org/bolt/111111" },
  { name: "Azure AI", logo: "https://cdn.simpleicons.org/microsoftazure/0078D4" },
];

export default function TechSlider({ showHeading = true, bgColor = "bg-white", heightClass = "py-12" }) {
  const doubled = [...technologies, ...technologies];
  const isWhite = bgColor === "bg-white";

  return (
    <section className={`${heightClass} ${bgColor} overflow-hidden`}>
      {showHeading && (
        <h2 className="text-center text-2xl md:text-2xl font-semibold text-gray-900 mb-10">
          Technologies <span className="text-indigo-800">We Work With</span>
        </h2>
      )}

      <div className="relative w-full">
        <div className={`absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r ${isWhite ? "from-white" : "from-gray-100"} to-transparent z-10`} />
        <div className={`absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l ${isWhite ? "from-white" : "from-gray-100"} to-transparent z-10`} />

        <div className="flex gap-14 animate-marquee-tech whitespace-nowrap items-center">
          {doubled.map((tech, i) => (
            <div key={i} className="flex items-center justify-center min-w-[80px]">
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-14 w-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
