# jakobhojgaard.com

Personal website and professional portfolio for Jakob Højgaard.

## Overview

Static personal website built with Hugo featuring:
- Introduction and professional profile
- Detailed experience section
- Articles/blog
- Contact information for advisory services

## Tech Stack

- **Static Site Generator**: Hugo v0.153.2
- **Styling**: Vanilla CSS (no frameworks)
- **Content**: Markdown + YAML front matter
- **Deployment**: Vercel / Netlify / GitHub Pages

## Quick Start

### Prerequisites

- Hugo v0.121.0 or later ([installation guide](https://gohugo.io/installation/))
- Git

### Development

```bash
# Clone the repository
git clone https://github.com/hgaard/jakobhojgaard.com.git
cd jakobhojgaard.com

# Start development server
hugo server -D

# Visit http://localhost:1313
```

### Build

```bash
# Build for production
hugo --minify

# Output in public/ directory
```

## Content Management

### Update Homepage

Edit `content/_index.md`

### Add Experience

Edit `data/experience.json`

### Create New Article

```bash
hugo new articles/my-article-title.md
```

### Update Contact Info

Edit `content/contact/_index.md`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Configure:
   - Build Command: `hugo --minify`
   - Output Directory: `public`
   - Hugo Version: `0.153.2`

### Netlify

Configuration already in `netlify.toml`. Just connect the repository in Netlify dashboard.

### GitHub Pages

GitHub Actions workflow configured in `.github/workflows/deploy.yml`. Enable GitHub Pages in repository settings.

## Project Structure

```
jakobhojgaard.com/
├── content/           # Markdown content
├── data/              # JSON data files
├── layouts/           # Hugo templates
├── static/            # Static assets
├── config.toml        # Hugo configuration
└── public/            # Generated site (gitignored)
```

## Documentation

- [Quickstart Guide](specs/001-personal-website/quickstart.md)
- [Feature Specification](specs/001-personal-website/spec.md)
- [Implementation Plan](specs/001-personal-website/plan.md)
- [Data Model](specs/001-personal-website/data-model.md)

## Performance

Built to meet:
- Lighthouse Performance >90
- Lighthouse Accessibility >95
- Lighthouse Best Practices >90
- Lighthouse SEO >90

## Accessibility

- WCAG 2.1 AA compliant
- Works without JavaScript
- Keyboard navigable
- Screen reader compatible

## License

Copyright © 2025 Jakob Højgaard. All rights reserved.
