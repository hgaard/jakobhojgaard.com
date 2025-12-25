# Data Model: Static Personal Website

**Feature**: Static Personal Website (001-personal-website)
**Date**: 2025-12-22
**Storage**: File-based (Markdown, YAML front matter, JSON data files)

---

## Overview

This document defines the content structure and data entities for jakobhojgaard.com. Since this is a static site built with Hugo, "data model" refers to file formats, front matter schemas, and content organization rather than database schemas.

---

## Content Organization

```
content/
├── _index.md                    # Homepage (introduction section)
├── experience/
│   └── _index.md                # Experience section overview
├── articles/
│   ├── _index.md                # Articles listing page
│   ├── article-1.md             # Individual article
│   ├── article-2.md             # Individual article
│   └── ...
└── contact/
    └── _index.md                # Contact page

data/
└── experience.json              # Structured experience entries

static/
├── images/                      # Images, profile photos
└── files/                       # Downloadable files (resume, etc.)
```

---

## Entity Definitions

### 1. Introduction Content

**Purpose**: Homepage introduction showcasing Jakob's identity and professional focus

**Location**: `content/_index.md`

**Format**: Markdown with YAML front matter

**Schema**:

```yaml
---
title: "Jakob Højgaard"
tagline: "[Professional tagline/headline]"
description: "[High-level professional summary for SEO]"
type: "homepage"
---

# Introduction content in Markdown

[High-level description of Jakob]
[Professional focus and expertise areas]
```

**Fields**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Full name (also used in <title> tag) |
| tagline | string | Yes | Professional headline (e.g., "Technology Advisor & Software Architect") |
| description | string | Yes | SEO meta description |
| type | string | Yes | Hugo content type ("homepage") |
| Body | markdown | Yes | Introduction paragraph(s) |

**Validation Rules**:
- title: 2-50 characters
- tagline: 10-80 characters
- description: 50-160 characters (SEO optimal)
- Body: 100-500 words (readable in <30 seconds per SC-001)

---

### 2. Experience Entry

**Purpose**: Detailed professional background information

**Location**: `data/experience.json` (structured data file)

**Format**: JSON array of experience objects

**Schema**:

```json
[
  {
    "role": "Senior Software Architect",
    "organization": "Example Company",
    "location": "Copenhagen, Denmark",
    "startDate": "2020-01",
    "endDate": "2023-12",
    "current": false,
    "responsibilities": [
      "Led architecture for...",
      "Designed and implemented..."
    ],
    "achievements": [
      "Reduced deployment time by 70%",
      "Mentored 5 junior developers"
    ],
    "skills": ["Go", "Kubernetes", "Microservices", "Team Leadership"]
  }
]
```

**Fields**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| role | string | Yes | Job title/position |
| organization | string | Yes | Company or organization name |
| location | string | No | City, Country |
| startDate | string | Yes | ISO format YYYY-MM (e.g., "2020-01") |
| endDate | string | No | ISO format YYYY-MM or null if current |
| current | boolean | Yes | true if currently in this role |
| responsibilities | array[string] | Yes | List of key responsibilities (2-5 items) |
| achievements | array[string] | Yes | Notable accomplishments (2-4 items) |
| skills | array[string] | Yes | Technologies/skills demonstrated (3-8 items) |

**Validation Rules**:
- role: 5-80 characters
- organization: 2-100 characters
- startDate must be valid YYYY-MM format
- endDate must be after startDate (if provided)
- If current=true, endDate must be null
- responsibilities: 2-5 items, each 20-200 characters
- achievements: 2-4 items, each 20-200 characters
- skills: 3-8 items, each 2-30 characters

**Display Logic**:
- Sort by startDate descending (most recent first)
- Display date range as "Jan 2020 - Dec 2023" or "Jan 2020 - Present"
- Group by chronological order or by theme (TBD during implementation)

---

### 3. Article

**Purpose**: Written content showcasing expertise and thought leadership

**Location**: `content/articles/[slug].md`

**Format**: Markdown with YAML front matter

**Schema**:

```yaml
---
title: "Article Title Here"
date: 2025-12-22
lastmod: 2025-12-22
draft: false
summary: "Brief summary or excerpt of the article (1-2 sentences)"
tags: ["Technology", "Software Architecture", "Leadership"]
readingTime: 5
---

# Article content in Markdown

[Article body with headings, paragraphs, lists, code blocks, etc.]
```

**Fields**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Article title |
| date | date | Yes | Publication date (ISO 8601: YYYY-MM-DD) |
| lastmod | date | No | Last modified date |
| draft | boolean | Yes | If true, article not published |
| summary | string | Yes | Excerpt for article listing (used in meta description) |
| tags | array[string] | No | Categorization tags (0-5 tags) |
| readingTime | integer | No | Estimated minutes to read |
| Body | markdown | Yes | Full article content |

**Validation Rules**:
- title: 10-100 characters
- date: Valid ISO 8601 date, not in future
- summary: 50-200 characters
- tags: 0-5 items, each 2-30 characters
- readingTime: 1-60 minutes (or auto-calculated at ~200 words/min)
- Body: Minimum 300 words

**Display Logic**:
- Article listing sorted by date descending
- Draft articles excluded from production builds
- Reading time displayed on article page
- Tags displayed and linkable (optional tag taxonomy)
- Summary used in article listing cards

**States**:
1. **Draft** (draft: true): Not visible in production
2. **Published** (draft: false, date ≤ today): Visible and accessible
3. **Scheduled** (draft: false, date > today): Optional future publishing

---

### 4. Contact Information

**Purpose**: Methods and context for reaching out for advisory services

**Location**: `content/contact/_index.md`

**Format**: Markdown with YAML front matter

**Schema**:

```yaml
---
title: "Contact"
description: "Get in touch for advisory services"
email: "contact@jakobhojgaard.com"
advisoryFocus: "Technology strategy, software architecture, team leadership"
responseTime: "within 2 business days"
---

# Contact page content in Markdown

[Description of advisory services offered]
[What types of inquiries are appropriate]
[Expected response timeframe]
```

**Fields**:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Page title |
| description | string | Yes | SEO meta description |
| email | string | Yes | Contact email address |
| advisoryFocus | string | Yes | Types of advisory services offered |
| responseTime | string | No | Expected response timeframe |
| Body | markdown | Yes | Additional context and information |

**Validation Rules**:
- email: Valid email format
- advisoryFocus: 20-200 characters
- Body: 100-400 words

**Implementation Note**:
Email rendered as `<a href="mailto:{email}?subject=Advisory Inquiry">` link

---

## Hugo-Specific Conventions

### Front Matter Format
- Use YAML (not TOML or JSON) for consistency
- Date format: ISO 8601 (YYYY-MM-DD)
- Boolean values: true/false (lowercase)

### Content Type Hierarchy
```
homepage → _index.md at root
section → _index.md in directory
page → individual .md file
```

### URL Structure
```
/                           # Homepage (introduction)
/experience/                # Experience section
/articles/                  # Article listing
/articles/article-title/    # Individual article
/contact/                   # Contact page
```

### Slug Generation
- Auto-generated from filename
- Example: `my-article-title.md` → `/articles/my-article-title/`
- Can be overridden with `slug:` in front matter if needed

---

## Empty State Handling

### Articles Section (Zero Articles)
Per FR-011, must gracefully handle when no articles are published.

**Implementation**:
In `content/articles/_index.md`, check if articles list is empty:

```markdown
{{- if (len .Pages) -}}
  [Display article list]
{{- else -}}
  <p>Articles coming soon. Check back for thoughts on technology, software architecture, and leadership.</p>
{{- end -}}
```

---

## SEO and Metadata

### Required Meta Tags (Per Page)
```html
<title>{{ .Title }} | Jakob Højgaard</title>
<meta name="description" content="{{ .Description }}">
<meta name="author" content="Jakob Højgaard">
<link rel="canonical" href="{{ .Permalink }}">

<!-- Open Graph -->
<meta property="og:title" content="{{ .Title }}">
<meta property="og:description" content="{{ .Description }}">
<meta property="og:url" content="{{ .Permalink }}">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{{ .Title }}">
<meta name="twitter:description" content="{{ .Description }}">
```

---

## Validation Summary

| Entity | Critical Fields | Validation Level |
|--------|----------------|------------------|
| Introduction | title, tagline, body | Manual review |
| Experience Entry | role, organization, dates, responsibilities | JSON schema validation |
| Article | title, date, summary, body | Hugo build validation + manual review |
| Contact | email, body | Manual review |

**Build-Time Checks**:
- Hugo validates all front matter against expected types
- Missing required fields cause build failures
- Invalid dates fail gracefully with error messages

**Recommended**: Add custom Hugo shortcode or partial to validate character limits during development.
