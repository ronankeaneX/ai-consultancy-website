import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Portfolio - AI Consultancy',
  description: 'View our portfolio of successful AI integration projects and case studies. See real results from real businesses.',
  keywords: ['AI portfolio', 'case studies', 'AI projects', 'success stories'],
};
import Button from '@/components/Button';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              This page is coming soon. Check out our case studies on the homepage to see our work in action.
            </p>
            <Link href="/">
              <Button variant="primary" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
