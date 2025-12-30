import React from 'react';
import Link from 'next/link';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent via-accent-secondary to-tertiary bg-clip-text text-transparent mb-4">
              AI Consultancy
            </h3>
            <p className="text-text-secondary text-sm">
              Helping businesses integrate AI through expert prompt engineering, custom development, and strategic consulting.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Services</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/services#prompt-engineering" className="hover:text-accent transition-colors">Prompt Engineering</Link></li>
              <li><Link href="/services#software-development" className="hover:text-accent transition-colors">Custom Development</Link></li>
              <li><Link href="/services#consulting" className="hover:text-accent transition-colors">AI Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="mailto:hello@ai-consultancy.com" className="hover:text-accent transition-colors">hello@ai-consultancy.com</a></li>
              <li className="pt-4">
                <Link href="#audit-form" className="text-success font-semibold hover:text-success-dark transition-colors">
                  Get Free Audit →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} AI Consultancy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
