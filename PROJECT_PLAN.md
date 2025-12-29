# AI Consultancy Website - Complete Project Plan

## 🎯 Project Overview

**Mission**: Build a world-class, non-generic website for an AI consultancy that helps small-to-medium businesses integrate AI into their operations. The site must stand out in a crowded market where many competitors are using AI-generated content.

**Core Services**:
- Video prompt engineering & optimization
- Image prompt engineering & optimization  
- Junior-to-mid-level software development (powered by Vibe Coding, marketed as custom development)
- General AI integration consulting

**Target Audience**: Small-to-medium-sized businesses (SMBs) looking to adopt AI but lacking technical expertise.

---

## 🎨 Design System & Visual Identity

### Color Palette

**Primary Palette** (Bold, Professional, Tech-Forward):
- **Primary**: `#0A0E27` (Deep Navy - sophisticated, trustworthy)
- **Accent**: `#6366F1` (Indigo - modern, AI-forward)
- **Secondary Accent**: `#8B5CF6` (Purple - creative, innovative)
- **Tertiary**: `#EC4899` (Pink - energetic, approachable)

**Neutral Palette**:
- **Background**: `#FAFAFA` (Off-white - clean, spacious)
- **Surface**: `#FFFFFF` (Pure white - contrast)
- **Text Primary**: `#1F2937` (Charcoal - readable)
- **Text Secondary**: `#6B7280` (Gray - hierarchy)
- **Border**: `#E5E7EB` (Light gray - subtle separation)

**Semantic Colors**:
- **Success**: `#10B981` (Emerald) - **Used for "AUDIT MY BUSINESS" button**
- **Warning**: `#F59E0B` (Amber)
- **Error**: `#EF4444` (Red)
- **Info**: `#3B82F6` (Blue)

**Button Design Specifications**:
- **"AUDIT MY BUSINESS" Button**:
  - Base color: `#10B981` (Emerald green)
  - Hover state: `#059669` (Darker emerald)
  - Text color: `#FFFFFF` (White)
  - Typography: Bold, uppercase, letter-spacing: 0.05em
  - Size: Large (padding: 16px 32px, font-size: 1.125rem)
  - Effects: 
    - Subtle shadow: `0 4px 14px 0 rgba(16, 185, 129, 0.3)`
    - Hover: Slight scale (1.02) and enhanced shadow
    - Optional: Subtle shine/gradient overlay for "shiny" effect
    - Smooth transitions (200ms ease)

**Gradient Combinations** (for hero sections, CTAs):
- Primary: `linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)`
- Subtle: `linear-gradient(135deg, #0A0E27 0%, #1E3A8A 100%)`
- Accent: `linear-gradient(135deg, #6366F1 0%, #EC4899 100%)`

### Typography

**Font Stack**:
- **Headings**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
  - Bold, modern, highly legible
  - Weights: 600 (semibold), 700 (bold), 800 (extrabold)
  
- **Body**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
  - Weights: 400 (regular), 500 (medium)
  
- **Monospace** (for code/technical content): `'JetBrains Mono', 'Fira Code', monospace`

**Type Scale**:
- H1: `3.5rem` (56px) / Line-height: 1.1 / Letter-spacing: -0.02em
- H2: `2.5rem` (40px) / Line-height: 1.2 / Letter-spacing: -0.01em
- H3: `1.875rem` (30px) / Line-height: 1.3
- H4: `1.5rem` (24px) / Line-height: 1.4
- Body Large: `1.125rem` (18px) / Line-height: 1.6
- Body: `1rem` (16px) / Line-height: 1.6
- Small: `0.875rem` (14px) / Line-height: 1.5

### Spacing System

**Base Unit**: 4px
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px
- 2XL: 48px
- 3XL: 64px
- 4XL: 96px
- 5XL: 128px

### Component Design Principles

1. **Asymmetry & Dynamic Layouts**: Avoid centered, symmetrical layouts. Use offset grids, overlapping elements, and dynamic positioning.
2. **Micro-interactions**: Subtle hover effects, scroll-triggered animations, and interactive elements that respond to user actions.
3. **Bold Typography**: Large, confident headlines with strategic use of negative space.
4. **Custom Illustrations/Graphics**: Avoid stock photos. Use custom illustrations, abstract shapes, or AI-generated visuals that feel unique.
5. **Depth & Layering**: Use shadows, gradients, and z-index layering to create visual hierarchy.
6. **Unexpected Color Usage**: Use accent colors in unexpected places (borders, backgrounds of small elements, etc.)

---

## 📐 Site Structure & Pages

### 1. **Homepage** (`/`)
**Purpose**: Immediate impact, clear value proposition, showcase expertise

**Sections**:
- **Hero Section**: 
  - Large, bold headline (e.g., "AI That Works for Your Business, Not Against It")
  - Subheadline addressing pain points
  - Primary CTA: "Start Your AI Journey"
  - Secondary CTA: "See Our Work"
  - Animated background element (subtle gradient mesh or abstract shape)
  
- **Problem Statement**:
  - "Most AI tools promise the world. We deliver solutions that fit your business."
  - 3-column layout with icons/illustrations
  
- **Services Preview** (Cards):
  - Prompt Engineering (Video & Image)
  - Custom Software Development
  - AI Integration Consulting
  - Each card: Icon, title, 1-sentence description, "Learn More" link
  
- **Differentiator Section**:
  - "Why We're Different"
  - Focus on: Human expertise + AI tools, not just AI-generated content
  - Real results, not generic solutions
  
- **Case Studies/Results** (3-4 examples):
  - Before/After metrics
  - Client testimonials (with photos if possible)
  - Industry-specific examples
  
- **Process Overview**:
  - 4-step process visualization
  - "How We Work" section
  
- **Business Audit Form Section** (Prominent Feature):
  - Headline: "Get Your Free AI Business Audit"
  - Subheadline: Brief value proposition about the audit
  - Form fields:
    - First Name (text input)
    - Last Name (text input)
    - Company Name (text input)
    - Business Email Address (email input with validation)
  - **"AUDIT MY BUSINESS" Button**:
    - Shiny green button (emerald/success color: `#10B981`)
    - Prominent, eye-catching design
    - Hover effects (subtle glow/shine animation)
    - Large, bold typography
    - Full-width on mobile, appropriate sizing on desktop
  - Note: Form is non-functional mockup for now (no backend submission)
  
- **Final CTA Section**:
  - "Ready to Transform Your Business?"
  - Contact form or "Schedule a Consultation" button

### 2. **Services Page** (`/services`)
**Purpose**: Detailed breakdown of all offerings

**Layout**: 
- Sticky navigation sidebar (on desktop) for quick jumping
- Each service gets its own section with:
  - Icon/Illustration
  - Service name
  - What it includes (bullet points)
  - Who it's for
  - Example use cases
  - Pricing indicator (starting at $X or "Custom pricing")
  - CTA: "Get Started" or "Learn More"

**Services to Detail**:
1. **Video Prompt Engineering**
   - Optimizing prompts for video generation tools
   - Brand consistency in video content
   - Workflow automation
   
2. **Image Prompt Engineering**
   - Product photography alternatives
   - Marketing material generation
   - Brand asset creation
   
3. **Custom Software Development**
   - Junior-to-mid-level applications
   - Business process automation
   - Integration with existing tools
   - Rapid prototyping
   
4. **AI Integration Consulting**
   - Tool selection & implementation
   - Team training
   - Strategy development
   - Ongoing support

### 3. **About Page** (`/about`)
**Purpose**: Build trust, show expertise, humanize the brand

**Sections**:
- Founder/Team story (authentic, not AI-generated)
- Mission & values
- Approach/philosophy
- Why you started this (personal connection)
- Credentials/expertise highlights
- Photo(s) of real people

### 4. **Portfolio/Case Studies** (`/portfolio` or `/case-studies`)
**Purpose**: Prove results with concrete examples

**Layout**: Grid of case study cards
- Each case study includes:
  - Client name (or "Client in [Industry]")
  - Challenge
  - Solution
  - Results (metrics if possible)
  - Technologies/tools used
  - Visuals (screenshots, before/after, etc.)

### 5. **Blog/Resources** (`/blog` or `/resources`)
**Purpose**: SEO, thought leadership, education

**Content Strategy**:
- "How-to" guides (e.g., "How to Write Effective AI Image Prompts")
- Industry insights
- Tool reviews
- Case study deep-dives
- AI news & trends (with your take)

**Layout**: 
- Featured post at top
- Grid of recent posts
- Categories/tags
- Search functionality

### 6. **Contact Page** (`/contact`)
**Purpose**: Multiple ways to get in touch

**Sections**:
- Contact form (Name, Email, Company, Message, Service Interest)
- Email address
- Social links
- "Schedule a Call" button (Calendly integration)
- Office location (if applicable)
- Response time expectations

### 7. **Pricing Page** (`/pricing`) - Optional
**Purpose**: Transparency, qualification

**Layout**:
- Service packages (if standardized)
- "Custom Solutions" option
- "Starting at $X" for each service
- FAQ section addressing common pricing questions

---

## 🛠 Technology Stack Recommendations

### Frontend Framework
**Recommended**: **Next.js 14+** (App Router)
- Server-side rendering for SEO
- Fast performance
- Great developer experience
- Easy deployment (Vercel)

**Alternative**: **Astro** (if you want maximum performance and less JavaScript)

### Styling
**Recommended**: **Tailwind CSS** + **Framer Motion**
- Tailwind for utility-first styling (fast development)
- Framer Motion for smooth animations
- Custom design system via Tailwind config

**Alternative**: **CSS Modules** or **Styled Components** (if you prefer component-scoped styles)

### Content Management
- **Markdown files** (for blog posts) - simple, version-controlled
- **MDX** (if you want React components in markdown)
- **Headless CMS** (Sanity, Contentful) - if non-technical team members need to update content

### Forms & Contact
- **React Hook Form** (form handling) - for "Audit My Business" form
- **Resend** or **SendGrid** (email delivery) - for future form submission
- **Calendly** or **Cal.com** (scheduling)
- **Note**: "Audit My Business" form is mockup only initially (no backend required)

### Analytics & Tracking
- **Plausible Analytics** or **Fathom** (privacy-focused)
- **Google Analytics 4** (if you need free option)
- **Hotjar** or **Microsoft Clarity** (user behavior)

### Deployment
- **Vercel** (if using Next.js) - seamless integration
- **Netlify** (alternative, great for static sites)
- **Cloudflare Pages** (fast, global CDN)

### Additional Tools
- **TypeScript** (type safety)
- **ESLint** + **Prettier** (code quality)
- **GitHub Actions** (CI/CD)

---

## ✨ Unique Differentiators (Anti-Generic Strategy)

### 1. **Authentic Voice**
- Write copy in YOUR voice, not AI voice
- Use specific examples, not vague promises
- Include personal anecdotes where appropriate
- Show personality (humor, directness, etc.)

### 2. **Real Results, Not Hype**
- Specific metrics: "Increased efficiency by 40%"
- Real client names (with permission) or detailed anonymized cases
- Screenshots, demos, actual work samples
- Transparent about limitations

### 3. **Custom Visuals**
- Commission custom illustrations (or create unique AI-generated ones)
- Avoid stock photography
- Use your own brand colors consistently
- Create unique iconography

### 4. **Interactive Elements**
- Interactive demos of your work
- Calculators or tools (e.g., "ROI Calculator")
- Animated case studies
- Scroll-triggered reveals

### 5. **Educational Content**
- Free resources that actually help
- Transparent about your process
- Share knowledge, not just sell
- Build trust through education

### 6. **Human Touch**
- Real photos of you/team
- Video introductions
- Personal stories
- Behind-the-scenes content

### 7. **Technical Depth** (Without Being Boring)
- Show you understand the tech
- Explain complex concepts simply
- Use code snippets (styled nicely)
- Technical blog posts

---

## 📝 Content Strategy

### Homepage Copy (Example Framework)

**Hero Headline Options**:
- "AI That Fits Your Business, Not the Other Way Around"
- "Stop Fighting AI Tools. Start Using Them."
- "We Build AI Solutions That Actually Work"
- "Your Business, Supercharged by AI (Without the Hype)"

**Value Proposition**:
- Focus on outcomes, not features
- Address specific pain points
- Use "you" language
- Be direct, not salesy

### Service Descriptions Framework

For each service:
1. **What it is** (simple explanation)
2. **Who needs it** (target audience)
3. **What you get** (deliverables)
4. **Why it matters** (benefits)
5. **How it works** (process overview)

### Blog Content Ideas

**Evergreen Content**:
- "The Complete Guide to AI Image Prompts for E-commerce"
- "How to Choose the Right AI Tools for Your Business"
- "Building Your First AI-Powered App: A Non-Technical Guide"
- "ROI Calculator: Is AI Worth It for Your Business?"

**Case Studies**:
- Deep dives into specific projects
- Lessons learned
- Before/after comparisons

**Industry-Specific**:
- "AI for Restaurants: 5 Practical Applications"
- "How Retailers Can Use AI Image Generation"
- "AI Automation for Service Businesses"

---

## 🎬 Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Set up Next.js project with TypeScript
- [ ] Configure Tailwind CSS with custom design system
- [ ] Set up project structure
- [ ] Create base components (Button, Card, Container, etc.)
- [ ] Implement responsive navigation
- [ ] Set up routing

### Phase 2: Core Pages (Week 3-4)
- [ ] Build homepage (all sections)
- [ ] **Implement "Audit My Business" form** (non-functional mockup)
  - [ ] Form layout and styling
  - [ ] Input fields (First Name, Last Name, Company, Business Email)
  - [ ] Shiny green "AUDIT MY BUSINESS" button with hover effects
  - [ ] Form validation UI (visual feedback, no backend)
- [ ] Create services page
- [ ] Build about page
- [ ] Implement contact page with form
- [ ] Add footer with links

### Phase 3: Content & Polish (Week 5-6)
- [ ] Write all copy (homepage, services, about)
- [ ] Create/commission visuals (illustrations, icons)
- [ ] Build portfolio/case studies page
- [ ] Set up blog structure
- [ ] Write 3-5 initial blog posts

### Phase 4: Advanced Features (Week 7-8)
- [ ] Add animations (Framer Motion)
- [ ] Implement contact form backend
- [ ] Set up analytics
- [ ] Add SEO optimization
- [ ] Performance optimization
- [ ] Mobile responsiveness testing

### Phase 5: Launch Prep (Week 9)
- [ ] Content review & proofreading
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] Set up domain & hosting
- [ ] Deploy to production
- [ ] Final QA

### Phase 6: Post-Launch (Ongoing)
- [ ] Monitor analytics
- [ ] Gather user feedback
- [ ] Iterate based on data
- [ ] Regular blog content
- [ ] Update case studies

---

## 🎯 Key Performance Indicators (KPIs)

### Business Metrics
- Contact form submissions
- Consultation bookings
- Email signups
- Blog engagement (time on page, shares)

### Technical Metrics
- Page load speed (< 3 seconds)
- Lighthouse score (> 90)
- Mobile usability
- SEO rankings

### User Experience Metrics
- Bounce rate (< 50%)
- Time on site (> 2 minutes)
- Pages per session (> 2)
- Conversion rate (form submissions / visitors)

---

## 🚀 Quick Wins for Standing Out

1. **"Audit My Business" Form**: Prominent form on homepage with shiny green CTA button - captures leads and offers immediate value
2. **Interactive ROI Calculator**: Let visitors calculate potential savings
3. **Live Chat**: Real-time support (even if it's you initially)
4. **Video Content**: Short intro videos on key pages
5. **Transparent Pricing**: Even if custom, show starting ranges
6. **Fast Response Time**: "We respond within 24 hours" badge
7. **Social Proof**: Client logos, testimonials, case study numbers
8. **Resource Library**: Free templates, guides, checklists

---

## 📋 Content Checklist

### Homepage
- [ ] Compelling hero headline
- [ ] Clear value proposition
- [ ] Service overview
- [ ] **"Audit My Business" form section**
  - [ ] Form fields (First Name, Last Name, Company, Business Email)
  - [ ] Shiny green "AUDIT MY BUSINESS" button
  - [ ] Form validation UI (visual only)
  - [ ] Responsive design
- [ ] Social proof (testimonials/logos)
- [ ] Strong CTA
- [ ] Trust indicators

### Services Page
- [ ] Detailed service descriptions
- [ ] Use cases for each
- [ ] Pricing indicators
- [ ] Process explanation
- [ ] FAQs

### About Page
- [ ] Founder story
- [ ] Mission/values
- [ ] Why you do this
- [ ] Credentials
- [ ] Personal touch

### Contact Page
- [ ] Multiple contact methods
- [ ] Clear form
- [ ] Response expectations
- [ ] Social links

### Blog
- [ ] 5+ initial posts
- [ ] SEO-optimized
- [ ] Shareable content
- [ ] Categories/tags

---

## 🎨 Design Inspiration Notes

**Avoid**:
- Generic gradient hero sections
- Stock photos of people in suits
- Overused AI/tech imagery (circuits, neural networks)
- Cliché phrases ("revolutionary", "game-changing", "cutting-edge")
- Centered, symmetrical layouts everywhere
- Generic icon sets (Font Awesome defaults)

**Embrace**:
- Asymmetrical, dynamic layouts
- Custom illustrations with personality
- Bold typography choices
- Unexpected color combinations
- Micro-interactions and animations
- Real photography (if using photos)
- Unique iconography
- White space strategically used

---

## 🔧 Technical Considerations

### Performance
- Image optimization (Next.js Image component)
- Code splitting
- Lazy loading
- Minimal JavaScript
- CDN for assets

### SEO
- Semantic HTML
- Meta tags for all pages
- Open Graph images
- Structured data (JSON-LD)
- Sitemap.xml
- robots.txt

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- Alt text for images

### Security
- Form validation (client & server)
- Rate limiting on forms
- HTTPS
- Secure headers

---

## 📞 Next Steps

1. **Review this plan** and adjust based on your preferences
2. **Set up the project** using recommended tech stack
3. **Create design mockups** (Figma/Sketch) for key pages
4. **Write all copy** before building (content-first approach)
5. **Gather assets** (photos, illustrations, case study materials)
6. **Start building** following the phases above

---

## 💡 Final Notes

This website should feel like it was built by someone who truly understands AI and business, not someone who just used AI to generate it. Every element should serve a purpose, and the design should reflect your unique approach to AI consulting.

**Remember**: The best way to stand out in a crowded market is to be authentically you. Don't try to look like everyone else. Your unique perspective and approach are your biggest differentiators.

---

*This plan is a living document. Update it as the project evolves.*

