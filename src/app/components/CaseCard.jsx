'use client';

export default function CaseCard({ image, title, description, link }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      
      {/* Image */}
      <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 flex-1">{description}</p>

        <a
          href={link}
          className="mt-4 text-blue-600 hover:underline flex items-center gap-1 text-sm font-medium"
        >
          Read Case Study →
        </a>
      </div>
    </div>
  );
}
