import React from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-tertiary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="text-center" style={{ maxWidth: '896px', width: '100%', margin: '0 auto' }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed" style={{ width: '100%', maxWidth: '100%' }}>
            Stop wondering how AI can help your business. Let's have a conversation about
            what's actually possible—no hype, just real solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ width: '100%' }}>
            <Link href="#audit-form">
              <Button variant="success" size="lg" className="text-lg">
                Get Your Free Audit
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Schedule a Call
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-border" style={{ width: '100%' }}>
            <div className="text-center" style={{ width: '100%' }}>
              <div className="text-4xl font-bold text-success mb-2">40%</div>
              <p className="text-text-secondary" style={{ width: '100%' }}>Average Cost Savings</p>
            </div>
            <div className="text-center" style={{ width: '100%' }}>
              <div className="text-4xl font-bold text-success mb-2">10x</div>
              <p className="text-text-secondary" style={{ width: '100%' }}>Faster Implementation</p>
            </div>
            <div className="text-center" style={{ width: '100%' }}>
              <div className="text-4xl font-bold text-success mb-2">24hr</div>
              <p className="text-text-secondary" style={{ width: '100%' }}>Response Time</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-12 text-text-secondary text-sm">
            <p>Questions? Email us at <a href="mailto:hello@ai-consultancy.com" className="text-accent hover:text-accent-secondary underline">hello@ai-consultancy.com</a></p>
          </div>
        </div>
      </Container>
    </section>
  );
}
