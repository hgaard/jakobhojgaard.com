# Jakob Højgaard — Personal Site & Blog

A minimal, fast personal blog built with [Astro](https://astro.build), MDX, and Tailwind CSS. Deployed to GitHub Pages.

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

## Deploying to GitHub Pages

### One-time setup

1. Create a new repo on GitHub (e.g. `yourusername.github.io` for a user site, or any name for a project site)

2. Update `astro.config.mjs`:
   ```js
   // For a user site (yourusername.github.io):
   site: 'https://yourusername.github.io',

   // For a project site (yourusername.github.io/repo-name):
   site: 'https://yourusername.github.io',
   base: '/repo-name',
   ```

3. Go to your repo **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**

4. Push to `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:yourusername/your-repo.git
   git push -u origin main
   ```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles the rest — it builds the site and deploys it automatically on every push to `main`.

### Custom domain (optional)

1. Add a `public/CNAME` file containing your domain (e.g. `jakobhojgaard.com`)
2. Configure DNS: add a CNAME record pointing to `yourusername.github.io`
3. In repo **Settings → Pages**, enter your custom domain and enable HTTPS

## Project Structure

```
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Shell: nav, footer, meta tags
│   │   └── BlogPost.astro        # Article layout with prose styling
│   ├── pages/
│   │   ├── index.astro            # Homepage with article listing
│   │   ├── about.astro            # About page
│   │   └── blog/
│   │       └── *.mdx              # Blog posts (one file per post)
│   └── styles/
│       └── global.css             # Tailwind + prose styling + fonts
├── public/
│   └── favicon.svg
├── .github/workflows/
│   └── deploy.yml                 # GitHub Pages deployment
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Customisation

- **Social links**: Update URLs in `BaseLayout.astro` footer and `about.astro`
- **Colours**: Edit CSS variables in `tailwind.config.mjs`
- **Fonts**: Swap the Google Fonts import in `global.css`
- **Newsletter**: Wire up the subscribe form to Buttondown, ConvertKit, or your preferred service
