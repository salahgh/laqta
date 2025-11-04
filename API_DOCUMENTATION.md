# API Documentation

## Laqta - Creative Agency Website

**Last Updated**: January 2025
**Version**: 1.0.0

---

## Table of Contents

1. [Overview](#overview)
2. [API Routes](#api-routes)
   - [POST /api/odoo/contact](#post-apiodoocontact)
3. [External Service APIs](#external-service-apis)
   - [Odoo CRM](#odoo-crm)
   - [Strapi CMS](#strapi-cms)
   - [Supabase Storage](#supabase-storage)
4. [Authentication](#authentication)
5. [Error Handling](#error-handling)
6. [Rate Limiting](#rate-limiting)
7. [Testing APIs](#testing-apis)

---

## Overview

The Laqta application uses a combination of internal API routes and external service APIs:

- **Internal API Routes**: Next.js API routes (`/app/api/*`)
- **External Services**:
  - Odoo CRM (Lead management)
  - Strapi CMS (Content management)
  - Supabase (Image storage)

---

## API Routes

### POST /api/odoo/contact

Submit contact form data to Odoo CRM as a lead.

**Endpoint**: `POST /api/odoo/contact`

**Headers**:
```http
Content-Type: application/json
```

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+213555123456",
  "company": "Example Corp",
  "message": "I'm interested in your services"
}
```

**Request Schema**:
```typescript
interface ContactRequest {
  name: string;          // Required, min 2 characters
  email: string;         // Required, valid email format
  phone?: string;        // Optional, phone number
  company?: string;      // Optional, company name
  message: string;       // Required, min 10 characters
}
```

**Success Response**:
```json
{
  "success": true,
  "leadId": 12345,
  "message": "Lead created successfully"
}
```

**HTTP Status**: `200 OK`

**Error Response**:
```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

**HTTP Status Codes**:
- `400 Bad Request` - Invalid input data
- `401 Unauthorized` - Odoo authentication failed
- `500 Internal Server Error` - Server-side error

**Example Usage**:

#### JavaScript (Fetch API)
```javascript
const response = await fetch('/api/odoo/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+213555123456',
    company: 'Example Corp',
    message: 'I am interested in your services'
  })
});

const data = await response.json();

if (data.success) {
  console.log('Lead created:', data.leadId);
} else {
  console.error('Error:', data.error);
}
```

#### cURL
```bash
curl -X POST http://localhost:3000/api/odoo/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+213555123456",
    "company": "Example Corp",
    "message": "I am interested in your services"
  }'
```

**Implementation Details**:

The API route performs the following steps:

1. **Validate Request Body**
   - Check for required fields (name, email, message)
   - Validate email format
   - Validate string lengths

2. **Authenticate with Odoo**
   ```typescript
   const uid = await xmlrpc.methodCall('authenticate', [
     process.env.ODOO_DB,
     process.env.ODOO_USERNAME,
     process.env.ODOO_API_KEY,
     {}
   ])
   ```

3. **Find "Warm" Stage**
   ```typescript
   const stageIds = await xmlrpc.methodCall('execute_kw', [
     process.env.ODOO_DB,
     uid,
     process.env.ODOO_API_KEY,
     'crm.stage',
     'search',
     [[['name', '=', 'Warm']]]
   ])
   ```

4. **Create Lead**
   ```typescript
   const leadId = await xmlrpc.methodCall('execute_kw', [
     process.env.ODOO_DB,
     uid,
     process.env.ODOO_API_KEY,
     'crm.lead',
     'create',
     [{
       name: `Lead from ${name}`,
       contact_name: name,
       email_from: email,
       phone: phone,
       partner_name: company,
       description: message,
       stage_id: stageId
     }]
   ])
   ```

5. **Return Response**

**Error Scenarios**:

| Error | Description | Status Code |
|-------|-------------|-------------|
| Missing required fields | name, email, or message not provided | 400 |
| Invalid email format | Email doesn't match email regex | 400 |
| Odoo authentication failed | Invalid credentials | 401 |
| "Warm" stage not found | CRM stage configuration issue | 500 |
| Lead creation failed | Odoo API error | 500 |
| Network error | Cannot reach Odoo server | 500 |

**File Location**: `src/app/api/odoo/contact/handler.ts`

---

## External Service APIs

---

## Odoo CRM

**Service**: Odoo SaaS Platform
**Protocol**: XML-RPC over HTTPS
**Base URL**: `https://sarl-leqta-prod.odoo.com`
**Database**: `sarl-leqta-prod`

### Authentication

Odoo uses XML-RPC authentication with API key:

```typescript
import * as xmlrpc from 'xmlrpc'

const client = xmlrpc.createSecureClient({
  host: 'sarl-leqta-prod.odoo.com',
  port: 443,
  path: '/xmlrpc/2/common'
})

// Authenticate
const uid = await client.methodCall('authenticate', [
  'sarl-leqta-prod',        // Database
  'salahbakhi13@gmail.com', // Username
  'your_api_key',           // API Key
  {}                        // Additional params
])
```

### Common Operations

#### Search Records
```typescript
const stageIds = await client.methodCall('execute_kw', [
  database,
  uid,
  apiKey,
  'crm.stage',        // Model
  'search',           // Method
  [[['name', '=', 'Warm']]]  // Domain filter
])
```

#### Read Records
```typescript
const stages = await client.methodCall('execute_kw', [
  database,
  uid,
  apiKey,
  'crm.stage',
  'read',
  [stageIds, ['id', 'name']]  // IDs and fields
])
```

#### Create Records
```typescript
const leadId = await client.methodCall('execute_kw', [
  database,
  uid,
  apiKey,
  'crm.lead',
  'create',
  [{
    name: 'Lead Name',
    email_from: 'email@example.com',
    // ... other fields
  }]
])
```

### Available Models

| Model | Purpose | Key Fields |
|-------|---------|------------|
| `crm.lead` | Leads/Opportunities | name, contact_name, email_from, phone, description, stage_id |
| `crm.stage` | Pipeline stages | name, sequence |
| `res.partner` | Contacts/Companies | name, email, phone, company_type |

### Error Codes

| Code | Description |
|------|-------------|
| `1` | Authentication failed |
| `2` | Access denied |
| `3` | Invalid model |
| `4` | Record not found |
| `5` | Constraint violation |

**Documentation**: https://www.odoo.com/documentation/17.0/developer/reference/external_api.html

---

## Strapi CMS

**Service**: Headless CMS
**Protocol**: REST API over HTTPS
**Base URL (Production)**: `https://my-blog-cms-sfs1.onrender.com`
**Base URL (Development)**: `http://localhost:1337`

### Base Configuration

```typescript
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL_2
const API_TOKEN = process.env.STRAPI_API_TOKEN // Optional, if using auth

const headers = {
  'Content-Type': 'application/json',
  ...(API_TOKEN && { Authorization: `Bearer ${API_TOKEN}` })
}
```

### Content Types

#### Articles

**Endpoint**: `/api/articles`

**Fields**:
```typescript
interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    publishedAt: string;
    locale: string;
    author: {
      data: {
        id: number;
        attributes: {
          name: string;
          email: string;
          avatar: Media;
        }
      }
    };
    category: {
      data: {
        id: number;
        attributes: {
          name: string;
          slug: string;
        }
      }
    };
    tags: {
      data: Array<{
        id: number;
        attributes: {
          name: string;
          slug: string;
        }
      }>
    };
    featuredImage: {
      data: Media;
    };
  }
}

interface Media {
  id: number;
  attributes: {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
  }
}
```

**Query Parameters**:
- `locale`: Filter by language (en, ar, fr)
- `pagination[page]`: Page number (default: 1)
- `pagination[pageSize]`: Items per page (default: 25)
- `sort`: Sort field (e.g., `publishedAt:desc`)
- `populate`: Populate relations (e.g., `populate=*`)
- `filters`: Filter records (e.g., `filters[slug][$eq]=my-article`)

**Examples**:

##### Get All Articles (Paginated)
```typescript
const response = await fetch(
  `${STRAPI_URL}/api/articles?` +
  `locale=en&` +
  `pagination[page]=1&` +
  `pagination[pageSize]=10&` +
  `populate=*&` +
  `sort=publishedAt:desc`,
  { headers }
)

const data = await response.json()
const articles = data.data
const meta = data.meta // Pagination info
```

##### Get Article by Slug
```typescript
const response = await fetch(
  `${STRAPI_URL}/api/articles?` +
  `filters[slug][$eq]=${slug}&` +
  `locale=${locale}&` +
  `populate=*`,
  { headers }
)

const data = await response.json()
const article = data.data[0]
```

##### Search Articles
```typescript
const response = await fetch(
  `${STRAPI_URL}/api/articles?` +
  `filters[$or][0][title][$containsi]=${query}&` +
  `filters[$or][1][excerpt][$containsi]=${query}&` +
  `locale=${locale}&` +
  `populate=*`,
  { headers }
)

const data = await response.json()
const results = data.data
```

#### Services

**Endpoint**: `/api/services`

**Fields**:
```typescript
interface Service {
  id: number;
  attributes: {
    title: string;
    description: string;
    pricing: string;
    features: string[];
    locale: string;
    icon: Media;
    featuredImage: Media;
  }
}
```

**Example**:
```typescript
const response = await fetch(
  `${STRAPI_URL}/api/services?locale=${locale}&populate=*`,
  { headers }
)

const data = await response.json()
const services = data.data
```

#### Categories

**Endpoint**: `/api/categories`

**Example**:
```typescript
const response = await fetch(
  `${STRAPI_URL}/api/categories?locale=${locale}`,
  { headers }
)

const data = await response.json()
const categories = data.data
```

#### Tags

**Endpoint**: `/api/tags`

**Example**:
```typescript
const response = await fetch(
  `${STRAPI_URL}/api/tags?locale=${locale}`,
  { headers }
)

const data = await response.json()
const tags = data.data
```

### Response Format

All Strapi responses follow this structure:

```json
{
  "data": [ /* array of records or single record */ ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 10,
      "pageCount": 5,
      "total": 50
    }
  }
}
```

### Error Responses

```json
{
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {}
  }
}
```

**Common Status Codes**:
- `200`: Success
- `400`: Bad request (invalid query)
- `401`: Unauthorized (invalid token)
- `403`: Forbidden (insufficient permissions)
- `404`: Not found
- `500`: Internal server error

### Strapi API Helpers

**File**: `lib/strapi.ts`

```typescript
// Get all articles
export async function getArticles(locale: string, page = 1, limit = 10)

// Get single article by slug
export async function getArticleBySlug(slug: string, locale: string)

// Search articles
export async function searchArticles(query: string, locale: string)

// Get services
export async function getServices(locale: string)

// Get categories
export async function getCategories(locale: string)

// Get tags
export async function getTags(locale: string)

// Get articles by category
export async function getArticlesByCategory(categorySlug: string, locale: string)

// Get articles by tag
export async function getArticlesByTag(tagSlug: string, locale: string)
```

**Documentation**: https://docs.strapi.io/dev-docs/api/rest

---

## Supabase Storage

**Service**: Supabase Storage (S3-compatible)
**Protocol**: HTTPS
**Base URL**: `https://nmgsempbczwwefyzsofb.supabase.co`
**Storage Path**: `/storage/v1/object/public/**`

### Image URLs

Images are accessed via direct URLs:

```
https://nmgsempbczwwefyzsofb.supabase.co/storage/v1/object/public/images/hero.jpg
```

### Next.js Image Integration

Images from Supabase are automatically optimized by Next.js:

```tsx
import Image from 'next/image'

<Image
  src="https://nmgsempbczwwefyzsofb.supabase.co/storage/v1/object/public/images/hero.jpg"
  width={1200}
  height={600}
  alt="Hero image"
  priority={true}  // Load immediately
/>
```

### Configuration

**File**: `next.config.ts`

```typescript
{
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'nmgsempbczwwefyzsofb.supabase.co',
      pathname: '/storage/v1/object/public/**'
    }]
  }
}
```

### Upload Files (Optional)

If you need to upload images programmatically:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://nmgsempbczwwefyzsofb.supabase.co',
  'your-anon-key'
)

const { data, error } = await supabase.storage
  .from('images')
  .upload('public/hero.jpg', file)
```

**Documentation**: https://supabase.com/docs/guides/storage

---

## Authentication

### API Keys

All external services require authentication:

**Odoo CRM**:
- API Key stored in `ODOO_API_KEY`
- Used for XML-RPC authentication

**Strapi CMS**:
- Public API (no auth required for read operations)
- Optional: API token for authenticated requests

**Supabase**:
- Public bucket (no auth required for reads)
- Optional: Service role key for admin operations

### Environment Variables

```bash
# Odoo
ODOO_URL=https://sarl-leqta-prod.odoo.com
ODOO_DB=sarl-leqta-prod
ODOO_API_KEY=your_api_key
ODOO_USERNAME=your_email@example.com

# Strapi
NEXT_PUBLIC_STRAPI_URL_2=https://my-blog-cms-sfs1.onrender.com
# Optional
STRAPI_API_TOKEN=your_token_here

# Supabase
# No credentials needed for public bucket access
```

---

## Error Handling

### Standard Error Response

All API routes return errors in this format:

```typescript
{
  success: false,
  error: string,
  details?: any  // Optional additional error info
}
```

### Error Types

#### Client Errors (4xx)

```typescript
// 400 Bad Request
{
  success: false,
  error: "Missing required field: email"
}

// 401 Unauthorized
{
  success: false,
  error: "Authentication failed"
}

// 404 Not Found
{
  success: false,
  error: "Resource not found"
}
```

#### Server Errors (5xx)

```typescript
// 500 Internal Server Error
{
  success: false,
  error: "An unexpected error occurred"
}

// 503 Service Unavailable
{
  success: false,
  error: "External service temporarily unavailable"
}
```

### Error Handling Best Practices

```typescript
try {
  const response = await fetch('/api/odoo/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    // Handle error
    throw new Error(result.error || 'Request failed')
  }

  // Handle success
  return result
} catch (error) {
  console.error('API Error:', error)
  // Show user-friendly error message
  alert('An error occurred. Please try again.')
}
```

---

## Rate Limiting

### Current Status

**No rate limiting implemented**

### Recommended Implementation

For production, consider implementing rate limiting:

```typescript
// lib/rateLimit.ts
import { LRUCache } from 'lru-cache'

const rateLimit = new LRUCache({
  max: 500,
  ttl: 60000 // 1 minute
})

export function checkRateLimit(ip: string) {
  const tokenCount = rateLimit.get(ip) || 0

  if (tokenCount >= 10) {
    return false // Exceeded limit
  }

  rateLimit.set(ip, tokenCount + 1)
  return true
}
```

**Recommended Limits**:
- `/api/odoo/contact`: 5 requests per minute per IP
- Strapi CMS: No limit (external service handles this)

---

## Testing APIs

### Testing Tools

1. **cURL** (Command line)
2. **Postman** (https://postman.com)
3. **Insomnia** (https://insomnia.rest)
4. **VS Code REST Client** (Extension)

### Example Tests

#### Test Contact Form API

```bash
# Success case
curl -X POST http://localhost:3000/api/odoo/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'

# Expected: {"success": true, "leadId": 12345}
```

```bash
# Error case - missing email
curl -X POST http://localhost:3000/api/odoo/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "message": "This is a test message"
  }'

# Expected: {"success": false, "error": "Missing required field: email"}
```

#### Test Strapi API

```bash
# Get articles
curl "http://localhost:1337/api/articles?locale=en&populate=*"

# Get single article
curl "http://localhost:1337/api/articles?filters[slug][\$eq]=my-article&locale=en&populate=*"
```

### Automated Testing (Recommended)

```typescript
// __tests__/api/odoo-contact.test.ts

describe('POST /api/odoo/contact', () => {
  it('should create lead successfully', async () => {
    const response = await fetch('http://localhost:3000/api/odoo/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message'
      })
    })

    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.leadId).toBeDefined()
  })

  it('should return error for missing email', async () => {
    const response = await fetch('http://localhost:3000/api/odoo/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        message: 'Test message'
      })
    })

    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.error).toContain('email')
  })
})
```

---

## API Versioning

**Current Version**: v1 (no explicit versioning)

**Future Recommendation**: Use versioned endpoints

```
/api/v1/odoo/contact
/api/v2/odoo/contact
```

---

## Summary

The Laqta application provides:

1. **Internal API Route**:
   - `POST /api/odoo/contact` - Submit contact forms

2. **External Services**:
   - Odoo CRM (XML-RPC) - Lead management
   - Strapi CMS (REST) - Content management
   - Supabase Storage (HTTPS) - Image hosting

All APIs are well-documented and follow REST principles with clear error handling.

---

**Need Help?**
- Review implementation files in `src/app/api/` and `lib/`
- Check external service documentation
- Test APIs with Postman or cURL

**Maintained by**: Laqta Development Team
**Last Updated**: January 2025
