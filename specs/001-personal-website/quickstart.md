# Quickstart: Static Personal Website

**Feature**: Static Personal Website (001-personal-website)
**Date**: 2025-12-22
**For**: Developers implementing or maintaining jakobhojgaard.com

---

## Overview

This quickstart guide helps you set up, develop, and deploy the jakobhojgaard.com static personal website. The site is built with Hugo, uses vanilla CSS, and deploys to static hosting.

---

## Prerequisites

### Required
- **Hugo** v0.121.0 or later ([installation guide](https://gohugo.io/installation/))
- **Git** (for version control)
- **Text editor** (VS Code, Sublime, vim, etc.)

### Optional
- **Node.js** v18+ (for Playwright testing and Lighthouse CI)
- **Make** (for convenience commands, or run commands directly)

### Verify Installation

```bash
# Check Hugo version
hugo version

# Check Git
git --version

# Check Node (optional)
node --version
```

---

## Project Setup

### 1. Clone Repository

```bash
git clone https://github.com/hgaard/jakobhojgaard.com.git
cd jakobhojgaard.com
```

### 2. Install Hugo (if not already installed)

**macOS (Homebrew)**:
```bash
brew install hugo
```

**Linux (apt)**:
```bash
sudo apt-get install hugo
```

**Windows (Chocolatey)**:
```bash
choco install hugo-extended
```

**Or download binary**: https://github.com/gohugoio/hugo/releases

### 3. Project Structure

```
jakobhojgaard.com/
├── config.toml              # Hugo configuration
├── content/                 # Markdown content
│   ├── _index.md           # Homepage
│   ├── experience/
│   │   └── _index.md
│   ├── articles/
│   │   ├── _index.md
│   │   └── *.md            # Individual articles
│   └── contact/
│       └── _index.md
├── data/
│   └── experience.json      # Experience entries
├── layouts/                 # Hugo templates
│   ├── _default/
│   ├── partials/
│   └── index.html
├── static/                  # Static assets
│   ├── css/
│   ├── images/
│   └── files/
├── tests/                   # Playwright tests (optional)
└── public/                  # Generated site (gitignored)
```

---

## Development Workflow

### Start Development Server

```bash
hugo server -D
```

**Flags**:
- `-D`: Include draft content
- `--navigateToChanged`: Auto-navigate to changed content
- `--disableFastRender`: Full rebuilds (use if hot reload issues)

**Access site**: http://localhost:1313

**Features**:
- Live reload on file changes
- Fast rebuild (<100ms typically)
- Mobile testing via local network IP

### Create New Content

**New article**:
```bash
hugo new articles/my-article-title.md
```

This creates `content/articles/my-article-title.md` with front matter template.

**Edit content**:
- Open in text editor
- Modify front matter (title, date, summary, tags)
- Write content in Markdown
- Save and preview in browser (auto-reloads)

### Add Experience Entry

Edit `data/experience.json`:

```json
{
  "role": "Your Role",
  "organization": "Company Name",
  "location": "City, Country",
  "startDate": "2020-01",
  "endDate": null,
  "current": true,
  "responsibilities": [
    "Responsibility 1",
    "Responsibility 2"
  ],
  "achievements": [
    "Achievement 1",
    "Achievement 2"
  ],
  "skills": ["Skill1", "Skill2", "Skill3"]
}
```

Save and refresh browser.

---

## Building for Production

### Build Site

```bash
hugo --minify
```

**Output**: `public/` directory contains the complete static site

**Flags**:
- `--minify`: Minify HTML/CSS/JS
- `--cleanDestinationDir`: Clean public/ before build
- `--environment production`: Set production environment variables

### Verify Build

```bash
# Check that public/ directory exists
ls -la public/

# Serve built site locally
hugo server --source public/
```

### Build Commands Summary

```bash
# Development build (with drafts)
hugo -D

# Production build (minified, no drafts)
hugo --minify

# Clean and build
hugo --minify --cleanDestinationDir
```

---

## Content Management

### Homepage (Introduction)

**File**: `content/_index.md`

```yaml
---
title: "Jakob Højgaard"
tagline: "Your Professional Tagline"
description: "High-level professional summary for SEO"
type: "homepage"
---

Your introduction content here. Keep it concise (100-500 words).
Explain who you are, what you do, and your areas of expertise.
```

### Articles

**Create**:
```bash
hugo new articles/article-title.md
```

**Front matter**:
```yaml
---
title: "Your Article Title"
date: 2025-12-22
draft: false
summary: "Brief summary (50-200 chars) for article listing"
tags: ["Tag1", "Tag2"]
readingTime: 5
---

# Your Article Content

Write your article here using Markdown.
```

**Publish**: Set `draft: false` and commit

**Schedule**: Set future date (Hugo won't publish until that date)

### Experience

**File**: `data/experience.json`

Add entries in chronological order (most recent first recommended):

```json
[
  {
    "role": "Current Role",
    "organization": "Current Company",
    "startDate": "2023-01",
    "endDate": null,
    "current": true,
    ...
  },
  {
    "role": "Previous Role",
    "organization": "Previous Company",
    "startDate": "2020-01",
    "endDate": "2022-12",
    "current": false,
    ...
  }
]
```

### Contact

**File**: `content/contact/_index.md`

```yaml
---
title: "Contact"
description: "Get in touch for advisory services"
email: "contact@jakobhojgaard.com"
advisoryFocus: "Technology strategy, software architecture, team leadership"
responseTime: "within 2 business days"
---

Describe your advisory services and what types of inquiries are appropriate.
```

---

## Testing

### Manual Testing

**Browser testing**:
1. Start dev server: `hugo server -D`
2. Open http://localhost:1313
3. Navigate all sections
4. Test responsive (resize browser or use DevTools device emulation)
5. Test keyboard navigation (Tab, Enter, arrows)
6. Disable JavaScript and verify functionality

**Mobile testing**:
1. Start server with `hugo server -D --bind 0.0.0.0`
2. Find local IP: `ifconfig | grep inet` (macOS/Linux) or `ipconfig` (Windows)
3. Access from mobile: `http://[YOUR_IP]:1313`

### Automated Testing (Optional)

**Install dependencies**:
```bash
npm install --save-dev @playwright/test lighthouse-ci
```

**Run Playwright tests**:
```bash
npx playwright test
```

**Run Lighthouse CI**:
```bash
npx lhci autorun
```

**Test configuration**: See `tests/` directory for test files

---

## Deployment

### Vercel (Recommended)

**Initial setup**:
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository
4. Configure:
   - **Build Command**: `hugo --minify`
   - **Output Directory**: `public`
   - **Hugo Version**: 0.121.0 (or latest)
5. Deploy

**Subsequent deploys**:
- Automatic on git push to main branch
- Preview deployments on pull requests

### Netlify

**netlify.toml** (add to repository root):
```toml
[build]
  command = "hugo --minify"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.121.0"
```

**Deploy**:
1. Push code to GitHub
2. Connect repository in Netlify dashboard
3. Deploys automatically on push

### GitHub Pages

**GitHub Actions workflow** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy Hugo site

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: '0.121.0'
      - run: hugo --minify
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

### Custom Domain

**Add custom domain** (jakobhojgaard.com):
1. In hosting provider (Vercel/Netlify/GitHub Pages):
   - Add domain in settings
   - Note DNS records provided
2. In domain registrar (where you bought jakobhojgaard.com):
   - Add A records or CNAME as instructed
   - Wait for DNS propagation (5min - 48hrs)

---

## Common Tasks

### Update Homepage

```bash
# Edit introduction
vim content/_index.md

# Preview changes
hugo server -D

# Commit and push
git add content/_index.md
git commit -m "Update homepage introduction"
git push
```

### Publish New Article

```bash
# Create article
hugo new articles/new-article-title.md

# Edit article
vim content/articles/new-article-title.md

# Set draft: false when ready
# Preview
hugo server -D

# Commit and push
git add content/articles/new-article-title.md
git commit -m "Add article: New Article Title"
git push
```

### Add Experience

```bash
# Edit experience data
vim data/experience.json

# Preview
hugo server -D

# Commit and push
git add data/experience.json
git commit -m "Add experience at Company Name"
git push
```

### Update Contact Email

```bash
# Edit contact page
vim content/contact/_index.md

# Update email field in front matter
# Commit and push
git add content/contact/_index.md
git commit -m "Update contact email"
git push
```

---

## Troubleshooting

### Hugo Not Found
```bash
# Verify installation
hugo version

# If not installed, install Hugo
# (see Prerequisites section)
```

### Port 1313 Already in Use
```bash
# Use different port
hugo server -D --port 1314
```

### Changes Not Reflecting
```bash
# Stop server (Ctrl+C) and restart
hugo server -D --disableFastRender
```

### Build Errors
```bash
# Check for syntax errors in front matter
# Ensure YAML is valid
# Check date formats (YYYY-MM-DD)
# Verify required fields present
```

### Styling Issues
```bash
# Check CSS file path in templates
# Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
# Verify static/ directory structure
```

---

## Performance Optimization

### Images

**Optimize before adding**:
```bash
# Convert to WebP
cwebp input.jpg -o output.webp

# Or use online tool: squoosh.app
```

**Hugo image processing**:
```html
{{ $img := resources.Get "images/photo.jpg" }}
{{ $img := $img.Resize "800x" }}
<img src="{{ $img.RelPermalink }}" alt="Description">
```

### CSS

**Minification**: Automatic with `hugo --minify`

**Inline critical CSS**: Add to `<head>` in layouts

**Defer non-critical CSS**:
```html
<link rel="preload" href="/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

---

## Resources

### Hugo Documentation
- Official docs: https://gohugo.io/documentation/
- Themes: https://themes.gohugo.io/
- Forums: https://discourse.gohugo.io/

### Markdown Guide
- Basic syntax: https://www.markdownguide.org/basic-syntax/
- Cheat sheet: https://www.markdownguide.org/cheat-sheet/

### Accessibility
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM: https://webaim.org/

### Performance
- Lighthouse: https://developer.chrome.com/docs/lighthouse/
- Web.dev: https://web.dev/

---

## Development Checklist

Before committing changes:

- [ ] Hugo build succeeds (`hugo --minify`)
- [ ] All links work (no 404s)
- [ ] Content displays correctly in browser
- [ ] Mobile responsive (test at 320px, 768px, 1024px)
- [ ] Accessibility: keyboard navigation works
- [ ] No console errors in browser DevTools
- [ ] Lighthouse scores meet targets (>90/95)
- [ ] Git commit message is descriptive

Before deploying:

- [ ] All content reviewed for accuracy
- [ ] No draft articles in production
- [ ] Contact email is correct
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enabled
- [ ] Test deployment on staging/preview URL first

---

## Support

- **Specification**: See `specs/001-personal-website/spec.md`
- **Technical Plan**: See `specs/001-personal-website/plan.md`
- **Data Model**: See `specs/001-personal-website/data-model.md`
- **URL Contract**: See `specs/001-personal-website/contracts/url-structure.md`

---

**Quick Start Summary**:
1. Install Hugo
2. Clone repository
3. Run `hugo server -D`
4. Edit content in `content/` or `data/`
5. Build with `hugo --minify`
6. Deploy to Vercel/Netlify/GitHub Pages
