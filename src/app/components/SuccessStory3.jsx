'use client';
import CaseCard from "./CaseCard";

export default function SuccessStory3() {
  const cases = [
    {
      image: '/images.jfif',
      title: 'Revolutionizing Diagnostics for Biotech',
      description:
        'We helped a leading biotech company label, classify, and grade echocardiograms using advanced machine learning models. Our solution signficantly improved diagnostic accuracy and dramatically reduced manual processing time.',
      link: '/blog3',
    },
    {
      image: '/rayban.jpg',
      title: 'Maximizing Amazon Presence for Ray-Ban',
      description:
        'Our team used generative AI to automate responses, manage PPC ads, and handle customer inquiries for Ray-Bam. This substantially streamlined their operations and markedly boosted their ROI on Amazon.',
      link: '/blog2',
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
