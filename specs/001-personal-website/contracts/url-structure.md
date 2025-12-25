# URL Structure & Navigation Contract

**Feature**: Static Personal Website (001-personal-website)
**Date**: 2025-12-22
**Type**: Static Site Navigation Contract

---

## Purpose

This document defines the URL structure, navigation interface, and routing behavior for jakobhojgaard.com. While there is no API, this serves as the "contract" between user interactions and site responses.

---

## URL Structure

### Primary Routes

| URL | Page Type | Purpose | Content Source |
|-----|-----------|---------|----------------|
| `/` | Homepage | Introduction to Jakob | `content/_index.md` |
| `/experience/` | Section Page | Professional background | `content/experience/_index.md` + `data/experience.json` |
| `/articles/` | List Page | Article listing | `content/articles/_index.md` + all articles |
| `/articles/[slug]/` | Article Page | Individual article | `content/articles/[slug].md` |
| `/contact/` | Section Page | Contact information | `content/contact/_index.md` |

### Supporting Routes

| URL | Purpose | Generated |
|-----|---------|-----------|
| `/404.html` | Not found page | Hugo default + custom |
| `/sitemap.xml` | SEO sitemap | Hugo automatic |
| `/robots.txt` | Search engine directives | Hugo automatic |
| `/index.xml` | RSS feed | Hugo automatic (optional) |

---

## Navigation Contract

### Global Navigation (Available on All Pages)

**Location**: Site header/navigation bar

**Required Links**:
```
Home | Experience | Articles | Contact
```

**Behavior**:
- Current page highlighted (active state)
- Keyboard accessible (tab navigation)
- Mobile: Collapsible menu <768px width
- Semantic HTML: `<nav>` with `<ul><li><a>` structure

**Accessibility Requirements**:
- ARIA labels where needed
- Skip to content link for screen readers
- Focus indicators visible
- Touch targets ≥44×44px on mobile

**HTML Structure**:
```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/experience/">Experience</a></li>
    <li><a href="/articles/">Articles</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>
```

---

## Page-Specific Contracts

### 1. Homepage (`/`)

**Elements**:
- Name/title (H1)
- Professional tagline
- Introduction paragraph(s)
- Clear call-to-action links to main sections

**User Interactions**:
- Read introduction
- Navigate to any main section via header nav or inline links

**Success Criteria**:
- SC-001: Visitors understand Jakob's identity within 30 seconds
- SC-002: Page loads in <3s on 3G

**Required Metadata**:
```html
<title>Jakob Højgaard | [Tagline]</title>
<meta name="description" content="[Professional summary]">
```

---

### 2. Experience Section (`/experience/`)

**Elements**:
- Section heading (H1: "Experience")
- List of experience entries, each containing:
  - Role and organization (H2 or H3)
  - Date range
  - Location (if applicable)
  - Responsibilities (bulleted list)
  - Achievements (bulleted list)
  - Skills/technologies used

**Display Order**:
- Chronological descending (most recent first)
- OR thematic grouping (if chosen during implementation)

**User Interactions**:
- Scroll through experience history
- Read details of each role
- Return to homepage or navigate to other sections

**Success Criteria**:
- Information organized for easy comprehension (SC per acceptance scenario)
- Properly formatted on tablet/mobile

---

### 3. Articles Listing (`/articles/`)

**Elements**:
- Section heading (H1: "Articles")
- List of published articles, each entry showing:
  - Article title (linked to article page)
  - Publication date
  - Summary/excerpt
  - Reading time estimate
  - Tags (optional)

**Display Order**:
- Chronological descending (newest first)

**Empty State**:
- If no articles: "Articles coming soon. Check back for thoughts on technology, software architecture, and leadership."
- Per FR-011: Must not appear broken

**User Interactions**:
- Browse article list
- Click article title to read full article
- Filter/search by tag (optional future enhancement)

**Accessibility**:
- Each article card is a clickable region
- Article title is the primary link
- Clear visual hierarchy

---

### 4. Individual Article (`/articles/[slug]/`)

**Elements**:
- Article title (H1)
- Publication date and last modified (if updated)
- Reading time estimate
- Tags (if present)
- Article body (Markdown-rendered HTML)
- "Back to Articles" link

**User Interactions**:
- Read article content
- Navigate back to article list
- Navigate to other sections via header

**Accessibility**:
- Proper heading hierarchy (H1 → H2 → H3)
- Code blocks with syntax highlighting (if applicable)
- Images with alt text
- Links clearly distinguishable

**Success Criteria**:
- Long articles maintain readability
- Content remains accessible without JavaScript

---

### 5. Contact Page (`/contact/`)

**Elements**:
- Section heading (H1: "Contact")
- Advisory services description
- Contact email link (mailto:)
- Expected response time
- Clear statement of inquiry types (advisory focus)

**User Interactions**:
- Read about advisory services
- Click email link (opens default email client)
- Compose message with pre-filled subject line

**Implementation**:
```html
<a href="mailto:contact@jakobhojgaard.com?subject=Advisory Inquiry">
  Contact for Advisory Services
</a>
```

**Accessibility**:
- Email link clearly labeled
- Mobile-friendly (triggers email app)
- Works without JavaScript

**Success Criteria**:
- SC-006: 90% of visitors understand appropriate inquiry types

---

## Navigation Behavior

### Link States

| State | Visual Indicator | Implementation |
|-------|------------------|----------------|
| Default | Base color | Default link styling |
| Hover | Underline or color change | `:hover` pseudo-class |
| Focus | Visible outline | `:focus` pseudo-class, never remove outline |
| Active | Different background/color | `aria-current="page"` on current page link |
| Visited | Optional: subtle color change | `:visited` pseudo-class (optional) |

### Keyboard Navigation

**Requirements**:
- Tab key moves through links in logical order
- Enter/Space activates links
- Skip to content link available (hidden visually, available to screen readers)
- Focus indicators always visible

**Tab Order**:
1. Skip to content link
2. Logo/home link
3. Navigation links (Home, Experience, Articles, Contact)
4. Main content links
5. Footer links (if present)

---

## Error Handling

### 404 Not Found

**Trigger**: User navigates to non-existent URL

**Response**:
- Display custom 404 page
- Explain page not found
- Provide navigation links back to main sections
- Maintain site header/footer for consistency

**Example**:
```html
<h1>Page Not Found</h1>
<p>The page you're looking for doesn't exist or has been moved.</p>
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/experience/">Experience</a></li>
    <li><a href="/articles/">Articles</a></li>
    <li><a href="/contact/">Contact</a></li>
  </ul>
</nav>
```

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Width | Navigation Behavior | Layout |
|------------|-------|---------------------|--------|
| Mobile | 320px - 767px | Hamburger menu or stacked links | Single column |
| Tablet | 768px - 1023px | Horizontal nav | 1-2 columns |
| Desktop | 1024px - 1439px | Horizontal nav | 2-3 columns |
| Large Desktop | 1440px+ | Horizontal nav | Max-width container centered |

### Mobile Navigation

**Options**:
1. **Horizontal scrollable** nav (simple, no JS)
2. **Stacked links** (very simple, always visible)
3. **Hamburger menu** (requires JS or CSS-only solution)

**Recommendation**: Stacked links or horizontal scrollable (no JS required)

---

## Performance Requirements

### Page Load Targets

| Metric | Target | Measured With |
|--------|--------|---------------|
| First Contentful Paint | <1.5s | Lighthouse |
| Time to Interactive | <5s | Lighthouse |
| Total Page Load | <3s on 3G | Lighthouse (throttled) |
| Page Weight | <500KB initial | DevTools Network |

### Optimization Strategies

- Minified HTML/CSS
- Optimized images (WebP with fallbacks)
- Inline critical CSS
- Defer non-critical CSS
- No render-blocking JavaScript
- HTTP/2 or HTTP/3 on hosting

---

## SEO Requirements

### All Pages Must Include

```html
<!-- Title tag -->
<title>[Page Title] | Jakob Højgaard</title>

<!-- Meta description -->
<meta name="description" content="[Page-specific description]">

<!-- Canonical URL -->
<link rel="canonical" href="[Page URL]">

<!-- Open Graph -->
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Description]">
<meta property="og:url" content="[Page URL]">
<meta property="og:type" content="website">

<!-- Structured data (optional but recommended) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jakob Højgaard",
  "jobTitle": "[Professional Title]",
  "url": "https://jakobhojgaard.com"
}
</script>
```

---

## Accessibility Compliance

### WCAG 2.1 AA Requirements

**Perceivable**:
- Text alternatives for non-text content
- Color contrast ratio ≥4.5:1 for normal text
- Content readable and functional at 200% zoom

**Operable**:
- All functionality available via keyboard
- No keyboard traps
- Sufficient time to read and use content

**Understandable**:
- Readable text (language attribute set)
- Predictable navigation
- Input assistance for contact form (if added)

**Robust**:
- Valid HTML
- Compatible with assistive technologies
- No ARIA misuse

---

## Testing Contract

### Automated Tests (Playwright)

```javascript
// Navigation test
test('all sections accessible from homepage', async ({ page }) => {
  await page.goto('/');
  await page.click('a[href="/experience/"]');
  await expect(page).toHaveURL('/experience/');
  // Repeat for all sections
});

// Responsive test
test('site works at 320px width', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
});

// No-JS test
test('site functional without JavaScript', async ({ page, context }) => {
  await context.setJavaScriptEnabled(false);
  await page.goto('/');
  await expect(page.locator('nav')).toBeVisible();
});
```

### Lighthouse CI

```yaml
# Minimum scores
Performance: 90
Accessibility: 95
Best Practices: 90
SEO: 90
```

---

## Contract Versioning

**Version**: 1.0.0
**Date**: 2025-12-22
**Status**: Initial specification

**Breaking Changes** (would require version bump):
- Changing URL structure (breaks links)
- Removing required navigation elements
- Changing page purpose

**Non-Breaking Changes** (patch/minor):
- Adding new pages
- Enhancing existing page content
- Improving accessibility
