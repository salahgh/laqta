# Deployment Guide

## Laqta - Creative Agency Website

**Last Updated**: January 2025
**Version**: 1.0.0

---

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Environment Variables](#environment-variables)
3. [Platform Deployments](#platform-deployments)
   - [Vercel (Recommended)](#1-vercel-recommended)
   - [Netlify](#2-netlify)
   - [Render](#3-render)
   - [Railway](#4-railway)
   - [DigitalOcean App Platform](#5-digitalocean-app-platform)
   - [Fly.io](#6-flyio)
   - [AWS (Manual)](#7-aws-manual-deployment)
   - [Google Cloud Platform](#8-google-cloud-platform)
4. [Domain Configuration](#domain-configuration)
5. [SSL/HTTPS Setup](#ssl-https-setup)
6. [Post-Deployment Steps](#post-deployment-steps)
7. [Monitoring & Maintenance](#monitoring--maintenance)
8. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

Before deploying to any platform, ensure you have completed the following:

### ✅ Code Preparation

- [ ] All changes committed to Git
- [ ] Code pushed to GitHub repository
- [ ] No sensitive data in repository (API keys, passwords)
- [ ] Production build succeeds locally: `npm run build`
- [ ] Application runs in production mode: `npm start`

### ✅ External Services

- [ ] Odoo CRM account configured
- [ ] Odoo API key obtained
- [ ] Strapi CMS deployed and accessible
- [ ] Supabase project configured (if using)
- [ ] All external service URLs documented

### ✅ Environment Configuration

- [ ] `.env.production` file created (for reference, not committed)
- [ ] All required environment variables identified
- [ ] Production URLs for external services updated

### ✅ Testing

- [ ] Application tested locally in production mode
- [ ] All three locales tested (en, ar, fr)
- [ ] Contact form tested with Odoo integration
- [ ] Blog articles loading from Strapi
- [ ] Images loading from Supabase

---

## Environment Variables

All deployment platforms require the following environment variables:

### Required Variables

```bash
# Odoo CRM Configuration
ODOO_URL=https://sarl-leqta-prod.odoo.com
ODOO_DB=sarl-leqta-prod
ODOO_API_KEY=your_actual_api_key_here
ODOO_USERNAME=your_email@example.com

# Strapi CMS Configuration
NEXT_PUBLIC_STRAPI_URL_2=https://my-blog-cms-sfs1.onrender.com
```

### Variable Descriptions

| Variable | Type | Purpose | Example |
|----------|------|---------|---------|
| `ODOO_URL` | Private | Odoo CRM instance URL | `https://yourcompany.odoo.com` |
| `ODOO_DB` | Private | Odoo database name | `yourcompany-prod` |
| `ODOO_API_KEY` | Private | Odoo API authentication key | `abc123...` |
| `ODOO_USERNAME` | Private | Odoo user email | `admin@example.com` |
| `NEXT_PUBLIC_STRAPI_URL_2` | Public | Strapi CMS base URL | `https://cms.example.com` |

**Important**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Keep sensitive data in server-only variables.

---

## Platform Deployments

---

## 1. Vercel (Recommended)

**Best for**: Next.js applications (zero-config deployment)

**Pros**:
- ✅ Optimized for Next.js
- ✅ Automatic CI/CD
- ✅ Edge functions
- ✅ Free SSL
- ✅ Global CDN
- ✅ Preview deployments

**Cons**:
- ❌ Function execution limits on free tier

### Deployment Steps

#### Method 1: Vercel Dashboard (Easiest)

1. **Connect Repository**
   ```
   1. Go to https://vercel.com
   2. Sign up/Login with GitHub account
   3. Click "New Project"
   4. Import your repository: salahgh/laqta
   5. Configure project settings
   ```

2. **Configure Build Settings**
   ```
   Framework Preset: Next.js
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   Development Command: npm run dev
   ```

3. **Add Environment Variables**
   ```
   Go to: Project Settings → Environment Variables

   Add each variable:
   - ODOO_URL = https://sarl-leqta-prod.odoo.com
   - ODOO_DB = sarl-leqta-prod
   - ODOO_API_KEY = [your_key]
   - ODOO_USERNAME = [your_email]
   - NEXT_PUBLIC_STRAPI_URL_2 = https://my-blog-cms-sfs1.onrender.com

   Environment: Production, Preview, Development
   ```

4. **Deploy**
   ```
   Click "Deploy"
   Wait for build to complete (2-3 minutes)
   Access your site at: https://laqta.vercel.app
   ```

#### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # Navigate to project directory
   cd laqta

   # Deploy (follow prompts)
   vercel

   # Or deploy to production directly
   vercel --prod
   ```

4. **Set Environment Variables**
   ```bash
   vercel env add ODOO_URL
   vercel env add ODOO_DB
   vercel env add ODOO_API_KEY
   vercel env add ODOO_USERNAME
   vercel env add NEXT_PUBLIC_STRAPI_URL_2
   ```

5. **Redeploy with Environment Variables**
   ```bash
   vercel --prod
   ```

### Automatic Deployments

Once connected, Vercel automatically deploys:
- **Production**: Every push to `master` branch
- **Preview**: Every push to feature branches
- **Pull Requests**: Automatic preview deployments

### Custom Domain Setup (Vercel)

1. Go to: Project Settings → Domains
2. Add your domain: `example.com`
3. Configure DNS records:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (5-60 minutes)

---

## 2. Netlify

**Best for**: JAMstack sites with serverless functions

**Pros**:
- ✅ Free SSL
- ✅ Continuous deployment
- ✅ Form handling
- ✅ Generous free tier

**Cons**:
- ⚠️ Next.js support via plugin (not native)

### Deployment Steps

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Initialize**
   ```bash
   cd laqta
   netlify init
   ```

4. **Configure Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   Functions directory: (leave empty)
   ```

5. **Add Environment Variables**
   ```bash
   # Via CLI
   netlify env:set ODOO_URL "https://sarl-leqta-prod.odoo.com"
   netlify env:set ODOO_DB "sarl-leqta-prod"
   netlify env:set ODOO_API_KEY "your_key"
   netlify env:set ODOO_USERNAME "your_email"
   netlify env:set NEXT_PUBLIC_STRAPI_URL_2 "https://my-blog-cms-sfs1.onrender.com"

   # Or via Dashboard: Site Settings → Environment Variables
   ```

6. **Create netlify.toml**
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

7. **Deploy**
   ```bash
   netlify deploy --prod
   ```

---

## 3. Render

**Best for**: Full-stack apps with databases

**Pros**:
- ✅ Free tier available
- ✅ Automatic SSL
- ✅ Easy PostgreSQL databases
- ✅ Native Next.js support

**Cons**:
- ⚠️ Cold starts on free tier

### Deployment Steps

1. **Sign Up**
   ```
   Go to: https://render.com
   Sign up with GitHub
   ```

2. **Create New Web Service**
   ```
   1. Click "New +" → "Web Service"
   2. Connect repository: salahgh/laqta
   3. Configure service
   ```

3. **Configuration**
   ```
   Name: laqta
   Environment: Node
   Region: Choose closest to users
   Branch: master
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

4. **Environment Variables**
   ```
   Add each variable in the dashboard:
   ODOO_URL = https://sarl-leqta-prod.odoo.com
   ODOO_DB = sarl-leqta-prod
   ODOO_API_KEY = [your_key]
   ODOO_USERNAME = [your_email]
   NEXT_PUBLIC_STRAPI_URL_2 = https://my-blog-cms-sfs1.onrender.com
   NODE_ENV = production
   ```

5. **Deploy**
   ```
   Click "Create Web Service"
   Wait for build (3-5 minutes)
   Access at: https://laqta.onrender.com
   ```

### Render Custom Domain

1. Go to: Service → Settings → Custom Domains
2. Add domain: `example.com`
3. Configure DNS:
   ```
   Type: CNAME
   Name: @
   Value: [your-app].onrender.com
   ```

---

## 4. Railway

**Best for**: Simple deployments with database needs

**Pros**:
- ✅ $5 free credit per month
- ✅ Automatic deployments
- ✅ Easy database provisioning
- ✅ Great developer experience

**Cons**:
- ⚠️ No free tier (requires payment method)

### Deployment Steps

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login**
   ```bash
   railway login
   ```

3. **Initialize Project**
   ```bash
   cd laqta
   railway init
   ```

4. **Add Environment Variables**
   ```bash
   railway variables set ODOO_URL="https://sarl-leqta-prod.odoo.com"
   railway variables set ODOO_DB="sarl-leqta-prod"
   railway variables set ODOO_API_KEY="your_key"
   railway variables set ODOO_USERNAME="your_email"
   railway variables set NEXT_PUBLIC_STRAPI_URL_2="https://my-blog-cms-sfs1.onrender.com"
   ```

5. **Deploy**
   ```bash
   railway up
   ```

6. **Generate Domain**
   ```bash
   railway domain
   ```

### Railway Dashboard Method

1. Go to: https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select repository
4. Add environment variables in dashboard
5. Deploy automatically

---

## 5. DigitalOcean App Platform

**Best for**: Developers already using DigitalOcean

**Pros**:
- ✅ Integrated with DO ecosystem
- ✅ Free tier available
- ✅ Automatic scaling
- ✅ Simple pricing

**Cons**:
- ⚠️ Requires DigitalOcean account

### Deployment Steps

1. **Create App**
   ```
   1. Go to: https://cloud.digitalocean.com/apps
   2. Click "Create App"
   3. Connect GitHub repository
   ```

2. **Configure Resources**
   ```
   Resource Type: Web Service
   Source Directory: /
   Build Command: npm run build
   Run Command: npm start
   HTTP Port: 3001 (or auto-detect)
   ```

3. **Environment Variables**
   ```
   Add in dashboard:
   ODOO_URL = https://sarl-leqta-prod.odoo.com
   ODOO_DB = sarl-leqta-prod
   ODOO_API_KEY = [encrypted]
   ODOO_USERNAME = [your_email]
   NEXT_PUBLIC_STRAPI_URL_2 = https://my-blog-cms-sfs1.onrender.com
   NODE_ENV = production
   ```

4. **Choose Plan**
   ```
   Basic: $5/month (512MB RAM, 1 vCPU)
   Professional: $12/month (1GB RAM, 1 vCPU)
   ```

5. **Deploy**
   ```
   Click "Create Resources"
   Wait for deployment (5-10 minutes)
   ```

---

## 6. Fly.io

**Best for**: Global edge deployment

**Pros**:
- ✅ Edge deployment (global)
- ✅ Free tier available
- ✅ Great for low-latency
- ✅ Simple scaling

**Cons**:
- ⚠️ Requires Dockerfile (but we're skipping Docker)

**Note**: Fly.io typically requires Docker. For non-Docker deployment, use other platforms.

---

## 7. AWS (Manual Deployment)

**Best for**: Enterprise deployments, full control

**Services Used**: EC2, Elastic Beanstalk, or Amplify

### Option A: AWS Amplify (Easiest)

1. **Go to AWS Amplify Console**
   ```
   https://console.aws.amazon.com/amplify/
   ```

2. **Connect Repository**
   ```
   Click "New app" → "Host web app"
   Select GitHub
   Authorize and select repository
   ```

3. **Configure Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Add Environment Variables**
   ```
   Go to: App settings → Environment variables
   Add all required variables
   ```

5. **Deploy**
   ```
   Amplify automatically deploys on every push
   ```

### Option B: Elastic Beanstalk

1. **Install EB CLI**
   ```bash
   pip install awsebcli
   ```

2. **Initialize**
   ```bash
   cd laqta
   eb init -p node.js laqta
   ```

3. **Create Environment**
   ```bash
   eb create laqta-prod
   ```

4. **Set Environment Variables**
   ```bash
   eb setenv ODOO_URL="https://sarl-leqta-prod.odoo.com" \
             ODOO_DB="sarl-leqta-prod" \
             ODOO_API_KEY="your_key" \
             ODOO_USERNAME="your_email" \
             NEXT_PUBLIC_STRAPI_URL_2="https://my-blog-cms-sfs1.onrender.com"
   ```

5. **Deploy**
   ```bash
   eb deploy
   ```

---

## 8. Google Cloud Platform

**Best for**: Google ecosystem integration

### Option A: Cloud Run (Serverless)

**Note**: Cloud Run typically requires containers. Use other platforms for non-Docker deployment.

### Option B: App Engine

1. **Install Google Cloud SDK**
   ```bash
   # Download from: https://cloud.google.com/sdk/docs/install
   gcloud init
   ```

2. **Create app.yaml**
   ```yaml
   runtime: nodejs20

   env_variables:
     ODOO_URL: "https://sarl-leqta-prod.odoo.com"
     ODOO_DB: "sarl-leqta-prod"
     NEXT_PUBLIC_STRAPI_URL_2: "https://my-blog-cms-sfs1.onrender.com"

   handlers:
   - url: /.*
     script: auto
     secure: always
   ```

3. **Deploy**
   ```bash
   gcloud app deploy
   ```

4. **Set Secret Environment Variables**
   ```bash
   gcloud secrets create ODOO_API_KEY --data-file=-
   # Paste your key and press Ctrl+D
   ```

---

## Domain Configuration

### General Steps (Any Platform)

1. **Purchase Domain**
   - Namecheap, Google Domains, Cloudflare, GoDaddy

2. **Configure DNS Records**

   **For Root Domain (example.com)**:
   ```
   Type: A or CNAME
   Name: @
   Value: [platform-provided-value]
   TTL: 3600
   ```

   **For www subdomain**:
   ```
   Type: CNAME
   Name: www
   Value: [platform-provided-value]
   TTL: 3600
   ```

3. **Wait for Propagation**
   - Usually 5-60 minutes
   - Check status: https://dnschecker.org

4. **Verify**
   ```bash
   # Check DNS resolution
   nslookup example.com

   # Test HTTPS
   curl -I https://example.com
   ```

---

## SSL/HTTPS Setup

All recommended platforms provide **automatic SSL certificates** via Let's Encrypt:

- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ Render: Automatic
- ✅ Railway: Automatic
- ✅ DigitalOcean: Automatic
- ✅ AWS Amplify: Automatic

### Manual SSL (if needed)

1. **Generate Certificate**
   ```bash
   # Using Certbot
   sudo certbot certonly --manual --preferred-challenges dns
   ```

2. **Add DNS TXT Record**
   ```
   Follow Certbot instructions
   ```

3. **Install Certificate**
   ```
   Platform-specific (refer to platform docs)
   ```

---

## Post-Deployment Steps

### 1. Verify Deployment

```bash
# Check homepage loads
curl -I https://your-domain.com

# Check localized routes
curl -I https://your-domain.com/en
curl -I https://your-domain.com/ar
curl -I https://your-domain.com/fr

# Check API route
curl -X POST https://your-domain.com/api/odoo/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

### 2. Test All Features

- [ ] Homepage loads correctly
- [ ] All three locales work (en, ar, fr)
- [ ] Navigation works
- [ ] Blog articles load from Strapi
- [ ] Images load from Supabase
- [ ] Contact form submits to Odoo
- [ ] Form validation works
- [ ] Responsive design works on mobile
- [ ] RTL layout works for Arabic

### 3. Configure Custom Domain

- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] HTTPS redirect enabled
- [ ] www redirect configured

### 4. Set Up Analytics

- [ ] Vercel Analytics enabled (if using Vercel)
- [ ] Google Analytics configured (optional)
- [ ] Performance monitoring enabled

### 5. Configure Caching

```bash
# Recommended cache headers
/_next/static/* → Cache-Control: public, max-age=31536000, immutable
/images/* → Cache-Control: public, max-age=31536000
/icons/* → Cache-Control: public, max-age=31536000
```

### 6. Create Backups

- [ ] Strapi CMS backed up
- [ ] Odoo CRM data backed up
- [ ] Code repository backed up (GitHub already does this)

---

## Monitoring & Maintenance

### Performance Monitoring

**Vercel Analytics** (if using Vercel):
- Automatic performance tracking
- Web Vitals monitoring
- Audience insights

**Google Lighthouse**:
```bash
# Run Lighthouse audit
npx lighthouse https://your-domain.com --view
```

**Target Scores**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

### Uptime Monitoring

Use services like:
- UptimeRobot (free): https://uptimerobot.com
- Pingdom: https://pingdom.com
- StatusCake: https://statuscake.com

Configuration:
```
URL: https://your-domain.com
Check interval: 5 minutes
Alert: Email/SMS on downtime
```

### Error Tracking

Consider integrating:
- Sentry: https://sentry.io
- Rollbar: https://rollbar.com
- LogRocket: https://logrocket.com

### Log Monitoring

Each platform provides logs:

```bash
# Vercel
vercel logs

# Netlify
netlify logs

# Render
Check dashboard

# Railway
railway logs
```

---

## Troubleshooting

### Common Issues

#### 1. Build Fails

**Error**: `npm install` fails

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+
```

#### 2. Environment Variables Not Working

**Error**: Odoo connection fails, Strapi data not loading

**Solution**:
```bash
# Verify variables are set
# Vercel
vercel env ls

# Netlify
netlify env:list

# Check variable names (case-sensitive)
# Ensure NEXT_PUBLIC_ prefix for client-side variables
# Restart deployment after adding variables
```

#### 3. Routing Issues

**Error**: 404 on locale routes

**Solution**:
```javascript
// Check middleware.ts
export const config = {
  matcher: ['/', '/(ar|en|fr)/:path*']
};

// Verify next.config.ts has i18n plugin
```

#### 4. API Routes Not Working

**Error**: `/api/odoo/contact` returns 500

**Solution**:
```bash
# Check API route logs
# Verify Odoo credentials
# Test Odoo connection manually
curl -X POST https://sarl-leqta-prod.odoo.com/xmlrpc/2/common \
  -d '...'

# Check CORS if calling from client
```

#### 5. Images Not Loading

**Error**: Images from Supabase not displaying

**Solution**:
```javascript
// Check next.config.ts
images: {
  remotePatterns: [{
    protocol: 'https',
    hostname: 'nmgsempbczwwefyzsofb.supabase.co',
    pathname: '/storage/v1/object/public/**'
  }]
}

# Verify Supabase bucket is public
# Check image URLs in browser console
```

#### 6. Slow Performance

**Symptoms**: Long page load times

**Solution**:
```bash
# Run Lighthouse audit
npx lighthouse https://your-domain.com

# Check bundle size
npm run build
# Look for large bundles

# Optimize images
# Use WebP format
# Enable lazy loading

# Enable CDN caching
# Configure Cache-Control headers
```

#### 7. Memory Issues

**Error**: Application crashes with out of memory

**Solution**:
```bash
# Increase memory limit (platform-specific)
# Vercel: Upgrade plan
# Render: Increase instance size
# AWS: Increase instance type

# Optimize build
# Remove unused dependencies
npm prune --production
```

---

## Deployment Checklist

### Before Deployment

- [ ] Code committed and pushed
- [ ] Production build tested locally
- [ ] Environment variables documented
- [ ] External services configured
- [ ] Domain purchased (if using custom domain)

### During Deployment

- [ ] Platform selected
- [ ] Repository connected
- [ ] Build settings configured
- [ ] Environment variables added
- [ ] Initial deployment successful

### After Deployment

- [ ] Application accessible
- [ ] All features tested
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics enabled
- [ ] Monitoring configured
- [ ] Team notified

---

## Recommended Deployment Strategy

For the Laqta project, we recommend:

### Development → Staging → Production

1. **Development**: Automatic deployments from feature branches
2. **Staging**: Automatic deployments from `develop` branch
3. **Production**: Manual deployments from `master` branch

### Best Platform Choices

| Priority | Platform | Reason |
|----------|----------|--------|
| **1st Choice** | **Vercel** | Best Next.js integration, zero-config |
| **2nd Choice** | **Render** | Great free tier, easy to use |
| **3rd Choice** | **Railway** | Good DX, simple pricing |
| **Enterprise** | **AWS Amplify** | Scalable, enterprise features |

---

## Summary

Your Next.js application is now ready for deployment!

**Quickest Path**:
1. Push code to GitHub
2. Sign up for Vercel
3. Import repository
4. Add environment variables
5. Deploy (automatic)

**Total Time**: 10-15 minutes for first deployment

---

**Need Help?**
- Check platform documentation
- Review error logs
- Consult Next.js deployment docs: https://nextjs.org/docs/deployment

**Maintained by**: Laqta Development Team
**Last Updated**: January 2025
