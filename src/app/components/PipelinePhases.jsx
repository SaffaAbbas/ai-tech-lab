'use client';

import {
  ClipboardList,
  PencilRuler,
  BarChart3,
  Database,
  FlaskConical,
  Settings,
  Rocket,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';

import { useState } from 'react';

export default function PipelinePhases() {
  const [activePhase, setActivePhase] = useState('specifications');

  const phases = {
    phaseA: [
      {
        id: 'specifications',
        icon: ClipboardList,
        title: 'Specifications & Planning',
        content: {
          heading: 'Specifications & Planning',
          subheading: 'Comprehensive Approach to AI and Software Development',
          description:
            "Our approach begins with detailed discovery sessions, where we collaboratively build a comprehensive specifications document. This outlines the project's objectives, user personas, and key functionalities, ensuring all stakeholders are aligned.",
          points: [
            {
              label: 'What are we building?',
              text: 'Who are the users, and what features are essential?',
            },
            {
              label: 'Which technologies',
              text: 'such as AI models, Generative AI tools, cloud services, or programming frameworks, will provide the best balance of cost, scalability, and performance?',
            },
          ],
          guidance:
            'Our team guides you through critical decisions, helping optimize the development process by:',
          examples: [
            {
              number: 1,
              title: 'Suggesting impactful features',
              description:
                '(e.g., "Consider adding a dashboard for tracking real-time analytics and usage trends.")',
            },
            {
              number: 2,
              title: 'Balancing budget and functionality',
              description:
                '(e.g., "We can use pre-built AI models or libraries to reduce development time by 50%.")',
            },
          ],
         tools: [
  { name: 'Google Docs', image: '/doc.png' },
  { name: 'Trello', image: '/trello.png' },
],
        },
      },
      {
        id: 'designs',
        icon: PencilRuler,
        title: 'Designs, Wireframe & Prototype',
        content: {
          heading: 'Designs, Wireframe & Prototype',
          subheading: 'Creating Visual Blueprint for Your Solution',
          description:
            'We transform specifications into visual designs and interactive prototypes, ensuring the user experience is intuitive and aligned with your vision.',
          points: [
            { label: 'User Interface Design', text: 'Creating beautiful, functional interfaces that users love' },
            { label: 'Interactive Prototypes', text: 'Build clickable prototypes to validate concepts before development' },
          ],
          guidance: 'Our design process includes:',
          examples: [
            { number: 1, title: 'Wireframing', description: 'Low-fidelity sketches to establish layout and flow' },
            { number: 2, title: 'High-fidelity mockups', description: 'Detailed designs with final colors, typography, and imagery' },
          ],
          tools: [
            { name: 'Figma', image: '/figma.png' },
            { name: 'Adobe', image: '/adobe.webp' },
          ],
        },
      },
      {
        id: 'estimates',
        icon: BarChart3,
        title: 'Estimates & Timeline',
        content: {
          heading: 'Estimates & Timeline',
          subheading: 'Transparent Project Planning and Budgeting',
          description:
            'We provide detailed estimates and realistic timelines based on project complexity, ensuring transparency and alignment with your budget and deadlines.',
          points: [
            { label: 'Cost Breakdown', text: 'Detailed breakdown of development costs by feature and phase' },
            { label: 'Timeline Planning', text: 'Realistic milestones with buffer time for unexpected challenges' },
          ],
          guidance: 'Our estimation process covers:',
          examples: [
            { number: 1, title: 'Resource Allocation', description: 'Team size, skill requirements, and time commitment' },
            { number: 2, title: 'Risk Assessment', description: 'Identifying potential delays and mitigation strategies' },
          ],
          tools: [
            { name: 'Jira', image: '/jira.png' },
            { name: 'Excel', image: '/excel.jpg' },
          ],
        },
      },
    ],
    phaseB: [
      {
        id: 'data',
        icon: Database,
        title: 'Data Collection & Preparation',
        content: {
          heading: 'Data Collection & Preparation',
          subheading: 'Building the Foundation for AI Solutions',
          description:
            'Quality data is the cornerstone of successful AI projects. We help collect, clean, and prepare datasets that power your intelligent solutions.',
          points: [
            { label: 'Data Sourcing', text: 'Identify and acquire relevant datasets from multiple sources' },
            { label: 'Data Cleaning', text: 'Remove inconsistencies, handle missing values, and ensure quality' },
          ],
          guidance: 'Our data preparation includes:',
          examples: [
            { number: 1, title: 'Data Validation', description: 'Ensuring accuracy and completeness of collected data' },
            { number: 2, title: 'Feature Engineering', description: 'Creating meaningful features that improve model performance' },
          ],
           tools: [
            { name: 'Python', image: '/python.png' },
            { name: 'SQL', image: '/sql.webp' },
          ],
        },
      },
      {
        id: 'experimentation',
        icon: FlaskConical,
        title: 'Experimentation & Modeling',
        content: {
          heading: 'Experimentation & Modeling',
          subheading: 'Testing and Refining AI Models',
          description:
            'We experiment with various AI models and algorithms to find the optimal solution for your specific use case, balancing accuracy with performance.',
          points: [
            { label: 'Model Selection', text: 'Testing multiple algorithms to find the best fit' },
            { label: 'Hyperparameter Tuning', text: 'Optimizing model parameters for maximum performance' },
          ],
          guidance: 'Our experimentation process:',
          examples: [
            { number: 1, title: 'A/B Testing', description: 'Comparing different approaches to find optimal solutions' },
            { number: 2, title: 'Performance Metrics', description: 'Tracking accuracy, precision, recall, and other key metrics' },
          ],
           tools: [
            { name: 'TensorFlow', image: '/tensor.png' },
            { name: 'PyCharm', image: '/pycharm.webp' },
          ],
        },
      },
      {
        id: 'feature',
        icon: Settings,
        title: 'Feature Development & Testing',
        content: {
          heading: 'Feature Development & Testing',
          subheading: 'Building Robust and Scalable Features',
          description:
            'We develop features with clean code, comprehensive testing, and continuous integration to ensure reliability and maintainability.',
          points: [
            { label: 'Agile Development', text: 'Iterative development with regular feedback loops' },
            { label: 'Quality Assurance', text: 'Comprehensive testing including unit, integration, and E2E tests' },
          ],
          guidance: 'Our development standards:',
          examples: [
            { number: 1, title: 'Code Reviews', description: 'Peer reviews to maintain code quality and share knowledge' },
            { number: 2, title: 'Automated Testing', description: 'CI/CD pipelines for continuous testing and deployment' },
          ],
           tools: [
            { name: 'GitHub', image: '/git.webp' },
            { name: 'Jest', image: '/jest.webp' },
          ],
        },
      },
      {
        id: 'deployment',
        icon: Rocket,
        title: 'Deployment & Integration',
        content: {
          heading: 'Deployment & Integration',
          subheading: 'Seamless Launch and System Integration',
          description:
            'We ensure smooth deployment to production environments with proper integration into your existing systems and infrastructure.',
          points: [
            { label: 'Production Deployment', text: 'Deploy to cloud platforms with high availability and scalability' },
            { label: 'System Integration', text: 'Connect with existing APIs, databases, and third-party services' },
          ],
          guidance: 'Our deployment process:',
          examples: [
            { number: 1, title: 'Zero-downtime Deployment', description: 'Rolling updates to ensure continuous service availability' },
            { number: 2, title: 'Security Hardening', description: 'Implementing security best practices and compliance requirements' },
          ],
           tools: [
            { name: 'AWS', image: '/aws.webp' },
            { name: 'Docker', image: '/docker.webp' },
          ],
        },
      },
      {
        id: 'maintain',
        icon: Wrench,
        title: 'Maintain & Monitor',
        content: {
          heading: 'Maintain & Monitor',
          subheading: 'Ongoing Support and Performance Optimization',
          description:
            'We provide continuous monitoring, maintenance, and improvements to ensure your solution remains performant, secure, and up-to-date.',
          points: [
            { label: 'Performance Monitoring', text: 'Track system health, uptime, and response times' },
            { label: 'Proactive Maintenance', text: 'Regular updates, security patches, and performance optimization' },
          ],
          guidance: 'Our maintenance services:',
          examples: [
            { number: 1, title: 'Real-time Alerts', description: 'Instant notifications for issues or anomalies' },
            { number: 2, title: 'Regular Updates', description: 'Monthly reports on system performance and recommendations' },
          ],
           tools: [
            { name: 'DataDog', image: '/datadog.png' },
            { name: 'New Relic', image: '/newRelic.webp' },
          ],
        },
      },
    ],
  };

  const allPhases = [...phases.phaseA, ...phases.phaseB];
  const activeContent = allPhases.find((p) => p.id === activePhase)?.content;

  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDEBAR - Phase Buttons */}
          <div className="lg:col-span-1 space-y-8">
            {/* Phase A */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Phase A - Discovery & Strategy
              </h3>
              <div className="space-y-3">
                {phases.phaseA.map((phase) => {
                  const Icon = phase.icon;
                  return (
                    <button
                      key={phase.id}
                      onClick={() => setActivePhase(phase.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-4xl transition-all duration-300 text-left ${
                        activePhase === phase.id
                          ? 'bg-white shadow-lg border-2 border-indigo-500 scale-105'
                          : 'bg-white/50 border-2 border-gray-400 hover:bg-white hover:shadow-md'
                      }`}
                    >
                      <Icon size={22} className="text-blue-800" />
                      <span
                        className={`text-sm font-medium ${
                          activePhase === phase.id ? 'text-blue-800' : 'text-gray-700'
                        }`}
                      >
                        {phase.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Phase B */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Phase B - Development
              </h3>
              <div className="space-y-3">
                {phases.phaseB.map((phase) => {
                  const Icon = phase.icon;
                  return (
                    <button
                      key={phase.id}
                      onClick={() => setActivePhase(phase.id)}
                      className={` w-full flex items-center gap-3 px-4 py-3 rounded-4xl transition-all duration-300 text-left border ${
                        activePhase === phase.id
                          ? 'bg-white shadow-lg border-3 border-indigo-500 scale-105'
                          : 'bg-white/50 border-2 border-gray-400 hover:bg-white hover:shadow-md'
                      }`}
                    >
                      <Icon size={22} className="text-blue-800" />
                      <span
                        className={`text-sm font-medium ${
                          activePhase === phase.id ? 'text-blue-800' : 'text-gray-700'
                        }`}
                      >
                        {phase.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 min-h-[600px] transition-all duration-500">
              {activeContent && (
                <div className="space-y-6 animate-fadeIn">
                  {/* Header */}
                  <div>
                    <h2 className="text-3xl font-bold text-blue-800 mb-2">{activeContent.heading}</h2>
                    <p className="text-lg font-semibold text-black-600">{activeContent.subheading}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">{activeContent.description}</p>

                  {/* Key Points */}
                  <div className="space-y-3">
                    {activeContent.points.map((point, index) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-black-600 font-bold">•</span>
                        <div>
                          <span className="font-semibold text-gray-900">{point.label}:</span>{' '}
                          <span className="text-gray-700">{point.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Guidance */}
                  <p className="text-gray-700">{activeContent.guidance}</p>

                  {/* Examples */}
                  <div className="space-y-3">
                    {activeContent.examples.map((example) => (
                      <div key={example.number} className="flex gap-3">
                        <span className="text-indigo-600 font-bold">{example.number}.</span>
                        <div>
                          <span className="font-semibold text-blue-800">{example.title}</span>{' '}
                          <span className="text-gray-700">{example.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tools Used */}
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Tools Used:</p>
                    <div className="flex gap-4">
                      {activeContent.tools.map((tool, index) => (
                        <div key={index} className="flex items-center gap-2 px-4 py-10 rounded-lg">
                          <Image
                            src={tool.image}
                            alt={tool.name}
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
