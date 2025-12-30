'use client';

import React from 'react';
import Button from '@/components/Button';
import Container from '@/components/Container';

export default function HeroSection() {
  return (
    <section className="relative bg-background py-20 lg:py-32 overflow-hidden">
      {/* Subtle animated background gradient - light and airy */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-tertiary/5 opacity-30" />

      {/* Content */}
      <Container className="relative z-10">
        <div style={{ maxWidth: '896px', width: '100%' }}>
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary" style={{ lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            AI That Fits Your Business,{' '}
            <span style={{ background: 'linear-gradient(to right, #6366F1, #8B5CF6, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Not the Other Way Around
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-text-secondary mb-10" style={{ maxWidth: '42rem', width: '100%' }}>
            We help small-to-medium businesses integrate AI through expert prompt engineering,
            custom software development, and strategic consulting—without the hype.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="success"
              size="lg"
              className="text-base sm:text-lg"
            >
              Start Your AI Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base sm:text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              See Our Work
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-text-secondary mb-3">Trusted by innovative businesses</p>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="text-text-secondary text-sm font-medium">Real Results</div>
              <div className="w-px h-4 bg-border" />
              <div className="text-text-secondary text-sm font-medium">No Generic Solutions</div>
              <div className="w-px h-4 bg-border" />
              <div className="text-text-secondary text-sm font-medium">Human Expertise</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative elements - subtle for light background */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl" />
    </section>
  );
}
