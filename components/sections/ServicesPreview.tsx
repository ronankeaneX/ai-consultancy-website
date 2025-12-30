import React from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Card from '@/components/Card';

const services = [
  {
    title: 'Prompt Engineering',
    description: 'Expert optimization for video and image generation. Get consistent, brand-aligned results from AI tools.',
    icon: '🎨',
    link: '/services#prompt-engineering',
  },
  {
    title: 'Custom Software Development',
    description: 'Junior-to-mid-level applications built fast. Business automation and rapid prototyping that works.',
    icon: '💻',
    link: '/services#software-development',
  },
  {
    title: 'AI Integration Consulting',
    description: 'Strategic guidance for AI adoption. Tool selection, team training, and ongoing support.',
    icon: '🚀',
    link: '/services#consulting',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-surface">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            How We Help Your Business
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Three core services designed to integrate AI into your operations
          </p>
        </div>

        {/* Offset grid layout - dynamic, not centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? 'lg:col-start-1' : ''
              } ${
                index === 1 ? 'md:col-start-2 lg:col-start-2 lg:translate-y-8' : ''
              } ${
                index === 2 ? 'md:col-start-1 lg:col-start-3' : ''
              }`}
            >
              <Link href={service.link}>
                <Card className="h-full cursor-pointer group hover:border-accent hover:shadow-xl transition-all duration-300">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="text-accent font-medium group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Learn More
                    <span className="text-xl">→</span>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
