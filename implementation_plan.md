# Implementation Plan: Haven & Co Luxury Real Estate Landing Page

Build a high-performance, premium real estate landing page for Haven & Co that captures leads via a valuation form and showcases featured properties using a sophisticated editorial design.

## User Review Required

> [!IMPORTANT]
> **Environment Variables:** The `.env.local` file was not detected in the current directory. I will proceed assuming the following variables are required and will be available in the environment:
> - `NEXT_PUBLIC_SUPABASE_URL`
> - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
> - `RESEND_API_KEY`
> - `NEXT_PUBLIC_GA_ID` (Google Analytics ID)

> [!WARNING]
> **Python for Business Logic:** Rule 2 in `gemini.md` mentions using Python for business logic. However, the user's specific stack request is Next.js. I will implement lead capture logic as a Next.js Server Action for seamless integration, unless otherwise directed.

## Proposed Changes

### [Phase 1] Project Initialization & Design System

- [NEW] Initialize Next.js project in the root directory.
- [NEW] Setup `tailwind.config.ts` with brand tokens:
  - Colors: `hero-bg (#0A0A0A)`, `light-bg (#FAFAF8)`, `gold (#B8965A)`, `dark-text (#1A1A1A)`.
  - Typography: `Cormorant Garamond` (Headings), `Plus Jakarta Sans` (Body).
- [NEW] Initialize `shadcn/ui` and add components: `Button`, `Input`, `Accordion`, `Select`, `Card`, `Badge`.
- [NEW] Global CSS setup for smooth transitions and dark-to-light theme switching.

---

### [Phase 2] Component Architecture (10 Sections)

#### [NEW] `src/components/Navbar.tsx`
- Floating pill structure.
- Dark/Light dynamic theme toggle on scroll using intersection observer.

#### [NEW] `src/components/Hero.tsx`
- Background: Full bleed property photo with dark overlay.
- GSAP animations: Staggered slide-up for "Find Your Perfect Home."
- Dark glassmorphism search bar (Location, Type, Price, Search).

#### [NEW] `src/components/FeaturedProperties.tsx`
- Asymmetric grid layout (60/38, 38/60 mix).
- Property cards with hover zoom and gold badges.
- Filter tabs state management.

#### [NEW] `src/components/StatsTrust.tsx`
- Full-width count-up stats with gold dividers.
- GSAP scroll triggers for count animations.

#### [NEW] `src/components/Services.tsx`
- 3 varied cards (Large/Dark, Medium/Light, Medium/Gold-accented).

#### [NEW] `src/components/MeetTheAgent.tsx`
- Two-column split: Agent photo and trust badges.
- Luxurious italic typography for mission statement.

#### [NEW] `src/components/Testimonials.tsx`
- Horizontal carousel with gold arrow navigation.

#### [NEW] `src/components/ValuationForm.tsx`
- Premium white card form for lead capture.
- Form validation with Zod and React Hook Form.

#### [NEW] `src/components/FAQ.tsx`
- Minimalist accordion list (border-bottom only).

#### [NEW] `src/components/Footer.tsx`
- Large animated "HAVEN & CO" logo.
- 3-column quick links and contact info.

---

### [Phase 3] Backend & Integrations

#### [NEW] `src/lib/supabase.ts`
- Client initialization for anonymous inserts into the `leads` table.

#### [NEW] `src/app/actions/lead-capture.ts`
- Server action to handle valuation form submissions.
- Integration with **Resend** for email notifications to `solomonfiverr98@gmail.com`.

#### [NEW] `src/components/Analytics.tsx`
- Google Analytics configuration for conversion tracking.

---

### [Phase 4] Animations & Polish

- [NEW] GSAP entrance animations for each section on scroll.
- [NEW] Infinite scroll marquee for trust badges (as needed).
- [NEW] Mobile responsiveness check for all sections.

## Open Questions

1. **Environment Variables:** Can you confirm if `.env.local` is already in a specific location I might have missed, or should I create it based on your credentials?
2. **Property Data:** I will use the 6 specific properties listed in your prompt as hardcoded demo data. Is there a need for any specific image sourcing beyond the Unsplash links provided?

## Verification Plan

### Automated Tests
- `npm run build` will be executed to ensure zero build errors.
- Lighthouse/Performance check for high benchmarks.

### Manual Verification
- **Cross-Browser/Responsive:** Test at 375px (Mobile), 768px (Tablet), and 1440px (Desktop).
- **Functionality:** Test valuation form submission and verify Supabase insert and Resend email arrival.
- **GSAP:** Verify all scroll animations trigger as expected.
