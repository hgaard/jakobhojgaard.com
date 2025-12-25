# Implementation Plan: Static Personal Website

**Branch**: `001-personal-website` | **Date**: 2025-12-22 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-personal-website/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a static personal website for jakobhojgaard.com with four main sections: introduction (homepage), professional experience, articles/blog, and contact for advisory services. The site must be fully static (no server-side processing), achieve high performance and accessibility scores (Lighthouse >90/95), work without JavaScript, and be responsive across all devices (320px-2560px). Technical approach will be determined through research to identify the optimal static site solution that balances simplicity, performance, and maintainability.

## Technical Context

**Language/Version**: Hugo v0.121+ (Go binary), HTML5, CSS3, Markdown (for content)
**Primary Dependencies**: Hugo (single Go binary - zero npm dependencies for core site)
**Storage**: File-based content (Markdown for articles, JSON for experience data, YAML front matter for metadata)
**Testing**: Playwright (integration tests), Lighthouse CI (performance/accessibility audits)
**Target Platform**: Static hosting (Vercel, Netlify, GitHub Pages, or Cloudflare Pages)
**Project Type**: Static website (single-page-app structure or multi-page static site)
**Performance Goals**:
- Initial page load <3s on 3G
- Time to interactive <5s
- Page navigation <1s
- Lighthouse scores: Performance >90, Accessibility >95, Best Practices >90, SEO >90
**Constraints**:
- MUST work without JavaScript
- MUST be fully static (no server-side rendering at request time)
- MUST support 320px to 2560px responsive range
- MUST meet WCAG 2.1 AA standards
**Scale/Scope**: Personal website with 4 main sections, estimated 5-10 pages initially, potential for 20-50 articles over time

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### Principle I: User Experience First ✅
- **Accessibility (WCAG 2.1 AA)**: PASS - Spec requires semantic HTML, keyboard navigation, screen reader compatibility
- **Performance (<3s load, <1s navigation)**: PASS - Explicitly defined in success criteria (SC-002, SC-003)
- **Mobile-first responsive**: PASS - Requirement FR-006 mandates 320px-2560px responsive design
- **User journey testing**: PASS - Four user stories with detailed acceptance scenarios defined

### Principle II: Simplicity & Maintainability (NON-NEGOTIABLE) ⚠️  PENDING
- **YAGNI compliance**: PENDING - Technology choice will determine if we're adding unnecessary features
- **Minimize dependencies**: PENDING - Static site generator selection must justify each dependency
- **Clear single responsibility**: PASS - Each section has clear purpose (introduction, experience, articles, contact)
- **Avoid over-engineering**: PENDING - Research must validate that chosen solution is simplest viable option

**Action Required**: Phase 0 research MUST evaluate options against simplicity principle

### Principle III: Test-First Development ⚠️  CONDITIONAL
- **Critical features needing tests**: Contact form (if interactive), navigation, responsive layouts
- **Testing tier**: "Important" tier - Integration tests for navigation and responsive layouts; Contact form testing depends on implementation (static email link vs. interactive form)
- **Test specification**: NOT YET DEFINED - Spec does not explicitly request tests

**Note**: Per constitution testing tiers, static content and styling are "Standard" tier (manual testing acceptable). IF contact form is interactive, it becomes "Critical" tier requiring integration tests.

### Principle IV: Technology Flexibility ✅
- **Per-feature technology choice**: PASS - No preset tech stack, will select based on requirements
- **Documentation requirement**: PASS - This plan will document technology selection with justification
- **Prefer boring/proven tech**: PENDING - Research will evaluate maturity and stability
- **Static over dynamic**: PASS - Spec explicitly requires static site (FR-008)

### Gate Status: ⚠️  CONDITIONAL PASS

**Passing**:
- User Experience First requirements met
- Technology Flexibility approach correct
- Core requirements clear

**Pending Research**:
- Simplicity validation (choose minimal viable solution)
- Technology justification (dependency analysis)
- Testing strategy clarification (interactive vs. static contact)

**Decision**: PROCEED to Phase 0 research with mandate to validate simplicity and document technology trade-offs.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
jakobhojgaard.com/                    # Repository root
├── config.toml                       # Hugo configuration
├── content/                          # Markdown content
│   ├── _index.md                    # Homepage (introduction)
│   ├── experience/
│   │   └── _index.md                # Experience section
│   ├── articles/
│   │   ├── _index.md                # Articles listing
│   │   └── *.md                     # Individual articles
│   └── contact/
│       └── _index.md                # Contact page
├── data/
│   └── experience.json              # Experience entries (structured data)
├── layouts/                         # Hugo templates
│   ├── _default/
│   │   ├── baseof.html             # Base template
│   │   ├── single.html             # Single page template
│   │   └── list.html               # List page template
│   ├── partials/
│   │   ├── header.html             # Site header with navigation
│   │   ├── footer.html             # Site footer
│   │   └── head.html               # HTML head (meta tags, CSS)
│   ├── index.html                   # Homepage template
│   └── 404.html                     # Not found page
├── static/                          # Static assets (served as-is)
│   ├── css/
│   │   └── main.css                # Vanilla CSS (no preprocessor)
│   ├── images/                      # Images, photos
│   └── files/                       # Downloadable files (resume, etc.)
├── tests/                           # Playwright integration tests (optional)
│   ├── navigation.spec.js
│   ├── responsive.spec.js
│   └── accessibility.spec.js
├── .github/
│   └── workflows/
│       └── deploy.yml               # CI/CD workflow (if using GitHub Pages)
├── public/                          # Generated site (gitignored)
├── .gitignore
├── CLAUDE.md                        # Agent context file
└── README.md                        # Project README
```

**Structure Decision**: Hugo static site generator structure

**Rationale**:
- **Hugo convention**: Standard Hugo directory layout for content, layouts, static assets
- **content/**: Markdown files organized by section (experience, articles, contact)
- **data/**: JSON for structured data (experience entries) separate from Markdown
- **layouts/**: Go templates for HTML generation
- **static/**: Assets served as-is without processing
- **tests/**: Optional Playwright tests for integration testing
- **public/**: Build output, gitignored, deployed to hosting

**No src/ directory**: Hugo uses content/ and layouts/ instead of traditional src/

**No node_modules**: Hugo is a single binary, no npm dependencies for core site (npm only for optional testing)

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

**Status**: ✅ No violations - All constitutional requirements met

Hugo was selected as the simplest viable solution that satisfies all requirements without over-engineering. Single binary dependency, no complex build tooling, proven technology.

---

## Implementation Summary

### Technology Stack (Final Decision)

| Component | Technology | Justification |
|-----------|------------|---------------|
| **Static Site Generator** | Hugo v0.121+ | Single binary, minimal dependencies, proven (11+ years), excellent performance |
| **Styling** | Vanilla CSS | No build step, modern CSS features sufficient, zero framework overhead |
| **Content Format** | Markdown + YAML | Standard, readable, Hugo-native |
| **Structured Data** | JSON | Simple, Hugo-native data files |
| **Testing** | Playwright + Lighthouse CI | Modern, reliable, performance/accessibility auditing |
| **Hosting** | Vercel (recommended) | Zero config, automatic deploys, CDN, free tier generous |
| **Contact Method** | mailto: link | Zero dependencies, accessible, works without JS |

### Key Architectural Decisions

1. **Hugo over alternatives**: Simplest solution with minimal dependencies that meets all requirements
2. **Vanilla CSS over frameworks**: Modern CSS sufficient, avoids build complexity and framework lock-in
3. **Static email link over form**: Satisfies requirements without adding JavaScript or server-side processing
4. **File-based content over CMS**: Simplest approach for solo developer, version controlled with Git
5. **Integration tests only**: Matches "Important" tier, static content doesn't need unit tests

### Constitutional Compliance: ✅ FULL PASS

- ✅ **User Experience First**: Performance targets, accessibility (WCAG 2.1 AA), responsive design all addressed
- ✅ **Simplicity & Maintainability**: Single binary dependency, no over-engineering, proven technology
- ✅ **Test-First Development**: Integration tests planned for "Important" tier features
- ✅ **Technology Flexibility**: Hugo chosen based on requirements, fully justified in research.md

### Artifacts Generated

1. **research.md**: Technology evaluation and decisions with full rationale
2. **data-model.md**: Content structure and entity schemas
3. **contracts/url-structure.md**: Navigation contract, URL routing, accessibility requirements
4. **quickstart.md**: Developer guide for setup, development, and deployment
5. **CLAUDE.md**: Agent context file (automatically generated)

---

## Next Steps

### Phase 2: Task Generation

Run `/speckit.tasks` to generate dependency-ordered implementation tasks based on this plan.

**Expected task phases**:
1. **Setup**: Initialize Hugo project, configure settings
2. **Foundation**: Base templates (layouts), CSS structure, navigation
3. **User Story 1 (P1)**: Homepage with introduction
4. **User Story 2 (P2)**: Experience section
5. **User Story 4 (P2)**: Contact page
6. **User Story 3 (P3)**: Articles section
7. **Polish**: Testing, performance optimization, deployment

### Implementation (`/speckit.implement`)

After task generation, run `/speckit.implement` to execute tasks and build the site.

### Validation

Before considering complete:
- [ ] All acceptance scenarios pass
- [ ] Lighthouse scores >90 (Performance), >95 (Accessibility), >90 (Best Practices, SEO)
- [ ] Site works without JavaScript
- [ ] Responsive at 320px-2560px
- [ ] Contact email link works
- [ ] Articles section handles zero-article state
- [ ] Navigation accessible via keyboard
- [ ] Content loads <3s on 3G

---

**Plan Status**: ✅ COMPLETE - Ready for task generation (`/speckit.tasks`)
