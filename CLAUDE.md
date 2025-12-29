# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI consultancy website for a business that helps small-to-medium businesses integrate AI. The site must stand out from generic AI-generated competitors through authentic design, custom visuals, and real expertise.

**Core Services:**
- Video and image prompt engineering
- Junior-to-mid-level software development (Vibe Coding)
- AI integration consulting

**Target Audience:** SMBs lacking technical AI expertise

## Technology Stack

**Frontend:** Next.js 14+ (App Router) with TypeScript
**Styling:** Tailwind CSS + Framer Motion
**Forms:** React Hook Form (forms are mockups initially, no backend)
**Deployment:** Vercel (recommended) or Netlify/Cloudflare Pages
**Content:** Markdown/MDX for blog posts

## Design System

### Color Palette

**Primary Colors:**
- Primary: `#0A0E27` (Deep Navy)
- Accent: `#6366F1` (Indigo)
- Secondary Accent: `#8B5CF6` (Purple)
- Tertiary: `#EC4899` (Pink)

**Neutrals:**
- Background: `#FAFAFA`
- Surface: `#FFFFFF`
- Text Primary: `#1F2937`
- Text Secondary: `#6B7280`
- Border: `#E5E7EB`

**Semantic Colors:**
- Success: `#10B981` (Emerald) - **Used for "AUDIT MY BUSINESS" button**
- Warning: `#F59E0B`
- Error: `#EF4444`
- Info: `#3B82F6`

### "AUDIT MY BUSINESS" Button Specifications

This is a critical UI element that appears on the homepage:

- Base color: `#10B981` (Emerald green)
- Hover state: `#059669` (Darker emerald)
- Text: White, bold, uppercase, letter-spacing: 0.05em
- Size: Large (padding: 16px 32px, font-size: 1.125rem)
- Shadow: `0 4px 14px 0 rgba(16, 185, 129, 0.3)`
- Hover effects: Scale (1.02), enhanced shadow, optional shine/gradient overlay
- Transitions: 200ms ease

### Typography

**Font:** Inter (headings and body)
**Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
**Monospace:** JetBrains Mono or Fira Code

**Type Scale:**
- H1: 3.5rem / Line-height: 1.1 / Letter-spacing: -0.02em
- H2: 2.5rem / Line-height: 1.2 / Letter-spacing: -0.01em
- H3: 1.875rem / Line-height: 1.3
- H4: 1.5rem / Line-height: 1.4
- Body Large: 1.125rem / Line-height: 1.6
- Body: 1rem / Line-height: 1.6
- Small: 0.875rem / Line-height: 1.5

### Spacing System

Base unit: 4px (use Tailwind's default spacing scale)

## Site Structure

### Pages to Build

1. **Homepage** (`/`)
   - Hero section with bold headline and CTAs
   - Problem statement (3-column)
   - Services preview cards
   - Differentiator section
   - Case studies/results (3-4 examples)
   - Process overview (4-step visualization)
   - **Business Audit Form section** with shiny green CTA (non-functional mockup)
   - Final CTA section

2. **Services** (`/services`)
   - Sticky navigation sidebar (desktop)
   - Detailed sections for each service with pricing indicators

3. **About** (`/about`)
   - Founder/team story, mission, approach, credentials, photos

4. **Portfolio/Case Studies** (`/portfolio` or `/case-studies`)
   - Grid of case study cards with metrics and visuals

5. **Blog/Resources** (`/blog` or `/resources`)
   - Featured post, grid layout, categories/tags, search

6. **Contact** (`/contact`)
   - Contact form, email, social links, Calendly integration

7. **Pricing** (`/pricing`) - Optional
   - Service packages and custom solutions

### Business Audit Form

The form appears prominently on the homepage and includes:
- First Name (text input)
- Last Name (text input)
- Company Name (text input)
- Business Email Address (email input with validation)
- **"AUDIT MY BUSINESS" button** (shiny green, see specifications above)

**Important:** This form is a non-functional mockup initially (no backend submission required). Implement visual validation feedback only.

## Design Principles (Anti-Generic Strategy)

1. **Asymmetry & Dynamic Layouts:** Avoid centered, symmetrical layouts. Use offset grids, overlapping elements
2. **Micro-interactions:** Subtle hover effects, scroll-triggered animations
3. **Bold Typography:** Large, confident headlines with negative space
4. **Custom Illustrations:** Avoid stock photos. Use custom or unique AI-generated visuals
5. **Depth & Layering:** Shadows, gradients, z-index for hierarchy
6. **Unexpected Color Usage:** Use accent colors in unexpected places

### What to Avoid

- Generic gradient hero sections
- Stock photos of people in suits
- Overused AI/tech imagery (circuits, neural networks)
- Cliché phrases ("revolutionary", "game-changing", "cutting-edge")
- Centered, symmetrical layouts everywhere
- Generic icon sets

### What to Embrace

- Asymmetrical, dynamic layouts
- Custom illustrations with personality
- Bold typography choices
- Unexpected color combinations
- Micro-interactions and animations
- Real photography (if using photos)
- Strategic white space

## Content Strategy

### Voice and Tone

- Write in authentic voice, NOT AI voice
- Use specific examples, not vague promises
- Show personality (humor, directness)
- Focus on outcomes, not features
- Address specific pain points
- Be direct, not salesy
- Use "you" language

### Hero Headline Examples

- "AI That Fits Your Business, Not the Other Way Around"
- "Stop Fighting AI Tools. Start Using Them."
- "We Build AI Solutions That Actually Work"
- "Your Business, Supercharged by AI (Without the Hype)"

## Technical Requirements

### Performance

- Use Next.js Image component for optimization
- Implement code splitting and lazy loading
- Minimize JavaScript
- Target Lighthouse score > 90
- Page load speed < 3 seconds

### SEO

- Semantic HTML
- Meta tags for all pages
- Open Graph images
- Structured data (JSON-LD)
- Sitemap.xml and robots.txt

### Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- Alt text for all images

### Security

- Client-side form validation (visual feedback)
- HTTPS
- Secure headers

## Development Workflow

Since this is a new project, the initial setup should include:

1. Initialize Next.js 14+ with TypeScript and App Router
2. Configure Tailwind CSS with custom design system (colors, typography, spacing)
3. Install Framer Motion for animations
4. Set up project structure:
   - `/app` - Next.js app router pages
   - `/components` - Reusable UI components
   - `/lib` - Utilities and helpers
   - `/public` - Static assets
   - `/styles` - Global styles and Tailwind config
5. Create base components (Button, Card, Container, etc.)
6. Implement responsive navigation
7. Build pages in order: Homepage → Services → About → Contact → Portfolio → Blog

## Key Differentiators

This website must demonstrate expertise through:

1. **Authentic Voice:** Real examples, personal anecdotes, specific metrics
2. **Real Results:** Specific numbers, client names (with permission), screenshots
3. **Custom Visuals:** Unique illustrations and brand-consistent iconography
4. **Interactive Elements:** Demos, calculators, animated case studies
5. **Educational Content:** Free resources that genuinely help
6. **Human Touch:** Real photos, video intros, behind-the-scenes content
7. **Technical Depth:** Show understanding without being boring

## Implementation Priority

**Phase 1 (Foundation):**
- Next.js setup with TypeScript
- Tailwind CSS configuration
- Base components
- Responsive navigation

**Phase 2 (Core Pages):**
- Homepage with all sections including Business Audit Form
- Services page
- About page
- Contact page

**Phase 3 (Content & Polish):**
- Write all copy
- Create/commission visuals
- Portfolio page
- Blog structure

**Phase 4 (Advanced Features):**
- Animations with Framer Motion
- Analytics setup
- SEO optimization
- Performance tuning
- Mobile responsiveness testing
