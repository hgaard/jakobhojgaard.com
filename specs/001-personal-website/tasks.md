# Tasks: Static Personal Website

**Input**: Design documents from `/specs/001-personal-website/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests**: Per constitution, this feature is "Standard" tier for static content - manual testing acceptable. No automated tests required unless specifically requested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- Hugo static site structure: `content/`, `layouts/`, `static/`, `data/` at repository root
- Paths shown below use Hugo conventions

---

## Phase 1: Setup

**Purpose**: Project initialization and Hugo setup

- [ ] T001 Install Hugo v0.121+ (verify with hugo version)
- [ ] T002 Initialize Hugo site in repository root with hugo new site command
- [ ] T003 Create Hugo configuration in config.toml with site title, baseURL, language settings
- [ ] T004 [P] Create directory structure: content/, data/, layouts/, static/css/, static/images/, static/files/
- [ ] T005 [P] Update .gitignore to ignore public/, resources/_gen/, .hugo_build.lock

**Checkpoint**: Hugo project initialized, directory structure ready

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Create base template in layouts/_default/baseof.html with HTML5 structure, head, body blocks
- [ ] T007 Create head partial in layouts/partials/head.html with meta tags, title, CSS link, Open Graph tags
- [ ] T008 Create header partial in layouts/partials/header.html with site navigation (Home, Experience, Articles, Contact)
- [ ] T009 Create footer partial in layouts/partials/footer.html with copyright and minimal footer content
- [ ] T010 Create CSS structure in static/css/main.css with CSS reset, base styles, responsive breakpoints
- [ ] T011 Implement responsive navigation in static/css/main.css for mobile (320px+), tablet (768px+), desktop (1024px+)
- [ ] T012 Add accessibility features to navigation: semantic HTML nav element, ARIA labels, keyboard focus states
- [ ] T013 Create 404 page template in layouts/404.html with helpful error message and navigation links
- [ ] T014 Test Hugo build runs successfully with hugo command
- [ ] T015 Test Hugo dev server runs with hugo server and shows base layout at localhost:1313

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - First-Time Visitor Introduction (Priority: P1) 🎯 MVP

**Goal**: Visitors can view homepage introduction and understand Jakob's professional identity

**Independent Test**: Load homepage (localhost:1313/), verify introduction is visible, readable, loads <3s

### Implementation for User Story 1

- [ ] T016 [US1] Create homepage content file in content/_index.md with YAML front matter (title, tagline, description, type)
- [ ] T017 [US1] Write placeholder introduction content in content/_index.md (100-500 words about Jakob's identity and focus)
- [ ] T018 [US1] Create homepage template in layouts/index.html extending baseof.html, rendering title, tagline, and content
- [ ] T019 [US1] Style homepage introduction in static/css/main.css with typography, spacing, max-width for readability
- [ ] T020 [US1] Implement responsive layout for introduction section (mobile-first, 320px-2560px)
- [ ] T021 [US1] Add semantic HTML to introduction (proper heading hierarchy H1 for name, section tags)
- [ ] T022 [US1] Verify accessibility: keyboard navigation works, focus visible, color contrast meets WCAG 2.1 AA
- [ ] T023 [US1] Test without JavaScript: verify site fully functional with JS disabled in browser
- [ ] T024 [US1] Test performance: run hugo build, serve public/ folder, verify <3s load on throttled connection

**Checkpoint**: At this point, User Story 1 (MVP) should be fully functional and testable independently

---

## Phase 4: User Story 2 - Exploring Professional Experience (Priority: P2)

**Goal**: Visitors can navigate to experience section and view detailed professional background

**Independent Test**: Navigate to /experience/, verify experience entries display in organized, readable format

### Implementation for User Story 2

- [ ] T025 [US2] Create experience section page in content/experience/_index.md with front matter (title, description)
- [ ] T026 [US2] Create experience data file in data/experience.json with JSON array structure per data-model.md schema
- [ ] T027 [US2] Add sample experience entry to data/experience.json (role, organization, dates, responsibilities, achievements, skills)
- [ ] T028 [US2] Create experience listing template (layouts/experience/list.html or layouts/_default/list.html for experience section)
- [ ] T029 [US2] Implement experience entry rendering in template: loop through site.Data.experience, display each entry
- [ ] T030 [US2] Format dates in template: convert "2020-01" to "Jan 2020", handle current role (endDate null → "Present")
- [ ] T031 [US2] Style experience section in static/css/main.css: chronological layout, clear visual hierarchy, responsive design
- [ ] T032 [US2] Add semantic HTML: each experience as article element, proper heading levels, lists for responsibilities/achievements
- [ ] T033 [US2] Test responsive design: verify readable layout on mobile (320px), tablet (768px), desktop (1024px+)
- [ ] T034 [US2] Test navigation: verify visitors can navigate from homepage to experience and back

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 4 - Contacting for Advisory Services (Priority: P2)

**Goal**: Visitors can navigate to contact section and use mailto link to reach out

**Independent Test**: Navigate to /contact/, verify contact information and mailto link are displayed

**Note**: Contact implemented before Articles (US3) as it's higher priority (P2 vs P3)

### Implementation for User Story 4

- [ ] T035 [US4] Create contact page in content/contact/_index.md with front matter (title, description, email, advisoryFocus, responseTime)
- [ ] T036 [US4] Write contact page content in content/contact/_index.md describing advisory services (100-400 words)
- [ ] T037 [US4] Create contact page template (layouts/contact/single.html or use _default/single.html)
- [ ] T038 [US4] Implement mailto link in template: `<a href="mailto:{{ .Params.email }}?subject=Advisory Inquiry">`
- [ ] T039 [US4] Display advisoryFocus and responseTime from front matter in template
- [ ] T040 [US4] Style contact section in static/css/main.css: clear call-to-action, readable layout, prominent email link
- [ ] T041 [US4] Add semantic HTML and accessibility: descriptive link text, proper heading structure
- [ ] T042 [US4] Test responsive design: verify email link is clickable/tappable on mobile (touch target ≥44x44px)
- [ ] T043 [US4] Test mailto link: click link on desktop and mobile, verify email client opens with pre-filled subject

**Checkpoint**: User Stories 1, 2, and 4 are now independently functional

---

## Phase 6: User Story 3 - Reading Articles (Priority: P3)

**Goal**: Visitors can view articles listing and read individual articles, with graceful zero-article state

**Independent Test**: Navigate to /articles/, verify article list or "coming soon" message, click article to read content

### Implementation for User Story 3

- [ ] T044 [US3] Create articles section page in content/articles/_index.md with front matter (title, description)
- [ ] T045 [US3] Implement zero-article state handling in articles listing template (check if len .Pages == 0)
- [ ] T046 [US3] Create articles listing template in layouts/articles/list.html (or layouts/_default/list.html for articles)
- [ ] T047 [US3] Display "coming soon" message when no articles: "Articles coming soon. Check back for thoughts on technology, software architecture, and leadership."
- [ ] T048 [US3] Create sample article in content/articles/sample-article.md with YAML front matter (title, date, draft: false, summary, tags, readingTime)
- [ ] T049 [US3] Write sample article content (minimum 300 words) in Markdown with headings, paragraphs, lists
- [ ] T050 [US3] Implement article listing template: display article cards with title, date, summary, reading time, tags
- [ ] T051 [US3] Sort articles by date descending (newest first) in listing template
- [ ] T052 [US3] Create individual article template in layouts/articles/single.html (or layouts/_default/single.html)
- [ ] T053 [US3] Render article metadata in template: title (H1), date, reading time, tags, content body
- [ ] T054 [US3] Add "Back to Articles" link in article template
- [ ] T055 [US3] Style articles listing in static/css/main.css: card layout, clear typography, hover states for links
- [ ] T056 [US3] Style individual articles in static/css/main.css: readable typography, proper heading hierarchy, code blocks if present
- [ ] T057 [US3] Implement responsive design for articles: mobile-friendly listing, readable article body on all devices
- [ ] T058 [US3] Add semantic HTML: article elements, time elements for dates, proper heading structure
- [ ] T059 [US3] Test zero-article state: remove sample article (set draft: true), verify "coming soon" message displays
- [ ] T060 [US3] Test article reading flow: click article from list, read content, navigate back, repeat

**Checkpoint**: All user stories (1, 2, 3, 4) should now be independently functional

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final deployment prep

- [ ] T061 [P] Add SEO meta tags to head partial: Open Graph tags, Twitter Card tags, canonical URL
- [ ] T062 [P] Implement Skip to Content link for accessibility in header partial (visually hidden, screen reader accessible)
- [ ] T063 [P] Verify all pages have unique, descriptive title tags with " | Jakob Højgaard" suffix
- [ ] T064 [P] Add favicon and app icons in static/ directory, reference in head partial
- [ ] T065 [P] Optimize CSS: minify, remove unused styles, ensure mobile-first approach
- [ ] T066 Test full site navigation: verify all links work, no broken navigation, can reach all sections from anywhere
- [ ] T067 Test responsive design across all pages: verify 320px (mobile), 768px (tablet), 1024px (desktop), 1440px+ (large)
- [ ] T068 Test keyboard accessibility: Tab through all interactive elements, verify focus visible, no keyboard traps
- [ ] T069 Test with screen reader (VoiceOver on Mac, NVDA on Windows): verify semantic HTML, ARIA labels work
- [ ] T070 Test without JavaScript: disable JS in browser, verify all functionality works (navigation, links, content display)
- [ ] T071 Run Lighthouse audit in Chrome DevTools: verify Performance >90, Accessibility >95, Best Practices >90, SEO >90
- [ ] T072 Fix any Lighthouse issues: address performance warnings, accessibility violations, best practice failures
- [ ] T073 Test on 3G throttled connection: verify homepage loads <3s, navigation <1s using DevTools network throttling
- [ ] T074 Create README.md with project overview, Hugo version requirement, build/dev instructions
- [ ] T075 Add deployment configuration for Vercel: create vercel.json or rely on auto-detection (Hugo framework)
- [ ] T076 Test production build: run hugo --minify, verify public/ folder generates correctly
- [ ] T077 Deploy to Vercel: connect GitHub repo, configure build settings (hugo --minify, public/ output)
- [ ] T078 Configure custom domain jakobhojgaard.com in Vercel, update DNS records
- [ ] T079 Verify HTTPS enabled and working on jakobhojgaard.com
- [ ] T080 Final smoke test on production: test all user stories on live site, verify performance and functionality

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phases 3-6)**: All depend on Foundational phase completion
  - User Story 1 (P1 - MVP): Can start after Foundational - No dependencies on other stories
  - User Story 2 (P2 - Experience): Can start after Foundational - No dependencies on other stories
  - User Story 4 (P2 - Contact): Can start after Foundational - No dependencies on other stories
  - User Story 3 (P3 - Articles): Can start after Foundational - No dependencies on other stories
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories ✅ Independent
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories ✅ Independent
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories ✅ Independent
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories ✅ Independent

**Key Insight**: All user stories are independently implementable after Foundation phase completes. This enables parallel development or incremental delivery in priority order.

### Within Each User Story

- Content files before templates (Hugo needs content to render)
- Templates before styling (need HTML structure to style)
- Core implementation before responsive/accessibility enhancements
- Story complete before moving to next priority

### Parallel Opportunities

- **Setup tasks T004-T005** can run in parallel (different concerns)
- **Foundational tasks T007-T009** (partials) can run in parallel (different files)
- **After Foundation completes**: ALL user stories can start in parallel (if team capacity allows)
- **Polish tasks T061-T065** can run in parallel (different files/concerns)

---

## Parallel Example: After Foundation Phase

```bash
# If working solo, pick priority order:
1. Complete User Story 1 (P1 - MVP) → Deploy immediately for feedback
2. Add User Story 2 (P2 - Experience) → Enhance credibility
3. Add User Story 4 (P2 - Contact) → Enable conversions
4. Add User Story 3 (P3 - Articles) → Add thought leadership

# If working with team, parallelize:
Developer A: User Story 1 (P1 - Introduction)
Developer B: User Story 2 (P2 - Experience)
Developer C: User Story 4 (P2 - Contact)
# Then all converge on User Story 3 or Polish phase
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T005)
2. Complete Phase 2: Foundational (T006-T015) - CRITICAL
3. Complete Phase 3: User Story 1 (T016-T024)
4. **STOP and VALIDATE**: Test homepage independently, verify acceptance scenarios
5. Deploy MVP to Vercel for early feedback

**At this point**: Visitors can land on jakobhojgaard.com, understand who Jakob is, see professional introduction. This is a viable MVP.

### Incremental Delivery

1. **Foundation** (Setup + Foundational) → T001-T015 complete
2. **MVP** (Add US1) → T016-T024 complete → **Deploy** (visitors understand Jakob's identity)
3. **Experience** (Add US2) → T025-T034 complete → **Deploy** (visitors see professional credibility)
4. **Contact** (Add US4) → T035-T043 complete → **Deploy** (visitors can reach out for advisory)
5. **Articles** (Add US3) → T044-T060 complete → **Deploy** (thought leadership showcase)
6. **Production** (Polish) → T061-T080 complete → **Final deploy** with optimization

Each increment adds value without breaking previous functionality.

### Parallel Team Strategy

With multiple developers after Foundation completes:

1. **Team completes**: Setup + Foundational together (T001-T015)
2. **Once T015 passes**:
   - Developer A: User Story 1 (T016-T024)
   - Developer B: User Story 2 (T025-T034)
   - Developer C: User Story 4 (T035-T043)
3. **Converge**: All review each other's work, test integration
4. **Final sprint**: User Story 3 (T044-T060) together
5. **Polish**: Divide T061-T080 based on expertise

---

## Notes

- Hugo-specific: Use `hugo new` command to create content files with proper front matter
- [P] tasks = different files/concerns, no blocking dependencies
- [Story] label maps task to specific user story for traceability (US1, US2, US3, US4)
- Each user story should be independently completable and testable
- Commit after each task or logical group of related tasks
- Stop at any checkpoint to validate story independently
- **No automated tests**: Manual testing per constitution "Standard" tier for static content
- **Test without JavaScript**: Required constraint (FR-012), verify at multiple checkpoints
- **Responsive testing**: Use browser DevTools device emulation for mobile/tablet/desktop viewports
- **Accessibility testing**: Use browser DevTools Lighthouse, manual keyboard testing, screen reader testing
- Avoid: vague tasks, cross-story dependencies that break independence, skipping responsive/accessibility work

---

## Task Count Summary

- **Total Tasks**: 80
- **Setup Phase**: 5 tasks
- **Foundational Phase**: 10 tasks (BLOCKING)
- **User Story 1 (P1 - MVP)**: 9 tasks
- **User Story 2 (P2 - Experience)**: 10 tasks
- **User Story 4 (P2 - Contact)**: 9 tasks
- **User Story 3 (P3 - Articles)**: 17 tasks
- **Polish & Deployment**: 20 tasks

**Parallel Opportunities**: 14 tasks marked [P] can run in parallel when dependencies met

**MVP Scope**: Tasks T001-T024 (24 tasks total) deliver a working homepage with introduction

**Independent Stories**: All 4 user stories can be developed independently after Foundation phase
