# Technical Research: Static Personal Website

**Date**: 2025-12-22
**Feature**: Static Personal Website (001-personal-website)
**Purpose**: Evaluate technology options and resolve NEEDS CLARIFICATION items from Technical Context

---

## Research Questions

1. **Static Site Generator Selection**: Which SSG best balances simplicity, performance, and maintainability?
2. **Testing Strategy**: What testing approach fits the "Important" tier classification?
3. **Contact Implementation**: Interactive form vs. static email link?

---

## Static Site Generator Evaluation

### Options Compared

| Option | Simplicity (1-10) | Dependencies | Learning Curve | Performance | No-JS | Maintenance | Maturity |
|--------|-------------------|--------------|----------------|-------------|-------|-------------|----------|
| Vanilla HTML/CSS | 10 | 0 core | Low | ⭐⭐⭐⭐⭐ | ✅ Yes | Low | Timeless |
| Hugo | 9 | 1 binary | Low | ⭐⭐⭐⭐⭐ | ✅ Yes | Very Low | Proven (2013) |
| Eleventy | 7 | ~15 npm | Medium | ⭐⭐⭐⭐ | ✅ Yes | Medium | Proven (2018) |
| Astro | 6 | ~50 npm | Medium | ⭐⭐⭐⭐⭐ | ⚠️  Partial | Medium | New (2021) |
| Next.js SSG | 4 | ~200 npm | High | ⭐⭐⭐⭐ | ⚠️  Partial | High | Mature but complex |

### Detailed Analysis

#### 1. Vanilla HTML/CSS
**Simplicity**: 10/10 - No build process, no dependencies
**Dependencies**: Zero (just a text editor and browser)
**Learning Curve**: Low - Standard HTML/CSS
**Performance**: Excellent - Minimal overhead, easily hits Lighthouse >95
**Works without JS**: Yes - Pure HTML/CSS
**Maintenance**: Low - No framework updates, no breaking changes

**Pros**:
- Maximum simplicity and control
- Zero dependency risk
- Perfect performance by default
- Never breaks due to framework updates

**Cons**:
- Manual duplication for repeated elements (nav, footer)
- No built-in Markdown processing for articles
- Tedious to maintain with many pages
- No templating for consistent layouts

**Constitutional Alignment**: ✅ Maximum simplicity, but violates YAGNI for Markdown article support

---

#### 2. Hugo (Go-based SSG)
**Simplicity**: 9/10 - Single binary, simple config
**Dependencies**: 1 (Hugo binary only)
**Learning Curve**: Low - Basic Go templates, straightforward docs
**Performance**: Excellent - Extremely fast builds, optimized output, easily hits Lighthouse >95
**Works without JS**: Yes - Pure static HTML
**Maintenance**: Very Low - Stable, backward compatible, infrequent updates needed

**Pros**:
- Single binary dependency (no npm/node_modules)
- Blazing fast builds (milliseconds for small sites)
- Built-in Markdown support with front matter
- Excellent documentation and large community
- Very stable (v0.x but production-ready since 2013)

**Cons**:
- Go template syntax less familiar than JavaScript
- Less flexible than JS-based options
- Fewer modern JS integrations (not relevant for no-JS requirement)

**Constitutional Alignment**: ✅✅✅ Excellent - Boring/proven tech, minimal dependencies, simple, stable

---

#### 3. Eleventy (11ty)
**Simplicity**: 7/10 - npm-based but relatively simple
**Dependencies**: ~15 npm packages core
**Learning Curve**: Medium - Flexible templating, multiple engines
**Performance**: Good - Can hit Lighthouse >90, requires optimization
**Works without JS**: Yes - Static HTML output
**Maintenance**: Medium - npm ecosystem, periodic updates needed

**Pros**:
- JavaScript-based (familiar to JS developers)
- Flexible templating (Nunjucks, Liquid, etc.)
- Good Markdown support
- Active community

**Cons**:
- npm dependency management overhead
- Slower builds than Hugo
- More configuration complexity than Hugo
- Requires Node.js runtime

**Constitutional Alignment**: ⚠️  Acceptable but more complex than necessary

---

#### 4. Astro
**Simplicity**: 6/10 - Modern but more complex
**Dependencies**: ~50+ npm packages
**Learning Curve**: Medium - New concepts (islands, components)
**Performance**: Excellent - Designed for performance, partial hydration
**Works without JS**: Partial - Defaults to zero JS, but framework-focused
**Maintenance**: Medium - Newer framework, faster iteration, potential breaking changes

**Pros**:
- Cutting-edge performance optimizations
- Component-based development
- Built for modern workflows
- Good DX with TypeScript support

**Cons**:
- More dependencies than needed for simple site
- Framework is only 3 years old (less proven)
- Overkill for content-focused site
- Learning curve for "islands" architecture

**Constitutional Alignment**: ❌ Violates "boring/proven tech" - too new and complex

---

#### 5. Next.js Static Export
**Simplicity**: 4/10 - Heavy framework
**Dependencies**: ~200+ npm packages
**Learning Curve**: High - React, Next.js conventions
**Performance**: Good - Can achieve targets but requires tuning
**Works without JS**: Partial - Hydration-focused, challenging without JS
**Maintenance**: High - Frequent updates, complex ecosystem

**Pros**:
- Industry standard, huge community
- Rich ecosystem and tooling
- Good for scaling to complex apps

**Cons**:
- Massive overkill for static portfolio
- Hundreds of dependencies
- Designed for apps, not content sites
- Complex build process

**Constitutional Alignment**: ❌❌ Severe over-engineering for this use case

---

## Decision: Hugo

### Rationale

**Hugo is the optimal choice** based on constitutional principles:

1. **Simplicity & Maintainability (NON-NEGOTIABLE)**: ✅
   - Single binary dependency (no npm/node_modules sprawl)
   - Simple, clear conventions
   - Minimal learning curve
   - Stable and predictable

2. **User Experience First**: ✅
   - Excellent performance by default
   - Easily achieves Lighthouse >90/95
   - Works perfectly without JavaScript
   - Fast build times enable quick iterations

3. **Technology Flexibility**: ✅
   - Proven technology (11+ years, v0.x but production-stable)
   - Large community and extensive documentation
   - Boring tech that won't surprise you

4. **Test-First Development**: ✅
   - Lighthouse CI for performance testing
   - Standard HTML output easy to test with any tool

### Alternatives Considered

- **Vanilla HTML**: Too manual for article management, violates YAGNI for Markdown support
- **Eleventy**: More complex than Hugo with npm dependencies, slower builds
- **Astro**: Too new, more dependencies than justified
- **Next.js**: Massive over-engineering

### Trade-offs Accepted

- **Go templates** instead of JavaScript templates: Minor learning curve, but Go templates are simple and well-documented
- **Less JS ecosystem integration**: Not relevant since requirement is no-JS site

---

## Testing Strategy

### Classification: "Important" Tier
Per constitution, this site needs **integration tests** for navigation and responsive layouts.

### Selected Approach: Playwright + Lighthouse CI

**Rationale**:
- Playwright: Modern, reliable browser testing
- Lighthouse CI: Automated performance/accessibility audits
- Both integrate easily with GitHub Actions

**Tests Required**:
1. **Navigation tests**: Verify all sections accessible, links work
2. **Responsive tests**: Test at 320px, 768px, 1024px, 1920px breakpoints
3. **Accessibility tests**: Automated WCAG checks via Lighthouse
4. **Performance tests**: Lighthouse CI on every PR
5. **No-JS test**: Verify site works with JavaScript disabled

**Not Required** (per spec):
- Contact form testing (will use mailto: link, no form)
- Unit tests (minimal logic in static site)

---

## Contact Implementation Decision

### Decision: Static mailto: Link

**Rationale**:
- Spec assumes "email contact is the primary contact method"
- Interactive form would require:
  - JavaScript OR server-side endpoint
  - Violates static-only constraint
  - Moves to "Critical" testing tier
  - Adds complexity

**Implementation**:
```html
<a href="mailto:contact@jakobhojgaard.com?subject=Advisory Inquiry">
  Contact for Advisory Services
</a>
```

**Advantages**:
- Zero dependencies
- Works without JavaScript
- Standard, accessible
- No testing needed
- Respects user's email client preference

**Alternative Considered**: Form with serverless function (Netlify Forms, Vercel serverless)
**Rejected Because**: Adds complexity, requires JavaScript, violates static requirement

---

## Styling Approach

### Decision: Vanilla CSS with CSS Custom Properties

**Rationale**:
- No build step needed (aligns with simplicity)
- Modern CSS features (Grid, Flexbox, Custom Properties) sufficient
- No framework lock-in
- Easier to maintain

**Alternatives Considered**:
- **Tailwind CSS**: Rejected - adds build complexity, large dependency tree
- **Sass**: Rejected - build step adds complexity for minimal benefit
- **CSS-in-JS**: Rejected - requires JavaScript

---

## Final Technical Context (Resolved)

**Language/Version**: Hugo v0.121+ (latest stable), HTML5, CSS3, Markdown
**Primary Dependencies**: Hugo (single Go binary)
**Storage**: File-based Markdown (articles), YAML front matter (metadata), JSON data files (experience entries)
**Testing**: Playwright (integration), Lighthouse CI (performance/accessibility)
**Target Platform**: Static hosting (Vercel, Netlify, GitHub Pages, or Cloudflare Pages) - Hugo compatible with all
**Project Type**: Multi-page static website (Hugo default)
**Build Time**: <1 second for initial site, <100ms incremental
**Performance**: Lighthouse 95+ achievable out-of-box with Hugo defaults

---

## Re-evaluation: Constitution Check

### Principle II: Simplicity & Maintainability ✅ PASS
- **YAGNI compliance**: PASS - Hugo provides exactly what's needed (Markdown processing, templating) without extras
- **Minimize dependencies**: PASS - Single binary, zero npm packages
- **Avoid over-engineering**: PASS - Hugo is the simplest viable solution for Markdown-based static site

### Principle III: Test-First Development ✅ PASS
- **Testing strategy defined**: Integration tests with Playwright, performance with Lighthouse CI
- **Appropriate for tier**: "Important" tier correctly addressed

### Final Gate Status: ✅ FULL PASS

All constitutional requirements satisfied with justified technical decisions.
