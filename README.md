# Jakob Højgaard — Personal Site & Blog

Personal website and blog for Jakob Højgaard, CIO and technology builder. A minimal, fast blog built with [Astro](https://astro.build), MDX, and Tailwind CSS.

🌐 **Live site**: [jakobhojgaard.com](https://jakobhojgaard.com)

## Features

- ⚡️ Built with Astro 5 for optimal performance
- 📝 MDX support for rich blog content
- 🎨 Tailwind CSS with custom typography
- 📱 Fully responsive design
- ♿️ Accessible and semantic HTML
- 🚀 Automated deployment via GitHub Actions

## Quick Start

```bash
npm install
npm run dev        # Local dev server at localhost:4321
npm run build      # Build static site to ./dist
npm run preview    # Preview the built site locally
```

## Writing a New Post

Create a new `.mdx` file in `src/pages/blog/`:

```mdx
---
layout: ../../layouts/BlogPost.astro
title: "Your Post Title"
excerpt: "A one-sentence summary that appears on the homepage and as the article intro."
date: "Feb 2026"
pubDate: "2026-02-15"
category: "Fintech"
readTime: "5 min"
featured: false
---

Your content here. Full Markdown supported — headings, code blocks, links, images, etc.
```

Set `featured: true` on one post to highlight it on the homepage.

## Deployment

This site is configured for automatic deployment to GitHub Pages:

- **Custom domain**: `jakobhojgaard.com` (configured via `public/CNAME`)
- **Deployment**: Automatic via GitHub Actions on every push to `main`
- **Build output**: Static files generated to `./dist`

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys the site on every push to the `main` branch.

## Project Structure

```
jakobhojgaard.com/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment workflow
├── public/
│   ├── CNAME                   # Custom domain configuration
│   └── favicon.svg             # Site favicon
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Base layout with nav, footer, meta tags
│   │   └── BlogPost.astro      # Blog post layout with article styling
│   ├── pages/
│   │   ├── index.astro         # Homepage with article listing
│   │   ├── about.astro         # About page
│   │   └── blog/
│   │       └── *.mdx           # Blog posts (MDX files)
│   └── styles/
│       └── global.css          # Global styles, Tailwind config, fonts
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.mjs         # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Customization

- **Social links**: Currently configured for LinkedIn, GitHub, and X (Twitter)
  - Update in `src/layouts/BaseLayout.astro` footer
  - Update in `src/pages/about.astro`
- **Colors**: Edit color palette in `tailwind.config.mjs`
  - Current theme uses warm neutrals with amber accents
- **Fonts**:
  - Display: Newsreader (serif)
  - Body: DM Sans (sans-serif)
  - Mono: JetBrains Mono
  - Change imports in `src/styles/global.css`
- **Content**: Add new blog posts as `.mdx` files in `src/pages/blog/`

## Tech Stack

- **Framework**: [Astro 5](https://astro.build)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com)
- **Content**: [MDX](https://mdxjs.com) (Markdown + JSX)
- **Hosting**: [GitHub Pages](https://pages.github.com)
- **CI/CD**: GitHub Actions

## License

© 2026 Jakob Højgaard. All rights reserved.
