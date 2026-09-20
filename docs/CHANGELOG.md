# Changelog

All notable changes to the Shri Andavar Eye Care project.

## [2026-09-20]

### Components & Layout
- **Floating Action Buttons (`FloatingActionButtons.tsx`):** Replaced LinkedIn icon with a Call button. Features a popup modal on desktop (showing landline & mobile numbers) and direct primary number dialing on mobile.
- **Header & Navigation (`Header.tsx`):** Enhanced mobile menu and responsive layout styling.
- **Gallery & Treatments Polish:** Adjusted hero styling and bento service grid elements.

## [2026-09-19]

### Global & Components
- **Clinic Hours Logic (`clinicHours.ts`):** Enhanced realtime open/closed clinic status evaluation with support for dual daily sessions (10am-2pm & 5pm-7pm) and Sunday closures.
- **Sticky Call Bar (`StickyCallBar.tsx`):** Added live open/closed status badge and responsive bilingual action buttons for phone calls and directions.
- **Bilingual & Layout Polish:** Updated bilingual copy (English/Tamil) and responsive styling across About, Cataract Surgery, Patient Stories, Schemes, and Visiting Specialists components.

## [2026-09-17]

### `/community` Page Overhaul
- **Interactive Camp Carousels:** Replaced static grid with `CommunityCamps` and `CampCarousel` components featuring interactive multi-photo carousels.
- **Medical Camp Content:** Added bilingual coverage (English & Tamil) for free medical camps:
  - Free Medical Camp at Kanjampatti (Jan 23, 2026)
  - Free Medical Camp (Feb 19, 2026)
  - General Medical Camp at RTO Premises (Aug 19, 2026)
- **Documentation & Assets:** Added camp photo documentation under `docs/` and public assets under `/public/images/camps/`.

## [2026-09-16]

### Global & Architecture
- **Floating Action Buttons:** Added a persistent `FloatingActionButtons` component to `RootLayout` (`src/app/layout.tsx`) providing quick access to Google Maps location and social links.
- **Bilingual Support:** Integrated dual-language (English/Tamil) labels across navigation headers, footers, home sections, and page components.
- **Typography:** Tightened global typography by reducing line heights for all headings (`h1`-`h4`) and body text.
- **Navigation:** Added "Home" and "Community" links to the main Navbar and Footer with localized labels.
- **Copywriting:** Renamed "Our Surgeon" to "Our Surgeons" site-wide across all navigation menus and footers.
- **Footer:** Standardized the layout by applying the Home page footer components universally across all pages with bilingual support.

### `/community` Page
- **Page Creation:** Built the complete Community & CSR page (`/community`) featuring `CommunityHero` and `CommunityGrid` to highlight free eye camps, outreach programs, and social impact initiatives.

### Home Page (`/`)
- **Layout Rhythm:** Reordered the page by moving the `FactStrip` directly below the `Hero` section.
- **Visual Contrast:** Restored the alternating background colors (`var(--bg)` and `var(--bg-alt)`) across all sections to prevent them from visually blurring together.
- **Typography Polish:** Cleaned up text formatting by removing unnecessary dashes in the `FactStrip` ("Morning and evening") and the "In short" components.
- **Accent Colors:** Applied the primary brand accent color to specific metadata tags ("Founded", "Focus", "Languages").

### `/about` Page
- **Hero Section:** Restructured the hero by moving the hospital image to the background and increasing spacing between the heading and body text.
- **Content Blocks:** 
  - Adjusted alignment on the "Getting here" block so headings align cleanly to the top line.
  - Fixed a frustrating whitespace rendering bug in the italicized text (*Restoring Vision* with Precision).
- **FAQ Section:** Scaled down the entire FAQ section (reduced font sizes and padding) to prevent it from overpowering the page.
- **Hover States:** Refined CSS hover states on the CTA cards so color changes trigger only on the button itself, not the entire card.
- **Light Mode:** Updated specific sections to enforce a clean white background (`var(--bg)`).
- **External Media:** Configured `next.config.ts` to allow external images from Unsplash.

### `/cataract-surgery` Page
- **Page Creation:** Built the complete Cataract Surgery page from scratch.
- **Vision Slider:** Implemented a sleek interactive vertical slider component to showcase vision options.
- **Grid Alignment:** Updated the "Choosing your new vision" grid to `align-items: flex-start`, reduced internal spacing, and resized the 3rd box to match the uniformity of the others.

### `/patient-stories` Page
- **Page Creation:** Built the Patient Stories and reviews page.
- **Bento Grid:** Replaced the initial masonry layout with a structured, compact CSS Bento Grid for rendering patient reviews cleanly.

### `/schemes` Page
- **Page Creation:** Built the Insurance Schemes page.
- **Alignment Fixes:** Forced all scheme card titles (e.g. "CM's Comprehensive Health Insurance", "Pensioners Health Scheme", "Star Health Insurance") to exactly 2 lines. This ensured all corresponding body paragraphs aligned perfectly at the exact same vertical pixel.
- **React Bug Fix:** Resolved a hydration/render crash (`Encountered two children with the same key [object Object]`) by switching the React map keys from the title JSX element to the unique `tagEn` string.
- **"No Scheme" Section Overhaul:** 
  - Removed buggy GSAP ScrollTrigger pinning logic that was causing the section to awkwardly overlap.
  - Reduced excessive top padding.
  - Converted the large full-width box into a tight, centered, small rectangle (`max-width: 480px`).

### `/our-surgeon` Page
- **Hero Layout tweaks:** 
  - Reduced the top gap padding to exactly match the bottom padding (120px).
  - Extended the doctor's portrait image downwards so it stretches to align perfectly with the bottom row of the qualification boxes.
  - Increased the vertical spacing below the "Dr. A. Raghuram" heading.
- **Custom Icons:** Replaced generic checkmarks/shields on the qualification boxes with distinct Lucide SVGs (Heartbeat/Cross for MBBS, Mortarboard for DNB, Globe for UK FICO, Medal for FRCS).

---

## [2026-09-15]

### Project Setup & Analysis
- **Research:** Systematically analyzed the reference website (`aadithyaeyecare.com`) and extracted core requirements and styling concepts.
- **Planning:** Created deep-dive implementation plans for all major pages based on the project requirements.

### `/treatments` Page
- **Page Creation:** Built the Treatments directory page.
- **UI Redesign:** Dropped the overly long vertical accordion layout in favor of a sleek Bento Box Grid for easier visual scanning.
- **Bilingual Localization:** Fully translated all treatment service titles, descriptions, and sub-items into Tamil (`titleTa`, `descTa`, `subItemsTa`) across the Bento Grid and Hero section.
- **Information Architecture:** Merged the "Visit Us" link concept from the header directly into the About page flow.
- **Bug Fixes:** Resolved a minor TypeScript `any` error in the SVG icons.

### `/our-surgeon` Page
- **Prototyping:** Used StitchMCP to generate visual UI prototypes for the hero section, ultimately selecting Option 3 for the final build.
- **Foundation:** Built the structural components for the surgeon profile.
- **Content Updates:** Refined Tamil/English translations, updated scheme details (e.g. replacing Star Health Insurance with "Other Private Insurances"), and streamlined copy across various sections including the Treatments Hero, Surgeon Profile, and Home components.
