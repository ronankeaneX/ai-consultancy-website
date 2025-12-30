'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '@/components/Container';
import Input from '@/components/Input';

interface AuditFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  businessEmail: string;
}

export default function BusinessAuditForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuditFormData>();

  const onSubmit = (data: AuditFormData) => {
    // Non-functional mockup - just log for now
    console.log('Form submitted (mockup):', data);
    alert('Form submitted! (This is a mockup - no backend submission yet)');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/5">
      <Container size="md">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get Your Free AI Business Audit
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Discover how AI can transform your business operations. We'll analyze your needs
            and provide actionable recommendations—no sales pitch, just value.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-surface border-2 border-border rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                placeholder="John"
                {...register('firstName', {
                  required: 'First name is required',
                  minLength: {
                    value: 2,
                    message: 'First name must be at least 2 characters',
                  },
                })}
                error={errors.firstName?.message}
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                {...register('lastName', {
                  required: 'Last name is required',
                  minLength: {
                    value: 2,
                    message: 'Last name must be at least 2 characters',
                  },
                })}
                error={errors.lastName?.message}
              />
            </div>

            {/* Company Name */}
            <Input
              label="Company Name"
              placeholder="Your Business Inc."
              {...register('companyName', {
                required: 'Company name is required',
              })}
              error={errors.companyName?.message}
            />

            {/* Business Email */}
            <Input
              label="Business Email Address"
              type="email"
              placeholder="you@yourbusiness.com"
              {...register('businessEmail', {
                required: 'Business email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              error={errors.businessEmail?.message}
            />

            {/* AUDIT MY BUSINESS Button - Shiny Green with Exact Specifications */}
            <button
              type="submit"
              className="group relative w-full bg-success hover:bg-success-dark text-white font-bold uppercase tracking-wider text-lg py-4 px-8 rounded-md shadow-button-success hover:shadow-button-success-hover hover:scale-[1.02] transition-all duration-200 overflow-hidden"
            >
              {/* Shiny gradient overlay effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

              {/* Button text */}
              <span className="relative">Audit My Business</span>
            </button>

            {/* Privacy notice */}
            <p className="text-sm text-text-secondary text-center mt-4">
              We respect your privacy. Your information will never be shared or sold.
            </p>
          </form>
        </div>

        {/* Value proposition */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-primary mb-1">Fast Response</h3>
            <p className="text-sm text-text-secondary">We'll get back to you within 24 hours</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold text-primary mb-1">Actionable Insights</h3>
            <p className="text-sm text-text-secondary">Practical recommendations you can implement</p>
          </div>
          <div>
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="font-semibold text-primary mb-1">No Obligations</h3>
            <p className="text-sm text-text-secondary">Free audit with no strings attached</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
