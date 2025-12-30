'use client';

import React, { useState } from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Link from 'next/link';

const services = [
  {
    id: 'prompt-engineering',
    title: 'Video & Image Prompt Engineering',
    icon: '🎨',
    description: 'Master AI generation tools to create consistent, brand-aligned content at scale.',
    includes: [
      'Optimized prompts for leading AI tools (Midjourney, DALL-E, Stable Diffusion)',
      'Brand consistency frameworks',
      'Workflow automation and integration',
      'Quality control processes',
      'Team training and documentation',
    ],
    whoItsFor: [
      'E-commerce businesses needing product photography',
      'Marketing agencies creating client content',
      'Content creators scaling their output',
      'Brands maintaining visual consistency',
    ],
    useCases: [
      'Product photography for 200+ SKUs without photoshoots',
      'Social media content generation at scale',
      'Marketing materials for multiple campaigns',
      'Brand asset libraries',
    ],
    pricing: 'Starting at $2,500/project',
  },
  {
    id: 'software-development',
    title: 'Custom Software Development',
    icon: '💻',
    description: 'Rapid development of business applications using modern AI-assisted coding practices.',
    includes: [
      'Custom web applications (Next.js, React)',
      'Business process automation',
      'API integrations',
      'Database design and implementation',
      'Testing and deployment',
    ],
    whoItsFor: [
      'SMBs needing custom solutions',
      'Startups building MVPs quickly',
      'Companies automating manual processes',
      'Businesses integrating disparate systems',
    ],
    useCases: [
      'Inventory management systems',
      'Automated scheduling platforms',
      'Customer portals and dashboards',
      'Data migration and integration tools',
    ],
    pricing: 'Starting at $5,000/project',
  },
  {
    id: 'consulting',
    title: 'AI Integration Consulting',
    icon: '🚀',
    description: 'Strategic guidance for adopting AI across your organization.',
    includes: [
      'AI readiness assessment',
      'Tool selection and evaluation',
      'Implementation roadmap',
      'Team training programs',
      'Ongoing support and optimization',
    ],
    whoItsFor: [
      'Business leaders exploring AI adoption',
      'Teams overwhelmed by AI options',
      'Companies with failed AI initiatives',
      'Organizations planning digital transformation',
    ],
    useCases: [
      'Company-wide AI strategy development',
      'Department-specific AI implementation',
      'Tool stack optimization',
      'Change management for AI adoption',
    ],
    pricing: 'Starting at $3,000/month',
  },
];

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState('prompt-engineering');

  return (
    <main className="min-h-screen bg-background py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Our Services
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sticky Sidebar Navigation - Desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <nav className="sticky top-24 space-y-2">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  onClick={() => setActiveSection(service.id)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === service.id
                      ? 'bg-accent text-white shadow-md'
                      : 'text-text-secondary hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{service.icon}</span>
                    <span>{service.title}</span>
                  </div>
                </a>
              ))}
            </nav>
          </aside>

          {/* Mobile Navigation */}
          <div className="lg:hidden mb-8">
            <select
              value={activeSection}
              onChange={(e) => {
                setActiveSection(e.target.value);
                document.getElementById(e.target.value)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full px-4 py-3 rounded-lg border-2 border-border bg-surface text-text-primary font-medium"
            >
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.icon} {service.title}
                </option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 space-y-16">
            {services.map((service) => (
              <section key={service.id} id={service.id} className="scroll-mt-24">
                <Card className="p-8 md:p-12">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                        {service.title}
                      </h2>
                      <p className="text-xl text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {service.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-success text-xl flex-shrink-0">✓</span>
                          <span className="text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Who It's For */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Who It's For
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.whoItsFor.map((audience, index) => (
                        <div
                          key={index}
                          className="bg-background p-4 rounded-lg border border-border"
                        >
                          <span className="text-text-primary">{audience}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Example Use Cases
                    </h3>
                    <div className="space-y-2">
                      {service.useCases.map((useCase, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-accent">→</span>
                          <span className="text-text-secondary">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="bg-gradient-to-r from-accent/10 to-tertiary/10 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <div className="text-sm font-medium text-text-secondary mb-1">
                        Pricing
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {service.pricing}
                      </div>
                    </div>
                    <Link href="/#audit-form">
                      <Button variant="success" size="lg">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </Card>
              </section>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Most projects are completed within 2-6 weeks, depending on complexity. We provide detailed timelines during the proposal phase.',
              },
              {
                q: 'Do you offer ongoing support?',
                a: 'Yes! We offer monthly retainer packages for ongoing optimization, training, and support after project completion.',
              },
              {
                q: 'Can you work with our existing tools?',
                a: 'Absolutely. We specialize in integrating AI solutions with your current tech stack and workflows.',
              },
              {
                q: 'What if AI isn\'t the right solution?',
                a: 'We\'ll tell you honestly. Our goal is to solve your business problems, not to force AI where it doesn\'t make sense.',
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{faq.q}</h3>
                <p className="text-text-secondary leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
