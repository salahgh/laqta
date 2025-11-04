# Laqta - Creative Agency Website

![Laqta Logo](/public/images/laqta.svg)

A modern, multilingual Next.js application for a creative agency featuring blog capabilities, CRM integration, and comprehensive service showcases.

---

## Overview

Laqta is a full-featured agency website built with Next.js 15 (App Router), featuring:

- **Multi-language Support**: English, Arabic (RTL), and French
- **Blog System**: Dynamic articles with categories, tags, and search
- **CRM Integration**: Odoo CRM for lead management
- **Headless CMS**: Strapi for content management
- **Modern Stack**: React 18, TypeScript, Tailwind CSS
- **SEO Optimized**: Server-side rendering, metadata generation
- **Performance**: Standalone build, optimized images, analytics

---

## Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/salahgh/laqta.git
cd laqta

# Install dependencies
npm install

# Set up environment variables
cp .env.template .env.local
# Edit .env.local with your credentials

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Technology Stack

### Core Framework
- **Next.js 15.3.3** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.4.5** - Type safety

### Styling & UI
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Lucide React 0.522.0** - Icon library
- **Custom Design System** - Brand colors, typography, spacing

### Forms & Validation
- **Formik 2.4.6** - Form state management
- **Yup 1.6.1** - Schema validation

### Internationalization
- **next-intl 4.3.4** - Multi-language support
- **Supported Locales**: en, ar (RTL), fr

### External Integrations
- **Odoo CRM** - Lead management via XML-RPC
- **Strapi CMS** - Headless content management
- **Supabase** - Image storage and optimization
- **Vercel Analytics** - Performance monitoring

---

## Project Structure

```
laqta/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   └── odoo/         # Odoo CRM integration
│   │   └── [locale]/         # Internationalized pages
│   │       ├── about/
│   │       ├── blog/
│   │       │   ├── all/
│   │       │   └── articles/[slug]/
│   │       ├── brands/
│   │       ├── contact/
│   │       ├── partners/
│   │       ├── services/
│   │       └── ...
│   └── i18n/                 # i18n configuration
│
├── components/
│   ├── icons/                # SVG icon components
│   ├── layout/               # Layout components (Navigation, etc.)
│   ├── sections/             # Page section components
│   │   ├── aboutLaqta.tsx
│   │   ├── contact/
│   │   ├── ContactUs.tsx
│   │   ├── FAQSection/
│   │   ├── Footer.tsx
│   │   ├── HeroSection.jsx
│   │   ├── OurWorksSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── ...
│   └── ui/                   # UI components
│       ├── Avatar.jsx
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── FormInput.tsx
│       └── ...
│
├── lib/
│   ├── strapi.ts             # Strapi CMS integration
│   └── utils.ts              # Utility functions
│
├── messages/                 # i18n translations
│   ├── ar.json               # Arabic (13KB)
│   ├── en.json               # English (10KB)
│   └── fr.json               # French (11KB)
│
├── public/
│   ├── icons/                # Static SVG icons
│   └── images/               # Static images
│
├── styles/
│   └── globals.css           # Global styles & Tailwind
│
└── Configuration Files
    ├── next.config.ts        # Next.js configuration
    ├── tailwind.config.js    # Tailwind configuration
    ├── tsconfig.json         # TypeScript configuration
    ├── middleware.ts         # i18n middleware
    └── package.json          # Dependencies
```

---

## Features

### 1. Internationalization (i18n)
- **3 Languages**: English, Arabic (RTL support), French
- **Route-based locales**: `/en/*`, `/ar/*`, `/fr/*`
- **Automatic detection**: Based on browser preferences
- **Translation files**: JSON-based with 10-13KB per locale
- **next-intl integration**: Server and client components

### 2. Blog System
- **Dynamic articles** with slug-based URLs
- **Categories and tags** for organization
- **Author profiles** with avatars and bios
- **Reading time estimation**
- **Search functionality**
- **Pagination** for article listings
- **Social sharing** integration
- **Newsletter subscription**
- **Reading progress indicator**

### 3. Contact & Lead Management
- **Multi-step forms** with validation
- **Odoo CRM integration** via XML-RPC
- **Lead tracking** in CRM pipeline
- **Partnership inquiry forms**
- **Email notifications** (via Odoo)
- **Form validation** with Formik + Yup

### 4. Content Management
- **Strapi CMS** for dynamic content
- **Articles management**: Title, content, images, metadata
- **Services management**: Descriptions, pricing, features
- **Categories and tags** management
- **Media library** integration
- **API-first architecture**

### 5. Services Showcase
- **Service cards** with gradient designs
- **Pricing plans** and comparisons
- **Service categories**
- **Call-to-action buttons**
- **Detailed service pages**

### 6. Portfolio/Works
- **Project cards** with hover effects
- **Case studies** and success stories
- **Client testimonials**
- **Brand showcase**
- **Partner listings**

### 7. SEO & Performance
- **Server-side rendering (SSR)**
- **Static generation** for locale pages
- **Metadata generation** per page
- **Open Graph tags** for social sharing
- **Image optimization** with Next.js Image
- **Standalone build** for optimized deployment
- **Vercel Analytics** integration

### 8. Responsive Design
- **Mobile-first approach**
- **All breakpoints**: sm, md, lg, xl, 2xl
- **Touch-friendly navigation**
- **Optimized for tablets and desktops**

---

## Available Scripts

```bash
# Development server (port 3000)
npm run dev

# Production build
npm run build

# Start production server (port 3001)
npm start

# Lint code
npm run lint
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```bash
# Odoo CRM Configuration
ODOO_URL=https://sarl-leqta-prod.odoo.com
ODOO_DB=sarl-leqta-prod
ODOO_API_KEY=your_odoo_api_key
ODOO_USERNAME=your_email@example.com

# Strapi CMS Configuration
NEXT_PUBLIC_STRAPI_URL_2=http://localhost:1337
```

See `.env.template` for a complete list with descriptions.

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables
4. Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The application is configured with `output: "standalone"` for deployment to:
- AWS (EC2, ECS, Lambda)
- Google Cloud Platform (Cloud Run, App Engine)
- Azure (App Service, Container Instances)
- DigitalOcean (App Platform, Droplets)
- Netlify, Render, Railway, Fly.io

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guides.

---

## Development Workflow

### 1. Local Development

```bash
# Start dev server with hot reload
npm run dev

# Access application
# English: http://localhost:3000/en
# Arabic: http://localhost:3000/ar
# French: http://localhost:3000/fr
```

### 2. Adding New Pages

```bash
# Create new page
src/app/[locale]/your-page/page.tsx
```

```tsx
export default function YourPage() {
  return <div>Your content</div>
}

// Add metadata
export async function generateMetadata({ params }) {
  return {
    title: 'Your Page Title',
    description: 'Your page description'
  }
}
```

### 3. Adding Translations

Add translations to all locale files:

```json
// messages/en.json
{
  "yourPage": {
    "title": "Your Page Title",
    "description": "Your page description"
  }
}
```

Use in components:

```tsx
import { useTranslations } from 'next-intl'

export default function YourComponent() {
  const t = useTranslations('yourPage')
  return <h1>{t('title')}</h1>
}
```

### 4. Adding New Components

```bash
# UI components
components/ui/YourComponent.tsx

# Section components
components/sections/YourSection.tsx
```

### 5. Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint errors
npm run lint -- --fix

# Format with Prettier
npx prettier --write .
```

---

## External Services Setup

### 1. Odoo CRM Setup

1. Create account at [odoo.com](https://www.odoo.com/)
2. Set up CRM pipeline with "Warm" stage
3. Generate API key from user settings
4. Add credentials to `.env.local`

### 2. Strapi CMS Setup

#### Development (Local)
```bash
# Clone Strapi instance or create new one
npx create-strapi-app@latest my-cms --quickstart

# Configure content types:
# - Articles
# - Services
# - Categories
# - Tags

# Start Strapi
npm run develop
```

#### Production
- Deploy Strapi to Render, Heroku, or VPS
- Update `NEXT_PUBLIC_STRAPI_URL_2` in `.env.production`

### 3. Supabase Storage Setup

1. Create project at [supabase.com](https://supabase.com/)
2. Create public storage bucket
3. Configure CORS policies
4. Update `next.config.ts` with your bucket URL

---

## Troubleshooting

### Common Issues

#### Port 3000 already in use
```bash
npm run dev -- -p 3002
```

#### Strapi connection fails
```bash
# Verify Strapi is running
curl http://localhost:1337/api/articles

# Check environment variable
echo $NEXT_PUBLIC_STRAPI_URL_2
```

#### TypeScript errors
```bash
# Rebuild
npm run build

# Check specific file
npx tsc --noEmit src/app/[locale]/page.tsx
```

#### Missing translations
- Ensure all keys exist in all locale files (en.json, ar.json, fr.json)
- Check for typos in translation keys

#### Odoo connection fails
- Verify credentials in `.env.local`
- Test Odoo API manually with curl or Postman
- Check firewall/network restrictions

See [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) for more details.

---

## Browser Support

| Browser | Minimum Version | Recommended |
|---------|----------------|-------------|
| Chrome | 90+ | Latest |
| Edge | 90+ | Latest |
| Firefox | 88+ | Latest |
| Safari | 14+ | Latest |
| Mobile Safari (iOS) | 14+ | Latest |
| Chrome Mobile (Android) | 90+ | Latest |

---

## Performance

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

### Bundle Sizes
- First Load JS: ~150-200KB
- Total Page Weight: ~500KB-1MB (with images)
- Time to Interactive: < 3 seconds

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Development Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new files
- Follow ESLint rules
- Format with Prettier (4 spaces)
- Use Tailwind CSS for styling
- Write meaningful commit messages

---

## Documentation

- **[requirements.md](./requirements.md)** - System requirements and dependencies
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Architecture and design patterns
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment guides for various platforms
- **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** - Development workflow and best practices
- **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** - API routes and integrations

---

## License

This project is proprietary and confidential.

Copyright (c) 2025 Laqta. All rights reserved.

---

## Support & Contact

- **GitHub Issues**: [https://github.com/salahgh/laqta/issues](https://github.com/salahgh/laqta/issues)
- **Documentation**: See documentation files listed above

---

## Acknowledgments

- **Next.js Team** - Amazing framework
- **Vercel** - Deployment platform and analytics
- **Tailwind Labs** - Tailwind CSS
- **Odoo** - CRM platform
- **Strapi** - Headless CMS
- **Supabase** - Storage and database platform

---

## Project Status

**Current Version**: 1.0.0 (based on Next.js 15.3.3)

**Status**: Active Development

**Last Updated**: January 2025

---

Built with care by the Laqta Team
