import React from 'react';
import Container from '@/components/Container';

const differentiators = [
  {
    label: 'Human Expertise',
    description: 'Real people with real experience, not just AI-generated content',
  },
  {
    label: 'Transparent Process',
    description: 'We show you exactly how we work and what you can expect',
  },
  {
    label: 'Honest Limitations',
    description: 'We tell you when AI isn\'t the right solution for your problem',
  },
  {
    label: 'Custom Solutions',
    description: 'Every project is built for your specific needs, not copy-pasted',
  },
];

export default function Differentiator() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent/20 text-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why We're Different
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              In a world full of generic AI solutions, we focus on what actually matters:
              combining human expertise with AI tools to solve real business problems.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We're not here to replace your team—we're here to supercharge them with
              AI capabilities that make sense for your business.
            </p>
          </div>

          {/* Right column - Differentiator list */}
          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all hover:border-accent"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-accent to-tertiary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.label}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
