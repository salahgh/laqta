
# Requirements Documentation

## Project: Laqta - Creative Agency Website

---

## 1. System Requirements

### Operating System
- **Supported OS**: Windows, macOS, Linux
- **Recommended**: Ubuntu 20.04+ or Windows 10+ or macOS 12+

### Runtime Environment
- **Node.js**: v18.0.0 or higher (Recommended: v20.x LTS)
- **npm**: v9.0.0 or higher
- **Package Manager**: npm or yarn or pnpm

### Development Tools
- **Git**: v2.30+ for version control
- **Code Editor**: VS Code (recommended) or any modern IDE
- **Terminal**: Bash, Zsh, PowerShell, or CMD

### Browser Requirements (for testing)
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

## 2. Dependencies Overview

### Production Dependencies (11 packages)

#### Core Framework
```json
{
  "next": "15.3.3",           // React framework with SSR and App Router
  "react": "18.2.0",          // UI library
  "react-dom": "18.2.0"       // React DOM rendering
}
```

#### Internationalization
```json
{
  "next-intl": "4.3.4"        // Multi-language support (en, ar, fr)
}
```

#### Form Management
```json
{
  "formik": "2.4.6",          // Form state management
  "yup": "1.6.1"              // Schema validation for forms
}
```

#### UI & Styling
```json
{
  "lucide-react": "0.522.0",  // Icon library (modern alternative to react-icons)
  "clsx": "2.1.1",            // Conditional className utility
  "tailwind-merge": "3.3.1"   // Merge Tailwind classes without conflicts
}
```

#### External Integrations
```json
{
  "xmlrpc": "1.3.2",          // XML-RPC client for Odoo CRM integration
  "@vercel/analytics": "1.5.0" // Analytics and performance tracking
}
```

### Development Dependencies (10+ packages)

#### TypeScript Support
```json
{
  "typescript": "5.4.5",
  "@types/node": "20.11.19",
  "@types/react": "18.2.6",
  "@types/xmlrpc": "1.3.10",
  "@types/yup": "0.29.14"
}
```

#### Code Quality
```json
{
  "eslint": "8.56.0",
  "eslint-config-next": "15.3.3",
  "prettier": "3.6.2",
  "prettier-plugin-tailwindcss": "0.6.13"
}
```

#### CSS Processing
```json
{
  "tailwindcss": "3.4.0",
  "postcss": "8.4.31",
  "autoprefixer": "10.4.16"
}
```

**Total installed packages**: ~479MB in node_modules (1400+ packages including transitive dependencies)

---

## 3. External Service Requirements

### Required External Services

#### A. Odoo CRM (Lead Management)
- **Service**: Odoo SaaS Platform
- **Protocol**: XML-RPC over HTTPS
- **Purpose**: Contact form submissions, lead tracking
- **Endpoint**: `https://sarl-leqta-prod.odoo.com`
- **Database**: `sarl-leqta-prod`
- **Requirements**:
  - Valid Odoo account
  - API key or user credentials
  - "Warm" stage configured in CRM pipeline
  - Lead creation permissions

#### B. Strapi CMS (Content Management)
- **Service**: Headless CMS
- **Purpose**: Blog articles, services, dynamic content
- **Development URL**: `http://localhost:1337` (requires local Strapi instance)
- **Production URL**: `https://my-blog-cms-sfs1.onrender.com`
- **Requirements**:
  - Strapi v4.x running
  - Content types configured:
    - Articles (title, slug, content, author, category, tags, images)
    - Services (title, description, tags, featured images)
    - Categories
    - Tags
  - API endpoints enabled
  - CORS configured for your domain

#### C. Supabase (Image Storage)
- **Service**: Supabase Storage (S3-compatible)
- **Purpose**: Remote image hosting and optimization
- **Bucket**: Public storage bucket
- **Hostname**: `nmgsempbczwwefyzsofb.supabase.co`
- **Path**: `/storage/v1/object/public/**`
- **Requirements**:
  - Supabase project created
  - Storage bucket configured as public
  - CORS policies set for your domain

#### D. Vercel Analytics (Optional)
- **Service**: Vercel Analytics
- **Purpose**: Performance monitoring and user analytics
- **Requirements**: Deployed on Vercel platform OR using Vercel Analytics standalone

---

## 4. Environment Variables

### Required Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
# Odoo CRM Configuration
ODOO_URL=https://sarl-leqta-prod.odoo.com
ODOO_DB=sarl-leqta-prod
ODOO_API_KEY=your_odoo_api_key_here
ODOO_USERNAME=your_odoo_email@example.com

# Strapi CMS Configuration
NEXT_PUBLIC_STRAPI_URL_2=http://localhost:1337        # Development
# NEXT_PUBLIC_STRAPI_URL_2=https://your-cms-url.com   # Production
```

### Environment Variable Types

| Variable | Type | Required | Purpose |
|----------|------|----------|---------|
| `ODOO_URL` | Server-side | Yes | Odoo CRM instance URL |
| `ODOO_DB` | Server-side | Yes | Odoo database name |
| `ODOO_API_KEY` | Server-side | Yes | Odoo authentication API key |
| `ODOO_USERNAME` | Server-side | Yes | Odoo user email for authentication |
| `NEXT_PUBLIC_STRAPI_URL_2` | Client-side | Yes | Strapi CMS base URL (exposed to browser) |

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Server-side variables (without prefix) are only available in server components and API routes.

---

## 5. Build Requirements

### Disk Space
- **Source code**: ~50MB
- **node_modules**: ~479MB
- **.next build output**: ~150-200MB
- **Total required**: ~700MB minimum

### Memory Requirements
- **Development**: 2GB RAM minimum (4GB recommended)
- **Build process**: 4GB RAM minimum (8GB recommended)
- **Production runtime**: 512MB RAM minimum (1GB recommended)

### Network Requirements
- **Download speed**: Stable internet for npm install (~500MB download)
- **Build time**:
  - First install: 2-5 minutes (depending on internet speed)
  - Build time: 1-3 minutes
  - Subsequent installs (with cache): 30-60 seconds

---

## 6. Port Requirements

### Development Ports
- **3000**: Next.js development server (default)
- **3001**: Next.js production server (configured in start script)
- **1337**: Strapi CMS (if running locally)

### Firewall Rules
If deploying to a server, ensure the following ports are open:
- **80**: HTTP traffic
- **443**: HTTPS traffic (recommended)
- **3000 or 3001**: Application port (or use reverse proxy)

---

## 7. Supported Locales

The application supports multi-language content with the following locales:

| Locale | Language | Text Direction | Translation File Size |
|--------|----------|----------------|----------------------|
| `en` | English | LTR | 10KB (en.json) |
| `ar` | Arabic | RTL | 13KB (ar.json) |
| `fr` | French | LTR | 11KB (fr.json) |

**Total translations**: 34KB across all languages

---

## 8. Font Requirements

### Google Fonts
The application uses Google Fonts loaded via Next.js Font Optimization:

```typescript
import { Poppins } from "next/font/google";
```

**Fonts loaded**:
- **Poppins**: Weights 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Gotham**: Custom font (if configured)

**Font optimization**: Automatic by Next.js (fonts are self-hosted in production)

---

## 9. Browser Compatibility

### Supported Browsers

| Browser | Minimum Version | Recommended Version |
|---------|----------------|---------------------|
| Chrome | 90+ | Latest |
| Edge | 90+ | Latest |
| Firefox | 88+ | Latest |
| Safari | 14+ | Latest |
| Mobile Safari (iOS) | 14+ | Latest |
| Chrome Mobile (Android) | 90+ | Latest |

### JavaScript Requirements
- **ES2015 (ES6)** features supported
- **Target**: ES5 output (configured in tsconfig.json)
- **Polyfills**: Automatically included by Next.js

---

## 10. Installation Steps

### Step 1: Clone the Repository
```bash
git clone https://github.com/salahgh/laqta.git
cd laqta
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Step 3: Configure Environment Variables
```bash
# Copy the template
cp .env.template .env.local

# Edit .env.local with your actual credentials
nano .env.local  # or use any text editor
```

### Step 4: Verify Installation
```bash
# Check Node.js version
node --version  # Should be v18+

# Check npm version
npm --version   # Should be v9+

# Verify dependencies
npm list --depth=0
```

### Step 5: Start Development Server
```bash
npm run dev
```

Open http://localhost:3000 to view the application.

---

## 11. Optional Requirements

### Recommended VS Code Extensions
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### Git Hooks (Optional)
Consider setting up Husky for pre-commit hooks:
- ESLint checks before commit
- Prettier formatting before commit
- TypeScript type checking before push

---

## 12. Troubleshooting Common Issues

### Issue 1: Node.js version mismatch
**Solution**: Use nvm (Node Version Manager)
```bash
nvm install 20
nvm use 20
```

### Issue 2: npm install fails
**Solution**: Clear npm cache
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue 3: Port 3000 already in use
**Solution**: Use a different port
```bash
npm run dev -- -p 3002
```

### Issue 4: Strapi connection fails
**Solution**: Verify Strapi is running and environment variable is correct
```bash
# Check Strapi URL
curl http://localhost:1337/api/articles

# Verify environment variable
echo $NEXT_PUBLIC_STRAPI_URL_2
```

### Issue 5: TypeScript errors during build
**Solution**: The project has `ignoreBuildErrors: true` configured, but you can fix errors manually:
```bash
npm run build -- --no-lint
```

---

## 13. Minimum Viable Requirements

For a **basic deployment**, you need:

✅ Node.js 18+
✅ npm 9+
✅ Environment variables configured (`.env.local`)
✅ Odoo CRM access (for contact forms)
✅ Strapi CMS running (for blog content)
✅ 700MB disk space
✅ 2GB RAM
✅ Internet connection

For a **production deployment**, additionally consider:
✅ 4GB+ RAM
✅ HTTPS/SSL certificate
✅ Domain name configured
✅ CDN for static assets (optional but recommended)
✅ Monitoring and logging setup
✅ Backup strategy for CMS content

---

## 14. Performance Benchmarks

### Build Times
- **Cold build** (first time): 2-3 minutes
- **Warm build** (with cache): 30-60 seconds
- **Development hot reload**: < 1 second

### Bundle Sizes (Production)
- **First Load JS**: ~150-200KB (estimated)
- **Total page weight**: ~500KB-1MB (including images)
- **Time to Interactive (TTI)**: < 3 seconds (on good connection)

### Resource Usage
- **Development server**: ~200-300MB RAM
- **Production runtime**: ~100-150MB RAM (per instance)
- **CPU usage**: Low (event-driven I/O)

---

## 15. Upgrade Path

### Staying Up-to-Date

Check for outdated packages:
```bash
npm outdated
```

Update dependencies:
```bash
# Update to latest minor/patch versions (safe)
npm update

# Update to latest major versions (review breaking changes)
npx npm-check-updates -u
npm install
```

### Critical Dependencies to Monitor
- **Next.js**: Major version updates (currently 15.3.3)
- **React**: Major version updates (currently 18.2.0)
- **next-intl**: API changes in major versions
- **TypeScript**: Breaking changes in type system

---

## Summary Checklist

Before starting development, ensure you have:

- [ ] Node.js 18+ installed
- [ ] npm 9+ installed
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] Odoo CRM account and credentials
- [ ] Strapi CMS instance running (local or remote)
- [ ] Supabase project configured
- [ ] `.env.local` file created with all variables
- [ ] At least 2GB RAM available
- [ ] At least 700MB disk space available
- [ ] Stable internet connection

---

**Last Updated**: January 2025
**Project Version**: Based on package.json (Next.js 15.3.3)
**Maintainer**: Laqta Development Team
