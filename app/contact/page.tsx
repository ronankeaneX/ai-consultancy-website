'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Button from '@/components/Button';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    // Non-functional mockup - just log for now
    console.log('Contact form submitted (mockup):', data);
    alert('Message sent! (This is a mockup - no backend submission yet)');
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-accent/20 text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Have a project in mind? Questions about our services? Let's talk.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Options & Form */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
                <a
                  href="mailto:hello@ai-consultancy.com"
                  className="text-accent hover:text-accent-secondary underline"
                >
                  hello@ai-consultancy.com
                </a>
                <p className="text-sm text-text-secondary mt-2">
                  We respond within 24 hours
                </p>
              </Card>

              <Card className="p-6">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-bold text-primary mb-2">Schedule a Call</h3>
                <p className="text-text-secondary mb-3">
                  Book a free 30-minute consultation
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Calendar
                </Button>
              </Card>

              <Card className="p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-primary mb-2">Response Time</h3>
                <p className="text-text-secondary">
                  We aim to respond to all inquiries within 24 hours during business days.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-tertiary/10">
                <h3 className="text-xl font-bold text-primary mb-2">Prefer a Quick Audit?</h3>
                <p className="text-text-secondary mb-4">
                  Get a free AI business audit instead
                </p>
                <a href="/#audit-form">
                  <Button variant="success" size="sm" className="w-full">
                    Get Free Audit
                  </Button>
                </a>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <Input
                    label="Your Name"
                    placeholder="John Doe"
                    {...register('name', {
                      required: 'Name is required',
                    })}
                    error={errors.name?.message}
                  />

                  {/* Email */}
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="you@company.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    error={errors.email?.message}
                  />

                  {/* Company */}
                  <Input
                    label="Company Name (Optional)"
                    placeholder="Your Business Inc."
                    {...register('company')}
                  />

                  {/* Service Interest */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      What are you interested in?
                    </label>
                    <select
                      {...register('serviceInterest', {
                        required: 'Please select a service',
                      })}
                      className="flex h-11 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service...</option>
                      <option value="prompt-engineering">Prompt Engineering</option>
                      <option value="software-development">Custom Software Development</option>
                      <option value="consulting">AI Integration Consulting</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    {errors.serviceInterest && (
                      <p className="mt-2 text-sm text-error">
                        {errors.serviceInterest.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="w-full">
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Your Message
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters',
                        },
                      })}
                      rows={6}
                      placeholder="Tell us about your project or question..."
                      className="flex w-full rounded-md border border-border bg-surface px-3 py-2 text-sm ring-offset-background placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 resize-none"
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-error">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="success" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-sm text-text-secondary text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-primary mb-2">We Review</h3>
                <p className="text-sm text-text-secondary">
                  We'll review your message and assess how we can help
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-primary mb-2">We Respond</h3>
                <p className="text-sm text-text-secondary">
                  You'll hear back within 24 hours with our thoughts
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-primary mb-2">We Schedule</h3>
                <p className="text-sm text-text-secondary">
                  If it's a good fit, we'll set up a discovery call
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
