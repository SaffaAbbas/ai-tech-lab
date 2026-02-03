'use client';
import CaseCard from "./CaseCard";

export default function SuccessStories() {
  const cases = [
    {
      image: '/now.png',
      title: 'Transforming Support for Enterprise Software',
      description:
        'We developed a Large-Language Model chatbot for ServiceNow that enabled support engineers to access real-time client performance data through natural language queries, doubling efficiency and achieving greater customer satisfaction.',
      link: '/blog3',
    },
    {
      image: '/bio.webp',
      title: 'Revolutionizing Diagnostics for Biotech',
      description:
        'We helped a leading biotech company label, classify, and grade echocardiograms using advanced machine learning models. Our solution significantly improved diagnostic accuracy and dramatically reduced manual processing time.',
      link: '/blog1',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Success Stories
        </h2>

        {/* Case Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((item, index) => (
            <CaseCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
