import React from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent/20 to-accent-secondary/20 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Stop wondering how AI can help your business. Let's have a conversation about
            what's actually possible—no hype, just real solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#audit-form">
              <Button variant="success" size="lg" className="text-lg">
                Get Your Free Audit
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-lg border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule a Call
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">40%</div>
              <p className="text-gray-300">Average Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">10x</div>
              <p className="text-gray-300">Faster Implementation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">24hr</div>
              <p className="text-gray-300">Response Time</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="mt-12 text-gray-400 text-sm">
            <p>Questions? Email us at <a href="mailto:hello@ai-consultancy.com" className="text-accent hover:text-accent-secondary underline">hello@ai-consultancy.com</a></p>
          </div>
        </div>
      </Container>
    </section>
  );
}
