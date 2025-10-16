# Mint Clinic - Project Breakdown for Hosting Provider Selection

## Executive Summary

Mint Clinic is a German-style dental clinic website based in Sofia, Bulgaria, built as a modern, bilingual (Bulgarian/English) content management system with a focus on quality and personalized patient care. The website serves as the primary digital presence for the clinic, providing information about services, team members, booking capabilities, and educational content.

---

## Business Context

### Brand & Mission

- **Name**: Mint Clinic (mintclinic.com)
- **Type**: German dental clinic in Sofia, Bulgaria
- **Philosophy**: Quality over speed, personalized care, precision-focused treatments
- **Key Differentiator**: German-trained dentists bringing Western European standards to Bulgaria
- **Target Audience**: Bulgarian and international patients seeking high-quality dental care

### Core Business Features

1. **Service Catalog**: 6 main categories with multiple subcategories
   - Aesthetic Dental Medicine (veneers, bonding, DSD, teeth whitening)
   - Surgery (implants, extractions, gum procedures)
   - Prosthetics (crowns, bridges, dentures)
   - Conservative Therapy (fillings, root canals, cleaning)
   - Aligners (orthodontic treatment)
   - Emergency Dental Care

2. **Team Profiles**: Detailed pages for dental professionals with education, certifications, and philosophy
3. **Educational Blog**: Dental health articles and clinic updates
4. **Gallery**: Before/after photos, clinic facilities
5. **Contact & Booking**: Appointment scheduling system with email integration
6. **Multi-language Support**: Full bilingual experience (Bulgarian primary, English secondary)

---

## Technical Stack

### Frontend Framework

- **Next.js 15.1.7** with App Router
- **React 19.0.0** with Server Components
- **TypeScript 5.7.3** for type safety
- **Turbopack** for development (faster builds)

### Styling & UI

- **Tailwind CSS 3.4.17** - utility-first CSS framework
- **Radix UI** components (accordion, dialog, dropdown, navigation, etc.)
- **Shadcn/UI** - accessible component library
- **Motion (Framer Motion)** - animations
- **Custom fonts**: Comfortaa and DM Sans (Google Fonts)

### Content Management

- **Sanity CMS** (v4.10.1)
  - Headless CMS for managing all content
  - Studio mounted at `/studio` route
  - Sanity Vision plugin for GROQ queries
  - Media plugin for asset management
  - Code input plugin for syntax highlighting
  - Custom schema types for services, blog posts, team members, pages

- **MDX** (v3.1.1)
  - Markdown + React components for rich content
  - Rehype plugins for code highlighting, auto-linking headings
  - Prism for syntax highlighting
  - Support for embedded React components in content

### Internationalization

- **Custom i18n implementation** (not using external library)
- Route-based localization with `[locale]` dynamic segment
- Default locale: Bulgarian (bg)
- Secondary locale: English (en)
- All CMS content fields support both languages
- ~400+ translation keys for UI elements

### Email & Forms

- **Resend** - transactional email service
- **React Hook Form** + **Zod** - form validation
- **React Email** - email template rendering
- Contact form with CC/BCC support

### Media & Assets

- **Sanity CDN** - primary image hosting
- **Next.js Image Optimization** - automatic image optimization
- Support for external images (Unsplash, mintclinic.com)

### Development Tools

- **ESLint** - code quality
- **Prettier** - code formatting
- **Husky** - Git hooks
- **pnpm** - fast, efficient package manager

---

## Architecture

### Application Structure

```
mintclinic/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Localized routes (bg/en)
│   │   ├── about-us/
│   │   ├── blog/
│   │   │   ├── [slug]/          # Dynamic blog posts
│   │   │   └── mdx/             # MDX examples
│   │   ├── contacts/
│   │   ├── gallery/
│   │   ├── privacy-policy/
│   │   ├── team/
│   │   ├── terms/
│   │   └── uslugi/              # Services (Bulgarian)
│   │       ├── alajneri/        # Aligners
│   │       ├── estetika/        # Aesthetics
│   │       ├── hirurgiya/       # Surgery
│   │       ├── konservativna-terapiya/
│   │       ├── protetika/       # Prosthetics
│   │       └── speshna-dentalna-pomosht/
│   ├── studio/[[...tool]]/      # Sanity Studio CMS
│   ├── api/                     # API routes (contact form, etc.)
│   ├── layout.tsx               # Root layout
│   └── globals.css
│
├── components/                  # React components
│   ├── mdx/                    # MDX-specific components
│   ├── ui/                     # Shadcn/UI components
│   ├── HeaderSection.tsx
│   ├── Footer.tsx
│   ├── MobileBookingButton.tsx
│   └── craft.tsx               # Design system
│
├── sanity/                     # Sanity CMS configuration
│   ├── schemaTypes/           # Content models
│   │   ├── serviceType.ts
│   │   ├── postType.ts
│   │   ├── teamMemberType.ts
│   │   ├── categoryType.ts
│   │   └── ...
│   ├── env.ts
│   └── structure.ts
│
├── lib/                       # Utility functions
│   ├── i18n.ts               # Translations & locale logic
│   ├── sanity.ts             # Sanity client config
│   └── utils.ts
│
└── public/                   # Static assets
```

### Data Flow

1. **Content Creation**: Editors use Sanity Studio (`/studio`) to create/edit content
2. **Content Storage**: Content stored in Sanity's cloud infrastructure
3. **Content Delivery**: Next.js fetches from Sanity via API (GROQ queries)
4. **Rendering**: Server-side rendering with React Server Components
5. **Client Hydration**: Minimal client-side JavaScript for interactivity
6. **Caching**: Sanity CDN caches assets, Next.js caches rendered pages

### API Integrations

- **Sanity API**: Content fetching (read/write)
- **Resend API**: Email delivery
- **Sanity CDN**: Image delivery and transformation

---

## Infrastructure Requirements

### Runtime Environment

- **Node.js** compatibility required
- **Environment Variables**:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `NEXT_PUBLIC_SANITY_API_VERSION`
  - `SANITY_API_WRITE_TOKEN`
  - `RESEND_API_KEY`
  - `CONTACT_EMAIL_TO`
  - `CONTACT_EMAIL_CC`
  - `CONTACT_EMAIL_FROM`
  - `NODE_ENV`

### Build Process

- **Build Command**: `pnpm build`
- **Dev Command**: `pnpm dev --turbopack`
- **Start Command**: `pnpm start`
- **Build Output**: Next.js optimized production build
- **Build Time**: Moderate (TypeScript compilation, image optimization, page pre-rendering)

### Storage Requirements

- **Code Base**: ~50-100MB (with node_modules ~500MB)
- **Build Output**: ~100-200MB
- **Static Assets**: Minimal (images hosted on Sanity CDN)
- **Database**: None (all content in Sanity cloud)

### Compute Requirements

- **Server-Side Rendering**: Requires serverless/edge functions or Node.js server
- **API Routes**: Need serverless function support for contact form
- **Build Resources**: Moderate CPU/memory for TypeScript/Next.js build

### Network & CDN

- **Image Optimization**: Next.js Image component requires edge/serverless support
- **Asset Delivery**: Static assets should be CDN-distributed
- **External Dependencies**:
  - Sanity CDN (images)
  - Google Fonts
  - Resend API (email)

---

## Deployment Considerations

### Current Configuration

The project includes **Cloudflare Workers** configuration via:

- `wrangler.jsonc` - Cloudflare deployment config
- `@opennextjs/cloudflare` dev dependency - OpenNext adapter for Cloudflare

This suggests **Cloudflare Pages** is currently targeted/configured.

### Platform Requirements

Any hosting provider must support:

1. **Next.js 15 Features**:
   - App Router
   - Server Components
   - Server Actions
   - API Routes
   - Image Optimization
   - Middleware
   - Dynamic routes with ISR/SSR

2. **Build & Deploy**:
   - Node.js build environment
   - pnpm support (or npm/yarn alternative)
   - Environment variable injection
   - Automatic deployments from Git

3. **Runtime**:
   - Serverless functions or edge runtime
   - Streaming SSR support
   - Long-running requests for Sanity queries
   - CORS support for Sanity Studio

4. **Performance**:
   - CDN distribution (global edge network)
   - Automatic HTTPS/SSL
   - HTTP/2 or HTTP/3
   - Gzip/Brotli compression

### Platform Options Comparison

#### ✅ **Vercel** (Best for Next.js)

- **Pros**:
  - Native Next.js support (creators of Next.js)
  - Zero-config deployment
  - Excellent developer experience
  - Built-in image optimization
  - Edge network globally
  - Preview deployments
  - Analytics included
- **Cons**:
  - Higher cost at scale
  - Vendor lock-in to Vercel ecosystem
- **Estimated Cost**: Free tier (Hobby) suitable for small sites; Pro ~$20/mo for commercial use

#### ✅ **Cloudflare Pages** (Currently Configured)

- **Pros**:
  - Excellent global CDN (larger network than Vercel)
  - Very competitive pricing (generous free tier)
  - Fast edge performance
  - Good DDoS protection
  - Workers for serverless functions
  - Already configured in project
- **Cons**:
  - Next.js support via adapter (not native)
  - Some Next.js features may have limitations
  - Less mature Next.js integration than Vercel
- **Estimated Cost**: Free tier very generous; Pro $20/mo unlimited requests

#### ✅ **Netlify**

- **Pros**:
  - Good Next.js support
  - User-friendly interface
  - Good free tier
  - Preview deployments
  - Forms/functions included
- **Cons**:
  - Build minutes can be limiting
  - Performance not as fast as Vercel/Cloudflare
  - Image optimization less robust
- **Estimated Cost**: Free tier available; Pro $19/mo

#### ⚠️ **AWS Amplify**

- **Pros**:
  - Full AWS ecosystem integration
  - Scalable
  - Enterprise-grade
- **Cons**:
  - More complex setup
  - Higher learning curve
  - Pricing less predictable
- **Estimated Cost**: Pay-as-you-go, ~$15-50/mo depending on traffic

#### ⚠️ **Railway / Render**

- **Pros**:
  - Simple deployment
  - Good for full-stack apps
  - Affordable
- **Cons**:
  - Smaller CDN network
  - Less optimized for Next.js specifically
  - Performance may lag behind specialized platforms
- **Estimated Cost**: $5-20/mo

#### ❌ **Traditional Shared Hosting** (Not Recommended)

- Cannot support Next.js Server Components, API routes, or build process

---

## Third-Party Service Dependencies

### Critical Services

1. **Sanity CMS** (sanity.io)
   - **Purpose**: Content management, media storage
   - **Cost**: Free tier (3 users, 10k documents, 5GB assets); Growth plan $99/mo
   - **SLA**: 99.9% uptime
   - **Failover**: None (single source of truth)

2. **Resend** (resend.com)
   - **Purpose**: Transactional email delivery
   - **Cost**: Free tier (100 emails/day); Paid $20/mo (50k emails)
   - **SLA**: 99.99% uptime
   - **Failover**: Could switch to SendGrid, Postmark, AWS SES

### Optional Services

- **Google Fonts** - Free CDN for web fonts
- **Unsplash** - Stock photography (if used)

---

## Performance Characteristics

### Expected Traffic

- **Target Market**: Local Sofia + international patients
- **Est. Monthly Visitors**: 1,000 - 10,000 (small to medium)
- **Peak Times**: Business hours (9am-6pm Bulgarian time)
- **Geography**: Primarily Bulgaria, some EU/international

### Performance Requirements

- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **SEO**: High importance (organic search critical for dental services)
- **Mobile Performance**: Critical (many patients browse on mobile)

### Bandwidth Estimates

- **Avg Page Size**: 1-2MB (with images)
- **Monthly Bandwidth**: ~10-20GB at low end, could scale to 100GB+
- **API Requests**: Moderate (Sanity API calls for content)

---

## Scaling Considerations

### Current Scale

- **Content Volume**:
  - ~50 service pages
  - ~10-20 blog posts (growing)
  - ~5-10 team members
  - Gallery images
- **Update Frequency**: Weekly blog posts, monthly service updates
- **User Management**: 2-3 admin users (clinic staff)

### Growth Potential

- **Content Growth**: Likely to grow blog substantially
- **Traffic Growth**: Could 10x with marketing efforts
- **Feature Expansion**: Potential for:
  - Online booking integration
  - Patient portal
  - Payment processing
  - Appointment management system
  - Live chat
  - Video consultations

### Scalability Needs

- **Horizontal Scaling**: Serverless architecture handles this automatically
- **Database**: Sanity cloud scales independently
- **Media**: Sanity CDN handles asset delivery at scale
- **Caching**: ISR (Incremental Static Regeneration) recommended for content pages

---

## Security & Compliance

### Data Handling

- **PII Collection**: Email, phone, name (contact form)
- **GDPR Compliance**: Required (EU patients)
- **Data Storage**: Contact form data sent via email (no database storage)
- **Sanity Content**: Public information only

### Security Requirements

- **HTTPS**: Required (standard for all modern platforms)
- **CORS**: Configured for Sanity Studio
- **Environment Variables**: Secrets management required
- **API Token Protection**: Server-side only (not exposed to client)

### Backup & Recovery

- **Content**: Sanity handles backups/versioning
- **Code**: Git repository (GitHub assumed)
- **Deployment**: Rollback capability essential

---

## Development Workflow

### Team Structure

- **Developers**: 1-2 (based on repository)
- **Content Editors**: 2-3 (clinic staff)
- **Deployment Frequency**: As needed (likely weekly to monthly)

### Git Workflow

- **Main Branch**: `main` (production)
- **Recent Activity**: Active development (recent commits on translations, Sanity integration)
- **CI/CD**: Likely automated via hosting provider

### Development Environment

- Local development via `pnpm dev`
- Sanity Studio accessible locally at `/studio`
- Environment variables via `.env.local`

---

## Cost Estimate Summary

### Hosting Platform Options

**Option 1: Vercel (Recommended for Ease)**

- Hosting: $0 (Hobby) or $20/mo (Pro)
- Sanity CMS: $0 (Free tier likely sufficient)
- Resend: $0 (100 emails/day sufficient)
- Domain: ~$15/year
- **Total: $0-20/month + $15/year**

**Option 2: Cloudflare Pages (Best Value)**

- Hosting: $0 (Free tier) or $20/mo (Pro)
- Sanity CMS: $0
- Resend: $0
- Domain: ~$15/year (can register via Cloudflare)
- **Total: $0-20/month + $15/year**

**Option 3: Netlify**

- Hosting: $0 (Free) or $19/mo (Pro)
- Sanity CMS: $0
- Resend: $0
- Domain: ~$15/year
- **Total: $0-19/month + $15/year**

---

## Recommendations

### Primary Recommendation: **Cloudflare Pages**

**Rationale**:

1. ✅ Already configured in the project (`wrangler.jsonc`, `@opennextjs/cloudflare`)
2. ✅ Excellent global CDN with presence in 300+ cities
3. ✅ Very generous free tier suitable for clinic's expected traffic
4. ✅ Strong DDoS protection (important for business site)
5. ✅ Fast performance for Bulgarian users (Sofia has Cloudflare edge server)
6. ✅ Competitive pricing if growth requires paid tier
7. ✅ Good developer experience with Wrangler CLI
8. ✅ Web analytics included (privacy-friendly alternative to Google Analytics)

**Potential Issues**:

- Next.js adapter may have edge cases (test thoroughly)
- Slightly more complex than Vercel's zero-config approach

### Alternative Recommendation: **Vercel**

**When to Choose**:

- If Cloudflare Next.js adapter causes compatibility issues
- If team prioritizes simplest possible deployment
- If native Next.js features are critical
- If willing to pay premium for best-in-class Next.js support

**Rationale**:

1. ✅ Zero-config deployment (connect GitHub repo, done)
2. ✅ Native Next.js support (all features guaranteed to work)
3. ✅ Excellent preview deployments for testing
4. ✅ Built-in analytics and performance monitoring
5. ✅ Superior developer experience

**Potential Issues**:

- Higher cost at scale (bandwidth limits on free tier)
- Less generous free tier than Cloudflare

### Not Recommended:

- ❌ **Traditional hosting** (shared hosting, cPanel, etc.) - Cannot run Next.js
- ⚠️ **Self-hosted VPS** - Overkill for this project, requires DevOps maintenance
- ⚠️ **AWS/GCP raw infrastructure** - Too complex for needs, cost unpredictable

---

## Migration Path

If changing from current setup:

1. **From Cloudflare → Vercel**:
   - Remove `wrangler.jsonc`
   - Remove `@opennextjs/cloudflare` dependency
   - Connect GitHub repo to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy

2. **From Anything → Cloudflare**:
   - Add `wrangler.jsonc` (already present)
   - Add `@opennextjs/cloudflare` (already present)
   - Install Wrangler CLI: `pnpm add -g wrangler`
   - Build: `pnpm build`
   - Deploy: `wrangler pages deploy .open-next/assets --project-name mintclinic`

---

## Questions for Hosting Decision

1. **Budget**: Is there a monthly budget limit, or is performance the priority?
2. **Traffic Expectations**: What's the realistic growth projection over 12 months?
3. **Technical Expertise**: How comfortable is the team with platform configuration?
4. **Geographic Priority**: Is Bulgaria/EU performance more critical than global?
5. **Future Features**: Is there a roadmap that might change hosting needs?
6. **Email Volume**: Will contact form traffic stay low, or could it spike?
7. **Analytics Needs**: Are built-in analytics sufficient, or is Google Analytics preferred?

---

## Conclusion

**Mint Clinic is well-architected for modern JAMstack hosting.** The Next.js + Sanity combination is industry-standard, mature, and supported by all major platforms. The bilingual content management, MDX support, and clean separation of concerns make it maintainable and scalable.

**For this specific project, Cloudflare Pages offers the best combination of performance, cost, and features**, especially given the existing configuration. However, **Vercel remains the safest choice if simplicity and guaranteed Next.js compatibility are paramount**.

Either platform will serve the clinic well for years to come, with minimal operational overhead and excellent performance for Bulgarian and international patients.
