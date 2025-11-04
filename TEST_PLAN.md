# User Acceptance Test Plan

## Laqta - Creative Agency Website

**Document Version**: 1.0
**Last Updated**: January 2025
**Test Environment**: Production/Staging

---

## Table of Contents

1. [Test Overview](#test-overview)
2. [Testing Prerequisites](#testing-prerequisites)
3. [Test Environments](#test-environments)
4. [Feature Testing Checklist](#feature-testing-checklist)
5. [Critical Path Testing](#critical-path-testing)
6. [Cross-Browser Testing](#cross-browser-testing)
7. [Mobile Device Testing](#mobile-device-testing)
8. [Performance Testing](#performance-testing)
9. [Accessibility Testing](#accessibility-testing)
10. [Security Testing](#security-testing)
11. [Bug Reporting Guidelines](#bug-reporting-guidelines)
12. [Sign-Off Checklist](#sign-off-checklist)

---

## Test Overview

### Purpose
This test plan provides a comprehensive checklist of all features and functionalities that should be tested before the Laqta website goes live. Each section contains specific tasks that must be verified by the client or QA team.

### Scope
- All user-facing features
- All supported languages (English, Arabic, French)
- All pages and navigation
- Forms and integrations
- Responsive design across devices
- Performance and accessibility

### Test Approach
- **Manual Testing**: All features will be tested manually by users
- **Exploratory Testing**: Users should explore the site naturally
- **Regression Testing**: Re-test after any bug fixes

---

## Testing Prerequisites

### Required Information

- [ ] **Website URL**: _____________________________
- [ ] **Test User Credentials** (if any): _____________________________
- [ ] **Odoo CRM Access**: To verify lead submissions
- [ ] **Strapi CMS Access**: To verify content display
- [ ] **Test Contact Details**: Use test email addresses for form submissions

### Required Test Devices

- [ ] Desktop/Laptop (Windows or Mac)
- [ ] Tablet (iPad or Android)
- [ ] Smartphone (iOS and Android)

### Required Browsers

- [ ] Google Chrome (latest version)
- [ ] Mozilla Firefox (latest version)
- [ ] Safari (latest version)
- [ ] Microsoft Edge (latest version)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Test Environments

### Environment Details

| Environment | URL | Purpose |
|-------------|-----|---------|
| **Staging** | _________________ | Pre-production testing |
| **Production** | _________________ | Final live site |

---

## Feature Testing Checklist

---

## 1. Homepage Testing

**URL**: `/` (redirects to default locale)

### 1.1 Hero Section

- [ ] **HT-01**: Hero section loads and displays correctly
- [ ] **HT-02**: Main headline is visible and readable
- [ ] **HT-03**: Subheadline/tagline is visible and readable
- [ ] **HT-04**: Hero image/background loads correctly
- [ ] **HT-05**: Call-to-action (CTA) button is visible
- [ ] **HT-06**: CTA button is clickable and works correctly
- [ ] **HT-07**: Hero section is responsive on mobile devices
- [ ] **HT-08**: Hero section is responsive on tablets
- [ ] **HT-09**: Animations/transitions work smoothly (if any)

### 1.2 About Section

- [ ] **AB-01**: About section is visible on homepage
- [ ] **AB-02**: About title displays correctly
- [ ] **AB-03**: About description text is readable and formatted
- [ ] **AB-04**: About images/illustrations load correctly
- [ ] **AB-05**: "Learn More" or CTA button works (if present)
- [ ] **AB-06**: Section layout is responsive on all devices

### 1.3 Services Section

- [ ] **SV-01**: Services section displays on homepage
- [ ] **SV-02**: All service cards are visible
- [ ] **SV-03**: Service card titles display correctly
- [ ] **SV-04**: Service card descriptions are readable
- [ ] **SV-05**: Service icons/images load correctly
- [ ] **SV-06**: Service cards are clickable (if applicable)
- [ ] **SV-07**: Gradient backgrounds display correctly
- [ ] **SV-08**: Hover effects work on service cards
- [ ] **SV-09**: Services section is responsive on mobile
- [ ] **SV-10**: Services section is responsive on tablets

### 1.4 Works/Portfolio Section

- [ ] **WK-01**: Works section displays on homepage
- [ ] **WK-02**: Project cards are visible
- [ ] **WK-03**: Project images load correctly
- [ ] **WK-04**: Project titles display correctly
- [ ] **WK-05**: Project descriptions are readable
- [ ] **WK-06**: Project cards are clickable (if applicable)
- [ ] **WK-07**: Hover effects work on project cards
- [ ] **WK-08**: "View All Works" button is visible and works
- [ ] **WK-09**: Section is responsive on all devices

### 1.5 Testimonials Section

- [ ] **TM-01**: Testimonials section displays correctly
- [ ] **TM-02**: Testimonial quotes are visible and readable
- [ ] **TM-03**: Client names display correctly
- [ ] **TM-04**: Client avatars/photos load correctly
- [ ] **TM-05**: Client companies/titles display (if applicable)
- [ ] **TM-06**: Testimonial carousel/slider works (if applicable)
- [ ] **TM-07**: Navigation arrows work on carousel (if applicable)
- [ ] **TM-08**: Auto-play works correctly (if applicable)
- [ ] **TM-09**: Section is responsive on mobile devices

### 1.6 FAQ Section

- [ ] **FQ-01**: FAQ section displays on homepage
- [ ] **FQ-02**: FAQ questions are visible
- [ ] **FQ-03**: FAQ answers can be expanded/collapsed
- [ ] **FQ-04**: Accordion animation works smoothly
- [ ] **FQ-05**: All questions can be opened individually
- [ ] **FQ-06**: Content is readable when expanded
- [ ] **FQ-07**: Icons change state (open/closed)
- [ ] **FQ-08**: Section is responsive on all devices

### 1.7 Contact Section (Homepage)

- [ ] **CT-01**: Contact section displays on homepage
- [ ] **CT-02**: Contact information is visible and correct
- [ ] **CT-03**: Phone number is displayed correctly
- [ ] **CT-04**: Email address is displayed correctly
- [ ] **CT-05**: Physical address is displayed (if applicable)
- [ ] **CT-06**: Social media links are visible
- [ ] **CT-07**: Social media icons are clickable and work
- [ ] **CT-08**: "Contact Us" button works and navigates correctly

---

## 2. Navigation Testing

### 2.1 Header/Navigation Bar

- [ ] **NV-01**: Navigation bar is visible on all pages
- [ ] **NV-02**: Logo is visible and displays correctly
- [ ] **NV-03**: Logo is clickable and returns to homepage
- [ ] **NV-04**: All navigation links are visible
- [ ] **NV-05**: "Home" link works and navigates correctly
- [ ] **NV-06**: "About" link works and navigates correctly
- [ ] **NV-07**: "Services" link works and navigates correctly
- [ ] **NV-08**: "Blog" link works and navigates correctly
- [ ] **NV-09**: "Contact" link works and navigates correctly
- [ ] **NV-10**: "Partners" link works (if present)
- [ ] **NV-11**: "Brands" link works (if present)
- [ ] **NV-12**: Language selector is visible
- [ ] **NV-13**: Language selector dropdown opens correctly
- [ ] **NV-14**: All three languages are listed (EN, AR, FR)
- [ ] **NV-15**: Switching to English works correctly
- [ ] **NV-16**: Switching to Arabic works correctly
- [ ] **NV-17**: Switching to French works correctly
- [ ] **NV-18**: Current language is highlighted in selector
- [ ] **NV-19**: Mobile menu hamburger icon is visible on mobile
- [ ] **NV-20**: Mobile menu opens when hamburger is clicked
- [ ] **NV-21**: Mobile menu displays all navigation links
- [ ] **NV-22**: Mobile menu can be closed (X button or overlay click)
- [ ] **NV-23**: Mobile menu links work correctly
- [ ] **NV-24**: Navigation bar is sticky/fixed on scroll
- [ ] **NV-25**: Navigation bar changes style on scroll (if applicable)

### 2.2 Footer

- [ ] **FT-01**: Footer displays on all pages
- [ ] **FT-02**: Footer logo is visible
- [ ] **FT-03**: Footer navigation links are visible
- [ ] **FT-04**: All footer links work correctly
- [ ] **FT-05**: Contact information is visible in footer
- [ ] **FT-06**: Social media icons are visible in footer
- [ ] **FT-07**: Social media links work and open in new tabs
- [ ] **FT-08**: Newsletter subscription form is visible (if present)
- [ ] **FT-09**: Newsletter form accepts email input
- [ ] **FT-10**: Newsletter form validates email format
- [ ] **FT-11**: Newsletter form submits successfully
- [ ] **FT-12**: Success/error message shows for newsletter signup
- [ ] **FT-13**: Copyright text is visible and correct
- [ ] **FT-14**: Privacy Policy link is visible and works
- [ ] **FT-15**: Terms of Service link works (if present)
- [ ] **FT-16**: Footer is responsive on mobile devices

---

## 3. About Page Testing

**URL**: `/en/about`, `/ar/about`, `/fr/about`

### 3.1 About Page Content

- [ ] **AP-01**: About page loads successfully
- [ ] **AP-02**: Page title displays correctly
- [ ] **AP-03**: Page content loads and is readable
- [ ] **AP-04**: Company history section is visible
- [ ] **AP-05**: Mission/vision statement is visible
- [ ] **AP-06**: Team section displays correctly (if present)
- [ ] **AP-07**: Team member photos load correctly
- [ ] **AP-08**: Team member names and titles display
- [ ] **AP-09**: Company values/principles are visible
- [ ] **AP-10**: Images and illustrations load correctly
- [ ] **AP-11**: Call-to-action buttons work
- [ ] **AP-12**: Page is responsive on mobile devices
- [ ] **AP-13**: Page is responsive on tablets
- [ ] **AP-14**: Content is properly translated in all languages

### 3.2 About Page SEO

- [ ] **AP-15**: Page title (browser tab) is correct and translated
- [ ] **AP-16**: Meta description is present (check page source)
- [ ] **AP-17**: Open Graph tags are present for social sharing

---

## 4. Services Page Testing

**URL**: `/en/services`, `/ar/services`, `/fr/services`

### 4.1 Services Page Content

- [ ] **SP-01**: Services page loads successfully
- [ ] **SP-02**: Page title displays correctly
- [ ] **SP-03**: Services overview/introduction is visible
- [ ] **SP-04**: All service offerings are listed
- [ ] **SP-05**: Service titles display correctly
- [ ] **SP-06**: Service descriptions are readable and complete
- [ ] **SP-07**: Service icons/images load correctly
- [ ] **SP-08**: Service pricing is visible (if applicable)
- [ ] **SP-09**: Pricing cards display correctly
- [ ] **SP-10**: "Get Started" or CTA buttons work
- [ ] **SP-11**: Service comparison table displays (if present)
- [ ] **SP-12**: Individual service details are accessible
- [ ] **SP-13**: Page is responsive on mobile devices
- [ ] **SP-14**: Page is responsive on tablets
- [ ] **SP-15**: Content is properly translated in all languages

### 4.2 Service Navigation

- [ ] **SP-16**: Service category navigation works (if present)
- [ ] **SP-17**: Filter/sort functionality works (if present)
- [ ] **SP-18**: Anchor links to service sections work (if present)

---

## 5. Blog Page Testing

**URL**: `/en/blog`, `/ar/blog`, `/fr/blog`

### 5.1 Blog Homepage

- [ ] **BL-01**: Blog homepage loads successfully
- [ ] **BL-02**: Blog title/heading displays correctly
- [ ] **BL-03**: Featured articles section displays (if present)
- [ ] **BL-04**: Article cards/previews are visible
- [ ] **BL-05**: Article featured images load correctly
- [ ] **BL-06**: Article titles display correctly
- [ ] **BL-07**: Article excerpts/summaries are visible
- [ ] **BL-08**: Article publication dates display
- [ ] **BL-09**: Article authors are visible
- [ ] **BL-10**: Article categories/tags are visible
- [ ] **BL-11**: Reading time estimate displays (if present)
- [ ] **BL-12**: Article cards are clickable
- [ ] **BL-13**: "View All Articles" link works
- [ ] **BL-14**: Sidebar is visible (if present)
- [ ] **BL-15**: Recent posts widget works (if present)
- [ ] **BL-16**: Categories widget displays and works
- [ ] **BL-17**: Tags widget displays and works
- [ ] **BL-18**: Page is responsive on mobile devices
- [ ] **BL-19**: Page is responsive on tablets

### 5.2 Blog Articles List Page

**URL**: `/en/blog/all`, `/ar/blog/all`, `/fr/blog/all`

- [ ] **BA-01**: Articles list page loads successfully
- [ ] **BA-02**: All articles are displayed in a list/grid
- [ ] **BA-03**: Article cards maintain consistent design
- [ ] **BA-04**: Pagination displays at bottom (if applicable)
- [ ] **BA-05**: Page numbers are visible and correct
- [ ] **BA-06**: "Next" button works and loads next page
- [ ] **BA-07**: "Previous" button works and loads previous page
- [ ] **BA-08**: Specific page numbers are clickable and work
- [ ] **BA-09**: Current page is highlighted
- [ ] **BA-10**: "Load More" button works (if using infinite scroll)
- [ ] **BA-11**: Search bar is visible (if present)
- [ ] **BA-12**: Search functionality works correctly
- [ ] **BA-13**: Search results display correctly
- [ ] **BA-14**: Filter by category works
- [ ] **BA-15**: Filter by tag works
- [ ] **BA-16**: Sort functionality works (newest, oldest, popular)
- [ ] **BA-17**: Page is responsive on all devices

### 5.3 Individual Blog Article Page

**URL**: `/en/blog/articles/[slug]`, `/ar/blog/articles/[slug]`, `/fr/blog/articles/[slug]`

- [ ] **AR-01**: Individual article page loads successfully
- [ ] **AR-02**: Article title displays correctly
- [ ] **AR-03**: Featured image loads and displays correctly
- [ ] **AR-04**: Author information is visible
- [ ] **AR-05**: Author avatar/photo displays
- [ ] **AR-06**: Publication date displays correctly
- [ ] **AR-07**: Reading time estimate displays
- [ ] **AR-08**: Category badge/link is visible and works
- [ ] **AR-09**: Tags are visible and clickable
- [ ] **AR-10**: Article content displays correctly
- [ ] **AR-11**: Text formatting is correct (headings, bold, italic)
- [ ] **AR-12**: Images in article content load correctly
- [ ] **AR-13**: Lists (bullets, numbers) display correctly
- [ ] **AR-14**: Links in article content work
- [ ] **AR-15**: Code blocks display correctly (if present)
- [ ] **AR-16**: Quotes/blockquotes display correctly
- [ ] **AR-17**: Social sharing buttons are visible
- [ ] **AR-18**: Facebook share button works
- [ ] **AR-19**: Twitter share button works
- [ ] **AR-20**: LinkedIn share button works
- [ ] **AR-21**: Copy link button works
- [ ] **AR-22**: Related articles section displays
- [ ] **AR-23**: Related article links work
- [ ] **AR-24**: Comments section displays (if present)
- [ ] **AR-25**: Comment form works (if present)
- [ ] **AR-26**: "Back to Blog" link works
- [ ] **AR-27**: Reading progress indicator works (if present)
- [ ] **AR-28**: Table of contents displays (if present)
- [ ] **AR-29**: Table of contents links work (anchor links)
- [ ] **AR-30**: Page is responsive on mobile devices
- [ ] **AR-31**: Page is responsive on tablets
- [ ] **AR-32**: Content is properly translated in correct language

### 5.4 Blog Search and Filtering

- [ ] **BS-01**: Search bar accepts text input
- [ ] **BS-02**: Search results display after submission
- [ ] **BS-03**: Search results are relevant to query
- [ ] **BS-04**: "No results" message displays when appropriate
- [ ] **BS-05**: Category filter displays all categories
- [ ] **BS-06**: Filtering by category works correctly
- [ ] **BS-07**: Tag filter displays all tags
- [ ] **BS-08**: Filtering by tag works correctly
- [ ] **BS-09**: Multiple filters can be combined
- [ ] **BS-10**: Clear filters button works

---

## 6. Contact Page Testing

**URL**: `/en/contact`, `/ar/contact`, `/fr/contact`

### 6.1 Contact Page Content

- [ ] **CP-01**: Contact page loads successfully
- [ ] **CP-02**: Page title displays correctly
- [ ] **CP-03**: Contact information section is visible
- [ ] **CP-04**: Office address displays correctly
- [ ] **CP-05**: Phone number displays correctly and is clickable (tel: link)
- [ ] **CP-06**: Email address displays correctly and is clickable (mailto: link)
- [ ] **CP-07**: Business hours display (if present)
- [ ] **CP-08**: Map embed displays correctly (if present)
- [ ] **CP-09**: Map is interactive (zoom, pan)
- [ ] **CP-10**: Social media links are visible and work
- [ ] **CP-11**: Page is responsive on mobile devices
- [ ] **CP-12**: Page is responsive on tablets

### 6.2 Contact Form

- [ ] **CF-01**: Contact form is visible
- [ ] **CF-02**: Form title/heading displays
- [ ] **CF-03**: "Name" field is visible and labeled
- [ ] **CF-04**: "Email" field is visible and labeled
- [ ] **CF-05**: "Phone" field is visible (if present)
- [ ] **CF-06**: "Company" field is visible (if present)
- [ ] **CF-07**: "Subject" field is visible (if present)
- [ ] **CF-08**: "Message" field is visible and labeled
- [ ] **CF-09**: All fields accept text input
- [ ] **CF-10**: Placeholder text is visible in fields
- [ ] **CF-11**: Required fields are marked with asterisk (*)
- [ ] **CF-12**: Submit button is visible and labeled correctly
- [ ] **CF-13**: Form fields are responsive on mobile

### 6.3 Contact Form Validation

- [ ] **FV-01**: Submitting empty form shows error messages
- [ ] **FV-02**: "Name is required" error shows when name is empty
- [ ] **FV-03**: "Email is required" error shows when email is empty
- [ ] **FV-04**: "Message is required" error shows when message is empty
- [ ] **FV-05**: Invalid email format shows error message
- [ ] **FV-06**: Email with no @ symbol shows error
- [ ] **FV-07**: Email with no domain shows error
- [ ] **FV-08**: Name too short shows error (less than 2 characters)
- [ ] **FV-09**: Message too short shows error (less than 10 characters)
- [ ] **FV-10**: Error messages are clearly visible (red text)
- [ ] **FV-11**: Error messages are properly translated
- [ ] **FV-12**: Errors clear when fields are corrected
- [ ] **FV-13**: All errors display at once (not one at a time)

### 6.4 Contact Form Submission

- [ ] **FS-01**: Valid form submits successfully
- [ ] **FS-02**: Loading/submitting state shows during submission
- [ ] **FS-03**: Submit button shows "Sending..." during submission
- [ ] **FS-04**: Submit button is disabled during submission
- [ ] **FS-05**: Success message displays after successful submission
- [ ] **FS-06**: Success message is clear and translated correctly
- [ ] **FS-07**: Form fields are cleared after successful submission
- [ ] **FS-08**: Error message displays if submission fails
- [ ] **FS-09**: Error message is clear and user-friendly
- [ ] **FS-10**: Form can be resubmitted after error

### 6.5 Contact Form Integration (Odoo CRM)

**Note**: This requires access to Odoo CRM to verify

- [ ] **OD-01**: Lead is created in Odoo after form submission
- [ ] **OD-02**: Lead name matches submitted name
- [ ] **OD-03**: Lead email matches submitted email
- [ ] **OD-04**: Lead phone matches submitted phone (if provided)
- [ ] **OD-05**: Lead company matches submitted company (if provided)
- [ ] **OD-06**: Lead message matches submitted message
- [ ] **OD-07**: Lead is assigned to "Warm" stage
- [ ] **OD-08**: Lead has correct timestamp

---

## 7. Partners Page Testing

**URL**: `/en/partners`, `/ar/partners`, `/fr/partners`

### 7.1 Partners Page Content

- [ ] **PR-01**: Partners page loads successfully
- [ ] **PR-02**: Page title displays correctly
- [ ] **PR-03**: Partners introduction/description is visible
- [ ] **PR-04**: Partner logos are visible
- [ ] **PR-05**: Partner logos load correctly
- [ ] **PR-06**: Partner logos are high quality (not pixelated)
- [ ] **PR-07**: Partner names display (if present)
- [ ] **PR-08**: Partner descriptions display (if present)
- [ ] **PR-09**: Partner logos are clickable (if applicable)
- [ ] **PR-10**: Partner links open in new tabs
- [ ] **PR-11**: Partnership inquiry form is visible (if present)
- [ ] **PR-12**: Partnership form works correctly
- [ ] **PR-13**: Page is responsive on mobile devices
- [ ] **PR-14**: Page is responsive on tablets
- [ ] **PR-15**: Content is properly translated in all languages

---

## 8. Brands Page Testing

**URL**: `/en/brands`, `/ar/brands`, `/fr/brands`

### 8.1 Brands Page Content

- [ ] **BR-01**: Brands page loads successfully
- [ ] **BR-02**: Page title displays correctly
- [ ] **BR-03**: Brand showcase section is visible
- [ ] **BR-04**: Brand logos are visible
- [ ] **BR-05**: Brand logos load correctly
- [ ] **BR-06**: Brand names display correctly
- [ ] **BR-07**: Brand descriptions display (if present)
- [ ] **BR-08**: Brand categories are visible (if present)
- [ ] **BR-09**: Brand filtering works (if present)
- [ ] **BR-10**: Page is responsive on mobile devices
- [ ] **BR-11**: Page is responsive on tablets
- [ ] **BR-12**: Content is properly translated in all languages

---

## 9. Privacy Policy Page Testing

**URL**: `/en/PrivacyPolicy`, `/ar/PrivacyPolicy`, `/fr/PrivacyPolicy`

### 9.1 Privacy Policy Content

- [ ] **PV-01**: Privacy Policy page loads successfully
- [ ] **PV-02**: Page title displays correctly
- [ ] **PV-03**: Privacy policy content is visible and readable
- [ ] **PV-04**: All sections are present (data collection, usage, etc.)
- [ ] **PV-05**: Last updated date is visible
- [ ] **PV-06**: Contact information is provided
- [ ] **PV-07**: Links within policy work correctly
- [ ] **PV-08**: Page is responsive on mobile devices
- [ ] **PV-09**: Content is properly translated in all languages

---

## 10. Multi-Language Testing (i18n)

### 10.1 English Language

- [ ] **EN-01**: English is available in language selector
- [ ] **EN-02**: Switching to English works on all pages
- [ ] **EN-03**: All navigation items are in English
- [ ] **EN-04**: All page content is in English
- [ ] **EN-05**: All form labels are in English
- [ ] **EN-06**: All button texts are in English
- [ ] **EN-07**: All error messages are in English
- [ ] **EN-08**: Date formats are correct for English (MM/DD/YYYY or regional)
- [ ] **EN-09**: Text direction is left-to-right (LTR)
- [ ] **EN-10**: URL shows `/en/` prefix

### 10.2 Arabic Language (RTL)

- [ ] **AR-01**: Arabic is available in language selector
- [ ] **AR-02**: Arabic displays correctly (not broken characters)
- [ ] **AR-03**: Switching to Arabic works on all pages
- [ ] **AR-04**: All navigation items are in Arabic
- [ ] **AR-05**: All page content is in Arabic
- [ ] **AR-06**: All form labels are in Arabic
- [ ] **AR-07**: All button texts are in Arabic
- [ ] **AR-08**: All error messages are in Arabic
- [ ] **AR-09**: **Text direction is right-to-left (RTL)**
- [ ] **AR-10**: **Layout flips correctly for RTL**
- [ ] **AR-11**: **Navigation menu aligns to the right**
- [ ] **AR-12**: **Icons and arrows flip direction**
- [ ] **AR-13**: **Form fields align correctly in RTL**
- [ ] **AR-14**: **Text alignment is right-aligned**
- [ ] **AR-15**: Numbers display correctly
- [ ] **AR-16**: Date formats are correct for Arabic
- [ ] **AR-17**: URL shows `/ar/` prefix
- [ ] **AR-18**: No text overflow or layout breaking
- [ ] **AR-19**: All images remain properly positioned
- [ ] **AR-20**: Scrollbars appear on left side (browser default)

### 10.3 French Language

- [ ] **FR-01**: French is available in language selector
- [ ] **FR-02**: French displays correctly (accents, special characters)
- [ ] **FR-03**: Switching to French works on all pages
- [ ] **FR-04**: All navigation items are in French
- [ ] **FR-05**: All page content is in French
- [ ] **FR-06**: All form labels are in French
- [ ] **FR-07**: All button texts are in French
- [ ] **FR-08**: All error messages are in French
- [ ] **FR-09**: Date formats are correct for French (DD/MM/YYYY)
- [ ] **FR-10**: Text direction is left-to-right (LTR)
- [ ] **FR-11**: URL shows `/fr/` prefix
- [ ] **FR-12**: Accented characters display correctly (é, è, à, ç, etc.)

### 10.4 Language Switching

- [ ] **LS-01**: Current language is highlighted in selector
- [ ] **LS-02**: Switching languages maintains current page
- [ ] **LS-03**: Language preference persists across page navigation
- [ ] **LS-04**: Language switch is smooth (no page flicker)
- [ ] **LS-05**: Browser back button respects language
- [ ] **LS-06**: Direct URL access with locale works (e.g., /ar/about)
- [ ] **LS-07**: Invalid locale redirects to default (e.g., /de/about)

---

## 11. Responsive Design Testing

### 11.1 Mobile Phone (Portrait)

**Test on**: iPhone, Samsung Galaxy, Google Pixel

- [ ] **MP-01**: All pages load correctly on mobile
- [ ] **MP-02**: Text is readable without zooming
- [ ] **MP-03**: Images scale correctly and don't overflow
- [ ] **MP-04**: Navigation collapses to hamburger menu
- [ ] **MP-05**: Hamburger menu opens and closes smoothly
- [ ] **MP-06**: All buttons are easily tappable (min 44x44px)
- [ ] **MP-07**: Forms are usable on mobile
- [ ] **MP-08**: Form fields are large enough to tap
- [ ] **MP-09**: Keyboard appears correctly for input fields
- [ ] **MP-10**: Page layout doesn't break on small screens
- [ ] **MP-11**: No horizontal scrolling occurs
- [ ] **MP-12**: Footer displays correctly
- [ ] **MP-13**: All content is accessible without horizontal scroll
- [ ] **MP-14**: Touch targets are adequately spaced (no accidental taps)

### 11.2 Mobile Phone (Landscape)

- [ ] **ML-01**: All pages display correctly in landscape mode
- [ ] **ML-02**: Navigation remains functional
- [ ] **ML-03**: Content adjusts to wider viewport
- [ ] **ML-04**: Forms remain usable
- [ ] **ML-05**: No layout breaking occurs

### 11.3 Tablet (Portrait)

**Test on**: iPad, Samsung Galaxy Tab

- [ ] **TP-01**: All pages load correctly on tablet
- [ ] **TP-02**: Layout uses tablet-specific breakpoint
- [ ] **TP-03**: Navigation displays correctly
- [ ] **TP-04**: Content is readable and well-spaced
- [ ] **TP-05**: Images scale appropriately
- [ ] **TP-06**: Forms display with proper spacing
- [ ] **TP-07**: Grid layouts adjust correctly (2-column, etc.)
- [ ] **TP-08**: Touch interactions work smoothly

### 11.4 Tablet (Landscape)

- [ ] **TL-01**: All pages display correctly in landscape mode
- [ ] **TL-02**: Layout transitions to desktop-like view
- [ ] **TL-03**: Navigation may show full menu (depending on design)
- [ ] **TL-04**: Content uses available space effectively
- [ ] **TL-05**: No awkward spacing or gaps

### 11.5 Desktop (Small)

**Test on**: 1366x768, 1440x900

- [ ] **DS-01**: All pages load correctly
- [ ] **DS-02**: Full navigation menu is visible
- [ ] **DS-03**: Layout uses desktop breakpoint
- [ ] **DS-04**: Content is well-distributed across viewport
- [ ] **DS-05**: No elements overlap or collide
- [ ] **DS-06**: Images are high quality (not stretched)

### 11.6 Desktop (Large)

**Test on**: 1920x1080, 2560x1440, 4K

- [ ] **DL-01**: All pages load correctly on large screens
- [ ] **DL-02**: Content doesn't stretch excessively
- [ ] **DL-03**: Max-width containers work correctly
- [ ] **DL-04**: Layout remains centered and balanced
- [ ] **DL-05**: Images remain high quality (retina support)
- [ ] **DL-06**: No excessive whitespace

---

## 12. Browser Compatibility Testing

Test the **entire website** on each browser:

### 12.1 Google Chrome (Latest)

- [ ] **CH-01**: Homepage loads and displays correctly
- [ ] **CH-02**: All pages load without errors
- [ ] **CH-03**: All interactive features work
- [ ] **CH-04**: Forms submit successfully
- [ ] **CH-05**: Animations and transitions work smoothly
- [ ] **CH-06**: Console shows no JavaScript errors

### 12.2 Mozilla Firefox (Latest)

- [ ] **FF-01**: Homepage loads and displays correctly
- [ ] **FF-02**: All pages load without errors
- [ ] **FF-03**: All interactive features work
- [ ] **FF-04**: Forms submit successfully
- [ ] **FF-05**: Animations and transitions work smoothly
- [ ] **FF-06**: Console shows no JavaScript errors

### 12.3 Safari (Latest)

- [ ] **SF-01**: Homepage loads and displays correctly
- [ ] **SF-02**: All pages load without errors
- [ ] **SF-03**: All interactive features work
- [ ] **SF-04**: Forms submit successfully
- [ ] **SF-05**: Animations and transitions work smoothly
- [ ] **SF-06**: Console shows no JavaScript errors
- [ ] **SF-07**: Fonts render correctly (web fonts load)

### 12.4 Microsoft Edge (Latest)

- [ ] **ED-01**: Homepage loads and displays correctly
- [ ] **ED-02**: All pages load without errors
- [ ] **ED-03**: All interactive features work
- [ ] **ED-04**: Forms submit successfully
- [ ] **ED-05**: Animations and transitions work smoothly
- [ ] **ED-06**: Console shows no JavaScript errors

### 12.5 Mobile Safari (iOS)

- [ ] **MS-01**: Homepage loads correctly on iPhone
- [ ] **MS-02**: All pages are accessible and functional
- [ ] **MS-03**: Touch interactions work correctly
- [ ] **MS-04**: Forms work with iOS keyboard
- [ ] **MS-05**: No layout breaking occurs

### 12.6 Chrome Mobile (Android)

- [ ] **CM-01**: Homepage loads correctly on Android
- [ ] **CM-02**: All pages are accessible and functional
- [ ] **CM-03**: Touch interactions work correctly
- [ ] **CM-04**: Forms work with Android keyboard
- [ ] **CM-05**: No layout breaking occurs

---

## Critical Path Testing

**Priority**: These are the most critical user journeys that must work perfectly.

### Critical Path 1: Contact Form Submission

**User Goal**: Submit a contact inquiry

1. [ ] **CP1-01**: Navigate to Contact page from homepage
2. [ ] **CP1-02**: Fill out all required fields in contact form
3. [ ] **CP1-03**: Submit the form
4. [ ] **CP1-04**: See success message
5. [ ] **CP1-05**: Verify lead appears in Odoo CRM
6. [ ] **CP1-06**: Repeat in all three languages (EN, AR, FR)

**Expected Result**: Lead is successfully created in Odoo with correct information.

### Critical Path 2: Read Blog Article

**User Goal**: Discover and read a blog article

1. [ ] **CP2-01**: Navigate to Blog from homepage
2. [ ] **CP2-02**: Browse article listings
3. [ ] **CP2-03**: Click on an article
4. [ ] **CP2-04**: Read full article content
5. [ ] **CP2-05**: Share article on social media
6. [ ] **CP2-06**: Navigate to related article
7. [ ] **CP2-07**: Return to blog listing

**Expected Result**: Smooth reading experience with all content loading correctly.

### Critical Path 3: Navigate Services

**User Goal**: Learn about available services

1. [ ] **CP3-01**: Navigate to Services page from homepage
2. [ ] **CP3-02**: Browse all service offerings
3. [ ] **CP3-03**: View service details
4. [ ] **CP3-04**: Click "Get Started" or contact button
5. [ ] **CP3-05**: Reach contact form

**Expected Result**: Clear service information and easy path to inquiry.

### Critical Path 4: Multi-Language Experience

**User Goal**: View site in preferred language

1. [ ] **CP4-01**: Open website (default language)
2. [ ] **CP4-02**: Open language selector
3. [ ] **CP4-03**: Switch to Arabic
4. [ ] **CP4-04**: Verify RTL layout works
5. [ ] **CP4-05**: Navigate to different pages
6. [ ] **CP4-06**: Switch to French
7. [ ] **CP4-07**: Verify content is translated
8. [ ] **CP4-08**: Switch back to English

**Expected Result**: Seamless language switching with all content properly translated.

---

## Performance Testing

### Page Load Speed

Test with tools: Google PageSpeed Insights, GTmetrix, WebPageTest

- [ ] **PF-01**: Homepage loads in under 3 seconds
- [ ] **PF-02**: About page loads in under 3 seconds
- [ ] **PF-03**: Services page loads in under 3 seconds
- [ ] **PF-04**: Blog page loads in under 3 seconds
- [ ] **PF-05**: Individual blog articles load in under 3 seconds
- [ ] **PF-06**: Contact page loads in under 3 seconds

### Performance Metrics

- [ ] **PM-01**: Lighthouse Performance score is 90+
- [ ] **PM-02**: First Contentful Paint (FCP) is under 1.8s
- [ ] **PM-03**: Largest Contentful Paint (LCP) is under 2.5s
- [ ] **PM-04**: Time to Interactive (TTI) is under 3.8s
- [ ] **PM-05**: Cumulative Layout Shift (CLS) is under 0.1
- [ ] **PM-06**: First Input Delay (FID) is under 100ms

### Asset Optimization

- [ ] **AS-01**: All images are optimized (WebP format where supported)
- [ ] **AS-02**: Images load with lazy loading (below the fold)
- [ ] **AS-03**: Fonts load without blocking content
- [ ] **AS-04**: No render-blocking JavaScript
- [ ] **AS-05**: CSS is minified
- [ ] **AS-06**: JavaScript is minified

---

## Accessibility Testing (WCAG 2.1)

### Keyboard Navigation

- [ ] **KB-01**: All interactive elements are keyboard accessible
- [ ] **KB-02**: Tab order is logical and follows visual flow
- [ ] **KB-03**: Focus indicator is visible on all elements
- [ ] **KB-04**: Modal dialogs can be closed with Escape key
- [ ] **KB-05**: Dropdown menus work with arrow keys
- [ ] **KB-06**: Forms can be submitted with Enter key
- [ ] **KB-07**: No keyboard traps (can navigate in and out)

### Screen Reader Support

Test with: NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS)

- [ ] **SR-01**: Page structure is announced correctly (headings, landmarks)
- [ ] **SR-02**: Images have appropriate alt text
- [ ] **SR-03**: Links have descriptive text (not "click here")
- [ ] **SR-04**: Form labels are associated with inputs
- [ ] **SR-05**: Error messages are announced
- [ ] **SR-06**: Success messages are announced
- [ ] **SR-07**: Dynamic content changes are announced
- [ ] **SR-08**: Skip to main content link is present and works

### Visual Accessibility

- [ ] **VA-01**: Color contrast ratio is at least 4.5:1 for normal text
- [ ] **VA-02**: Color contrast ratio is at least 3:1 for large text
- [ ] **VA-03**: Information is not conveyed by color alone
- [ ] **VA-04**: Text can be resized up to 200% without breaking layout
- [ ] **VA-05**: Content is readable with browser zoom at 200%
- [ ] **VA-06**: Focus indicators have sufficient contrast
- [ ] **VA-07**: All interactive elements are clearly distinguishable

### ARIA Implementation

- [ ] **AR-01**: Landmark roles are used appropriately
- [ ] **AR-02**: ARIA labels are provided for icon buttons
- [ ] **AR-03**: ARIA live regions announce dynamic changes
- [ ] **AR-04**: ARIA expanded state is correct for dropdowns
- [ ] **AR-05**: ARIA invalid is used for form errors

### Accessibility Score

- [ ] **AC-01**: Lighthouse Accessibility score is 95+
- [ ] **AC-02**: No critical accessibility errors in automated tests
- [ ] **AC-03**: WAVE tool shows no errors

---

## Security Testing

### Form Security

- [ ] **SC-01**: Forms validate input on server-side (not just client-side)
- [ ] **SC-02**: SQL injection attempts are prevented
- [ ] **SC-03**: XSS (Cross-Site Scripting) attacks are prevented
- [ ] **SC-04**: CSRF tokens are implemented (if applicable)
- [ ] **SC-05**: No sensitive data exposed in URLs
- [ ] **SC-06**: No API keys or credentials visible in page source

### HTTPS/SSL

- [ ] **HS-01**: Site loads with HTTPS (not HTTP)
- [ ] **HS-02**: SSL certificate is valid and trusted
- [ ] **HS-03**: Mixed content warnings don't appear
- [ ] **HS-04**: All resources load via HTTPS
- [ ] **HS-05**: HTTP redirects to HTTPS automatically

### Privacy & Data Protection

- [ ] **PD-01**: Privacy Policy is accessible
- [ ] **PD-02**: No personally identifiable information (PII) is exposed
- [ ] **PD-03**: Analytics respects user privacy
- [ ] **PD-04**: Cookie consent is displayed (if required by region)
- [ ] **PD-05**: Third-party scripts are minimized

---

## SEO Testing

### On-Page SEO

- [ ] **SEO-01**: All pages have unique, descriptive titles
- [ ] **SEO-02**: All pages have meta descriptions
- [ ] **SEO-03**: Heading hierarchy is correct (H1 → H2 → H3)
- [ ] **SEO-04**: Only one H1 per page
- [ ] **SEO-05**: Images have descriptive alt text
- [ ] **SEO-06**: Internal links work correctly
- [ ] **SEO-07**: No broken links (404 errors)
- [ ] **SEO-08**: URLs are clean and descriptive (no query parameters)
- [ ] **SEO-09**: Canonical tags are present
- [ ] **SEO-10**: Robots.txt file exists and is correct

### Open Graph (Social Sharing)

- [ ] **OG-01**: og:title meta tag is present on all pages
- [ ] **OG-02**: og:description meta tag is present
- [ ] **OG-03**: og:image meta tag is present
- [ ] **OG-04**: og:url meta tag is present
- [ ] **OG-05**: Twitter card meta tags are present
- [ ] **OG-06**: Social sharing preview looks correct (test with Facebook Debugger)

### Structured Data

- [ ] **SD-01**: Schema.org markup is present (if applicable)
- [ ] **SD-02**: Organization schema is implemented
- [ ] **SD-03**: Article schema is used for blog posts
- [ ] **SD-04**: Breadcrumbs schema is used (if applicable)

---

## Bug Reporting Guidelines

### Bug Report Template

When you find an issue, please report it with the following information:

**Bug ID**: [Test ID from above, e.g., CF-05]

**Title**: Short description of the issue

**Priority**: Critical / High / Medium / Low

**Environment**:
- Device: [Desktop, Mobile, Tablet]
- Browser: [Chrome, Firefox, Safari, etc.]
- OS: [Windows 10, iOS 15, Android 12, etc.]
- Screen Size: [1920x1080, 375x812, etc.]
- Language: [EN, AR, FR]

**Steps to Reproduce**:
1. Go to [page URL]
2. Click on [element]
3. Enter [data]
4. Observe [result]

**Expected Result**: What should happen

**Actual Result**: What actually happened

**Screenshots/Video**: Attach visual evidence if possible

**Additional Notes**: Any other relevant information

### Bug Severity Levels

**Critical**: Site is unusable or major functionality is broken
- Contact form doesn't submit
- Pages don't load
- Security vulnerability

**High**: Major feature is broken but site is still usable
- Navigation doesn't work on mobile
- Images don't load
- Blog articles don't display

**Medium**: Minor feature is broken or UX issue
- Styling inconsistency
- Typo in content
- Slow loading (but still works)

**Low**: Cosmetic issue that doesn't affect functionality
- Color slightly off
- Spacing inconsistency
- Minor translation issue

---

## Sign-Off Checklist

### Final Acceptance Criteria

Before approving the website for launch, confirm:

- [ ] **All critical path tests pass**
- [ ] **No critical or high severity bugs remain**
- [ ] **All three languages (EN, AR, FR) work correctly**
- [ ] **RTL layout works perfectly for Arabic**
- [ ] **Contact form integrates with Odoo successfully**
- [ ] **Blog articles load from Strapi correctly**
- [ ] **All pages are responsive on mobile, tablet, desktop**
- [ ] **Cross-browser testing is complete and passing**
- [ ] **Performance scores meet targets (Lighthouse 90+)**
- [ ] **Accessibility score is 95+**
- [ ] **SSL certificate is valid and working**
- [ ] **All content is reviewed and approved**
- [ ] **Privacy Policy is published and accurate**
- [ ] **Analytics are configured and tracking correctly**
- [ ] **Domain is configured correctly**
- [ ] **All stakeholders have reviewed and approved**

### Sign-Off

**Tested By**: _________________________________

**Date**: _____________________________________

**Client Approval**: ___________________________

**Date**: _____________________________________

**Development Team Sign-Off**: _________________

**Date**: _____________________________________

---

## Testing Summary Report Template

After completing all tests, fill out this summary:

### Test Execution Summary

**Testing Period**: From __________ To __________

**Total Test Cases**: __________ (Count all checkboxes above)

**Tests Passed**: __________

**Tests Failed**: __________

**Pass Rate**: __________%

### Bugs Found

| Severity | Count |
|----------|-------|
| Critical | _____ |
| High | _____ |
| Medium | _____ |
| Low | _____ |
| **Total** | **_____** |

### Outstanding Issues

List any issues that still need to be resolved:

1. ______________________________________
2. ______________________________________
3. ______________________________________

### Recommendations

List any improvements or suggestions:

1. ______________________________________
2. ______________________________________
3. ______________________________________

### Overall Assessment

**Ready for Launch?**: ☐ Yes ☐ No ☐ Conditional

**Comments**:
_______________________________________________
_______________________________________________
_______________________________________________

---

## Appendix: Testing Tools

### Recommended Testing Tools

**Browser Developer Tools**:
- Chrome DevTools (F12)
- Firefox Developer Tools (F12)
- Safari Web Inspector

**Accessibility Testing**:
- Lighthouse (built into Chrome DevTools)
- WAVE (https://wave.webaim.org/)
- axe DevTools Extension
- NVDA Screen Reader (Windows)
- VoiceOver (Mac/iOS)

**Performance Testing**:
- Google PageSpeed Insights (https://pagespeed.web.dev/)
- GTmetrix (https://gtmetrix.com/)
- WebPageTest (https://www.webpagetest.org/)

**SEO Testing**:
- Google Search Console
- Screaming Frog SEO Spider
- Ahrefs Site Audit

**Mobile Testing**:
- Chrome Device Mode (DevTools)
- BrowserStack (https://www.browserstack.com/)
- Real devices (recommended)

**Cross-Browser Testing**:
- BrowserStack (https://www.browserstack.com/)
- LambdaTest (https://www.lambdatest.com/)
- CrossBrowserTesting

**Visual Comparison**:
- Percy (https://percy.io/)
- Chromatic (https://www.chromatic.com/)

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Maintained By**: Laqta QA Team

---

**Total Test Cases**: 600+ individual checks

**Estimated Testing Time**: 12-16 hours for complete testing by one person

**Recommended Approach**:
- Day 1: Core features and critical paths (4-5 hours)
- Day 2: Multi-language and responsive testing (4-5 hours)
- Day 3: Accessibility, performance, and final checks (4-5 hours)

**Team Recommendation**: 2-3 testers for faster completion (3-4 days total with proper bug fixing cycles)
