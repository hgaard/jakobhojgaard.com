<!--
=============================================================================
SYNC IMPACT REPORT
=============================================================================
Version Change: [NONE] → 1.0.0 (Initial constitution)
Rationale: MINOR version (1.0.0) for initial constitution establishment

Modified Principles: N/A (Initial creation)
Added Sections:
  - Core Principles (4 principles)
  - Development Workflow
  - Quality Standards
  - Governance

Removed Sections: N/A (Initial creation)

Templates Requiring Updates:
  ✅ .specify/templates/plan-template.md - Constitution Check section compatible
  ✅ .specify/templates/spec-template.md - Requirements align with principles
  ✅ .specify/templates/tasks-template.md - Task organization supports principles
  ✅ .specify/templates/agent-file-template.md - No updates needed

Follow-up TODOs: None

=============================================================================
-->

# jakobhojgaard.com Constitution

## Core Principles

### I. User Experience First

**Rule**: Every feature and design decision MUST prioritize the end user's experience, accessibility, and ease of interaction.

**Requirements**:
- User journeys MUST be tested and validated before implementation is considered complete
- Accessibility standards (WCAG 2.1 AA minimum) MUST be met for all user-facing features
- Page load performance MUST be measured and optimized (target: <3s initial load, <1s navigation)
- Mobile-first responsive design MUST be implemented for all features
- User feedback MUST be incorporated into feature iteration

**Rationale**: A personal website/portfolio exists to serve visitors. If users cannot easily access content, understand navigation, or experience slow performance, the site fails its primary purpose regardless of code quality.

---

### II. Simplicity & Maintainability (NON-NEGOTIABLE)

**Rule**: Code MUST be simple, readable, and maintainable. Avoid over-engineering and premature optimization.

**Requirements**:
- YAGNI (You Aren't Gonna Need It): Only implement features explicitly required
- No abstractions until the third use case demonstrates clear need
- Code MUST be self-documenting through clear naming; comments only for non-obvious logic
- Dependencies MUST be minimized and justified
- Each feature MUST have a clear, single responsibility
- Refactoring for simplicity is encouraged; complexity MUST be justified in writing

**Rationale**: Personal projects require long-term maintainability without large teams. Simple code remains understandable after months away. Over-engineering creates technical debt that burdens solo developers.

---

### III. Test-First Development

**Rule**: For complex or critical features, tests MUST be written before implementation begins.

**Requirements**:
- High-value user journeys MUST have integration tests
- Critical business logic MUST have unit tests
- Tests MUST fail before implementation (Red-Green-Refactor)
- Test requirements MUST be specified in feature specifications
- Breaking changes MUST be caught by existing tests

**Testing Tiers** (apply based on feature criticality):
1. **Critical**: Contact forms, authentication, data persistence → Integration + Unit tests
2. **Important**: Navigation, content rendering, responsive layouts → Integration tests
3. **Standard**: Static content, styling, cosmetic features → Manual testing acceptable

**Rationale**: Personal websites often have critical features (contact forms, portfolio display) that must work reliably. Tests provide confidence during changes and catch regressions when maintaining code solo.

---

### IV. Technology Flexibility

**Rule**: Technology choices MUST be made per-feature based on requirements, not preset dogma.

**Requirements**:
- Tech stack decisions MUST be documented in feature plans with justification
- Technology selection MUST consider: simplicity, maintenance burden, learning curve, ecosystem maturity
- Prefer boring, proven technologies over cutting-edge unless clear benefit exists
- Each new dependency MUST justify its inclusion (what problem does it solve?)
- Static solutions preferred over dynamic when sufficient

**Rationale**: Personal websites evolve over time. Flexibility allows adopting the right tool for each feature without being locked into premature architectural decisions. This enables starting simple and scaling complexity only when needed.

---

## Development Workflow

**Feature Development Process**:
1. **Specification** (`/speckit.specify`): Define user stories, requirements, success criteria
2. **Planning** (`/speckit.plan`): Research approach, select technologies, outline implementation
3. **Task Generation** (`/speckit.tasks`): Break work into actionable, testable tasks
4. **Implementation** (`/speckit.implement`): Execute tasks with tests where required
5. **Validation**: Verify against acceptance criteria and success metrics

**Branch Strategy**:
- Feature branches: `###-feature-name` format
- Main branch must always be deployable
- Features merged only when acceptance criteria met

**Documentation Requirements**:
- Each feature MUST have a specification in `/specs/[feature-name]/spec.md`
- Implementation plans MUST document technology choices and architecture
- User-facing features MUST include usage documentation

---

## Quality Standards

**Code Quality**:
- Linting and formatting MUST be automated and pass before merge
- Code reviews encouraged for complex features (self-review acceptable for solo development)
- Security best practices MUST be followed (input validation, XSS prevention, secure dependencies)

**Performance Baselines**:
- Initial page load: <3 seconds on 3G connection
- Time to interactive: <5 seconds
- Navigation between pages: <1 second
- Lighthouse score targets: Performance >90, Accessibility >95, Best Practices >90, SEO >90

**Accessibility Requirements**:
- Semantic HTML MUST be used
- ARIA labels MUST be provided where semantic HTML insufficient
- Keyboard navigation MUST work for all interactive elements
- Color contrast MUST meet WCAG 2.1 AA standards minimum

---

## Governance

**Amendment Process**:
1. Proposed changes MUST be documented with rationale
2. Constitution updates MUST use `/speckit.constitution` command
3. Version MUST be incremented per semantic versioning:
   - **MAJOR**: Backward-incompatible principle changes or removals
   - **MINOR**: New principles or substantial guidance additions
   - **PATCH**: Clarifications, wording improvements, typo fixes
4. All dependent templates MUST be reviewed and updated as needed
5. Changes take effect immediately upon merge to main branch

**Compliance Verification**:
- Feature specifications MUST reference applicable principles
- Implementation plans MUST include "Constitution Check" section
- Complexity or principle violations MUST be justified in writing
- Code reviews SHOULD verify constitutional compliance

**Precedence**:
- This constitution supersedes all other development practices
- When in conflict, principles take precedence over convenience
- Documented exceptions require clear justification and limited scope

**Living Document**:
- This constitution evolves with the project's needs
- Regular review encouraged during major feature planning
- Principles should remain stable; guidance sections may adapt

---

**Version**: 1.0.0 | **Ratified**: 2025-12-22 | **Last Amended**: 2025-12-22
