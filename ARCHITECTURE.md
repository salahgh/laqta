# Architecture Documentation

## Laqta - Creative Agency Website

**Last Updated**: January 2025
**Version**: 1.0.0 (Next.js 15.3.3)

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture Type](#architecture-type)
3. [Design Patterns](#design-patterns)
4. [Technology Stack](#technology-stack)
5. [Application Layers](#application-layers)
6. [Data Flow](#data-flow)
7. [Routing Architecture](#routing-architecture)
8. [Component Architecture](#component-architecture)
9. [State Management](#state-management)
10. [Internationalization (i18n)](#internationalization-i18n)
11. [External Integrations](#external-integrations)
12. [Build & Deployment](#build--deployment)
13. [Security Architecture](#security-architecture)
14. [Performance Optimizations](#performance-optimizations)
15. [Design System](#design-system)
16. [File Organization](#file-organization)
17. [Key Technical Decisions](#key-technical-decisions)

---

## Overview

Laqta is a modern, server-side rendered (SSR) multilingual website built using Next.js 15 with the App Router architecture. The application follows a component-based design pattern with clear separation of concerns across UI components, business logic, and external service integrations.

### Architecture Goals

- **Performance**: Fast page loads with SSR and static generation
- **SEO**: Search engine optimized with metadata and SSR
- **Scalability**: Modular architecture for easy feature additions
- **Maintainability**: Clear code organization and TypeScript type safety
- **Internationalization**: Native multi-language support
- **Accessibility**: WCAG 2.1 compliant components

---

## Architecture Type

### Hybrid Multi-Page Application (MPA) with SPA Features

The application uses **Next.js App Router** which provides:

1. **Server-Side Rendering (SSR)**: Pages are rendered on the server for optimal SEO and initial load performance
2. **Static Site Generation (SSG)**: Locale routes are statically generated at build time
3. **Client-Side Navigation**: React-based client-side routing for SPA-like transitions
4. **API Routes**: Built-in server-side API endpoints for backend functionality

```
┌─────────────────────────────────────────────────────┐
│              Browser (Client)                       │
│  ┌──────────────────────────────────────────────┐  │
│  │  React Components (Client-side)              │  │
│  │  - Interactive UI                            │  │
│  │  - Form Handling                             │  │
│  │  - Client-side Routing                       │  │
│  └────────────────┬─────────────────────────────┘  │
└───────────────────┼─────────────────────────────────┘
                    │ HTTP/HTTPS
┌───────────────────┼─────────────────────────────────┐
│  ┌────────────────▼─────────────────────────────┐  │
│  │  Next.js Server (SSR)                        │  │
│  │  - Server Components                         │  │
│  │  - Metadata Generation                       │  │
│  │  - i18n Middleware                           │  │
│  └────────────────┬─────────────────────────────┘  │
│                   │                                  │
│  ┌────────────────▼─────────────────────────────┐  │
│  │  API Routes                                  │  │
│  │  - /api/odoo/contact                         │  │
│  └────────────────┬─────────────────────────────┘  │
└───────────────────┼─────────────────────────────────┘
                    │
        ┌───────────┴──────────┬─────────────┐
        │                      │             │
┌───────▼────────┐  ┌──────────▼──────┐  ┌──▼───────┐
│   Odoo CRM     │  │  Strapi CMS     │  │ Supabase │
│   (XML-RPC)    │  │  (REST API)     │  │ Storage  │
└────────────────┘  └─────────────────┘  └──────────┘
```

---

## Design Patterns

### 1. Component-Based Architecture

**Pattern**: Atomic Design-inspired component hierarchy

```
Atoms (UI Components)
  ├── Button
  ├── Badge
  ├── Avatar
  ├── FormInput
  └── ...

Molecules (Composite Components)
  ├── ContactInfo
  ├── ServiceCard
  ├── ProjectCard
  └── ...

Organisms (Section Components)
  ├── HeroSection
  ├── ServicesSection
  ├── FAQSection
  ├── Footer
  └── ...

Templates (Layout Components)
  ├── Navigation
  └── Layout

Pages (Route Components)
  ├── Home
  ├── About
  ├── Blog
  └── ...
```

### 2. Server-First Pattern

**Pattern**: Server Components by default, Client Components when needed

- **Default**: All components are Server Components (React 18+)
- **'use client'**: Only used when interactivity is required (forms, click handlers)
- **Benefits**: Reduced JavaScript bundle, faster initial load, better SEO

```tsx
// Server Component (default)
export default function ServicesSection() {
  const data = await fetchServices(); // Runs on server
  return <div>{/* Rendered on server */}</div>
}

// Client Component (when needed)
'use client'
export default function ContactForm() {
  const [state, setState] = useState();
  return <form>{/* Interactive */}</form>
}
```

### 3. Route-Based Code Splitting

**Pattern**: Automatic code splitting per route

Each page/route automatically gets its own JavaScript bundle:

```
/en/about     → about.js
/en/services  → services.js
/en/blog      → blog.js
```

### 4. Repository Pattern for External Services

**Pattern**: Abstraction layer for external APIs

```typescript
// lib/strapi.ts - Strapi API abstraction
export async function getArticles(locale, page, limit) {
  // Implementation details hidden
}

export async function getArticleBySlug(slug, locale) {
  // Implementation details hidden
}

// Usage in components
const articles = await getArticles('en', 1, 10);
```

### 5. Middleware Pattern for Cross-Cutting Concerns

**Pattern**: Next.js middleware for request-level logic

```typescript
// middleware.ts
export default createMiddleware(routing);

// Intercepts all requests for:
// - Locale detection
// - Routing
// - Redirects
```

### 6. Composition over Inheritance

**Pattern**: Component composition using React children and props

```tsx
<Layout>
  <HeroSection />
  <ServicesSection />
  <Footer />
</Layout>
```

### 7. Container/Presentational Pattern

**Pattern**: Separation of data fetching and UI rendering

```tsx
// Container (data fetching)
async function BlogPageContainer({ params }) {
  const articles = await getArticles(params.locale);
  return <ArticleList articles={articles} />;
}

// Presentational (UI only)
function ArticleList({ articles }) {
  return <div>{articles.map(...)}</div>;
}
```

---

## Technology Stack

### Core Technologies

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Runtime** | Node.js 18+ | JavaScript runtime environment |
| **Framework** | Next.js 15.3.3 | React framework with App Router |
| **UI Library** | React 18.2.0 | Component-based UI |
| **Language** | TypeScript 5.4.5 | Type safety and tooling |
| **Styling** | Tailwind CSS 3.4.0 | Utility-first CSS |
| **Forms** | Formik 2.4.6 + Yup 1.6.1 | Form management and validation |
| **i18n** | next-intl 4.3.4 | Internationalization |

### External Services

| Service | Purpose | Protocol |
|---------|---------|----------|
| **Odoo CRM** | Lead management | XML-RPC |
| **Strapi CMS** | Content management | REST API |
| **Supabase** | Image storage | HTTP/S3-compatible |
| **Vercel Analytics** | Performance monitoring | JavaScript SDK |

---

## Application Layers

### 1. Presentation Layer

**Location**: `components/`, `src/app/[locale]/*/page.tsx`

**Responsibilities**:
- User interface rendering
- User interactions
- Form handling
- Visual feedback

**Technologies**: React, Tailwind CSS, Lucide icons

### 2. Business Logic Layer

**Location**: `lib/`, API route handlers

**Responsibilities**:
- Data transformation
- Business rules
- Validation logic
- External service integration

**Technologies**: TypeScript, Formik, Yup

### 3. Data Access Layer

**Location**: `lib/strapi.ts`, `src/app/api/odoo/contact/handler.ts`

**Responsibilities**:
- External API communication
- Data fetching and caching
- Error handling
- Response transformation

**Technologies**: fetch API, XML-RPC client

### 4. Infrastructure Layer

**Location**: `middleware.ts`, `next.config.ts`

**Responsibilities**:
- Routing and redirects
- Request/response handling
- Environment configuration
- Build optimization

**Technologies**: Next.js middleware, Node.js

---

## Data Flow

### 1. Server-Side Rendering (SSR) Flow

```
1. Client Request
   └─→ http://localhost:3000/en/about

2. Middleware
   └─→ Detects locale: 'en'
   └─→ Validates route
   └─→ Passes to page handler

3. Server Component
   └─→ Fetches data (if needed)
   └─→ Renders to HTML
   └─→ Generates metadata

4. Response
   └─→ HTML sent to client
   └─→ Hydration on client
   └─→ Interactive app
```

### 2. API Route Flow (Contact Form)

```
1. Client (Browser)
   └─→ POST /api/odoo/contact
   └─→ Body: { name, email, message }

2. API Route Handler
   └─→ Validate request body
   └─→ Authenticate with Odoo
   └─→ Find "Warm" stage ID
   └─→ Create lead in Odoo
   └─→ Handle errors

3. Response
   └─→ { success: true } or { error: '...' }

4. Client Feedback
   └─→ Show success/error message
```

### 3. Content Management Flow (Blog)

```
1. Content Editor
   └─→ Creates article in Strapi CMS
   └─→ Publishes

2. Next.js Build/Runtime
   └─→ Fetches articles via REST API
   └─→ Caches in Next.js data cache
   └─→ Renders article pages

3. User Request
   └─→ /en/blog/articles/my-article
   └─→ Served from cache or SSR
```

---

## Routing Architecture

### File-Based Routing (Next.js App Router)

```
src/app/[locale]/
├── page.tsx                      → / (Homepage)
├── about/page.tsx                → /about
├── services/page.tsx             → /services
├── blog/
│   ├── page.tsx                  → /blog
│   ├── all/page.tsx              → /blog/all
│   └── articles/[slug]/page.tsx  → /blog/articles/:slug (Dynamic)
├── contact/page.tsx              → /contact
├── partners/page.tsx             → /partners
└── brands/page.tsx               → /brands
```

### Dynamic Routes

**Pattern**: `[param]` syntax for dynamic segments

```tsx
// src/app/[locale]/blog/articles/[slug]/page.tsx

export default function ArticlePage({ params }) {
  const { locale, slug } = params;
  // Fetch article by slug
}

// Generates static pages at build time
export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map(article => ({
    slug: article.slug
  }));
}
```

### Internationalized Routing

**Pattern**: Locale prefix for all routes

```
/en/about     → English version
/ar/about     → Arabic version (RTL)
/fr/about     → French version
```

**Implementation**: `middleware.ts` with next-intl

```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(ar|en|fr)/:path*']
};
```

---

## Component Architecture

### Component Organization

```
components/
├── icons/              # Icon components (SVG)
│   ├── ArrowIcon.jsx
│   ├── CheckIcon.jsx
│   └── ...
│
├── layout/             # Layout components
│   └── Navigation.jsx   # Main navigation bar
│
├── sections/           # Page section components
│   ├── HeroSection.jsx          # Homepage hero
│   ├── ServicesSection.tsx      # Services showcase
│   ├── Footer.tsx               # Site footer
│   ├── ContactUs.tsx            # Contact section
│   ├── FAQSection/              # FAQ accordion
│   └── ...
│
└── ui/                 # Reusable UI components
    ├── Avatar.jsx               # User avatar
    ├── Badge.tsx                # Status badge
    ├── Button.tsx               # Button variants
    ├── FormInput.tsx            # Form input field
    ├── ServiceCard.tsx          # Service card
    ├── ProjectCard.tsx          # Project card
    └── ...
```

### Component Guidelines

1. **Server Components First**: Default to Server Components
2. **Client Components**: Use `'use client'` only when needed
3. **TypeScript**: Use `.tsx` for new components (legacy `.jsx` exists)
4. **Props Interface**: Define TypeScript interfaces for props
5. **Styling**: Use Tailwind CSS utility classes
6. **Reusability**: Extract common patterns into ui/ components

### Example Component Structure

```tsx
// components/ui/ServiceCard.tsx

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  gradient
}: ServiceCardProps) {
  return (
    <div className={`rounded-lg p-6 ${gradient}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```

---

## State Management

### State Management Strategy

The application uses a **server-first state management approach**:

1. **Server State**: Data fetched on the server (default)
2. **URL State**: Query params and route params
3. **Client State**: React useState for local UI state
4. **Form State**: Formik for form management

### State Types

| State Type | Implementation | Example |
|------------|----------------|---------|
| **Server State** | React Server Components | Article data, services |
| **URL State** | Next.js router params | Locale, article slug |
| **Client State** | React useState | Form fields, modals |
| **Form State** | Formik | Contact form, partnership form |

### No Global State Library

**Rationale**:
- Server Components reduce need for client-side state
- Props drilling is minimal with component composition
- Forms use Formik for local state
- No complex shared state requirements

If global state becomes necessary, consider:
- React Context (for simple shared state)
- Zustand (lightweight alternative to Redux)
- React Query (for server state management)

---

## Internationalization (i18n)

### Architecture

```
┌─────────────────────────────────────────────────────┐
│              User Request                           │
│         http://example.com/en/about                 │
└───────────────────┬─────────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────────┐
│           Middleware (middleware.ts)                │
│  - Detects locale from URL                          │
│  - Validates against supported locales              │
│  - Redirects if needed                              │
└───────────────────┬─────────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────────┐
│      Next.js Routing (app/[locale]/...)            │
│  - Passes locale to page component                  │
│  - Loads translations                               │
└───────────────────┬─────────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────────┐
│      Component Rendering                            │
│  - useTranslations() hook                           │
│  - Renders translated content                       │
│  - Applies RTL styles (Arabic)                      │
└─────────────────────────────────────────────────────┘
```

### Translation Files

```
messages/
├── en.json    # English (10KB)
├── ar.json    # Arabic (13KB) - includes RTL
└── fr.json    # French (11KB)
```

### Translation Structure

```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services"
  },
  "hero": {
    "title": "Welcome to Laqta",
    "subtitle": "Your creative partner"
  }
}
```

### Usage in Components

```tsx
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}
```

### RTL Support

**Implementation**: Layout component detects locale and applies `dir` attribute

```tsx
// src/app/[locale]/layout.tsx

export default function Layout({ children, params }) {
  const isRTL = params.locale === 'ar';

  return (
    <html lang={params.locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
```

**Tailwind RTL**: Use Tailwind's RTL variants

```tsx
<div className="ml-4 rtl:mr-4 rtl:ml-0">
  {/* Margin left in LTR, margin right in RTL */}
</div>
```

---

## External Integrations

### 1. Odoo CRM Integration

**Architecture**: Server-side API route → XML-RPC → Odoo

```
Client Form
  ↓ POST
API Route (/api/odoo/contact)
  ↓ XML-RPC
Odoo CRM (sarl-leqta-prod.odoo.com)
  ↓
Lead Created
```

**Implementation**: `src/app/api/odoo/contact/handler.ts`

```typescript
// Workflow
1. Authenticate with Odoo (XML-RPC authenticate)
2. Find "Warm" stage ID (search + read)
3. Create lead (create method)
4. Return success/error response
```

**Configuration**:
```bash
ODOO_URL=https://sarl-leqta-prod.odoo.com
ODOO_DB=sarl-leqta-prod
ODOO_API_KEY=...
ODOO_USERNAME=...
```

### 2. Strapi CMS Integration

**Architecture**: Server Component → REST API → Strapi

```
Server Component
  ↓ fetch()
Strapi REST API (my-blog-cms-sfs1.onrender.com)
  ↓
Articles, Services, Categories, Tags
```

**Implementation**: `lib/strapi.ts`

**Key Functions**:
```typescript
getArticles(locale, page, limit)      // Paginated articles
getArticleBySlug(slug, locale)        // Single article
getServices(locale)                   // Services list
searchArticles(query, locale)         // Search
getCategories(locale)                 // Categories
getTags(locale)                       // Tags
```

**Data Structure**:
```typescript
interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  author: Author;
  category: Category;
  tags: Tag[];
  featuredImage: Media;
  locale: string;
}
```

### 3. Supabase Storage Integration

**Architecture**: Next.js Image → Supabase Storage

```typescript
// next.config.ts
images: {
  remotePatterns: [{
    protocol: 'https',
    hostname: 'nmgsempbczwwefyzsofb.supabase.co',
    pathname: '/storage/v1/object/public/**'
  }]
}

// Usage in components
<Image
  src="https://nmgsempbczwwefyzsofb.supabase.co/storage/v1/object/public/images/hero.jpg"
  width={1200}
  height={600}
  alt="Hero image"
/>
```

**Benefits**:
- Automatic image optimization
- Responsive images
- Lazy loading
- WebP conversion

---

## Build & Deployment

### Build Architecture

```
Development Mode (npm run dev)
  ↓
Next.js Dev Server
  ├── Hot Module Replacement (HMR)
  ├── Fast Refresh
  └── TypeScript checking (disabled)

Production Build (npm run build)
  ↓
1. TypeScript compilation (errors ignored)
2. Component bundling
3. Route optimization
4. Static generation (locales)
5. Image optimization
6. CSS optimization
  ↓
.next/ directory (standalone output)
  ├── server/          # Server-side code
  ├── static/          # Static assets
  └── standalone/      # Self-contained app
```

### Build Configuration

**next.config.ts**:
```typescript
{
  typescript: {
    ignoreBuildErrors: true  // ⚠️ Not recommended
  },
  eslint: {
    ignoreDuringBuilds: true  // ⚠️ Not recommended
  },
  output: 'standalone',       // Docker-ready build
  images: {
    remotePatterns: [...]      // Supabase images
  }
}
```

### Deployment Targets

| Platform | Configuration | Suitability |
|----------|---------------|-------------|
| **Vercel** | Zero-config | ⭐⭐⭐⭐⭐ Best for Next.js |
| **AWS** | Standalone + Docker | ⭐⭐⭐⭐ Enterprise |
| **GCP** | Cloud Run | ⭐⭐⭐⭐ Containers |
| **Azure** | App Service | ⭐⭐⭐ Microsoft ecosystem |
| **DigitalOcean** | App Platform | ⭐⭐⭐⭐ Simplicity |
| **Render** | Native Next.js | ⭐⭐⭐ Good alternative |
| **Netlify** | Next.js plugin | ⭐⭐⭐ JAMstack focus |

---

## Security Architecture

### Security Layers

```
┌─────────────────────────────────────────────────┐
│  1. Network Layer (HTTPS, Firewall)            │
└────────────────┬────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────┐
│  2. Application Layer (Next.js)                 │
│     - CSRF protection (built-in)                │
│     - XSS prevention (React escaping)           │
│     - SQL injection (no direct DB access)       │
└────────────────┬────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────┐
│  3. API Layer (Server-side validation)          │
│     - Input validation (Yup schemas)            │
│     - Rate limiting (recommended)               │
│     - API key management                        │
└────────────────┬────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────┐
│  4. External Services (Odoo, Strapi)            │
│     - API key authentication                    │
│     - HTTPS only                                │
└─────────────────────────────────────────────────┘
```

### Security Best Practices

1. **Environment Variables**:
   - Server-side only (ODOO_*, no NEXT_PUBLIC_)
   - Never commit to git
   - Use platform secret management

2. **Form Validation**:
   - Client-side (Formik + Yup)
   - Server-side (API routes)
   - Sanitization before external API calls

3. **API Security**:
   - Server-side API routes only
   - No direct client → Odoo communication
   - Error messages don't expose internals

4. **XSS Prevention**:
   - React automatically escapes content
   - Avoid `dangerouslySetInnerHTML`
   - Sanitize user input from CMS

5. **CSRF Protection**:
   - Built-in with Next.js
   - SameSite cookies

---

## Performance Optimizations

### 1. Image Optimization

```tsx
import Image from 'next/image'

<Image
  src="/hero.jpg"
  width={1200}
  height={600}
  alt="Hero"
  priority  // Load above the fold images first
/>
```

**Benefits**:
- Automatic WebP conversion
- Responsive sizing
- Lazy loading (default)
- Blur placeholder

### 2. Font Optimization

```tsx
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})
```

**Benefits**:
- Self-hosted fonts (no external requests)
- Font subsetting
- Zero layout shift

### 3. Code Splitting

- **Automatic**: Per-route code splitting
- **Manual**: Dynamic imports for heavy components

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />
})
```

### 4. Static Generation

```tsx
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
```

**Result**: Pre-rendered HTML for all locales at build time

### 5. Caching Strategy

```
Browser Cache
  └─→ Static assets (/_next/static/*)

Next.js Data Cache
  └─→ fetch() requests (Strapi CMS)

CDN Cache (if deployed)
  └─→ HTML pages, static assets
```

---

## Design System

### Tailwind Configuration

**tailwind.config.js**:

```javascript
{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E293B',  // Navy
          light: '#334155',
          dark: '#0F172A'
        },
        secondary: {
          aqua: '#06B6D4',
          yellow: '#F59E0B',
          pink: '#EC4899'
        }
      },
      fontSize: {
        display: {
          xl: '72px',
          lg: '56px',
          md: '40px',
          sm: '32px',
          xs: '24px'
        },
        body: {
          xl: '22px',
          lg: '18px',
          md: '16px',
          sm: '14px',
          xs: '12px'
        }
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        '2xl': '64px',
        '3xl': '96px'
      }
    }
  }
}
```

### Typography Scale

| Class | Size | Usage |
|-------|------|-------|
| `text-display-xl` | 72px | Hero headlines |
| `text-display-lg` | 56px | Page titles |
| `text-display-md` | 40px | Section titles |
| `text-body-lg` | 18px | Body text, paragraphs |
| `text-body-md` | 16px | Default text |
| `text-body-sm` | 14px | Small text, captions |

### Color Palette

```tsx
// Primary (Navy)
bg-primary          // #1E293B
text-primary        // #1E293B

// Secondary
bg-secondary-aqua   // #06B6D4
bg-secondary-yellow // #F59E0B
bg-secondary-pink   // #EC4899
```

---

## File Organization

### Directory Structure Philosophy

1. **Feature-based**: Group by feature (blog, services, contact)
2. **Component-based**: Reusable components in /components
3. **Colocation**: Keep related files together
4. **Separation of Concerns**: UI, logic, data access layers

### Key Directories

```
/src                    # Source code
  /app                  # Next.js App Router
    /api                # API routes (backend)
    /[locale]           # Internationalized pages
  /i18n                 # i18n configuration

/components             # Reusable components
  /icons                # Icon components
  /layout               # Layout components
  /sections             # Section components
  /ui                   # UI components

/lib                    # Utilities and integrations
/messages               # Translation files
/public                 # Static assets
/styles                 # Global styles
```

---

## Key Technical Decisions

### 1. Why Next.js 15 App Router?

**Rationale**:
- Latest React features (Server Components)
- Built-in SSR and SSG
- File-based routing
- API routes for backend
- Excellent performance
- Strong ecosystem

**Alternatives considered**: Remix, Gatsby, Astro

### 2. Why Tailwind CSS?

**Rationale**:
- Rapid development
- Consistent design system
- Small production bundle (purged)
- Excellent responsive utilities
- No CSS file management

**Alternatives considered**: Styled Components, CSS Modules

### 3. Why next-intl?

**Rationale**:
- Best-in-class Next.js i18n
- App Router support
- Server and client components
- Type-safe translations
- RTL support

**Alternatives considered**: next-i18next, react-intl

### 4. Why Strapi CMS?

**Rationale**:
- Headless CMS (API-first)
- Easy content modeling
- Built-in media library
- REST + GraphQL APIs
- Self-hostable

**Alternatives considered**: Contentful, Sanity, Prismic

### 5. Why TypeScript with relaxed mode?

**Current State**: `strict: false`, `ignoreBuildErrors: true`

**Rationale** (likely):
- Gradual migration from JavaScript
- Legacy code compatibility
- Faster initial development

**Recommendation**: Enable strict mode for better type safety

### 6. Why Standalone Output?

**Rationale**:
- Self-contained deployment
- Docker-friendly
- Reduced deployment size
- Platform-agnostic

**Use Case**: Deploying to VPS, AWS EC2, GCP Cloud Run

---

## Conclusion

Laqta follows a modern, scalable architecture leveraging Next.js 15's latest features. The application is structured for maintainability, performance, and developer experience. Key architectural strengths include server-first rendering, component-based design, and clean separation of concerns across UI, business logic, and data access layers.

### Architectural Strengths

1. ✅ Server-side rendering for SEO
2. ✅ Component-based architecture
3. ✅ Type safety with TypeScript
4. ✅ Multi-language support
5. ✅ External service integrations
6. ✅ Performance optimizations

### Areas for Improvement

1. ⚠️ Enable TypeScript strict mode
2. ⚠️ Remove build error ignoring
3. ⚠️ Add automated testing
4. ⚠️ Implement error boundaries
5. ⚠️ Add monitoring and logging
6. ⚠️ Consider state management library (if needed)

---

**Maintained by**: Laqta Development Team
**Last Review**: January 2025
