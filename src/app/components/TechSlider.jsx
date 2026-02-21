'use client';

const technologies = [
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Xamarin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" },
  { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Rails", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
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
            <div key={i} className="flex flex-col items-center gap-2 min-w-[80px]">
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-14 w-14 object-contain"
              />
              <span className="text-xs font-medium text-gray-500">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
