import React from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';

const caseStudies = [
  {
    industry: 'E-commerce',
    challenge: 'Needed product photography for 200+ SKUs without expensive photoshoots',
    solution: 'Custom AI image generation workflow with brand consistency',
    results: [
      { metric: '85%', label: 'Cost Reduction' },
      { metric: '10x', label: 'Faster Production' },
      { metric: '200+', label: 'Images Generated' },
    ],
    testimonial: {
      quote: 'We went from spending $50k on product photography to less than $8k, and the results are actually more consistent.',
      author: 'Sarah M.',
      role: 'E-commerce Director',
    },
  },
  {
    industry: 'Restaurant Chain',
    challenge: 'Manual scheduling and inventory management taking 15+ hours per week',
    solution: 'Custom software for automated scheduling and inventory tracking',
    results: [
      { metric: '12hrs', label: 'Saved Per Week' },
      { metric: '40%', label: 'Waste Reduction' },
      { metric: '3 months', label: 'ROI Timeline' },
    ],
    testimonial: {
      quote: 'The automation freed up our managers to actually manage people instead of spreadsheets.',
      author: 'Carlos R.',
      role: 'Operations Manager',
    },
  },
  {
    industry: 'Marketing Agency',
    challenge: 'Clients wanted video content but production costs were prohibitive',
    solution: 'Video prompt engineering and workflow optimization',
    results: [
      { metric: '70%', label: 'Faster Turnaround' },
      { metric: '$2k→$400', label: 'Per Video Cost' },
      { metric: '5x', label: 'More Clients' },
    ],
    testimonial: {
      quote: 'We can now offer video services to clients who could never afford it before. Game changer.',
      author: 'Jessica T.',
      role: 'Agency Owner',
    },
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-surface">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how we've helped companies like yours leverage AI to solve actual business problems
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className={`${
                index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
              } hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Problem & Solution */}
                <div>
                  <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    The Challenge
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {study.challenge}
                  </p>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Our Solution
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Right: Results & Testimonial */}
                <div className="flex flex-col justify-between">
                  {/* Results */}
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-6">
                      The Results
                    </h3>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="text-center bg-background p-4 rounded-lg"
                        >
                          <div className="text-3xl font-bold text-accent mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-text-secondary">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-accent/5 to-tertiary/5 p-6 rounded-lg border-l-4 border-accent">
                    <p className="text-text-primary italic mb-4 leading-relaxed">
                      "{study.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                        {study.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-primary">
                          {study.testimonial.author}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {study.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
