import React from 'react';
import Container from '@/components/Container';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start with a conversation about your business, challenges, and goals. No sales pitch—just understanding your needs.',
    duration: '30-45 min',
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description: 'Based on our discussion, we create a tailored plan with specific recommendations, timeline, and transparent pricing.',
    duration: '2-3 days',
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We build, test, and refine the solution. You\'re involved throughout with regular check-ins and progress updates.',
    duration: 'Varies by project',
  },
  {
    number: '04',
    title: 'Training & Support',
    description: 'We ensure your team knows how to use the solution effectively, plus ongoing support to ensure long-term success.',
    duration: 'Ongoing',
  },
];

export default function ProcessOverview() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            How We Work
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A transparent, collaborative process designed around your business needs
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-secondary to-tertiary" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-surface border-2 border-border rounded-xl p-6 hover:border-accent hover:shadow-xl transition-all duration-300 group"
              >
                {/* Step number circle */}
                <div className="absolute -top-6 left-6 w-12 h-12 bg-gradient-to-br from-accent to-accent-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-accent/10 to-tertiary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-3">
            Ready to get started?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Every project is different, but our process stays the same: transparent,
            collaborative, and focused on results.
          </p>
        </div>
      </Container>
    </section>
  );
}
