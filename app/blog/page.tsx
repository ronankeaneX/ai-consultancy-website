import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/Container';

export const metadata: Metadata = {
  title: 'Blog - AI Consultancy',
  description: 'Read our insights, tutorials, and case studies about AI integration for businesses. Learn how to leverage AI effectively.',
  keywords: ['AI blog', 'AI tutorials', 'AI insights', 'business AI'],
};
import Button from '@/components/Button';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              Blog
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Our blog is coming soon. We'll be sharing insights, tutorials, and case studies about AI integration.
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
