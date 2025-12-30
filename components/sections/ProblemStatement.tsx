import React from 'react';
import Container from '@/components/Container';
import FadeInWhenVisible from '@/components/animations/FadeInWhenVisible';

const problems = [
  {
    title: 'AI Tools Are Overwhelming',
    description: 'Too many options, not enough clarity. You need solutions that fit your specific business, not generic templates.',
    icon: '⚡',
  },
  {
    title: 'Empty Promises Everywhere',
    description: 'Everyone claims to be an AI expert. We show you real results with transparent processes and honest limitations.',
    icon: '🎯',
  },
  {
    title: 'One-Size-Fits-All Doesn\'t Work',
    description: 'Your business is unique. Our solutions are custom-built for your industry, workflow, and goals.',
    icon: '🔧',
  },
];

export default function ProblemStatement() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Most AI Tools Promise the World
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We deliver solutions that actually work for your business
          </p>
        </div>

        {/* Asymmetrical 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.2}>
              <div
                className={`bg-surface p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg ${
                  index === 1 ? 'md:translate-y-8' : ''
                }`}
              >
                <div className="text-5xl mb-4">{problem.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {problem.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </Container>
    </section>
  );
}
