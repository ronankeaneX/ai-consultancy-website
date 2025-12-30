import React from 'react';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent/20 text-white py-20">
        <Container>
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We're Not Your Typical AI Agency
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We're a small team obsessed with helping businesses use AI effectively—without
              the hype, without the empty promises, and without the cookie-cutter solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <Container size="md">
          <h2 className="text-4xl font-bold text-primary mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              After years of watching businesses struggle with AI tools that promised the world
              but delivered generic results, we decided to do something about it. We started this
              consultancy because we saw a gap: most AI "experts" were either selling snake oil
              or building solutions so complex they were unusable.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              We believe AI should be a tool that amplifies human expertise, not replaces it.
              That's why we focus on practical, implementable solutions that actually fit into
              your existing workflows.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Our approach is simple: understand your business, identify where AI can genuinely
              help, build custom solutions that work, and train your team to use them effectively.
              No buzzwords, no overselling, just real results.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-surface">
        <Container>
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Transparency</h3>
              <p className="text-text-secondary leading-relaxed">
                We show you exactly how we work, what you'll get, and what it costs. No hidden
                fees, no vague timelines, no surprises.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Practicality</h3>
              <p className="text-text-secondary leading-relaxed">
                We build solutions that actually work in the real world. If AI isn't the right
                answer, we'll tell you what is.
              </p>
            </Card>
            <Card className="text-center p-8">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Partnership</h3>
              <p className="text-text-secondary leading-relaxed">
                Your success is our success. We're not just vendors—we're partners invested in
                your long-term growth.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <Container size="md">
          <h2 className="text-4xl font-bold text-primary mb-12">Why Work With Us?</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  We've Been in Your Shoes
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We've run businesses, managed teams, and dealt with tight budgets. We understand
                  that you need solutions that deliver ROI, not just impressive demos.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  We're Technical AND Business-Minded
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We speak both languages: we can dive deep into the technical details when needed,
                  but we always keep the focus on business outcomes and measurable results.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  We Build for the Long Term
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our solutions are designed to grow with your business. We don't just build and
                  disappear—we provide ongoing support and optimization.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-tertiary/5">
        <Container>
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Years in AI/ML', value: '5+' },
              { label: 'Projects Delivered', value: '50+' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Average ROI', value: '3-6mo' },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="bg-gradient-to-r from-primary to-accent/20 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's have a conversation about how AI can actually help your business—no
              sales pitch, just honest insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#audit-form">
                <Button variant="success" size="lg">
                  Get Free Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
