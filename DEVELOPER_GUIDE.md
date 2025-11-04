# Developer Guide

## Laqta - Creative Agency Website

**Last Updated**: January 2025
**Version**: 1.0.0

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Development Environment Setup](#development-environment-setup)
3. [Project Structure](#project-structure)
4. [Development Workflow](#development-workflow)
5. [Working with Components](#working-with-components)
6. [Working with Pages](#working-with-pages)
7. [Internationalization (i18n)](#internationalization-i18n)
8. [Styling Guide](#styling-guide)
9. [Form Development](#form-development)
10. [API Development](#api-development)
11. [External Service Integration](#external-service-integration)
12. [Testing](#testing)
13. [Code Quality](#code-quality)
14. [Git Workflow](#git-workflow)
15. [Troubleshooting](#troubleshooting)
16. [Best Practices](#best-practices)

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

```bash
# Required
node --version    # v18.0.0 or higher
npm --version     # v9.0.0 or higher
git --version     # v2.30.0 or higher

# Recommended
code --version    # VS Code (or your preferred editor)
```

### Initial Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/salahgh/laqta.git
   cd laqta
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   # Copy the template
   cp .env.template .env.local

   # Edit with your credentials
   # Windows
   notepad .env.local

   # macOS/Linux
   nano .env.local
   # or
   vim .env.local
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   ```
   http://localhost:3000/en  # English
   http://localhost:3000/ar  # Arabic (RTL)
   http://localhost:3000/fr  # French
   ```

---

## Development Environment Setup

### Recommended VS Code Extensions

Install these extensions for the best development experience:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",           // ESLint integration
    "esbenp.prettier-vscode",           // Code formatting
    "bradlc.vscode-tailwindcss",        // Tailwind CSS IntelliSense
    "ms-vscode.vscode-typescript-next", // TypeScript support
    "formulahendry.auto-rename-tag",    // Auto rename paired HTML tags
    "christian-kohler.path-intellisense", // File path autocomplete
    "prisma.prisma",                    // Prisma support (if using)
    "lokalise.i18n-ally"                // i18n support
  ]
}
```

Save this as `.vscode/extensions.json` in your project.

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

### EditorConfig

Create `.editorconfig`:

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 4

[*.{json,yml,yaml}]
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

---

## Project Structure

```
laqta/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── api/                    # API routes
│   │   │   └── odoo/
│   │   │       └── contact/
│   │   │           ├── handler.ts  # Odoo integration logic
│   │   │           └── route.ts    # API route definition
│   │   └── [locale]/               # Internationalized routes
│   │       ├── layout.tsx          # Root layout (wraps all pages)
│   │       ├── page.tsx            # Homepage
│   │       ├── about/
│   │       │   └── page.tsx
│   │       ├── services/
│   │       │   └── page.tsx
│   │       ├── blog/
│   │       │   ├── page.tsx
│   │       │   ├── all/
│   │       │   │   └── page.tsx
│   │       │   └── articles/
│   │       │       └── [slug]/
│   │       │           └── page.tsx
│   │       └── ...
│   └── i18n/                       # i18n configuration
│       ├── navigation.ts           # Internationalized navigation
│       ├── request.ts              # Request configuration
│       └── routing.ts              # Routing configuration
│
├── components/
│   ├── icons/                      # Icon components
│   ├── layout/                     # Layout components
│   │   └── Navigation.jsx
│   ├── sections/                   # Page sections
│   │   ├── HeroSection.jsx
│   │   ├── ServicesSection.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   └── ui/                         # Reusable UI components
│       ├── Button.tsx
│       ├── FormInput.tsx
│       ├── ServiceCard.tsx
│       └── ...
│
├── lib/
│   ├── strapi.ts                   # Strapi CMS integration
│   ├── utils.ts                    # Utility functions
│   └── documentation.json          # Documentation data
│
├── messages/                       # Translation files
│   ├── en.json                     # English
│   ├── ar.json                     # Arabic
│   └── fr.json                     # French
│
├── public/                         # Static assets
│   ├── icons/                      # Static icons
│   └── images/                     # Static images
│
├── styles/
│   └── globals.css                 # Global styles + Tailwind
│
└── Configuration Files
    ├── next.config.ts              # Next.js configuration
    ├── tailwind.config.js          # Tailwind CSS configuration
    ├── tsconfig.json               # TypeScript configuration
    ├── middleware.ts               # i18n middleware
    ├── package.json                # Dependencies and scripts
    ├── .eslintrc.json              # ESLint configuration
    └── .prettierrc                 # Prettier configuration
```

---

## Development Workflow

### Daily Workflow

1. **Pull Latest Changes**
   ```bash
   git checkout master
   git pull origin master
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Make Changes**
   - Edit files
   - Hot reload shows changes instantly
   - Check browser console for errors

5. **Test Locally**
   ```bash
   # Run linter
   npm run lint

   # Build production version
   npm run build

   # Test production build
   npm start
   ```

6. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

7. **Push to Remote**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create Pull Request**
   - Go to GitHub
   - Create PR from your branch to `master`
   - Request review

### Development Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Fix ESLint errors automatically
npm run lint -- --fix

# Format code with Prettier
npx prettier --write .

# Check TypeScript types (custom script)
npx tsc --noEmit

# Clear Next.js cache
rm -rf .next

# Clean install (fixes most issues)
rm -rf node_modules package-lock.json
npm install
```

---

## Working with Components

### Component Types

#### 1. Server Components (Default)

Use for non-interactive components:

```tsx
// components/sections/AboutSection.tsx

export default function AboutSection() {
  // This runs on the server
  const data = fetchData(); // Can directly fetch data

  return (
    <div>
      <h2>About Us</h2>
      <p>{data.description}</p>
    </div>
  );
}
```

**Benefits**:
- Smaller JavaScript bundle
- Direct data fetching
- Better SEO
- Faster initial load

#### 2. Client Components

Use when you need interactivity:

```tsx
// components/ui/InteractiveButton.tsx
'use client'

import { useState } from 'react'

export default function InteractiveButton() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}
```

**Use Cases**:
- Event handlers (onClick, onChange, onSubmit)
- React hooks (useState, useEffect, useContext)
- Browser APIs (localStorage, window object)

### Creating a New Component

#### Step 1: Determine Component Type

```
UI Component?       → components/ui/
Section Component?  → components/sections/
Layout Component?   → components/layout/
Icon Component?     → components/icons/
```

#### Step 2: Create File

```tsx
// components/ui/Badge.tsx

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md'
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `}
    >
      {children}
    </span>
  )
}
```

#### Step 3: Use Component

```tsx
import Badge from '@/components/ui/Badge'

<Badge variant="success" size="md">
  Active
</Badge>
```

### Component Best Practices

1. **TypeScript Props**: Always define prop types
2. **Default Props**: Provide sensible defaults
3. **Composition**: Prefer composition over complex props
4. **Accessibility**: Use semantic HTML and ARIA attributes
5. **Responsiveness**: Design mobile-first
6. **Reusability**: Extract common patterns

---

## Working with Pages

### Creating a New Page

#### Step 1: Create Page File

```tsx
// src/app/[locale]/pricing/page.tsx

import { useTranslations } from 'next-intl';

export default function PricingPage() {
  const t = useTranslations('pricing');

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}

// Add metadata for SEO
export async function generateMetadata({ params }) {
  return {
    title: 'Pricing - Laqta',
    description: 'View our pricing plans and packages',
    openGraph: {
      title: 'Pricing - Laqta',
      description: 'View our pricing plans and packages',
      images: ['/images/og-pricing.jpg']
    }
  };
}
```

#### Step 2: Add Translations

```json
// messages/en.json
{
  "pricing": {
    "title": "Pricing Plans",
    "description": "Choose the perfect plan for your needs"
  }
}

// messages/ar.json (Arabic)
{
  "pricing": {
    "title": "خطط التسعير",
    "description": "اختر الخطة المثالية لاحتياجاتك"
  }
}

// messages/fr.json (French)
{
  "pricing": {
    "title": "Plans Tarifaires",
    "description": "Choisissez le plan parfait pour vos besoins"
  }
}
```

#### Step 3: Add Navigation Link

```tsx
// components/layout/Navigation.jsx

const navLinks = [
  { href: '/about', label: t('navigation.about') },
  { href: '/services', label: t('navigation.services') },
  { href: '/pricing', label: t('navigation.pricing') }, // New
  { href: '/contact', label: t('navigation.contact') }
];
```

#### Step 4: Add Translation for Navigation

```json
// messages/en.json
{
  "navigation": {
    "pricing": "Pricing"
  }
}
```

### Dynamic Pages

```tsx
// src/app/[locale]/blog/articles/[slug]/page.tsx

import { getArticleBySlug, getAllArticles } from '@/lib/strapi';

export default async function ArticlePage({ params }) {
  const { slug, locale } = params;
  const article = await getArticleBySlug(slug, locale);

  if (!article) {
    notFound(); // Shows 404 page
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}

// Generate static paths at build time
export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map(article => ({
    slug: article.slug
  }));
}

// Add metadata
export async function generateMetadata({ params }) {
  const article = await getArticleBySlug(params.slug, params.locale);

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage?.url]
    }
  };
}
```

---

## Internationalization (i18n)

### Adding New Translations

1. **Identify Translation Keys**
   ```tsx
   const t = useTranslations('hero');
   t('title')     // Will look for hero.title in messages
   t('subtitle')  // Will look for hero.subtitle
   ```

2. **Add to All Locale Files**

   ```json
   // messages/en.json
   {
     "hero": {
       "title": "Welcome to Laqta",
       "subtitle": "Your creative partner"
     }
   }

   // messages/ar.json
   {
     "hero": {
       "title": "مرحبا بكم في لاقطا",
       "subtitle": "شريكك الإبداعي"
     }
   }

   // messages/fr.json
   {
     "hero": {
       "title": "Bienvenue chez Laqta",
       "subtitle": "Votre partenaire créatif"
     }
   }
   ```

### Using Translations in Components

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

### Nested Translations

```json
{
  "contact": {
    "form": {
      "name": "Your Name",
      "email": "Email Address",
      "message": "Your Message",
      "submit": "Send Message"
    },
    "validation": {
      "nameRequired": "Name is required",
      "emailInvalid": "Invalid email address"
    }
  }
}
```

Usage:
```tsx
const t = useTranslations('contact.form');
t('name')  // "Your Name"

const v = useTranslations('contact.validation');
v('emailInvalid')  // "Invalid email address"
```

### RTL Support

Arabic automatically gets RTL layout via the layout file:

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

For custom RTL styles:
```tsx
<div className="ml-4 rtl:mr-4 rtl:ml-0">
  Content
</div>
```

---

## Styling Guide

### Tailwind CSS Utilities

#### Layout
```tsx
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Grid items */}
  </div>
</div>
```

#### Typography
```tsx
<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
  Heading
</h1>
<p className="text-body-lg text-gray-600 leading-relaxed">
  Paragraph text
</p>
```

#### Colors
```tsx
<div className="bg-primary text-white">
  <div className="bg-secondary-aqua">Aqua</div>
  <div className="bg-secondary-yellow">Yellow</div>
  <div className="bg-secondary-pink">Pink</div>
</div>
```

#### Spacing
```tsx
<div className="p-6 m-4">
  <div className="space-y-4">
    {/* Vertical spacing between children */}
  </div>
</div>
```

#### Responsive Design
```tsx
<div className="
  w-full          /* Mobile: full width */
  sm:w-1/2        /* Small: 50% */
  md:w-1/3        /* Medium: 33% */
  lg:w-1/4        /* Large: 25% */
">
  Responsive Box
</div>
```

### Custom Utilities

Add custom utilities in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    }
  }
}
```

Usage:
```tsx
<div className="animate-fade-in">
  Fades in
</div>
```

### Utility Helper Functions

```typescript
// lib/utils.ts

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Merge Tailwind classes without conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Usage:
```tsx
import { cn } from '@/lib/utils'

<div className={cn(
  'base-class',
  condition && 'conditional-class',
  'override-class'
)}>
  Content
</div>
```

---

## Form Development

### Creating a Form with Formik + Yup

```tsx
'use client'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .min(10, 'Too short')
    .required('Required')
})

export default function ContactForm() {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('/api/odoo/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })

      const data = await response.json()

      if (data.success) {
        alert('Message sent successfully!')
        resetForm()
      } else {
        alert('Error: ' + data.error)
      }
    } catch (error) {
      console.error(error)
      alert('An error occurred')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <Field
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.name && touched.name && (
              <div className="text-red-500 text-sm mt-1">{errors.name}</div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Field
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              rows={5}
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.message && touched.message && (
              <div className="text-red-500 text-sm mt-1">{errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </Form>
      )}
    </Formik>
  )
}
```

---

## API Development

### Creating an API Route

```typescript
// src/app/api/example/route.ts

import { NextRequest, NextResponse } from 'next/server'

// GET request
export async function GET(request: NextRequest) {
  try {
    const data = await fetchData()

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

// POST request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Process data
    const result = await processData(body)

    return NextResponse.json({ success: true, result })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
```

### Testing API Routes

```bash
# Using curl
curl -X POST http://localhost:3000/api/example \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'

# Using Postman or Insomnia
POST http://localhost:3000/api/example
Content-Type: application/json

{
  "name": "Test",
  "email": "test@example.com"
}
```

---

## External Service Integration

### Strapi CMS

#### Fetching Data

```typescript
// lib/strapi.ts

export async function getArticles(locale: string, page = 1, limit = 10) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL_2}/api/articles?` +
    `locale=${locale}&` +
    `pagination[page]=${page}&` +
    `pagination[pageSize]=${limit}&` +
    `populate=*`
  )

  const data = await response.json()
  return data.data
}
```

#### Using in Components

```tsx
// Server Component
export default async function BlogPage({ params }) {
  const articles = await getArticles(params.locale)

  return (
    <div>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
```

### Odoo CRM

Check `src/app/api/odoo/contact/handler.ts` for implementation.

---

## Testing

### Manual Testing Checklist

- [ ] Test all three locales (en, ar, fr)
- [ ] Test on mobile, tablet, desktop
- [ ] Test all forms
- [ ] Test all navigation links
- [ ] Test dynamic routes
- [ ] Test API endpoints
- [ ] Test RTL layout (Arabic)

---

## Code Quality

### Running Linters

```bash
# ESLint
npm run lint

# Fix automatically
npm run lint -- --fix

# Prettier
npx prettier --check .
npx prettier --write .
```

### Code Style Guidelines

1. **Naming Conventions**
   - Components: PascalCase (`Button.tsx`)
   - Functions: camelCase (`fetchData`)
   - Constants: UPPER_SNAKE_CASE (`API_URL`)

2. **File Organization**
   - One component per file
   - Export default for components
   - Named exports for utilities

3. **TypeScript**
   - Define interfaces for props
   - Avoid `any` type
   - Use type inference when obvious

---

## Git Workflow

### Commit Message Format

```
type(scope): subject

body

footer
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

**Examples**:
```bash
git commit -m "feat(blog): add article search functionality"
git commit -m "fix(contact): resolve form validation issue"
git commit -m "docs(readme): update installation instructions"
```

---

## Troubleshooting

### Common Issues

See main README.md for troubleshooting guide.

---

## Best Practices

1. **Use Server Components** by default
2. **Optimize Images** with next/image
3. **Keep Bundles Small** - dynamic imports for heavy components
4. **Type Everything** - use TypeScript
5. **Test Locales** - test all three languages
6. **Mobile First** - design for mobile, enhance for desktop
7. **Accessibility** - use semantic HTML, ARIA labels
8. **Performance** - monitor with Lighthouse

---

**Happy Coding! 🚀**

**Maintained by**: Laqta Development Team
**Last Updated**: January 2025
