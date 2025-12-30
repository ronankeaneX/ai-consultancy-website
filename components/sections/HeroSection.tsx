'use client';

import React from 'react';
import Button from '@/components/Button';
import Container from '@/components/Container';

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/20 to-accent-secondary/20 opacity-50" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            AI That Fits Your Business,{' '}
            <span className="bg-gradient-to-r from-accent via-accent-secondary to-tertiary bg-clip-text text-transparent">
              Not the Other Way Around
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl">
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
              className="text-base sm:text-lg border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              See Our Work
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-400 mb-3">Trusted by innovative businesses</p>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="text-gray-400 text-sm font-medium">Real Results</div>
              <div className="w-px h-4 bg-gray-600" />
              <div className="text-gray-400 text-sm font-medium">No Generic Solutions</div>
              <div className="w-px h-4 bg-gray-600" />
              <div className="text-gray-400 text-sm font-medium">Human Expertise</div>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl" />
    </section>
  );
}
